import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import ViewIcon from "@/assets/icons/view.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { TCrew } from "@/types";
import Image from "next/image";
import assets from "@/assets";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";

export default function ViewCrew({ payload }: { payload: TCrew }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ border: 'none', color: 'text.primary' }}>
        <ViewIcon />
      </IconButton>

      <ResponsiveDialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='md'
        title='Crew Details'
      >
        <Stack gap='1.5rem'>
          <Box width='40%'>
            <Image
              alt="crew image"
              src={payload?.profileImage ? payload?.profileImage?.secure_url : assets.images.userPlaceholderImage}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </Box>

          <Stack direction='column' gap='1.5rem'>
            <DataViewField title="Full Name" data={payload?.fullName} />
            <DataViewField title="Phone Number" data={payload?.phone} />
            <DataViewField title="NID No." data={payload?.nid} />
            {
              payload?.product &&
              <DataViewField title="Product" data={payload?.product ? payload?.product?.equipmentName : 'N/A'} />
            }
          </Stack>
        </Stack>
      </ResponsiveDialog>
    </>
  );
};
