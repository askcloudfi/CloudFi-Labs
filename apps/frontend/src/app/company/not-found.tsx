import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CompanyNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the company page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/company" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Company Home
        </Link>
      </div>
    </div>
  );
}