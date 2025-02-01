import mongoose, { Schema, Document } from "mongoose";

export interface ITeamMember extends Document {
  photoUrl: string;
  name: string;
  position: string;
  description: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

const teamMemberSchema: Schema = new Schema(
  {
    photoUrl: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
    facebook: { type: String, required: false },
    linkedin: { type: String, required: false },
    twitter: { type: String, required: false },
    instagram: { type: String, required: false },
  },
  { timestamps: true }
);

const TeamMember = mongoose.models.TeamMember || mongoose.model<ITeamMember>("TeamMember", teamMemberSchema);

export default TeamMember;
