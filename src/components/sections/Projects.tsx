/* eslint-disable react/jsx-key */
import { ImGithub } from 'react-icons/im';
import { MdFolderOpen, MdOpenInBrowser } from 'react-icons/md';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';

const Projects = () => {
  const ProjectList = {
    'Next Starter': {
      desc: 'An opinionated Next.js starter project bootstrapped with create-next-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
      techStack: 'Next.js, TypeScript, Tailwind, Redux, Scss',
      link: 'https://github.com/ismlhbb/next-ts-tw-starter/',
      open: 'https://next-ts-tw-starter.vercel.app/',
    },
    'React Vite Starter': {
      desc: 'An opinionated React.js starter project bootstrapped with Vite, added with TypeScript, Tailwind, SCSS and Redux Setup.',
      techStack: 'React.js, Vite, TypeScript, Tailwind, Redux, Scss',
      link: 'https://github.com/ismlhbb/react-vite-ts-tw-starter/',
      open: 'http://react-vite-ts-tw-starter.vercel.app/',
    },
    'React Starter': {
      desc: 'An opinionated React.js starter project bootstrapped with create-react-app, added with TypeScript, Tailwind, SCSS and Redux Setup.',
      techStack: 'React.js, TypeScript, Tailwind, Redux, Scss',
      link: 'https://github.com/ismlhbb/react-ts-tw-starter/',
      open: 'http://react-ts-tw-starter.vercel.app/',
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

  return (
    <div id='projects'>
      <div className='section-header '>
        <span className='section-title'>/ software-creations</span>
      </div>
      <div className='project-container'>
        <ul className='projects-grid'>
          {Object.values(ProjectList).map((project, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className='projects-card'>
                <div className='card-header'>
                  <MdFolderOpen className='text-4xl text-green-bright' />
                  <span className='external-links'>
                    {project.open && (
                      <UnstyledLink href={project.link}>
                        <ImGithub className='text-xl hover:text-green-bright text-secondary-lightest' />
                      </UnstyledLink>
                    )}
                    {project.open && (
                      <UnstyledLink href={project.open}>
                        <MdOpenInBrowser className='ml-4 text-2xl hover:text-green-bright text-secondary-lightest' />
                      </UnstyledLink>
                    )}
                  </span>
                </div>

                <div className='card-title'>{Object.keys(ProjectList)[i]}</div>
                <div className='card-desc'>{project.desc}</div>
                <div className='card-tech'>{project.techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
