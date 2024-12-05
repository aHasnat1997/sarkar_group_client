'use client';

import capitalizeLetter from "@/utils/capitalizeLetter";
import { useState } from "react";
import { Box, Button, CircularProgress, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import ProductIcon from "@/assets/icons/product.svg";
import MailIcon from "@/assets/icons/gmail.svg";
import EditIcon from "@/assets/icons/edit.svg";
import UserIcon from "@/assets/icons/user.svg";
import ProjectIcon from "@/assets/icons/all-projects.svg";
import ProfileTab from "./profile";
import ProjectTab from "./project";
import { useSingleEmployeesQuery } from "@/redux/api/endpoints/employeesApi";
import assets from "@/assets";
// import { TEmployeeData } from "@/types";

export default function EmployeeDetails({ params }: { params: { id: string } }) {
  const [value, setValue] = useState(0);
  const { data: employeeData, isLoading } = useSingleEmployeesQuery(params.id);
  // console.log({ employeeData });

  if (isLoading) {
    return <Stack width='100%' height='80vh' alignItems='center' justifyContent='center'>
      <CircularProgress />
    </Stack>
  };

  return <>
    <Box
      sx={{
        border: '.5px solid',
        borderColor: 'grey.400',
        borderRadius: '1rem',
        overflow: 'hidden',
        padding: '1.5rem'
      }}
    >
      <Stack
        alignItems='baseline'
        justifyContent='space-between'
        borderBottom='2px solid'
        borderColor='grey.400'
        paddingBottom='1.5rem'
      >
        <Stack alignItems='center' gap='1rem'>
          {employeeData?.data?.profileImage ?
            <Image
              src={employeeData?.data?.profileImage}
              alt='Profile Image'
              width={500}
              height={500}
              className='w-36 rounded-lg'
            /> :
            <Image
              src={assets.images.userPlaceholderImage}
              alt='Profile Image'
              width={500}
              height={500}
              className='w-36 rounded-lg'
            />
          }
          <Box>
            <Typography fontSize='1.5rem' fontWeight='600'>
              {employeeData?.data?.firstName} {employeeData?.data?.lastName}
            </Typography>
            <Typography>
              <Stack alignItems='center' gap='0.5rem'>
                <ProductIcon />
                {capitalizeLetter(employeeData?.data?.role.split('_').join(' '))}
              </Stack>
            </Typography>
            <Typography>
              <Stack alignItems='center' gap='0.5rem'>
                <MailIcon />
                {employeeData?.data?.email}
              </Stack>
            </Typography>
          </Box>
        </Stack>
        <Button>
          <Stack gap='.5rem' alignItems='center'>
            <EditIcon /> Edit Profile
          </Stack>
        </Button>
      </Stack>

      <Stack mt='1.5rem' gap='1.5rem' alignItems='start'>
        <Box width='15%'>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
          >
            <Tab
              icon={<UserIcon />}
              iconPosition="start"
              label='Profile'
            />
            <Tab
              icon={<ProjectIcon />}
              iconPosition="start"
              label='Project'
            />
          </Tabs>
        </Box>
        <Box width='85%'>
          {
            value === 0 ? <ProfileTab payload={employeeData?.data} /> :
              value === 1 ? <ProjectTab payload={employeeData?.data} /> :
                <></>
          }
        </Box>
      </Stack>
    </Box>
  </>;
};
