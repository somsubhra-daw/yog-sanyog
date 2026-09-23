import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-medium text-ink-primary flex items-center gap-1">
          {label}
          {required && <span className="text-semantic-danger font-bold">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-xs text-ink-muted leading-normal">{hint}</p>}
      {error && <p className="text-xs text-semantic-danger font-medium leading-normal">{error}</p>}
    </div>
  );
};
