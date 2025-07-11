import { Box, Button, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { TClient, TUploadedFile } from "@/types";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import { useUpdateClientMutation } from "@/redux/api/endpoints/clientsApi";

export default function DialogThree(
  { open, setOpen, payload }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: TClient }
) {
  const [files, setFiles] = useState<Partial<TUploadedFile>[]>(payload?.documents);

  const [updateClientData] = useUpdateClientMutation();

  const handleImageChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setFiles((prevFiles) => [...prevFiles, uploadedFile]);
    try {
      await updateClientData({ data: { documents: files }, userId: payload?.userId })
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = files.filter((file) => file.public_id !== public_id);
    setFiles(newFiles);
    try {
      await updateClientData({ data: { documents: files }, userId: payload?.userId })
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Upload Dock
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Upload Employee Dock'
    >
      <Stack
        direction='column'
        gap='1.25rem'
        alignItems='center'
      >
        <Box width='100%'>
          <DockUpload onFileSelect={handleImageChange} />
        </Box>
        {
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
    </ResponsiveDialog>
  </>
};
