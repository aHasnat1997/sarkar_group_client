import {
  FormDatePicker,
  FormField,
  FormInput,
  FormItem,
  FormSelect,
} from "@/components/form";
import { Box, MenuItem, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { TUploadedFile } from "@/types";
import ProfileImageUpload from "@/app/(dashboard)/components/ui/ProfileImageUpload";
import { UseFormReturn } from "react-hook-form";
import { EmployeeFormValues } from "./formZodSchema";

export default function TabOne({
  methods,
  image,
  setImage,
}: {
  methods: UseFormReturn<EmployeeFormValues> | undefined;
  image: Partial<TUploadedFile> | undefined;
  setImage: Dispatch<SetStateAction<Partial<TUploadedFile> | undefined>>;
}) {
  if (!methods) return null;

  return (
    <Stack direction="column" gap="1.25rem">
      <Box mb="1.5rem">
        <ProfileImageUpload image={image} setImage={setImage} />
      </Box>

      <Stack gap="1.25rem">
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="firstName"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="First Name" />}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="lastName"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="Last Name" />}
          />
        </FormItem>
      </Stack>

      <Stack gap="1.25rem">
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="mobile"
            control={methods.control}
            render={({ field }) => (
              <FormInput {...field} label="Mobile Number" />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="email"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="Email" />}
          />
        </FormItem>
      </Stack>

      <Stack gap="1.25rem">
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="dob"
            control={methods.control}
            render={({ field }) => (
              <FormDatePicker {...field} label="Date of Birth" disableFuture />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="maritalStatus"
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Marital Status">
                <MenuItem value={"MARRIED"}>Married</MenuItem>
                <MenuItem value={"SINGLE"}>Single</MenuItem>
              </FormSelect>
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap="1.25rem">
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="gender"
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Gender">
                <MenuItem value={"MALE"}>Male</MenuItem>
                <MenuItem value={"FEMALE"}>Female</MenuItem>
              </FormSelect>
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="nationality"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="Nationality" />}
          />
        </FormItem>
      </Stack>

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="street"
          control={methods.control}
          render={({ field }) => <FormInput {...field} label="Street" />}
        />
      </FormItem>

      <Stack gap="1.25rem">
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="city"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="City" />}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="state"
            control={methods.control}
            render={({ field }) => <FormInput {...field} label="State" />}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="zip"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                type="number"
                label="ZIP Code"
                onChange={(event) =>
                  field.onChange(
                    event.target.value ? Number(event.target.value) : ""
                  )
                }
              />
            )}
          />
        </FormItem>
      </Stack>
    </Stack>
  );
}
