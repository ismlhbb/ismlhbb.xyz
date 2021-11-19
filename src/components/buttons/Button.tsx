import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'py-2 px-4 rounded font-bold',
        'border shadow-sm',
        'focus:outline-none',
        {
          'bg-dark text-on-primary disabled:bg-gray-700 border-gray-600 focus-visible:text-on-primary':
            variant === 'dark',
          'bg-white text-dark disabled:bg-gray-200 hover:bg-gray-200 border-gray-400 focus-visible:text-dark':
            variant === 'light',
          'bg-primary-darker text-green-bright disabled:bg-primary border-green-bright hover:bg-primary-lighter disabled:brightness-75 focus-visible:text-green-bright':
            variant === 'primary',
        },
        'disabled:cursor-not-allowed',
        !disabled && 'animated-underline',
        isLoading &&
          'relative !text-transparent hover:!text-transparent !cursor-wait transition-none',
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
      {isLoading && (
        <div
          className={clsx(
            'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
            variant !== 'primary' ? 'text-black' : 'text-on-primary'
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}
