'use client';

import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '../theme';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {children}
        </Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
