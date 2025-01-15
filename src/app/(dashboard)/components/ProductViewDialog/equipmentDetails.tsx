import { TProduct } from "@/types";
import { Button, Stack } from "@mui/material";
import DataViewField from "../ui/DataViewField";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { SetStateAction, Dispatch } from "react";

export default function EquipmentDetails(
  { payload, setOpen }: { payload: TProduct | null, setOpen: Dispatch<SetStateAction<boolean>> }
) {
  return (<>
    <Stack direction='column' gap='1rem'>
      <Stack>
        <DataViewField title="Equipment ID" data={payload?.equipmentId} />
        <DataViewField title="Registration Number" data={payload?.registrationNumber} />
      </Stack>
      <Stack>
        <DataViewField title="Owner Name" data={payload?.ownerName} />
        <DataViewField title="Owner Address" data={payload?.ownerAddress} />
      </Stack>
      <Stack>
        <DataViewField title="Owner Number" data={payload?.ownerNumber} />
        <DataViewField title="Chartered by" data={payload?.charteredBy} />
      </Stack>
      <Stack>
        <DataViewField title="Chartered Person Number" data={payload?.charteredPersonPhone} />
        <DataViewField title="Chartered Person Address" data={payload?.charteredPersonAddress} />
      </Stack>
      <Stack>
        <DataViewField title="Brand Name" data={payload?.brandName} />
        <DataViewField title="Model" data={payload?.model} />
      </Stack>
      <Stack>
        <DataViewField title="Dimension" data={payload?.dimensions} />
        {/* <DataViewField title="Total Number Of Crew" data={payload?.crews?.length || 0} /> */}
      </Stack>
      <Stack>
        <DataViewField title="Manufacturing Year" data={payload?.manufacturingYear} />
        <DataViewField title="Equipment Status" data={capitalizeLetter(payload?.status?.split('_').join(' ') as string)} />
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
  </>)
};
