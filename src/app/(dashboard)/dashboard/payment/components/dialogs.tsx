import { Button, IconButton, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ViewIcon from "@/assets/icons/view.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";

export default function Dialogs({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

  return <>
    <IconButton sx={{ border: 'none', color: 'text.primary' }}>
      <ViewIcon />
    </IconButton>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack direction='column' gap='1rem'>
        <Stack>
          <DataViewField title="Request From" data='Md. Sofiqul Alam' />
          <DataViewField title="Designation" data='Project Manager' />
        </Stack>
        <DataViewField
          title="Payment Description"
          data="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,content here', making it look like readable English."
        />
        <Stack>
          <DataViewField title="Project Name" data='Padma Railway Project' />
          <DataViewField title="Amount" data='70,000/=' />
        </Stack>
        <Stack>
          <Button sx={{ bgcolor: 'success.main' }}>Accept</Button>
          <Button sx={{ bgcolor: 'error.main' }}>Decline</Button>
        </Stack>
      </Stack>
    </ResponsiveDialog>
  </>
};
