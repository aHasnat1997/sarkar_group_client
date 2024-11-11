import { FormField, FormInput, FormItem } from "@/components/form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabOne({ methods }: { methods: any }) {
  return (
    <>
      <FormItem>
        <FormField
          name="name"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Full Name"
            />
          )}
        />
      </FormItem>
      <FormItem>
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
    </>
  );
};
