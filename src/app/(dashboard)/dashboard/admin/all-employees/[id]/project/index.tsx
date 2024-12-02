import { TEmployeeData } from "@/types";
import { Box } from "@mui/material";

export default function ProjectTab({ payload }: { payload: TEmployeeData }) {
  console.log(payload);
  return <>
    <Box>
      Project Tab
    </Box>
  </>;
};
