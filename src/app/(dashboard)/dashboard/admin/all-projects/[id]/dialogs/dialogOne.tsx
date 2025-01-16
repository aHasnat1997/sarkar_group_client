import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import EditIcon from "@/assets/icons/edit.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import { ProjectUpdateFormValues, projectUpdateSchema } from "../../add-new-project/form/formZodSchema";
import capitalizeLetter from "@/utils/capitalizeLetter";
import Link from "next/link";
import { useUpdateProjectMutation } from "@/redux/api/endpoints/projectsApi";
import { TProject } from "@/types";
import dayjs from "dayjs";

export default function DialogOne(
  { open, setOpen, payload }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: TProject }
) {
  const enumsType = ['CIVIL', 'MARIN', 'ENGINEERING'];
  const projectStatusType = ['NOT_STARTED', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELLED', 'DELAYED', 'UNDER_REVIEW', 'APPROVED', 'ARCHIVED']

  const [updateProjectData, { isLoading, isError, isSuccess }] = useUpdateProjectMutation();

  const methods = useForm<ProjectUpdateFormValues>({
    resolver: zodResolver(projectUpdateSchema),
    defaultValues: {
      projectName: payload?.projectName,
      department: payload?.department as "CIVIL" | "MARIN" | "ENGINEERING",
      startDate: dayjs(payload?.startDate),
      estimatedEndDate: dayjs(payload?.estimatedEndDate),
      productType: payload?.productType as "CIVIL" | "MARIN" | "ENGINEERING",
      projectType: payload?.projectType as "CIVIL" | "MARIN" | "ENGINEERING",
      status: payload?.status,
      street: payload?.street,
      city: payload?.city,
      state: payload?.state,
      zip: payload?.zip
    }
  });

  const formSubmit: SubmitHandler<ProjectUpdateFormValues> = async (data) => {
    const { startDate, estimatedEndDate, ...rest } = data;
    const projectData = {
      ...rest,
      startDate: new Date(startDate).toISOString(),
      estimatedEndDate: new Date(estimatedEndDate).toISOString()
    };
    try {
      const project = await updateProjectData({ data: projectData, projectId: payload?.id });
      if (project?.data?.success) {
        setOpen(false)
      }
    } catch (error) {
      console.error(error);
    }
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
                    <FormSelect {...field} label="Select Department">
                      {
                        enumsType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data)
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="startDate"
                  control={methods.control}
                  render={({ field }) => (
                    <FormDatePicker
                      {...field}
                      label="Starting Date"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='estimatedEndDate'
                  control={methods.control}
                  render={({ field }) => (
                    <FormDatePicker
                      {...field}
                      label="Estimated Finish Date"
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
                    <FormSelect {...field} label="Product Type">
                      {
                        enumsType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data)
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='projectType'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Project Type">
                      {
                        enumsType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data)
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>

              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='status'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Project Status">
                      {
                        projectStatusType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data.split('_').join(' '))
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="street"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Street"
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
                      type='number'
                      onChange={(event) => field.onChange(event.target.value ? Number(event.target.value) : '')}
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
              <Link href='/dashboard/admin/all-projects'>
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
                {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Update Project'}
              </Button>
            </Stack>

          </Box>
        </Form>
      </Box>
    </ResponsiveDialog>
  </>;
}
