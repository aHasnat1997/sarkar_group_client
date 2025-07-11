import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import { TEmployeeData } from "@/types";
import { Box, Stack } from "@mui/material";

export default function TabThree({ payload }: { payload: TEmployeeData }) {
  return <>
    <Box>
      <Stack
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {
          payload.employeeInfo?.documents?.length > 0 ?
            payload.employeeInfo.documents.map((doc, i) => (
              <Box key={i} width='50%'>
                <ViewFile file={doc} downloadable={true} />
              </Box>
            )) :
            <DataNotFound />
        }
      </Stack>
    </Box>
  </>;
};
