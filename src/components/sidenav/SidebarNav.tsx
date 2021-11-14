import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';
import * as Scroll from 'react-scroll';

import FadeInSection from 'components/FadeInSection';

const links = [
  { href: 'intro', label: '/home' },
  { href: 'about', label: '/about' },
  { href: 'experience', label: '/experience' },
  { href: 'projects', label: '/software-creations' },
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
              <Scroll.Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to={link.href}
                className='sidebar-link animated-underline'
                activeClass='sidebar-active'
              >
                {link.label}
              </Scroll.Link>
            </FadeInSection>
          ))}
        </div>
      </div>
      <div className='sidebar-socials'>
        {socials.map((social, i) => (
          <Scroll.Link
            key={i}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='sidebar-link'
            to={social.href}
          >
            {social.item}
          </Scroll.Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
