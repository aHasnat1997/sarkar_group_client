import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import { TClient } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import ViewIcon from "@/assets/icons/view.svg";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";

export default function TabTwo({ payload }: { payload: TClient }) {
  return <>
    <Box>
      {
        payload ? <SMDDataTable
          data={payload.projects}
          columns={[
            { label: 'Project Name', field: (row) => (row.projectName) },
            { label: 'Department', field: (row) => capitalizeLetter(row.department.split('_').join(' ')) },
            { label: 'Start Date', field: (row) => dateFormate(row.startDate) },
            { label: 'Estimated End Date', field: (row) => dateFormate(row.estimatedEndDate) },
            { label: 'Status', field: (row) => capitalizeLetter(row.status.split('_').join(' ')) },
          ]}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Link href={`/dashboard/admin/all-projects/${row.id}`}>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <ViewIcon />
                </IconButton>
              </Link>
            </Stack>
          )}
        /> :
          <Box></Box>
      }
    </Box>
  </>;
};
