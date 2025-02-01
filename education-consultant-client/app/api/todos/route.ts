
import connectDB from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

// Handle GET requests (fetch all todos)
export async function GET() {
  try {
    await connectDB();
    const todos = await Todo.find();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching todos" },
      { status: 500 }
    );
  }
}

// Handle POST requests (create a new todo)
export async function POST(request: Request) {
  try {
    const { todo, todoDeadline } = await request.json();
    await connectDB();
    const newTodo = new Todo({
      todo,
      todoDeadline: new Date(todoDeadline),
    });
    await newTodo.save();
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating todo" },
      { status: 500 }
    );
  }
}
