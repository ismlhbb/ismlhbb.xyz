import { DefaultSeoProps } from 'next-seo';

import { ogImage } from 'utils/ogImage';

export const defaultMeta = {
  title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  siteName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  description: `An online portfolio by Ismail Habibi Herman. Showcase of my summary, experience and some of my projects.`,
  type: 'website',
  robots: 'follow, index',
  keywords:
    'ismail habibi, ismail habibi herman, ismailhabibi, ismlhbb, Ismail Habibi Herman, html, css, php, javascript, laravel, react, node, reactjs, react, typescipt, nextjs, next, redux, frontend, start up, startup, frontend developer, front end developer,',
  url: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL,
  image: ogImage('ismlhbb.xyz'),
};

export const defaultSEOConfig: DefaultSeoProps = {
  title: undefined,
  titleTemplate: `${defaultMeta.title} | %s`,
  defaultTitle: defaultMeta.title,
  description: defaultMeta.description,
  canonical: defaultMeta.url,
  openGraph: {
    url: defaultMeta.url,
    title: defaultMeta.title,
    description: defaultMeta.description,
    type: defaultMeta.type,
    images: [
      {
        url: defaultMeta.image,
        alt: 'ismlhbb.xyz og-image',
      },
    ],
    site_name: defaultMeta.title,
  },
  twitter: {
    handle: '@ismlhbb',
    cardType: 'summary_large_image',
  },
};
