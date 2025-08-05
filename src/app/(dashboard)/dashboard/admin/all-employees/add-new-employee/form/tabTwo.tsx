import { FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { MenuItem, Stack } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabTwo({ methods }: { methods: any }) {
  const employeeType = ['FULL_TIME', 'PART_TIME', 'INTERN', 'CONTRACTUAL', 'FREELANCER', 'TRAINEE', 'CASUAL', 'INDEPENDENT', 'TEMPORARY', 'PERMANENT'];
  const departmentType = ['ADMIN', 'CIVIL', 'MARIN', 'ENGINEERING', 'SHIPBUILDING_AND_DOCKYARD', 'SHIPPING'];
  const designationType = ["CEO", "PROJECT_MANAGER", "CIVIL_ENGINEER", "MARINE_ENGINEER", "HEALTH_AND_SAFETY_OFFICER", "MECHANICAL_ENGINEER", "SITE_ENGINEER", "TECHNICAL_SUPPORT_ENGINEER", "CONTENT_MANAGER", "DIGITAL_MARKETING_SPECIALIST", "ADMINISTRATIVE_ASSISTANT", "HUMAN_RESOURCES_OFFICER", "ACCOUNTANT", "FINANCE_MANAGER", "MARKETING_EXECUTIVE", "SALES_EXECUTIVE", "IT_SUPPORT_SPECIALIST", "BUSINESS_DEVELOPMENT_MANAGER", "TRAINING_AND_DEVELOPMENT_SPECIALIST", "GRAPHIC_DESIGNER", "BUSINESS_ANALYST", "SOCIAL_MEDIA_MANAGER", "INVESTOR_RELATIONS_MANAGER", "BUSINESS_DEVELOPMENT_EXECUTIVE", "MARKET_RESEARCH_ANALYST", "OFFICE_MANAGER", "ASSISTANT_MANAGER", "ASSISTANT_ACCOUNTANT", "MARKETING_ASSISTANT", "NETWORK_ADMINISTRATOR", "SYSTEM_ADMINISTRATOR"];

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
