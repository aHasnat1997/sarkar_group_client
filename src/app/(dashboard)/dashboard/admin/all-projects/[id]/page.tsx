'use client';

import { Box, CircularProgress, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ProjectIcon from '@/assets/icons/all-projects.svg';
import EmployeeIcon from "@/assets/icons/all-employees.svg";
import BriefcaseIcon from '@/assets/icons/briefcase-04.svg';
import GalleryIcon from "@/assets/icons/image-gallery.svg";
import TabOne from "./tabs/tabOne";
import TabTwo from "./tabs/tabTwo";
import TabThree from "./tabs/tabThree";
import TabFour from "./tabs/tabFour";
import ProjectDialogButtons from "./dialogs";
import { useSingleProjectsQuery } from "@/redux/api/endpoints/projectsApi";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { data: projectDetails, isLoading, isError } = useSingleProjectsQuery(params.id);

  const [value, setValue] = useState(0);
  const tebContent = [
    { index: 0, label: 'Project Details', icon: <ProjectIcon /> },
    { index: 1, label: 'Employees List', icon: <EmployeeIcon /> },
    { index: 2, label: 'Product List', icon: <BriefcaseIcon /> },
    { index: 3, label: 'Project Gallery', icon: <GalleryIcon /> }
  ];

  if (isLoading) {
    return (
      <Stack width='100%' height='80vh' alignItems='center' justifyContent='center'>
        <CircularProgress />
      </Stack>
    );
  };

  if (isError) return <DataNotFound />

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
                {projectDetails?.data?.projectName}
              </Typography>
              <Typography color='text.secondary'>
                {projectDetails?.data?.engineers?.length + 2} Members
              </Typography>
            </Box>
          </Stack>
          <ProjectDialogButtons value={value} project={projectDetails?.data} />
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
          value === 0 ? <TabOne payload={projectDetails?.data} /> :
            value === 1 ? <TabTwo payload={projectDetails?.data} /> :
              value === 2 ? <TabThree payload={projectDetails?.data} /> :
                value === 3 ? <TabFour payload={projectDetails?.data} /> :
                  <></>
        }
      </Box>
    </Box>
  );
};
