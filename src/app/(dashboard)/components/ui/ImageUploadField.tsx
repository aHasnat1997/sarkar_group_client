import { Box, Stack, Typography } from "@mui/material";
import UploadIcon from "@/assets/icons/upload.svg";

interface DockUploadProps {
  onFileSelect: (file: File) => void;
}

export default function ImageUploadField({ onFileSelect }: DockUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type.startsWith('image/'))) {
      onFileSelect(file);
    } else {
      console.log('Please select a valid image file (jpg, jpeg, png).');
    }
  };

  const UploadIconFn = () => (<Stack
    direction='column'
    gap='.5rem'
    alignItems='center'
    p='1rem'
    textAlign='center'
  >
    <Box sx={{
      padding: '.5rem',
      bgcolor: 'primary.main',
      color: 'white',
      border: '.5px solid',
      borderRadius: '.5rem'
    }}>
      <UploadIcon />
    </Box>
    <Typography>
      Click here for
      <Typography component='span' color="primary.main"> choose image </Typography>
      to upload
    </Typography>
    <Typography color="text.secondary">Supported formats : jpg, jpeg, png</Typography>
  </Stack>);

  return (
    <Stack
      py='2.5rem'
      border="1px dotted"
      borderColor="primary.main"
      borderRadius="0.5rem"
      justifyContent="center"
      alignItems="center"
      className="cursor-pointer"
      component="label"
    >
      <UploadIconFn />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </Stack>
  );
};
