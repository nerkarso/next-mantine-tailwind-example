import '@/styles/globals.css';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { AppProps } from 'next/app';

const emotionCache = createEmotionCache({ key: 'mantine', prepend: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider emotionCache={emotionCache} withGlobalStyles>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
