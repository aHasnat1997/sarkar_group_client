import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { ResponsiveDialog } from "@/components/responsiveDialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import assets from "@/assets";
import TrashIcon from "@/assets/icons/trash.svg";
import EditIcon from "@/assets/icons/edit.svg";
import { TMedia, TMediaComment, TUser } from "@/types";
import capitalizeLetter from "@/utils/capitalizeLetter";
import { dateFormate } from "@/utils/dateFormate";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useAddMediaCommentMutation, useMediaCommentDeleteMutation, useMediaDeleteMutation, useSingleMediasQuery } from "@/redux/api/endpoints/mediasApi";

export default function ViewDialog(
  { open, setOpen, mediaId }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, mediaId: string | undefined }
) {
  const { data: singleMediaRes, isLoading: mediaLoading } = useSingleMediasQuery(mediaId as string);
  const [postMediaComment, { isLoading, isError, isSuccess }] = useAddMediaCommentMutation();
  const [deleteMedia] = useMediaDeleteMutation();
  const [deleteComment] = useMediaCommentDeleteMutation();

  const [currentStoredUserId, setCurrentStoredUserId] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const storedUser = useAppSelector((state: RootState) => state.auth.user) as TUser;
  const singleMediaData: TMedia = singleMediaRes?.data;

  useEffect(() => {
    setCurrentStoredUserId(storedUser.id);
  }, [storedUser]);
  let commentArray: TMediaComment[] = [];

  if (singleMediaData?.mediaComments) {
    commentArray = [...singleMediaData?.mediaComments].reverse()
  };

  const handelDeleteMedia = async () => {
    await deleteMedia(singleMediaData.id);
    setOpen(false);
  };

  const handelAddComment = async () => {
    if (comment) {
      const commentData = {
        mediaId: singleMediaData?.id,
        data: {
          comment: comment
        }
      };
      await postMediaComment(commentData)
    }
  };

  if (mediaLoading) return;

  const handelDeleteComment = async (id: string) => {
    await deleteComment(id)
  };

  return <>
    <ResponsiveDialog
      open={open}
      onClose={() => setOpen(false)}
      isDrawer={true}
    >
      <Stack direction='column' gap='1rem'>
        <div className="w-fit">
          <Box>
            <Image
              alt="media image"
              // to-do: fix image
              // src={singleMediaData?.image || assets.images.brokenImage}
              src={assets.images.brokenImage}
              width={500}
              height={500}
              className="rounded"
            />
            <Stack
              width='100%'
              justifyContent='space-between'
              alignItems='center'
              p='.5rem'
            >
              <Box sx={{
                bgcolor: 'grey.400',
                color: 'text.primary',
                p: '.5rem',
                borderRadius: '1rem'
              }}>
                {capitalizeLetter(singleMediaData?.keyword as string)}
              </Box>
              <Box sx={{
                color: 'text.secondary',
                p: '.5rem',
                borderRadius: '1rem'
              }}>
                {dateFormate(singleMediaData?.createdAt as string)}
              </Box>
            </Stack>
          </Box>
        </div>

        <Typography
          fontSize='1.5rem'
          fontWeight={700}
        >
          {singleMediaData?.title}
        </Typography>

        <Typography>
          {singleMediaData?.description}
        </Typography>

        <Stack alignItems='center' gap='1rem'>
          <Stack gap='.5rem' alignItems='center'>
            <Image
              alt="author image"
              src={singleMediaData?.uploader?.profileImage || assets.images.userPlaceholderImage}
              width={200}
              height={200}
              className="size-10 rounded"
            />
            <Typography>By {singleMediaData?.uploader?.firstName} {singleMediaData?.uploader?.lastName}</Typography>
          </Stack>

          <Stack color='primary.main' alignItems='center' justifyContent='center' gap='1rem'>
            {
              currentStoredUserId === singleMediaData?.uploader.id ?
                <IconButton sx={{ color: "primary.main" }}>
                  <EditIcon />
                </IconButton> : <></>
            }
            {
              currentStoredUserId === singleMediaData?.uploader.id ?
                <IconButton
                  sx={{ color: "primary.main" }}
                  onClick={handelDeleteMedia}
                >
                  <TrashIcon />
                </IconButton> : <></>
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
                        src={data?.commenter?.profileImage || assets.images.userPlaceholderImage}
                        width={200}
                        height={200}
                        className="size-12 rounded"
                      />
                      <Box>
                        <Typography color="text.secondary" fontSize='.8rem'>
                          {data?.commenter?.firstName} {data?.commenter?.lastName}
                        </Typography>
                        <Typography>
                          {data?.comment}
                        </Typography>
                      </Box>
                    </Stack>
                    {
                      currentStoredUserId === data.commenter.id ?
                        <IconButton
                          sx={{ color: "primary.main" }}
                          onClick={() => handelDeleteComment(data?.id)}
                        >
                          <TrashIcon />
                        </IconButton> : <></>
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
