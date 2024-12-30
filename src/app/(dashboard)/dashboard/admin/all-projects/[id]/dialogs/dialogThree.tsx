/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useAddProductToProjectMutation } from "@/redux/api/endpoints/projectsApi";
import { useAllProductsQuery } from "@/redux/api/endpoints/productsApi";

export default function DialogThree(
  { open, setOpen, projectId }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, projectId: string }
) {
  const [productName, setProductName] = useState<string>('');
  const [openAutocomplete, setOpenAutocomplete] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<{ id: string }[]>([]);
  const productIds = selectedProducts.map(data => data.id);

  const [
    addProductToProject,
    { isLoading, isError, isSuccess }
  ] = useAddProductToProjectMutation();
  const {
    data: productsData,
    isLoading: productsDataLoading,
    isFetching: productsDataFetching
  } = useAllProductsQuery({ equipmentName: productName, status: 'AVAILABLE', limit: 5 });

  const handleAutocompleteChange = (event: React.ChangeEvent<unknown>, newValue: any[]) => {
    setSelectedProducts(newValue);
  };

  const handleAddProducts = async () => {
    if (!productIds) return;
    const done = await addProductToProject({ data: { productIds }, projectId });
    if (done?.data?.success) {
      setOpen(false)
    };
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Add Product
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Edit Profile'
    >
      <Autocomplete
        open={openAutocomplete}
        onOpen={() => setOpenAutocomplete(true)}
        onClose={() => setOpenAutocomplete(false)}
        onChange={handleAutocompleteChange}
        options={productsData?.data?.products || []}
        getOptionLabel={(option: any) => option?.equipmentName || ''}
        loading={productsDataLoading || productsDataFetching}
        sx={{ mb: '1rem' }}
        filterSelectedOptions
        disablePortal
        multiple
        renderInput={(params) => (
          <TextField
            {...params}
            label="Equipment Name"
            onChange={(e) => setProductName(e.target.value)}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {productsDataLoading || productsDataFetching ? <CircularProgress color="inherit" size={20} /> : null}
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
        onClick={handleAddProducts}
      >
        {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Add'}
      </Button>
    </ResponsiveDialog>
  </>
};
