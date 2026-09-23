import React from 'react';
import { FolderOpen } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 md:p-12 text-center bg-surface-card rounded-2xl border border-dashed border-surface-border',
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-surface-muted text-ink-muted flex items-center justify-center mb-4">
        {icon || <FolderOpen className="w-7 h-7" />}
      </div>
      <h3 className="font-serif font-semibold text-xl text-ink-primary">{title}</h3>
      <p className="text-sm text-ink-muted max-w-sm mt-1 mb-6 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
