/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Box, Button, Stack } from "@mui/material";
import React, { useState } from 'react';
import SMDDataTable from "../../components/ui/SMDDataTable";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@/assets/icons/add-circle.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import Link from "next/link";
// import { useAllEmployeesQuery } from "@/redux/api/endpoints/employeesApi";

type Equipment = {
  firstName: string;
  email: string;
};

export default function AllEmployees() {
  const employeesData = {
    "success": true,
    "statusCode": 302,
    "message": "All employee found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 35,
      "totalPage": 4
    },
    "data": [
      {
        "id": "66d766fb065bcecc665e74fd",
        "firstName": "Ian",
        "lastName": "Lesch",
        "email": "Magali56@yahoo.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:43:54.056Z",
        "updatedAt": "2024-09-03T19:43:54.056Z",
        "employeeInfo": {
          "id": "66d766fb065bcecc665e74fe",
          "employeeId": "SG_SMD-ADMIN-8a3bf72b-f04e-4d90-b19e-f3b620f59ffc",
          "userId": "66d766fb065bcecc665e74fd",
          "mobile": "863-546-3767",
          "userName": "Cale26",
          "dob": "1980-03-12T08:45:00.000Z",
          "maritalStatus": "SINGLE",
          "gender": "MALE",
          "employeeType": "CONTRACTOR",
          "department": "MARIN",
          "designation": "ADMINISTRATIVE_ASSISTANT",
          "joiningDate": "2024-09-03T19:43:54.056Z",
          "officeLocation": "735 Leannon Ville",
          "nationality": "Cote d'Ivoire",
          "street": "8906 Quigley Curve",
          "city": "DeSoto",
          "state": "Alabama",
          "zip": 10034,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:43:54.056Z",
          "updatedAt": "2024-09-03T19:43:54.056Z"
        }
      },
      {
        "id": "66d766fe065bcecc665e74ff",
        "firstName": "Jacquelyn",
        "lastName": "joo",
        "email": "Audrey77@yahoo.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:43:57.294Z",
        "updatedAt": "2024-09-03T19:57:48.451Z",
        "employeeInfo": {
          "id": "66d766fe065bcecc665e7500",
          "employeeId": "SG_SMD-ADMIN-4981c007-d154-47b5-ad99-b3f9482de917",
          "userId": "66d766fe065bcecc665e74ff",
          "mobile": "298-447-9420",
          "userName": "Ally_Waters4",
          "dob": "1980-06-06T15:35:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "MALE",
          "employeeType": "CONTRACTOR",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "joiningDate": "2024-09-03T19:43:57.294Z",
          "officeLocation": "27254 Karley Parks",
          "nationality": "Martinique",
          "street": "12033 Bulah Circles",
          "city": "Eist",
          "state": "Hawaii",
          "zip": 10092,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:43:57.294Z",
          "updatedAt": "2024-09-03T19:57:48.451Z"
        }
      },
      {
        "id": "66d7670b065bcecc665e7501",
        "firstName": "Adrienne",
        "lastName": "Anderson",
        "email": "Khalid79@hotmail.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:44:10.793Z",
        "updatedAt": "2024-09-03T19:44:10.793Z",
        "employeeInfo": {
          "id": "66d7670b065bcecc665e7502",
          "employeeId": "SG_SMD-ADMIN-18ee765e-ab9b-4987-b059-20532ef2a9cf",
          "userId": "66d7670b065bcecc665e7501",
          "mobile": "693-994-3775",
          "userName": "Lafayette19",
          "dob": "1986-02-18T07:50:00.000Z",
          "maritalStatus": "SINGLE",
          "gender": "MALE",
          "employeeType": "FULL_TIME",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "joiningDate": "2024-09-03T19:44:10.793Z",
          "officeLocation": "967 Dashawn Villages",
          "nationality": "Malawi",
          "street": "24340 Reynolds Ramp",
          "city": "Murray",
          "state": "Iowa",
          "zip": 10075,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:44:10.793Z",
          "updatedAt": "2024-09-03T19:44:10.793Z"
        }
      },
      {
        "id": "66d7670d065bcecc665e7503",
        "firstName": "Bettye",
        "lastName": "Harris",
        "email": "Ceasar.Rohan63@yahoo.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:44:12.667Z",
        "updatedAt": "2024-09-03T19:44:12.667Z",
        "employeeInfo": {
          "id": "66d7670d065bcecc665e7504",
          "employeeId": "SG_SMD-ADMIN-68f62073-c5b0-4eb7-ad98-e5faa0da58c4",
          "userId": "66d7670d065bcecc665e7503",
          "mobile": "549-300-9876",
          "userName": "Shany_Koss61",
          "dob": "1981-07-21T14:30:00.000Z",
          "maritalStatus": "SINGLE",
          "gender": "MALE",
          "employeeType": "CONSULTANT",
          "department": "ENGINEERING",
          "designation": "UX_UI_DESIGN_LEAD",
          "joiningDate": "2024-09-03T19:44:12.667Z",
          "officeLocation": "52972 Abshire Islands",
          "nationality": "Equatorial Guinea",
          "street": "5028 Volkman Stream",
          "city": "Marciahaven",
          "state": "Minnesota",
          "zip": 10057,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:44:12.667Z",
          "updatedAt": "2024-09-03T19:44:12.667Z"
        }
      },
      {
        "id": "66d76710065bcecc665e7505",
        "firstName": "Margarete",
        "lastName": "Schuster",
        "email": "Kathlyn.Cormier89@hotmail.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:44:15.913Z",
        "updatedAt": "2024-09-03T19:44:15.913Z",
        "employeeInfo": {
          "id": "66d76710065bcecc665e7506",
          "employeeId": "SG_SMD-ADMIN-bb4a7952-d5d1-4bdb-ab9c-6c78d78c2b99",
          "userId": "66d76710065bcecc665e7505",
          "mobile": "714-749-6929",
          "userName": "Michaela_Mayert",
          "dob": "2000-09-03T12:10:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "MALE",
          "employeeType": "CASUAL",
          "department": "CIVIL",
          "designation": "CFO",
          "joiningDate": "2024-09-03T19:44:15.913Z",
          "officeLocation": "47679 Vella Forge",
          "nationality": "Mozambique",
          "street": "0923 Kaleigh Forks",
          "city": "Benview",
          "state": "Idaho",
          "zip": 10077,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:44:15.913Z",
          "updatedAt": "2024-09-03T19:44:15.913Z"
        }
      },
      {
        "id": "66d76732065bcecc665e7507",
        "firstName": "Macy",
        "lastName": "Huels",
        "email": "Roma.Ziemann7@gmail.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:44:49.878Z",
        "updatedAt": "2024-09-03T19:44:49.878Z",
        "employeeInfo": {
          "id": "66d76732065bcecc665e7508",
          "employeeId": "SG_SMD-ADMIN-085f6c76-f990-42d1-827b-a0d36e8ce294",
          "userId": "66d76732065bcecc665e7507",
          "mobile": "891-623-0839",
          "userName": "Candice_Medhurst33",
          "dob": "1991-10-09T09:55:00.000Z",
          "maritalStatus": "SINGLE",
          "gender": "FEMALE",
          "employeeType": "SEASONAL",
          "department": "ENGINEERING",
          "designation": "VICE_PRESIDENT_PRODUCT_MANAGEMENT",
          "joiningDate": "2024-09-03T19:44:49.878Z",
          "officeLocation": "60889 Antonetta Estate",
          "nationality": "Saint Kitts and Nevis",
          "street": "39991 Gaylord Underpass",
          "city": "Port Scotfurt",
          "state": "Kentucky",
          "zip": 10067,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:44:49.878Z",
          "updatedAt": "2024-09-03T19:44:49.878Z"
        }
      },
      {
        "id": "66d767d0450b87d20857dbe7",
        "firstName": "Reginald",
        "lastName": "Stamm",
        "email": "Lacy72@yahoo.com",
        "profileImage": null,
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:47:27.275Z",
        "updatedAt": "2024-09-03T19:47:27.275Z",
        "employeeInfo": {
          "id": "66d767d0450b87d20857dbe8",
          "employeeId": "SG_SMD-ADMIN-7414d114-3d27-4349-a887-938f826e81ad",
          "userId": "66d767d0450b87d20857dbe7",
          "mobile": "682-905-0370",
          "userName": "Abraham.Wuckert24",
          "dob": "1992-12-01T10:30:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "MALE",
          "employeeType": "SHIFT_WORKER",
          "department": "MARIN",
          "designation": "SALES_EXECUTIVE",
          "joiningDate": "2024-09-03T19:47:27.275Z",
          "officeLocation": "521 Kevin Shoals",
          "nationality": "Nauru",
          "street": "785 Konopelski Circle",
          "city": "East Ashly",
          "state": "Georgia",
          "zip": 10080,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "createdProjects": [],
          "createdAt": "2024-09-03T19:47:27.275Z",
          "updatedAt": "2024-09-03T19:47:27.275Z"
        }
      },
      {
        "id": "66d767d4450b87d20857dbe9",
        "firstName": "Kieran",
        "lastName": "Larkin",
        "email": "Dell.Beier@gmail.com",
        "profileImage": null,
        "role": "PROJECT_MANAGER",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:47:31.913Z",
        "updatedAt": "2024-09-03T19:47:31.913Z",
        "employeeInfo": {
          "id": "66d767d4450b87d20857dbea",
          "employeeId": "SG_SMD-PM-db26dd06-44cd-4bd2-ad03-0e1b51bcafa8",
          "userId": "66d767d4450b87d20857dbe9",
          "mobile": "979-557-5814",
          "userName": "Ernestina.Fahey",
          "dob": "1986-02-18T07:50:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "FEMALE",
          "employeeType": "APPRENTICE",
          "department": "ENGINEERING",
          "designation": "ADMINISTRATIVE_ASSISTANT",
          "joiningDate": "2024-09-03T19:47:31.913Z",
          "officeLocation": "95747 Balistreri Manor",
          "nationality": "Lebanon",
          "street": "692 Grady Lane",
          "city": "Schaeferside",
          "state": "Arkansas",
          "zip": 10066,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "assignProjects": [],
          "createdAt": "2024-09-03T19:47:31.913Z",
          "updatedAt": "2024-09-03T19:47:31.913Z"
        }
      },
      {
        "id": "66d767d6450b87d20857dbeb",
        "firstName": "Serena",
        "lastName": "Bode",
        "email": "Anjali.Beer73@gmail.com",
        "profileImage": null,
        "role": "PROJECT_MANAGER",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:47:34.007Z",
        "updatedAt": "2024-09-03T19:47:34.007Z",
        "employeeInfo": {
          "id": "66d767d7450b87d20857dbec",
          "employeeId": "SG_SMD-PM-24f2c28a-07c4-462a-9185-31e1cced2ed3",
          "userId": "66d767d6450b87d20857dbeb",
          "mobile": "468-768-0958",
          "userName": "Lisandro.Padberg",
          "dob": "1992-07-15T14:45:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "MALE",
          "employeeType": "ON_SITE",
          "department": "ENGINEERING",
          "designation": "HR_ASSISTANT",
          "joiningDate": "2024-09-03T19:47:34.007Z",
          "officeLocation": "70451 Jesse Skyway",
          "nationality": "Armenia",
          "street": "178 Jeanne Tunnel",
          "city": "Raphaelshire",
          "state": "California",
          "zip": 10016,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "assignProjects": [],
          "createdAt": "2024-09-03T19:47:34.007Z",
          "updatedAt": "2024-09-03T19:47:34.007Z"
        }
      },
      {
        "id": "66d767d9450b87d20857dbed",
        "firstName": "Torrey",
        "lastName": "Zemlak",
        "email": "Lera59@yahoo.com",
        "profileImage": null,
        "role": "PROJECT_MANAGER",
        "isActive": true,
        "isDeleted": false,
        "createdAt": "2024-09-03T19:47:36.385Z",
        "updatedAt": "2024-09-03T19:47:36.385Z",
        "employeeInfo": {
          "id": "66d767d9450b87d20857dbee",
          "employeeId": "SG_SMD-PM-7b5817b0-a2d8-4dc1-a2dd-973c6a9490a6",
          "userId": "66d767d9450b87d20857dbed",
          "mobile": "838-986-0705",
          "userName": "Fern76",
          "dob": "1997-11-30T09:40:00.000Z",
          "maritalStatus": "MARRIED",
          "gender": "MALE",
          "employeeType": "PART_TIME",
          "department": "MARIN",
          "designation": "DIRECTOR_HUMAN_RESOURCES",
          "joiningDate": "2024-09-03T19:47:36.385Z",
          "officeLocation": "2468 Senger Station",
          "nationality": "Finland",
          "street": "2105 Jared Falls",
          "city": "Jaspermouth",
          "state": "Louisiana",
          "zip": 10016,
          "appointmentLetter": "",
          "salarySlips": [],
          "relivingLetter": "",
          "experienceLetter": "",
          "assignProjects": [],
          "createdAt": "2024-09-03T19:47:36.385Z",
          "updatedAt": "2024-09-03T19:47:36.385Z"
        }
      }
    ]
  };  // Select from Redux store

  // const { data: employeesData, isLoading } = useAllEmployeesQuery(undefined);
  // console.log({ employeesData, isLoading });

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sortBy, setSortBy] = useState<keyof Equipment>('firstName');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
        <Stack gap='.5rem'>
          <Link href='/dashboard/all-employees/add-new-employee'>
            <Button>
              <Stack gap='.5rem' alignItems='center'>
                <AddIcon /> Add New Employee
              </Stack>
            </Button>
          </Link>
          <Button variant="outlined">
            <Stack gap='.5rem' alignItems='center'>
              <FilterIcon /> Filter
            </Stack>
          </Button>
        </Stack>
      </Stack>
      {
        employeesData ? <SMDDataTable
          data={employeesData.data}
          columns={[
            { label: 'Employee ID', field: (row) => row.employeeInfo.employeeId },
            { label: "Name", field: (row) => (row.firstName + ' ' + row.lastName), isSortable: true },
            { label: 'Email', field: (row) => row.email, isSortable: true },
            { label: "Department", field: (row) => row.employeeInfo.department },
            { label: "Employee Type", field: (row) => row.employeeInfo.department }
          ]}
          page={page}
          limit={limit}
          totalPages={employeesData.mete.totalPage}
          total={employeesData.mete.total}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={(field) => {
            setSortBy(field as keyof Equipment);
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          }}
          onPageChange={setPage}
          onLimitChange={setLimit}
        /> :
          <Box></Box>
      }
    </Box>
  );
};
