import { Box, Stack, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import assets from "@/assets";
import ShareIcon from "@/assets/icons/fluent_share.svg";
import CommentIcon from "@/assets/icons/material-symbols-light_comment-outline.svg";
import TrashIcon from "@/assets/icons/trash.svg";

export default function ViewDialog(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { open, setOpen, payload }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: any }
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
              src={payload.image || assets.images.brokenImage}
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
                {payload.category}
              </Box>
              <Box sx={{
                color: 'text.secondary',
                p: '.5rem',
                borderRadius: '1rem'
              }}>
                {payload.uploadAt}
              </Box>
            </Stack>
          </Box>
        </div>
        <Typography
          fontSize='1.5rem'
          fontWeight={700}
        >
          {payload.title}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
        </Typography>
        <Stack alignItems='center' gap='1rem'>
          <Stack gap='.5rem' alignItems='center'>
            <Image
              alt="author image"
              src={payload.author.profileImage || assets.images.userPlaceholderImage}
              width={200}
              height={200}
              className="size-10 rounded"
            />
            <Typography>By {payload.author.firstName} {payload.author.lastName}</Typography>
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
