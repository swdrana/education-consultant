// pages/api/todos/[id].ts
import Todo from "@/models/todoModel";
import { connectToMongoDB } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  await connectToMongoDB();

  if (req.method === "DELETE") {
    try {
      await Todo.deleteOne({ _id: id });
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting todo" });
    }
  }
}
