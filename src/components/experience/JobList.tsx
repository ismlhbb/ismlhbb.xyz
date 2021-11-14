import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import FadeInSection from 'components/FadeInSection';

const JobList = () => {
  const experienceItems = {
    Flick: {
      jobTitle: 'Frontend Developer @',
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
      jobTitle: 'Web Application Developer Intern @',
      duration: 'JUL 2019 - AUG 2019',
      desc: [
        'Design and build a web-based letter submission and approval system for managing letter drafts using PHP, MySql, including a custom UI with Bootstrap and CSS',
      ],
    },
  };

  return (
    <div className='joblist-container'>
      <Tab.Group vertical>
        <Tab.List className='joblist-tablist'>
          {Object.keys(experienceItems).map((company) => (
            <Tab
              key={company}
              className={({ selected }) =>
                clsx(
                  'joblist-tab',
                  selected ? 'joblist-tab-selected' : 'joblist-tab-not-selected'
                )
              }
            >
              {company}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(experienceItems).map((experience, i) => (
            <Tab.Panel key={i}>
              <span className='joblist-job-title'>
                {experience.jobTitle + ' '}
              </span>
              <span className='joblist-job-company'>
                {Object.keys(experienceItems)[i]}
              </span>
              <div className='joblist-duration'>{experience.duration}</div>
              <ul className='job-description'>
                {experience.desc.map(function (descItem, i) {
                  return (
                    <FadeInSection key={i} delay={`${i}00ms`}>
                      <li>{descItem}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default JobList;
