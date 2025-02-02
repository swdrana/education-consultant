"use server";
import { auth } from "@/auth";
import connectDB from "@/lib/connectDB";
import Blog from "@/models/Blog";
import User from "@/models/User";
import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";

connectDB();

export async function addBlog(formData: FormData) {
  try {
    const session = await auth()
    if(!session?.user) return null
    const {email} = session.user
    const user = await User.findOne({email})
    if(session?.user?.role !== "admin") {
      throw new Error("Unauthorized access")
    }
    const photo = formData.get("photo") as File;
    if (!photo) throw new Error("No photo provided");

    // ✅ Create Upload Folder inside public
    const uploadDir = path.join(process.cwd(), "storage", "uploads");
    await fs.promises.mkdir(uploadDir, { recursive: true });

    // ✅ Save File inside the public folder
    const buffer = Buffer.from(await photo.arrayBuffer());
    const fileName = `${Date.now()}-${photo.name}`;
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // ✅ Save to Database
    const blog = new Blog ({
      title: formData.get("title") as string,
      shortDescription: formData.get("shortDescription") as string,
      description: formData.get("description") as string,
      image: `/api/uploads/${fileName}`,
      author: user._id,
    });

    await blog.save();
    return { success: true, message: "Blog added successfully!"};
  } catch (error) {
    console.error("Blog addition failed:", error);
    throw new Error("Blog addition failed");
  }
}

export async function getBlogs() {
  try {
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Error fetching blogs");
  }
}