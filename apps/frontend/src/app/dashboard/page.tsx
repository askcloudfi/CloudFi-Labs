'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Settings,
  FileText,
  Calendar,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for user dashboard
const stats = [
  {
    title: "Monthly Spend",
    value: "$1,248",
    change: "+12%",
    changeType: "increase",
    icon: DollarSign,
    color: "bg-blue-500",
  },
  {
    title: "Cost Savings",
    value: "$245",
    change: "+18%",
    changeType: "increase",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    title: "Active Services",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: CreditCard,
    color: "bg-purple-500",
  },
  {
    title: "Alerts",
    value: "3",
    change: "+1",
    changeType: "decrease",
    icon: Bell,
    color: "bg-orange-500",
  },
];

const recentActivity = [
  { id: 1, service: 'AWS EC2', action: 'Instance started', cost: '$45.20', time: '2 min ago' },
  { id: 2, service: 'Google Cloud', action: 'Storage increased', cost: '$12.80', time: '15 min ago' },
  { id: 3, service: 'Azure VM', action: 'Instance stopped', cost: '-$32.50', time: '1 hour ago' },
  { id: 4, service: 'AWS S3', action: 'Data transfer', cost: '$8.40', time: '3 hours ago' },
];

const costBreakdown = [
  { name: 'Compute', value: 45, color: 'bg-blue-500' },
  { name: 'Storage', value: 25, color: 'bg-green-500' },
  { name: 'Networking', value: 15, color: 'bg-purple-500' },
  { name: 'Database', value: 10, color: 'bg-orange-500' },
  { name: 'Other', value: 5, color: 'bg-gray-500' },
];

const upcomingBills = [
  { id: 1, service: 'AWS Monthly', amount: '$845.30', date: '2025-09-15', status: 'Due Soon' },
  { id: 2, service: 'Google Cloud', amount: '$1,240.75', date: '2025-09-20', status: 'Upcoming' },
  { id: 3, service: 'Azure Subscription', amount: '$620.50', date: '2025-09-25', status: 'Upcoming' },
];

export default function UserDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Settings className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Settings
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <FileText className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Cost Breakdown */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {/* Chart placeholder */}
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
                    
                    {/* Cost breakdown legend */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
                      {costBreakdown.map((item) => (
                        <div key={item.name} className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                          <span className="text-sm text-gray-600">{item.name}</span>
                          <span className="text-sm font-medium ml-1">{item.value}%</span>
                        </div>
                      ))}
                    </div>
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
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">{activity.service}</p>
                              <p className={`text-sm font-medium ${activity.cost.startsWith('-') ? 'text-green-600' : 'text-gray-900'}`}>
                                {activity.cost}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500">{activity.action}</p>
                            <p className="mt-0.5 text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <button className="text-sm text-primary-600 hover:text-primary-500">
                    View all activity
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Bills */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {upcomingBills.map((bill) => (
                    <tr key={bill.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{bill.service}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{bill.amount}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {bill.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          bill.status === 'Due Soon' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {bill.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900">
                          View Details
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
  );
}