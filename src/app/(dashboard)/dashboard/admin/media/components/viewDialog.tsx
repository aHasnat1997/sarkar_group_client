import { Box, Stack, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import assets from "@/assets";
import ShareIcon from "@/assets/icons/fluent_share.svg";
import CommentIcon from "@/assets/icons/material-symbols-light_comment-outline.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import { TMedia } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";

export default function ViewDialog(
  { open, setOpen, payload }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: TMedia | null }
) {
  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
    >
      <Stack direction='column' gap='1rem'>
        <div className="w-fit">
          <Box>
            <Image
              alt="media image"
              // to-do: fix image
              // src={payload?.image || assets.images.brokenImage}
              src={assets.images.brokenImage}
              width={500}
              height={500}
            />
            <Stack
              width='100%'
              justifyContent='space-between'
              alignItems='center'
              p='.5rem'
            >
              <Box sx={{
                bgcolor: 'grey.400',
                color: 'text.primary',
                p: '.5rem',
                borderRadius: '1rem'
              }}>
                {capitalizeLetter(payload?.keyword as string)}
              </Box>
              <Box sx={{
                color: 'text.secondary',
                p: '.5rem',
                borderRadius: '1rem'
              }}>
                {dateFormate(payload?.createdAt as string)}
              </Box>
            </Stack>
          </Box>
        </div>
        <Typography
          fontSize='1.5rem'
          fontWeight={700}
        >
          {payload?.title}
        </Typography>
        <Typography>
          {payload?.description}
        </Typography>
        <Stack alignItems='center' gap='1rem'>
          <Stack gap='.5rem' alignItems='center'>
            <Image
              alt="author image"
              src={payload?.uploader?.profileImage || assets.images.userPlaceholderImage}
              width={200}
              height={200}
              className="size-10 rounded"
            />
            <Typography>By {payload?.uploader?.firstName} {payload?.uploader?.lastName}</Typography>
          </Stack>
          <Stack color='primary.main' alignItems='center' gap='1rem'>
            <ShareIcon />
            <CommentIcon />
            <TrashIcon />
          </Stack>
        </Stack>
      </Stack>
    </ResponsiveDialog>
  </>
};
