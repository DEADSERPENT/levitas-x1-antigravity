'use client';

import { forwardRef, HTMLAttributes } from 'react';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  glowColor?: 'cyan' | 'violet' | 'green' | 'blue';
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: `
    bg-gradient-to-br from-[#111827] to-[#0d1321]
    border border-[rgba(0,240,255,0.2)]
  `,
  elevated: `
    bg-gradient-to-br from-[#111827] to-[#0d1321]
    border border-[rgba(0,240,255,0.2)]
    shadow-lg shadow-black/20
  `,
  outlined: `
    bg-transparent
    border border-[rgba(0,240,255,0.3)]
  `,
  glass: `
    bg-[rgba(17,24,39,0.6)]
    backdrop-blur-xl
    border border-[rgba(0,240,255,0.15)]
  `,
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const glowColors = {
  cyan: 'hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
  violet: 'hover:border-[#a855f7] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  green: 'hover:border-[#22c55e] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
  blue: 'hover:border-[#3b82f6] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
};

const baseStyles = `
  relative
  rounded-lg
  overflow-hidden
  transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
  will-change-transform
`;

const hoverStyles = `
  hover:-translate-y-1.5
  hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hoverable = true,
      glowColor = 'cyan',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${hoverable ? hoverStyles : ''}
      ${hoverable ? glowColors[glowColor] : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {/* Hover overlay effect */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br from-transparent to-[rgba(0,240,255,0.05)]
            opacity-0
            transition-opacity duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
            pointer-events-none
            group-hover:opacity-100
          "
          aria-hidden="true"
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components for structured content
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mb-4 ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className = '', children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`
      font-[family-name:var(--font-orbitron)]
      text-xl font-semibold
      text-[#f8fafc]
      ${className}
    `.replace(/\s+/g, ' ').trim()}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className = '', children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-[#94a3b8] ${className}`.trim()}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mt-6 pt-6 border-t border-[rgba(0,240,255,0.1)] ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';

export default Card;
