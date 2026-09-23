import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      aria-describedby={description ? 'dialog-description' : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={cn(
          'w-full bg-surface-card rounded-2xl border border-surface-border shadow-elevated p-6 overflow-hidden transition-all transform scale-100',
          maxWidthClasses[maxWidth]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-border">
          <div>
            {title && (
              <h2 id="dialog-title" className="font-serif font-semibold text-xl text-ink-primary">
                {title}
              </h2>
            )}
            {description && (
              <p id="dialog-description" className="text-sm text-ink-muted mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ink-muted hover:text-ink-primary rounded-lg hover:bg-surface-muted transition-colors min-h-touch min-w-touch flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};
