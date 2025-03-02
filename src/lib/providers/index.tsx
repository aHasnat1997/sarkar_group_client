'use client';

import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '../theme';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default Providers;
