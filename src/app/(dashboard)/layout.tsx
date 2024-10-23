import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Metadata } from 'next';
import SideDrawerTopBar from './components/SideDrawer&TopBar';

const drawerWidth = 260;

export const metadata: Metadata = {
  title: 'Dashboard - The Sarkar Group - SMD'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <SideDrawerTopBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: '2rem 1.6rem',
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
