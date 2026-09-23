import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'We encountered an error while loading this data. Please try again.',
  onRetry,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center bg-semantic-danger-bg rounded-2xl border border-semantic-danger/20',
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-semantic-danger/10 text-semantic-danger flex items-center justify-center mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-semantic-danger">{title}</h3>
      <p className="text-sm text-semantic-danger/80 max-w-md mt-1 mb-5 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button variant="danger" size="sm" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};
