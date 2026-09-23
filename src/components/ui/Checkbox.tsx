import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, checked, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none min-h-touch py-1',
          disabled && 'cursor-not-allowed opacity-60',
          className
        )}
      >
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            ref={ref}
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 rounded-md border border-surface-border bg-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-500 peer-focus-visible:ring-offset-1 peer-checked:bg-brand-500 peer-checked:border-brand-500 flex items-center justify-center text-white',
              error && 'border-semantic-danger'
            )}
          >
            <Check className="w-3.5 h-3.5 stroke-[3] opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        {label && <span className="text-sm text-ink-primary font-medium">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
