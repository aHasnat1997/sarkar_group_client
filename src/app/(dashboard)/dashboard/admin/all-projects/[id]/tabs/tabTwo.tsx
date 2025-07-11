import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import { TProject } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import ViewIcon from "@/assets/icons/view.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import capitalizeLetter from "@/utils/capitalizeLetter";
import { useRemoveEngineerFromProjectMutation } from "@/redux/api/endpoints/projectsApi";
import { useRouter } from "next/navigation";

export default function TabTwo({ payload }: { payload: TProject }) {
  const router = useRouter();
  const { projectManager, engineers } = payload;
  const employeeData = [projectManager, ...engineers];

  const [removeEngineer] = useRemoveEngineerFromProjectMutation();

  const handelRemoveEngineerFromProject = async (engineerId: string) => {
    const removeData = {
      data: { engineerId },
      projectId: payload?.id
    };
    try {
      await removeEngineer(removeData)
      router.push(`/dashboard/admin/all-projects/${payload?.id}`)
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Box>
      {
        employeeData ? <SMDDataTable
          data={employeeData}
          columns={[
            { label: 'Employee Name', field: (row) => (row.user.firstName + ' ' + row.user.lastName) },
            { label: 'Designation', field: (row) => capitalizeLetter(row.designation.split('_').join(' ')) },
            { label: 'Department', field: (row) => capitalizeLetter(row.department.split('_').join(' ')) },
            { label: 'Type', field: (row) => capitalizeLetter(row.employeeType.split('_').join(' ')) }
          ]}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Link href={`/dashboard/admin/all-employees/${row.user.id}`}>
                <IconButton sx={{ border: 'none', color: 'text.primary' }}>
                  <ViewIcon />
                </IconButton>
              </Link>
              {
                row.user.id === projectManager.user.id ? <IconButton
                  sx={{ border: 'none', color: 'text.primary' }}
                  onClick={() => { }}
                >
                  <FindReplaceIcon />
                </IconButton> :
                  <IconButton
                    sx={{ border: 'none', color: 'text.primary' }}
                    onClick={() => handelRemoveEngineerFromProject(row.id)}
                  >
                    <TrashIcon />
                  </IconButton>
              }
            </Stack>
          )}
        /> :
          <Box></Box>
      }
    </Box>
  </>;
};
