'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React, { useEffect, useState } from 'react';
import SMDDataTable from "../../components/ui/SMDDataTable";
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from './apiActions';  // Your Redux action

type Equipment = {
  equipmentId: string;
  equipmentName: string;
  category: string;
  registrationNumber: string;
  status: string;
  ownerName: string;
};

export default function AllEmployees() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.apiData);  // Select from Redux store
  const data = {
    "success": true,
    "statusCode": 302,
    "message": "All product found successfully.",
    "mete": {
      "page": 3,
      "limit": 5,
      "total": 33,
      "totalPage": 7
    },
    "data": [
      {
        "id": "66d76b8f450b87d20857dc5a",
        "equipmentId": "EQUIP-04671204-96be-4813-ac3e-9a55245bf262",
        "equipmentName": "Dredger",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG1011",
        "category": "ENGINEERING",
        "status": "WORKING",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Natasha Hartmann",
        "ownerAddress": "009 Spencer Shore",
        "ownerNumber": "500-864-1484",
        "charteredBy": "Tasha Kuphal",
        "charteredPersonPhone": "781-931-8670",
        "charteredPersonAddress": "20357 Zora Radial",
        "brandName": "Liebherr",
        "model": "HM300",
        "dimensions": "4.5m x 2m x 2.5m",
        "manufacturingYear": "2006",
        "createdAt": "2024-09-03T20:03:27.233Z",
        "updatedAt": "2024-09-03T20:03:27.233Z",
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
        "id": "66d76b90450b87d20857dc5b",
        "equipmentId": "EQUIP-caaae3d3-e429-48c5-8cc8-39b8f34b18b5",
        "equipmentName": "JackUpRig",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG3637",
        "category": "MARIN",
        "status": "WORKING",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Wilfred Jerde",
        "ownerAddress": "504 Rau Alley",
        "ownerNumber": "221-862-7596",
        "charteredBy": "Doreen Rohan V",
        "charteredPersonPhone": "505-553-5352",
        "charteredPersonAddress": "098 Raynor Landing",
        "brandName": "Hitachi",
        "model": "PW98MR",
        "dimensions": "11m x 4.5m x 5.5m",
        "manufacturingYear": "2015",
        "createdAt": "2024-09-03T20:03:28.361Z",
        "updatedAt": "2024-09-03T20:03:28.361Z",
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
        "id": "66d76b92450b87d20857dc5d",
        "equipmentId": "EQUIP-09e7803c-363c-4364-9966-f0c91ff31ad5",
        "equipmentName": "Excavator",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG5051",
        "category": "MARIN",
        "status": "AVAILABLE",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Ella Gusikowski",
        "ownerAddress": "3467 Kiehn Ways",
        "ownerNumber": "640-783-6607",
        "charteredBy": "Claire Cartwright",
        "charteredPersonPhone": "357-636-4064",
        "charteredPersonAddress": "662 Lang Street",
        "brandName": "Volvo",
        "model": "R210W",
        "dimensions": "7.5m x 3m x 4m",
        "manufacturingYear": "1998",
        "createdAt": "2024-09-03T20:03:30.807Z",
        "updatedAt": "2024-09-03T20:03:30.807Z",
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
        "id": "66d76b99450b87d20857dc62",
        "equipmentId": "EQUIP-a45e5401-aa79-493c-8d3f-c1e5cb6c9aa9",
        "equipmentName": "Trencher",
        "equipmentImage": [
          "backhoe1.jpg",
          "backhoe2.jpg"
        ],
        "registrationNumber": "REG5678",
        "category": "MARIN",
        "status": "OUT_OF_SERVICE",
        "createdAdminId": "66d766fe065bcecc665e7500",
        "ownerName": "Ms. Cory Streich",
        "ownerAddress": "478 Deborah Point",
        "ownerNumber": "203-953-2830",
        "charteredBy": "Andres Upton",
        "charteredPersonPhone": "284-301-4929",
        "charteredPersonAddress": "27009 Neva Port",
        "brandName": "JohnDeere",
        "model": "R220LC",
        "dimensions": "11m x 4.5m x 5.5m",
        "manufacturingYear": "2009",
        "createdAt": "2024-09-03T20:03:37.107Z",
        "updatedAt": "2024-09-03T20:03:37.107Z",
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
        "updatedAt": "2024-09-03T20:03:38.606Z",
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
        "projects": [
          {
            "id": "66d8c8ce417809badd3ed4f6",
            "productId": "66d76b9a450b87d20857dc63",
            "projectId": "66d76cca450b87d20857dc88",
            "createdAt": "2024-09-04T20:53:34.844Z",
            "updatedAt": "2024-09-04T20:53:34.844Z"
          }
        ],
        "crews": [
          {
            "id": "66d8d85c9eae11c4bb94d475",
            "fullName": "Myrtle Schiller",
            "profileImage": null,
            "phone": "213-515-3722",
            "nid": "1bc72f22-2751-4037-aa33-26e10bea6d1a",
            "productId": "66d76b9a450b87d20857dc63",
            "isActive": true,
            "createdAt": "2024-09-04T21:59:56.059Z",
            "updatedAt": "2024-09-04T21:59:56.059Z"
          },
          {
            "id": "66d8d85d9eae11c4bb94d476",
            "fullName": "Deborah Turner",
            "profileImage": null,
            "phone": "695-465-7693",
            "nid": "54528d10-0a64-4680-9b6d-6b978c0aa39e",
            "productId": "66d76b9a450b87d20857dc63",
            "isActive": true,
            "createdAt": "2024-09-04T21:59:57.390Z",
            "updatedAt": "2024-09-04T21:59:57.390Z"
          },
          {
            "id": "66d8d85e9eae11c4bb94d477",
            "fullName": "Mrs. Nina Fadel",
            "profileImage": null,
            "phone": "523-930-0297",
            "nid": "b048bfde-c702-4aa4-b202-51c59fcfb202",
            "productId": "66d76b9a450b87d20857dc63",
            "isActive": true,
            "createdAt": "2024-09-04T21:59:58.636Z",
            "updatedAt": "2024-09-04T21:59:58.636Z"
          },
          {
            "id": "66d8d8609eae11c4bb94d478",
            "fullName": "Alexandra Reynolds",
            "profileImage": null,
            "phone": "442-465-0125",
            "nid": "e47f6e56-6c77-4cab-b2df-930cda7dd968",
            "productId": "66d76b9a450b87d20857dc63",
            "isActive": true,
            "createdAt": "2024-09-04T22:00:00.046Z",
            "updatedAt": "2024-09-04T22:00:00.046Z"
          }
        ]
      }
    ]
  };  // Select from Redux store
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sortBy, setSortBy] = useState<keyof Equipment>('equipmentId');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // useEffect(() => {
  //   dispatch(fetchData({ page, limit, sortBy, sortOrder }));
  // }, [page, limit, sortBy, sortOrder, dispatch]);

  return (
    <Box>
      <SMDDataTable
        data={data.data}
        columns={[
          { label: "Equipment ID", field: "equipmentId" },
          { label: "Name", field: "equipmentName" },
          { label: 'Category', field: 'category' },
          { label: "Status", field: "status" },
          { label: "Registration Number", field: "registrationNumber" },
          { label: 'Owner Name', field: 'ownerName' }
        ]}
        page={page}
        limit={limit}
        totalPages={data.mete.totalPage}
        total={data.mete.total}
        // sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={(field) => {
          setSortBy(field as keyof Equipment);
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }}
        onPageChange={setPage}
        onLimitChange={setLimit}
      />
    </Box>
  );
};
