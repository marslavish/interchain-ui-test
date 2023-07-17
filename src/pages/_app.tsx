import type { AppProps } from 'next/app';

import '@interchain-ui/react/styles';
import { ThemeProvider } from '@interchain-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
