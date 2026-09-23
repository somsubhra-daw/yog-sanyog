import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

export const AboutPage: React.FC = () => {
  usePageMeta({
    title: 'About Studio & Instructors',
    description: 'Learn about YOG SANYOG studio tradition and certified yoga instructors.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">About YOG SANYOG</h1>
      <p className="text-ink-muted text-lg">Classical Ashtanga, Hatha, and Pranayama tradition in West Bengal.</p>
    </div>
  );
};
