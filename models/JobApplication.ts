import mongoose, { Document, Model, Schema } from "mongoose";

export interface IJobApplication extends Document {
  fullName: string;
  mobileNumber: string;
  category: string;
  maritalStatus: string;
  age?: number;
  religion: string;
  gender: string;
  passportAvailable: string;
  education: string;
  workingHours: string;
  homeAddress: string;
  preferredWorkLocation: string;
  expectedSalary?: number;
  salaryRange: string;
  totalExperience?: number;
  aadhaarCardPath?: string;
  photoPath?: string;
  languagesKnown: string[];
  signature: string;
  applicationDate: string;
}

const JobApplicationSchema: Schema = new Schema(
  {
    fullName: { type: String, required: [true, "Please provide a full name"] },
    mobileNumber: { type: String, required: [true, "Please provide a mobile number"] },
    category: { type: String, required: [true, "Please select a category"] },
    maritalStatus: { type: String, required: [true, "Please select marital status"] },
    age: { type: Number },
    religion: { type: String, required: [true, "Please select religion"] },
    gender: { type: String, required: [true, "Please select gender"] },
    passportAvailable: { type: String, required: [true, "Please select passport availability"] },
    education: { type: String, required: [true, "Please select education"] },
    workingHours: { type: String, required: [true, "Please select working hours"] },
    homeAddress: { type: String, required: [true, "Please provide home address"] },
    preferredWorkLocation: { type: String, required: [true, "Please provide preferred work location"] },
    expectedSalary: { type: Number },
    salaryRange: { type: String, default: "Rs. 1,000 to Rs. 30,000" },
    totalExperience: { type: Number },
    aadhaarCardPath: { type: String },
    photoPath: { type: String },
    languagesKnown: { type: [String], default: [] },
    signature: { type: String, required: [true, "Please provide signature"] },
    applicationDate: { type: String, required: [true, "Please select date"] },
  },
  { timestamps: true }
);

const JobApplication: Model<IJobApplication> =
  mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);

export default JobApplication;
