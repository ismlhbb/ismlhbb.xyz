import * as React from 'react';
import Typist from 'react-typist';

import FadeInSection from 'components/FadeInSection';
import ButtonLink from 'components/links/ButtonLink';
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
        <div className='intro-cta'>
          <ButtonLink href={introData.nextSection}>
            {introData.ctaText}
          </ButtonLink>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Introduction;
