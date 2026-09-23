import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/ui/PageHeader';

export const AdminDashboardPage: React.FC = () => {
  usePageMeta({ title: 'Admin Overview' });

  return (
    <div>
      <PageHeader
        title="Admin Overview"
        subtitle="Manage studio students, revenue metrics, batch capacities, and enquiries."
      />
    </div>
  );
};
