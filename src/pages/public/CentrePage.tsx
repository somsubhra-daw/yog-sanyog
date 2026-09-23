import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { content } from '@/content';

export const CentrePage: React.FC = () => {
  usePageMeta({
    title: 'Offline Studio Centre | Salt Lake, Kolkata',
    description: 'Visit our offline yoga studio centre in Salt Lake, Kolkata, West Bengal.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">{content.centre.title}</h1>
      <p className="text-ink-muted text-lg">{content.centre.address}</p>
    </div>
  );
};
