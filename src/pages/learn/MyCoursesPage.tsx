import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/ui/PageHeader';

export const MyCoursesPage: React.FC = () => {
  usePageMeta({ title: 'My Enrolled Courses' });

  return (
    <div>
      <PageHeader title="My Online Courses" subtitle="Track video lessons and PDF guides progress." />
    </div>
  );
};

export const CoursePlayerPage: React.FC = () => {
  usePageMeta({ title: 'Course Player' });

  return (
    <div>
      <PageHeader title="Course Player" subtitle="Interactive video player and lesson sidebar." />
    </div>
  );
};
