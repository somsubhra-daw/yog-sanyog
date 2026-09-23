import React from 'react';
import { Dialog } from './Dialog';
import { Button } from './Button';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDanger?: boolean;
  isLoading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDanger = false,
  isLoading = false,
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title} maxWidth="sm">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-ink-secondary leading-relaxed">{message}</p>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-surface-border">
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            {cancelLabel}
          </Button>
          <Button
            variant={isDanger ? 'danger' : 'primary'}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
