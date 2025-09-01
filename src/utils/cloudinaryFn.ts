/* eslint-disable @typescript-eslint/no-explicit-any */
export const cloudinaryUpload = async (file: File) => {
  if (!file) return;

  try {
    // Validate file size (50MB limit)
    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      throw new Error(
        `File size exceeds 50MB limit. Current file size: ${Math.round(
          file.size / (1024 * 1024)
        )}MB`
      );
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("file", file);

    // Add timeout to fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch("/api/upload", {
      method: "POST",
      // Remove Content-Type header to let browser set it with proper boundary
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const textResponse = await response.text();
    if (response.ok) {
      try {
        const imageResponse = JSON.parse(textResponse);
        return {
          filename: file.name,
          ...imageResponse,
        };
      } catch (err) {
        console.error("Error parsing JSON:", err);
        throw new Error("Invalid JSON response from server. Please try again.");
      }
    } else {
      // Try to parse error response
      let errorMessage = `Upload failed with status ${response.status}: ${response.statusText}`;

      try {
        const errorResponse = JSON.parse(textResponse);
        if (errorResponse.error) {
          errorMessage = errorResponse.error;
        }
      } catch {
        // If we can't parse the error response, use the response text
        if (textResponse) {
          errorMessage = textResponse;
        }
      }

      throw new Error(errorMessage);
    }
  } catch (error: any) {
    console.error("File upload failed:", error);

    // Handle timeout errors
    if (error.name === "AbortError") {
      throw new Error(
        "Upload timed out. Please check your connection and try again."
      );
    }

    // Handle network errors
    if (error.message.includes("fetch") || error.message.includes("network")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }

    // Re-throw other errors
    throw new Error(
      error.message || "An unknown error occurred during upload."
    );
  }
};

export const cloudinaryRemove = async (
  publicId: string,
  resourceType: string
) => {
  if (!publicId || !resourceType) return;

  try {
    // Add timeout to fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch("/api/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId, resourceType }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const textResponse = await response.text();
    if (response.ok) {
      try {
        const imageResponse = JSON.parse(textResponse);
        return imageResponse;
      } catch (err) {
        console.error("Error parsing JSON:", err);
        throw new Error("Invalid JSON response from server. Please try again.");
      }
    } else {
      // Try to parse error response
      let errorMessage = `Removal failed with status ${response.status}: ${response.statusText}`;

      try {
        const errorResponse = JSON.parse(textResponse);
        if (errorResponse.error) {
          errorMessage = errorResponse.error;
        }
      } catch {
        // If we can't parse the error response, use the response text
        if (textResponse) {
          errorMessage = textResponse;
        }
      }

      throw new Error(errorMessage);
    }
  } catch (error: any) {
    console.error("File removal failed:", error);

    // Handle timeout errors
    if (error.name === "AbortError") {
      throw new Error(
        "Removal timed out. Please check your connection and try again."
      );
    }

    // Handle network errors
    if (error.message.includes("fetch") || error.message.includes("network")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }

    // Re-throw other errors with more context
    throw new Error(
      error.message || "An unknown error occurred during file removal."
    );
  }
};
