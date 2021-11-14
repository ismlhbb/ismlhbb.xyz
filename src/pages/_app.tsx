import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';

import 'styles/globals.scss';
import 'styles/SidebarNav.scss';
import 'styles/Introduction.scss';
import 'styles/About.scss';
import 'react-typist/dist/Typist.css';

import { store } from 'app/store';
import PageLoadingBar from 'components/PageLoadingBar';
import { defaultSEOConfig } from 'constants/next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
        <PageLoadingBar />
      </Provider>
    </>
  );
}

export default MyApp;
