import { Button, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TProduct } from "@/types";

export default function ViewDialogs(
  { open, setOpen, data }:
    {
      open: boolean,
      setOpen: Dispatch<SetStateAction<boolean>>,
      data: TProduct | null
    }
) {
  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
      title='Product Details'
    >
      <Stack direction='column' gap='1rem'>
        <DataViewField title="Equipment Name" data={data?.equipmentName} />
        <Stack>
          <DataViewField title="Equipment ID" data={data?.equipmentId} />
          <DataViewField title="Registration Number" data={data?.registrationNumber} />
        </Stack>
        <Stack>
          <DataViewField title="Owner Name" data={data?.ownerName} />
          <DataViewField title="Owner Address" data={data?.ownerAddress} />
        </Stack>
        <Stack>
          <DataViewField title="Owner Number" data={data?.ownerNumber} />
          <DataViewField title="Chartered by" data={data?.charteredBy} />
        </Stack>
        <Stack>
          <DataViewField title="Chartered Person Number" data={data?.charteredPersonPhone} />
          <DataViewField title="Chartered Person Address" data={data?.charteredPersonAddress} />
        </Stack>
        <Stack>
          <DataViewField title="Brand Name" data={data?.brandName} />
          <DataViewField title="Model" data={data?.model} />
        </Stack>
        <Stack>
          <DataViewField title="Dimension" data={data?.dimensions} />
          <DataViewField title="Total Number Of Crew" data='9' />
        </Stack>
        <Stack>
          <DataViewField title="Manufacturing Year" data={data?.manufacturingYear} />
          <DataViewField title="Equipment Status" data={data?.status} />
        </Stack>
        <Stack alignItems='center' gap='1rem' justifyContent='start'>
          <Button
            variant="outlined"
            type="button"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
          >
            Edit
          </Button>
        </Stack>
      </Stack>
    </ResponsiveDialog>
  </>
};
