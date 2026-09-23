import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/ui/PageHeader';

export const StudentOverviewPage: React.FC = () => {
  usePageMeta({ title: 'Student Dashboard' });

  return (
    <div>
      <PageHeader
        title="Student Overview"
        subtitle="View your assigned batch, fee status, and announcements."
      />
    </div>
  );
};
