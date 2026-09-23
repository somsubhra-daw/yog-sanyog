import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const SignupPage: React.FC = () => {
  usePageMeta({ title: 'Join Academy' });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif font-bold text-2xl text-ink-primary">Create an account</h2>
      <p className="text-sm text-ink-muted">Join our digital academy to purchase and learn online courses.</p>
    </div>
  );
};
