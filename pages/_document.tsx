import { emotionCache } from '@/theme/emotion-cache';
import { preflightStyles } from '@/theme/tailwind-preflight';
import { ServerStyles, createStylesServer } from '@mantine/next';
import Document, { DocumentContext } from 'next/document';

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="tailwind-preflight">{preflightStyles}</style>,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }
}
