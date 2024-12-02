import { FormField, FormInput, FormItem } from "@/components/form";
import { Stack } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabTwo({ methods }: { methods: any }) {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="employeeId"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Employee ID"
              />
            )}
          />
        </FormItem>
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
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="employeeType"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Select Employee Type"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='email'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Email'
              />
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
              <FormInput
                {...field}
                label="Select Department"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='designation'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Enter Designation'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
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
      </Stack>

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
