import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  usePageMeta({
    title: slug ? `Course Details: ${slug}` : 'Course Details',
    description: 'Detailed syllabus, overview, instructor details, and enrollment.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif font-bold text-3xl text-ink-primary mb-4">Course Detail: {slug}</h1>
    </div>
  );
};
