'use client';

import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ProjectIcon from '@/assets/icons/all-projects.svg';
import EmployeeIcon from "@/assets/icons/all-employees.svg";
import UploadIcon from "@/assets/icons/upload.svg";
import TabOne from "./tabs/tabOne";
import TabTwo from "./tabs/tabTwo";
import TabThree from "./tabs/tabThree";
import { TProject } from "@/types";
import ProjectDialogButtons from "./dialogs";
import { useSingleClientsQuery } from "@/redux/api/endpoints/clientsApi";

export default function ClientDetails({ params }: { params: { id: string } }) {
  console.log(params);
  const projectDetails: TProject = {
    "id": "66d76cca450b87d20857dc88",
    "projectName": "Harbor Point Marina",
    "department": "ENGINEERING",
    "clientId": "66d768f5450b87d20857dc28",
    "createdBy": "66d766fe065bcecc665e7500",
    "projectManagerId": "66d767d7450b87d20857dbec",
    "startDate": "2024-01-15T09:00:00.000Z",
    "estimatedEndDate": "2025-06-20T17:00:00.000Z",
    "projectType": "ENGINEERING",
    "productType": "CIVIL",
    "status": "ON_HOLD",
    "street": "2519 Margarette Islands",
    "city": "South Cecil",
    "state": "Minnesota",
    "zip": 10010,
    "createdAt": "2024-09-03T20:08:42.114Z",
    "updatedAt": "2024-09-03T20:26:30.991Z",
    "projectManager": {
      "id": "66d767d7450b87d20857dbec",
      "mobile": "468-768-0958",
      "employeeType": "ON_SITE",
      "department": "ENGINEERING",
      "designation": "HR_ASSISTANT",
      "officeLocation": "70451 Jesse Skyway",
      "user": {
        "firstName": "Serena",
        "lastName": "Bode",
        "email": "Anjali.Beer73@gmail.com",
        "profileImage": null
      }
    },
    "client": {
      "id": "66d768f5450b87d20857dc28",
      "mobile": "830-321-7588",
      "user": {
        "firstName": "Cleta",
        "lastName": "Lowe",
        "email": "Sage88@gmail.com",
        "profileImage": null
      }
    },
    "engineers": [
      {
        "id": "66d76823450b87d20857dc10",
        "mobile": "930-822-1175",
        "employeeType": "CONTRACTOR",
        "department": "MARIN",
        "designation": "DATA_ANALYST",
        "officeLocation": "3394 Becker Mountains",
        "user": {
          "firstName": "Hank",
          "lastName": "Barrows",
          "email": "Princess.Bogisich@gmail.com",
          "profileImage": null
        }
      }
    ],
    "products": [
      {
        "id": "66d76b9a450b87d20857dc63",
        "equipmentId": "EQUIP-0665e621-46ff-4aa2-9d82-0af41f855b6a",
        "equipmentName": "Bulldozer",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG6789",
        "category": "MARIN",
        "status": "STAND_BY",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Chester Konopelski",
        "ownerAddress": "36360 Jeffrey Corner",
        "ownerNumber": "711-473-3474",
        "charteredBy": "Rogelio Crona",
        "charteredPersonPhone": "938-426-6173",
        "charteredPersonAddress": "273 Bernhard Underpass",
        "brandName": "Caterpillar",
        "model": "ZX350LC",
        "dimensions": "5m x 2m x 2.5m",
        "manufacturingYear": "1997",
        "createdAt": "2024-09-03T20:03:38.606Z",
        "updatedAt": "2024-09-03T20:03:38.606Z"
      },
      {
        "id": "66d76bb2450b87d20857dc78",
        "equipmentId": "EQUIP-d91e11a1-3f2d-4546-8930-bc95a603cc09",
        "equipmentName": "Grader",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG3344",
        "category": "CIVIL",
        "status": "STAND_BY",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Dr. Faith Sanford",
        "ownerAddress": "4377 Treutel Station",
        "ownerNumber": "608-853-5729",
        "charteredBy": "Rolando Lowe",
        "charteredPersonPhone": "822-431-5726",
        "charteredPersonAddress": "40697 Rempel Road",
        "brandName": "Komatsu",
        "model": "A40G",
        "dimensions": "6.5m x 2.5m x 3.5m",
        "manufacturingYear": "2015",
        "createdAt": "2024-09-03T20:04:02.958Z",
        "updatedAt": "2024-09-03T20:04:02.958Z"
      }
    ],
    "projectGallery": [
      {
        "id": "66db563e472d8e442032e459",
        "projectId": "66d76cca450b87d20857dc88",
        "title": "title-1",
        "image": "https://image.com/",
        "uploaderId": "66d766fe065bcecc665e74ff",
        "comments": [
          {
            "userId": "66d766fe065bcecc665e74ff",
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "profileImage": null,
            "role": "ADMIN",
            "comment": "Nice..."
          },
          {
            "userId": "66d766fe065bcecc665e74ff",
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "profileImage": null,
            "role": "ADMIN",
            "comment": "Cool..."
          }
        ],
        "createdAt": "2024-09-06T19:21:34.564Z",
        "updatedAt": "2024-09-06T19:55:17.082Z"
      },
      {
        "id": "66db5a62343ac08cad0bd5eb",
        "projectId": "66d76cca450b87d20857dc88",
        "title": "title-3",
        "image": "https://image.com/",
        "uploaderId": "66d766fe065bcecc665e74ff",
        "comments": [],
        "createdAt": "2024-09-06T19:39:14.802Z",
        "updatedAt": "2024-09-06T19:39:14.802Z"
      }
    ]
  };

  const { data, isLoading } = useSingleClientsQuery(params.id);
  console.log({ data, isLoading });

  const [value, setValue] = useState(0);
  const tebContent = [
    { index: 0, label: 'Client Details', icon: <EmployeeIcon /> },
    { index: 1, label: 'Product List', icon: <ProjectIcon /> },
    { index: 2, label: 'Upload Documents', icon: <UploadIcon /> },
  ];

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
      <Box>
        <Stack
          alignItems='baseline'
          justifyContent='space-between'
        >
          <Stack alignItems='center' gap='1rem'>
            <Box>
              <Typography fontSize='1.5rem' fontWeight='600'>
                {projectDetails.projectName}
              </Typography>
              <Typography color='text.secondary'>
                4 Members
              </Typography>
            </Box>
          </Stack>
          <ProjectDialogButtons value={value} />
        </Stack>
      </Box>
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
          value === 0 ? <TabOne payload={projectDetails} /> :
            value === 1 ? <TabTwo payload={projectDetails} /> :
              value === 2 ? <TabThree payload={projectDetails} /> :
                <></>
        }
      </Box>
    </Box>
  );
};
