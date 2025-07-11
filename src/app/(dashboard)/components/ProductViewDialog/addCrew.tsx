import { Autocomplete, Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useAddCrewToProductMutation, useAllCrewsQuery } from "@/redux/api/endpoints/crewsApi";
import { TCrew } from "@/types";

export default function AddCrew({ productId }: { productId: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [crewFullName, setCrewFullName] = useState<string>('');
  const [openAutocomplete, setOpenAutocomplete] = useState<boolean>(false);
  const [selectedCrews, setSelectedCrews] = useState<{ id: string }[]>([]);
  const crewIds = selectedCrews.map(data => data.id);

  const [
    addCrewToProduct,
    { isLoading, isError }
  ] = useAddCrewToProductMutation();
  const {
    data: crewsData,
    isLoading: crewsDataLoading,
    isFetching: crewsDataFetching
  } = useAllCrewsQuery({ fullName: crewFullName, limit: 10 });

  const handleAutocompleteChange = (event: React.ChangeEvent<unknown>, newValue: { id: string }[]) => {
    setSelectedCrews(newValue);
  };

  const handleAddCrews = async () => {
    if (!crewIds) return;
    const done = await addCrewToProduct({ crewIds, productId });
    if (done?.data?.success) {
      setOpen(false)
    };
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Crew
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title={<Typography fontSize='1.5rem' fontWeight={700}>Add Crew</Typography>}
    >
      <Box height={openAutocomplete ? '20rem' : '8rem'}>
        <Autocomplete
          open={openAutocomplete}
          onOpen={() => setOpenAutocomplete(true)}
          onClose={() => setOpenAutocomplete(false)}
          onChange={handleAutocompleteChange}
          options={crewsData?.data as TCrew[] || []}
          getOptionLabel={(option: TCrew) => `${option?.fullName} (${option.phone})` || ''}
          loading={crewsDataLoading || crewsDataFetching}
          sx={{ mb: '1rem' }}
          filterSelectedOptions
          disablePortal
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              label="Crew FullName"
              onChange={(e) => setCrewFullName(e.target.value)}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {crewsDataLoading || crewsDataFetching ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
        />

        <Button
          fullWidth
          variant="contained"
          disabled={isLoading}
          onClick={handleAddCrews}
        >
          {isLoading ? 'Loading...' : isError ? 'Error' : 'Add'}
        </Button>
      </Box>
    </ResponsiveDialog>
  </>
};
