import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import 'styles/globals.scss';
import 'react-typist/dist/Typist.css';

import PageLoadingBar from 'components/PageLoadingBar';
import { defaultSEOConfig } from 'config/next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
      <PageLoadingBar />
    </>
  );
}

export default MyApp;
