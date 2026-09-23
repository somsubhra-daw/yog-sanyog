import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  pageSize?: number;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  pageSize = 5,
  emptyMessage = 'No data available',
  className,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortOrder === 'asc') setSortOrder('desc');
      else {
        setSortKey(null);
        setSortOrder('asc');
      }
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const valA = String(a[sortKey] ?? '');
      const valB = String(b[sortKey] ?? '');
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={cn('flex flex-col gap-4 w-full', className)}>
      {/* Desktop Table View (>= 768px) */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-surface-border bg-surface-card shadow-soft">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-surface-muted border-b border-surface-border text-ink-muted font-medium">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={cn(
                    'p-4 select-none',
                    col.sortable && 'cursor-pointer hover:text-ink-primary'
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span className="shrink-0">
                        {sortKey === col.key ? (
                          sortOrder === 'asc' ? (
                            <ChevronUp className="w-4 h-4 text-brand-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-brand-500" />
                          )
                        ) : (
                          <ChevronUp className="w-4 h-4 opacity-30" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center text-ink-muted">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <tr key={keyExtractor(item)} className="hover:bg-surface-muted/50 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="p-4 text-ink-primary">
                      {col.render ? col.render(item) : (item[col.key] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View (< 768px) */}
      <div className="md:hidden flex flex-col gap-3">
        {paginatedData.length === 0 ? (
          <div className="p-6 text-center text-ink-muted bg-surface-card rounded-2xl border border-surface-border">
            {emptyMessage}
          </div>
        ) : (
          paginatedData.map((item) => (
            <div
              key={keyExtractor(item)}
              className="p-4 bg-surface-card rounded-2xl border border-surface-border shadow-soft flex flex-col gap-2.5"
            >
              {columns.map((col) => (
                <div key={col.key} className="flex items-center justify-between gap-2 text-sm border-b border-surface-border/50 pb-2 last:border-0 last:pb-0">
                  <span className="font-semibold text-ink-muted text-xs uppercase tracking-wider">{col.header}:</span>
                  <span className="text-ink-primary font-medium text-right">
                    {col.render ? col.render(item) : (item[col.key] as React.ReactNode)}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-4 pt-2">
          <span className="text-xs text-ink-muted">
            Page <strong className="text-ink-primary">{currentPage}</strong> of <strong className="text-ink-primary">{totalPages}</strong>
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
