"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid2, IconButton, Stack, Typography } from "@mui/material";
import EmployeesIcon from '@/assets/icons/all-employees.svg';
import ApplicationIcon from '@/assets/icons/application.svg';
import RequisitionIcon from '@/assets/icons/requisition.svg';
import ProductIcon from '@/assets/icons/product.svg';
import CalendarIcon from '@/assets/icons/calendar-01.svg';
import AddIcon from '@mui/icons-material/Add';
import SMDDataTable from "../../components/ui/SMDDataTable";

export default function Dashboard() {
  const statisticsData = [
    {
      icon: <EmployeesIcon />,
      title: 'Total Employee',
      count: 412,
      lastUpdateDate: 'July 16, 2023',
      progress: '+ 12'
    },
    {
      icon: <ApplicationIcon />,
      title: 'Application',
      count: 1050,
      lastUpdateDate: 'July 14, 2023',
      progress: '+ 5'
    },
    {
      icon: <RequisitionIcon />,
      title: 'Requisition',
      count: 17,
      lastUpdateDate: 'July 14, 2023',
      progress: '- 8'
    },
    {
      icon: <ProductIcon />,
      title: 'All Products',
      count: 200,
      lastUpdateDate: 'July 10, 2023',
      progress: '+ 10'
    },
  ];

  const ongoingClintData = [
    {
      clint: 'Lucinda Grady',
      project: 'Harbor Point Marina',
      status: 'APPROVED'
    },
    {
      clint: 'Neil Borer',
      project: 'Mountain Peak Villas',
      status: 'N_PROGRESS'
    }
  ];

  const activeProjectData = [
    {
      projectName: 'Padma Railway link',
      projectManager: 'Md. Anowar Haque',
      productCount: 7,
      dueDate: '2016-Ongoing',
      status: 'ON_TIME'
    },
    {
      projectName: 'BSMRBC',
      projectManager: 'Md. Sabbir Hossain',
      productCount: 23,
      dueDate: '2020-Ongoing',
      status: 'ON_TIME'
    },
    {
      projectName: 'Dhaka Elevated Express way',
      projectManager: 'Md. Safiqul Islam',
      productCount: 15,
      dueDate: '2019-Ongoing',
      status: 'LATE'
    },
  ];

  const scheduleData = [
    {
      scheduleDate: 'Thursday, 06 July 2024',
      schedules: [
        {
          title: 'Sarkar textile and Apparel',
          description: 'Meeting with Client',
          startTime: '09:30',
          endTime: '10:00'
        },
        {
          title: 'Sarkar Alliance',
          description: 'Visit Railway Project',
          startTime: '12:00',
          endTime: '01:00'
        },
        {
          title: 'Sarkar Alliance',
          description: 'Final Payment check',
          startTime: '01:30',
          endTime: '02:00'
        }
      ]
    },
    {
      scheduleDate: 'Friday, 07 July 2024',
      schedules: [
        {
          title: 'Project Manager',
          description: 'Project Work Review',
          startTime: '09:30',
          endTime: '10:00'
        },
        {
          title: 'Application',
          description: 'TL Meeting',
          startTime: '12:00',
          endTime: '01:00'
        }
      ]
    }
  ];

  return (
    <Box>
      <Stack gap='1.5rem'>
        <Box width='65%'>
          <Grid2 container spacing='1.5rem'>
            {
              statisticsData.map((data, i) => <Grid2
                size={6}
                key={i}
                sx={{
                  border: '.5px solid',
                  borderColor: 'grey.400',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  padding: '1rem'
                }}
              >
                <Stack gap='1rem'>
                  <Box color='primary.main'>{data.icon}</Box>
                  <Typography>{data.title}</Typography>
                </Stack>
                <Stack justifyContent='space-between' alignItems='baseline' my='.5rem'>
                  <Typography fontSize='2rem' fontWeight={700}>{data.count}</Typography>
                  <Box
                    sx={{
                      p: '.5rem',
                      borderRadius: '.5rem',
                      bgcolor: data.progress.startsWith('+') ? 'success.main' :
                        data.progress.startsWith('-') ? 'warning.main' :
                          '',
                    }}
                  >
                    <Typography
                    // sx={{
                    //   color: data.progress.startsWith('+') ? 'success.main' :
                    //     data.progress.startsWith('-') ? 'warning.main' :
                    //       '',
                    // }}
                    >
                      {data.progress}%
                    </Typography>
                  </Box>
                </Stack>
                <Typography color='textSecondary'>Update: {data.lastUpdateDate}</Typography>
              </Grid2>)
            }
          </Grid2>

          <Box
            mt='1.5rem'
            sx={{
              border: '.5px solid',
              borderColor: 'grey.400',
              borderRadius: '1rem',
              overflow: 'hidden',
              padding: '1rem'
            }}
          >
            <Stack justifyContent='space-between'>
              <Typography fontSize='1.5rem' fontWeight={700}>Ongoing Client List</Typography>
              <Button variant="outlined">View All</Button>
            </Stack>
            <SMDDataTable
              data={ongoingClintData}
              columns={[
                { label: 'Client', field: 'clint' },
                { label: 'Project', field: 'project' },
                { label: 'Product Status', field: 'status' },
              ]}
            />
          </Box>
        </Box>

        <Box
          width='35%'
          sx={{
            border: '.5px solid',
            borderColor: 'grey.400',
            borderRadius: '1rem',
            overflow: 'hidden',
            padding: '1rem'
          }}
        >
          <Stack justifyContent='space-between'>
            <Typography fontSize='1.5rem' fontWeight={700}>My Schedule</Typography>
            <Stack alignItems='center' gap='1rem'>
              <IconButton color="primary">
                <AddIcon />
              </IconButton>
              <IconButton color="primary">
                <CalendarIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Stack gap='2.5rem' direction='column'>
            {
              scheduleData.map((data, i) => <Box key={i}>
                <Typography>{data.scheduleDate}</Typography>
                <Stack gap='1.5rem' direction='column' mt='1rem'>
                  {
                    data.schedules.map((schedule, j) => <Stack
                      key={j}
                      gap='1.5rem'
                      alignItems='center'
                    >
                      <Typography fontSize='1.5rem' fontWeight={700}>{schedule.startTime}</Typography>
                      <Box>
                        <Typography>{schedule.title}</Typography>
                        <Typography fontSize='1.2rem' fontWeight={700}>{schedule.description}</Typography>
                      </Box>
                    </Stack>)
                  }
                </Stack>
              </Box>)
            }
          </Stack>
        </Box>
      </Stack>

      <Box
        mt='1.5rem'
        sx={{
          border: '.5px solid',
          borderColor: 'grey.400',
          borderRadius: '1rem',
          overflow: 'hidden',
          padding: '1rem'
        }}
      >
        <Stack justifyContent='space-between'>
          <Typography fontSize='1.5rem' fontWeight={700}>Active Projects</Typography>
          <Button variant="outlined">View All</Button>
        </Stack>
        <SMDDataTable
          data={activeProjectData}
          columns={[
            { label: 'Project Name', field: 'projectName' },
            { label: 'Project Lead', field: 'projectManager' },
            { label: 'Products Here', field: 'productCount' },
            { label: 'Due Date', field: 'dueDate' },
            { label: 'Status', field: 'status' },
          ]}
        />
      </Box>
    </Box>
  );
};
