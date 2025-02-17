'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#1295D1'
    },
    grey: {
      '400': 'rgba(162, 161, 168, 0.20)'
    },
    text: {
      primary: '#16151C',
      secondary: '#A2A1A8'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          borderRadius: '.63rem',
          fontSize: '1rem'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          border: '.5px solid',
          borderRadius: '.5rem',
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row'
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    },
    MuiTypography: {
      defaultProps: {
        color: 'text.primary'
      }
    }
  },
  typography: {
    fontFamily: ['Lexend', 'sans-serif'].join(','),
  }
});

export default theme;
