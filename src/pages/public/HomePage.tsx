import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { content } from '@/content';

export const HomePage: React.FC = () => {
  usePageMeta({
    title: 'Authentic Yoga Studio & Online Academy',
    description: content.home.heroSubtitle,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">
        {content.home.heroTitle}
      </h1>
      <p className="text-ink-muted text-lg">{content.home.heroSubtitle}</p>
    </div>
  );
};
