import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req: NextRequest) {
  try {
    const { publicId, resourceType } = await req.json();

    if (!publicId || !resourceType) {
      return NextResponse.json(
        { error: "No public ID or resource type provided" },
        { status: 400 }
      );
    }

    // Validate resource type
    const validResourceTypes = ["image", "raw", "video", "auto"];
    if (!validResourceTypes.includes(resourceType)) {
      return NextResponse.json(
        {
          error: `Invalid resource type: ${resourceType}. Must be one of: ${validResourceTypes.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    const deleteResponse = await cloudinary.v2.uploader.destroy(publicId, {
      resource_type: resourceType,
    });

    // Check the result and provide appropriate response
    if (deleteResponse.result === "ok") {
      return NextResponse.json(
        { message: "File deleted successfully", ...deleteResponse },
        { status: 200 }
      );
    } else if (deleteResponse.result === "not_found") {
      return NextResponse.json(
        { error: `File not found with public ID: ${publicId}` },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        {
          error: `Failed to delete file. Cloudinary response: ${deleteResponse.result}`,
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Error deleting from Cloudinary:", error);

    // Handle specific Cloudinary errors
    if (error instanceof Error) {
      if (error.message.includes("No API Key found")) {
        return NextResponse.json(
          { error: "Cloudinary configuration error: No API Key found" },
          { status: 500 }
        );
      }

      if (error.message.includes("Unauthorized")) {
        return NextResponse.json(
          { error: "Cloudinary authentication failed" },
          { status: 500 }
        );
      }

      // Generic error with original message
      return NextResponse.json(
        {
          error: `Failed to delete file: ${error.message}`,
        },
        { status: 500 }
      );
    }

    // Handle non-Error objects
    return NextResponse.json(
      {
        error: "Failed to delete file: Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
