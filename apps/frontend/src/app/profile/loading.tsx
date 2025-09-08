import { Loader2 } from 'lucide-react';

export default function ProfileLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto" />
        <p className="mt-4 text-lg text-gray-600">Loading profile...</p>
      </div>
    </div>
  );
}