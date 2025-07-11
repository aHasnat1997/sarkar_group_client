'use client';

import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { TUploadedFile } from "@/types";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { useCrateMediaMutation } from "@/redux/api/endpoints/mediasApi";
import ImageUploadField from "@/app/(dashboard)/components/ui/ImageUploadField";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import assets from "@/assets";
import { Form, FormField, FormInput, FormItem, FormSelect } from "@/components/form";

const mediaSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.object({}).optional(),
  keyword: z.string()
});
type MediaFormValues = z.infer<typeof mediaSchema>;

export default function FormDialog() {
  const mediaKeywords = [
    "Construction",
    "Infrastructure",
    "Sustainable Building",
    "Architecture",
    "Civil",
    "Planning",
    "Real Estate",
    "Residential",
    "Technology",
    "Machinery",
    "Engineering",
    "Design",
    "Management"
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<Partial<TUploadedFile> | null>(null);

  const [createMedia, { isLoading, isSuccess, isError }] = useCrateMediaMutation();

  const methods = useForm<MediaFormValues>({
    resolver: zodResolver(mediaSchema),
    defaultValues: {}
  });

  const handleFileChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setImage(uploadedFile);
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    setImage(null);
  };

  const formSubmit: SubmitHandler<MediaFormValues> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { image: i, ...rest } = data
    const mediaData = {
      image: image,
      ...rest
    };
    try {
      const media = await createMedia(mediaData);
      if (media.data.success) {
        setOpen(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error({ error });
    }
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Media
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
    >
      <Typography fontSize='2rem' fontWeight={600} mb='2rem'>Post New Media</Typography>
      <Stack direction='column' alignItems='start' gap='1.5rem' mt='1.5rem'>
        <Stack width='100%' gap='1.5rem'>
          <Box width='45%'>
            <ImageUploadField onFileSelect={handleFileChange} />
          </Box>
          <Box position={'relative'}>
            {
              image ? <>
                <div
                  className="absolute right-1 top-1 bg-slate-300 p-1 rounded-full"
                  onClick={() => image?.public_id && handleImageRemove(image.public_id)}
                >
                  <CloseIcon />
                </div>
                <Image
                  alt="Selected Image"
                  src={image?.secure_url ? image.secure_url : assets.images.brokenImage}
                  width={500}
                  height={500}
                  className="w-full h-52 rounded-md"
                />
              </> :
                <></>
            }
          </Box>
        </Stack>
        <Form {...methods}>
          <Stack
            width='100%'
            direction='column'
            gap='1rem'
            component="form"
            onSubmit={methods.handleSubmit(formSubmit)}
          >
            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="title"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Media Title"
                    />
                  )}
                />
              </FormItem>

              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='keyword'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="keyword">
                      {
                        mediaKeywords.map((keyword, index) => (
                          <MenuItem key={index} value={keyword}>{keyword}</MenuItem>
                        ))
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="description"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Description"
                    multiline
                    rows={5}
                  />
                )}
              />
            </FormItem>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
              <Button
                variant="outlined"
                type="button"
                onClick={() => {
                  if (image?.public_id) {
                    handleImageRemove(image.public_id);
                  }
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={isLoading || isSuccess}
              >
                {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Submit'}
              </Button>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </ResponsiveDialog>
  </>
};
