'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SMDDataTable from "../../../components/ui/SMDDataTable";
import ViewIcon from "@/assets/icons/view.svg";
import ViewDialogs from "./components/viewDialog";
import { TRequisition } from "@/types";
import { useAllRequisitionsQuery } from "@/redux/api/endpoints/requisitionsApi";

export default function Requisition() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TRequisition | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: requisitionData, isLoading, isFetching } = useAllRequisitionsQuery({ page, limit });

  const handleOpenModal = (row: TRequisition) => {
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
        isLoading || requisitionData ? <>
          <SMDDataTable
            data={requisitionData?.data as TRequisition[]}
            columns={[
              { label: 'Request From', field: (row) => `${row.employee.firstName} ${row.employee.lastName}` },
              { label: 'Project Name', field: (row) => `${row.project.projectName}` },
              { label: 'Amount', field: (row) => `${row.amount}/=` },
              { label: "Status", field: (row) => `${row.status}` }
            ]}
            page={page}
            limit={limit}
            totalPages={requisitionData?.mete?.totalPage}
            total={requisitionData?.mete?.total}
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
          <Box></Box>
      }
      {
        open && <ViewDialogs open={open} setOpen={setOpen} data={selectedRow} />
      }
    </Box>
  );
};
