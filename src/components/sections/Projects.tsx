import { ImGithub } from 'react-icons/im';
import { MdFolderOpen, MdOpenInBrowser } from 'react-icons/md';

import FadeInSection from 'components/FadeInSection';
import UnstyledLink from 'components/links/UnstyledLink';
import TechIcons, { TechListType } from 'components/TechIcons';
import { projectData } from 'constants/data';
import { trackEvent } from 'utils/analytics';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='section-header '>
        <span className='section-title'>/ software-creations</span>
      </div>
      <div className='projects-grid'>
        {Object.values(projectData).map((project, i) => (
          <FadeInSection key={i} delay={`${(i + 1) * 2}0ms`}>
            <div className='projects-card'>
              <div className='card-header'>
                <MdFolderOpen className='text-4xl text-green-bright' />
                <span className='external-links'>
                  {project.open && (
                    <UnstyledLink
                      aria-label='github repo link'
                      href={project.link}
                      onClick={() =>
                        trackEvent(
                          `Project Link (GitHub): ${
                            Object.keys(projectData)[i]
                          }`,
                          'link'
                        )
                      }
                    >
                      <ImGithub className='text-xl hover:text-green-bright text-secondary-lightest' />
                    </UnstyledLink>
                  )}
                  {project.open && (
                    <UnstyledLink
                      aria-label='live demo link'
                      href={project.open}
                      onClick={() =>
                        trackEvent(
                          `Project Link (Demo): ${Object.keys(projectData)[i]}`,
                          'link'
                        )
                      }
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
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;
