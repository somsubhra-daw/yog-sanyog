import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Flower2, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { content } from '@/content';
import { Button } from '@/components/ui/Button';
import { Drawer } from '@/components/ui/Drawer';
import { DevRoleSwitcher } from '@/components/DevRoleSwitcher';
import { UserRole } from '@/types';

interface PublicLayoutProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({
  currentRole,
  onRoleChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: content.nav.home },
    { href: '/about', label: content.nav.about },
    { href: '/centre', label: content.nav.centre },
    { href: '/courses', label: content.nav.courses },
    { href: '/contact', label: content.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-dvh flex flex-col bg-surface-base text-ink-primary font-sans">
      {/* Top Banner Announcement Strip */}
      <div className="bg-brand-500 text-white text-xs font-medium py-2 px-4 text-center flex items-center justify-center gap-2">
        <span>🧘 New Offline Morning & Evening Batches starting next week in Salt Lake, Kolkata!</span>
        <Link to="/centre" className="underline underline-offset-2 hover:text-brand-200">
          Learn More
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-surface-base/90 backdrop-blur-md border-b border-surface-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark Logo */}
          <Link to="/" className="flex items-center gap-3 group min-h-touch">
            <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <Flower2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-ink-primary group-hover:text-brand-500 transition-colors">
                {content.brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-muted -mt-1 font-semibold">
                Studio & Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 min-h-touch flex items-center ${
                  isActive(link.href)
                    ? 'text-brand-500 font-semibold border-b-2 border-brand-500 py-1'
                    : 'text-ink-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            {currentRole === 'visitor' ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    {content.nav.login}
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    {content.nav.signup}
                  </Button>
                </Link>
              </>
            ) : currentRole === 'student' ? (
              <Link to="/student">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {content.nav.dashboard}
                </Button>
              </Link>
            ) : (
              <Link to="/admin">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {content.nav.admin}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-ink-primary hover:bg-surface-muted rounded-xl min-h-touch min-w-touch flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <Drawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Menu"
        position="right"
      >
        <div className="flex flex-col gap-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-touch flex items-center ${
                  isActive(link.href)
                    ? 'bg-brand-50 text-brand-500 font-semibold'
                    : 'text-ink-primary hover:bg-surface-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-surface-border flex flex-col gap-3">
            {currentRole === 'visitor' ? (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    {content.nav.login}
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    {content.nav.signup}
                  </Button>
                </Link>
              </>
            ) : currentRole === 'student' ? (
              <Link to="/student" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Go to Student Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Go to Admin Panel
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Drawer>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-ink-primary text-surface-base pt-16 pb-12 border-t border-ink-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand Story */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                  <Flower2 className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-xl tracking-tight text-white">
                  {content.brand.name}
                </span>
              </div>
              <p className="text-sm text-surface-border/80 leading-relaxed">
                {content.brand.tagline}
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-300">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{content.centre.address}</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="font-serif font-semibold text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-surface-border/80">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="hover:text-brand-300 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offline Centre Info */}
            <div>
              <h4 className="font-serif font-semibold text-lg text-white mb-4">Studio Centre</h4>
              <ul className="space-y-3 text-sm text-surface-border/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                  <span>Salt Lake, Sector III, Kolkata</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{content.centre.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>info@yogsanyog.com</span>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-serif font-semibold text-lg text-white mb-4">Legal & Policies</h4>
              <ul className="space-y-2.5 text-sm text-surface-border/80">
                <li>
                  <Link to="/privacy" className="hover:text-brand-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-brand-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:text-brand-300 transition-colors">
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-border/60">
            <p>{content.brand.copyright}</p>
            <p>Designed for holistic wellness & mindful learning.</p>
          </div>
        </div>
      </footer>

      {/* Floating Dev Role Switcher */}
      <DevRoleSwitcher currentRole={currentRole} onRoleChange={onRoleChange} />
    </div>
  );
};
