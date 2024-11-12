import { FormField, FormInput, FormItem } from "@/components/form";
import { Box, Stack } from "@mui/material";
import { CameraAltOutlined } from '@mui/icons-material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabOne({ methods }: { methods: any }) {
  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Box>
        <Stack
          width='6.25rem'
          height='6.25rem'
          bgcolor='gray.400'
          border='1px solid'
          borderColor='gray.400'
          borderRadius='0.3rem'
          justifyContent='center'
          alignItems='center'
          className="cursor-pointer"
        >
          <CameraAltOutlined />
        </Stack>
      </Box>

      <Stack gap='1.25rem'>
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

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="mobileNumber"
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
            name="dob"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Date of Birth"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='maritalStatus'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Marital Status'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="gender"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Gender"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='nationality'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Nationality'
              />
            )}
          />
        </FormItem>
      </Stack>

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="address"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Address"
            />
          )}
        />
      </FormItem>

      <Stack gap='1.25rem'>
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
              />
            )}
          />
        </FormItem>
      </Stack>

    </Stack>
  );
};
