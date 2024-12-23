import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TClient } from "@/types";
import { Box, Stack } from "@mui/material";

export default function TabOne({ payload }: { payload: TClient }) {
  const tabData = [
    {
      title: 'Email Address',
      data: payload.user.email
    },
    {
      title: 'Mobile',
      data: payload.mobile
    },
    {
      title: 'Address',
      data: payload.street
    },
    {
      title: 'City',
      data: payload.city
    },
    {
      title: 'State',
      data: payload.state
    },
    {
      title: 'Zip Code',
      data: payload.zip
    },
  ];

  return <>
    <Box>
      <Stack flexWrap='wrap'>
        {
          tabData.map((item, i) => <Box
            key={i}
            width='50%'
            py='1rem'
          >
            <DataViewField
              title={item.title}
              data={item.data}
            />
          </Box>)
        }
      </Stack>
    </Box>
  </>;
};
