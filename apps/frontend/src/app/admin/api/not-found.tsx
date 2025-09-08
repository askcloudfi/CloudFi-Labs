import { Key, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ApiNotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6 py-12">
        <div className="rounded-full bg-gray-100 p-4">
          <Key className="h-12 w-12 text-gray-400" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">API Management Not Found</h1>
          <p className="mt-2 text-gray-500">
            The API management section you're looking for doesn't exist or has been removed.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/admin"
            className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <ArrowLeft className="-ml-1 mr-2 h-5 w-5" />
            Back to Dashboard
          </Link>
          <Link
            href="/admin/api"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Refresh Page
          </Link>
        </div>
      </div>
    </div>
  )
}