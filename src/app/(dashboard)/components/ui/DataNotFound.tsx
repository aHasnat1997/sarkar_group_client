import UpcomingIcon from '@mui/icons-material/Upcoming';
import { Box, Stack, Typography } from '@mui/material';

export default function DataNotFound() {
  return (
    <Stack width='100%' height='50vh' alignItems='center' justifyContent='center' fontSize='5rem'>
      <Box width='5rem' color='text.secondary'>
        <UpcomingIcon fontSize='inherit' className='opacity-50' />
        <Typography fontSize='1rem' textAlign='center' color='text.secondary'>No Data Found.</Typography>
      </Box>
    </Stack>
  );
}