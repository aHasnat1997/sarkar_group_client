import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import AddIcon from '@/assets/icons/add-circle.svg';
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Form, FormField, FormInput, FormItem } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUploadedFile } from "@/types";
import ProfileImageUpload from "@/app/(dashboard)/components/ui/ProfileImageUpload";
import { useAddCrewMutation } from "@/redux/api/endpoints/crewsApi";

const crewSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
  nid: z.string(),
});
type CrewFormValues = z.infer<typeof crewSchema>;

export default function AddCrew() {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<Partial<TUploadedFile> | null>(null);

  const [crewCreate, { isError, isLoading, isSuccess }] = useAddCrewMutation();

  const methods = useForm<CrewFormValues>({
    resolver: zodResolver(crewSchema)
  });

  const formSubmit: SubmitHandler<CrewFormValues> = async (data) => {
    const crewData = {
      profileImage: image,
      ...data
    }
    try {
      const crew = await crewCreate(crewData);
      if (crew?.data?.success) {
        setOpen(false);
        setImage(null);
        methods.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (<>
    <Button onClick={() => setOpen(true)}>
      <Stack gap='.5rem' alignItems='center'>
        <AddIcon /> Add Crew
      </Stack>
    </Button>

    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth='md'
      title='Add Crew'
    >
      <Box mb='1.5rem'>
        <ProfileImageUpload image={image} setImage={setImage} />
      </Box>

      <Form {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(formSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <FormItem style={{ width: "100%" }}>
            <FormField
              name="fullName"
              control={methods.control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  label="Full Name"
                />
              )}
            />
          </FormItem>

          <Stack gap='1.5rem'>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="phone"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="Phone Number"
                  />
                )}
              />
            </FormItem>
            <FormItem style={{ width: "100%" }}>
              <FormField
                name="nid"
                control={methods.control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label="NID No."
                  />
                )}
              />
            </FormItem>
          </Stack>

          <Stack alignItems='center' gap='1rem' justifyContent='end'>
            <Button
              variant="outlined"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={isLoading || isSuccess}
            >
              {isLoading ? 'Loading...' : isSuccess ? 'Success' : isError ? 'Error' : 'Add Crew'}
            </Button>
          </Stack>

        </Box>
      </Form>
    </ResponsiveDialog>

  </>);
};
