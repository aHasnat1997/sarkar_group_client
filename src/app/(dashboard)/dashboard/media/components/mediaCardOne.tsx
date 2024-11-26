import assets from "@/assets";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MediaCardOne({ payload }: { payload: any }) {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Box position='relative'>
        <Image
          alt="media image"
          src={payload.image || assets.images.brokenImage}
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <Stack
          width='100%'
          justifyContent='space-between'
          alignItems='center'
          px='.5rem'
          position='absolute'
          top={8}
        >
          <Box sx={{
            bgcolor: 'text.primary',
            color: 'white',
            p: '.5rem',
            borderRadius: '1rem'
          }}>
            {payload.category}
          </Box>
          <Box sx={{
            bgcolor: 'text.primary',
            color: 'white',
            p: '.5rem',
            borderRadius: '1rem'
          }}>
            <TurnedInNotIcon />
          </Box>
        </Stack>
      </Box>
      <Typography
        fontSize='1.125rem'
        fontWeight={700}
      >
        {payload.title}
      </Typography>
      <Stack justifyContent='space-between' alignItems='center'>
        <Stack gap='.5rem' alignItems='center'>
          <Image
            alt="author image"
            src={payload.author.profileImage || assets.images.userPlaceholderImage}
            width={100}
            height={100}
            className="size-5 rounded"
          />
          <Typography color='text.secondary'>By {payload.author.firstName} {payload.author.lastName}</Typography>
        </Stack>
        <Typography color='text.secondary'>{payload.uploadAt}</Typography>
      </Stack>
    </Stack>
  );
};
