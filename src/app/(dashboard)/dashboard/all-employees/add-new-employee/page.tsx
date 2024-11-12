'use client';

import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import UserIcon from '@/assets/icons/user.svg';
import BriefcaseIcon from "@/assets/icons/briefcase-04.svg";
import DocumentIcon from '@/assets/icons/document-text.svg';
import LockIcon from "@/assets/icons/lock.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import { useRouter } from "next/navigation";
import TabOne from "./form/tabOne";
import TabTwo from "./form/tabTwo";
import TabThree from "./form/tabThree";
import TabFour from "./form/tabFour";
import FormButton from "./form/formButton";
import { EmployeeFormValues, employeeZodSchema } from "./form/formZodSchema";

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
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      dob: '',
      maritalStatus: '',
      gender: '',
      nationality: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      employeeId: '',
      userName: '',
      employeeType: '',
      department: '',
      designation: '',
      workingDays: '',
      joiningDate: '',
      officeLocation: '',
      appointmentLetter: '',
      salarySlips: '',
      relivingLetter: '',
      experienceLetter: '',
      projectName: '',
      role: '',
      roleDesignation: '',
      optionalMessage: ''
    }
  });

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
          {
            value === 0 ? <TabOne methods /> :
              value === 1 ? <TabTwo methods /> :
                value === 2 ? <TabThree /> :
                  value === 3 ? <TabFour methods /> :
                    <></>
          }
        </Box>

        <Box>
          <FormButton
            value={value}
            setValue={setValue}
            tebCount={tebContent.length - 1}
          />
        </Box>
      </Box>
    </Form>
  );
};
