/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import assets from "@/assets";
import TrashIcon from "@/assets/icons/trash.svg";
import EditIcon from "@/assets/icons/edit.svg";
import { TMedia, TMediaComment, TProjectGallery, TProjectGalleryComment, TUser } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useAddMediaCommentMutation, useMediaCommentDeleteMutation, useMediaDeleteMutation } from "@/redux/api/endpoints/mediasApi";
import { cloudinaryRemove } from "@/utils/cloudinaryFn";
import Link from "next/link";
import { useAddCommentToProjectGalleryMutation, useGetSingleProjectGalleryQuery } from "@/redux/api/endpoints/projectsApi";

export default function ViewDialog(
  { open, setOpen, galleryId }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, galleryId: string | undefined }
) {
  const { data: singleGalleryRes, isLoading: galleryLoading } = useGetSingleProjectGalleryQuery(galleryId as string);
  const [postGalleryComment, { isLoading, isError, isSuccess }] = useAddCommentToProjectGalleryMutation();
  // const [deleteMedia] = useMediaDeleteMutation();
  // const [deleteComment] = useMediaCommentDeleteMutation();

  // const [currentStoredUserId, setCurrentStoredUserId] = useState<string | null>(null);
  // const storedUser = useAppSelector((state: RootState) => state.auth.user) as TUser;
  const [comment, setComment] = useState<string | null>(null);
  const singleGalleryData: TProjectGallery = singleGalleryRes?.data;
  console.log({ singleGalleryData });


  // useEffect(() => {
  //   setCurrentStoredUserId(storedUser.id);
  // }, [storedUser]);
  let commentArray: TProjectGalleryComment[] = [];

  if (singleGalleryData?.comments) {
    commentArray = [...singleGalleryData?.comments].reverse()
  };

  // const handelDeleteMedia = async () => {
  //   if (singleGalleryData.image?.public_id) {
  //     await cloudinaryRemove(singleGalleryData.image?.public_id, 'image');
  //   }
  //   await deleteMedia(singleGalleryData.id);
  //   setOpen(false);
  // };

  const handelAddComment = async () => {
    if (comment) {
      const commentData = {
        id: singleGalleryData?.id,
        data: {
          comment: comment
        }
      };
      await postGalleryComment(commentData)
    }
  };

  if (galleryLoading) return;

  // const handelDeleteComment = async (id: string) => {
  //   await deleteComment(id)
  // };

  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
      title={singleGalleryData.title}
    >
      <Stack direction='column' gap='1rem'>
        <div className="w-fit">
          <Grid2 container spacing='.5rem'>
            {
              !singleGalleryData?.images ? <></> :
                singleGalleryData?.images?.map(data => <Grid2
                  size={4}
                  key={data.public_id}
                >
                  <Image
                    alt="media image"
                    src={data.secure_url || assets.images.brokenImage}
                    width={500}
                    height={500}
                    className="rounded w-full h-full"
                  />
                </Grid2>)
            }
          </Grid2>
        </div>

        <Stack alignItems='center' gap='1rem'>
          <Stack gap='.5rem' alignItems='center'>
            <Image
              alt="author image"
              src={singleGalleryData?.uploader?.profileImage?.secure_url || assets.images.userPlaceholderImage}
              width={200}
              height={200}
              className="size-10 rounded"
            />
            <Link href={`/dashboard/admin/all-employees/${singleGalleryData?.uploader?.id}`}>
              <Typography>By {singleGalleryData?.uploader?.firstName} {singleGalleryData?.uploader?.lastName}</Typography>
            </Link>
          </Stack>

          <Stack color='primary.main' alignItems='center' justifyContent='center' gap='1rem'>
            {
              // currentStoredUserId === singleGalleryData?.uploader.id ?
              //   <IconButton sx={{ color: "primary.main" }}>
              //     <EditIcon />
              //   </IconButton> : <></>
            }
            {
              // currentStoredUserId === singleGalleryData?.uploader.id ?
              //   <IconButton
              //     sx={{ color: "primary.main" }}
              //     onClick={handelDeleteMedia}
              //   >
              //     <TrashIcon />
              //   </IconButton> : <></>
            }
          </Stack>
        </Stack>

        <Stack gap='1rem' alignItems='start'>
          <Box width='55%'>
            <Stack direction='column' gap='.5rem'>
              <TextField
                label="Add Comment"
                multiline
                rows={4}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                onClick={handelAddComment}
                disabled={isLoading || isSuccess}
              >
                {
                  isLoading ? 'Loading...' :
                    isSuccess ? 'Successful' :
                      isError ? 'Something Wrong, try again.' :
                        'Send'
                }
              </Button>
            </Stack>
          </Box>
          <Box width='100%'>
            {
              commentArray ? <Stack direction='column' gap='1.5rem'>
                {
                  commentArray.map((data) => <Stack key={data.id} alignItems='start' justifyContent='space-between'>
                    <Stack gap='.5rem' alignItems='start'>
                      <Image
                        alt="author image"
                        src={data?.commenter?.profileImage?.secure_url || assets.images.userPlaceholderImage}
                        width={200}
                        height={200}
                        className="size-12 rounded"
                      />
                      <Box>
                        <Link href={`/dashboard/admin/all-employees/${data?.commenter?.id}`}>
                          <Typography color="text.secondary" fontSize='.8rem'>
                            {data?.commenter?.firstName} {data?.commenter?.lastName}
                          </Typography>
                        </Link>
                        <Typography>
                          {data?.comment}
                        </Typography>
                      </Box>
                    </Stack>
                    {
                      // currentStoredUserId === data.commenter.id ?
                      //   <IconButton
                      //     sx={{ color: "primary.main" }}
                      //     onClick={() => handelDeleteComment(data?.id)}
                      //   >
                      //     <TrashIcon />
                      //   </IconButton> : <></>
                    }
                  </Stack>)
                }
              </Stack> : <></>
            }
          </Box>
        </Stack>
      </Stack>
    </ResponsiveDialog>
  </>
};
