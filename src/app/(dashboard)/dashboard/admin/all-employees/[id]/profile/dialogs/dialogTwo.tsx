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
  userName: z.string().optional(),
  joiningDate: z.any().optional(),
  employeeType: z.string().optional(),
  department: z.string().optional(),
  designation: z.string().optional(),
  officeLocation: z.string().optional(),
});
type EmployeeUpdateFormValues = z.infer<typeof employeeUpdateZodSchema>;

export default function DialogTwo(
  { open, setOpen, payload }:
    { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, payload: TEmployeeData }
) {
  const employeeType = [
    'FULL_TIME',
    'PART_TIME',
    'INTERN',
    'TEMPORARY',
    'CONTRACTOR',
    'FREELANCER',
    'CONSULTANT',
    'REMOTE',
    'ON_SITE',
    'SHIFT_WORKER',
    'SEASONAL',
    'CASUAL',
    'VOLUNTEER',
    'APPRENTICE',
    'TRAINEE'
  ];
  const departmentType = [
    'ADMIN',
    'CIVIL',
    'MARIN',
    'ENGINEERING'
  ];
  const designationType = [
    'CEO',
    'COO',
    'CFO',
    'CTO',
    'CMO',
    'CHRO',
    'CIO',
    'CPO',
    'CLO',
    'VICE_PRESIDENT_OPERATIONS',
    'VICE_PRESIDENT_SALES',
    'VICE_PRESIDENT_ENGINEERING',
    'VICE_PRESIDENT_MARKETING',
    'VICE_PRESIDENT_PRODUCT_MANAGEMENT',
    'VICE_PRESIDENT_HUMAN_RESOURCES',
    'VICE_PRESIDENT_FINANCE',
    'VICE_PRESIDENT_SUPPLY_CHAIN',
    'DIRECTOR_OPERATIONS',
    'DIRECTOR_ENGINEERING',
    'DIRECTOR_SALES',
    'DIRECTOR_MARKETING',
    'DIRECTOR_PRODUCT_DEVELOPMENT',
    'DIRECTOR_FINANCE',
    'DIRECTOR_HUMAN_RESOURCES',
    'DIRECTOR_CUSTOMER_SERVICE',
    'ENGINEERING_MANAGER',
    'PRODUCT_MANAGER',
    'SALES_MANAGER',
    'MARKETING_MANAGER',
    'OPERATIONS_MANAGER',
    'FINANCE_MANAGER',
    'HUMAN_RESOURCES_MANAGER',
    'IT_MANAGER',
    'QUALITY_ASSURANCE_MANAGER',
    'SUPPLY_CHAIN_MANAGER',
    'LEAD_SOFTWARE_ENGINEER',
    'SENIOR_DATA_SCIENTIST',
    'PRINCIPAL_ARCHITECT',
    'UX_UI_DESIGN_LEAD',
    'DEVOPS_ENGINEER',
    'SENIOR_PROJECT_MANAGER',
    'LEGAL_COUNSEL',
    'COMPLIANCE_OFFICER',
    'DATA_PROTECTION_OFFICER',
    'TALENT_ACQUISITION_MANAGER',
    'CORPORATE_COMMUNICATIONS_MANAGER',
    'SOFTWARE_ENGINEER',
    'DATA_ANALYST',
    'SALES_EXECUTIVE',
    'MARKETING_SPECIALIST',
    'HR_SPECIALIST',
    'ACCOUNTANT',
    'CUSTOMER_SUPPORT_REPRESENTATIVE',
    'SUPPLY_CHAIN_COORDINATOR',
    'ADMINISTRATIVE_ASSISTANT',
    'TECHNICAL_WRITER',
    'JUNIOR_SOFTWARE_DEVELOPER',
    'MARKETING_ASSOCIATE',
    'SALES_ASSOCIATE',
    'HR_ASSISTANT',
    'FINANCIAL_ANALYST',
    'CUSTOMER_SUPPORT_AGENT',
    'OPERATIONS_ANALYST',
    'IT_SUPPORT_TECHNICIAN',
    'PROJECT_COORDINATOR'
  ];

  // const [updateProjectData, { isLoading, isError, isSuccess }] = useUpdateProjectMutation();

  const methods = useForm<EmployeeUpdateFormValues>({
    resolver: zodResolver(employeeUpdateZodSchema),
    defaultValues: {
      userName: payload?.employeeInfo?.userName,
      employeeType: payload?.employeeInfo?.employeeType,
      department: payload?.employeeInfo?.department,
      designation: payload?.employeeInfo.designation,
      joiningDate: dayjs(payload?.employeeInfo.dob),
      officeLocation: payload?.employeeInfo?.officeLocation,
    }
  });

  const formSubmit: SubmitHandler<EmployeeUpdateFormValues> = async (data) => {
    const { joiningDate, ...rest } = data;
    const employeeData = {
      ...rest,
      joiningDate: new Date(joiningDate).toISOString()
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
        <EditIcon /> Edit Professional Info
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth='md'
      title='Edit Employee Professional Information'
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
                  name="userName"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="User Name"
                    />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="employeeType"
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Marital Status">
                      {
                        employeeType.map((data, i) => <MenuItem key={i} value={data}>
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
                  name="department"
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Department">
                      {
                        departmentType.map((data, i) => <MenuItem key={i} value={data}>
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
                  name="designation"
                  control={methods.control}
                  render={({ field }) => (
                    <FormSelect {...field} label="Designation">
                      {
                        designationType.map((data, i) => <MenuItem key={i} value={data}>
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
                  name='joiningDate'
                  control={methods.control}
                  render={({ field }) => (
                    <FormDatePicker
                      {...field}
                      label="Joining Date"
                    />
                  )}
                />
              </FormItem>

              <FormItem style={{ width: "100%" }}>
                <FormField
                  name='officeLocation'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Office Location"
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
