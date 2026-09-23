import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PageHeader } from '@/components/ui/PageHeader';

export const AdminStudentsPage: React.FC = () => {
  usePageMeta({ title: 'Student Roster | Admin' });
  return (
    <div>
      <PageHeader title="Student Roster" subtitle="Manage student enrollment, invitations, and active statuses." />
    </div>
  );
};

export const AdminBatchesPage: React.FC = () => {
  usePageMeta({ title: 'Batches | Admin' });
  return (
    <div>
      <PageHeader title="Batch Management" subtitle="Create and modify batch schedules, capacities, and instructors." />
    </div>
  );
};

export const AdminFeesPage: React.FC = () => {
  usePageMeta({ title: 'Fee Dues | Admin' });
  return (
    <div>
      <PageHeader title="Fee Tracking & Receipts" subtitle="Record payments, monitor overdue dues, and issue receipts." />
    </div>
  );
};

export const AdminCoursesPage: React.FC = () => {
  usePageMeta({ title: 'Course Catalog | Admin' });
  return (
    <div>
      <PageHeader title="Online Course Catalog" subtitle="Manage video courses, price points, and lesson ordering." />
    </div>
  );
};

export const AdminOrdersPage: React.FC = () => {
  usePageMeta({ title: 'Online Orders | Admin' });
  return (
    <div>
      <PageHeader title="Online Course Orders" subtitle="Track course purchases and student access provisions." />
    </div>
  );
};

export const AdminAnnouncementsPage: React.FC = () => {
  usePageMeta({ title: 'Announcements | Admin' });
  return (
    <div>
      <PageHeader title="Broadcast Announcements" subtitle="Publish notices to all students or specific offline batches." />
    </div>
  );
};

export const AdminLeadsPage: React.FC = () => {
  usePageMeta({ title: 'Incoming Enquiries | Admin' });
  return (
    <div>
      <PageHeader title="Website Enquiries & Leads" subtitle="Review and respond to contact form submissions." />
    </div>
  );
};
