import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TProject } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Stack } from "@mui/material";

export default function TabOne({ payload }: { payload: TProject }) {
  const tabData = [
    {
      title: 'Project Name',
      data: payload?.projectName
    },
    {
      title: 'Department',
      data: capitalizeLetter(payload?.department?.split('_').join(' '))
    },
    {
      title: 'Client',
      data: `${payload?.client?.user?.firstName} ${payload?.client?.user?.lastName}`
    },
    {
      title: 'Email Address',
      data: payload?.client.user.email
    },
    {
      title: 'Start Date',
      data: dateFormate(payload?.startDate)
    },
    {
      title: 'Estimated Finish date',
      data: dateFormate(payload?.estimatedEndDate)
    },
    {
      title: 'Product Type',
      data: capitalizeLetter(payload?.productType?.split('_').join(' '))
    },
    {
      title: 'Project Type',
      data: capitalizeLetter(payload?.projectType?.split('_').join(' '))
    },
    {
      title: 'Address',
      data: payload?.street
    },
    {
      title: 'City',
      data: payload?.city
    },
    {
      title: 'State',
      data: payload?.state
    },
    {
      title: 'Zip Code',
      data: payload?.zip
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
