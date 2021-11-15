import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import * as Scroll from 'react-scroll';

export type UnstyledLinkProps = {
  activeClass?: string;
  isScrollLink?: boolean;
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  activeClass,
  isScrollLink,
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab ?? (href && !href.startsWith('/') && !href.startsWith('#'));

  if (!isNewTab) {
    if (isScrollLink) {
      return (
        <Scroll.Link
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to={href}
          className={className}
          activeClass={activeClass}
        >
          {children}
        </Scroll.Link>
      );
    }
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
      className={clsx(className, 'cursor-newtab')}
    >
      {children}
    </a>
  );
}
