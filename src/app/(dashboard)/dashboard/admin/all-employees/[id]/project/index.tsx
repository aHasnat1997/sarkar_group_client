import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import { TEmployeeData } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import ViewIcon from "@/assets/icons/view.svg";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";

export default function ProjectTab({ payload }: { payload: TEmployeeData }) {
  const { employeeInfo } = payload;

  return <>
    <Box>
      {
        <SMDDataTable
          data={
            employeeInfo?.createProjects ?
              employeeInfo?.createProjects :
              employeeInfo?.assignProjects ?
                employeeInfo?.assignProjects :
                []
          }
          columns={[
            { label: 'Project Name', field: 'projectName' },
            { label: 'Start Date', field: (row) => dateFormate(row.startDate) },
            { label: 'Estimated End Date', field: (row) => dateFormate(row.estimatedEndDate) },
            { label: 'Project Name', field: (row) => capitalizeLetter(row.status.split('_').join(' ')) },
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
        />
      }
    </Box>
  </>;
};
