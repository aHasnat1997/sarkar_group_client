'use client';

import assets from "@/assets";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage, FormInputPassword } from "@/components/form";

const zodSchema = z.object({
  newPassword: z.string().min(8, 'Minimum 8 character.'),
  confirmPassword: z.string().min(8, 'Minimum 8 character.'),
});

type FormValues = z.infer<typeof zodSchema>;

export default function SetNewPassword() {
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formSubmit = (value: any) => {
    router.push('/login');
    console.log(value);
  }

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
        <Link href='/login'>
          <ArrowBackIosNewIcon />
          Back
        </Link>
        <Box>
          <Typography
            component='h4'
            fontSize='1.875rem'
            fontWeight={600}
          >
            Set New Password
          </Typography>
          <Typography
            fontSize='1rem'
            color='text.secondary'
            fontWeight={300}
          >
            To set new password. Enter new password <br /> and confirm it.
          </Typography>
        </Box>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)}>
            <Stack
              flexDirection='column'
              gap='1rem'
            >
              <FormItem>
                <FormMessage />
                <FormField
                  name='newPassword'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInputPassword
                      {...field}
                      label='New Password'
                      sx={{
                        width: '60%'
                      }}
                    />
                  )}
                />
              </FormItem>
              <FormItem>
                <FormMessage />
                <FormField
                  name='confirmPassword'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInputPassword
                      {...field}
                      label='Confirm Password'
                      sx={{
                        width: '60%'
                      }}
                    />
                  )}
                />
              </FormItem>
              <Button sx={{ width: '60%' }} type="submit">
                Go to Login
              </Button>
            </Stack>
          </form>
        </Form>
      </Stack>
    </Stack>
  );
};
