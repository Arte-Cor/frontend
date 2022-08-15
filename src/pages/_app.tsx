import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '@themes/light-theme';
import { Menu } from '@components/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Menu />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
