'use client';

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import RequestIcon from "@/assets/icons/application.svg";
import Link from "next/link";
import SMDDataTable from "../../../components/ui/SMDDataTable";
import ViewProductDialogs from "@/app/(dashboard)/components/ProductViewDialog";
import { useAllProductsQuery } from "@/redux/api/endpoints/productsApi";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import { TProduct } from "@/types";

type TProductCategory = 'CIVIL' | 'MARIN' | 'ENGINEERING';
type TProductMetaData = {
  category: TProductCategory;
  title: string;
  assigned: string;
  unassigned: string;
  total: string;
};

export default function AllProduct() {
  const [currentCategory, setCurrentCategory] = useState<TProductCategory>('CIVIL');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: productsData, isLoading, isFetching, isError } = useAllProductsQuery({ page, limit, category: currentCategory });

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
          <Link href='/dashboard/project_manager/all-products/all-product-request'>
            <Button variant='outlined'>
              <Stack gap='.5rem' alignItems='center'>
                <RequestIcon /> Product Request
              </Stack>
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Stack alignItems='center' gap='1rem' mt='1.5rem'>
        {
          productsData && !isError ? productsData?.data?.productMetaData?.map((data: TProductMetaData) => <Box
            key={data.category}
            component='div'
            sx={{
              width: '100%',
              padding: '1rem',
              border: '1px solid',
              borderRadius: '.8rem',
              borderColor: data.category === currentCategory ? 'primary.main' : 'transparent',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentCategory(data.category as TProductCategory)}
          >
            <Box>
              <Typography fontSize='1.25rem' fontWeight={700}>
                {data.title}
              </Typography>
              <Typography color='text.secondary'>
                {data.total} Equipment&apos;s
              </Typography>
            </Box>
            <Stack justifyContent='space-between' mt='1.5rem'>
              <Typography color='text.secondary'>
                <Typography fontWeight={700} component='span'>
                  {data.assigned}
                </Typography> Assigned
              </Typography>
              <Typography color='text.secondary'>
                <Typography fontWeight={700} component='span'>
                  {data.unassigned}
                </Typography> Unassigned
              </Typography>
            </Stack>
          </Box>) :
            <></>
        }
      </Stack>

      <Box mt='1.5rem'>
        <Typography fontSize='1.25rem' fontWeight={700} mb='.8rem'>
          {
            currentCategory === 'CIVIL' ? 'Civil Products' :
              currentCategory === 'MARIN' ? 'Marine Products' :
                currentCategory === 'ENGINEERING' ? 'Engineering Products' :
                  ''
          }
        </Typography>
        {
          isLoading || productsData ? <SMDDataTable
            data={productsData?.data?.products as TProduct[]}
            columns={[
              { label: 'Equipment ID', field: (row) => row.equipmentId },
              { label: 'Equipment Name', field: (row) => row.equipmentName },
              { label: 'Brand Name', field: (row) => row.brandName },
              { label: 'Model', field: (row) => row.model },
              { label: 'Status', field: (row) => row.status }
            ]}
            page={page}
            limit={limit}
            totalPages={productsData?.mete?.totalPage}
            total={productsData?.mete?.total}
            isLoading={isLoading || isFetching}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Box>
                  <ViewProductDialogs data={row as unknown as TProduct} />
                </Box>
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
    </Box>
  );
};
