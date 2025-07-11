import { Box, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TRequisition } from "@/types";
import AcceptDialog from "./acceptDialog";
import DeclineDialog from "./declineDialog";
import capitalizeLetter from "@/utils/capitalizeLetter";

export default function ViewDialogs(
  { open, setOpen, data }:
    {
      open: boolean,
      setOpen: Dispatch<SetStateAction<boolean>>,
      data: TRequisition | null
    }
) {
  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack direction='column' gap='1rem'>
        <Stack gap='1rem'>
          <DataViewField title="Request From" data={`${data?.employee.firstName} ${data?.employee.lastName}`} />
          <DataViewField title="Designation" data={
            data?.employee?.engineers ? capitalizeLetter(data?.employee?.engineers.designation.split('_').join(' ')) :
              data?.employee?.projectManagers ? capitalizeLetter(data?.employee?.projectManagers.designation.split('_').join(' ')) : ''
          } />
        </Stack>
        <DataViewField
          title="Requisition Description"
          data={data?.description}
        />
        <Stack gap='1rem'>
          <DataViewField title="Project Name" data={data?.project.projectName} />
          <DataViewField title="Amount" data={`${data?.amount}/=`} />
        </Stack>
        <Box>
          {
            data?.status === 'PENDING' ? <Stack gap='1rem'>
              <AcceptDialog setOpen={setOpen} requisitionId={data?.id} />
              <DeclineDialog setOpen={setOpen} requisitionId={data?.id} />
            </Stack> :
              data?.status === 'APPROVED' ? <Stack gap='1rem'>
                <DataViewField title="Approved By" data={`${data?.admin?.user?.firstName} ${data?.admin?.user?.lastName}`} />
                <DataViewField title="Designation" data={capitalizeLetter(data?.admin?.designation.split('_').join(' '))} />
              </Stack> :
                data?.status === 'REJECTED' ? <Stack gap='1rem' direction='column'>
                  <Stack gap='1rem'>
                    <DataViewField
                      title="Rejected By"
                      data={`${data?.admin?.user?.firstName} ${data?.admin?.user?.lastName}`}
                    />
                    <DataViewField
                      title="Designation"
                      data={capitalizeLetter(data?.admin?.designation.split('_').join(' '))}
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
