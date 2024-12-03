import assets from "@/assets";
import { TProject } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import CommentIcon from '@/assets/icons/comment.svg';
import PinIcon from '@/assets/icons/pin.svg';

export default function TabFour({ payload }: { payload: TProject }) {
  const { projectGallery } = payload;

  return <>
    <Grid container spacing='1.5rem' mt='1.5rem'>
      {
        projectGallery.map(data => <Grid
          size={4}
          key={data.id}
        >
          <Box
            sx={{
              border: '.5px solid',
              borderColor: 'grey.400',
              borderRadius: '.5rem',
              padding: '1rem 1.5rem'
            }}
          >
            <Typography fontSize='1.25rem'>
              {data.title}
            </Typography>
            <Box my='1.5rem'>
              <Image
                alt='image'
                src={(data.image === 'null' || data.image === null) ? data.image : assets.images.brokenImage}
                width={500}
                height={500}
              />
            </Box>

            <Stack alignItems='center' justifyContent='space-between'>
              <Stack alignItems='center' gap='1rem'>
                <Stack alignItems='center' gap='.5rem'>
                  <CommentIcon /> {data.comments.length}
                </Stack>
                <Stack alignItems='center' gap='.5rem'>
                  <PinIcon /> 4
                </Stack>
              </Stack>
              <Stack alignContent='center' gap='.5rem'>
                <Typography color='text.secondary'>Uploaded By</Typography>
                <Image
                  alt='user image'
                  src={assets.images.userPlaceholderImage}
                  width={100}
                  height={100}
                  className="size-6 rounded-full"
                />
              </Stack>
            </Stack>

          </Box>
        </Grid>)
      }
    </Grid>
  </>;
};
