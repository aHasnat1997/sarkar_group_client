import { FormDatePicker, FormField, FormInput, FormItem, FormSelect } from "@/components/form";
import { Box, MenuItem, Stack, styled } from "@mui/material";
import { CameraAltOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { imageRemove, imageUpload } from "@/utils/imageFn";
import { TUploadedFile } from "@/types";
import assets from "@/assets";

export default function TabOne(
  { methods, image, setImage }:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { methods: any, image: Partial<TUploadedFile> | null, setImage: Dispatch<SetStateAction<Partial<TUploadedFile> | null>> }
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

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const uploadedImage = await imageUpload(fileList[0]);
      console.log({ uploadedImage });
      setImage(uploadedImage);
    }
  };

  const handleImageRemove = async () => {
    if (image && image.public_id) {
      const deletedImage = await imageRemove(image.public_id);
      console.log({ deletedImage });
      setImage(null);
    }
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
                src={image.secure_url ? image.secure_url : assets.images.brokenImage}
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
              <FormDatePicker
                {...field}
                label="Date of Birth"
                disableFuture
              />
            )}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <FormField
            name='maritalStatus'
            control={methods.control}
            render={({ field }) => (
              <FormSelect {...field} label="Marital Status">
                <MenuItem value={'MARRIED'}>Married</MenuItem>
                <MenuItem value={'SINGLE'}>Single</MenuItem>
              </FormSelect>
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
              <FormSelect {...field} label="Gender">
                <MenuItem value={'MALE'}>Male</MenuItem>
                <MenuItem value={'FEMALE'}>Female</MenuItem>
              </FormSelect>
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
                type="number"
                label='ZIP Code'
                onChange={(event) => field.onChange(event.target.value ? Number(event.target.value) : '')}
              />
            )}
          />
        </FormItem>
      </Stack>

    </Stack>
  );
};
