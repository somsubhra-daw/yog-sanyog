import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, error, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        <select
          ref={ref}
          className={cn(
            'w-full min-h-touch px-4 py-2.5 pr-10 bg-white border border-surface-border rounded-xl text-ink-primary text-sm appearance-none transition-colors focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 disabled:bg-surface-muted disabled:cursor-not-allowed',
            error && 'border-semantic-danger focus:border-semantic-danger focus:ring-semantic-danger',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3.5 w-4 h-4 text-ink-muted pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = 'Select';
