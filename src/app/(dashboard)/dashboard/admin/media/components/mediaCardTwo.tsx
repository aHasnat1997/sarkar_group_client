import assets from "@/assets";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TMedia } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";

export function LazyMediaCardTwo() {
  return (
    <Stack
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
      <Skeleton
        width='6rem'
        height='4.5rem'
        variant="rounded"
        animation="wave"
        sx={{
          bgcolor: 'grey.400',
          borderRadius: '1rem'
        }}
      />

      <Box width='100%'>
        <Stack alignContent='center' justifyContent='space-between'>
          <Skeleton
            width='2rem'
            height='1rem'
            variant="rounded"
            animation="wave"
            sx={{
              bgcolor: 'grey.400'
            }}
          />
          <Skeleton
            width='6rem'
            height='1rem'
            variant="rounded"
            animation="wave"
            sx={{
              bgcolor: 'grey.400'
            }}
          />
        </Stack>

        <Skeleton
          width='10rem'
          height='1.5rem'
          variant="rounded"
          animation="wave"
          sx={{
            bgcolor: 'grey.400',
            mt: '1rem'
          }}
        />
      </Box>
    </Stack>
  );
};

export default function MediaCardTwo({ payload }: { payload: TMedia }) {
  return (
    <Stack
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
      <Image
        alt="media image"
        // to-do: fix image
        // src={payload?.image || assets.images.brokenImage}
        src={assets.images.brokenImage}
        width={500}
        height={500}
        className="w-24 rounded-2xl"
      />

      <Box width='100%'>
        <Stack alignContent='center' justifyContent='space-between'>
          <Box sx={{
            bgcolor: 'grey.400',
            color: 'text.primary',
            p: '0rem .2rem',
            borderRadius: '.5rem',
            fontSize: '.8rem'
          }}>
            {capitalizeLetter(payload?.keyword)}
          </Box>
          <Typography color='text.secondary'>{dateFormate(payload?.createdAt)}</Typography>
        </Stack>

        <Typography
          mt='.5rem'
          fontSize='1.125rem'
          fontWeight={700}
        >
          {payload?.title}
        </Typography>
      </Box>
    </Stack>
  );
};
