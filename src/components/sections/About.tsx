/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import FadeInSection from 'components/FadeInSection';
import ButtonLink from 'components/links/ButtonLink';
import { aboutCTA, aboutTechStack } from 'constants/data';

const DescItems = [
  {
    items: (
      <p>
        Experienced <b>Front End Developer</b> with strong knowledge creating
        high-quality, scalable, predictable, and high-performance web
        applications seeks the role which allows me to continue learning and
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
      <FadeInSection>
        <div className='section-header'>
          <span className='section-title'>/ about me</span>
        </div>
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
          <div className='about-image'>
            <img src='/images/me.jpg' alt='Me' />
          </div>
        </div>
        <ButtonLink href={aboutCTA.url}>{aboutCTA.text}</ButtonLink>
      </FadeInSection>
    </div>
  );
};

export default About;
