import { FormField, FormInput, FormItem } from "@/components/form";
import { Stack } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabFour({ methods }: { methods: any }) {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="projectName"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Project Name"
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
                label='Email Address'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="role"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Select Role"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='roleDesignation'
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

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="optionalMessage"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Add a message (optional)"
            />
          )}
        />
      </FormItem>

    </Stack>
  );
};
