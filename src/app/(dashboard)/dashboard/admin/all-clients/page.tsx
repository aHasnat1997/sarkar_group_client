'use client';

import { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@/assets/icons/add-circle.svg';
import SMDDataTable from "../../../components/ui/SMDDataTable";
import ViewIcon from "@/assets/icons/view.svg";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { useAllClientsQuery } from "@/redux/api/endpoints/clientsApi";
import { TClient } from "@/types";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";

export default function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: clientData, isLoading, isFetching, isError } = useAllClientsQuery({ page, limit });

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
        <Link href='/dashboard/admin/all-clients/add-new-client'>
          <Button>
            <Stack gap='.5rem' alignItems='center'>
              <AddIcon /> Add Client
            </Stack>
          </Button>
        </Link>
      </Stack>
      {
        isLoading || clientData ? <SMDDataTable
          data={clientData?.data}
          columns={[
            { label: 'Client Name', field: (row: TClient) => (row.user.firstName + ' ' + row.user.lastName) },
            { label: 'Email', field: (row: TClient) => row.user.email },
            { label: 'Mobile', field: (row: TClient) => row.mobile },
            { label: "Total Project", field: (row: TClient) => row.projects.length }
          ]}
          page={page}
          limit={limit}
          totalPages={clientData?.mete?.totalPage}
          total={clientData?.mete?.total}
          isLoading={isLoading || isFetching}
          onPageChange={setPage}
          onLimitChange={setLimit}
          actions={(row: TClient) => (
            <Stack gap='.2rem'>
              <Link href={`/dashboard/admin/all-clients/${row.id}`}>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <ViewIcon />
                </IconButton>
              </Link>
              <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                <EditIcon />
              </IconButton>
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
  );
};
