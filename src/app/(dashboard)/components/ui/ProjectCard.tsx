import RightDirectionIcon from "@/assets/icons/direction_right.svg";
// import Image from "next/image";
import { Box, Button, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
// import assets from "@/assets";
import capitalizeLetter from "@/utils/capitalizeLetter";

type TProjectCard = {
  cardTitle: string;
  cardSubTitle: string;
  detailsInfoPath: string;
  clientFullName: string;
  clientImage: string | null;
  projectManagerFullName: string;
  projectManagerImage: string | null;
  startDate: string;
  endDate: string;
  status: string;
  isLoading?: boolean
};
export default function ProjectCard({
  cardTitle,
  cardSubTitle,
  detailsInfoPath,
  clientFullName,
  clientImage = null,
  projectManagerFullName,
  projectManagerImage = null,
  startDate,
  endDate,
  status,
  isLoading = false
}: TProjectCard) {
  const cardBody = [
    {
      for: 'Client',
      fullName: clientFullName,
      image: clientImage
    },
    {
      for: 'Project Manager',
      fullName: projectManagerFullName,
      image: projectManagerImage
    }
  ];

  if (isLoading) {
    return (
      <Box
        sx={{
          border: '.5px solid',
          borderColor: 'grey.400',
          borderRadius: '1rem',
          overflow: 'hidden',
          padding: '1.5rem',
          mt: '1.5rem'
        }}
      >
        <Stack
          alignItems='baseline'
          justifyContent='space-between'
          borderBottom='2px solid'
          borderColor='grey.400'
          paddingBottom='1.5rem'
        >
          <Box>
            <Skeleton
              width='15rem'
              height='2rem'
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.400' }}
            />
            <Skeleton
              width='8rem'
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.400', mt: '.5rem' }}
            />
          </Box>
          <Box>
            <Button variant='text'>View Project</Button>
          </Box>
        </Stack>
        <Box my='1.5rem'>
          {
            cardBody.map((_, i) => <Box key={i}>
              <Stack
                alignItems='center'
                justifyContent='space-between'
                py='.5rem'
              >
                <Stack alignItems='center' gap='1rem'>
                  <div className="size-10 rounded-full overflow-hidden">
                    <Box width='100%' height='100%'>
                      <Skeleton
                        width='100%'
                        height='100%'
                        variant="rectangular"
                        animation="wave"
                        sx={{ bgcolor: 'grey.400' }}
                      />
                    </Box>
                  </div>
                  <Box>
                    <Skeleton
                      width='15rem'
                      height='2rem'
                      variant="rounded"
                      animation="wave"
                      sx={{ bgcolor: 'grey.400' }}
                    />
                    <Skeleton
                      width='8rem'
                      height='1rem'
                      variant="rounded"
                      animation="wave"
                      sx={{ bgcolor: 'grey.400', mt: '.5rem' }}
                    />
                  </Box>
                </Stack>
                <IconButton sx={{ border: 'none' }}>
                  <RightDirectionIcon />
                </IconButton>
              </Stack>
            </Box>)
          }
        </Box>
        <Stack alignItems='center' justifyContent='space-between'>
          <Box>
            <Typography color='text.secondary'>Start Date</Typography>
            <Skeleton
              width='8rem'
              height='1rem'
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.400', mt: '.5rem' }}
            />
          </Box>
          <Box>
            <Typography color='text.secondary'>Finish Date</Typography>
            <Skeleton
              width='8rem'
              height='1rem'
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.400', mt: '.5rem' }}
            />
          </Box>
          <Box>
            <Typography color='text.secondary'>Status</Typography>
            <Skeleton
              width='8rem'
              height='1rem'
              variant="rounded"
              animation="wave"
              sx={{ bgcolor: 'grey.400', mt: '.5rem' }}
            />
          </Box>
        </Stack>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        border: '.5px solid',
        borderColor: 'grey.400',
        borderRadius: '1rem',
        overflow: 'hidden',
        padding: '1.5rem',
        mt: '1.5rem'
      }}
    >
      <Stack
        alignItems='baseline'
        justifyContent='space-between'
        borderBottom='2px solid'
        borderColor='grey.400'
        paddingBottom='1.5rem'
      >
        <Box>
          <Typography fontSize='1.25rem' fontWeight={600}>
            {cardTitle}
          </Typography>
          <Typography color='text.secondary'>
            {cardSubTitle}
          </Typography>
        </Box>
        <Link href={detailsInfoPath}>
          <Button variant='text'>View Project</Button>
        </Link>
      </Stack>
      <Box my='1.5rem'>
        {
          cardBody.map((data, i) => <Box key={i}>
            <Stack
              alignItems='center'
              justifyContent='space-between'
              py='.5rem'
            >
              <Stack alignItems='center' gap='1rem'>
                <Box>
                  {/* to-do: fix image */}
                  {/* {
                    !data.image ? <Image
                      alt='client image'
                      src={assets.images.userPlaceholderImage}
                      width={200}
                      height={200}
                      className='rounded-full size-8'
                    /> :
                      data?.image ? <Image
                        alt='client image'
                        src={data?.image}
                        width={200}
                        height={200}
                        className='rounded-full size-8'
                      /> :
                        <></>
                  } */}
                </Box>
                <Box>
                  <Typography>{data.fullName}</Typography>
                  <Typography fontSize='.8rem' color='text.secondary'>{data.for}</Typography>
                </Box>
              </Stack>
              <IconButton sx={{ border: 'none' }}>
                <RightDirectionIcon />
              </IconButton>
            </Stack>
          </Box>)
        }
      </Box>
      <Stack alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography color='text.secondary'>Start Date</Typography>
          <Typography>{startDate}</Typography>
        </Box>
        <Box>
          <Typography color='text.secondary'>Finish Date</Typography>
          <Typography>{endDate}</Typography>
        </Box>
        <Box>
          <Typography color='text.secondary'>Status</Typography>
          <Typography>{capitalizeLetter(status.split('_').join(' '))}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
