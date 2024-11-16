import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from "@/assets/icons/edit.svg";
import ProjectCard from "../../components/ui/ProjectCard";

export default function AllProjects() {
  const projectData = {
    "success": true,
    "statusCode": 302,
    "message": "All project found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 9,
      "totalPage": 1
    },
    "data": [
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
        "updatedAt": "2024-09-03T20:08:59.724Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:02.388Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:03.568Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:04.539Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:16.041Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:17.366Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:18.388Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
        "updatedAt": "2024-09-03T20:09:19.321Z",
        "projectManager": {
          "id": "66d767e7450b87d20857dbf2",
          "mobile": "389-420-3461",
          "employeeType": "ON_SITE",
          "department": "CIVIL",
          "designation": "VICE_PRESIDENT_FINANCE",
          "officeLocation": "645 Kling Springs",
          "user": {
            "firstName": "Berniece",
            "lastName": "Treutel",
            "email": "Ebony24@hotmail.com",
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
        "engineers": [],
        "products": [],
        "projectGallery": []
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
      <Stack justifyContent='space-between' alignItems='baseline'>
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
        <Link href='/dashboard/all-employees/add-new-employee'>
          <Button>
            <Stack gap='.5rem' alignItems='center'>
              <EditIcon /> Add Project
            </Stack>
          </Button>
        </Link>
      </Stack>
      <Stack flexWrap='wrap' gap='1rem'>
        {
          projectData.data.map((data, i) => <Box
            key={i}
            width='49%'
          >
            <ProjectCard
              cardTitle={data.projectName}
              cardSubTitle='4 Members'
              clientFullName={`${data.client.user.firstName} ${data.client.user.lastName}`}
              clientImage={`${data.client.user.profileImage}`}
              projectManagerFullName={`${data.projectManager.user.firstName} ${data.projectManager.user.lastName}`}
              projectManagerImage={`${data.projectManager.user.profileImage}`}
              startDate={`${data.startDate}`}
              endDate={`${data.estimatedEndDate}`}
              status={`${data.status}`}
            />
          </Box>)
        }
      </Stack>
    </Box>
  );
};
