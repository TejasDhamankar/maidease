import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";

export const runtime = "nodejs";

const uploadDir = path.join(process.cwd(), "public", "uploads", "job-applications");
const aadhaarTypes = new Set(["application/pdf", "image/jpeg", "image/png"]);
const photoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function saveUpload(file: File | null, field: "aadhaarCard" | "photo") {
  if (!file || file.size === 0) return "";

  const allowedTypes = field === "aadhaarCard" ? aadhaarTypes : photoTypes;
  if (!allowedTypes.has(file.type)) {
    throw new Error(field === "aadhaarCard" ? "Aadhaar must be PDF, JPG, or PNG." : "Photo must be JPG, PNG, or WEBP.");
  }

  await mkdir(uploadDir, { recursive: true });
  const extension = path.extname(file.name).toLowerCase() || (file.type === "application/pdf" ? ".pdf" : ".jpg");
  const fileName = `${field}-${Date.now()}-${randomUUID()}${extension}`;
  const diskPath = path.join(uploadDir, fileName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(diskPath, bytes);

  return `/uploads/job-applications/${fileName}`;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const mobileNumber = getText(formData, "mobileNumber");

    const requiredFields = [
      "fullName",
      "mobileNumber",
      "category",
      "maritalStatus",
      "religion",
      "gender",
      "passportAvailable",
      "education",
      "workingHours",
      "homeAddress",
      "preferredWorkLocation",
      "signature",
      "applicationDate",
    ];

    const missingField = requiredFields.find((field) => !getText(formData, field));
    if (missingField) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      return NextResponse.json({ error: "Mobile number must be 10 digits." }, { status: 400 });
    }

    const aadhaarFile = formData.get("aadhaarCard");
    const photoFile = formData.get("photo");
    const aadhaarCardPath = await saveUpload(aadhaarFile instanceof File ? aadhaarFile : null, "aadhaarCard");
    const photoPath = await saveUpload(photoFile instanceof File ? photoFile : null, "photo");

    await connectToDatabase();

    const application = await JobApplication.create({
      fullName: getText(formData, "fullName"),
      mobileNumber,
      category: getText(formData, "category"),
      maritalStatus: getText(formData, "maritalStatus"),
      age: Number(getText(formData, "age")) || undefined,
      religion: getText(formData, "religion"),
      gender: getText(formData, "gender"),
      passportAvailable: getText(formData, "passportAvailable"),
      education: getText(formData, "education"),
      workingHours: getText(formData, "workingHours"),
      homeAddress: getText(formData, "homeAddress"),
      preferredWorkLocation: getText(formData, "preferredWorkLocation"),
      expectedSalary: Number(getText(formData, "expectedSalary")) || undefined,
      salaryRange: "Rs. 1,000 to Rs. 30,000",
      totalExperience: Number(getText(formData, "totalExperience")) || undefined,
      aadhaarCardPath,
      photoPath,
      languagesKnown: formData.getAll("languagesKnown").filter((value): value is string => typeof value === "string"),
      signature: getText(formData, "signature"),
      applicationDate: getText(formData, "applicationDate"),
    });

    return NextResponse.json({ message: "Job application submitted successfully", application }, { status: 201 });
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to submit job application." },
      { status: 500 }
    );
  }
}
