import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { ToastProvider } from '@/components/ui/Toast';
import { UserRole } from '@/types';
import { RequireAuth } from '@/components/RequireAuth';
import { Skeleton } from '@/components/ui/Skeleton';

// Layouts
import { PublicLayout } from '@/layouts/PublicLayout';
import { StudentLayout } from '@/layouts/StudentLayout';
import { AdminLayout } from '@/layouts/AdminLayout';
import { AuthLayout } from '@/layouts/AuthLayout';

// Lazy-loaded Public Pages
const HomePage = lazy(() => import('@/pages/public/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/public/AboutPage').then((m) => ({ default: m.AboutPage })));
const CentrePage = lazy(() => import('@/pages/public/CentrePage').then((m) => ({ default: m.CentrePage })));
const CoursesPage = lazy(() => import('@/pages/public/CoursesPage').then((m) => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('@/pages/public/CourseDetailPage').then((m) => ({ default: m.CourseDetailPage })));
const ContactPage = lazy(() => import('@/pages/public/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('@/pages/public/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Lazy-loaded Legal Pages
const PrivacyPolicyPage = lazy(() => import('@/pages/public/LegalPages').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('@/pages/public/LegalPages').then((m) => ({ default: m.TermsOfServicePage })));
const RefundPolicyPage = lazy(() => import('@/pages/public/LegalPages').then((m) => ({ default: m.RefundPolicyPage })));

// Lazy-loaded Auth Pages
const LoginPage = lazy(() => import('@/pages/auth/LoginPage').then((m) => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('@/pages/auth/SignupPage').then((m) => ({ default: m.SignupPage })));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })));
const AcceptInvitePage = lazy(() => import('@/pages/auth/ForgotPasswordPage').then((m) => ({ default: m.AcceptInvitePage })));

// Lazy-loaded Checkout Pages
const CheckoutPage = lazy(() => import('@/pages/checkout/CheckoutPage').then((m) => ({ default: m.CheckoutPage })));
const CheckoutSuccessPage = lazy(() => import('@/pages/checkout/CheckoutPage').then((m) => ({ default: m.CheckoutSuccessPage })));
const CheckoutFailedPage = lazy(() => import('@/pages/checkout/CheckoutPage').then((m) => ({ default: m.CheckoutFailedPage })));

// Lazy-loaded Student Pages
const StudentOverviewPage = lazy(() => import('@/pages/student/StudentOverviewPage').then((m) => ({ default: m.StudentOverviewPage })));
const StudentBatchPage = lazy(() => import('@/pages/student/StudentOtherPages').then((m) => ({ default: m.StudentBatchPage })));
const StudentFeesPage = lazy(() => import('@/pages/student/StudentOtherPages').then((m) => ({ default: m.StudentFeesPage })));
const StudentPaymentsPage = lazy(() => import('@/pages/student/StudentOtherPages').then((m) => ({ default: m.StudentPaymentsPage })));
const StudentAnnouncementsPage = lazy(() => import('@/pages/student/StudentOtherPages').then((m) => ({ default: m.StudentAnnouncementsPage })));
const StudentProfilePage = lazy(() => import('@/pages/student/StudentOtherPages').then((m) => ({ default: m.StudentProfilePage })));

// Lazy-loaded Learner Area
const MyCoursesPage = lazy(() => import('@/pages/learn/MyCoursesPage').then((m) => ({ default: m.MyCoursesPage })));
const CoursePlayerPage = lazy(() => import('@/pages/learn/MyCoursesPage').then((m) => ({ default: m.CoursePlayerPage })));

// Lazy-loaded Admin Pages
const AdminDashboardPage = lazy(() => import('@/pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));
const AdminStudentsPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminStudentsPage })));
const AdminBatchesPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminBatchesPage })));
const AdminFeesPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminFeesPage })));
const AdminCoursesPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminCoursesPage })));
const AdminOrdersPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminOrdersPage })));
const AdminAnnouncementsPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminAnnouncementsPage })));
const AdminLeadsPage = lazy(() => import('@/pages/admin/AdminPages').then((m) => ({ default: m.AdminLeadsPage })));

const PageLoadingFallback: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-6">
    <Skeleton className="h-10 w-1/3 rounded-xl" />
    <Skeleton className="h-6 w-2/3 rounded-lg" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Skeleton className="h-48 rounded-2xl" variant="rectangular" />
      <Skeleton className="h-48 rounded-2xl" variant="rectangular" />
      <Skeleton className="h-48 rounded-2xl" variant="rectangular" />
    </div>
  </div>
);

export function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>(() => {
    const saved = localStorage.getItem('yog_sanyog_role');
    return (saved as UserRole) || 'visitor';
  });

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    localStorage.setItem('yog_sanyog_role', role);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout currentRole={currentRole} onRoleChange={handleRoleChange} />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/centre" element={<CentrePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:slug" element={<CourseDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />

                {/* Checkout Stub Routes */}
                <Route path="/checkout/:courseId" element={<CheckoutPage />} />
                <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
                <Route path="/checkout/failed" element={<CheckoutFailedPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* Auth Routes */}
              <Route element={<AuthLayout currentRole={currentRole} onRoleChange={handleRoleChange} />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/accept-invite" element={<AcceptInvitePage />} />
              </Route>

              {/* Student Portal Routes */}
              <Route
                element={
                  <RequireAuth currentRole={currentRole} requiredRole="student">
                    <StudentLayout currentRole={currentRole} onRoleChange={handleRoleChange} />
                  </RequireAuth>
                }
              >
                <Route path="/student" element={<StudentOverviewPage />} />
                <Route path="/student/batch" element={<StudentBatchPage />} />
                <Route path="/student/fees" element={<StudentFeesPage />} />
                <Route path="/student/payments" element={<StudentPaymentsPage />} />
                <Route path="/student/announcements" element={<StudentAnnouncementsPage />} />
                <Route path="/student/profile" element={<StudentProfilePage />} />
                <Route path="/learn" element={<MyCoursesPage />} />
                <Route path="/learn/:courseSlug" element={<CoursePlayerPage />} />
              </Route>

              {/* Admin Panel Routes */}
              <Route
                element={
                  <RequireAuth currentRole={currentRole} requiredRole="admin">
                    <AdminLayout currentRole={currentRole} onRoleChange={handleRoleChange} />
                  </RequireAuth>
                }
              >
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/admin/students" element={<AdminStudentsPage />} />
                <Route path="/admin/batches" element={<AdminBatchesPage />} />
                <Route path="/admin/fees" element={<AdminFeesPage />} />
                <Route path="/admin/courses" element={<AdminCoursesPage />} />
                <Route path="/admin/orders" element={<AdminOrdersPage />} />
                <Route path="/admin/announcements" element={<AdminAnnouncementsPage />} />
                <Route path="/admin/leads" element={<AdminLeadsPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
