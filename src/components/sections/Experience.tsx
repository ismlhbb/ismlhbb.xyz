import * as React from 'react';

import JobList from 'components/experience/JobList';
import FadeInSection from 'components/FadeInSection';

const Experience = () => {
  return (
    <div id='experience'>
      <FadeInSection>
        <div className='section-header '>
          <span className='section-title'>/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
