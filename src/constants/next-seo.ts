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
  themeColor: '#0a192f',
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
      {
        url: '/images/social/ismlhbb-social.png',
        alt: 'ismlhbb.xyz og-image-social',
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
      name: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
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
      content: defaultMeta.themeColor,
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
    {
      name: 'msapplication-TileColor',
      content: defaultMeta.themeColor,
    },
    {
      name: 'msapplication-TileImage',
      content: '/favicon/ms-icon-144x144.png',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-57x57.png',
      sizes: '57x57',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-60x60.png',
      sizes: '60x60',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-72x72.png',
      sizes: '72x72',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-76x76.png',
      sizes: '76x76',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-114x114.png',
      sizes: '114x114',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-120x120.png',
      sizes: '120x120',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-144x144.png',
      sizes: '144x144',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-152x152.png',
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-icon-57x57.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon/android-icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
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
