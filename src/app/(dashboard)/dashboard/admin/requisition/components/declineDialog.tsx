import { Dispatch, SetStateAction, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useRequisitionStatusUpdateMutation } from "@/redux/api/endpoints/requisitionsApi";

export default function DeclineDialog(
  { setOpen, requisitionId }:
    { setOpen: Dispatch<SetStateAction<boolean>>, requisitionId: string }
) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [declineReason, setDeclineReason] = useState<string>('');
  const [isDecline, { isLoading, isSuccess, isError }] = useRequisitionStatusUpdateMutation();

  const buttonClickFn = async () => {
    const statusData = {
      status: 'REJECTED',
      declineReason
    };
    try {
      const { data } = await isDecline({ requisitionId, data: statusData })
      if (data.success) {
        setLocalOpen(false)
        setOpen(false)
      }
    } catch (error) {
      console.error(error)
    }
  };

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
        <TextField
          multiline
          rows={6}
          onChange={(e) => setDeclineReason(e.target.value)}
        />
        <Button
          fullWidth
          onClick={buttonClickFn}
          disabled={isLoading || isSuccess}
        >
          {
            isLoading ? 'Loading...' :
              isSuccess ? 'Successfully Declined' :
                isError ? 'Something Wrong, try again.' :
                  'Send'
          }
        </Button>
      </Stack>
    </ResponsiveDialog>
  </>
};
