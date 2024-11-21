'use client';

import { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@/assets/icons/add-circle.svg';
import SMDDataTable from "../../components/ui/SMDDataTable";
import ViewIcon from "@/assets/icons/view.svg";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";

export default function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const clientData = {
    "success": true,
    "statusCode": 200,
    "message": "All client found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 23,
      "totalPage": 3
    },
    "data": [
      {
        "id": "66d768d0450b87d20857dc20",
        "userId": "66d768d0450b87d20857dc1f",
        "mobile": "680-253-2203",
        "productList": [],
        "street": "2117 Lueilwitz Mills",
        "city": "New Ashtyn",
        "state": "",
        "zip": 10001,
        "documents": [],
        "createdAt": "2024-09-03T19:51:43.914Z",
        "updatedAt": "2024-09-03T19:51:43.914Z",
        "user": {
          "firstName": "Lucinda",
          "lastName": "Grady",
          "email": "Minerva_Doyle@hotmail.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768ee450b87d20857dc22",
        "userId": "66d768ee450b87d20857dc21",
        "mobile": "441-953-3483",
        "productList": [],
        "street": "8833 Heathcote Ridge",
        "city": "Hoover",
        "state": "Florida",
        "zip": 10085,
        "documents": [],
        "createdAt": "2024-09-03T19:52:13.477Z",
        "updatedAt": "2024-09-03T19:52:13.477Z",
        "user": {
          "firstName": "Wyman",
          "lastName": "Yundt",
          "email": "Talia.Walsh@yahoo.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768f1450b87d20857dc24",
        "userId": "66d768f1450b87d20857dc23",
        "mobile": "977-975-9243",
        "productList": [],
        "street": "602 Dwight Course",
        "city": "Castro Valley",
        "state": "California",
        "zip": 10046,
        "documents": [],
        "createdAt": "2024-09-03T19:52:16.212Z",
        "updatedAt": "2024-09-03T19:52:16.212Z",
        "user": {
          "firstName": "Neil",
          "lastName": "Borer",
          "email": "Thelma_Dibbert72@yahoo.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768f3450b87d20857dc26",
        "userId": "66d768f3450b87d20857dc25",
        "mobile": "888-391-7777",
        "productList": [],
        "street": "7586 Cummings Rapids",
        "city": "Olsonshire",
        "state": "Michigan",
        "zip": 10062,
        "documents": [],
        "createdAt": "2024-09-03T19:52:18.290Z",
        "updatedAt": "2024-09-03T19:52:18.290Z",
        "user": {
          "firstName": "Bryana",
          "lastName": "Abbott",
          "email": "King15@hotmail.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768f5450b87d20857dc28",
        "userId": "66d768f5450b87d20857dc27",
        "mobile": "830-321-7588",
        "productList": [],
        "street": "811 Ezekiel Stravenue",
        "city": "North Lorinehaven",
        "state": "Connecticut",
        "zip": 10020,
        "documents": [],
        "createdAt": "2024-09-03T19:52:20.318Z",
        "updatedAt": "2024-09-03T19:52:20.318Z",
        "user": {
          "firstName": "Cleta",
          "lastName": "Lowe",
          "email": "Sage88@gmail.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": [
          {
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
            "updatedAt": "2024-09-03T20:26:30.991Z"
          },
          {
            "id": "66d76cdb450b87d20857dc89",
            "projectName": "Mountain Peak Villas",
            "department": "MARIN",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-01-25T09:00:00.000Z",
            "estimatedEndDate": "2025-06-24T17:00:00.000Z",
            "projectType": "CIVIL",
            "productType": "CIVIL",
            "status": "ON_HOLD",
            "street": "007 Jayda Forges",
            "city": "Thompsonchester",
            "state": "Missouri",
            "zip": 10034,
            "createdAt": "2024-09-03T20:08:59.724Z",
            "updatedAt": "2024-09-03T20:08:59.724Z"
          },
          {
            "id": "66d76cde450b87d20857dc8a",
            "projectName": "Riverstone Villas",
            "department": "ENGINEERING",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-01-25T09:00:00.000Z",
            "estimatedEndDate": "2025-06-24T17:00:00.000Z",
            "projectType": "CIVIL",
            "productType": "CIVIL",
            "status": "ARCHIVED",
            "street": "276 Farrell Points",
            "city": "Kleinstad",
            "state": "Indiana",
            "zip": 10092,
            "createdAt": "2024-09-03T20:09:02.388Z",
            "updatedAt": "2024-09-03T20:09:02.388Z"
          },
          {
            "id": "66d76cdf450b87d20857dc8b",
            "projectName": "Serenity Valley Project",
            "department": "MARIN",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-01-25T09:00:00.000Z",
            "estimatedEndDate": "2025-06-24T17:00:00.000Z",
            "projectType": "MARIN",
            "productType": "ENGINEERING",
            "status": "IN_PROGRESS",
            "street": "225 Mayert Station",
            "city": "Pine Hills",
            "state": "Georgia",
            "zip": 10040,
            "createdAt": "2024-09-03T20:09:03.568Z",
            "updatedAt": "2024-09-03T20:09:03.568Z"
          },
          {
            "id": "66d76ce0450b87d20857dc8c",
            "projectName": "Willow Springs Community",
            "department": "MARIN",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-01-25T09:00:00.000Z",
            "estimatedEndDate": "2025-06-24T17:00:00.000Z",
            "projectType": "MARIN",
            "productType": "CIVIL",
            "status": "DELAYED",
            "street": "100 Arielle Pass",
            "city": "Haleyton",
            "state": "Kentucky",
            "zip": 10037,
            "createdAt": "2024-09-03T20:09:04.539Z",
            "updatedAt": "2024-09-03T20:09:04.539Z"
          },
          {
            "id": "66d76cec450b87d20857dc8d",
            "projectName": "Horizon Plaza",
            "department": "CIVIL",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-03-25T09:00:00.000Z",
            "estimatedEndDate": "2025-04-24T17:00:00.000Z",
            "projectType": "ENGINEERING",
            "productType": "ENGINEERING",
            "status": "NOT_STARTED",
            "street": "603 Lempi Road",
            "city": "Lake Jacklynmouth",
            "state": "Indiana",
            "zip": 10042,
            "createdAt": "2024-09-03T20:09:16.041Z",
            "updatedAt": "2024-09-03T20:09:16.041Z"
          },
          {
            "id": "66d76ced450b87d20857dc8e",
            "projectName": "Horizon Plaza",
            "department": "CIVIL",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-03-25T09:00:00.000Z",
            "estimatedEndDate": "2025-04-24T17:00:00.000Z",
            "projectType": "ENGINEERING",
            "productType": "MARIN",
            "status": "APPROVED",
            "street": "324 Spinka Gateway",
            "city": "Tyshawnshire",
            "state": "Colorado",
            "zip": 10037,
            "createdAt": "2024-09-03T20:09:17.366Z",
            "updatedAt": "2024-09-03T20:09:17.366Z"
          },
          {
            "id": "66d76cee450b87d20857dc8f",
            "projectName": "Bayside Promenade",
            "department": "MARIN",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-03-25T09:00:00.000Z",
            "estimatedEndDate": "2025-04-24T17:00:00.000Z",
            "projectType": "CIVIL",
            "productType": "ENGINEERING",
            "status": "ARCHIVED",
            "street": "74779 Jazlyn Brook",
            "city": "Federicoshire",
            "state": "Iowa",
            "zip": 10008,
            "createdAt": "2024-09-03T20:09:18.388Z",
            "updatedAt": "2024-09-03T20:09:18.388Z"
          },
          {
            "id": "66d76cef450b87d20857dc90",
            "projectName": "Evergreen Valley Estates",
            "department": "MARIN",
            "clientId": "66d768f5450b87d20857dc28",
            "createdBy": "66d766fe065bcecc665e7500",
            "projectManagerId": "66d767e7450b87d20857dbf2",
            "startDate": "2024-03-25T09:00:00.000Z",
            "estimatedEndDate": "2025-04-24T17:00:00.000Z",
            "projectType": "CIVIL",
            "productType": "ENGINEERING",
            "status": "CANCELLED",
            "street": "77128 Kirlin Inlet",
            "city": "New Majorberg",
            "state": "Florida",
            "zip": 10072,
            "createdAt": "2024-09-03T20:09:19.321Z",
            "updatedAt": "2024-09-03T20:09:19.321Z"
          }
        ]
      },
      {
        "id": "66d768f7450b87d20857dc2a",
        "userId": "66d768f7450b87d20857dc29",
        "mobile": "442-317-0958",
        "productList": [],
        "street": "279 Sherwood Drive",
        "city": "Harberton",
        "state": "Arkansas",
        "zip": 10100,
        "documents": [],
        "createdAt": "2024-09-03T19:52:22.448Z",
        "updatedAt": "2024-09-03T19:52:22.448Z",
        "user": {
          "firstName": "Tyra",
          "lastName": "Jerde",
          "email": "Cristina61@yahoo.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768f9450b87d20857dc2c",
        "userId": "66d768f9450b87d20857dc2b",
        "mobile": "627-860-5773",
        "productList": [],
        "street": "507 Prosacco Canyon",
        "city": "Robelland",
        "state": "Alaska",
        "zip": 10058,
        "documents": [],
        "createdAt": "2024-09-03T19:52:24.681Z",
        "updatedAt": "2024-09-03T19:52:24.681Z",
        "user": {
          "firstName": "Katelyn",
          "lastName": "Block",
          "email": "Denis_Corkery40@yahoo.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768fb450b87d20857dc2e",
        "userId": "66d768fb450b87d20857dc2d",
        "mobile": "640-945-8401",
        "productList": [],
        "street": "964 Lubowitz Lodge",
        "city": "North Charleston",
        "state": "Minnesota",
        "zip": 10059,
        "documents": [],
        "createdAt": "2024-09-03T19:52:26.903Z",
        "updatedAt": "2024-09-03T19:52:26.903Z",
        "user": {
          "firstName": "Bella",
          "lastName": "Armstrong",
          "email": "Ludwig_Wehner83@yahoo.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d768fe450b87d20857dc30",
        "userId": "66d768fe450b87d20857dc2f",
        "mobile": "616-336-6082",
        "productList": [],
        "street": "231 Susana Lock",
        "city": "Enidland",
        "state": "Maryland",
        "zip": 10002,
        "documents": [],
        "createdAt": "2024-09-03T19:52:29.588Z",
        "updatedAt": "2024-09-03T19:52:29.588Z",
        "user": {
          "firstName": "Dena",
          "lastName": "Kub",
          "email": "Jaeden85@hotmail.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      },
      {
        "id": "66d76900450b87d20857dc32",
        "userId": "66d76900450b87d20857dc31",
        "mobile": "750-806-8684",
        "productList": [],
        "street": "138 Clotilde Heights",
        "city": "Edina",
        "state": "Idaho",
        "zip": 10051,
        "documents": [],
        "createdAt": "2024-09-03T19:52:31.756Z",
        "updatedAt": "2024-09-03T19:52:31.756Z",
        "user": {
          "firstName": "Krystina",
          "lastName": "Lesch",
          "email": "Jacquelyn.Kreiger5@hotmail.com",
          "profileImage": null,
          "role": "CLIENT",
          "isActive": true,
          "isDeleted": false
        },
        "projects": []
      }
    ]
  };

  return (
    <Box sx={{
      border: '.5px solid',
      borderColor: 'grey.400',
      borderRadius: '1rem',
      overflow: 'hidden',
      padding: '1.5rem'
    }}>
      <Stack justifyContent='space-between'>
        <Stack
          border='1.5px solid'
          borderColor='grey.400'
          color='text.primary'
          borderRadius='0.5rem'
          alignItems='center'
          padding='0 .5rem'
          gap='.5rem'
        >
          <Box color='#16151C'>
            <SearchIcon />
          </Box>
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-transparent"
          />
        </Stack>
        <Link href='/dashboard/all-clients/add-new-client'>
          <Button>
            <Stack gap='.5rem' alignItems='center'>
              <AddIcon /> Add Client
            </Stack>
          </Button>
        </Link>
      </Stack>
      {
        clientData ? <SMDDataTable
          data={clientData.data}
          columns={[
            { label: 'Client Name', field: (row) => (row.user.firstName + ' ' + row.user.lastName) },
            { label: 'Email', field: (row) => row.user.email },
            { label: 'Mobile', field: (row) => row.mobile },
            { label: "Total Project", field: (row) => row.projects.length }
          ]}
          page={page}
          limit={limit}
          totalPages={clientData.mete.totalPage}
          total={clientData.mete.total}
          onPageChange={setPage}
          onLimitChange={setLimit}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Link href={`/dashboard/all-clients/${row.id}`}>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <ViewIcon />
                </IconButton>
              </Link>
              <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                <EditIcon />
              </IconButton>
              <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                <TrashIcon />
              </IconButton>
            </Stack>
          )}
        /> :
          <Box></Box>
      }
    </Box>
  );
};
