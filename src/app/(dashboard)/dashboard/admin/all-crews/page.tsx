'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCrew from "./dialogs/addCrew";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import TrashIcon from "@/assets/icons/trash.svg";
import { TCrew } from "@/types";
import { useAllCrewsQuery } from "@/redux/api/endpoints/crewsApi";
import ViewCrew from "./dialogs/viewCrew";
import UpdateCrew from "./dialogs/updateCrew";

export default function AllCrews() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: crewData, isLoading, isFetching, isError } = useAllCrewsQuery({ page, limit });

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
        <Stack gap='1rem'>

          <Box>
            <AddCrew />
          </Box>
        </Stack>
      </Stack>

      <Box>
        {
          isLoading || crewData ? <SMDDataTable
            data={crewData?.data as TCrew[]}
            columns={[
              { label: 'Crew Name', field: (row) => row.fullName },
              { label: 'Phone Number', field: (row) => row.phone },
              { label: 'NID No.', field: (row) => row.nid }
            ]}
            page={page}
            limit={limit}
            totalPages={crewData?.mete?.totalPage}
            total={crewData?.mete?.total}
            isLoading={isLoading || isFetching}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Box>
                  <ViewCrew payload={row} />
                </Box>
                <Box>
                  <UpdateCrew payload={row} />
                </Box>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <TrashIcon />
                </IconButton>
              </Stack>
            )}
          /> :
            isError ? <DataNotFound /> :
              <></>
        }
      </Box>
    </Box>
  );
};
