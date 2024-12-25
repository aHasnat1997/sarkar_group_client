'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProjectFormValues, projectZodSchema } from "./form/formZodSchema";
import { Form, FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import Link from "next/link";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { useAllClientsQuery } from "@/redux/api/endpoints/clientsApi";
import { useState } from "react";
import { TClient } from "@/types";
import { useAllProjectManagersQuery } from "@/redux/api/endpoints/employeesApi";
import { useCreateProjectsMutation } from "@/redux/api/endpoints/projectsApi";
import { useRouter } from "next/navigation";

export default function AddNewProject() {
  const enumsType = ['CIVIL', 'MARIN', 'ENGINEERING'];
  const router = useRouter();

  const [clientEmail, setClientEmail] = useState<string>('');
  const [pmEmail, setPMEmail] = useState<string>('');

  const { data: clientData } = useAllClientsQuery({ limit: 10, 'user.email': clientEmail });
  const { data: pmData } = useAllProjectManagersQuery({ limit: 10, 'user.email': pmEmail });
  const [createProject, { isLoading, isError, isSuccess }] = useCreateProjectsMutation();

  const methods = useForm<ProjectFormValues>({
    resolver: zodResolver(projectZodSchema)
  });

  const formSubmit: SubmitHandler<ProjectFormValues> = async (data) => {
    const { startDate, estimatedEndDate, ...rest } = data;
    const projectData = {
      ...rest,
      startDate: new Date(startDate).toISOString(),
      estimatedEndDate: new Date(estimatedEndDate).toISOString()
    };
    console.log("Form submitted with:", { projectData });
    try {
      const project = await createProject(projectData);
      console.log({ project });
      if (project?.data?.success) {
        router.push(`/dashboard/admin/all-projects/${project.data.id}`)
      } else {
        console.log({ project });
      }
    } catch (error) {
      console.error(error);
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
      <Box mb='1.5rem'>
        <Typography fontSize='1.25rem' fontWeight={600}>Create Project</Typography>
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
                name="clientId"
                control={methods.control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    value={clientData?.data.find((client: TClient) => client.id === field.value) || null}
                    onChange={(_, newValue) => field.onChange(newValue?.id || '')}
                    disablePortal
                    options={clientData?.data || []}
                    getOptionLabel={(option: TClient) => option?.user?.email || ''}
                    renderInput={(params) => (
                      <FormInput
                        {...params}
                        label="Client Email"
                        onChange={(e) => setClientEmail(e.target.value)}
                      />
                    )}
                  />
                )}
              />
            </FormItem>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name='projectManagerId'
                control={methods.control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value={pmData?.data.find((pm: any) => pm?.id === field.value) || null}
                    onChange={(_, newValue) => field.onChange(newValue?.id || '')}
                    disablePortal
                    options={pmData?.data || []}
                    getOptionLabel={(option) => option?.user?.email || ''}
                    renderInput={(params) => (
                      <FormInput
                        {...params}
                        label="Project Manager Email"
                        onChange={(e) => setPMEmail(e.target.value)}
                      />
                    )}
                  />
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
                    disablePast
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
                    disablePast
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
              {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Add Project'}
            </Button>
          </Stack>

        </Box>
      </Form>
    </Box>
  );
};
