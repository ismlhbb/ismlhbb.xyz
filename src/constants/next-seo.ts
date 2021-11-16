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
  additionalMetaTags: [
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#0a192f',
    },
    {
      name: 'keyword',
      content: defaultMeta.keywords,
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: defaultMeta.title,
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    },
  ],
};
