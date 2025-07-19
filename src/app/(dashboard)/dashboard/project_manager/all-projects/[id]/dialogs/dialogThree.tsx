/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, Button, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useCrateRequestProductMutation } from "@/redux/api/endpoints/requestProductsApi";
import { useAllProductsQuery } from "@/redux/api/endpoints/productsApi";
import { Form, FormDatePicker, FormField, FormInput, FormItem } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const requestProductsSchema = z.object({
  productId: z.string(),
  description: z.string(),
  startDate: z.any(),
  endDate: z.any()
});
type RequestProductsFormValues = z.infer<typeof requestProductsSchema>;

export default function DialogThree(
  { open, setOpen, projectId }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, projectId: string }
) {
  const router = useRouter();
  const [productName, setProductName] = useState<string>('');

  const [
    addRequestProductToProject,
    { isLoading, isError, isSuccess }
  ] = useCrateRequestProductMutation();
  const { data: productsData } = useAllProductsQuery({ equipmentName: productName, status: 'AVAILABLE', limit: 10 });

  const methods = useForm<RequestProductsFormValues>({
    resolver: zodResolver(requestProductsSchema)
  });

  const formSubmit: SubmitHandler<RequestProductsFormValues> = async (data) => {
    const { startDate, endDate, ...rest } = data;
    const projectData = {
      ...rest,
      projectId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    };
    try {
      const project = await addRequestProductToProject(projectData);
      if (project?.data?.success) {
        router.push('/dashboard/project_manager/all-products/all-product-request');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Request Product
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      title='Edit Profile'
    >
      <Form {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(formSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <FormItem style={{ width: "100%" }}>
            <FormField
              name="productId"
              control={methods.control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  value={productsData?.data?.products.find((data: any) => data?.id === field.value) || null}
                  onChange={(_, newValue) => field.onChange(newValue?.id || '')}
                  disablePortal
                  options={productsData?.data?.products || []}
                  getOptionLabel={(option) => option?.equipmentName || ''}
                  renderInput={(params) => (
                    <FormInput
                      {...params}
                      label="Equipment Name"
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  )}
                />
              )}
            />
          </FormItem>

          <FormItem style={{ width: "100%" }}>
            <FormField
              name="description"
              control={methods.control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  label="Description"
                  multiline
                  rows={5}
                />
              )}
            />
          </FormItem>

          <Stack gap='1.5rem'>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="startDate"
                control={methods.control}
                render={({ field }) => (
                  <FormDatePicker
                    {...field}
                    label="Starting Date"
                    disablePast
                  />
                )}
              />
            </FormItem>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="endDate"
                control={methods.control}
                render={({ field }) => (
                  <FormDatePicker
                    {...field}
                    label="Ending Date"
                    disablePast
                  />
                )}
              />
            </FormItem>
          </Stack>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={isLoading || isSuccess}
          >
            {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Send Request'}
          </Button>
        </Box>
      </Form>
    </ResponsiveDialog>
  </>
};
