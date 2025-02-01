"use server"; // Next.js Server Action

import connectDB from "@/lib/connectDB";
import TeamMember from "@/models/TeamMember";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import fs from "fs";

connectDB();

// 🔹 1️⃣ Get All Team Members
export async function getTeamMembers() {
  try {
    return await TeamMember.find().lean();
  } catch (error) {
    throw new Error("Error fetching team members");
  }
}

// 🔹 2️⃣ Add New Team Member
export async function addTeamMember(formData: FormData) {
  try {
    const photo = formData.get("photo") as File;
    if (!photo) throw new Error("No photo provided");

    // ✅ Create Upload Folder inside public
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.promises.mkdir(uploadDir, { recursive: true });

    // ✅ Save File inside the public folder
    const buffer = Buffer.from(await photo.arrayBuffer());
    const fileName = `${Date.now()}-${photo.name}`;
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // ✅ Save to Database
    const newMember = new TeamMember({
      photoUrl: `/uploads/${fileName}`, // Store relative path for client-side access
      name: formData.get("name"),
      position: formData.get("position"),
      description: formData.get("description"),
      facebook: formData.get("facebook") || "",
      linkedin: formData.get("linkedin") || "",
      twitter: formData.get("twitter") || "",
      instagram: formData.get("instagram") || "",
    });

    await newMember.save();
    return { success: true, message: "Team member added successfully!" };
  } catch (error) {
    console.error("Error in addTeamMember:", error);
    throw new Error("Error adding team member");
  }
}

// 🔹 3️⃣ Update Team Member
export async function updateTeamMember(id: string, formData: FormData) {
  try {
    const updateData: any = {
      name: formData.get("name"),
      position: formData.get("position"),
      description: formData.get("description"),
      facebook: formData.get("facebook") || "",
      linkedin: formData.get("linkedin") || "",
      twitter: formData.get("twitter") || "",
      instagram: formData.get("instagram") || "",
    };

    if (formData.get("photo")) {
      const photo = formData.get("photo") as File;
      const buffer = Buffer.from(await photo.arrayBuffer());
      const fileName = `${Date.now()}-${photo.name}`;
      const filePath = path.join(process.cwd(), "storage", "uploads", fileName);

      await writeFile(filePath, buffer);

      // ✅ Delete Old Photo (Optional)
      const oldMember = await TeamMember.findById(id);
      if (oldMember?.photoUrl) {
        const oldFilePath = path.join(process.cwd(), "storage", oldMember.photoUrl);
        try {
          await unlink(oldFilePath);
        } catch (err) {
          console.warn("Old photo delete failed:", err);
        }
      }

      updateData.photoUrl = `/uploads/${fileName}`; 
    }

    await TeamMember.findByIdAndUpdate(id, updateData);
    return { success: true, message: "Team member updated successfully!" };
  } catch (error) {
    console.error("Error updating team member:", error);
    throw new Error("Error updating team member");
  }
}

// 🔹 4️⃣ Delete Team Member
export async function deleteTeamMember(id: string) {
  try {
    const member = await TeamMember.findById(id);
    if (!member) throw new Error("Team member not found");

    // ✅ Delete Photo
    if (member.photoUrl) {
      const filePath = path.join(process.cwd(), "public", member.photoUrl);
      try {
        await unlink(filePath);
      } catch (err) {
        console.warn("Photo delete failed:", err);
      }
    }

    await TeamMember.findByIdAndDelete(id);
    return { success: true, message: "Team member deleted successfully!" };
  } catch (error) {
    console.error("Error deleting team member:", error);
    throw new Error("Error deleting team member");
  }
}
