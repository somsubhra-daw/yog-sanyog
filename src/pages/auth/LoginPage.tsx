import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const LoginPage: React.FC = () => {
  usePageMeta({ title: 'Log In' });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif font-bold text-2xl text-ink-primary">Sign in to your account</h2>
      <p className="text-sm text-ink-muted">Access your online courses or student dashboard.</p>
    </div>
  );
};
