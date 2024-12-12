import { Dispatch, SetStateAction, useState } from "react";
import { Button, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { usePaymentStatusUpdateMutation } from "@/redux/api/endpoints/paymentsApi";

export default function AcceptDialog(
  { setOpen, paymentId }:
    { setOpen: Dispatch<SetStateAction<boolean>>, paymentId: string }
) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [isAccepted, { isLoading, isSuccess, isError }] = usePaymentStatusUpdateMutation();

  const buttonClickFn = async () => {
    const statusData = { status: "APPROVED" };
    try {
      const { data } = await isAccepted({ paymentId, data: statusData })
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
        disabled={isLoading || isSuccess}
      >
        {
          isLoading ? 'Loading...' :
            isSuccess ? 'Successfully Accepted' :
              isError ? 'Something Wrong, try again.' :
                'Send'
        }
      </Button>
    </ResponsiveDialog>
  </>
};
