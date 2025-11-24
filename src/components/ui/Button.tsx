'use client';

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'link';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-[#00f0ff] to-[#3b82f6]
    text-[#050810]
    border-none
    hover:shadow-[0_0_30px_rgba(0,240,255,0.5),0_0_60px_rgba(0,240,255,0.3),0_10px_30px_rgba(0,240,255,0.3)]
    hover:-translate-y-[3px]
    active:-translate-y-[1px]
  `,
  secondary: `
    bg-transparent
    text-[#00f0ff]
    border border-[#00f0ff]
    hover:bg-[rgba(0,240,255,0.1)]
    hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]
    hover:-translate-y-[2px]
    active:translate-y-0
  `,
  outline: `
    bg-transparent
    text-[#f8fafc]
    border border-[rgba(0,240,255,0.2)]
    hover:border-[#00f0ff]
    hover:text-[#00f0ff]
  `,
  ghost: `
    bg-transparent
    text-[#94a3b8]
    border-none
    hover:text-[#00f0ff]
    hover:bg-[rgba(0,240,255,0.05)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

const baseStyles = `
  inline-flex items-center justify-center
  font-[family-name:var(--font-orbitron)]
  font-semibold
  uppercase
  tracking-[0.1em]
  rounded
  cursor-pointer
  relative
  overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
  will-change-transform
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  focus-visible:outline-2 focus-visible:outline-[#00f0ff] focus-visible:outline-offset-2
`;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (props.as === 'link') {
      const { as, href, ...linkProps } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    const { as, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={isLoading || buttonProps.disabled}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
