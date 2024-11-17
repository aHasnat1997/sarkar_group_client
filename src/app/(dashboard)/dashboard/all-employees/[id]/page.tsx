'use client';

import capitalizeLetter from "@/utils/capitalizeLetter";
import { useState } from "react";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import ProductIcon from "@/assets/icons/product.svg";
import MailIcon from "@/assets/icons/gmail.svg";
import EditIcon from "@/assets/icons/edit.svg";
import UserIcon from "@/assets/icons/user.svg";
import ProjectIcon from "@/assets/icons/all-projects.svg";
import ProfileTab from "./profile";
import ProjectTab from "./project";
import { TEmployeeData } from "@/types";

export default function EmployeeDetails({ params }: { params: { id: string } }) {
  const [value, setValue] = useState(0);
  console.log(params);
  const employeeData: TEmployeeData = {
    "id": "66d7681c450b87d20857dc09",
    "firstName": "Alfreda",
    "lastName": "Turcotte",
    "profileImage": "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/b8776820-1a08-4ac3-b158-df1fe7adacfd/40b0024d-9912-4219-9970-490b48def4a4.png",
    "email": "Lance89@yahoo.com",
    "isActive": true,
    "isDeleted": false,
    "role": "ENGINEER",
    "createdAt": "2024-09-03T19:48:43.992Z",
    "updatedAt": "2024-09-03T19:48:43.992Z",
    "clients": null,
    "projectGallery": [],
    "employeeInfo": {
      "id": "66d7681c450b87d20857dc0a",
      "employeeId": "SG_SMD-ENG-f5ce568a-2ae3-4430-a601-a46e3afa3e1d",
      "userId": "66d7681c450b87d20857dc09",
      "mobile": "395-817-6928",
      "userName": "Georgette_Gibson",
      "dob": "1984-05-14T13:20:00.000Z",
      "maritalStatus": "MARRIED",
      "gender": "MALE",
      "employeeType": "APPRENTICE",
      "department": "CIVIL",
      "designation": "UX_UI_DESIGN_LEAD",
      "joiningDate": "2024-09-03T19:48:43.992Z",
      "officeLocation": "6355 Anabelle Skyway",
      "nationality": "Suriname",
      "street": "3982 Spencer Neck",
      "city": "Hilo",
      "state": "Louisiana",
      "zip": 10012,
      "appointmentLetter": "",
      "salarySlips": [],
      "relivingLetter": "",
      "experienceLetter": "",
      "assignProjects": [],
      "createdAt": "2024-09-03T19:48:43.992Z",
      "updatedAt": "2024-09-03T19:48:43.992Z"
    }
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
          <Image
            src={employeeData.profileImage}
            alt='Profile Image'
            width={500}
            height={500}
            className='w-36 rounded-lg'
          />
          <Box>
            <Typography fontSize='1.5rem' fontWeight='600'>
              {employeeData.firstName} {employeeData.lastName}
            </Typography>
            <Typography>
              <Stack alignItems='center' gap='0.5rem'>
                <ProductIcon />
                {capitalizeLetter(employeeData.role.split('_').join(' '))}
              </Stack>
            </Typography>
            <Typography>
              <Stack alignItems='center' gap='0.5rem'>
                <MailIcon />
                {employeeData.email}
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
            value === 0 ? <ProfileTab payload={employeeData} /> :
              value === 1 ? <ProjectTab payload={employeeData} /> :
                <></>
          }
        </Box>
      </Stack>
    </Box>
  </>;
};
