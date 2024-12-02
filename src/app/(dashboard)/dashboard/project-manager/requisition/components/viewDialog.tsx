import { Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { THandleOpenModalRow } from "@/types";
import AcceptDialog from "./acceptDialog";
import DeclineDialog from "./declineDialog";

export default function ViewDialogs(
  { open, setOpen, data }:
    {
      open: boolean,
      setOpen: Dispatch<SetStateAction<boolean>>,
      data: THandleOpenModalRow | null
    }
) {
  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack direction='column' gap='1rem'>
        <Stack>
          <DataViewField title="Request From" data={data?.projectName} />
          <DataViewField title="Designation" data='Project Manager' />
        </Stack>
        <DataViewField
          title="Payment Description"
          data="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,content here', making it look like readable English."
        />
        <Stack>
          <DataViewField title="Project Name" data={data?.projectName} />
          <DataViewField title="Amount" data={`${data?.amount}/=`} />
        </Stack>
        <Stack gap='1rem'>
          <AcceptDialog setOpen={setOpen} />
          <DeclineDialog setOpen={setOpen} />
        </Stack>
      </Stack>
    </ResponsiveDialog>
  </>
};
