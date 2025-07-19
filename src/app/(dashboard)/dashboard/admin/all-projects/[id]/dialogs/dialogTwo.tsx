/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useAddEngineerToProjectMutation } from "@/redux/api/endpoints/projectsApi";
import { useAllEngineersQuery } from "@/redux/api/endpoints/employeesApi";

export default function DialogTwo(
  { open, setOpen, projectId }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, projectId: string }) {
  const [engineerEmail, setEngineerEmail] = useState<string>('');
  const [openAutocomplete, setOpenAutocomplete] = useState<boolean>(false);
  const [selectedEngineers, setSelectedEngineers] = useState<{ id: string }[]>([]);
  const engineerIds = selectedEngineers.map(data => data.id);

  const [
    addEngineerToProject,
    { isLoading, isError, isSuccess }
  ] = useAddEngineerToProjectMutation();
  const {
    data: engineersData,
    isLoading: engineersDataLoading,
    isFetching: engineersDataFetching
  } = useAllEngineersQuery({ 'user.email': engineerEmail, limit: 10 });

  const handleAutocompleteChange = (event: React.ChangeEvent<unknown>, newValue: any[]) => {
    setSelectedEngineers(newValue);
  };

  const handleAddEngineers = async () => {
    if (!engineerIds) return;
    const done = await addEngineerToProject({ data: { engineerIds }, projectId });
    if (done?.data?.success) {
      setOpen(false)
    };
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Employee
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title={<Typography fontSize='1.5rem' fontWeight={700}>Add Employee</Typography>}
    >
      <Box height={openAutocomplete ? '20rem' : '8rem'}>
        <Autocomplete
          open={openAutocomplete}
          onOpen={() => setOpenAutocomplete(true)}
          onClose={() => setOpenAutocomplete(false)}
          onChange={handleAutocompleteChange}
          options={engineersData?.data || []}
          getOptionLabel={(option: any) => option?.user?.email || ''}
          loading={engineersDataLoading || engineersDataFetching}
          sx={{ mb: '1rem' }}
          filterSelectedOptions
          disablePortal
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              label="Engineer Email"
              onChange={(e) => setEngineerEmail(e.target.value)}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {engineersDataLoading || engineersDataFetching ? <CircularProgress color="inherit" size={20} /> : null}
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
          disabled={isLoading || isSuccess}
          onClick={handleAddEngineers}
        >
          {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Add'}
        </Button>
      </Box>
    </ResponsiveDialog>
  </>
};
