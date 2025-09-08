import { CreditCard } from 'lucide-react'

export default function SubscriptionLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-1 h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="mt-4 flex gap-2 md:ml-4 md:mt-0">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-2 h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-1 h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        <div>
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div>
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[...Array(8)].map((_, i) => (
                    <th key={i} className="px-6 py-3 text-left">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="mt-1 h-3 w-32 bg-gray-200 rounded"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-4 w-8 bg-gray-200 rounded"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6">
                  <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="mt-4">
                    <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="mt-1 h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="mt-2 h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="mt-6 space-y-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="flex items-center">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}