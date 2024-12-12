import { Dispatch, SetStateAction, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { usePaymentStatusUpdateMutation } from "@/redux/api/endpoints/paymentsApi";

export default function DeclineDialog(
  { setOpen, paymentId }:
    { setOpen: Dispatch<SetStateAction<boolean>>, paymentId: string }
) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [declineReason, setDeclineReason] = useState<string>('');
  const [isDecline, { isLoading, isSuccess, isError }] = usePaymentStatusUpdateMutation();

  const buttonClickFn = async () => {
    const statusData = {
      status: 'REJECTED',
      declineReason
    };
    try {
      const { data } = await isDecline({ paymentId, data: statusData })
      if (data.success) {
        console.log(data);
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
