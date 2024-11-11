import { FormField, FormInput, FormItem } from "@/components/form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabTwo({ methods }: { methods: any }) {
  return (
    <>
      <FormItem>
        <FormField
          name="department"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Department"
            />
          )}
        />
      </FormItem>
      <FormItem>
        <FormField
          name="role"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Role"
              placeholder="Role (e.g., ADMIN, USER)"
            />
          )}
        />
      </FormItem>
    </>
  );
};