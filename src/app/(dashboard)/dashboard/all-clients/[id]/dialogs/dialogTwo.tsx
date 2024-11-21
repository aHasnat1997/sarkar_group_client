import { Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";

export default function DialogTwo({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

  return <>
    <Button>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Employee
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Edit Profile'
    >
      <Typography>Dialog open</Typography>
    </ResponsiveDialog>
  </>
};
