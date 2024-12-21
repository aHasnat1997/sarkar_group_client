/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import UserIcon from '@/assets/icons/user.svg';
import BriefcaseIcon from "@/assets/icons/briefcase-04.svg";
import DocumentIcon from '@/assets/icons/document-text.svg';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import { useRouter } from "next/navigation";
import TabOne from "../form/tabOne";
import TabTwo from "../form/tabTwo";
import TabThree from "../form/tabThree";
import FormButton from "../form/formButton";
import { EmployeeFormValues, employeeZodSchema } from "../form/formZodSchema";
import { useCrateAdminMutation, useCrateEngineerMutation, useCrateProjectManagerMutation } from "@/redux/api/endpoints/employeesApi";
import { TUploadedFile } from "@/types";

export default function AddNewEmployee({ params }: { params: { role: string } }) {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [image, setImage] = useState<Partial<TUploadedFile> | null>(null);
  const [files, setFiles] = useState<Partial<TUploadedFile>[]>([]);

  const [createAdmin, {
    isLoading: isLoadingAdmin,
    isSuccess: isSuccessAdmin,
    isError: isErrorAdmin
  }] = useCrateAdminMutation();
  const [createProjectManager, {
    isLoading: isLoadingProjectManager,
    isSuccess: isSuccessProjectManager,
    isError: isErrorProjectManager
  }] = useCrateProjectManagerMutation();
  const [createEngineer, {
    isLoading: isLoadingEngineer,
    isSuccess: isSuccessEngineer,
    isError: isErrorEngineer
  }] = useCrateEngineerMutation();

  const tebContent = [
    { index: 0, label: 'Personal Information', icon: <UserIcon /> },
    { index: 1, label: 'Professional Information', icon: <BriefcaseIcon /> },
    { index: 2, label: 'Documents', icon: <DocumentIcon /> }
  ];

  const methods = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeZodSchema)
  });

  const formSubmit: SubmitHandler<EmployeeFormValues> = async (data) => {
    const { dob, ...rest } = data;
    const employeeData = {
      dob: new Date(dob).toISOString(),
      profileImage: image,
      documents: files,
      ...rest
    };

    console.log("Form submitted with:", employeeData);

    if (params.role === 'admin') {
      await createAdmin(employeeData);
      router.push('/dashboard/admin/all-employees');
    } else if (params.role === 'project-manager') {
      await createProjectManager(employeeData);
      router.push('/dashboard/admin/all-employees');
    } else if (params.role === 'engineer') {
      await createEngineer(employeeData);
      router.push('/dashboard/admin/all-employees');
    }

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
            value === 0 ? <TabOne methods image={image} setImage={setImage} /> :
              value === 1 ? <TabTwo methods /> :
                value === 2 ? <TabThree files={files} setFiles={setFiles} /> :
                  <></>
          }
        </Box>

        <Box>
          <FormButton
            value={value}
            setValue={setValue}
            tebCount={tebContent.length - 1}
            isLoading={isLoadingAdmin || isLoadingProjectManager || isLoadingEngineer}
            isSuccess={isSuccessAdmin || isSuccessProjectManager || isSuccessEngineer}
            isError={isErrorAdmin || isErrorProjectManager || isErrorEngineer}
          />
        </Box>
      </Box>
    </Form>
  );
};
