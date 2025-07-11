import { Box, Stack } from "@mui/material";
import { TUploadedFile } from "@/types";
import ViewFile from "@/app/(dashboard)/components/ui/ViewFile";
import DataNotFound from "@/app/(dashboard)/components/ui/DataNotFound";

export default function TabThree({ payload }: { payload: TUploadedFile[] }) {
  return <>
    <Box>
      <Stack
        mt='1.5rem'
        flexWrap='wrap'
        justifyContent='space-between'
        gap='1rem'
      >
        {
          payload.length > 0 ?
            payload.map((doc, i) => (
              <Box key={i} width='48%'>
                <ViewFile file={doc} downloadable={true} />
              </Box>
            )) :
            <DataNotFound />
        }
      </Stack>
    </Box>
  </>;
};
