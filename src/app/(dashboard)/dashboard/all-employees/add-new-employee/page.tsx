'use client';

import { Box, Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import UserIcon from '@/assets/icons/user.svg';
import BriefcaseIcon from "@/assets/icons/briefcase-04.svg";
import DocumentIcon from '@/assets/icons/document-text.svg';
import LockIcon from "@/assets/icons/lock.svg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const employeeZodSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Need valid email' }),
  role: z.enum(['ADMIN', 'USER', 'MANAGER']),
  department: z.string().min(2, { message: 'Department is required' }),
  isActive: z.boolean()
});

type EmployeeFormValues = z.infer<typeof employeeZodSchema>;

export default function AddNewEmployee() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const tebContent = [
    { index: 0, label: 'Personal Information', icon: <UserIcon /> },
    { index: 1, label: 'Professional Information', icon: <BriefcaseIcon /> },
    { index: 2, label: 'Documents', icon: <DocumentIcon /> },
    { index: 3, label: 'Assign Role', icon: <LockIcon /> }
  ];

  const methods = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeZodSchema),
    defaultValues: {
      name: '',
      email: '',
      role: 'ADMIN',
      department: 'Software Engineer',
      isActive: false
    }
  });

  const handleNext = () => {
    if (value < tebContent.length - 1) {
      setValue(value + 1);
    }
  };

  const formSubmit: SubmitHandler<EmployeeFormValues> = (data) => {
    console.log("Form submitted with:", data);
    router.push('/dashboard/all-employees');
  };

  return (
    <Form {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(formSubmit)}
        sx={{
          border: '.5px solid',
          borderColor: 'grey.400',
          borderRadius: '1rem',
          overflow: 'hidden',
          padding: '0 1.5rem'
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            aria-label="basic tabs example"
          >
            {tebContent.map(data => (
              <Tab
                key={data.index}
                icon={data.icon}
                iconPosition="start"
                label={data.label}
              />
            ))}
          </Tabs>
        </Box>

        <Box p={3}>
          {value === 0 && (
            <>
              <FormItem>
                <FormField name="name" control={methods.control} render={({ field }) => (
                  <FormInput {...field} label="Full Name" />
                )} />
              </FormItem>
              <FormItem>
                <FormField name='email' control={methods.control} render={({ field }) => (
                  <FormInput {...field} label='Email' />
                )} />
              </FormItem>
            </>
          )}
          {value === 1 && (
            <>
              <FormItem>
                <FormField name="department" control={methods.control} render={({ field }) => (
                  <FormInput {...field} label="Department" />
                )} />
              </FormItem>
              <FormItem>
                <FormField name="role" control={methods.control} render={({ field }) => (
                  <FormInput {...field} label="Role" placeholder="Role (e.g., ADMIN, USER)" />
                )} />
              </FormItem>
            </>
          )}
          {value === 2 && (
            <Box>
              <p>Documents tab content (if any)</p>
            </Box>
          )}
          {value === 3 && (
            <Stack width="60%" justifyContent="space-between">
              <FormItem>
                <Controller name="isActive" control={methods.control} render={({ field }) => (
                  <FormControlLabel control={<Checkbox {...field} />} label="Is Active" labelPlacement="end" />
                )} />
              </FormItem>
            </Stack>
          )}
        </Box>

        {/* Navigation buttons */}
        <Stack direction="row" spacing={2} justifyContent="flex-end" pb={2}>
          {value > 0 ? (
            <Button variant="outlined" type="button" onClick={() => setValue(value - 1)}>
              Previous
            </Button>
          ) : (
            <Link href='/dashboard/all-employees'>
              <Button variant="outlined" type="button">
                Cancel
              </Button>
            </Link>
          )}
          <Button variant="contained" type="button" onClick={handleNext} sx={{ display: `${value < tebContent.length - 1 ? 'block' : 'none'}` }}>
            Next
          </Button>
          <Button variant="contained" type="submit" sx={{ display: `${value < tebContent.length - 1 ? 'none' : 'block'}` }}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Form>
  );
};
