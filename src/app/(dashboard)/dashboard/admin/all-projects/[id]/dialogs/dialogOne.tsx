import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Box, Button, Stack, Typography } from "@mui/material";
import EditIcon from "@/assets/icons/edit.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import { ProjectFormValues, projectZodSchema } from "../../add-new-project/form/formZodSchema";

export default function DialogOne({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  const methods = useForm<ProjectFormValues>({
    resolver: zodResolver(projectZodSchema),
    defaultValues: {}
  });

  const formSubmit: SubmitHandler<ProjectFormValues> = (data) => {
    console.log("Form submitted with:", data);
    setOpen(false);
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Project
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth='md'
    >
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
          <Typography fontSize='1.25rem' fontWeight={600}>Project</Typography>
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
            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="projectName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Project Name"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='department'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Department'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="client"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Client"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='email'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Email Address'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="startingDate"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Starting Date"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='estimatedFinishDate'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Estimated Finish Date'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="productType"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Product Type"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='projectType'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='Project Type'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="address"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Address"
                  />
                )}
              />
            </FormItem>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='city'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='City'
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="state"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="State"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='zip'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='ZIP Code'
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
              <Button
                variant="outlined"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
              >
                Save
              </Button>
            </Stack>

          </Box>
        </Form>
      </Box>
    </ResponsiveDialog>
  </>;
}
