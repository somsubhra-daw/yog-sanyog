import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const ForgotPasswordPage: React.FC = () => {
  usePageMeta({ title: 'Forgot Password' });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif font-bold text-2xl text-ink-primary">Reset Password</h2>
      <p className="text-sm text-ink-muted">Enter your registered email to receive password reset instructions.</p>
    </div>
  );
};

export const AcceptInvitePage: React.FC = () => {
  usePageMeta({ title: 'Accept Invite' });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif font-bold text-2xl text-ink-primary">Accept Studio Invite</h2>
      <p className="text-sm text-ink-muted">Set up your password to activate your student portal access.</p>
    </div>
  );
};
