import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import TeamMember from "@/models/TeamMember";

// Handle GET, POST, PUT, DELETE requests for team members
export async function GET() {
  try {
    await connectDB();
    const teamMembers = await TeamMember.find();
    return NextResponse.json(teamMembers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const { photoUrl, name, position, description, facebook, linkedin, twitter, instagram } = data;
    
    const newTeamMember = new TeamMember({ photoUrl, name, position, description, facebook, linkedin, twitter, instagram });
    await newTeamMember.save();
    
    return NextResponse.json(newTeamMember, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add new team member" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const { _id, photoUrl, name, position, description, facebook, linkedin, twitter, instagram } = data;
    
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      _id,
      { photoUrl, name, position, description, facebook, linkedin, twitter, instagram },
      { new: true }
    );
    
    return NextResponse.json(updatedTeamMember);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update team member" }, { status: 500 });
  }
}
