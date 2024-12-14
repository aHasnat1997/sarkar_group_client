/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from "react";
import { Box, Grid2, Pagination, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ViewDialog from "./components/viewDialog";
import MediaCardOne, { LazyMediaCardOne } from "./components/mediaCardOne";
import FormDialog from "./components/formDialog";
import { useAllMediasQuery } from "@/redux/api/endpoints/mediasApi";
import { TMedia } from "@/types";
import MediaCardTwo, { LazyMediaCardTwo } from "./components/mediaCardTwo";

export default function MediaPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [singleData, setSingleData] = useState<TMedia | null>(null);
  const [page, setPage] = useState(1);
  const limit = 13;
  const { data: mediaData, isLoading, isFetching } = useAllMediasQuery({ page, limit });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return <>
    <Box sx={{
      border: '.5px solid',
      borderColor: 'grey.400',
      borderRadius: '1rem',
      overflow: 'hidden',
      padding: '1.5rem'
    }}>
      <Stack justifyContent='space-between'>
        <Stack
          border='1.5px solid'
          borderColor='grey.400'
          color='text.primary'
          borderRadius='0.5rem'
          alignItems='center'
          padding='0 .5rem'
          gap='.5rem'
        >
          <Box color='#16151C'>
            <SearchIcon />
          </Box>
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-transparent"
          />
        </Stack>
        <FormDialog />
      </Stack>

      <Stack
        mt='1.5rem'
        gap='1.5rem'
      >
        {
          isLoading || isFetching ? Array.from({ length: 3 }).map((_, i) => <Box
            key={i}
            width='100%'
          >
            <LazyMediaCardOne />
          </Box>) :
            mediaData ? mediaData?.data.slice(0, 3).map((data: TMedia) => <Box
              key={data.id}
              width='100%'
              onClick={() => {
                setOpen(true)
                setSingleData(data)
              }}
            >
              <MediaCardOne payload={data} />
            </Box>) :
              <></>
        }
      </Stack>

      <Grid2 container mt='1.5rem' spacing='1.5rem'>
        {
          isLoading || isFetching ? Array.from({ length: 10 }).map((_, i) => <Grid2
            key={i}
            size={6}
          >
            <LazyMediaCardTwo />
          </Grid2>) :
            mediaData ? mediaData?.data.slice(3, mediaData?.data?.length).map((data: TMedia) => <Grid2
              size={6}
              key={data.id}
              onClick={() => {
                setOpen(true)
                setSingleData(data)
              }}
            >
              <MediaCardTwo payload={data} />
            </Grid2>) :
              <></>
        }
      </Grid2>

      <Stack alignItems='center' justifyContent='center' mt='2rem'>
        <Pagination
          count={mediaData?.mete?.totalPage}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </Box>
    {open && <ViewDialog open={open} setOpen={setOpen} mediaId={singleData?.id} />}
  </>
};
