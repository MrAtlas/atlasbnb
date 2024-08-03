'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/state/auth/auth-context';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) return;
    if (!user.id) {
      router.push('/auth/login');
    }
  }, [user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
