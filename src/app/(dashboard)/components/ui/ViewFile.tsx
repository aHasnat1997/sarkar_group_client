import { TUploadedFile } from "@/types";
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon, Visibility as ViewIcon, GetApp as DownloadIcon } from '@mui/icons-material';
import { formatFileSize } from '@/utils/formatFileSize';

/**
 * ViewFile component.
 * @param file - The file to view.
 * @param handleImageRemove - The function to handle image removal.
 * @param downloadable - The boolean value to determine if the file is downloadable.
 * @returns {JSX.Element} The ViewFile component.
 */
export default function ViewFile(
  { file, handleImageRemove, downloadable }:
    { file: Partial<TUploadedFile>, handleImageRemove?: (public_id: string) => void, downloadable?: boolean }
): JSX.Element {
  const handleView = () => {
    if (file?.secure_url) {
      window.open(file.secure_url, '_blank');
    } else {
      alert('No URL found for the file.');
    }
  };

  const handleDownload = () => {
    if (file?.secure_url) {
      const link = document.createElement('a');
      link.href = file.secure_url;
      link.download = file.filename || 'download.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Stack
      justifyContent='space-between'
      border='1px solid'
      borderColor='grey.400'
      borderRadius='.5rem'
      padding='1.5rem'
    >
      <Box>
        <Typography>{file?.filename || 'No File Name.'}</Typography>
        <Typography fontSize='0.75rem' color="text.secondary">
          {file?.bytes ? formatFileSize(file.bytes) : '0 Bytes'}
        </Typography>
      </Box>
      <Stack gap='.5rem'>
        <IconButton onClick={handleView}>
          <ViewIcon />
        </IconButton>
        {
          downloadable ? (
            <IconButton onClick={handleDownload}>
              <DownloadIcon />
            </IconButton>
          ) :
            handleImageRemove ? (
              <IconButton onClick={() => file?.public_id && handleImageRemove(file.public_id)}>
                <CloseIcon />
              </IconButton>
            ) :
              <></>
        }
      </Stack>
    </Stack>
  );
}
