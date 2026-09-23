import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  children,
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

  const positionStyles = {
    right: 'inset-y-0 right-0 w-full max-w-xs sm:max-w-md animate-in slide-in-from-right duration-300',
    left: 'inset-y-0 left-0 w-full max-w-xs sm:max-w-md animate-in slide-in-from-left duration-300',
    bottom: 'inset-x-0 bottom-0 max-h-[85dvh] rounded-t-2xl animate-in slide-in-from-bottom duration-300',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={cn(
          'fixed bg-surface-card border-surface-border shadow-elevated flex flex-col overflow-hidden',
          positionStyles[position]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border">
          {title ? (
            <h3 className="font-serif font-semibold text-lg text-ink-primary">{title}</h3>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="p-2 text-ink-muted hover:text-ink-primary rounded-lg hover:bg-surface-muted transition-colors min-h-touch min-w-touch flex items-center justify-center"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
};
