'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from "@/assets/icons/edit.svg";
import ViewIcon from "@/assets/icons/view.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AllProductRequest() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const productsRequestData = {
    "success": true,
    "statusCode": 200,
    "message": "All product found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 33,
      "totalPage": 4
    },
    "data": [
      {
        "id": "66d76ac4450b87d20857dc4d",
        "equipmentId": "EQUIP-b9af5b50-ce0b-4148-b992-9d03c3aea971",
        "equipmentName": "CncMachine",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG9900",
        "category": "MARIN",
        "status": "IN_REPAIR",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Jean Hintz",
        "ownerAddress": "45495 Klocko Vista",
        "ownerNumber": "892-542-0594",
        "charteredBy": "Claire Franecki",
        "charteredPersonPhone": "462-726-3440",
        "charteredPersonAddress": "8673 Judah Unions",
        "brandName": "Hyundai",
        "model": "EC950F",
        "dimensions": "9.5m x 3.5m x 4.5m",
        "manufacturingYear": "2018",
        "createdAt": "2024-09-03T20:00:04.957Z",
        "updatedAt": "2024-09-03T20:00:04.957Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76ac6450b87d20857dc4e",
        "equipmentId": "EQUIP-da9fd6a0-a882-4b3d-8d5a-325ad71db062",
        "equipmentName": "Crane",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG1213",
        "category": "CIVIL",
        "status": "STAND_BY",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Randal Tremblay",
        "ownerAddress": "83176 Torp Passage",
        "ownerNumber": "580-949-3341",
        "charteredBy": "Stacey Fisher",
        "charteredPersonPhone": "315-887-1957",
        "charteredPersonAddress": "42887 Lynch Cove",
        "brandName": "Hitachi",
        "model": "WA380",
        "dimensions": "10m x 4m x 5m",
        "manufacturingYear": "2021",
        "createdAt": "2024-09-03T20:00:06.196Z",
        "updatedAt": "2024-09-03T20:00:06.196Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76ac7450b87d20857dc4f",
        "equipmentId": "EQUIP-50de2c02-cf47-4013-adad-4849699f7c4e",
        "equipmentName": "SubseaRov",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG4567",
        "category": "CIVIL",
        "status": "DAMAGED",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Glenda Boyer IV",
        "ownerAddress": "8733 Camren Rapids",
        "ownerNumber": "647-321-9542",
        "charteredBy": "Mrs. Stuart Bosco",
        "charteredPersonPhone": "361-715-0517",
        "charteredPersonAddress": "9639 Kshlerin Flats",
        "brandName": "Komatsu",
        "model": "SK210LC",
        "dimensions": "6.5m x 2.5m x 3.5m",
        "manufacturingYear": "2020",
        "createdAt": "2024-09-03T20:00:07.204Z",
        "updatedAt": "2024-09-03T20:00:07.204Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76ac9450b87d20857dc51",
        "equipmentId": "EQUIP-0c655a76-1e12-40a7-b0f7-7916c2549538",
        "equipmentName": "AirCompressor",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG7879",
        "category": "MARIN",
        "status": "RESERVED",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Mr. Dianne Rice",
        "ownerAddress": "192 Lilla Oval",
        "ownerNumber": "326-695-4580",
        "charteredBy": "Miss Amber Carroll",
        "charteredPersonPhone": "824-652-5994",
        "charteredPersonAddress": "555 Nicolas Circles",
        "brandName": "Caterpillar",
        "model": "SV60",
        "dimensions": "6.8m x 2.8m x 3.2m",
        "manufacturingYear": "1992",
        "createdAt": "2024-09-03T20:00:09.262Z",
        "updatedAt": "2024-09-03T20:00:09.262Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76aca450b87d20857dc52",
        "equipmentId": "EQUIP-65c719e8-2858-457b-b06a-30f85452b24c",
        "equipmentName": "Dredger",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG7475",
        "category": "CIVIL",
        "status": "RESERVED",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Gilberto Abbott",
        "ownerAddress": "70716 Shayne Hollow",
        "ownerNumber": "488-971-4858",
        "charteredBy": "Mark Brown",
        "charteredPersonPhone": "829-819-9383",
        "charteredPersonAddress": "953 Elwyn Key",
        "brandName": "Doosan",
        "model": "TL12R2",
        "dimensions": "10m x 4m x 5m",
        "manufacturingYear": "2005",
        "createdAt": "2024-09-03T20:00:10.798Z",
        "updatedAt": "2024-09-03T20:00:10.798Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76acc450b87d20857dc53",
        "equipmentId": "EQUIP-b5a3b811-9b69-47cb-a073-1296f2109e80",
        "equipmentName": "Excavator",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG6263",
        "category": "ENGINEERING",
        "status": "WORKING",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Charles Toy",
        "ownerAddress": "075 Langosh Hill",
        "ownerNumber": "686-403-2850",
        "charteredBy": "Cory Hettinger Jr.",
        "charteredPersonPhone": "758-911-8983",
        "charteredPersonAddress": "61024 Tremaine Alley",
        "brandName": "Case",
        "model": "R210W",
        "dimensions": "8.5m x 3.5m x 4.2m",
        "manufacturingYear": "2006",
        "createdAt": "2024-09-03T20:00:12.074Z",
        "updatedAt": "2024-09-03T20:00:12.074Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76acd450b87d20857dc54",
        "equipmentId": "EQUIP-d5ed84ad-907a-421d-a8dd-431ba9b90e8c",
        "equipmentName": "Tugboat",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG7273",
        "category": "CIVIL",
        "status": "PENDING_INSPECTION",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Wesley Purdy",
        "ownerAddress": "8061 Kling Corner",
        "ownerNumber": "766-543-0017",
        "charteredBy": "Willard Lakin",
        "charteredPersonPhone": "761-687-6548",
        "charteredPersonAddress": "8071 Mabel Point",
        "brandName": "Caterpillar",
        "model": "L586",
        "dimensions": "8.5m x 3.5m x 4.2m",
        "manufacturingYear": "1993",
        "createdAt": "2024-09-03T20:00:13.470Z",
        "updatedAt": "2024-09-03T20:00:13.470Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76ae3450b87d20857dc56",
        "equipmentId": "EQUIP-d8368bc8-26c4-4ac8-aca4-4ad27b80f2c0",
        "equipmentName": "RoadRoller",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG8081",
        "category": "MARIN",
        "status": "RESERVED",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Janet Roob",
        "ownerAddress": "032 Alivia Drive",
        "ownerNumber": "681-954-5461",
        "charteredBy": "Edmond Bayer",
        "charteredPersonPhone": "756-386-7154",
        "charteredPersonAddress": "2253 Carter Mountain",
        "brandName": "Volvo",
        "model": "ZX350LC",
        "dimensions": "6.8m x 2.8m x 3.2m",
        "manufacturingYear": "2004",
        "createdAt": "2024-09-03T20:00:35.486Z",
        "updatedAt": "2024-09-03T20:00:35.486Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76af0450b87d20857dc58",
        "equipmentId": "EQUIP-65dcaff4-90a1-4623-af6e-54e5293e8741",
        "equipmentName": "Tugboat",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG2627",
        "category": "ENGINEERING",
        "status": "AVAILABLE",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Minnie Ryan",
        "ownerAddress": "4617 Kohler Gateway",
        "ownerNumber": "940-272-2875",
        "charteredBy": "Jacob McLaughlin",
        "charteredPersonPhone": "388-582-7769",
        "charteredPersonAddress": "5303 Quigley Mission",
        "brandName": "JCB",
        "model": "DX225LC",
        "dimensions": "3m x 1.5m x 2m",
        "manufacturingYear": "2012",
        "createdAt": "2024-09-03T20:00:48.307Z",
        "updatedAt": "2024-09-03T20:00:48.307Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      },
      {
        "id": "66d76b8d450b87d20857dc59",
        "equipmentId": "EQUIP-2948098f-b70f-4383-a45c-2d5fe6f9a4ae",
        "equipmentName": "VacuumPump",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG4647",
        "category": "CIVIL",
        "status": "IN_REPAIR",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Bennie Bosco",
        "ownerAddress": "99066 Mable Shore",
        "ownerNumber": "493-595-5788",
        "charteredBy": "Tara Toy I",
        "charteredPersonPhone": "264-711-2397",
        "charteredPersonAddress": "70329 Bogan Cliffs",
        "brandName": "JohnDeere",
        "model": "ZX135US",
        "dimensions": "7m x 3m x 3.5m",
        "manufacturingYear": "2004",
        "createdAt": "2024-09-03T20:03:25.848Z",
        "updatedAt": "2024-09-03T20:03:25.848Z",
        "createdAdminInfo": {
          "id": "66d766fe065bcecc665e7500",
          "mobile": "298-447-9420",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "officeLocation": "27254 Karley Parks",
          "user": {
            "firstName": "Jacquelyn",
            "lastName": "joo",
            "email": "Audrey77@yahoo.com",
            "role": "ADMIN"
          }
        },
        "projects": [],
        "crews": []
      }
    ]
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
        <Link href='/dashboard/project-manager/all-products'>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Stack>
      <Box mt='1.5rem'>
        {
          productsRequestData ? <SMDDataTable
            data={productsRequestData.data}
            columns={[
              { label: 'Equipment ID', field: (row) => row.equipmentId },
              { label: 'Equipment Name', field: (row) => row.equipmentName },
              { label: 'Brand Name', field: (row) => row.brandName },
              { label: 'Model', field: (row) => row.model },
              { label: 'Status', field: (row) => row.status }
            ]}
            page={page}
            limit={limit}
            totalPages={productsRequestData.mete.totalPage}
            total={productsRequestData.mete.total}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Link href={`/dashboard/project-manager/all-products/${row.id}`}>
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
    </Box>
  );
};
