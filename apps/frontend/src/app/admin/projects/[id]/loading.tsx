export default function AdminProjectDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8">
      {/* Back button skeleton */}
      <div className="mb-6 w-32 h-6 bg-gray-200 rounded animate-pulse"></div>

      {/* Title skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-2 h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-1 h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="mt-4 flex space-x-2 md:ml-4 md:mt-0">
          <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Badges skeleton */}
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-28 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      {/* Stats skeleton */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg bg-white shadow animate-pulse">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md bg-gray-200 p-3 w-12 h-12"></div>
                <div className="ml-4 w-0 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs skeleton */}
      <div className="mt-6 border-b border-gray-200">
        <div className="flex space-x-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-20 bg-gray-200 rounded-t-lg animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg bg-white shadow p-6 animate-pulse">
            <div className="h-6 w-1/3 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-white shadow p-6 animate-pulse">
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-4">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}