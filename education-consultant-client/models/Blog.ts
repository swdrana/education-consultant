import mongoose, { Schema } from "mongoose";
import { TUser } from "./User";

export type TComments = {
  user: TUser;
  comment: string;
};

export type TBlog = {
  title: string;
  shortDescription: string;
  description: string;
  author: TUser[];
  image: string;
  comments: TComments[];
};

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    shortDescription: { type: String, default: "" },
    description: { type: String, required: true },
    author: [{ type: Schema.Types.ObjectId, ref: "User" }],
    image: { type: String, required: true },
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        comment: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.blog || mongoose.model<TBlog>("blog", BlogSchema);

export default Blog;
