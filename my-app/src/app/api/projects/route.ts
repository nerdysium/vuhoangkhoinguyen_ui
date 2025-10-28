import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

// GET - Lấy tất cả projects
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Tạo project mới
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    // Kiểm tra slug đã tồn tại chưa
    const existingProject = await Project.findOne({ slug: data.slug });
    if (existingProject) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 }
      );
    }

    const newProject = await Project.create(data);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
