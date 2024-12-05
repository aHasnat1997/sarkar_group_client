export const imageUpload = async (files: File) => {
  if (!files) return;

  const data = new FormData();
  data.append("file", files);
  data.append("upload_preset", "upload_images");

  const res = await fetch(`/api/upload`, {
    method: "POST",
    body: data,
  });
  const imageResponse = await res.json();
  return imageResponse.uploadedImageData.secure_url;
};
