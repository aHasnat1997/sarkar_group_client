/* eslint-disable @typescript-eslint/no-explicit-any */
export const cloudinaryUpload = async (file: File) => {
  if (!file) return;

  const toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  try {
    const fileData64 = await toBase64(file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: fileData64 }),
    });

    const textResponse = await response.text();
    if (response.ok) {
      try {
        const imageResponse = JSON.parse(textResponse);
        return {
          filename: file.name,
          ...imageResponse
        };
      } catch (err) {
        console.error('Error parsing JSON:', err);
        throw new Error('Invalid JSON response from server');
      }
    } else {
      console.error('Server error:', response.status, textResponse);
      throw new Error(`Image upload failed with status ${response.status}: ${textResponse}`);
    }
  } catch (error: any) {
    console.error('Image upload failed:', error);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

export const cloudinaryRemove = async (publicId: string, resourceType: string) => {
  if (!publicId || !resourceType) return;

  try {
    const response = await fetch('/api/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicId, resourceType }),
    });

    const textResponse = await response.text();
    if (response.ok) {
      try {
        const imageResponse = JSON.parse(textResponse);
        return imageResponse;
      } catch (err) {
        console.error('Error parsing JSON:', err);
        throw new Error('Invalid JSON response from server');
      }
    } else {
      console.error('Server error:', response.status, textResponse);
      throw new Error(`Image removal failed with status ${response.status}: ${textResponse}`);
    }
  } catch (error: any) {
    console.error('Image removal failed:', error);
    throw new Error(`Image removal failed: ${error.message}`);
  }
};
