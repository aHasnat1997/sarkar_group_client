import { Dispatch, SetStateAction, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";

export default function DeclineDialog({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);

  const buttonClickFn = () => {
    setLocalOpen(false)
    setOpen(false)
  }

  return <>
    <Button
      fullWidth
      sx={{ bgcolor: 'error.main' }}
      onClick={() => setLocalOpen(true)}
    >
      Decline
    </Button>

    <ResponsiveDialog
      maxWidth="xs"
      open={localOpen}
      onClose={() => setLocalOpen(false)}
      title='Decline Reason'
    >
      <Stack direction='column' gap='1rem'>
        <TextField rows={6} />
        <Button
          fullWidth
          onClick={buttonClickFn}
        >
          Send
        </Button>
      </Stack>
    </ResponsiveDialog>
  </>
};
