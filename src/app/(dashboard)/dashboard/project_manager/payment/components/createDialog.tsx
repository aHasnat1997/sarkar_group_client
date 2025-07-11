import { useState } from "react";
import { Autocomplete, Box, Button, Stack } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useCratePaymentMutation } from "@/redux/api/endpoints/paymentsApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentFormValues, paymentSchema } from "./formZodSchema";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { TUploadedFile } from "@/types";
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import { useAllEmployeeProjectsQuery } from "@/redux/api/endpoints/projectsApi";

export default function CreateDialog() {
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<Partial<TUploadedFile[] | []>>([]);
  const [projectName, setProjectName] = useState<string>('');
  const [cratePayment, { isLoading, isError, isSuccess }] = useCratePaymentMutation();
  const { data: projectData } = useAllEmployeeProjectsQuery({ projectName });

  const handleImageChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setFiles((prevFiles) => [...prevFiles, uploadedFile]);
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = files.filter((file) => file?.public_id !== public_id);
    setFiles(newFiles);
  };

  const methods = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema)
  });

  const formSubmit: SubmitHandler<PaymentFormValues> = async (data) => {
    const paymentBodyData = {
      ...data,
      documents: files
    }
    try {
      const payment = await cratePayment(paymentBodyData);
      if (payment.data.success) {
        setLocalOpen(false);
      }
    } catch (error) {
      console.error(error)
    }
  };

  return <>
    <Button
      fullWidth
      onClick={() => setLocalOpen(true)}
    >
      Create Payment
    </Button>

    <ResponsiveDialog
      open={localOpen}
      onClose={() => setLocalOpen(false)}
      title='Create Payment'
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
              name="title"
              control={methods.control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  label="Payment Title"
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
                  multiline
                  rows={5}
                  label="Payment Description"
                />
              )}
            />
          </FormItem>

          <Stack gap='1.5rem'>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="projectId"
                control={methods.control}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value={projectData?.data.find((pm: any) => pm?.id === field.value) || null}
                    onChange={(_, newValue) => field.onChange(newValue?.id || '')}
                    disablePortal
                    options={projectData?.data || []}
                    getOptionLabel={(option) => option?.projectName || ''}
                    renderInput={(params) => (
                      <FormInput
                        {...params}
                        label="Project Name"
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                    )}
                  />
                )}
              />
            </FormItem>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="amount"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label='Amount'
                    type='number'
                    onChange={(event) => field.onChange(event.target.value ? Number(event.target.value) : '')}
                  />
                )}
              />
            </FormItem>
          </Stack>

          <Stack
            width='100%'
            gap='1rem'
            alignItems='center'
          >
            <Box width='50%'>
              <DockUpload onFileSelect={handleImageChange} />
            </Box>
            <Box width='50%'>
              {
                files.length > 0 ? files?.map((file, i) => (
                  <Box key={i}>
                    <ViewFile
                      file={file!}
                      handleImageRemove={handleImageRemove}
                      downloadable={false}
                    />
                  </Box>
                )) : <></>
              }
            </Box>
          </Stack>

          <Stack gap='1rem'>
            <Button
              fullWidth
              variant="outlined"
              type="button"
              onClick={() => setLocalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              type="submit"
              disabled={isLoading || isSuccess}
            >
              {
                isLoading ? 'Loading...' :
                  isSuccess ? 'Successfully Sended' :
                    isError ? 'Something Wrong, try again.' :
                      'Send'
              }
            </Button>
          </Stack>
        </Box>
      </Form>
    </ResponsiveDialog>
  </>
};
