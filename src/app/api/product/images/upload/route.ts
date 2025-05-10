import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return new NextResponse(JSON.stringify({ message: "No file uploaded" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate file type (optional, but recommended)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid file type. Only JPEG, PNG, GIF, WEBP are allowed." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate file size (optional, but recommended) - e.g., 5MB limit
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return new NextResponse(
        JSON.stringify({ message: `File size exceeds the limit of ${maxSize / (1024*1024)}MB.` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate a unique filename
    const fileExtension = path.extname(file.name);
    const uniqueFilename = `${uuidv4()}${fileExtension}`;
    
    // Construct the path to the public directory
    // process.cwd() gives the root of your Next.js project
    const uploadDir = path.join(process.cwd(), "public", "product-images");
    const filePath = path.join(uploadDir, uniqueFilename);

    await writeFile(filePath, buffer);

    // Return the public path of the image
    const publicPath = `/product-images/${uniqueFilename}`;

    return NextResponse.json({ 
      message: "File uploaded successfully", 
      filePath: publicPath 
    });

  } catch (error) {
    console.error("[IMAGE_UPLOAD_POST]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error during file upload" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
