'use client';

import { AlertCircle } from 'lucide-react';
import { useErrorBoundary } from 'react-error-boundary';

import { Button } from './ui/Button';

export function ErrorFallback() {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert" className="mt-4 space-y-4">
      <div className="flex gap-2 text-red-600">
        <AlertCircle />
        <span>Something went wrong.</span>
      </div>
      <Button variant="outline" onClick={resetBoundary}>
        Try again
      </Button>
    </div>
  );
}