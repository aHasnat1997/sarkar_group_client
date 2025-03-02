import { Dispatch, SetStateAction } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Box, Button, MenuItem, Stack } from "@mui/material";
import EditIcon from "@/assets/icons/edit.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { TEmployeeData } from "@/types";
import dayjs from "dayjs";
import { z } from "zod";

const employeeUpdateZodSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  mobile: z.string().optional(),
  dob: z.any().optional(),
  maritalStatus: z.string().optional(),
  gender: z.string().optional(),
  nationality: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.number().optional()
});
type EmployeeUpdateFormValues = z.infer<typeof employeeUpdateZodSchema>;

export default function DialogOne(
  { open, setOpen, payload }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: TEmployeeData }
) {
  const maritalStatusType = ['MARRIED', 'SINGLE'];
  const genderType = ['MALE', 'FEMALE', 'OTHER'];

  // const [updateProjectData, { isLoading, isError, isSuccess }] = useUpdateProjectMutation();

  const methods = useForm<EmployeeUpdateFormValues>({
    resolver: zodResolver(employeeUpdateZodSchema),
    defaultValues: {
      firstName: payload?.firstName,
      lastName: payload?.lastName,
      mobile: payload?.employeeInfo?.mobile,
      gender: payload?.employeeInfo.gender,
      dob: dayjs(payload?.employeeInfo.dob),
      maritalStatus: payload?.employeeInfo?.maritalStatus,
      nationality: payload?.employeeInfo?.nationality,
      street: payload?.employeeInfo.street,
      city: payload?.employeeInfo.city,
      state: payload?.employeeInfo.state,
      zip: payload?.employeeInfo.zip
    }
  });

  const formSubmit: SubmitHandler<EmployeeUpdateFormValues> = async (data) => {
    const { dob, ...rest } = data;
    const employeeData = {
      ...rest,
      dob: new Date(dob).toISOString()
    };
    console.log({ employeeData });

    try {
      // const project = await updateProjectData({ data: projectData, projectId: payload?.id });
      // if (project?.data?.success) {
      // }
      setOpen(false)
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <EditIcon /> Edit Personal Info
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth='md'
      title='Edit Employee Personal Information'
    >
      <Box
        sx={{
          border: '.5px solid',
          borderColor: 'grey.400',
          borderRadius: '1rem',
          overflow: 'hidden',
          padding: '1.5rem'
        }}
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
                  name="firstName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="First Name"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="lastName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Last Name"
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="mobile"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Mobile Number"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='dob'
                  control={methods.control}
                  render={({ field }) => (
                    <FormDatePicker
                      {...field}
                      label="Date of Birth"
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="maritalStatus"
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Marital Status">
                      {
                        maritalStatusType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data)
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='gender'
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Gender">
                      {
                        genderType.map((data, i) => <MenuItem key={i} value={data}>
                          {
                            capitalizeLetter(data)
                          }
                        </MenuItem>)
                      }
                    </FormSelect>
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="nationality"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Nationality"
                    />
                  )}
                />
              </FormItem>

              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="street"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Street"
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack gap='1.5rem'>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='city'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='City'
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="state"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="State"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='zip'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label='ZIP Code'
                      type='number'
                      onChange={(event) => field.onChange(event.target.value ? Number(event.target.value) : '')}
                    />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems='center' gap='1rem' justifyContent='end'>
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
                Update Employee
              </Button>
              {/* <Button
                variant="contained"
                type="submit"
                disabled={isLoading || isSuccess}
              >
                {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Update Employee'}
              </Button> */}
            </Stack>

          </Box>
        </Form>
      </Box>
    </ResponsiveDialog>
  </>;
};
