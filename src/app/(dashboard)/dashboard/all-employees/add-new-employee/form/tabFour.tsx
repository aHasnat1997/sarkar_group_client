import { FormItem } from "@/components/form";
import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { Controller } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TabFour({ methods }: { methods: any }) {
  return (
    <>
      <Stack width="60%" justifyContent="space-between">
        <FormItem>
          <Controller
            name="isActive"
            control={methods.control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Is Active"
                labelPlacement="end"
              />
            )}
          />
        </FormItem>
      </Stack>
    </>
  );
};