import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultTabId, className }) => {
  const [activeId, setActiveId] = useState<string>(defaultTabId || items[0]?.id || '');

  const activeTab = items.find((item) => item.id === activeId);

  return (
    <div className={cn('flex flex-col w-full', className)}>
      <div className="flex border-b border-surface-border overflow-x-auto no-scrollbar gap-2">
        {items.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-3 font-medium text-sm border-b-2 transition-colors whitespace-nowrap min-h-touch',
                isActive
                  ? 'border-brand-500 text-brand-500 font-semibold'
                  : 'border-transparent text-ink-muted hover:text-ink-primary hover:border-surface-border'
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="pt-6">{activeTab?.content}</div>
    </div>
  );
};
