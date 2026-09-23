import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Flower2, ArrowLeft } from 'lucide-react';
import { content } from '@/content';
import { DevRoleSwitcher } from '@/components/DevRoleSwitcher';
import { UserRole } from '@/types';

interface AuthLayoutProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  currentRole,
  onRoleChange,
}) => {
  return (
    <div className="min-h-dvh flex flex-col justify-between bg-surface-base text-ink-primary font-sans p-4 sm:p-6 lg:p-8">
      {/* Top Header Link */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-brand-500 transition-colors min-h-touch">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-soft">
            <Flower2 className="w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-lg text-ink-primary">
            {content.brand.name}
          </span>
        </Link>
      </div>

      {/* Main Form Center Box */}
      <main className="flex-1 flex items-center justify-center my-8">
        <div className="w-full max-w-md bg-surface-card rounded-2xl border border-surface-border shadow-elevated p-6 sm:p-8">
          <Outlet />
        </div>
      </main>

      {/* Footer copyright */}
      <div className="text-center text-xs text-ink-muted">
        {content.brand.copyright}
      </div>

      {/* Floating Dev Role Switcher */}
      <DevRoleSwitcher currentRole={currentRole} onRoleChange={onRoleChange} />
    </div>
  );
};
