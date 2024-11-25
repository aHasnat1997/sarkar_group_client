'use client';

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";

export default function ViewDialog() {
  const [open, setOpen] = useState<boolean>(false);

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Media
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
    >
      <Typography>Dialog drawer</Typography>
    </ResponsiveDialog>
  </>
};
