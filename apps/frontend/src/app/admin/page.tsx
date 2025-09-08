'use client'

import { useState } from 'react'
import { 
  Users, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  DollarSign,
  Activity,
  Clock,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for dashboard
const stats = [
  {
    title: "Total Users",
    value: "1,248",
    change: "+12%",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Revenue",
    value: "$24,580",
    change: "+18%",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Reports",
    value: "86",
    change: "+4%",
    icon: FileText,
    color: "bg-purple-500",
  },
  {
    title: "Active Now",
    value: "142",
    change: "+23%",
    icon: Activity,
    color: "bg-orange-500",
  },
]

const recentActivity = [
  { id: 1, user: 'Alex Johnson', action: 'Created new report', time: '2 min ago' },
  { id: 2, user: 'Sam Smith', action: 'Updated settings', time: '15 min ago' },
  { id: 3, user: 'Taylor Brown', action: 'Added new user', time: '1 hour ago' },
  { id: 4, user: 'Jordan Lee', action: 'Generated analytics', time: '3 hours ago' },
]

const chartData = [
  { name: 'Jan', revenue: 4000, users: 240 },
  { name: 'Feb', revenue: 3000, users: 139 },
  { name: 'Mar', revenue: 2000, users: 980 },
  { name: 'Apr', revenue: 2780, users: 390 },
  { name: 'May', revenue: 1890, users: 480 },
  { name: 'Jun', revenue: 2390, users: 380 },
]

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-md p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">{stat.title}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className="ml-2 flex items-center text-sm font-semibold text-green-600">
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Chart */}
        <div className="lg:col-span-2">
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
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flow-root">
                <ul className="-mb-8">
                  {recentActivity.map((activity, activityIdx) => (
                    <li key={activity.id}>
                      <div className="relative pb-8">
                        {activityIdx !== recentActivity.length - 1 ? (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                              <Activity className="h-5 w-5 text-gray-500" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-500">
                              <span className="font-medium text-gray-900">{activity.user}</span> {activity.action}
                            </p>
                            <p className="mt-0.5 text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Management Section */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Last Active
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Alex Johnson</div>
                          <div className="text-sm text-gray-500">alex.johnson@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">Admin</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      2 min ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-primary-600 hover:text-primary-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Sam Smith</div>
                          <div className="text-sm text-gray-500">sam.smith@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">User</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      15 min ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-primary-600 hover:text-primary-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Taylor Brown</div>
                          <div className="text-sm text-gray-500">taylor.brown@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">Moderator</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Away
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      1 hour ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-primary-600 hover:text-primary-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}