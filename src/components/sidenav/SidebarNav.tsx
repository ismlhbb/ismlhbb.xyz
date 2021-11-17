import React from 'react';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';

const links = [
  { href: 'intro', label: '/home' },
  { href: 'about', label: '/about' },
  { href: 'experience', label: '/experience' },
  { href: 'projects', label: '/software-creations' },
];

const socials = [
  {
    href: 'mailto:contact.ismailhabibi@gmail.com',
    item: <IoMdMail style={{ fontSize: 21 }} />,
  },
  {
    href: 'https://github.com/ismlhbb',
    item: <ImGithub style={{ fontSize: 21 }} />,
  },
  {
    href: 'https://www.linkedin.com/in/ismailhabibi',
    item: <ImLinkedin style={{ fontSize: 21 }} />,
  },
  {
    href: 'https://www.twitter.com/ismlhbb',
    item: <ImTwitter style={{ fontSize: 21 }} />,
  },
];

const SidebarNav = () => {
  return (
    <div className='sidebar-nav'>
      <div className='sidebar-items'>
        <div className='sidebar-links'>
          {links.map((link, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <UnstyledLink
                openNewTab={false}
                isScrollLink
                href={link.href}
                className='sidebar-link animated-underline'
                activeClass='sidebar-active'
              >
                {link.label}
              </UnstyledLink>
            </FadeInSection>
          ))}
        </div>
      </div>
      <div className='sidebar-socials'>
        {socials.map((social, i) => (
          <UnstyledLink key={i} className='sidebar-link' href={social.href}>
            {social.item}
          </UnstyledLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
