import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const ContactPage: React.FC = () => {
  usePageMeta({
    title: 'Contact Us & Enquiries',
    description: 'Get in touch with YOG SANYOG team for offline batches or online courses.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">Contact Studio</h1>
    </div>
  );
};
