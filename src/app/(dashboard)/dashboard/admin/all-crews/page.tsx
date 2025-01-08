import { Box, Button, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from "@/assets/icons/edit.svg";

export default function AllCrews() {

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

          <Button>
            <Stack gap='.5rem' alignItems='center'>
              <EditIcon /> Add Crew
            </Stack>
          </Button>
        </Stack>
      </Stack>


    </Box>
  );
};
