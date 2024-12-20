'use client';

import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useState } from 'react';
import SMDDataTable from "../../../components/ui/SMDDataTable";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@/assets/icons/add-circle.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import Link from "next/link";
import ViewIcon from "@/assets/icons/view.svg";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { useAllEmployeesQuery } from "@/redux/api/endpoints/employeesApi";
import { TEmployeeData } from "@/types";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import MenuButton from "@/components/menuButton";

export default function AllEmployees() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: employeesData, isLoading, isFetching, isError } = useAllEmployeesQuery({ page, limit });

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
        <Stack gap='.5rem'>
          <MenuButton
            buttonTitle={
              <Stack gap='.5rem' alignItems='center'>
                <AddIcon /> Add New Employee
              </Stack>
            }
            menuList={[
              { list: <Link href={`/dashboard/admin/all-employees/add-new-employee/admin`}>Admin</Link> },
              { list: <Link href='/dashboard/admin/all-employees/add-new-employee/project-manager'>Project Manager</Link> },
              { list: <Link href='/dashboard/admin/all-employees/add-new-employee/engineer'>Engineer</Link> }
            ]}
          />
          <Button variant="outlined">
            <Stack gap='.5rem' alignItems='center'>
              <FilterIcon /> Filter
            </Stack>
          </Button>
        </Stack>
      </Stack>

      <Box>
        {
          isLoading || employeesData ? <SMDDataTable
            data={employeesData?.data}
            columns={[
              { label: 'Employee ID', field: (row: TEmployeeData) => row?.employeeInfo?.employeeId },
              { label: "Name", field: (row: TEmployeeData) => (row.firstName + ' ' + row.lastName), isSortable: true },
              { label: 'Email', field: (row: TEmployeeData) => row.email, isSortable: true },
              { label: "Department", field: (row: TEmployeeData) => row.employeeInfo.department },
              { label: "Employee Type", field: (row: TEmployeeData) => row.employeeInfo.employeeType }
            ]}
            page={page}
            limit={limit}
            totalPages={employeesData?.mete.totalPage}
            total={employeesData?.mete.total}
            isLoading={isLoading || isFetching}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Link href={`/dashboard/admin/all-employees/${row.id}`}>
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
    </Box>
  );
};
