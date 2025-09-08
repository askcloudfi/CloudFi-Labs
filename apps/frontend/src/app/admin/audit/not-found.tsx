'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

export default function AuditNotFound() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md w-full">
          <CardContent className="text-center py-12">
            <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <div className="h-8 w-8 text-red-600">⚠️</div>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Audit section not found</h3>
            <p className="mt-2 text-sm text-gray-500">
              The audit logs section you're looking for doesn't exist or has been moved.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={() => router.push('/admin')}
              >
                Back to Dashboard
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}