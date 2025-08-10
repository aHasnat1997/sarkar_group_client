'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@mui/material'
import { Logout } from '@mui/icons-material';

export default function LogoutButton() {
  const handleLogout = async () => {
    // Clear the refresh token cookie
    document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    // Sign out with NextAuth
    await signOut({
      callbackUrl: '/login',
      redirect: true
    });
  };

  return (
    <Button onClick={handleLogout} variant="outlined">
      <Logout />
      Logout
    </Button>
  );
}
