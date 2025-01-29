import mongoose, { Schema, model } from "mongoose";
export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models?.User || model<TUser>("User", UserSchema);
export default User;
