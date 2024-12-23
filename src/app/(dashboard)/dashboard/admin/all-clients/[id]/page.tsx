'use client';

import { Box, CircularProgress, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ProjectIcon from '@/assets/icons/all-projects.svg';
import EmployeeIcon from "@/assets/icons/all-employees.svg";
import UploadIcon from "@/assets/icons/upload.svg";
import TabOne from "./tabs/tabOne";
import TabTwo from "./tabs/tabTwo";
import TabThree from "./tabs/tabThree";
import { useSingleClientsQuery } from "@/redux/api/endpoints/clientsApi";
import Image from "next/image";
import assets from "@/assets";
import { TClient } from "@/types";

export default function ClientDetails({ params }: { params: { id: string } }) {
  const { data: clientData, isLoading } = useSingleClientsQuery(params.id);
  const [value, setValue] = useState(0);
  const tebContent = [
    { index: 0, label: 'Client Details', icon: <EmployeeIcon /> },
    { index: 1, label: 'Project List', icon: <ProjectIcon /> },
    { index: 2, label: 'Upload Documents', icon: <UploadIcon /> },
  ];

  if (isLoading) {
    return <Stack width='100%' height='80vh' alignItems='center' justifyContent='center'>
      <CircularProgress />
    </Stack>
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
      <Stack
        alignItems='start'
        gap='1.5rem'
      >
        <Box>
          {(clientData.data as TClient)?.user.profileImage?.secure_url ?
            <Image
              src={clientData.data?.user.profileImage?.secure_url}
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
        </Box>
        <Box>
          <Typography fontSize='1.5rem' fontWeight='600'>
            {(clientData.data as TClient)?.user.firstName} {(clientData.data as TClient)?.user.lastName}
          </Typography>
        </Box>
      </Stack>
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

      <Box>
        {
          value === 0 ? <TabOne payload={clientData.data} /> :
            value === 1 ? <TabTwo payload={clientData.data} /> :
              value === 2 ? <TabThree payload={clientData.data.documents} /> :
                <></>
        }
      </Box>
    </Box>
  );
};
