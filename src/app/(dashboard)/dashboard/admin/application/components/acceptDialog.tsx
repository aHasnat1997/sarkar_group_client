import { Dispatch, SetStateAction, useState } from "react";
import { Button, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useApplicationStatusUpdateMutation } from "@/redux/api/endpoints/applicationsApi";

export default function AcceptDialog(
  { setOpen, applicationId }:
    { setOpen: Dispatch<SetStateAction<boolean>>, applicationId: string }
) {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [isAccepted, { isLoading, isSuccess, isError }] = useApplicationStatusUpdateMutation();

  const buttonClickFn = async () => {
    const statusData = { status: "APPROVED" };
    try {
      const { data } = await isAccepted({ applicationId, data: statusData })
      if (data.success) {
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
