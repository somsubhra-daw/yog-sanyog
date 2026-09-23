import React from 'react';
import { cn } from '@/lib/utils';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  action?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  action,
  className,
}) => {
  return (
    <div className={cn('flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 mb-6 border-b border-surface-border', className)}>
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-ink-muted mb-2">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <a href={b.href} className="hover:text-brand-500 transition-colors">
                    {b.label}
                  </a>
                ) : (
                  <span className="text-ink-primary font-medium">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="font-serif font-bold text-2xl md:text-3xl text-ink-primary tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-ink-muted mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 flex items-center gap-3">{action}</div>}
    </div>
  );
};
