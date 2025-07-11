import assets from "@/assets";
import { TProject } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import CommentIcon from '@/assets/icons/comment.svg';
// import PinIcon from '@/assets/icons/pin.svg';
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import { useState } from "react";
import ViewDialog from "../component/viewDialog";

export default function TabFour({ payload }: { payload: TProject }) {
  const { projectGallery } = payload;
  const [open, setOpen] = useState<boolean>(false);
  const [galleryId, setGalleryId] = useState<string>('');

  return <>
    <Grid container spacing='1.5rem' mt='1.5rem'>
      {
        !projectGallery || projectGallery.length === 0 ? <DataNotFound /> :
          projectGallery?.map(data => <Grid
            size={4}
            key={data.id}
            sx={{ cursor: 'pointer' }}
          >
            <Box
              onClick={() => {
                setOpen(true);
                setGalleryId(data.id)
              }}
              sx={{
                border: '.5px solid',
                borderColor: 'grey.400',
                borderRadius: '.5rem',
                padding: '1rem 1.5rem'
              }}
            >
              <Typography fontSize='1.25rem'>
                {data?.title}
              </Typography>
              <Box my='1.5rem'>
                <Image
                  alt='image'
                  src={data?.images[0]?.secure_url ? data?.images[0]?.secure_url : assets.images.brokenImage}
                  width={500}
                  height={500}
                />
              </Box>

              <Stack alignItems='center' justifyContent='space-between'>
                <Stack alignItems='center' gap='1rem'>
                  <Stack alignItems='center' gap='.5rem'>
                    <CommentIcon /> {data?.comments?.length}
                  </Stack>
                  {/* <Stack alignItems='center' gap='.5rem'>
                    <PinIcon /> 4
                  </Stack> */}
                </Stack>
                <Stack alignContent='center' gap='.5rem'>
                  <Typography color='text.secondary'>Uploaded By</Typography>
                  <Image
                    alt='user image'
                    src={data?.uploader?.profileImage?.secure_url ? data?.uploader?.profileImage?.secure_url : assets.images.userPlaceholderImage}
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
    {open && <ViewDialog open={open} setOpen={setOpen} galleryId={galleryId} />}
  </>;
};
