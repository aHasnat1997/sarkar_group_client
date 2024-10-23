import assets from "@/assets";
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
        // bgcolor='primary.main'
        flexDirection='column'
        gap='2rem'
      >
        <Box>
          <Image
            src={assets.logo.main}
            alt="logo"
            width={500}
            height={500}
            className="w-36"
          />
          <Box>
            <Typography
              component='h4'
              fontSize='1.875rem'
              fontWeight={600}
            >
              Welcome 👋
            </Typography>
            <Typography
              fontSize='1rem'
              color='text.secondary'
              fontWeight={300}
            >
              Please login here
            </Typography>
          </Box>
        </Box>
        <Stack
          flexDirection='column'
          gap='1rem'
        >
          <TextField
            label='Email Address'
            sx={{
              width: '60%'
            }}
          />
          <TextField
            label='Password'
            type="password"
            sx={{
              width: '60%'
            }}
          />
          <Stack width='60%' justifyContent='space-between'>
            <FormControlLabel
              value="Remember Me"
              control={<Checkbox />}
              label="Remember Me"
              labelPlacement="end"
            />
            <Link href='/forgot-password'>
              <Typography color="primary.main">
                Forgot Password?
              </Typography>
            </Link>
          </Stack>
        </Stack>
        <Link href='/dashboard'>
          <Button sx={{ width: '60%' }}>
            Login
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
