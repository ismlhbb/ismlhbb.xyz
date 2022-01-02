import { IoLogoVercel } from 'react-icons/io5';
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMarkdown,
  SiMaterialui,
  SiMobx,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
} from 'react-icons/si';

// Intro
export const introData = {
  name: 'ismail',
  subtitle: `I build beautiful, fast and responsive web applications to make people's lives easier.`,
  description: `I'm a lifelong learner and self-taught software engineer specializing in front end development based in Jakarta, Indonesia.`,
  nextSection: 'about',
  ctaText: 'Know more',
};

// About
export const aboutTechStack =
  'javascript, typescript, react, nextjs, redux, mobx, html5, css3, scss, tailwindcss, materialui, firebase, git, vscode';

export const aboutCTA = {
  text: 'View Resume',
  url: 'https://drive.google.com/file/d/1ooEBNxoygxCCQsh75g_MovNCg4d_Nnth/view',
};

// Experience
export const experienceItems = {
  'Flash Mobile': {
    jobTitle: 'Frontend Developer',
    duration: 'NOV 2021 - Present',
    desc: [
      'Create, maintain, optimize, troubleshoot, and improve web-based applications for the company, users and merchants',
      'Revamp Flash Mobile Dashboard for Merchant application using React, TypeScript, Redux, Scss',
      'Revamp Flash Mobile Dashboard for Admin application using React, TypeScript, Redux, Scss',
    ],
    jobTitle2: '',
    duration2: '',
    desc2: [] as string[],
  },
  Flick: {
    jobTitle: 'Frontend Developer',
    duration: 'NOV 2020 - NOV 2021',
    desc: [
      'Create, maintain, optimize, troubleshoot, and improve web-based applications for the company, users and merchants',
      'Work closely with Backend and QA Team for system integration in the web platform',
      'Work within an agile development methods',
      'Collaborate with product team to implement new feature of the system.',
      'Develop from scratch BeePay Back Office for Financial Institution and Admin using React, TypeScript, Redux, Material UI, Scss',
      'Develop from scratch BeePay Shop using React, TypeScript, Redux, Material UI, Scss',
      'Develop from scratch FlickSilvi Web v1 using React, Typescript, Redux, Material UI, Scss',
      'Develop Silvi Merchant Back Office v1.1+ using React, TypeScript, MobX, Tailwind CSS, Material UI, Scss',
    ],
    jobTitle2: 'Lead Frontend Developer',
    duration2: 'JUN 2021 - NOV 2021',
    desc2: [
      'Plan and determine the technology used in Frontend development',
      'Responsible to lead and supervise Frontend team',
      'Had an authority as a decision maker for Frontend team',
    ],
  },
  'Kementerian PUPR': {
    jobTitle: 'Web Application Developer Intern',
    duration: 'JUL 2019 - AUG 2019',
    desc: [
      'Design and build a web-based letter submission and approval system for managing letter drafts using PHP, MySql, including a custom UI with Bootstrap and CSS',
    ],
    jobTitle2: '',
    duration2: '',
    desc2: [] as string[],
  },
};

// Projects
export const projectData = {
  'Next Starter': {
    desc: 'An opinionated Next.js starter project bootstrapped with create-next-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'nextjs, typescript, tailwindcss, redux, scss',
    link: 'https://github.com/ismlhbb/next-ts-tw-starter/',
    open: 'https://next-ts-tw.ismlhbb.xyz/',
  },
  'React Vite Starter': {
    desc: 'An opinionated React.js starter project bootstrapped with Vite, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'react, vite, typescript, tailwindcss, redux, scss',
    link: 'https://github.com/ismlhbb/react-vite-ts-tw-starter/',
    open: 'http://react-vite-ts-tw.ismlhbb.xyz/',
  },
  'React Starter': {
    desc: 'An opinionated React.js starter project bootstrapped with create-react-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'react, typescript, tailwindcss, redux, scss',
    link: 'https://github.com/ismlhbb/react-ts-tw-starter/',
    open: 'http://react-ts-tw.ismlhbb.xyz/',
  },
  'BeePay Back Office': {
    desc: 'BeePay Back Office is a dashboard application for BeePay Admins and Financial Institutions to manage and control various features of the BeePay System.',
    techStack: 'react, typescript, redux, materialui, scss',
    link: '',
    open: '',
  },
  'BeePay Shop': {
    desc: 'BeePay Shop is a social commerce application for BeePay Users to shop for various kinds of goods sold by BeePay Merchants.',
    techStack: 'react, typescript, redux, materialui, scss',
    link: '',
    open: '',
  },
  'FlickSilvi Web v1': {
    desc: 'FlickSilvi is a self service application that allows users to directly order food by simply scanning the QR code at the restaurant table.',
    techStack: 'react, typescript, redux, materialui, scss, analytics',
    link: '',
    open: '',
  },
  'Silvi Merchant Back Office v1.1+': {
    desc: `Silvi Merchant Back Office is a dashboard application for Silvi's Merchant to manage and control various features of the Silvi System.`,
    techStack: 'react, typescript, mobx, tailwindcss, materialui, scss',
    link: '',
    open: '',
  },
  'COVID-19 Tracker': {
    desc: `A very simple Coronavirus Disease (COVID-19) realtime tracker app that visualize and track the 2020 COVID-19 pandemic around the world.`,
    techStack: 'react, materialui, css3',
    link: 'https://github.com/ismlhbb/covid-19-tracker/',
    open: 'https://covid-19-tracker-7ea93.web.app/',
  },
  Shovel: {
    desc: `An online book store management application built using Laravel 6. `,
    techStack: 'laravel, mysql, css3, jquery',
    link: 'https://github.com/ismlhbb/shovel/',
    open: '',
  },
  'Simple Quiz App': {
    desc: `A very simple quiz app.`,
    techStack: 'react, css3',
    link: 'https://github.com/ismlhbb/quizzapp',
    open: 'https://quizz-app-ismlhbb.web.app/',
  },
  'Simple To-Do List App': {
    desc: `A simple to-do list app built with React Js with Material-UI for the design and integrated with realtime database on Firebase.`,
    techStack: 'react, materialui, css3, firebase',
    link: 'https://github.com/ismlhbb/todolistapp/',
    open: 'https://to-do-list-app-3d20f.web.app/',
  },
  'Letter Submission and Approval System Web App': {
    desc: `A web-based letter submission and approval system for managing letter drafts created by staff to be submitted and then revised or approved by echelons.`,
    techStack: 'php, mysql, css3, bootstrap, jquery',
    link: 'https://github.com/ismlhbb/manajemen-konsep-surat',
    open: '',
  },
};

// Footer
export const footerData = {
  profileName: 'Ismail Habibi Herman',
  profileUrl: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL,
};

// TechStack
export const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  mobx: {
    icon: SiMobx,
    name: 'MobX',
  },
  php: {
    icon: SiPhp,
    name: 'PHP',
  },
  html5: {
    icon: SiHtml5,
    name: 'HTML5',
  },
  css3: {
    icon: SiCss3,
    name: 'CSS3',
  },
  materialui: {
    icon: SiMaterialui,
    name: 'Material UI',
  },
  bootstrap: {
    icon: SiBootstrap,
    name: 'Bootstrap',
  },
  jquery: {
    icon: SiJquery,
    name: 'jQuery',
  },
  mysql: {
    icon: SiMysql,
    name: 'MySQL',
  },
  laravel: {
    icon: SiLaravel,
    name: 'Laravel',
  },
  vite: {
    icon: SiVite,
    name: 'Vite',
  },
  vscode: {
    icon: SiVisualstudiocode,
    name: 'Visual Studio Code',
  },
};
