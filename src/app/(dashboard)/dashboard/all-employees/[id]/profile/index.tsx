import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import UserIcon from '@/assets/icons/user.svg';
import BriefcaseIcon from "@/assets/icons/briefcase-04.svg";
import DocumentIcon from '@/assets/icons/document-text.svg';
import LockIcon from "@/assets/icons/lock.svg";
import { TEmployeeData } from "@/types";
import TabOne from "./tabs/tabOne";
import TabTwo from "./tabs/tabTwo";
import TabThree from "./tabs/tabThree";

export default function ProfileTab({ payload }: { payload: TEmployeeData }) {
  console.log(payload);
  const [value, setValue] = useState(0);
  const tebContent = [
    { index: 0, label: 'Personal Information', icon: <UserIcon /> },
    { index: 1, label: 'Professional Information', icon: <BriefcaseIcon /> },
    { index: 2, label: 'Documents', icon: <DocumentIcon /> },
    { index: 3, label: 'Assign Role', icon: <LockIcon /> }
  ];

  return <>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        {tebContent.map(data => (
          <Tab
            key={data.index}
            icon={data.icon}
            iconPosition="start"
            label={data.label}
          />
        ))}
      </Tabs>
    </Box>

    <Box p={3}>
      {
        value === 0 ? <TabOne payload={payload} /> :
          value === 1 ? <TabTwo payload={payload} /> :
            value === 2 ? <TabThree payload={payload} /> :
              value === 3 ? 'TabFour' :
                <></>
      }
    </Box>
  </>;
};
