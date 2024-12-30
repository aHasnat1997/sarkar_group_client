import { Box, Button, Stack, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { TUploadedFile } from "@/types";
import Image from "next/image";
import assets from "@/assets";
import CloseIcon from '@mui/icons-material/Close';
import ImageUploadField from "@/app/(dashboard)/components/ui/ImageUploadField";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { useAddProjectGalleryMutation } from "@/redux/api/endpoints/projectsApi";

export default function DialogFour(
  { open, setOpen, projectId }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, projectId: string }
) {
  const [images, setImages] = useState<Partial<TUploadedFile>[]>([]);
  const [title, serTitle] = useState<string>('');

  const [addProjectGallery, { isLoading, isError, isSuccess }] = useAddProjectGalleryMutation();

  const handleFileChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setImages((prevFiles) => [...prevFiles, uploadedFile]);
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = images.filter((image) => image.public_id !== public_id);
    setImages(newFiles);
  };

  const handelAddProjectGallery = async () => {
    const reqData = { projectId, images, title };
    console.log({ reqData });
    try {
      const res = await addProjectGallery(reqData);
      if (res?.data?.success) {
        setOpen(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add to Gallery
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Add to Gallery'
    >
      <Stack direction='column' gap='1rem'>
        <TextField label='Gallery Title' onChange={(e) => serTitle(e.target.value)} />
        <Stack direction='column' gap='1rem'>
          <ImageUploadField onFileSelect={handleFileChange} />
          <Stack gap='1rem' sx={{ overflowX: 'scroll' }}>
            {
              images.map((image, i) => (
                <Box
                  key={i}
                  position='relative'
                  width='25%'
                >
                  {
                    <>
                      <div
                        className="absolute right-1 top-1 bg-slate-300 p-1 rounded-full"
                        onClick={() => image.public_id && handleImageRemove(image.public_id)}
                      >
                        <CloseIcon />
                      </div>
                      <Image
                        alt="Selected Image"
                        src={image?.secure_url ? image.secure_url : assets.images.brokenImage}
                        width={500}
                        height={500}
                        className="w-full rounded-md"
                      />
                    </>
                  }
                </Box>
              ))
            }
          </Stack>
        </Stack>
        <Button
          variant="contained"
          disabled={isLoading || isSuccess}
          onClick={handelAddProjectGallery}
        >
          {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Add Gallery'}
        </Button>
      </Stack>
    </ResponsiveDialog>
  </>
};
