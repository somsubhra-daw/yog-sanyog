import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, leftIcon, rightIcon, type = 'text', ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <div className="absolute left-3.5 text-ink-muted pointer-events-none shrink-0">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'w-full min-h-touch px-4 py-2.5 bg-white border border-surface-border rounded-xl text-ink-primary text-sm placeholder:text-ink-muted transition-colors focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 disabled:bg-surface-muted disabled:cursor-not-allowed',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            error && 'border-semantic-danger focus:border-semantic-danger focus:ring-semantic-danger',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3.5 text-ink-muted shrink-0">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
