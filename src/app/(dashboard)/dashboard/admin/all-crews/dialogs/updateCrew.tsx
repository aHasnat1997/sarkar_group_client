import { Box, Button, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import EditIcon from "@/assets/icons/edit.svg";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCrew, TUploadedFile } from "@/types";
import ProfileImageUpload from "@/app/(dashboard)/components/ui/ProfileImageUpload";
import { useUpdateCrewMutation } from "@/redux/api/endpoints/crewsApi";

const crewSchema = z.object({
  fullName: z.string().optional(),
  phone: z.string().optional(),
  nid: z.string().optional(),
});
type CrewFormValues = z.infer<typeof crewSchema>;

export default function UpdateCrew({ payload }: { payload: TCrew }) {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<Partial<TUploadedFile> | undefined>(
    payload?.profileImage ? payload?.profileImage : undefined
  );

  const [updateCreate, { isError, isLoading }] = useUpdateCrewMutation();

  const methods = useForm<CrewFormValues>({
    resolver: zodResolver(crewSchema),
    defaultValues: {
      fullName: payload.fullName,
      nid: payload.nid,
      phone: payload.phone,
    },
  });

  const formSubmit: SubmitHandler<CrewFormValues> = async (data) => {
    const crewData = {
      profileImage: image,
      ...data,
    };
    try {
      const crew = await updateCreate({ data: crewData, crewId: payload.id });
      if (crew?.data?.success) {
        setOpen(false);
        setImage(undefined);
        methods.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ border: "none", color: "text.primary" }}
      >
        <EditIcon />
      </IconButton>

      <ResponsiveDialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        title="Add Crew"
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
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="fullName"
                control={methods.control}
                render={({ field }) => (
                  <FormInput {...field} label="Full Name" />
                )}
              />
            </FormItem>

            <Stack gap="1.5rem">
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="phone"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput {...field} label="Phone Number" />
                  )}
                />
              </FormItem>
              <FormItem style={{ width: "100%" }}>
                <FormField
                  name="nid"
                  control={methods.control}
                  render={({ field }) => (
                    <FormInput {...field} label="NID No." />
                  )}
                />
              </FormItem>
            </Stack>

            <Stack alignItems="center" gap="1rem" justifyContent="end">
              <Button
                variant="outlined"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="contained" type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : isError ? "Error" : "Update"}
              </Button>
            </Stack>
          </Box>
        </Form>
      </ResponsiveDialog>
    </>
  );
}
