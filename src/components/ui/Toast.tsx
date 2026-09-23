import React, { useState, useCallback } from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToastContext, ToastItem } from './ToastContext';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(({ type, title, message }: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      {/* Accessible Toast Container with aria-live */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-4 pointer-events-none"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              'pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-elevated border transition-all duration-300 animate-in fade-in slide-in-from-bottom-2',
              t.type === 'success' && 'bg-semantic-success-bg border-semantic-success/20 text-semantic-success',
              t.type === 'error' && 'bg-semantic-danger-bg border-semantic-danger/20 text-semantic-danger',
              t.type === 'warning' && 'bg-semantic-warning-bg border-semantic-warning/20 text-semantic-warning',
              t.type === 'info' && 'bg-semantic-info-bg border-semantic-info/20 text-semantic-info'
            )}
          >
            <div className="shrink-0 mt-0.5">
              {t.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
              {t.type === 'error' && <AlertCircle className="w-5 h-5" />}
              {t.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {t.type === 'info' && <Info className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm leading-tight">{t.title}</h4>
              {t.message && <p className="text-xs opacity-90 mt-1 leading-relaxed">{t.message}</p>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="shrink-0 p-1 rounded-lg hover:bg-black/5 min-h-touch min-w-touch flex items-center justify-center -mr-1 -mt-1 text-current opacity-70 hover:opacity-100"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
