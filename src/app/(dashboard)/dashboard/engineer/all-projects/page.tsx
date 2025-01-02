'use client';

import { Box, Pagination, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from "../../../components/ui/ProjectCard";
import { dateFormate } from "@/utils/dateFormate";
import { useAllEmployeeProjectsQuery } from "@/redux/api/endpoints/projectsApi";
import { TProject } from "@/types";
import { useState } from "react";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";

export default function AllProjects() {
  const limit = 6;
  const [page, setPage] = useState(1);
  const { data: projectData, isLoading, isFetching, isError } = useAllEmployeeProjectsQuery({ page, limit });

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
            className="focus:outline-none bg-transparent py-2"
          />
        </Stack>
      </Stack>
      <Stack flexWrap='wrap' gap='1rem'>
        {
          isError || projectData?.data.length === 0 ? <DataNotFound /> :
            isLoading || isFetching ? Array.from({ length: limit || 10 }).map((_, i) => <Box key={i} width='49%'>
              <ProjectCard
                cardTitle=''
                cardSubTitle=''
                detailsInfoPath=''
                clientFullName=''
                clientImage={null}
                projectManagerFullName=''
                projectManagerImage={null}
                startDate=''
                endDate=''
                status=''
                isLoading={isLoading || isFetching}
              />
            </Box>) :
              projectData ? projectData?.data.map((data: TProject, i: number) => <Box
                key={i}
                width='49%'
              >
                <ProjectCard
                  cardTitle={data?.projectName}
                  cardSubTitle={`${data?.engineers?.length + 2} Members`}
                  detailsInfoPath={`/dashboard/engineer/all-projects/${data?.id}`}
                  clientFullName={`${data.client.user.firstName} ${data?.client?.user?.lastName}`}
                  clientImage={`${data?.client?.user.profileImage?.secure_url}`}
                  projectManagerFullName={`${data?.projectManager?.user?.firstName} ${data?.projectManager?.user?.lastName}`}
                  projectManagerImage={`${data?.engineers?.length + 2}`}
                  startDate={`${dateFormate(data?.startDate)}`}
                  endDate={`${dateFormate(data?.estimatedEndDate)}`}
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
