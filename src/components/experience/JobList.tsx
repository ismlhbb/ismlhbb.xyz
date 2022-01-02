import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useWindowSize } from 'app/hooks';
import FadeInSection from 'components/FadeInSection';
import { experienceItems } from 'constants/data';

const JobList = () => {
  const { deviceState } = useWindowSize();
  return (
    <div className='joblist-container'>
      <Tab.Group vertical={deviceState.isDesktop}>
        <Tab.List className='joblist-tablist'>
          {Object.keys(experienceItems).map((company, i) => (
            <Tab
              key={company}
              className={({ selected }) =>
                clsx(
                  'joblist-tab',
                  selected
                    ? 'joblist-tab-selected'
                    : 'joblist-tab-not-selected animated-underline'
                )
              }
            >
              {deviceState.isMobile ? `0${i + 1}.` : company}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='joblist-content'>
          {Object.values(experienceItems).map((experience, i) => (
            <Tab.Panel key={i}>
              <span className='joblist-job-title'>
                {!!experience.jobTitle2 ? experience.jobTitle2 + ' @ ' : ''}
              </span>
              <span className='joblist-job-company'>
                {!!experience.jobTitle2 ? Object.keys(experienceItems)[i] : ''}
              </span>
              <div className='joblist-duration'>{experience.duration2}</div>
              <ul className='job-description'>
                {experience.desc2.map(function (descItem, i) {
                  return (
                    <FadeInSection key={i} delay={`${i + 1}00ms`}>
                      <li>{descItem}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <span className='joblist-job-title'>
                {experience.jobTitle + ' @ '}
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
