import { TEmployeeData } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import ViewIcon from "@/assets/icons/view.svg";
import DownloadIcon from "@/assets/icons/download.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TabThree({ payload }: { payload: TEmployeeData }) {

  return <>
    <Box>
      <Stack
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {
          [
            'Appointment Letter.pdf',
            'Salary Slip_June.pdf',
            'Salary Slip_May.pdf',
            'Salary Slip_April.pdf',
            'Reliving Letter.pdf',
            'Experience Letter.pdf'
          ].map((title, i) => <Stack
            key={i}
            width='45%'
            justifyContent='space-between'
            border='1px solid'
            color='gray.400'
            borderRadius='.5rem'
            padding='1.5rem'
            margin='1rem'
          >
            <Typography>{title}</Typography>
            <Stack gap='.5rem'>
              <ViewIcon />
              <DownloadIcon />
            </Stack>
          </Stack>)
        }
      </Stack>
    </Box>
  </>;
};
