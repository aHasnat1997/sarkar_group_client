import { TProduct } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import TrashIcon from "@/assets/icons/trash.svg";
import SMDDataTable from "../ui/SMDDataTable";
import DataNotFound from "../ui/DataNotFound";
import ViewCrew from "../../dashboard/admin/all-crews/dialogs/viewCrew";
import AddCrew from "./addCrew";

export default function CrewDetails({ payload }: { payload: TProduct | null }) {
  return (<>
    <Stack justifyContent='end'>
      <AddCrew productId={payload?.id as string} />
    </Stack>

    <Stack alignItems='center' gap='1rem'>
      {
        payload?.crews ? <SMDDataTable
          data={payload?.crews}
          columns={[
            { label: 'Crew Name', field: (row) => row.fullName },
            { label: 'Phone Number', field: (row) => row.phone },
            { label: 'NID No.', field: (row) => row.nid }
          ]}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Box>
                <ViewCrew payload={row} />
              </Box>
              <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                <TrashIcon />
              </IconButton>
            </Stack>
          )}
        /> :
          <DataNotFound />
      }
    </Stack>
  </>);
};
