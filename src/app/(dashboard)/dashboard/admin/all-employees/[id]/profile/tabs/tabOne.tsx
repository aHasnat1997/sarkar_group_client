import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TEmployeeData } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Stack } from "@mui/material";

export default function TabOne({ payload }: { payload: TEmployeeData }) {
  const tabData = [
    {
      title: 'First Name',
      data: payload.firstName
    },
    {
      title: 'Last Name',
      data: payload.lastName
    },
    {
      title: 'Mobile Number',
      data: payload.employeeInfo.mobile
    },
    {
      title: 'Email Address',
      data: payload.email
    },
    {
      title: 'Date of Birth',
      data: dateFormate(payload.employeeInfo.dob)
    },
    {
      title: 'Marital Status',
      data: capitalizeLetter(payload.employeeInfo.maritalStatus)
    },
    {
      title: 'Gender',
      data: capitalizeLetter(payload.employeeInfo.gender)
    },
    {
      title: 'Nationality',
      data: payload.employeeInfo.nationality
    },
    {
      title: 'Address',
      data: payload.employeeInfo.street
    },
    {
      title: 'City',
      data: payload.employeeInfo.city
    },
    {
      title: 'State',
      data: payload.employeeInfo.street
    },
    {
      title: 'Zip Code',
      data: payload.employeeInfo.zip
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
