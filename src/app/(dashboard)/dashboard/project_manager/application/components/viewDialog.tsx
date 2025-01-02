import { Box, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TApplication } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";

export default function ViewDialogs(
  { open, setOpen, data }:
    {
      open: boolean,
      setOpen: Dispatch<SetStateAction<boolean>>,
      data: TApplication | null
    }
) {
  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack direction='column' gap='1rem'>
        <Stack>
          <DataViewField title="Application From" data={`${data?.employee?.firstName} ${data?.employee?.lastName}`} />
          <DataViewField title="Designation" data={
            data?.employee?.engineers ? capitalizeLetter(data?.employee?.engineers.designation.split('_').join(' ')) :
              data?.employee?.projectManagers ? capitalizeLetter(data?.employee?.projectManagers.designation.split('_').join(' ')) : ''
          } />
        </Stack>
        <Stack gap='1rem'>
          <DataViewField title="From This Date" data={dateFormate(data?.startData as string)} />
          <DataViewField title="To This Date" data={dateFormate(data?.endData as string)} />
        </Stack>
        <DataViewField
          title="Subject"
          data={data?.subject}
        />
        <DataViewField
          title="Application Description"
          data={data?.description}
        />
        <Box>
          {
            data?.status === 'APPROVED' ? <Stack gap='1rem'>
              <DataViewField title="Approved By" data={`${data?.admin?.user?.firstName} ${data?.admin?.user?.lastName}`} />
              <DataViewField title="Designation" data={capitalizeLetter(data?.admin?.designation.split('_').join(' ') as string)} />
            </Stack> :
              data?.status === 'REJECTED' ? <Stack gap='1rem' direction='column'>
                <Stack gap='1rem'>
                  <DataViewField
                    title="Rejected By"
                    data={`${data?.admin?.user?.firstName} ${data?.admin?.user?.lastName}`}
                  />
                  <DataViewField
                    title="Designation"
                    data={capitalizeLetter(data?.admin?.designation.split('_').join(' ') as string)}
                  />
                </Stack>
                <DataViewField
                  title="Decline Reason"
                  data={data?.declineReason}
                />
              </Stack> :
                <></>
          }
        </Box>
      </Stack>
    </ResponsiveDialog>
  </>
};
