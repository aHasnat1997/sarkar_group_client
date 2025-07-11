import { Box, IconButton, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import Image from "next/image";
import assets from "@/assets";
import { TProduct } from "@/types";
import ViewIcon from "@/assets/icons/view.svg";
import ProductIcon from '@/assets/icons/product.svg';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EquipmentDetails from "./equipmentDetails";
import CrewDetails from "./crewDetails";

export default function ViewProductDialogs({ data }: { data: TProduct | null }) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const tebContent = [
    { index: 0, label: 'Equipment Information', icon: <ProductIcon /> },
    { index: 1, label: 'Crew Information', icon: <EngineeringIcon /> }
  ];

  return <>
    <IconButton
      onClick={() => setOpen(true)}
      sx={{ border: 'none', color: 'text.primary' }}
    >
      <ViewIcon />
    </IconButton>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
      title={data?.equipmentName}
    >
      <Stack direction='column'>
        <Stack alignItems='center' gap='1rem'>
          {
            data?.equipmentImage && data?.equipmentImage.length > 0 ?
              data?.equipmentImage.slice(0, 2).map(img => <Box key={img.public_id}>
                <Image
                  alt="product image"
                  src={img?.secure_url ? img?.secure_url : assets.images.brokenImage}
                  width={500}
                  height={500}
                  className="w-96 h-60 rounded-2xl"
                />
              </Box>) :
              <Box>
                <Image
                  alt="product image"
                  src={assets.images.brokenImage}
                  width={500}
                  height={500}
                  className="w-96 h-60 rounded-2xl"
                />
              </Box>
          }
        </Stack>

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

        <Box py={2}>
          {
            value === 0 ? <EquipmentDetails payload={data} setOpen={setOpen} /> :
              value === 1 ? <CrewDetails payload={data} /> :
                <></>
          }
        </Box>
      </Stack>
    </ResponsiveDialog>
  </>
};
