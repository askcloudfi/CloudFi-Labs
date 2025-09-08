'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Eye
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock analytics data
const analyticsData = {
  revenue: [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ],
  users: [
    { name: 'Jan', value: 240 },
    { name: 'Feb', value: 139 },
    { name: 'Mar', value: 980 },
    { name: 'Apr', value: 390 },
    { name: 'May', value: 480 },
    { name: 'Jun', value: 380 },
  ],
}

const topProducts = [
  { id: 1, name: 'Cloud Cost Management', revenue: '$12,450', users: 142 },
  { id: 2, name: 'Financial Analytics', revenue: '$8,920', users: 98 },
  { id: 3, name: 'Compliance Dashboard', revenue: '$6,750', users: 76 },
  { id: 4, name: 'Team Collaboration', revenue: '$4,320', users: 54 },
]

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Filter className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Filter
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Download className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Export
          </button>
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="mt-6">
        <div className="relative rounded-md shadow-sm w-64">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Select date range"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,580</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5m 24s</div>
            <p className="text-xs text-muted-foreground">+1.2m from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {/* Chart placeholder - in a real app, you would use a charting library like Recharts */}
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Revenue chart visualization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Chart */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {/* Chart placeholder - in a real app, you would use a charting library like Recharts */}
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">User growth chart visualization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Active Users
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {topProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {product.revenue}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {product.users}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}