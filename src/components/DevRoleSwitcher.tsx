import React, { useState } from 'react';
import { UserCheck, Shield, GraduationCap, Eye } from 'lucide-react';
import { UserRole } from '@/types';
import { cn } from '@/lib/utils';

interface DevRoleSwitcherProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const DevRoleSwitcher: React.FC<DevRoleSwitcherProps> = ({
  currentRole,
  onRoleChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Hide in production if VITE_DEV_TOOLS === 'false'
  if (import.meta.env.VITE_DEV_TOOLS === 'false') {
    return null;
  }

  const roles: { role: UserRole; label: string; icon: React.ReactNode }[] = [
    { role: 'visitor', label: 'Visitor (Public)', icon: <Eye className="w-4 h-4" /> },
    { role: 'student', label: 'Student (Offline/Online)', icon: <GraduationCap className="w-4 h-4" /> },
    { role: 'admin', label: 'Admin (Studio)', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isOpen ? (
        <div className="bg-ink-primary text-white p-4 rounded-2xl shadow-elevated border border-white/10 flex flex-col gap-3 min-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" /> Dev Role Switcher
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-white/60 hover:text-white"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {roles.map((r) => (
              <button
                key={r.role}
                onClick={() => {
                  onRoleChange(r.role);
                  setIsOpen(false);
                }}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left min-h-touch',
                  currentRole === r.role
                    ? 'bg-brand-500 text-white font-semibold'
                    : 'hover:bg-white/10 text-white/80'
                )}
              >
                {r.icon}
                <span>{r.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-ink-primary/90 hover:bg-ink-primary text-white text-xs font-medium shadow-elevated backdrop-blur border border-white/20 transition-all hover:scale-105 min-h-touch"
          aria-label="Open Dev Role Switcher"
        >
          <UserCheck className="w-4 h-4 text-brand-400" />
          <span>Role: <strong className="capitalize text-brand-300">{currentRole}</strong></span>
        </button>
      )}
    </div>
  );
};
