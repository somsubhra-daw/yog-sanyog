import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { content } from '@/content';

export const CoursesPage: React.FC = () => {
  usePageMeta({
    title: 'Online Yoga Courses & Modules',
    description: 'Explore video yoga courses and downloadable PDF guides.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">{content.courses.title}</h1>
      <p className="text-ink-muted text-lg">{content.courses.subtitle}</p>
    </div>
  );
};
