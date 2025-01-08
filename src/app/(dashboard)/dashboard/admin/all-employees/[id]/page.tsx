'use client';

import capitalizeLetter from "@/utils/capitalizeLetter";
import { useState } from "react";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ProductIcon from "@/assets/icons/product.svg";
import MailIcon from "@/assets/icons/gmail.svg";
import UserIcon from "@/assets/icons/user.svg";
import ProjectIcon from "@/assets/icons/all-projects.svg";
import ProfileTab from "./profile";
import ProjectTab from "./project";
import { useSingleEmployeesQuery } from "@/redux/api/endpoints/employeesApi";
import assets from "@/assets";
import ProfileDialogButtons from "./profile/dialogs";

export default function EmployeeDetails({ params }: { params: { id: string } }) {
  const [value, setValue] = useState<number>(0);
  const [profileTab, setProfileTab] = useState<number>(0);
  const { data: employeeData, isLoading } = useSingleEmployeesQuery(params.id);

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
              src={employeeData?.data?.profileImage?.secure_url}
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

        {
          value === 0 ?
            <ProfileDialogButtons value={profileTab} employeeData={employeeData?.data} />
            : <></>
        }
      </Stack>

      <Stack gap='1.5rem' alignItems='start'>
        <Box width='15%' mt='1rem'>
          <Button
            fullWidth
            variant={value === 0 ? 'contained' : 'outlined'}
            onClick={() => setValue(0)}
            sx={{
              borderRadius: '.5rem .5rem 0 0'
            }}
          >
            <UserIcon /> <span className='ml-4'>Profile</span>
          </Button>
          <Button
            fullWidth
            variant={value === 1 ? 'contained' : 'outlined'}
            onClick={() => setValue(1)}
            sx={{
              borderRadius: '0 0 .5rem .5rem'
            }}
          >
            <ProjectIcon /> <span className='ml-4'>Project</span>
          </Button>
        </Box>
        <Box width='85%'>
          {
            value === 0 ? <ProfileTab value={profileTab} setValue={setProfileTab} payload={employeeData?.data} /> :
              value === 1 ? <ProjectTab payload={employeeData?.data} /> :
                <></>
          }
        </Box>
      </Stack>
    </Box>
  </>;
};
