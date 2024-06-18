import * as React from 'react';

import FadeInSection from 'components/FadeInSection';
import ButtonLink from 'components/links/ButtonLink';
import NextImage from 'components/NextImage';
import TechIcons, { TechListType } from 'components/TechIcons';
import { aboutCTA, aboutTechStack } from 'constants/data';
import { trackEvent } from 'utils/analytics';

const DescItems = [
  {
    items: (
      <p>
        Experienced <b>Front End Developer</b> with strong knowledge to create{' '}
        <b>high-quality, scalable, predictable</b> and <b>high-performance</b>{' '}
        web applications seeks the role which allows me to continue learning and
        perfecting my skills as I provide high-quality work in a thriving,
        exciting and growing company.
      </p>
    ),
  },
  {
    items: (
      <p>
        Passionate about the field of <b>information technology</b>. Computer is
        my playground. I can spend a full day thinking and learning new things
        about <b>technology</b>.
      </p>
    ),
  },
  {
    items: (
      <p>
        Experienced in <b>leading</b> an organization and building strong social
        ties with a team.
      </p>
    ),
  },
];

const About = () => {
  return (
    <div id='about'>
      <div className='section-header'>
        <span className='section-title'>/ about-me</span>
      </div>
      <FadeInSection>
        <div className='about-content'>
          <div className='about-description'>
            {DescItems.map((desc, i) => (
              <div key={i}>{desc.items}</div>
            ))}
            {'Here are some technologies I have been working with:'}
            <TechIcons
              fadeInSection
              iconClassName='about-tech-stack'
              techs={aboutTechStack.split(', ') as Array<TechListType>}
            />
          </div>
          <NextImage
            useSkeleton
            className='about-image-wrapper'
            alt='Ismail Habibi Herman'
            height={249}
            width={200}
            src='/images/me.jpg'
            imgClassName='about-image'
          />
        </div>
        <ButtonLink
          href={aboutCTA.url}
          onClick={() => trackEvent('About Link: Resume', { type: 'link' })}
        >
          {aboutCTA.text}
        </ButtonLink>
      </FadeInSection>
    </div>
  );
};

export default About;
