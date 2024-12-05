/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField, FormInput, FormItem } from "@/components/form";
import { Box, Stack, styled } from "@mui/material";
import { CameraAltOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function TabOne(
  { methods, image, setImage }: { methods: any, image: File | null, setImage: Dispatch<SetStateAction<File | null>> }
) {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setImage(fileList[0]);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  }

  return (
    <Stack
      direction='column'
      gap='1.25rem'
    >
      <Stack gap='1rem'>
        <Box>
          <Stack
            width="6.25rem"
            height="6.25rem"
            border="1px solid"
            borderColor="#aba1a8"
            borderRadius="0.375rem"
            justifyContent="center"
            alignItems="center"
            className="cursor-pointer"
            component="label"
          >
            <CameraAltOutlined />
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Stack>
        </Box>
        <Box>
          {image && (
            <Box
              position='relative'
            >
              <div
                className="absolute right-1 top-1 bg-slate-300 p-1 rounded-full"
                onClick={handleImageRemove}
              >
                <CloseIcon />
              </div>
              <Image
                alt="Selected Image"
                src={URL.createObjectURL(image)} // Pass the single file
                width={100}
                height={100}
                className="h-[6.3rem] rounded-md"
              />
            </Box>
          )}
        </Box>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="firstName"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="First Name"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='lastName'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Last Name'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="mobileNumber"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Mobile Number"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='email'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Email'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="dob"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Date of Birth"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='maritalStatus'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Marital Status'
              />
            )}
          />
        </FormItem>
      </Stack>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="gender"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Gender"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='nationality'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='Nationality'
              />
            )}
          />
        </FormItem>
      </Stack>

      <FormItem style={{ width: "100%" }}>
        <FormField
          name="address"
          control={methods.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Address"
            />
          )}
        />
      </FormItem>

      <Stack gap='1.25rem'>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='city'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='City'
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name="state"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="State"
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='zip'
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                label='ZIP Code'
              />
            )}
          />
        </FormItem>
      </Stack>

    </Stack>
  );
};
