import { IoLogoVercel } from 'react-icons/io5';
import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiJest,
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
  'javascript, typescript, react, nextjs, redux, mobx, html5, css3, scss, tailwindcss, materialui, chakraui, firebase, git, vscode';

export const aboutCTA = {
  text: 'View Resume',
  url: 'https://drive.google.com/file/d/1ooEBNxoygxCCQsh75g_MovNCg4d_Nnth/view',
};

// Experience
export const experienceItems = {
  'Flash Mobile': {
    jobTitle: 'Frontend Developer',
    duration: 'NOV 2021 - MAY 2024',
    desc: [
      'Managed and maintained 13+ critical services within the Merchant Portal ecosystem, including Auth, Admin Management, Merchant Management, User Management, SMS, QRIS, Virtual Account, Biller, Transfer, PG Card, Flashevent, Flashcheckout, E-Wallet, and KYC',
      'Led the successful revamp of multiple high-impact projects (Merchant Portal): FrontOffice and BackOffice v2 and Ultimate',
      'Designed and developed the Dashboard DocSign application for internal use, built using React, TypeScript, Redux Toolkit, and Chakra UI',
      'Contributed to the BaaS (Bank as a Service) project by designing and implementing the Portal Backoffice and Portal Merchant interfaces using Laravel and Bootstrap',
      'Consistently improved application performance, user experience, and code maintainability across all projects',
      'Collaborated closely with UX/UI team to ensure a seamless user experience',
      'Implemented responsive design, increasing mobile user engagement by 35%',
      'Established and enforced coding standards, leading to a 20% reduction in code review time',
      'Worked closely with backend teams to optimize API endpoints, and partnered with QA to implement robust end-to-end testing',
    ],
    jobTitle2: '',
    duration2: '',
    desc2: [] as string[],
  },
  Flick: {
    jobTitle: 'Frontend Developer',
    duration: 'NOV 2020 - NOV 2021',
    desc: [
      'Architecting and implementing complex web applications from inception, utilizing React, TypeScript, state management solutions (Redux, MobX), and modern CSS frameworks (Material UI, Tailwind CSS, SCSS)',
      'Spearheading the development of critical projects such as BeePay Back Office for Financial Institutions, BeePay Shop, FlickSilvi Web, and Silvi Merchant Back Office',
      'Collaborating closely with cross-functional teams (Backend, QA, Product) to ensure seamless system integration, explore problem spaces, and implement innovative features',
      'Adhering to agile development methodologies to maintain project efficiency and adaptability',
      'Continuously optimizing, troubleshooting, and enhancing web-based applications to improve performance and user experience',
    ],
    jobTitle2: 'Lead Frontend Developer',
    duration2: 'JUN 2021 - NOV 2021',
    desc2: [
      'Led a team of 4 frontend developers, increasing sprint velocity by 30% over 6 months through improved processes and mentorship',
      'Conducted over 200 code reviews in the past year, reducing production bugs by 25%',
      'Drove key technical decisions for frontend projects, ensuring alignment with business objectives and industry best practices',
      'Mentored team members on frontend engineering best practices and code design patterns, facilitating regular pair programming sessions which improved code quality by 20%',
      'Championed user-centric design principles, improving user satisfaction scores by 15% through continuous UX enhancements',
      'Achieved and maintained a 95% satisfaction rate in internal developer experience surveys',
      'Collaborated with cross-functional teams to align frontend development with overall product vision, resulting in 40% faster time-to-market for new features',
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
  DocSign: {
    desc: `A dashboard web application that serves as an internal platform for digitally signing documents.`,
    techStack: 'react, typescript, redux, chakraui',
    link: '',
    open: '',
  },
  'Merchant Portal FrontOffice': {
    desc: `A dashboard web application to provide Flash Mobile Merchants to register, manage, control and utilize products and services of Flash Mobile.`,
    techStack: 'react, typescript, redux, scss',
    link: '',
    open: '',
  },
  'Merchant Portal BackOffice': {
    desc: `A dashboard web application to provide Flash Mobile internal admins and other staff to manage and control various configurations, products and features of the Flash Mobile System.`,
    techStack: 'react, typescript, redux, scss',
    link: '',
    open: '',
  },
  'Silvi Merchant Back Office v1.1+': {
    desc: `A dashboard application for Silvi's Merchant to manage and control various features of the Silvi System.`,
    techStack: 'react, typescript, mobx, tailwindcss, materialui, scss',
    link: '',
    open: '',
  },
  'BeePay Shop': {
    desc: 'A social commerce application for BeePay Users to shop for various kinds of goods sold by BeePay Merchants.',
    techStack: 'react, typescript, redux, materialui, scss',
    link: '',
    open: '',
  },
  'FlickSilvi Web v1': {
    desc: 'A self service application that allows users to directly order food by simply scanning the QR code at the restaurant table.',
    techStack: 'react, typescript, redux, materialui, scss, analytics',
    link: '',
    open: '',
  },
  'BeePay Back Office': {
    desc: 'A dashboard application for BeePay Admins and Financial Institutions to manage and control various features of the BeePay System.',
    techStack: 'react, typescript, redux, materialui, scss',
    link: '',
    open: '',
  },
  'ismlhbb.xyz': {
    desc: 'An online portfolio by Ismail Habibi Herman. Showcase of my projects, details about me and my experiences. Built using Next, TypeScript, Tailwind, Scss',
    techStack: 'nextjs, typescript, tailwindcss, scss',
    link: 'https://github.com/ismlhbb/ismlhbb.xyz',
    open: 'https://ismlhbb.xyz',
  },
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
  'COVID-19 Tracker': {
    desc: `A very simple Coronavirus Disease (COVID-19) realtime tracker app that visualize and track the 2020 COVID-19 pandemic around the world.`,
    techStack: 'react, materialui, css3',
    link: 'https://github.com/ismlhbb/covid-19-tracker/',
    open: 'https://covid-19-tracker-7ea93.web.app/',
  },
  // Shovel: {
  //   desc: `An online book store management application built using Laravel 6. `,
  //   techStack: 'laravel, mysql, css3, jquery',
  //   link: 'https://github.com/ismlhbb/shovel/',
  //   open: '',
  // },
  // 'Simple Quiz App': {
  //   desc: `A very simple quiz app.`,
  //   techStack: 'react, css3',
  //   link: 'https://github.com/ismlhbb/quizzapp',
  //   open: 'https://quizz-app-ismlhbb.web.app/',
  // },
  // 'Simple To-Do List App': {
  //   desc: `A simple to-do list app built with React Js with Material-UI for the design and integrated with realtime database on Firebase.`,
  //   techStack: 'react, materialui, css3, firebase',
  //   link: 'https://github.com/ismlhbb/todolistapp/',
  //   open: 'https://to-do-list-app-3d20f.web.app/',
  // },
  // 'Letter Submission and Approval System Web App': {
  //   desc: `A web-based letter submission and approval system for managing letter drafts created by staff to be submitted and then revised or approved by echelons.`,
  //   techStack: 'php, mysql, css3, bootstrap, jquery',
  //   link: 'https://github.com/ismlhbb/manajemen-konsep-surat',
  //   open: '',
  // },
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
  chakraui: {
    icon: SiChakraui,
    name: 'Chakra UI',
  },
  jest: {
    icon: SiJest,
    name: 'Jest',
  },
};
