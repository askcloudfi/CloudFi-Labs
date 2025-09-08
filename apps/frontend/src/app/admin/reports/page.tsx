'use client'

import { useState } from 'react'
import { 
  FileText, 
  Download, 
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock report data
const reports = [
  {
    id: 1,
    title: 'Monthly Financial Report',
    date: '2023-10-15',
    type: 'Financial',
    status: 'Completed',
    author: 'Alex Johnson',
  },
  {
    id: 2,
    title: 'User Activity Analysis',
    date: '2023-10-10',
    type: 'Analytics',
    status: 'Completed',
    author: 'Sam Smith',
  },
  {
    id: 3,
    title: 'Quarterly Performance Review',
    date: '2023-09-30',
    type: 'Performance',
    status: 'Pending',
    author: 'Taylor Brown',
  },
  {
    id: 4,
    title: 'System Usage Statistics',
    date: '2023-10-05',
    type: 'Technical',
    status: 'Completed',
    author: 'Jordan Lee',
  },
]

const reportTypes = [
  { name: 'All Reports', value: 'all' },
  { name: 'Financial', value: 'financial' },
  { name: 'Analytics', value: 'analytics' },
  { name: 'Performance', value: 'performance' },
  { name: 'Technical', value: 'technical' },
]

export default function ReportsPage() {
  const [selectedType, setSelectedType] = useState('all')
  const [dateRange, setDateRange] = useState('')

  const filteredReports = reports.filter(report => 
    selectedType === 'all' || report.type.toLowerCase() === selectedType
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
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

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="report-type" className="block text-sm font-medium text-gray-700">
            Report Type
          </label>
          <select
            id="report-type"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {reportTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="date-range"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              placeholder="Select date range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">-1 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Report
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Author
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
                  {filteredReports.map((report) => (
                    <tr key={report.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{report.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{report.type}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.author}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          report.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
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