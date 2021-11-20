import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import Typist from 'react-typist';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';
import { introData } from 'constants/data';

const Introduction = () => {
  return (
    <div id='intro'>
      <Typist avgTypingDelay={120}>
        <span className='intro-title'>
          {'hi, '}
          <span className='intro-name'>{introData.name}</span>
          {' here.'}
        </span>
      </Typist>
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
      >
        <IoArrowDownOutline className='intro-cta-item' />
      </UnstyledLink>
    </div>
  );
};

export default Introduction;
