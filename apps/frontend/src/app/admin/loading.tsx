'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Loading skeleton for dashboard */}
      <div className="space-y-6">
        {/* Page title skeleton */}
        <div className="h-8 w-48 animate-pulse rounded bg-gray-200"></div>
        
        {/* Stats cards skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200"></div>
              </CardHeader>
              <CardContent>
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
                <div className="mt-2 h-3 w-20 animate-pulse rounded bg-gray-200"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Chart and activity skeleton */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
              </CardHeader>
              <CardContent>
                <div className="h-80 animate-pulse rounded-lg bg-gray-200"></div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                        <div className="h-3 w-24 animate-pulse rounded bg-gray-200"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* User table skeleton */}
        <div>
          <Card>
            <CardHeader>
              <div className="h-6 w-48 animate-pulse rounded bg-gray-200"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                        <div className="h-3 w-40 animate-pulse rounded bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}