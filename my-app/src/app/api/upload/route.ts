import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Tạo unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s/g, "-");
    const filename = `${timestamp}-${originalName}`;

    // Đường dẫn lưu file
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Tạo thư mục nếu chưa tồn tại
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Thư mục đã tồn tại
    }

    const filePath = path.join(uploadDir, filename);

    // Lưu file
    await writeFile(filePath, buffer);

    // Return URL của file
    const fileUrl = `/uploads/${filename}`;

    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
