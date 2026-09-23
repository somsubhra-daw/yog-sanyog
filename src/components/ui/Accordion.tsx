import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('flex flex-col divide-y divide-surface-border border border-surface-border rounded-2xl overflow-hidden bg-surface-card', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="transition-colors">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-ink-primary hover:bg-surface-muted transition-colors min-h-touch"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg">{item.title}</span>
              <ChevronDown
                className={cn('w-5 h-5 text-ink-muted transition-transform duration-200 shrink-0 ml-4', isOpen && 'rotate-180')}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-ink-secondary leading-relaxed animate-in fade-in duration-150">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
