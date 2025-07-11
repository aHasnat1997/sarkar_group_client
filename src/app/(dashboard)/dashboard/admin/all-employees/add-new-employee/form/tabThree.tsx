import { Box, Skeleton, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { TUploadedFile } from "@/types";
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";

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
    await cloudinaryRemove(public_id, 'image');
    const newFiles = files.filter((file) => file.public_id !== public_id);
    setFiles(newFiles);
    setIsUploadLoading(false);
  };

  return (
    <Stack
      direction='column'
      gap='1.25rem'
      alignItems='center'
    >
      <Box width='60%'>
        <DockUpload onFileSelect={handleImageChange} />
      </Box>
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
            <Box key={i} width='50%'>
              <ViewFile
                file={file}
                handleImageRemove={handleImageRemove}
                downloadable={false}
              />
            </Box>
          )) :
            <></>
      }
    </Stack>
  );
};
