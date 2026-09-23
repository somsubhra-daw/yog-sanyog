import React from 'react';
import { useParams } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

export const CheckoutPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  usePageMeta({ title: 'Course Checkout' });

  // TODO: replace with Razorpay Checkout integration in Phase 3
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif font-bold text-3xl mb-4">Checkout: {courseId}</h1>
    </div>
  );
};

export const CheckoutSuccessPage: React.FC = () => {
  usePageMeta({ title: 'Payment Successful' });
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="font-serif font-bold text-3xl text-semantic-success mb-2">Payment Successful</h1>
    </div>
  );
};

export const CheckoutFailedPage: React.FC = () => {
  usePageMeta({ title: 'Payment Failed' });
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="font-serif font-bold text-3xl text-semantic-danger mb-2">Payment Failed</h1>
    </div>
  );
};
