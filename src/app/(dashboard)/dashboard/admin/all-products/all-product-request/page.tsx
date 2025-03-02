'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAllRequestProductsQuery } from "@/redux/api/endpoints/requestProductsApi";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import { TRequestProducts } from "@/types/requestProducts.type";
import { dateFormate } from "@/utils/dateFormate";
import ViewDialogs from "./components/viewDialog";

export default function AllProductRequest() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: productsRequestData, isLoading, isFetching, isError } = useAllRequestProductsQuery({ page, limit });

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
        <Link href='/dashboard/admin/all-products'>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      </Stack>
      <Box mt='1.5rem'>
        {
          isLoading || productsRequestData ? <SMDDataTable
            data={productsRequestData?.data as TRequestProducts[]}
            columns={[
              { label: 'Equipment Name', field: (row) => row.product.equipmentName },
              { label: 'Project Name', field: (row) => row.project.projectName },
              { label: 'Starting Date', field: (row) => dateFormate(row.startDate) },
              { label: 'End Date', field: (row) => dateFormate(row.endDate) },
              { label: 'Status', field: (row) => row.status }
            ]}
            page={page}
            limit={limit}
            totalPages={productsRequestData?.mete?.totalPage}
            total={productsRequestData?.mete?.total}
            onPageChange={setPage}
            onLimitChange={setLimit}
            isLoading={isLoading || isFetching}
            actions={(row) => (
              <>
                <ViewDialogs data={row} />
              </>
            )}
          /> :
            isError ? <DataNotFound /> :
              <></>
        }
      </Box>
    </Box>
  );
};
