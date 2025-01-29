import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  name: string;
  phone: string;
  email: string;
  birthDate: Date;
  gender: "male" | "female" | "other";
  passport: "yes" | "no";
  englishTest: string;
  education: string;
  academicDetails: string;
  studyDestination: string;
}

const ApplicationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    passport: { type: String, enum: ["yes", "no"], required: true },
    englishTest: { type: String, required: true },
    education: { type: String, required: true },
    academicDetails: { type: String, required: true },
    studyDestination: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.ApplicationData ||
  mongoose.model<IApplication>("ApplicationData", ApplicationSchema);
