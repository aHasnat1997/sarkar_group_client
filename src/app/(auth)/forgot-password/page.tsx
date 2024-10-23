import assets from "@/assets";
import { Stack } from "@mui/material";
import Image from "next/image";
// import Link from "next/link";

export default function LoginPage() {
  return (
    <Stack
      width='100%'
      height='100vh'
      padding='2rem'
      gap='3rem'
    >
      <Stack
        width='100%'
        height='100%'
        bgcolor='rgba(18, 149, 209, 0.05)'
        borderRadius='1.88rem'
        justifyContent='center'
        alignItems='center'
      >
        <Image
          src={assets.logo.icon}
          alt="logo"
          width={1500}
          height={1500}
          className="size-80"
        />
      </Stack>
      <Stack
        width='100%'
        height='100%'
        justifyContent='center'
        flexDirection='column'
        gap='2rem'
      >
        Forgot Password
      </Stack>
    </Stack>
  );
};
