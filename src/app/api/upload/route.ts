import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const { file } = await req.json();

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Ensure the file string has the proper data URI prefix
    let fileData = file;
    if (file.startsWith("data:")) {
      // Already has data URI prefix
    } else if (file.startsWith("/9j/") || file.startsWith("iVBOR")) {
      // JPEG or PNG base64 without prefix, add it
      // You might need to determine the correct MIME type based on the file
      fileData = `data:image/jpeg;base64,${file}`;
    }

    const uploadResponse = await cloudinary.v2.uploader.upload(fileData, {
      resource_type: "auto",
      folder: process.env.CLOUDINARY_FOLDER_NAME,
    });

    return NextResponse.json(uploadResponse, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json(
      { error: `Failed to upload file: ${error.message}` },
      { status: 500 }
    );
  }
}
