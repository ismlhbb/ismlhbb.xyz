import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';

const links = [
  { href: '#', label: '/home' },
  { href: '#about', label: '/about' },
  { href: '#experience', label: '/experience' },
  { href: '#projects', label: '/software-creations' },
];

const socials = [
  {
    href: 'mailto:contact.ismailhabibi@gmail.com',
    item: <IoMdMail style={{ fontSize: 20 }} />,
  },
  {
    href: 'https://github.com/ismlhbb',
    item: <ImGithub style={{ fontSize: 19 }} />,
  },
  {
    href: 'https://www.linkedin.com/in/ismailhabibi',
    item: <ImLinkedin style={{ fontSize: 19 }} />,
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
                className='sidebar-link animated-underline'
                href={link.href}
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
