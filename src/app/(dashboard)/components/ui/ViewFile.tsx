import { TUploadedFile } from "@/types";
import { Box, Stack, Typography, IconButton, Chip } from "@mui/material";
import {
  Close as CloseIcon,
  Visibility as ViewIcon,
  GetApp as DownloadIcon,
  PictureAsPdf as PdfIcon,
  Image as ImageIcon,
  Description as DocumentIcon,
} from "@mui/icons-material";
import { formatFileSize } from "@/utils/formatFileSize";

/**
 * ViewFile component.
 * @param file - The file to view.
 * @param handleFileRemove - The function to handle file removal.
 * @param downloadable - The boolean value to determine if the file is downloadable.
 * @returns {JSX.Element} The ViewFile component.
 */
export default function ViewFile({
  file,
  handleFileRemove,
  downloadable,
}: {
  file: Partial<TUploadedFile>;
  handleFileRemove?: (public_id: string) => void;
  downloadable?: boolean;
}): JSX.Element {
  const handleView = () => {
    if (file?.secure_url) {
      window.open(file.secure_url, "_blank");
    } else {
      alert("No URL found for the file.");
    }
  };

  const handleDownload = () => {
    if (file?.secure_url) {
      // For PDF and other document files, we'll open in a new tab for viewing
      // For direct download, we can use the download attribute
      const link = document.createElement("a");
      link.href = file.secure_url;
      link.target = "_blank"; // Open in new tab for documents
      link.download = file.filename || "document";

      // For same-origin URLs, we can trigger download directly
      // For cross-origin (like Cloudinary), we'll open in new tab
      if (file.secure_url.includes(window.location.hostname)) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // For Cloudinary and other external services, open in new tab
        window.open(file.secure_url, "_blank");
      }
    }
  };

  const getFileIcon = () => {
    if (!file?.format) return <DocumentIcon />;

    switch (file.format.toLowerCase()) {
      case "pdf":
        return <PdfIcon />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        return <ImageIcon />;
      default:
        return <DocumentIcon />;
    }
  };

  const getFileTypeChip = () => {
    if (!file?.format) return null;

    const format = file.format.toUpperCase();
    let color:
      | "default"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning" = "default";

    switch (format.toLowerCase()) {
      case "pdf":
        color = "error";
        break;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        color = "primary";
        break;
      default:
        color = "default";
    }

    return (
      <Chip
        label={format}
        size="small"
        color={color}
        icon={getFileIcon()}
        variant="outlined"
      />
    );
  };

  return (
    <Stack
      justifyContent="space-between"
      border="1px solid"
      borderColor="grey.400"
      borderRadius=".5rem"
      padding="1.5rem"
      spacing={1}
    >
      <Box display="flex" alignItems="center" gap={1}>
        {getFileTypeChip()}
      </Box>

      <Box>
        <Typography variant="body2" fontWeight={500}>
          {file?.filename || "Unnamed File"}
        </Typography>
        <Typography fontSize="0.75rem" color="text.secondary">
          {file?.bytes ? formatFileSize(file.bytes) : "0 Bytes"}
        </Typography>
      </Box>

      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        <IconButton onClick={handleView} size="small" title="View File">
          <ViewIcon fontSize="small" />
        </IconButton>

        {downloadable ? (
          <IconButton
            onClick={handleDownload}
            size="small"
            title="Download File"
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
        ) : handleFileRemove ? (
          <IconButton
            onClick={() => file?.public_id && handleFileRemove(file.public_id)}
            size="small"
            title="Delete File"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : null}
      </Stack>
    </Stack>
  );
}
