import { Loader2 } from 'lucide-react';

export default function ResourcesLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-4" />
        <p className="text-gray-600">Loading resources...</p>
      </div>
    </div>
  );
}