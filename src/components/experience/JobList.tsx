import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import FadeInSection from 'components/FadeInSection';

const JobList = () => {
  const experienceItems = {
    Wattpad: {
      jobTitle: 'Software Engineer (PEY) @',
      duration: 'MAY 2020 - APR 2021',
      desc: [
        'Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).',
        'Iteratively built web experiences for 80 million users across high-traffic pages.',
        'Measured and analyzed real-world user metrics by leveraging Amplitude and Datadog.',
        'Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.',
      ],
    },
    UofT: {
      jobTitle: 'Research Engineer @',
      duration: 'MAY 2021 - SEPT 2021',
      desc: [
        'Developing and researching an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.',
        ' Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik.',
      ],
    },
    Centivizer: {
      jobTitle: 'Research Developer @',
      duration: 'SEPT 2019 - APR 2020',
      desc: [
        'Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.',
        'Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia.',
      ],
    },
    TDSB: {
      jobTitle: 'Software Engineer @',
      duration: 'SEPT 2019 - DEC 2020',
      desc: [
        'Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application.',
      ],
    },
    'Orange Gate': {
      jobTitle: 'Software Engineering Intern @',
      duration: 'MAY 2019 - AUG 2019',
      desc: [
        'Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home',
        'Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.',
        'Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB.',
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
