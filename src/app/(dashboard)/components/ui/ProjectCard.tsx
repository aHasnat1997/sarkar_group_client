import RightDirectionIcon from "@/assets/icons/direction_right.svg";
import UserIcon from "@/assets/icons/clients.svg";
import Image from "next/image";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";

type TProjectCard = {
  cardTitle: string;
  cardSubTitle: string;
  detailsInfoPath: string;
  clientFullName: string;
  clientImage: string;
  projectManagerFullName: string;
  projectManagerImage: string;
  startDate: string;
  endDate: string;
  status: string
};
export default function ProjectCard({
  cardTitle,
  cardSubTitle,
  detailsInfoPath,
  clientFullName,
  clientImage,
  projectManagerFullName,
  projectManagerImage,
  startDate,
  endDate,
  status
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
                  {
                    data.image !== 'null' || null ?
                      <Image
                        alt='client image'
                        src={data.image}
                        width={200}
                        height={200}
                        className='rounded-full'
                      /> :
                      <Box>
                        <UserIcon />
                      </Box>
                  }
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
          <Typography>{status}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
