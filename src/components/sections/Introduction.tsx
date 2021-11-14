import * as React from 'react';
import Typist from 'react-typist';

import FadeInSection from 'components/FadeInSection';
import ButtonLink from 'components/links/ButtonLink';

const IntroData = {
  name: 'ismail',
  subtitle: `I build beautiful, fast and responsive web applications to make people's lives easier.`,
  description: `Experienced Front End Developer with strong knowledge creating high-quality, scalable, predictable, and high-performance web applications.`,
  nextSection: '#about',
  ctaText: 'Know more',
};

const Introduction = () => {
  return (
    <div id='intro'>
      <Typist avgTypingDelay={120}>
        <span className='intro-title'>
          {'hi, '}
          <span className='intro-name'>{IntroData.name}</span>
          {' here.'}
        </span>
      </Typist>
      <FadeInSection>
        <h5 className='intro-subtitle'>{IntroData.subtitle}</h5>
        <p className='intro-desc'>{IntroData.description}</p>
        <div className='intro-cta'>
          <ButtonLink href={IntroData.nextSection}>
            {IntroData.ctaText}
          </ButtonLink>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Introduction;
