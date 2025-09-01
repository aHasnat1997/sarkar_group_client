import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    // Use formData to properly handle file uploads
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // File size validation (limit to 50MB)
    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: `File size exceeds 50MB limit. Current file size: ${Math.round(
            file.size / (1024 * 1024)
          )}MB`,
        },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64String = buffer.toString("base64");

    // Determine the correct data URI prefix based on file signature
    let dataUriPrefix = "data:application/octet-stream;base64,";
    let fileType = "unknown";

    // Check file signature to determine the correct prefix
    if (base64String.startsWith("/9j/")) {
      dataUriPrefix = "data:image/jpeg;base64,";
      fileType = "JPEG image";
    } else if (base64String.startsWith("iVBOR")) {
      dataUriPrefix = "data:image/png;base64,";
      fileType = "PNG image";
    } else if (base64String.startsWith("JVBER")) {
      dataUriPrefix = "data:application/pdf;base64,";
      fileType = "PDF document";
    } else if (base64String.startsWith("UEsDB")) {
      dataUriPrefix =
        "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,";
      fileType = "Word document";
    }

    // Construct the data URI
    const fileData = dataUriPrefix + base64String;

    const uploadResponse = await cloudinary.v2.uploader.upload(fileData, {
      resource_type: "auto",
      folder: process.env.CLOUDINARY_FOLDER_NAME,
      // Add context for better organization
      context: {
        alt: file.name,
        caption: `Uploaded ${fileType} file`,
      },
    });

    return NextResponse.json(uploadResponse, { status: 200 });
  } catch (error: unknown) {
    console.error("Error uploading to Cloudinary:", error);

    // More specific error handling
    if (error instanceof Error) {
      // Handle Cloudinary-specific errors
      if (error.message.includes("Invalid API key")) {
        return NextResponse.json(
          {
            error:
              "Invalid Cloudinary API key. Please check your configuration.",
          },
          { status: 500 }
        );
      }

      if (error.message.includes("No file found")) {
        return NextResponse.json(
          { error: "No file data received. Please try uploading again." },
          { status: 400 }
        );
      }

      // Handle network errors
      if (
        error.message.includes("network") ||
        error.message.includes("timeout")
      ) {
        return NextResponse.json(
          {
            error:
              "Network error while uploading file. Please check your connection and try again.",
          },
          { status: 500 }
        );
      }

      // Handle file format errors
      if (error.message.includes("Format")) {
        return NextResponse.json(
          {
            error:
              "Unsupported file format. Please upload a valid image or document file.",
          },
          { status: 400 }
        );
      }

      // Generic error with original message
      return NextResponse.json(
        { error: `Failed to upload file: ${error.message}` },
        { status: 500 }
      );
    }

    // Handle non-Error objects
    return NextResponse.json(
      { error: "An unknown error occurred while uploading the file." },
      { status: 500 }
    );
  }
}
