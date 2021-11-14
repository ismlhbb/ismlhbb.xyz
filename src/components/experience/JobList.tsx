import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import FadeInSection from 'components/FadeInSection';
import { experienceItems } from 'constants/data';

const JobList = () => {
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
                    <FadeInSection key={i} delay={`${i + 1}00ms`}>
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
