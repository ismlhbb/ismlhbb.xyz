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
        'py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600 shadow-sm',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white': variant === 'dark',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
            variant === 'light',
          'bg-primary-darker border-green-bright text-green-bright hover:bg-primary-lighter focus-visible:text-on-primary':
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
