'use client';

import assets from "@/assets";
import { Form, FormInput, FormField, FormItem, FormMessage, FormInputPassword } from "@/components/form";
import { Box, Button, Checkbox, FormControlLabel, Stack, Typography, Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/redux/slices/authSlice";

const userZodSchema = z.object({
  email: z.string().email({ message: 'need valid email' }),
  password: z.string().min(8, 'Minimum 8 character.'),
  remember: z.boolean()
});

type FormValues = z.infer<typeof userZodSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const methods = useForm<FormValues>({
    resolver: zodResolver(userZodSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  });

  const formSubmit: SubmitHandler<FormValues> = async (value) => {
    const { remember, ...credentials } = value;
    console.log({ remember });

    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn('credentials', {
        ...credentials,
        redirect: false, // Handle redirect manually
      });

      if (result?.error) {
        setError('Invalid credentials. Please try again.');
      } else if (result?.ok) {
        // Get the session to access user data
        const session = await getSession();

        if (session?.accessToken) {
          dispatch(storeUserInfo(session.accessToken));
        }

        // Store tokens in cookies for your existing middleware
        if (session?.refreshToken) {
          document.cookie = `refreshToken=${session.refreshToken}; path=/; max-age=${30 * 24 * 60 * 60}; secure; samesite=strict`;
        }

        // Get user role and handle different role formats
        const userRole = session?.user?.role || session?.role;

        let redirectPath = '/dashboard';

        if (userRole) {
          const roleKey = userRole.toLowerCase();

          if (roleKey === 'super_admin' || roleKey === 'admin') {
            redirectPath = '/dashboard/admin';
          } else if (roleKey === 'project_manager') {
            redirectPath = '/dashboard/project_manager';
          } else if (roleKey === 'engineer') {
            redirectPath = '/dashboard/engineer';
          } else {
            // If role doesn't match expected values, go to general dashboard
            redirectPath = '/dashboard';
          }
        }

        console.log('Redirecting to:', redirectPath) // Debug log
        router.push(redirectPath);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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

        {error && (
          <Alert severity="error" sx={{ width: '60%' }}>
            {error}
          </Alert>
        )}

        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)}>
            <Stack
              flexDirection='column'
              gap='1rem'
            >
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

              <FormItem>
                <FormMessage />
                <FormField
                  name='password'
                  control={methods.control}
                  render={({ field }) => (
                    <FormInputPassword
                      {...field}
                      label='Password'
                      sx={{
                        width: '60%'
                      }}
                    />
                  )}
                />
              </FormItem>

              <Stack width='60%' justifyContent='space-between'>
                <FormItem>
                  <Controller
                    name='remember'
                    control={methods.control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement="end"
                        {...field}
                      />
                    )}
                  />
                </FormItem>
                <Link href='/forgot-password'>
                  <Typography color="primary.main">
                    Forgot Password?
                  </Typography>
                </Link>
              </Stack>
            </Stack>
            <Button
              type='submit'
              sx={{ width: '60%' }}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </Button>
          </form>
        </Form>
      </Stack>
    </Stack>
  );
}