import DataViewField from "@/app/(dashboard)/components/ui/DataViewField";
import { TEmployeeData } from "@/types";
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
      data: payload.employeeInfo.employeeType
    },
    {
      title: 'Department',
      data: payload.employeeInfo.department
    },
    {
      title: 'Designation',
      data: payload.employeeInfo.designation
    },
    {
      title: 'Working Month',
      data: '7 Month'
    },
    {
      title: 'Joining Date',
      data: payload.employeeInfo.joiningDate
    },
    {
      title: 'Project Location',
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
