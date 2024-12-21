import { Box, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { TUploadedFile } from "@/types";
import ViewIcon from "@/assets/icons/view.svg";
import CloseIcon from '@mui/icons-material/Close';
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";

export default function TabThree(
  { files, setFiles }:
    { files: Partial<TUploadedFile>[], setFiles: Dispatch<SetStateAction<Partial<TUploadedFile>[]>> }
) {
  const [isUploadLoading, setIsUploadLoading] = useState<boolean>(false);

  const handleImageChange = async (file: File) => {
    setIsUploadLoading(true);
    const uploadedFile = await cloudinaryUpload(file);
    setFiles((prevFiles) => [...prevFiles, uploadedFile]);
    setIsUploadLoading(false);
  };

  const handleImageRemove = async (public_id: string) => {
    setIsUploadLoading(true);
    await cloudinaryRemove(public_id, 'file');
    const newFiles = files.filter((file) => file.public_id !== public_id);
    setFiles(newFiles);
    setIsUploadLoading(false);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Stack
      direction='column'
      gap='1.25rem'
      alignItems='center'
    >
      <DockUpload onFileSelect={handleImageChange} />
      {
        isUploadLoading ? <Box>
          <Skeleton
            width='45%'
            height='6.3rem'
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: 'grey.400' }}
          />
        </Box> :
          files.length > 0 ? files?.map((file, i) => (
            <Stack
              key={i}
              width='45%'
              justifyContent='space-between'
              border='1px solid'
              borderColor='grey.400'
              borderRadius='.5rem'
              padding='1.5rem'
              margin='1rem'
            >
              <Box>
                <Typography>{file?.filename || 'No File Name.'}</Typography>
                <Typography fontSize='0.75rem' color="text.secondary">
                  {file?.bytes ? formatFileSize(file?.bytes) : 'No File Size.'}
                </Typography>
              </Box>
              <Stack gap='.5rem'>
                <IconButton>
                  <ViewIcon />
                </IconButton>
                <IconButton onClick={() => file?.public_id && handleImageRemove(file.public_id)}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Stack>
          )) :
            <></>
      }
    </Stack>
  );
};
