import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  History,
  Bell,
  User,
  BookOpen,
  LogOut,
  Menu,
  Flower2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Drawer } from '@/components/ui/Drawer';
import { DevRoleSwitcher } from '@/components/DevRoleSwitcher';
import { UserRole } from '@/types';
import { cn } from '@/lib/utils';

interface StudentLayoutProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const StudentLayout: React.FC<StudentLayoutProps> = ({
  currentRole,
  onRoleChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const studentNav = [
    { href: '/student', label: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/student/batch', label: 'My Batch', icon: <Users className="w-5 h-5" /> },
    { href: '/student/fees', label: 'Fee Dues', icon: <CreditCard className="w-5 h-5" /> },
    { href: '/student/payments', label: 'Payment History', icon: <History className="w-5 h-5" /> },
    { href: '/student/announcements', label: 'Announcements', icon: <Bell className="w-5 h-5" /> },
    { href: '/learn', label: 'Online Courses', icon: <BookOpen className="w-5 h-5" /> },
    { href: '/student/profile', label: 'Profile Settings', icon: <User className="w-5 h-5" /> },
  ];

  const bottomNav = [
    { href: '/student', label: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/student/batch', label: 'Batch', icon: <Users className="w-5 h-5" /> },
    { href: '/student/fees', label: 'Fees', icon: <CreditCard className="w-5 h-5" /> },
    { href: '/learn', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { href: '/student/profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    onRoleChange('visitor');
    navigate('/');
  };

  return (
    <div className="min-h-dvh flex bg-surface-base text-ink-primary font-sans">
      {/* Desktop Sidebar (>= 1024px) */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-surface-border bg-surface-card p-6 fixed inset-y-0 z-30">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center">
            <Flower2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-ink-primary">YOG SANYOG</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-500 font-semibold">Student Portal</span>
          </div>
        </Link>

        {/* User Card */}
        <div className="p-3 bg-surface-muted rounded-xl mb-6 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
            AP
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-ink-primary truncate">Ananya Patel</span>
            <span className="text-xs text-ink-muted truncate">Morning Hatha Batch</span>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
          {studentNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-touch',
                isActive(item.href)
                  ? 'bg-brand-500 text-white font-semibold shadow-sm'
                  : 'text-ink-secondary hover:bg-surface-muted hover:text-ink-primary'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="pt-4 border-t border-surface-border">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-semantic-danger hover:bg-semantic-danger-bg"
            leftIcon={<LogOut className="w-5 h-5" />}
          >
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-dvh pb-20 lg:pb-0">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-surface-base/90 backdrop-blur border-b border-surface-border px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-ink-primary hover:bg-surface-muted rounded-xl min-h-touch min-w-touch flex items-center justify-center"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-serif font-bold text-xl text-ink-primary hidden sm:block">
              Student Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs font-medium text-brand-500 hover:underline">
              ← Back to Main Website
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <Drawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          title="Student Menu"
          position="left"
        >
          <div className="flex flex-col gap-4">
            <div className="p-3 bg-surface-muted rounded-xl flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
                AP
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-ink-primary">Ananya Patel</span>
                <span className="text-xs text-ink-muted">Morning Hatha Batch</span>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {studentNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-touch',
                    isActive(item.href)
                      ? 'bg-brand-500 text-white font-semibold'
                      : 'text-ink-secondary hover:bg-surface-muted'
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-surface-border">
              <Button
                variant="ghost"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="w-full justify-start text-semantic-danger hover:bg-semantic-danger-bg"
                leftIcon={<LogOut className="w-5 h-5" />}
              >
                Log Out
              </Button>
            </div>
          </div>
        </Drawer>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation (< 1024px) */}
        <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface-card/95 backdrop-blur border-t border-surface-border px-2 py-1 flex items-center justify-around">
          {bottomNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-[10px] font-medium transition-colors min-h-touch min-w-[56px]',
                isActive(item.href)
                  ? 'text-brand-500 font-bold'
                  : 'text-ink-muted hover:text-ink-primary'
              )}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Floating Dev Role Switcher */}
      <DevRoleSwitcher currentRole={currentRole} onRoleChange={onRoleChange} />
    </div>
  );
};
