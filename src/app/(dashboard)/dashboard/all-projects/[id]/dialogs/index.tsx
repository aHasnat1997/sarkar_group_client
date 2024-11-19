import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";

export default function ProjectDialogButtons({ value }: { value: number }) {
  const [open, setOpen] = useState(false);

  const DialogOne = () => <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Profile
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Edit Profile'
    >
      <Typography>Dialog open</Typography>
    </ResponsiveDialog>
  </>;

  const DialogTwo = () => <>
    <Button>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Profile
      </Stack>
    </Button>
  </>;

  const DialogThree = () => <>
    <Button>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Profile
      </Stack>
    </Button>
  </>;

  const DialogFour = () => <>
    <Button>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Profile
      </Stack>
    </Button>
  </>;

  if (value === 0) return <DialogOne />
  else if (value === 1) return <DialogTwo />
  else if (value === 2) return <DialogThree />
  else if (value === 3) return <DialogFour />
  else return <></>
};
