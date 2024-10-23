import assets from "@/assets";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack sx={{
      width: '100%',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image
        alt="logo"
        src={assets.logo.main}
        width={500}
        height={500}
      />
      <Typography sx={{
        color: '#A2A1A8'
      }} >
        Under Construction
      </Typography>
    </Stack>
  );
};
