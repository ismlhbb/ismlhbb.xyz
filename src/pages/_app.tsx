import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import 'styles/globals.scss';
import 'styles/SidebarNav.scss';
import 'styles/Introduction.scss';
import 'styles/About.scss';
import 'styles/Experience.scss';
import 'styles/Footer.scss';
import 'styles/Projects.scss';
import 'react-typist/dist/Typist.css';

import PageLoadingBar from 'components/PageLoadingBar';
import { defaultSEOConfig } from 'constants/next-seo';

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
