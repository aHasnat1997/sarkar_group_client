'use client';

import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import DrawerList from "./DrawerList";
import React from "react";
import TopBar from "./TopBar";

export default function SideDrawerTopBar({ drawerWidth }: { drawerWidth: number }) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box>
      <TopBar
        drawerWidth={drawerWidth}
        isClosing={isClosing}
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
      />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none'
            }
          }}
        >
          <DrawerList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
            }
          }}
          open
        >
          <DrawerList />
        </Drawer>
      </Box>
    </Box>

  );
};