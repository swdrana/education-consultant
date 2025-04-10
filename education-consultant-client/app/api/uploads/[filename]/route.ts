import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: Request, { params }: { params: any }) {
  const filePath = path.join(process.cwd(), "storage/uploads", params?.filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  // File stream তৈরি করা
  const fileStream = fs.createReadStream(filePath);

  // ReadableStream তৈরি করা
  const readableStream = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => controller.enqueue(chunk));
      fileStream.on("end", () => controller.close());
      fileStream.on("error", (err) => controller.error(err));
    },
  });

  return new Response(readableStream, {
    headers: {
      "Content-Type": "image/jpeg", // প্রয়োজন অনুযায়ী চেঞ্জ করো
      "Content-Disposition": `inline; filename="${params.filename}"`,
    },
  });
}
