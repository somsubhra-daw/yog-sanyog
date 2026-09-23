import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full p-4 bg-white border border-surface-border rounded-xl text-ink-primary text-sm placeholder:text-ink-muted transition-colors focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 disabled:bg-surface-muted disabled:cursor-not-allowed resize-y',
          error && 'border-semantic-danger focus:border-semantic-danger focus:ring-semantic-danger',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
