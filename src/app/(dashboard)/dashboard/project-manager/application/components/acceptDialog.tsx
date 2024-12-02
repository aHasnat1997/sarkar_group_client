import { Dispatch, SetStateAction, useState } from "react";
import { Button, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";

export default function AcceptDialog({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);

  const buttonClickFn = () => {
    setLocalOpen(false)
    setOpen(false)
  }

  return <>
    <Button
      fullWidth
      sx={{ bgcolor: 'success.main' }}
      onClick={() => setLocalOpen(true)}
    >
      Accept
    </Button>

    <ResponsiveDialog
      maxWidth="xs"
      open={localOpen}
      onClose={() => setLocalOpen(false)}
      title='Accepted'
    >
      <Typography fontSize='10rem' textAlign='center'>🎉</Typography>
      <Button
        fullWidth
        onClick={buttonClickFn}
      >
        Send
      </Button>
    </ResponsiveDialog>
  </>
};
