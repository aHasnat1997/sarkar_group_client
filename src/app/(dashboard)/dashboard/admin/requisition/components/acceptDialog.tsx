import { Dispatch, SetStateAction, useState } from "react";
import { Button, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useRequisitionStatusUpdateMutation } from "@/redux/api/endpoints/requisitionsApi";

export default function AcceptDialog(
  { setOpen, requisitionId }:
    { setOpen: Dispatch<SetStateAction<boolean>>, requisitionId: string }
) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [isAccepted, { isLoading, isSuccess, isError }] = useRequisitionStatusUpdateMutation();

  const buttonClickFn = async () => {
    const statusData = { status: "APPROVED" };
    try {
      const { data } = await isAccepted({ requisitionId, data: statusData })
      if (data.success) {
        console.log(data);
        setLocalOpen(false)
        setOpen(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

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
