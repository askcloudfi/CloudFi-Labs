import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HealthLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">System Health</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor the health and performance of all system services
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="ml-3 h-10 w-24 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse mt-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mt-2"></div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-center justify-between py-3">
                  <div className="h-4 w-1/5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}