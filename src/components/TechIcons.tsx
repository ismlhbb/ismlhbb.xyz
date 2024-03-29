import clsx from 'clsx';
import * as React from 'react';

import Tooltip from 'components/Tooltip';
import { techList } from 'constants/data';

import FadeInSection from './FadeInSection';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  iconClassName?: string;
  techs: Array<TechListType>;
  fadeInSection?: boolean;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({
  className,
  iconClassName,
  techs,
  fadeInSection = false,
}: TechIconsProps) {
  return (
    <div className={clsx(className, 'grid grid-cols-9')}>
      {techs.map((tech, i) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <FadeInSection
              delay={`${(i + 1) * 2}0ms`}
              disabled={!fadeInSection}
            >
              <div
                className={clsx(
                  iconClassName,
                  'transition-colors text-secondary-lighter hover:text-green-bright'
                )}
              >
                <current.icon />
              </div>
            </FadeInSection>
          </Tooltip>
        );
      })}
    </div>
  );
}
