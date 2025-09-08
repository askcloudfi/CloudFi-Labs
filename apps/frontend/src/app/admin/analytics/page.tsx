'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Eye,
  Users,
  DollarSign,
  Activity,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  CreditCard,
  Globe,
  Database
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
  { id: 1, name: 'Cloud Cost Management', revenue: '$12,450', users: 142, growth: 12.5 },
  { id: 2, name: 'Financial Analytics', revenue: '$8,920', users: 98, growth: 8.3 },
  { id: 3, name: 'Compliance Dashboard', revenue: '$6,750', users: 76, growth: -2.1 },
  { id: 4, name: 'Team Collaboration', revenue: '$4,320', users: 54, growth: 15.7 },
]

const recentActivity = [
  { id: 1, user: 'Alex Johnson', action: 'Generated financial report', time: '2 minutes ago' },
  { id: 2, user: 'Sam Smith', action: 'Created new user', time: '15 minutes ago' },
  { id: 3, user: 'Taylor Brown', action: 'Updated settings', time: '1 hour ago' },
  { id: 4, user: 'Jordan Lee', action: 'Deleted report', time: '3 hours ago' },
]

// New enhanced data
const enhancedMetrics = [
  {
    title: "Cloud Spend",
    value: "$42,680",
    change: "+15.2%",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    title: "Infrastructure Cost",
    value: "$18,420",
    change: "+8.7%",
    icon: Database,
    color: "bg-green-500",
  },
  {
    title: "Network Usage",
    value: "1.2TB",
    change: "+22.4%",
    icon: Globe,
    color: "bg-purple-500",
  },
  {
    title: "Active Reports",
    value: "142",
    change: "+5.3%",
    icon: FileText,
    color: "bg-orange-500",
  },
]

const cloudSpendData = [
  { provider: 'AWS', spend: 45, color: 'bg-orange-500' },
  { provider: 'Google Cloud', spend: 25, color: 'bg-blue-500' },
  { provider: 'Azure', spend: 20, color: 'bg-blue-400' },
  { provider: 'Other', spend: 10, color: 'bg-gray-500' },
]

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('')
  const [timePeriod, setTimePeriod] = useState('monthly')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your business metrics and performance indicators
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:ml-4 md:mt-0">
          <div className="flex rounded-md shadow-sm">
            <button
              type="button"
              className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                timePeriod === 'daily' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setTimePeriod('daily')}
            >
              Daily
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                timePeriod === 'weekly' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setTimePeriod('weekly')}
            >
              Weekly
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                timePeriod === 'monthly' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setTimePeriod('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                timePeriod === 'yearly' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setTimePeriod('yearly')}
            >
              Yearly
            </button>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Filter className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Filter
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Download className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Export
          </button>
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="mt-6">
        <div className="relative rounded-md shadow-sm w-full max-w-xs">
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

      {/* Enhanced Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {enhancedMetrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="flex items-center text-xs text-muted-foreground mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  {metric.change} from last period
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts and Activity */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Cloud Spend Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {/* Enhanced chart visualization */}
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <div className="w-full px-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Monthly Cloud Spend</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-primary-100 text-primary-800 rounded-full">Month</button>
                      <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-full">Quarter</button>
                      <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-full">Year</button>
                    </div>
                  </div>
                  
                  {/* Bar chart visualization */}
                  <div className="flex items-end justify-between h-48 mt-8">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((month, index) => (
                      <div key={month} className="flex flex-col items-center w-8">
                        <div className="text-xs text-gray-500 mb-2">{month}</div>
                        <div 
                          className="w-6 bg-primary-500 rounded-t hover:bg-primary-600 transition-all duration-300"
                          style={{ height: `${20 + index * 8}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Cloud spend breakdown legend */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {cloudSpendData.map((item) => (
                      <div key={item.provider} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                        <span className="text-sm text-gray-600">{item.provider}</span>
                        <span className="text-sm font-medium ml-1">{item.spend}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="relative flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all activity
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
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
                  <p className="mt-1 text-xs text-gray-400">Using Recharts or similar library</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {/* Chart placeholder - in a real app, you would use a charting library like Recharts */}
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <PieChart className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Conversion funnel visualization</p>
                  <p className="mt-1 text-xs text-gray-400">Using Recharts or similar library</p>
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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Growth
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {topProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {product.revenue}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {product.users}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <span className={`inline-flex items-center ${
                          product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.growth >= 0 ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                          )}
                          {Math.abs(product.growth)}%
                        </span>
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