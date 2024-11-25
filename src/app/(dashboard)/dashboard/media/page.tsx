import { Box, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ViewDialog from "./components/viewDialog";
import Image from "next/image";
import assets from "@/assets";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import Image1 from "@/assets/images/ccc.png";
import Image2 from "@/assets/images/eee.png";
import Image3 from "@/assets/images/ddd.png";
import Image4 from "@/assets/images/bbb.png";
import Image5 from "@/assets/images/aaa.png";


export default function MediaPage() {
  const mediaData = {
    "success": true,
    "statusCode": 302,
    "message": "All employee found successfully.",
    "mete": {
      "page": 1,
      "limit": 10,
      "total": 35,
      "totalPage": 4
    },
    "data": [
      {
        "title": "New Equipment That Will Shape the Project",
        "image": Image1,
        "uploadAt": "Jan 3, 2022",
        "category": "Equipment",
        "author": {
          "firstName": "Ian",
          "lastName": "Lesch",
          "email": "Magali56@yahoo.com",
          "profileImage": null,
        }
      },
      {
        "title": "How the event could impact project and the future",
        "image": Image2,
        "uploadAt": "Jan 3, 2022",
        "category": "Event",
        "author": {
          "firstName": "Ian",
          "lastName": "Lesch",
          "email": "Magali56@yahoo.com",
          "profileImage": null,
        }
      },
      {
        "title": "New Equipment That Will Shape the Project 2",
        "image": Image3,
        "uploadAt": "Jan 3, 2022",
        "category": "Technology",
        "author": {
          "firstName": "Ian",
          "lastName": "Lesch",
          "email": "Magali56@yahoo.com",
          "profileImage": null,
        }
      },
      {
        "title": "Augmented Speedboat for 2022",
        "image": Image4,
        "uploadAt": "Jan 3, 2022",
        "category": "Equipment",
        "author": {
          "firstName": "Ian",
          "lastName": "Lesch",
          "email": "Magali56@yahoo.com",
          "profileImage": null,
        }
      },
      {
        "title": "Stocks making the biggest moves midday: SpeedBoat Stocks making the biggest moves midday",
        "image": Image5,
        "uploadAt": "Jan 3, 2022",
        "category": "Business",
        "author": {
          "firstName": "Ian",
          "lastName": "Lesch",
          "email": "Magali56@yahoo.com",
          "profileImage": null,
        }
      },
    ]
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
        <ViewDialog />
      </Stack>

      <Stack
        mt='1.5rem'
        gap='1.5rem'
      >
        {
          mediaData.data.slice(0, 3).map((data, i) => <Stack
            key={i}
            direction='column'
            gap='1.25rem'
          >
            <Box position='relative'>
              <Image
                alt="media image"
                src={data.image || assets.images.brokenImage}
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <Stack
                width='100%'
                justifyContent='space-between'
                alignItems='center'
                px='.5rem'
                position='absolute'
                top={8}
              >
                <Box sx={{
                  bgcolor: 'text.primary',
                  color: 'white',
                  p: '.5rem',
                  borderRadius: '1rem'
                }}>
                  {data.category}
                </Box>
                <Box sx={{
                  bgcolor: 'text.primary',
                  color: 'white',
                  p: '.5rem',
                  borderRadius: '1rem'
                }}>
                  <TurnedInNotIcon />
                </Box>
              </Stack>
            </Box>
            <Typography
              fontSize='1.125rem'
              fontWeight={700}
            >
              {data.title}
            </Typography>
            <Stack justifyContent='space-between' alignItems='center'>
              <Stack gap='.5rem'>
                <Image
                  alt="author image"
                  src={data.author.profileImage || assets.images.userPlaceholderImage}
                  width={100}
                  height={100}
                  className="size-5 rounded"
                />
                <Typography>By {data.author.firstName} {data.author.lastName}</Typography>
              </Stack>
              <Typography>{data.uploadAt}</Typography>
            </Stack>
          </Stack>)
        }
      </Stack>


    </Box>
  </>
};
