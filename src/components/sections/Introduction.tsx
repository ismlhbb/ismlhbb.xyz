import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';
import { introData } from 'constants/data';
import { trackEvent } from 'utils/analytics';

const Introduction = () => {
  return (
    <div id='intro'>
      <span className='intro-title'>
        {'hi, '}
        <span className='intro-name'>{introData.name}</span>
        {' here.'}
      </span>
      <FadeInSection>
        <h5 className='intro-subtitle'>{introData.subtitle}</h5>
        <p className='intro-desc'>{introData.description}</p>
      </FadeInSection>
      <UnstyledLink
        aria-label='next section'
        className='intro-cta'
        openNewTab={false}
        isScrollLink
        href={introData.nextSection}
        onClick={() =>
          trackEvent(`Intro Link: Next Section`, { type: 'navigate' })
        }
      >
        <IoArrowDownOutline className='intro-cta-item' />
      </UnstyledLink>
    </div>
  );
};

export default Introduction;
