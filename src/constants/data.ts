// Intro
export const introData = {
  name: 'ismail',
  subtitle: `I build beautiful, fast and responsive web applications to make people's lives easier.`,
  description: `I'm a lifelong learner and self-taught software engineer specializing in front end development based in Jakarta, Indonesia.`,
  nextSection: 'about',
  ctaText: 'Know more',
};

// About
export const aboutTechStack = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux',
  'MobX',
  'HTML & CSS',
  'Scss',
  'Jss',
  'Tailwind',
  'Material UI',
];

export const aboutCTA = {
  text: 'View Resume',
  url: 'https://drive.google.com/file/d/1ooEBNxoygxCCQsh75g_MovNCg4d_Nnth/view',
};

// Experience
export const experienceItems = {
  Flick: {
    jobTitle: 'Frontend Developer',
    duration: 'NOV 2020 - NOV 2021',
    desc: [
      'Developed web-based applications for the company, users and merchants',
      'Developed BeePay Back Office for Financial Institution and Admin using React, TypeScript, Redux, Material UI, Scss',
      'Developed BeePay Shop using React, TypeScript, Redux, Material UI, Scss',
      'Developed FlickSilvi Web v1 using React, Typescript, Redux, Material UI, Scss',
      'Developed Silvi Merchant Back Office v1.1+ using React, TypeScript, MobX, Material UI, Scss',
    ],
  },
  'Kementerian PUPR': {
    jobTitle: 'Web Application Developer Intern',
    duration: 'JUL 2019 - AUG 2019',
    desc: [
      'Design and build a web-based letter submission and approval system for managing letter drafts using PHP, MySql, including a custom UI with Bootstrap and CSS',
    ],
  },
};

// Projects
export const projectData = {
  'Next Starter': {
    desc: 'An opinionated Next.js starter project bootstrapped with create-next-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'Next.js, TypeScript, Tailwind, Redux, Scss',
    link: 'https://github.com/ismlhbb/next-ts-tw-starter/',
    open: 'https://next-ts-tw.ismlhbb.xyz/',
  },
  'React Vite Starter': {
    desc: 'An opinionated React.js starter project bootstrapped with Vite, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'React.js, Vite, TypeScript, Tailwind, Redux, Scss',
    link: 'https://github.com/ismlhbb/react-vite-ts-tw-starter/',
    open: 'http://react-vite-ts-tw.ismlhbb.xyz/',
  },
  'React Starter': {
    desc: 'An opinionated React.js starter project bootstrapped with create-react-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
    techStack: 'React.js, TypeScript, Tailwind, Redux, Scss',
    link: 'https://github.com/ismlhbb/react-ts-tw-starter/',
    open: 'http://react-ts-tw.ismlhbb.xyz/',
  },
  'BeePay Back Office': {
    desc: 'BeePay Back Office is a dashboard application for BeePay Admins and Financial Institutions to manage and control various features of the BeePay System.',
    techStack: 'React.js, TypeScript, Redux, Material UI, Scss',
    link: '',
    open: '',
  },
  'BeePay Shop': {
    desc: 'BeePay Shop is a social commerce application for BeePay Users to shop for various kinds of goods sold by BeePay Merchants.',
    techStack: 'React.js, TypeScript, Redux, Material UI, Scss',
    link: '',
    open: '',
  },
  'FlickSilvi Web v1': {
    desc: 'FlickSilvi is a self service application that allows users to directly order food by simply scanning the QR code at the restaurant table.',
    techStack: 'React.js, TypeScript, Redux, Material UI, Scss',
    link: '',
    open: '',
  },
  'Silvi Merchant Back Office v1.1+': {
    desc: `Silvi Merchant Back Office is a dashboard application for Silvi's Merchant to manage and control various features of the Silvi System.`,
    techStack: 'React.js, TypeScript, MobX, Material UI, Scss',
    link: '',
    open: '',
  },
  'COVID-19 Tracker': {
    desc: `A very simple Coronavirus Disease (COVID-19) realtime tracker app that visualize and track the 2020 COVID-19 pandemic around the world.`,
    techStack: 'React.js, Material UI',
    link: 'https://github.com/ismlhbb/covid-19-tracker/',
    open: 'https://covid-19-tracker-7ea93.web.app/',
  },
  Shovel: {
    desc: `An online book store management application built using Laravel 6. `,
    techStack: 'Laravel, MySQL',
    link: 'https://github.com/ismlhbb/shovel/',
    open: '',
  },
  'Simple Quiz App': {
    desc: `A very simple quiz app.`,
    techStack: 'React.js',
    link: 'https://github.com/ismlhbb/quizzapp',
    open: 'https://quizz-app-ismlhbb.web.app/',
  },
  'Simple To-Do List App': {
    desc: `A simple to-do list app built with React Js with Material-UI for the design and integrated with realtime database on Firebase.`,
    techStack: 'React.js, Material UI, Firebase',
    link: 'https://github.com/ismlhbb/todolistapp/',
    open: 'https://to-do-list-app-3d20f.web.app/',
  },
  'Letter Submission and Approval System Web App': {
    desc: `A web-based letter submission and approval system for managing letter drafts created by staff to be submitted and then revised or approved by echelons.`,
    techStack: 'PHP, MySQL, Bootstrap, JQuery',
    link: 'https://github.com/ismlhbb/manajemen-konsep-surat',
    open: '',
  },
};

// Footer
export const footerData = {
  profileName: 'Ismail Habibi Herman',
  profileUrl: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL,
};
