import { Box } from "@mui/material";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <Box>
      {params.id}
    </Box>
  );
};
