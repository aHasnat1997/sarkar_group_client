'use client';

import ImageUploadField from "@/app/(dashboard)/components/ui/ImageUploadField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid2, MenuItem, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductFormValues, productZodSchema } from "./form/formZodSchema";
import { Form, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import Link from "next/link";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { useState } from "react";
import { TUploadedFile } from "@/types";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import assets from "@/assets";
import { useCrateProductMutation } from "@/redux/api/endpoints/productsApi";
import { useRouter } from "next/navigation";

export default function AddNewProduct() {
  const equipmentStatus = ['WORKING', 'STAND_BY', 'BREAK_DOWN', 'UNDER_MAINTENANCE', 'OUT_OF_SERVICE', 'IN_REPAIR', 'DECOMMISSIONED', 'PENDING_INSPECTION', 'AVAILABLE', 'RESERVED', 'LOST', 'DAMAGED'];
  const router = useRouter();
  const [images, setImages] = useState<Partial<TUploadedFile>[]>([]);
  const [createProduct, { isLoading, isSuccess, isError }] = useCrateProductMutation();

  const methods = useForm<ProductFormValues>({
    resolver: zodResolver(productZodSchema),
    defaultValues: {}
  });

  const handleFileChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setImages((prevFiles) => [...prevFiles, uploadedFile]);
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = images.filter((image) => image.public_id !== public_id);
    setImages(newFiles);
  };

  const formSubmit: SubmitHandler<ProductFormValues> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { equipmentImage, ...rest } = data
    const productData = {
      equipmentImage: images,
      ...rest
    };
    try {
      const product = await createProduct(productData);
      if (product.data.success) {
        router.push('/dashboard/admin/all-products');
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error({ error });
    }
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
      <Stack alignItems='start' gap='1.5rem'>
        <Box width='25%'>
          <Stack direction='column' gap='1.5rem'>
            <ImageUploadField onFileSelect={handleFileChange} />
            <Grid2 container spacing='1rem'>
              {
                images.map((image, i) => (
                  <Grid2
                    size={6}
                    key={i}
                    position='relative'
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
                  </Grid2>
                ))
              }
            </Grid2>
          </Stack>
        </Box>
        <Form {...methods}>
          <Stack
            width='75%'
            direction='column'
            gap='1rem'
            component="form"
            onSubmit={methods.handleSubmit(formSubmit)}
          >
            <Box>
              <Typography fontSize='1.5rem' fontWeight={700}>
                General Information
              </Typography>
              <Typography color="textSecondary">
                Provide a general information about the equipment you would like to create.
              </Typography>
            </Box>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="equipmentName"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Equipment Name"
                  />
                )}
              />
            </FormItem>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="registrationNumber"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Registration Number"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='category'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Category">
                      <MenuItem value={'CIVIL'}>Civil</MenuItem>
                      <MenuItem value={'MARIN'}>Marin</MenuItem>
                      <MenuItem value={'ENGINEERING'}>Engineering</MenuItem>
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="ownerName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Owner Name"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='ownerAddress'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Owner Address'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="ownerNumber"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Owner Number"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='charteredBy'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Chartered by'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="charteredPersonPhone"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Chartered Person Phone"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='charteredPersonAddress'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Chartered Person Address'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="brandName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Brand Name"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='model'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Model'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="dimensions"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Dimensions"
                  />
                )}
              />
            </FormItem>

            <Stack gap='1rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="manufacturingYear"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Manufacturing Year"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='status'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Equipment Status">
                      {
                        equipmentStatus.map((status, i) => (
                          <MenuItem
                            key={i}
                            value={status}
                          >
                            {capitalizeLetter(status.split('_').join(' '))}
                          </MenuItem>
                        ))
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
              <Link href='/dashboard/admin/all-products'>
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

          </Stack>
        </Form>
      </Stack>
    </Box>
  );
};
