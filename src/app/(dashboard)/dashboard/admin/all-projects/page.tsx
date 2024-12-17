'use client';

import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import EditIcon from "@/assets/icons/edit.svg";
import ProjectCard from "../../../components/ui/ProjectCard";
import { dateFormate } from "@/utils/dateFormate";
import { useAllProjectsQuery } from "@/redux/api/endpoints/projectsApi";
import { TProject } from "@/types";
import { useState } from "react";

export default function AllProjects() {
  const limit = 6;
  const [page, setPage] = useState(1);
  const { data: projectData, isLoading, isFetching } = useAllProjectsQuery({ page, limit });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
        <Link href='/dashboard/admin/all-projects/add-new-project'>
          <Button>
            <Stack gap='.5rem' alignItems='center'>
              <EditIcon /> Add Project
            </Stack>
          </Button>
        </Link>
      </Stack>
      <Stack flexWrap='wrap' gap='1rem'>
        {
          projectData?.data.length === 0 ? <Stack width='100%' height='50vh' alignItems='center' justifyContent='center' fontSize='5rem'>
            <Box width='5rem'>
              <UpcomingIcon fontSize='inherit' />
              <Typography fontSize='1rem' textAlign='center'>No Data</Typography>
            </Box>
          </Stack> :
            isLoading || isFetching ? Array.from({ length: limit || 10 }).map((_, i) => <Box key={i} width='49%'>
              <ProjectCard
                cardTitle=''
                cardSubTitle=''
                detailsInfoPath=''
                clientFullName=''
                clientImage=''
                projectManagerFullName=''
                projectManagerImage=''
                startDate=''
                endDate=''
                status=''
                isLoading={isLoading || isFetching}
              />
            </Box>) :
              projectData ? projectData.data.map((data: TProject, i: number) => <Box
                key={i}
                width='49%'
              >
                <ProjectCard
                  cardTitle={data.projectName}
                  cardSubTitle='4 Members'
                  detailsInfoPath={`/dashboard/admin/all-projects/${data.id}`}
                  clientFullName={`${data.client.user.firstName} ${data.client.user.lastName}`}
                  clientImage={`${data.client.user.profileImage}`}
                  projectManagerFullName={`${data.projectManager.user.firstName} ${data.projectManager.user.lastName}`}
                  projectManagerImage={`${data.projectManager.user.profileImage}`}
                  startDate={`${dateFormate(data.startDate)}`}
                  endDate={`${dateFormate(data.estimatedEndDate)}`}
                  status={`${data.status}`}
                />
              </Box>) :
                <></>
        }
      </Stack>
      <Stack alignItems='center' justifyContent='center' mt='2rem'>
        <Pagination
          count={projectData?.mete?.totalPage}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </Box>
  );
};
