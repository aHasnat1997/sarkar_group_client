import { TProject } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import ViewIcon from "@/assets/icons/view.svg";
import EditIcon from "@/assets/icons/edit.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import Link from "next/link";
import capitalizeLetter from "@/utils/capitalizeLetter";

export default function TabThree({ payload }: { payload: TProject }) {
  const { products } = payload;

  return <>
    <Box>
      {
        products ? <SMDDataTable
          data={products}
          columns={[
            { label: 'Equipment ID', field: (row) => row.equipmentId },
            { label: 'Equipment Name', field: (row) => row.equipmentName },
            { label: 'Brand Name', field: (row) => row.brandName },
            { label: 'Model', field: (row) => row.model },
            { label: 'Status', field: (row) => capitalizeLetter(row.status.split('_').join(' ')) }
          ]}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Link href={`/dashboard/project_manager/all-employees/${row.id}`}>
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
