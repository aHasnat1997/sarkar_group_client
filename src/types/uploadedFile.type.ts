export type TUploadedFile = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width?: number; // Optional for non-image files like PDFs
  height?: number; // Optional for non-image files like PDFs
  format: string;
  resource_type: "image" | "video" | "raw";
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: "public" | "authenticated";
  filename: string;
  api_key: string;
  pages?: number; // Optional for multi-page documents like PDFs
  colors?: Array<[string, number]>; // Optional for images
  predominant?: { [color: string]: number }; // Optional for images
  phash?: string; // Optional for images
  delete_token?: string; // Optional if delete token is enabled
  info?: {
    dpi?: number; // Optional for images
    face_count?: number; // Optional for images
    quality_analysis?: {
      focus: number;
      exposure: number;
      noise: number;
      color: number;
      contrast: number;
    };
  };
  access_control?: Array<{
    access_type: string;
    start?: string;
    end?: string;
  }>;
  context?: {
    custom: { [key: string]: string };
  };
  metadata?: { [key: string]: string };
  moderation?: Array<{
    kind: string;
    status: string;
  }>;
  responsive_breakpoints?: Array<{
    breakpoints: Array<{
      width: number;
      height: number;
      bytes: number;
      url: string;
      secure_url: string;
    }>;
    transformation: string;
  }>;
};
