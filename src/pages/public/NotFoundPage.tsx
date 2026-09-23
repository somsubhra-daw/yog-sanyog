import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  usePageMeta({ title: '404 - Page Not Found' });

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center flex flex-col items-center">
      <span className="font-serif font-bold text-6xl text-brand-500 mb-2">404</span>
      <h1 className="font-serif font-bold text-2xl text-ink-primary mb-2">Page Not Found</h1>
      <p className="text-ink-muted text-sm mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary">Return to Homepage</Button>
      </Link>
    </div>
  );
};
