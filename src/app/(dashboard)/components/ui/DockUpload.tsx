import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import UploadIcon from '@/assets/icons/upload.svg';

interface DockUploadProps {
  onFileSelect: (file: File) => void;
}

const DockUpload: React.FC<DockUploadProps> = ({ onFileSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      console.log('Please select a PDF file.');
    }
  };

  const UploadIconFn = () => (<Stack
    direction='column'
    gap='.5rem'
    alignItems='center'
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
      <Typography component='span' color="primary.main"> choose file </Typography>
      to upload
    </Typography>
    <Typography color="text.secondary">Supported formats : pdf</Typography>
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
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </Stack>
  );
};

export default DockUpload;
