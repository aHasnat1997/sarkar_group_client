import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TEmployeeData } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Stack } from "@mui/material";

export default function TabTwo({ payload }: { payload: TEmployeeData }) {
  const tabData = [
    {
      title: 'Employee ID',
      data: payload.employeeInfo.employeeId
    },
    {
      title: 'User Name',
      data: payload.employeeInfo.userName
    },
    {
      title: 'Employee Type',
      data: capitalizeLetter(payload.employeeInfo.employeeType.split('_').join(' '))
    },
    {
      title: 'Department',
      data: capitalizeLetter(payload.employeeInfo.department.split('_').join(' '))
    },
    {
      title: 'Designation',
      data: capitalizeLetter(payload.employeeInfo.designation.split('_').join(' '))
    },
    {
      title: 'Working Month',
      data: '7 Month'
    },
    {
      title: 'Joining Date',
      data: dateFormate(payload.employeeInfo.joiningDate)
    },
    {
      title: 'Office Location',
      data: payload.employeeInfo.officeLocation
    }
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
