'use client';

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClientFormValues, clientZodSchema } from "./form/formZodSchema";
import { Form } from "@/components/form";
import Link from "next/link";
import { TUploadedFile } from "@/types";
import { useAddClientMutation } from "@/redux/api/endpoints/clientsApi";
import FormInputFields from "./form";
import ProfileImageUpload from "@/app/(dashboard)/components/ui/ProfileImageUpload";
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { useRouter } from "next/navigation";

export default function AddNewClient() {
  const router = useRouter();
  const [image, setImage] = useState<Partial<TUploadedFile> | null>(null);
  const [files, setFiles] = useState<Partial<TUploadedFile>[]>([]);

  const [createClient, { isLoading, isSuccess, isError }] = useAddClientMutation();

  const methods = useForm<ClientFormValues>({
    resolver: zodResolver(clientZodSchema)
  });

  const formSubmit: SubmitHandler<ClientFormValues> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { profileImage, documents, ...rest } = data;
    const clientData = {
      profileImage: image,
      documents: files,
      ...rest
    };
    if (clientData) {
      try {
        const client = await createClient(clientData);
        if (client.data.success) {
          router.push('/dashboard/admin/all-clients');
        } else {
          console.error("Error adding client:", client.data.message);
        }
      } catch (error) {
        console.error("Error adding client:", error);
      }
    }
  };

  const handleFileChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setFiles((prevFiles) => [...prevFiles, uploadedFile]);
  };

  const handleFileRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = files.filter((file) => file.public_id !== public_id);
    setFiles(newFiles);
  };

  return (
    <Box
      sx={{
        border: '.5px solid',
        borderColor: 'grey.400',
        borderRadius: '1rem',
        overflow: 'hidden',
        padding: '1.5rem'
      }}
    >
      <Box mb='1.5rem'>
        <Typography fontSize='1.25rem' fontWeight={600}>Add Client</Typography>
      </Box>

      <Box mb='1.5rem'>
        <ProfileImageUpload image={image} setImage={setImage} />
      </Box>

      <Form {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(formSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <Box>
            <FormInputFields methods={methods} />
          </Box>

          <Box>
            <Stack
              gap='1.5rem'
              alignItems='start'
            >
              <Box width='50%'>
                <DockUpload onFileSelect={handleFileChange} />
              </Box>
              <Box width='50%'>
                {
                  files.length > 0 ? files?.map((file, i) => (
                    <Box key={i}>
                      <ViewFile
                        file={file}
                        handleImageRemove={() => file.public_id && handleFileRemove(file.public_id)}
                        downloadable={false}
                      />
                    </Box>
                  )) :
                    <></>
                }
              </Box>
            </Stack>
          </Box>

          <Stack alignItems='center' gap='1rem' justifyContent='end'>
            <Link href='/dashboard/admin/all-clients'>
              <Button
                variant="outlined"
                type="button"
              >
                Cancel
              </Button>
            </Link>
            <Button
              variant="contained"
              type="submit"
              disabled={isLoading || isSuccess}
            >
              {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Submit'}
            </Button>
          </Stack>
        </Box>
      </Form>
    </Box>
  );
};
