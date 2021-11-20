import { ImGithub } from 'react-icons/im';
import { MdFolderOpen, MdOpenInBrowser } from 'react-icons/md';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';
import TechIcons, { TechListType } from 'components/TechIcons';
import { projectData } from 'constants/data';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='section-header '>
        <span className='section-title'>/ software-creations</span>
      </div>
      <ul className='projects-grid'>
        {Object.values(projectData).map((project, i) => (
          <FadeInSection key={i} delay={`${i + 1}00ms`}>
            <li className='projects-card'>
              <div className='card-header'>
                <MdFolderOpen className='text-4xl text-green-bright' />
                <span className='external-links'>
                  {project.open && (
                    <UnstyledLink
                      aria-label='github repo link'
                      href={project.link}
                    >
                      <ImGithub className='text-xl hover:text-green-bright text-secondary-lightest' />
                    </UnstyledLink>
                  )}
                  {project.open && (
                    <UnstyledLink
                      aria-label='live demo link'
                      href={project.open}
                    >
                      <MdOpenInBrowser className='text-2xl hover:text-green-bright text-secondary-lightest' />
                    </UnstyledLink>
                  )}
                </span>
              </div>
              <div className='card-title'>{Object.keys(projectData)[i]}</div>
              <div className='card-desc'>{project.desc}</div>
              <div className='card-tech'>
                <TechIcons
                  className='grid-cols-7'
                  iconClassName='text-xl'
                  techs={project.techStack.split(', ') as Array<TechListType>}
                />
              </div>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
