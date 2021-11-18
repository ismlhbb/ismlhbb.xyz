import * as React from 'react';

import FadeInSection from 'components/FadeInSection';
import ButtonLink from 'components/links/ButtonLink';
import NextImage from 'components/NextImage';
import { aboutCTA, aboutTechStack } from 'constants/data';

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
        <span className='section-title'>/ about me</span>
      </div>
      <FadeInSection>
        <div className='about-content'>
          <div className='about-description'>
            {DescItems.map((desc, i) => (
              <div key={i}>{desc.items}</div>
            ))}
            {'Here are some technologies I have been working with:'}
            <ul className='tech-stack'>
              {aboutTechStack.map(function (tech_item, i) {
                return (
                  <FadeInSection key={i} delay={`${i + 1}00ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                );
              })}
            </ul>
          </div>
          <NextImage
            className='about-image'
            alt='Ismail Habibi Herman'
            height={249}
            width={200}
            src='/images/me.jpg'
            imgClassName='rounded-xl'
          />
        </div>
        <ButtonLink href={aboutCTA.url}>{aboutCTA.text}</ButtonLink>
      </FadeInSection>
    </div>
  );
};

export default About;
