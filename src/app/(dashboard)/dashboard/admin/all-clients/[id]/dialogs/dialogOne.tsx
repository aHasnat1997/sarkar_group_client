import { Dispatch, SetStateAction, useState } from "react";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Box, Button, Stack } from "@mui/material";
import EditIcon from "@/assets/icons/edit.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import { TClient, TUploadedFile } from "@/types";
import { z } from "zod";
import ProfileImageUpload from "@/app/(dashboard)/components/ui/ProfileImageUpload";
import { useUpdateClientMutation } from "@/redux/api/endpoints/clientsApi";

const clientUpdateZodSchema = z.object({
  mobile: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.number().optional(),
  user: z
    .object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    })
    .optional(),
});
type ClientUpdateFormValues = z.infer<typeof clientUpdateZodSchema>;

export default function DialogOne({
  open,
  setOpen,
  payload,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  payload: TClient;
}) {
  const [image, setImage] = useState<Partial<TUploadedFile> | undefined>(
    payload?.user?.profileImage ? payload?.user?.profileImage : undefined
  );

  const [updateClientData, { isLoading, isError }] = useUpdateClientMutation();

  const methods = useForm<ClientUpdateFormValues>({
    resolver: zodResolver(clientUpdateZodSchema),
    defaultValues: {
      mobile: payload.mobile,
      street: payload.street,
      city: payload.city,
      state: payload.state,
      zip: payload.zip,
      user: {
        firstName: payload.user.firstName,
        lastName: payload.user.lastName,
      },
    },
  });

  const formSubmit: SubmitHandler<ClientUpdateFormValues> = async (data) => {
    const { user, ...rest } = data;
    const clientData = {
      ...rest,
      user: {
        ...user,
        profileImage: image,
      },
    };
    try {
      const project = await updateClientData({
        data: clientData,
        userId: payload?.userId,
      });
      if (project?.data?.success) {
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Stack gap=".5rem" alignItems="center">
          <EditIcon /> Edit Client
        </Stack>
      </Button>

      <ResponsiveDialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        title="Edit Client Information"
      >
        <Box
          sx={{
            border: ".5px solid",
            borderColor: "grey.400",
            borderRadius: "1rem",
            overflow: "hidden",
            padding: "1.5rem",
          }}
        >
          <Box mb="1.5rem">
            <ProfileImageUpload image={image} setImage={setImage} />
          </Box>
          <Form {...methods}>
            <Box
              component="form"
              onSubmit={methods.handleSubmit(formSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Stack gap="1.5rem">
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="user.firstName"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="First Name" />
                    )}
                  />
                </FormItem>
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="user.lastName"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="Last Name" />
                    )}
                  />
                </FormItem>
              </Stack>

              <Stack gap="1.5rem">
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="mobile"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="Mobile Number" />
                    )}
                  />
                </FormItem>

                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="street"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="Street" />
                    )}
                  />
                </FormItem>
              </Stack>

              <Stack gap="1.5rem">
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="city"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="City" />
                    )}
                  />
                </FormItem>
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="state"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput {...field} label="State" />
                    )}
                  />
                </FormItem>
                <FormItem style={{ width: "100%" }}>
                  <FormField
                    name="zip"
                    control={methods.control}
                    render={({ field }) => (
                      <FormInput
                        {...field}
                        label="ZIP Code"
                        type="number"
                        onChange={(event) =>
                          field.onChange(
                            event.target.value ? Number(event.target.value) : ""
                          )
                        }
                      />
                    )}
                  />
                </FormItem>
              </Stack>

              <Stack alignItems="center" gap="1rem" justifyContent="end">
                <Button
                  variant="outlined"
                  type="button"
                  disabled={isLoading}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit" disabled={isLoading}>
                  {isLoading
                    ? "Loading..."
                    : isError
                    ? "Error"
                    : "Update Client"}
                </Button>
              </Stack>
            </Box>
          </Form>
        </Box>
      </ResponsiveDialog>
    </>
  );
}
