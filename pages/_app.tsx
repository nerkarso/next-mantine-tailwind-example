import '@/styles/globals.css';

import { emotionCache } from '@/theme/emotion-cache';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider emotionCache={emotionCache} withGlobalStyles>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
