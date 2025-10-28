import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

// GET - Lấy tất cả products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Tạo product mới
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    const newProduct = await Product.create(data);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
