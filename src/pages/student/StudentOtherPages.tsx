import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/ui/PageHeader';

export const StudentBatchPage: React.FC = () => {
  usePageMeta({ title: 'My Batch' });
  return (
    <div>
      <PageHeader title="Batch Details" subtitle="Timings, instructor, and attendance schedule." />
    </div>
  );
};

export const StudentFeesPage: React.FC = () => {
  usePageMeta({ title: 'Fee Dues & Status' });
  return (
    <div>
      <PageHeader title="Fee Summary" subtitle="Total paid, current dues, and payment options." />
    </div>
  );
};

export const StudentPaymentsPage: React.FC = () => {
  usePageMeta({ title: 'Payment History' });
  return (
    <div>
      <PageHeader title="Payment History" subtitle="Receipts and payment history logs." />
    </div>
  );
};

export const StudentAnnouncementsPage: React.FC = () => {
  usePageMeta({ title: 'Announcements' });
  return (
    <div>
      <PageHeader title="Centre Announcements" subtitle="Studio notices and batch updates." />
    </div>
  );
};

export const StudentProfilePage: React.FC = () => {
  usePageMeta({ title: 'Profile Settings' });
  return (
    <div>
      <PageHeader title="Profile Settings" subtitle="Update phone number, address, and password." />
    </div>
  );
};
