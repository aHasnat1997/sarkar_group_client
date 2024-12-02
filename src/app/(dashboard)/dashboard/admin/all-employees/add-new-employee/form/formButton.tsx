
import { Dispatch, SetStateAction } from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

type FormButtonType = {
  value: number,
  setValue: Dispatch<SetStateAction<number>>,
  tebCount: number
}
export default function FormButton({ value, setValue, tebCount }: FormButtonType) {
  const handleNext = () => {
    if (value < tebCount) {
      setValue(value + 1);
    }
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        pb={2}
      >
        {value > 0 ? (
          <Button
            variant="outlined"
            type="button"
            onClick={() => setValue(value - 1)}
          >
            Previous
          </Button>
        ) : (
          <Link href='/dashboard/admin/all-employees'>
            <Button
              variant="outlined"
              type="button"
            >
              Cancel
            </Button>
          </Link>
        )}
        <Button
          variant="contained"
          type="button"
          onClick={handleNext}
          sx={{ display: `${value < tebCount ? 'block' : 'none'}` }}
        >
          Next
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: `${value < tebCount ? 'none' : 'block'}` }}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};
