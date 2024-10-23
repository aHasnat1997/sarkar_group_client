import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Image from "next/image";
import assets from "@/assets";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/redux/hooks";
// import { removeUserInfo } from "@/redux/slices/authSlice";
// import { useUserLogoutMutation } from "@/redux/api/endpoints/authApi";

type TTopBarPayload = {
  drawerWidth: number;
  isClosing: boolean;
  mobileOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMobileOpen: any
};
export default function TopBar({ drawerWidth, isClosing, setMobileOpen, mobileOpen }: TTopBarPayload) {
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  // const [userLogout] = useUserLogoutMutation();

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'white',
        boxShadow: 0,
        paddingY: '1rem'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack justifyContent='space-between' alignItems='center' width='100%'>
          <Box>
            <Typography
              variant='h5'
              fontWeight='600'
              color='text.primary'
            >
              {/* to-do: dynamic role */}
              Hello Admin👋🏻
            </Typography>
            {/* to-do: make dynamic greeting */}
            <Typography
              fontWeight='300'
              fontSize='.8rem'
              color="text.secondary"
            >
              Good Morning
            </Typography>
          </Box>
          <Stack gap='.5rem'>
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

            <IconButton
              sx={{
                padding: '.5rem',
                borderRadius: '.5rem',
                bgcolor: 'rgba(162, 161, 168, 0.10)',
                color: 'text.primary'
              }}
            >
              <NotificationsNoneIcon />
            </IconButton>

            <Button
              variant='outlined'
              sx={{
                border: '1.5px solid',
                borderColor: 'grey.400',
                borderRadius: '0.5rem',
                boxShadow: 'none',
                padding: '.3rem'
              }}
            >
              <Box
                display='flex'
                alignItems='center'
                gap='0.5rem'
                color='text.primary'
              >
                <Image
                  alt="profile-image"
                  src={assets.images.profile}
                  height={500}
                  width={500}
                  className="size-8"
                />
                <Box textAlign='left'>
                  <Typography
                    fontSize='.75rem'
                    fontWeight='600'
                  >
                    Shawkat Jamil
                  </Typography>
                  <Typography
                    fontSize='0.5rem'
                    color="text.secondary"
                    fontWeight='300'
                  >
                    CEO, SARKAR GROUP
                  </Typography>
                </Box>
                <KeyboardArrowDownIcon />
              </Box>
            </Button>

          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
