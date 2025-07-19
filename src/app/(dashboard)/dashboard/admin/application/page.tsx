'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SMDDataTable from "../../../components/ui/SMDDataTable";
import ViewIcon from "@/assets/icons/view.svg";
import ViewDialogs from "./components/viewDialog";
import { useAllApplicationsQuery } from "@/redux/api/endpoints/applicationsApi";
import { TApplication } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";

export default function Application() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TApplication | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: applicationData, isLoading, isFetching, isError } = useAllApplicationsQuery({ page, limit });

  const handleOpenModal = (row: TApplication) => {
    setSelectedRow(row);
    setOpen(true);
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
      </Stack>
      {
        isLoading || applicationData ? <>
          <SMDDataTable
            data={applicationData?.data as TApplication[]}
            columns={[
              { label: 'Application From', field: (row) => `${row.employee.firstName} ${row.employee.lastName}` },
              { label: 'Subject', field: (row) => row.subject },
              { label: 'Application Type', field: (row) => capitalizeLetter(row.applicationType.split('_').join(' ')) },
              { label: "Status", field: 'status' }
            ]}
            page={page}
            limit={limit}
            totalPages={applicationData?.mete?.totalPage}
            total={applicationData?.mete?.total}
            isLoading={isLoading || isFetching}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Stack gap=".2rem">
                  <IconButton onClick={() => handleOpenModal(row)} sx={{ border: 'none', color: 'text.primary' }}>
                    <ViewIcon />
                  </IconButton>
                </Stack>
              </Stack>
            )}
          />
        </> :
          isError ? <DataNotFound /> :
            <></>
      }
      {
        open && <ViewDialogs open={open} setOpen={setOpen} data={selectedRow} />
      }
    </Box>
  );
};
