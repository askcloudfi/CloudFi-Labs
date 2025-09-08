import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ResourcesNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Resource Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the resource you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/resources" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>
      </div>
    </div>
  );
}