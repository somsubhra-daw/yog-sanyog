import { createContext } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

export interface ToastContextValue {
  toast: (item: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);
