import { NextRequest, NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req: NextRequest) {
  try {
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json({ error: 'No public ID provided' }, { status: 400 });
    }

    const deleteResponse = await cloudinary.v2.uploader.destroy(public_id, {
      resource_type: 'auto',
    });

    if (deleteResponse.result !== 'ok') {
      throw new Error('Failed to delete file');
    }

    return NextResponse.json(deleteResponse, { status: 200 });
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
  }
}
