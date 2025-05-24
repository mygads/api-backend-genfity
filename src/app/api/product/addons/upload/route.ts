import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    if (!request.body) {
      return NextResponse.json(
        { error: 'File data is required' },
        { status: 400 }
      );
    }

    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const extension = filename.split('.').pop();
    const uniqueFilename = `addons/${timestamp}-${filename}`;

    const blob = await put(uniqueFilename, request.body, {
      access: 'public',
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: uniqueFilename
    });
  } catch (error) {
    console.error('[ADDON_UPLOAD_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
