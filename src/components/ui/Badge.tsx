import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors';

  const variants = {
    default: 'bg-surface-muted text-ink-secondary border border-surface-border',
    success: 'bg-semantic-success-bg text-semantic-success border border-semantic-success/20',
    warning: 'bg-semantic-warning-bg text-semantic-warning border border-semantic-warning/20',
    danger: 'bg-semantic-danger-bg text-semantic-danger border border-semantic-danger/20',
    accent: 'bg-sage-100 text-sage-800 border border-sage-300',
    outline: 'border border-ink-border text-ink-primary bg-transparent',
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
