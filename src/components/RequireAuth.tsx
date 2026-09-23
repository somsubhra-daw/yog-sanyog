import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from '@/types';

interface RequireAuthProps {
  currentRole: UserRole;
  requiredRole: 'student' | 'admin';
  children: React.ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({
  currentRole,
  requiredRole,
  children,
}) => {
  const location = useLocation();

  if (currentRole === 'visitor') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole === 'admin' && currentRole !== 'admin') {
    return <Navigate to="/student" replace />;
  }

  return <>{children}</>;
};
