'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProjectFormValues, projectZodSchema } from "./form/formZodSchema";
import { Form, FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import Link from "next/link";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { useAllClientsQuery } from "@/redux/api/endpoints/clientsApi";
import { useState } from "react";
import { TClient } from "@/types";

export default function AddNewProject() {
  const enumsType = ['CIVIL', 'MARIN', 'ENGINEERING'];

  const [clientEmail, setClientEmail] = useState<string>('');
  const { data: clientData } = useAllClientsQuery({ limit: 10, 'user.email': clientEmail });

  const methods = useForm<ProjectFormValues>({
    resolver: zodResolver(projectZodSchema),
    defaultValues: {}
  });

  const formSubmit: SubmitHandler<ProjectFormValues> = (data) => {
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
                  <FormSelect
                    {...field}
                    label="Client Email"
                    renderValue={() => clientEmail}
                  >
                    <FormInput
                      autoFocus
                      onChange={(e) => setClientEmail(e.target.value)}
                    />
                    <Box>
                      {
                        clientData?.data?.map((data: TClient) => <MenuItem
                          key={data?.id}
                          value={data?.id}
                        >
                          {data?.user?.email}
                        </MenuItem>)
                      }
                    </Box>
                  </FormSelect>
                )}
              />
            </FormItem>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name='projectManagerId'
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label='Project Manager Email'
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
            >
              Add Project
            </Button>
          </Stack>

        </Box>
      </Form>
    </Box>
  );
};
