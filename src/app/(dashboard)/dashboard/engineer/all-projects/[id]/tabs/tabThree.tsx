import { TProduct, TProject } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import TrashIcon from "@/assets/icons/trash.svg";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import capitalizeLetter from "@/utils/capitalizeLetter";
import ViewProductDialogs from "@/app/(dashboard)/components/ProductViewDialog";
import { useRouter } from "next/navigation";
import { useRemoveProductFromProjectMutation } from "@/redux/api/endpoints/projectsApi";

export default function TabThree({ payload }: { payload: TProject }) {
  const { products } = payload;
  const router = useRouter();

  const [removeProduct] = useRemoveProductFromProjectMutation();

  const handelRemoveProductFromProject = async (productId: string) => {
    const removeData = {
      data: { productId },
      projectId: payload?.id
    };
    try {
      await removeProduct(removeData)
      router.push(`/dashboard/admin/all-projects/${payload?.id}`)
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <Box>
      {
        products ? <SMDDataTable
          data={products}
          columns={[
            { label: 'Equipment ID', field: (row) => row.equipmentId },
            { label: 'Equipment Name', field: (row) => row.equipmentName },
            { label: 'Brand Name', field: (row) => row.brandName },
            { label: 'Model', field: (row) => row.model },
            { label: 'Status', field: (row) => capitalizeLetter(row.status.split('_').join(' ')) }
          ]}
          actions={(row) => (
            <Stack gap='.2rem'>
              <Box>
                <ViewProductDialogs data={row as unknown as TProduct} />
              </Box>
              <IconButton
                sx={{ border: 'none', color: 'text.primary' }}
                onClick={() => handelRemoveProductFromProject(row.id)}
              >
                <TrashIcon />
              </IconButton>
            </Stack>
          )}
        /> :
          <Box></Box>
      }
    </Box>
  </>;
};
