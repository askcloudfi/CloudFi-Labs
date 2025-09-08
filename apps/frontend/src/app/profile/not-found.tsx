import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfileNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Profile Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The profile you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link href="/profile">Go to Your Profile</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}