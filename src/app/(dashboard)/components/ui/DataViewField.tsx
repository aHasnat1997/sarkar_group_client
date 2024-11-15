import { Box, Typography } from "@mui/material";

type TDataViewField = {
  title: string;
  data: string | number | null | undefined;
};
export default function DataViewField({ title, data }: TDataViewField) {
  return <>
    <Box padding='.25rem'>
      <Typography fontSize='1rem' color='text.secondary'>{title}</Typography>
      <Typography fontSize='1.25rem'>{data}</Typography>
    </Box>
  </>;
};
