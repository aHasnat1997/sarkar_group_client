'use client';

import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SMDDataTable from "../../../components/ui/SMDDataTable";
import TrashIcon from "@/assets/icons/trash.svg";
import ViewIcon from "@/assets/icons/view.svg";
import ViewDialogs from "./components/viewDialog";
import { THandleOpenModalRow } from "@/types";

export default function Payment() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<THandleOpenModalRow | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const paymentData = {
    "success": true,
    "statusCode": 200,
    "message": "All client found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 23,
      "totalPage": 3
    },
    "data": [
      {
        "id": "0001",
        "requestFrom": "Md. Sofiqul Alam",
        "projectName": "Padma Railway Link",
        "amount": 120000,
        "status": "Completed"
      },
      {
        "id": "0002",
        "requestFrom": "Ayesha Rahman",
        "projectName": "Dhaka Metro Line 6",
        "amount": 95000,
        "status": "Pending"
      },
      {
        "id": "0003",
        "requestFrom": "Mohammad Faruk",
        "projectName": "Chittagong Port Expansion",
        "amount": 185000,
        "status": "In Progress"
      },
      {
        "id": "0004",
        "requestFrom": "Sumaiya Akhter",
        "projectName": "Karnaphuli Tunnel",
        "amount": 75000,
        "status": "Completed"
      },
      {
        "id": "0005",
        "requestFrom": "Hasan Mahmud",
        "projectName": "Rupsha Bridge Construction",
        "amount": 130000,
        "status": "Cancelled"
      },
      {
        "id": "0006",
        "requestFrom": "Nusrat Jahan",
        "projectName": "Sylhet Bypass Road",
        "amount": 67000,
        "status": "Pending"
      },
      {
        "id": "0007",
        "requestFrom": "Sabbir Ahmed",
        "projectName": "Barisal City Water Supply",
        "amount": 98000,
        "status": "Completed"
      },
      {
        "id": "0008",
        "requestFrom": "Tariq Hossain",
        "projectName": "Khulna Industrial Zone",
        "amount": 200000,
        "status": "In Progress"
      }
    ]
  };

  const handleOpenModal = (row: THandleOpenModalRow) => {
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
        paymentData ? <>
          <SMDDataTable
            data={paymentData.data}
            columns={[
              { label: 'Request From', field: 'requestFrom' },
              { label: 'Project Name', field: 'projectName' },
              { label: 'Amount', field: (row) => `${row.amount}/=` },
              { label: "Status", field: 'status' }
            ]}
            page={page}
            limit={limit}
            totalPages={paymentData.mete.totalPage}
            total={paymentData.mete.total}
            onPageChange={setPage}
            onLimitChange={setLimit}
            actions={(row) => (
              <Stack gap='.2rem'>
                <Stack gap=".2rem">
                  <IconButton onClick={() => handleOpenModal(row)} sx={{ border: 'none', color: 'text.primary' }}>
                    <ViewIcon />
                  </IconButton>
                </Stack>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <TrashIcon />
                </IconButton>
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
