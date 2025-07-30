"use client";

import assets from "@/assets";
import Image from "next/image";
import {
  Form,
  FormInput,
  FormField,
  FormItem,
  FormMessage,
  FormInputPassword,
} from "@/components/form";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useUserLoginMutation } from "@/redux/api/endpoints/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/redux/slices/authSlice";

const userZodSchema = z.object({
  email: z.string().email({ message: "need valid email" }),
  password: z.string().min(8, "Minimum 8 character."),
  remember: z.boolean(),
});

type FormValues = z.infer<typeof userZodSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLogin, { isLoading, isSuccess, isError }] = useUserLoginMutation();
  const dispatch = useAppDispatch();

  const methods = useForm<FormValues>({
    resolver: zodResolver(userZodSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const formSubmit: SubmitHandler<FormValues> = async (value) => {
    setIsAuthLoading(true);
    setError(null);
    const { remember, ...rest } = value;
    console.log({ remember });

    try {
      const { data } = await userLogin(rest);
      if (data.success) {
        dispatch(storeUserInfo(data.data));
        const result = await signIn("credentials", {
          email: value.email,
          password: value.password,
          redirect: false,
        });

        if (result?.error) {
          setError("Invalid credentials. Please try again.");
        } else if (result?.ok) {
          // Get the session to determine user role and redirect accordingly
          const session = await getSession();
          if (session?.user?.role) {
            router.push(`/dashboard`);
          } else {
            router.push("/dashboard");
          }
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsAuthLoading(false);
    }
  };

  return (
    <Stack width="100%" height="100vh" padding="2rem" gap="3rem">
      <Stack
        width="100%"
        height="100%"
        bgcolor="rgba(18, 149, 209, 0.05)"
        borderRadius="1.88rem"
        justifyContent="center"
        alignItems="center"
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
        width="100%"
        height="100%"
        justifyContent="center"
        // bgcolor='primary.main'
        flexDirection="column"
        gap="2rem"
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
            <Typography component="h4" fontSize="1.875rem" fontWeight={600}>
              Welcome 👋
            </Typography>
            <Typography fontSize="1rem" color="text.secondary" fontWeight={300}>
              Please login here
            </Typography>
          </Box>
        </Box>
        {error && (
          <Alert severity="error" sx={{ width: "60%" }}>
            {error}
          </Alert>
        )}

        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)}>
            <Stack flexDirection="column" gap="1rem">
              <FormItem>
                <FormField
                  name="email"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput
                      {...field}
                      label="Email"
                      sx={{
                        width: "60%",
                      }}
                    />
                  )}
                />
              </FormItem>

              <FormItem>
                <FormMessage />
                <FormField
                  name="password"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInputPassword
                      {...field}
                      label="Password"
                      sx={{
                        width: "60%",
                      }}
                    />
                  )}
                />
              </FormItem>

              <Stack width="60%" justifyContent="space-between">
                <FormItem>
                  <Controller
                    name="remember"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControlLabel
                        // value={true}
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement="end"
                        {...field}
                      />
                    )}
                  />
                </FormItem>
                <Link href="/forgot-password">
                  <Typography color="primary.main">Forgot Password?</Typography>
                </Link>
              </Stack>
            </Stack>
            <Button
              type="submit"
              sx={{ width: "60%" }}
              disabled={isLoading || isSuccess || isAuthLoading}
            >
              {isLoading || isAuthLoading
                ? "Loading..."
                : isSuccess
                ? "Successful"
                : isError
                ? "Error"
                : "Login"}
            </Button>
          </form>
        </Form>
      </Stack>
    </Stack>
  );
}
