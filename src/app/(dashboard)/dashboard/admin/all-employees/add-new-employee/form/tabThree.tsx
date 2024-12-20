import { IconButton, Stack, Typography } from "@mui/material";
import UploadIcon from "@/assets/icons/upload.svg";

export default function TabThree() {
  const DockUpload = ({ label }: { label: string }) => <Stack
    width='100%'
    direction='column'
    gap='.5rem'
  >
    <Typography>
      {label}
    </Typography>
    <Stack
      border='1px dotted'
      borderColor='primary.main'
      borderRadius='.5rem'
      padding='1.25rem'
      direction='column'
      gap='.5rem'
      alignItems='center'
    >
      <IconButton sx={{
        bgcolor: 'primary.main',
        color: 'white',
        border: '.5px solid',
        borderRadius: '.5rem'
      }}>
        <UploadIcon />
      </IconButton>
      <Typography>
        Drag & Drop or
        <Typography component='span' color="primary.main"> choose file </Typography>
        to upload
      </Typography>
      <Typography color="text.secondary">Supported formats : Jpeg, pdf</Typography>
    </Stack>
  </Stack>;

  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <DockUpload label="Upload Dock" />
    </Stack>
  );
};
