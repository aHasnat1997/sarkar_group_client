// 'use client';

import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import { TProject } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import ViewIcon from "@/assets/icons/view.svg";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import capitalizeLetter from "@/utils/capitalizeLetter";

export default function TabTwo({ payload }: { payload: TProject }) {
  const { projectManager, engineers } = payload;
  const employeeData = [projectManager, ...engineers];

  return <>
    <Box>
      {
        employeeData ? <SMDDataTable
          data={employeeData}
          columns={[
            { label: 'Employee Name', field: (row) => (row.user.firstName + ' ' + row.user.lastName) },
            { label: 'Designation', field: (row) => capitalizeLetter(row.designation.split('_').join(' ')) },
            { label: 'Department', field: (row) => capitalizeLetter(row.department.split('_').join(' ')) },
            { label: 'Type', field: (row) => capitalizeLetter(row.employeeType.split('_').join(' ')) }
          ]}
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
          <Box></Box>
      }
    </Box>
  </>;
};
