'use client';

import { Button, Stack } from "@mui/material";
import { useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormDialog() {
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
      <Stack direction='column' gap='1.5rem'>

      </Stack>
    </ResponsiveDialog>
  </>
};
