import assets from "@/assets";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { TMedia } from "@/types";
import { dateFormate } from "@/utils/dateFormate";

export function LazyMediaCardOne() {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Skeleton
        width='100%'
        height='15rem'
        variant="rounded"
        animation="wave"
        sx={{
          bgcolor: 'grey.400',
          borderRadius: '1rem'
        }}
      />
      <Skeleton
        width='15rem'
        height='2rem'
        variant="rounded"
        animation="wave"
        sx={{ bgcolor: 'grey.400' }}
      />
      <Stack justifyContent='space-between' alignItems='center'>
        <Stack gap='.5rem' alignItems='center'>
          <Skeleton
            width='2rem'
            height='2rem'
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: 'grey.400' }}
          />
          <Skeleton
            width='8rem'
            height='1rem'
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: 'grey.400' }}
          />
        </Stack>
        <Skeleton
          width='6rem'
          height='1rem'
          variant="rounded"
          animation="wave"
          sx={{ bgcolor: 'grey.400' }}
        />
      </Stack>
    </Stack>
  );
};

export default function MediaCardOne({ payload }: { payload: TMedia }) {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
      sx={{
        cursor: 'pointer',
        padding: '.5rem',
        border: '1px solid',
        borderColor: 'transparent',
        ":hover": {
          border: '1px solid',
          borderColor: 'grey.400',
          borderRadius: '1.5rem'
        }
      }}
    >
      <Box position='relative'>
        <Image
          alt="media image"
          src={payload?.image?.secure_url || assets.images.brokenImage}
          // src={assets.images.brokenImage}
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
            {payload?.keyword}
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
        {payload?.title}
      </Typography>
      <Stack justifyContent='space-between' alignItems='center'>
        <Stack gap='.5rem' alignItems='center'>
          <Typography color='text.secondary'>By {payload?.uploader?.firstName} {payload?.uploader?.lastName}</Typography>
          <Image
            alt="author image"
            src={payload?.uploader?.profileImage?.secure_url || assets.images.userPlaceholderImage}
            width={100}
            height={100}
            className="size-5 rounded"
          />
        </Stack>
        <Typography color='text.secondary'>{dateFormate(payload?.createdAt)}</Typography>
      </Stack>
    </Stack>
  );
};
