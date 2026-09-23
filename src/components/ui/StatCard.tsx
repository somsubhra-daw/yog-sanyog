import React from 'react';
import { Card } from './Card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  changeType = 'neutral',
  icon,
  className,
}) => {
  return (
    <Card className={cn('flex items-center justify-between p-6', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {label}
        </span>
        <span className="font-serif font-bold text-2xl md:text-3xl text-ink-primary">
          {value}
        </span>
        {change && (
          <span
            className={cn(
              'text-xs font-medium mt-1 inline-flex items-center gap-1',
              changeType === 'positive' && 'text-semantic-success',
              changeType === 'negative' && 'text-semantic-danger',
              changeType === 'neutral' && 'text-ink-muted'
            )}
          >
            {change}
          </span>
        )}
      </div>
      {icon && (
        <div className="w-12 h-12 rounded-2xl bg-surface-muted text-brand-500 flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
    </Card>
  );
};
