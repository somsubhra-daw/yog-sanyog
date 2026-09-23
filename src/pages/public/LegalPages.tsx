import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const PrivacyPolicyPage: React.FC = () => {
  usePageMeta({ title: 'Privacy Policy' });
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif font-bold text-3xl mb-4">Privacy Policy</h1>
      <p className="text-ink-muted text-sm bg-surface-muted p-4 rounded-xl border border-surface-border">
        [REPLACE WITH REVIEWED TEXT] Privacy policy guidelines detailing student data protection, cookies, and payment information security.
      </p>
    </div>
  );
};

export const TermsOfServicePage: React.FC = () => {
  usePageMeta({ title: 'Terms of Service' });
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif font-bold text-3xl mb-4">Terms of Service</h1>
      <p className="text-ink-muted text-sm bg-surface-muted p-4 rounded-xl border border-surface-border">
        [REPLACE WITH REVIEWED TEXT] Terms governing offline batch attendance, online course access, and studio policies.
      </p>
    </div>
  );
};

export const RefundPolicyPage: React.FC = () => {
  usePageMeta({ title: 'Refund Policy' });
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif font-bold text-3xl mb-4">Refund & Cancellation Policy</h1>
      <p className="text-ink-muted text-sm bg-surface-muted p-4 rounded-xl border border-surface-border">
        [REPLACE WITH REVIEWED TEXT] Cancellation rules for online digital purchases and monthly offline centre fee refunds.
      </p>
    </div>
  );
};
