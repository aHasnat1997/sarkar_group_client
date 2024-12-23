import { Box, Skeleton, Stack, styled } from "@mui/material";
import { CameraAltOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import assets from "@/assets";
import { useState } from "react";
import { cloudinaryRemove, cloudinaryUpload } from "@/utils/cloudinaryFn";
import { TUploadedFile } from "@/types";

export default function ProfileImageUpload(
  { image, setImage }:
    { image: Partial<TUploadedFile> | null, setImage: React.Dispatch<React.SetStateAction<Partial<TUploadedFile> | null>> }
) {
  const [isUploadLoading, setIsUploadLoading] = useState<boolean>(false);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setIsUploadLoading(true);
      const uploadedImage = await cloudinaryUpload(fileList[0]);
      setImage(uploadedImage);
      setIsUploadLoading(false);
    }
  };

  const handleImageRemove = async () => {
    setIsUploadLoading(true);
    if (image && image.public_id) {
      await cloudinaryRemove(image.public_id, 'image');
      setImage(null);
    }
    setIsUploadLoading(false);
  }


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

  return (
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
        {isUploadLoading ? <Stack
          width='100%'
          height='6.3rem'
          alignItems='center'
          justifyContent='center'
        >
          <Skeleton
            width='6.3rem'
            height='6.3rem'
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: 'grey.400' }}
          />
        </Stack> :
          image ? (
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
            </Box>) :
            <></>
        }
      </Box>
    </Stack>
  );
};
