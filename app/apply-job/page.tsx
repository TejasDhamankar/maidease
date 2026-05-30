"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { BriefcaseBusiness, CheckCircle2, UploadCloud } from "lucide-react";
import { inquiryServices } from "@/lib/inquiry";

type FormValues = {
  fullName: string;
  mobileNumber: string;
  category: string;
  maritalStatus: string;
  age: string;
  religion: string;
  gender: string;
  passportAvailable: string;
  education: string;
  workingHours: string;
  homeAddress: string;
  preferredWorkLocation: string;
  expectedSalary: string;
  totalExperience: string;
  languagesKnown: string[];
  signature: string;
  applicationDate: string;
};

type ErrorKey = keyof FormValues | "aadhaarCard" | "photo";
type FormErrors = Partial<Record<ErrorKey, string>>;
type Option = { value: string; label: string };

const initialValues: FormValues = {
  fullName: "",
  mobileNumber: "",
  category: "",
  maritalStatus: "",
  age: "",
  religion: "",
  gender: "",
  passportAvailable: "",
  education: "",
  workingHours: "",
  homeAddress: "",
  preferredWorkLocation: "",
  expectedSalary: "",
  totalExperience: "",
  languagesKnown: [],
  signature: "",
  applicationDate: new Date().toISOString().slice(0, 10),
};

const maritalStatusOptions: Option[] = [
  { value: "Married", label: "Married / विवाहित" },
  { value: "Unmarried", label: "Unmarried / अविवाहित" },
  { value: "Separated", label: "Separated / अलग रह रहे हैं" },
  { value: "Widow/Widower", label: "Widow/Widower / विधवा/विधुर" },
];

const religionOptions: Option[] = [
  { value: "Hindu", label: "Hindu / हिंदू" },
  { value: "Muslim", label: "Muslim / मुस्लिम" },
  { value: "Catholic", label: "Catholic / कैथोलिक" },
];

const genderOptions: Option[] = [
  { value: "Female", label: "Female / महिला" },
  { value: "Male", label: "Male / पुरुष" },
];

const yesNoOptions: Option[] = [
  { value: "Yes", label: "Yes / हाँ" },
  { value: "No", label: "No / नहीं" },
];

const educationOptions: Option[] = [
  { value: "Below 5th Standard", label: "Below 5th Standard / 5वीं से कम" },
  { value: "5th Standard and Above", label: "5th Standard and Above / 5वीं या उससे अधिक" },
  { value: "10th Standard and Above", label: "10th Standard and Above / 10वीं या उससे अधिक" },
];

const workingHoursOptions: Option[] = [
  { value: "1 to 12 Hours", label: "1 to 12 Hours / 1 से 12 घंटे" },
  { value: "Full 24 Hours", label: "Full 24 Hours / 24 घंटे" },
];

const languageOptions: Option[] = [
  { value: "Hindi", label: "Hindi / हिंदी" },
  { value: "English", label: "English / अंग्रेज़ी" },
  { value: "Marathi", label: "Marathi / मराठी" },
  { value: "Other", label: "Other / अन्य" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-semibold text-red-600">{message}</p>;
}

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-extrabold text-[#12345b]">
      {children}
      {required ? <span className="ml-1 text-orange-500">*</span> : null}
    </label>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(18,52,91,0.06)] md:p-5">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-[#12345b]">
        <CheckCircle2 className="size-4 text-orange-500" />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ApplyJobPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [aadhaarCard, setAadhaarCard] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categoryOptions = useMemo(() => inquiryServices, []);

  const setValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const toggleLanguage = (language: string) => {
    setValues((current) => ({
      ...current,
      languagesKnown: current.languagesKnown.includes(language)
        ? current.languagesKnown.filter((item) => item !== language)
        : [...current.languagesKnown, language],
    }));
    setErrors((current) => ({ ...current, languagesKnown: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!/^\d{10}$/.test(values.mobileNumber)) nextErrors.mobileNumber = "Mobile number must be exactly 10 digits.";
    if (!values.category) nextErrors.category = "Please select a category.";
    if (!values.maritalStatus) nextErrors.maritalStatus = "Please select marital status.";
    if (values.age && Number(values.age) <= 0) nextErrors.age = "Age must be valid.";
    if (!values.religion) nextErrors.religion = "Please select religion.";
    if (!values.gender) nextErrors.gender = "Please select gender.";
    if (!values.passportAvailable) nextErrors.passportAvailable = "Please select passport availability.";
    if (!values.education) nextErrors.education = "Please select education.";
    if (!values.workingHours) nextErrors.workingHours = "Please select working hours.";
    if (!values.homeAddress.trim()) nextErrors.homeAddress = "Home address is required.";
    if (!values.preferredWorkLocation.trim()) nextErrors.preferredWorkLocation = "Preferred work location is required.";
    if (values.expectedSalary && Number(values.expectedSalary) < 0) nextErrors.expectedSalary = "Expected salary must be valid.";
    if (values.totalExperience && Number(values.totalExperience) < 0) nextErrors.totalExperience = "Experience must be valid.";
    if (values.languagesKnown.length === 0) nextErrors.languagesKnown = "Select at least one language.";
    if (!values.signature.trim()) nextErrors.signature = "Signature is required.";
    if (!values.applicationDate) nextErrors.applicationDate = "Date is required.";
    if (aadhaarCard && !["application/pdf", "image/jpeg", "image/png"].includes(aadhaarCard.type)) {
      nextErrors.aadhaarCard = "Aadhaar upload must be PDF, JPG, or PNG.";
    }
    if (photo && !["image/jpeg", "image/png", "image/webp"].includes(photo.type)) {
      nextErrors.photo = "Photo must be JPG, PNG, or WEBP.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const form = event.currentTarget;
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "languagesKnown") formData.append(key, value as string);
    });
    values.languagesKnown.forEach((language) => formData.append("languagesKnown", language));
    if (aadhaarCard) formData.append("aadhaarCard", aadhaarCard);
    if (photo) formData.append("photo", photo);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/job-applications", { method: "POST", body: formData });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to submit application.");
      toast.success("Job application submitted successfully.");
      setValues({ ...initialValues, applicationDate: new Date().toISOString().slice(0, 10) });
      setAadhaarCard(null);
      setPhoto(null);
      setErrors({});
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm font-semibold outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100";
  const selectClass = `${inputClass} bg-white`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff8f3] via-white to-slate-50 px-3 pb-16 pt-24 text-[#12345b] sm:px-4 lg:pt-28">
      <section className="mx-auto max-w-5xl">
        <div className="mb-5 overflow-hidden rounded-xl bg-[#12345b] text-white shadow-[0_18px_45px_rgba(18,52,91,0.2)]">
          <div className="flex flex-col gap-4 bg-[radial-gradient(circle_at_top_right,rgba(255,111,15,0.28),transparent_32%)] p-4 sm:p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-orange-300">BB Hospitality</p>
              <h1 className="mt-2 text-2xl font-black leading-tight sm:text-3xl md:text-4xl">APPLY FOR A JOB</h1>
              <p className="mt-1 text-lg font-extrabold text-orange-200 sm:text-xl md:text-2xl">नौकरी के लिए आवेदन करें</p>
            </div>
            <div className="flex size-14 items-center justify-center rounded-xl bg-white/10 text-orange-300 ring-1 ring-white/10">
              <BriefcaseBusiness className="size-8" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-4">
          <Section title="Personal Details / व्यक्तिगत जानकारी">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="fullName" required>Full Name / पूरा नाम</FieldLabel>
                <input id="fullName" value={values.fullName} onChange={(event) => setValue("fullName", event.target.value)} className={inputClass} />
                <FieldError message={errors.fullName} />
              </div>
              <div>
                <FieldLabel htmlFor="mobileNumber" required>Mobile Number / मोबाइल नंबर</FieldLabel>
                <input id="mobileNumber" inputMode="numeric" value={values.mobileNumber} maxLength={10} onChange={(event) => setValue("mobileNumber", event.target.value.replace(/\D/g, "").slice(0, 10))} className={inputClass} />
                <FieldError message={errors.mobileNumber} />
              </div>
              <div>
                <FieldLabel htmlFor="category" required>Category / श्रेणी</FieldLabel>
                <select id="category" value={values.category} onChange={(event) => setValue("category", event.target.value)} className={selectClass}>
                  <option value="">Select category</option>
                  {categoryOptions.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
                <FieldError message={errors.category} />
              </div>
              <div>
                <FieldLabel htmlFor="age">Age / आयु</FieldLabel>
                <input id="age" type="number" min="1" value={values.age} onChange={(event) => setValue("age", event.target.value)} className={inputClass} />
                <FieldError message={errors.age} />
              </div>
            </div>
          </Section>

          <Section title="Profile Information / प्रोफ़ाइल जानकारी">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["maritalStatus", "Marital Status / वैवाहिक स्थिति", maritalStatusOptions],
                ["religion", "Religion / धर्म", religionOptions],
                ["gender", "Gender / लिंग", genderOptions],
                ["passportAvailable", "Passport Available / क्या आपके पास पासपोर्ट है?", yesNoOptions],
                ["education", "Education / शिक्षा", educationOptions],
                ["workingHours", "Working Hours / काम के घंटे", workingHoursOptions],
              ].map(([field, label, options]) => (
                <div key={field as string}>
                  <FieldLabel htmlFor={field as string} required>{label as string}</FieldLabel>
                  <select id={field as string} value={values[field as keyof FormValues] as string} onChange={(event) => setValue(field as keyof FormValues, event.target.value)} className={selectClass}>
                    <option value="">Select</option>
                    {(options as Option[]).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  <FieldError message={errors[field as keyof FormValues]} />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Work Details / काम की जानकारी">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <FieldLabel htmlFor="homeAddress" required>Home Address / घर का पता</FieldLabel>
                <textarea id="homeAddress" value={values.homeAddress} onChange={(event) => setValue("homeAddress", event.target.value)} rows={3} className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-semibold outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100" />
                <FieldError message={errors.homeAddress} />
              </div>
              <div>
                <FieldLabel htmlFor="preferredWorkLocation" required>Preferred Work Location / काम करने का पसंदीदा स्थान</FieldLabel>
                <input id="preferredWorkLocation" value={values.preferredWorkLocation} onChange={(event) => setValue("preferredWorkLocation", event.target.value)} className={inputClass} />
                <FieldError message={errors.preferredWorkLocation} />
              </div>
              <div>
                <FieldLabel htmlFor="expectedSalary">Expected Salary (₹) / अपेक्षित वेतन (₹)</FieldLabel>
                <input id="expectedSalary" type="number" min="0" value={values.expectedSalary} onChange={(event) => setValue("expectedSalary", event.target.value)} className={inputClass} />
                <FieldError message={errors.expectedSalary} />
              </div>
              <div>
                <FieldLabel htmlFor="salaryRange">Salary Range</FieldLabel>
                <div id="salaryRange" className="flex h-10 items-center rounded-lg border border-orange-200 bg-orange-50 px-3 text-sm font-black text-orange-600">₹1,000 to ₹30,000</div>
              </div>
              <div>
                <FieldLabel htmlFor="totalExperience">Total Experience / कुल कार्य अनुभव</FieldLabel>
                <div className="flex overflow-hidden rounded-lg border border-slate-200 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                  <input id="totalExperience" type="number" min="0" value={values.totalExperience} onChange={(event) => setValue("totalExperience", event.target.value)} className="h-10 min-w-0 flex-1 px-3 text-sm font-semibold outline-none" />
                  <span className="flex items-center bg-slate-50 px-3 text-xs font-extrabold text-slate-600">Years / वर्ष</span>
                </div>
                <FieldError message={errors.totalExperience} />
              </div>
            </div>
          </Section>

          <Section title="Documents & Languages / दस्तावेज़ और भाषाएँ">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="aadhaarCard">Upload Aadhaar Card / आधार कार्ड अपलोड करें</FieldLabel>
                <label htmlFor="aadhaarCard" className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center transition hover:border-orange-400 hover:bg-orange-50">
                  <UploadCloud className="mb-2 size-6 text-orange-500" />
                  <span className="max-w-full truncate text-sm font-bold">{aadhaarCard ? aadhaarCard.name : "PDF / JPG / PNG"}</span>
                </label>
                <input id="aadhaarCard" type="file" accept=".pdf,image/jpeg,image/png" onChange={(event) => { setAadhaarCard(event.target.files?.[0] ?? null); setErrors((current) => ({ ...current, aadhaarCard: undefined })); }} className="sr-only" />
                <FieldError message={errors.aadhaarCard} />
              </div>
              <div>
                <FieldLabel htmlFor="photo">Upload Photo / फोटो अपलोड करें</FieldLabel>
                <label htmlFor="photo" className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center transition hover:border-orange-400 hover:bg-orange-50">
                  <UploadCloud className="mb-2 size-6 text-orange-500" />
                  <span className="max-w-full truncate text-sm font-bold">{photo ? photo.name : "JPG / PNG / WEBP"}</span>
                </label>
                <input id="photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => { setPhoto(event.target.files?.[0] ?? null); setErrors((current) => ({ ...current, photo: undefined })); }} className="sr-only" />
                <FieldError message={errors.photo} />
              </div>
              <div className="md:col-span-2">
                <p className="mb-3 text-sm font-extrabold">Languages Known / आप कौन-कौन सी भाषाएँ जानते हैं? <span className="text-orange-500">*</span></p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {languageOptions.map((language) => (
                    <label key={language.value} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${values.languagesKnown.includes(language.value) ? "border-orange-500 bg-orange-50 text-[#12345b]" : "border-slate-200 bg-white text-slate-700 hover:border-orange-300"}`}>
                      <input type="checkbox" checked={values.languagesKnown.includes(language.value)} onChange={() => toggleLanguage(language.value)} className="size-4 accent-orange-500" />
                      {language.label}
                    </label>
                  ))}
                </div>
                <FieldError message={errors.languagesKnown} />
              </div>
            </div>
          </Section>

          <Section title="Declaration / घोषणा">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="signature" required>Signature / हस्ताक्षर</FieldLabel>
                <input id="signature" value={values.signature} onChange={(event) => setValue("signature", event.target.value)} className={inputClass} />
                <FieldError message={errors.signature} />
              </div>
              <div>
                <FieldLabel htmlFor="applicationDate" required>Date / दिनांक</FieldLabel>
                <input id="applicationDate" type="date" value={values.applicationDate} onChange={(event) => setValue("applicationDate", event.target.value)} className={inputClass} />
                <FieldError message={errors.applicationDate} />
              </div>
            </div>
          </Section>

          <button type="submit" disabled={isSubmitting} className="mx-auto mt-1 flex h-11 min-w-44 items-center justify-center rounded-lg bg-orange-500 px-7 text-sm font-black text-white shadow-[0_14px_30px_rgba(249,115,22,0.24)] transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? "SUBMITTING..." : "SUBMIT ✅"}
          </button>
        </form>
      </section>
    </main>
  );
}
