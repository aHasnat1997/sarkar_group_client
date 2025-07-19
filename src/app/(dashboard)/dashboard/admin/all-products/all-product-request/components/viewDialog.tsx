import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import AcceptDialog from "./acceptDialog";
import DeclineDialog from "./declineDialog";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { TRequestProducts } from "@/types/requestProducts.type";
import ViewIcon from "@/assets/icons/view.svg";
import { dateFormate } from "@/utils/dateFormate";

export default function ViewDialogs({ data }: { data: TRequestProducts | null }) {
  const [open, setOpen] = useState<boolean>(false);

  return <>
    <IconButton
      onClick={() => setOpen(true)}
      sx={{ border: 'none', color: 'text.primary' }}
    >
      <ViewIcon />
    </IconButton>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack direction='column' gap='1rem'>
        <Stack gap='1rem'>
          <DataViewField title="Request From" data={`${data?.employee?.firstName} ${data?.employee?.lastName}`} />
          <DataViewField title="Designation" data={
            data?.employee?.projectManagers ? capitalizeLetter(data?.employee.projectManagers.designation.split('_').join(' ')) :
              ''
          } />
        </Stack>

        <Stack gap='1rem'>
          <DataViewField
            title="Product Name"
            data={data?.product?.equipmentName}
          />
          <DataViewField
            title="Project Name"
            data={data?.project?.projectName}
          />
        </Stack>

        <DataViewField
          title="Description"
          data={data?.description}
        />

        <Stack gap='1rem'>
          <DataViewField title="Starting Date" data={dateFormate(data?.startDate as string)} />
          <DataViewField title="End Date" data={dateFormate(data?.endDate as string)} />
        </Stack>

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

        <Box>
          {
            data?.status === 'PENDING' ? <Stack gap='1rem'>
              <AcceptDialog setOpen={setOpen} requestProductId={data?.id} />
              <DeclineDialog setOpen={setOpen} requestProductId={data?.id} />
            </Stack> :
              <></>
          }
        </Box>
      </Stack>
    </ResponsiveDialog>
  </>
};
