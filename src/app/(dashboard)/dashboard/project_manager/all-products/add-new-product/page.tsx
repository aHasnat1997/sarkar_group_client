'use client';

import DockUploadField from "@/app/(dashboard)/components/ui/ImageUploadField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductFormValues, productZodSchema } from "./form/formZodSchema";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import Link from "next/link";

export default function AddNewProduct() {
  const methods = useForm<ProductFormValues>({
    resolver: zodResolver(productZodSchema),
    defaultValues: {}
  });

  const formSubmit: SubmitHandler<ProductFormValues> = (data) => {
    console.log("Form submitted with:", data);
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
          <DockUploadField label="Equipment Photo" />
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
                    <FormInput
                      {...field}
                      label='Category'
                    />
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
                    <FormInput
                      {...field}
                      label='Equipment Status'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
              <Link href='/dashboard/project_manager/all-products'>
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
              >
                Save
              </Button>
            </Stack>

          </Stack>
        </Form>
      </Stack>
    </Box>
  );
};
