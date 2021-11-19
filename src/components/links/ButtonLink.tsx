import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from 'components/links/UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-2 px-4 inline-block rounded font-bold animated-underline',
        'border shadow-sm',
        'focus:outline-none',
        {
          'bg-dark text-on-primary border-gray-600 focus-visible:text-on-primary':
            variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 border-gray-400 focus-visible:text-dark':
            variant === 'light',
          'bg-primary-darker text-green-bright hover:bg-primary-lighter border-green-bright focus-visible:text-green-bright':
            variant === 'primary',
        },
        className
      )}
      style={
        variant === 'light'
          ? ({
              '--secondary-lighter': '#222',
              '--secondary-lightest': '#222',
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </UnstyledLink>
  );
}
