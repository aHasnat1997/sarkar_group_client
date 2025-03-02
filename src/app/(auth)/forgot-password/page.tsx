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
import { Form, FormInput, FormField, FormItem } from "@/components/form";

const schema = z.object({
  email: z.string().email({ message: 'use a valid email' })
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPassword() {
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: ''
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formSubmit = (value: any) => {
    router.push('/set-new-password');
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
            Forgot Password
          </Typography>
          <Typography
            fontSize='1rem'
            color='text.secondary'
            fontWeight={300}
          >
            Enter your registered email address. we&apos;ll send you a code <br /> to reset your password.
          </Typography>
        </Box>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)} className="flex flex-col gap-4">
            <FormItem>
              <FormField
                name='email'
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label='Email'
                    sx={{
                      width: '60%'
                    }}
                  />
                )}
              />
            </FormItem>
            <Button sx={{ width: '60%' }} type="submit">
              Send Email
            </Button>
          </form>
        </Form>
      </Stack>
    </Stack>
  );
};
