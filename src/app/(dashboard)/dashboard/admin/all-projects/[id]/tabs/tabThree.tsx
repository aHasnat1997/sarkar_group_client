import { TProject, TProduct } from "@/types";
import { Box, IconButton, Stack } from "@mui/material";
import ViewIcon from "@/assets/icons/view.svg";
import TrashIcon from "@/assets/icons/trash.svg";
import SMDDataTable from "@/app/(dashboard)/components/ui/SMDDataTable";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { useState } from "react";
import ViewProductDialogs from "../../../all-products/components/viewProductDialogs";
import TProductRow from "@/types/product.type";
import { useRouter } from "next/navigation";
import { useRemoveProductFromProjectMutation } from "@/redux/api/endpoints/projectsApi";

export default function TabThree({ payload }: { payload: TProject }) {
  const { products } = payload;
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TProduct | null>(null);
  const router = useRouter();

  const [removeProduct] = useRemoveProductFromProjectMutation();

  const handleOpenModal = (row: TProduct) => {
    setSelectedRow(row);
    setOpen(true);
  };

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
              <IconButton onClick={() => handleOpenModal(row)} sx={{ border: 'none', color: 'text.primary' }}>
                <ViewIcon />
              </IconButton>
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
    {
      open && <ViewProductDialogs open={open} setOpen={setOpen} data={selectedRow as unknown as TProductRow} />
    }
  </>;
};
