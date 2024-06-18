import type { AppProps } from 'next/app';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';

import 'styles/globals.scss';
import 'react-tippy/dist/tippy.css';

import PageLoadingBar from 'components/PageLoadingBar';
import { defaultSEOConfig } from 'config/next-seo';
import { isDev } from 'constants/config';
import { UMAMI_DOMAINS, UMAMI_SRC, UMAMI_WEBSITE_ID } from 'constants/umami';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {!isDev && (
        <Script
          async
          defer
          data-website-id={UMAMI_WEBSITE_ID}
          src={UMAMI_SRC}
          data-domains={UMAMI_DOMAINS}
        />
      )}
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
      <PageLoadingBar />
    </>
  );
}

export default MyApp;
