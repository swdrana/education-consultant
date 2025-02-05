import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface ITodo {
  todo: string;
  todoDeadline: Date; // Change to Date type
}

// Merging ITodo interface with mongoose's Document interface to create
// a new interface that represents a todo document in MongoDB
export interface ITodoDocument extends ITodo, Document {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types
// and constraints
const todoSchema = new mongoose.Schema<ITodoDocument>(
  {
    todo: {
      type: String,
      required: true,
    },
    todoDeadline: {
      type: Date, // Change to Date type
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Todo: Model<ITodoDocument> =
  mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
