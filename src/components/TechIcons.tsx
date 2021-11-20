import clsx from 'clsx';
import * as React from 'react';

import Tooltip from 'components/Tooltip';
import { techList } from 'constants/data';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  iconClassName?: string;
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({
  className,
  iconClassName,
  techs,
}: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li
              className={clsx(
                iconClassName,
                'transition-colors text-secondary hover:text-green-bright'
              )}
            >
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}
