import { FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { MenuItem, Stack } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabTwo({ methods }: { methods: any }) {
  const employeeType = ['FULL_TIME', 'PART_TIME', 'INTERN', 'TEMPORARY', 'CONTRACTOR', 'FREELANCER', 'CONSULTANT', 'REMOTE', 'ON_SITE', 'SHIFT_WORKER', 'SEASONAL', 'CASUAL', 'VOLUNTEER', 'APPRENTICE', 'TRAINEE'];
  const departmentType = ['ADMIN', 'CIVIL', 'MARIN', 'ENGINEERING'];
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

  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='userName'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='User Name'
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="employeeType"
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Select Employee Type">
                {
                  employeeType.map((data, i) => <MenuItem key={i} value={data}>
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

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="department"
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Select Department">
                {
                  departmentType.map((data, i) => <MenuItem key={i} value={data}>
                    {
                      capitalizeLetter(data.split('_').join(' '))
                    }
                  </MenuItem>)
                }
              </FormSelect>
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='designation'
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Enter Designation">
                {
                  designationType.map((data, i) => <MenuItem key={i} value={data}>
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

      {/* to-do: fix this */}
      {/* <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="workingDays"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Select Working Days"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='joiningDate'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Joining Date'
              />
            )}
          />
        </FormItem>
      </Stack> */}

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="officeLocation"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Select Office Location"
            />
          )}
        />
      </FormItem>

    </Stack>
  );
};
