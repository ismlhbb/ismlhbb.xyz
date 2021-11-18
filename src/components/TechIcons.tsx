import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
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
  SiVite,
} from 'react-icons/si';

import Tooltip from 'components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li className='text-xl text-secondary hover:text-green-bright'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
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
};
