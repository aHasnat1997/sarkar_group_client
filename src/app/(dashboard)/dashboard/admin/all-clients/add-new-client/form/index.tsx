import { Box, Stack } from "@mui/material";
import { FormField, FormInput, FormItem } from "@/components/form";
import { UseFormReturn } from "react-hook-form";
import { ClientFormValues } from "./formZodSchema";

export default function FormInputFields({ methods }: { methods: UseFormReturn<ClientFormValues> | undefined }) {
  if (!methods) return null;

  return (
    <Box
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
            name='lastName'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Last Name'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.5rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="email"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Email Address"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='mobile'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Mobile Number'
              />
            )}
          />
        </FormItem>
      </Stack>

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="street"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Street Address"
            />
          )}
        />
      </FormItem>

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
                type="number"
                label='ZIP Code'
                onChange={(event) => field.onChange(event.target.value ? Number(event.target.value) : '')}
              />
            )}
          />
        </FormItem>
      </Stack>
    </Box>
  );
};
