import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import DrawerListItems from "./DrawerListItems";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useUserLogoutMutation } from "@/redux/api/endpoints/authApi";
import { removeUserInfo } from "@/redux/slices/authSlice";

function DrawerList() {
  const router = useRouter();
  const pathname = usePathname();
  const drawerLists = DrawerListItems();
  const dispatch = useAppDispatch();
  const [userLogout] = useUserLogoutMutation();

  const isActive = (path: string, hasChild: boolean) => {
    if (hasChild && pathname.startsWith(path)) return true;
    if (!hasChild && pathname === path) return true;
  }

  async function handelLogout() {
    dispatch(removeUserInfo())
    await userLogout('');
    router.refresh();
    router.push('/');
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      padding: '1.25rem 0 1.25rem 1.25rem'
    }}>
      <Stack
        direction='column'
        justifyContent='space-between'
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'grey.400',
          borderRadius: '1.25rem'
        }}
      >
        <Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Link href='/' className="m-4">
              <Image
                alt="Logo"
                src={assets.logo.main}
                height={200}
                width={200}
              />
            </Link>
          </Box>
          <List>
            {drawerLists.map((list, i) => (
              <Link
                key={i}
                href={list.path}
                style={{ textDecoration: 'none' }} // Ensures no underline on Link
              >
                <ListItem
                  disablePadding
                  className={isActive(list.path, list.hasChild) ? 'bg-primary/5 text-primary' : ''}
                >
                  <Box
                    sx={
                      isActive(list.path, list.hasChild) ?
                        { bgcolor: 'primary.main', padding: '2px', height: '3rem' } :
                        { padding: '2px' }
                    } />
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        color: isActive(list.path, list.hasChild) ? 'primary.main' : 'inherit', // Change icon color on active
                      }}
                    >
                      {list.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={list.title}
                      sx={{
                        color: isActive(list.path, list.hasChild) ? 'primary.main' : 'inherit', // Change text color on active
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>

        <Button
          fullWidth
          variant="outlined"
          color="warning"
          onClick={handelLogout}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
}

export default DrawerList;
