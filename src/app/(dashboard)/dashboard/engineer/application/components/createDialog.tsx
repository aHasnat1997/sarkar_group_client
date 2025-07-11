import { useState } from "react";
import { Box, Button, MenuItem, Stack } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { useCrateApplicationMutation } from "@/redux/api/endpoints/applicationsApi";
import { ApplicationFormValues, applicationSchema } from "./formZodSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { TUploadedFile } from "@/types";
import DockUpload from "@/app/(dashboard)/components/ui/DockUpload";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import capitalizeLetter from "@/utils/capitalizeLetter";

export default function CreateDialog() {
  const applicationTypes = ['LEAVE', 'EMERGENCY_MONEY', 'EQUIPMENT_PROBLEM', 'JOB_APPLICATION', 'INTERNSHIP_APPLICATION', 'VOLUNTEER_APPLICATION', 'SCHOLARSHIP_APPLICATION', 'GRANT_APPLICATION', 'MEMBERSHIP_APPLICATION', 'LOAN_APPLICATION', 'PARTNERSHIP_APPLICATION', 'CUSTOMER_FEEDBACK', 'SERVICE_REQUEST'];
  const [localOpen, setLocalOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<Partial<TUploadedFile[] | []>>([]);
  const [crateApplication, { isLoading, isError, isSuccess }] = useCrateApplicationMutation();

  const handleImageChange = async (file: File) => {
    const uploadedFile = await cloudinaryUpload(file);
    setFiles((prevFiles) => [...prevFiles, uploadedFile]);
  };

  const handleImageRemove = async (public_id: string) => {
    await cloudinaryRemove(public_id, 'image');
    const newFiles = files.filter((file) => file?.public_id !== public_id);
    setFiles(newFiles);
  };

  const methods = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema)
  });

  const formSubmit: SubmitHandler<ApplicationFormValues> = async (data) => {
    const { startDate, endDate, ...rest } = data;
    const applicationBodyData = {
      ...rest,
      documents: files,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString()
    }
    try {
      const application = await crateApplication(applicationBodyData);
      if (application.data.success) {
        setLocalOpen(false);
        methods.reset();
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
      Create Application
    </Button>

    <ResponsiveDialog
      open={localOpen}
      onClose={() => setLocalOpen(false)}
      title='Create Application'
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
          <Stack gap='1.5rem'>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="subject"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Application Subject"
                  />
                )}
              />
            </FormItem>

            <FormItem style={{ width: "100%" }}>
              <FormField
                name="applicationType"
                control={methods.control}
                render={({ field }) => (
                  <FormSelect {...field} label="Application Type">
                    {
                      applicationTypes.map((data) => <MenuItem key={data} value={data}>
                        {
                          capitalizeLetter(data.split('_').join(' '))
                        }
                      </MenuItem>)
                    }
                  </FormSelect>
                )}
              />
            </FormItem>
          </Stack>

          <FormItem style={{ width: "100%" }}>
            <FormField
              name="description"
              control={methods.control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  multiline
                  rows={5}
                  label="Application Description"
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
                    label="From This Date"
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
                    label="To This Date"
                    disablePast
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
              onClick={() => {
                setLocalOpen(false)
                methods.reset();
                if (files.length > 0) {
                  files.forEach(data => data?.public_id ? handleImageRemove(data?.public_id) : [])
                }
              }}
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
