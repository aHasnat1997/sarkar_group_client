import { TProduct } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TrashIcon from "@/assets/icons/trash.svg";
import SMDDataTable from "../ui/SMDDataTable";
import DataNotFound from "../ui/DataNotFound";
import ViewCrew from "../../dashboard/admin/all-crews/dialogs/viewCrew";
import AddCrew from "./addCrew";

export default function CrewDetails({ payload }: { payload: TProduct | null }) {
  return (<>
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

      <Box>
        <AddCrew productId={payload?.id as string} />
      </Box>
    </Stack>

    <Stack alignItems='center' gap='1rem' mt='1.5rem'>
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
