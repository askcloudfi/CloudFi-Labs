'use client'

import { useState } from 'react'
import { 
  FileText, 
  Download, 
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Eye,
  Trash2,
  Edit,
  Plus,
  Search,
  Clock,
  CheckCircle,
  XCircle
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
    size: '2.4 MB',
    views: 124,
  },
  {
    id: 2,
    title: 'User Activity Analysis',
    date: '2023-10-10',
    type: 'Analytics',
    status: 'Completed',
    author: 'Sam Smith',
    size: '1.8 MB',
    views: 89,
  },
  {
    id: 3,
    title: 'Quarterly Performance Review',
    date: '2023-09-30',
    type: 'Performance',
    status: 'Processing',
    author: 'Taylor Brown',
    size: '3.2 MB',
    views: 0,
  },
  {
    id: 4,
    title: 'System Usage Statistics',
    date: '2023-10-05',
    type: 'Technical',
    status: 'Completed',
    author: 'Jordan Lee',
    size: '1.5 MB',
    views: 156,
  },
  {
    id: 5,
    title: 'Security Audit Report',
    date: '2023-10-01',
    type: 'Security',
    status: 'Failed',
    author: 'Casey Wilson',
    size: '4.1 MB',
    views: 0,
  },
]

const reportTypes = [
  { name: 'All Reports', value: 'all' },
  { name: 'Financial', value: 'financial' },
  { name: 'Analytics', value: 'analytics' },
  { name: 'Performance', value: 'performance' },
  { name: 'Technical', value: 'technical' },
  { name: 'Security', value: 'security' },
]

const statusOptions = [
  { name: 'All Statuses', value: 'all' },
  { name: 'Completed', value: 'completed' },
  { name: 'Processing', value: 'processing' },
  { name: 'Failed', value: 'failed' },
]

export default function ReportsPage() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [dateRange, setDateRange] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReports = reports.filter(report => 
    (selectedType === 'all' || report.type.toLowerCase() === selectedType) &&
    (selectedStatus === 'all' || report.status.toLowerCase() === selectedStatus) &&
    (searchTerm === '' || 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.author.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  // Report statistics
  const reportStats = {
    total: reports.length,
    completed: reports.filter(r => r.status === 'Completed').length,
    processing: reports.filter(r => r.status === 'Processing').length,
    failed: reports.filter(r => r.status === 'Failed').length,
  }

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
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportStats.total}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportStats.completed}</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportStats.processing}</div>
            <p className="text-xs text-muted-foreground">-1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportStats.failed}</div>
            <p className="text-xs text-muted-foreground">0 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
          <label htmlFor="report-status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="report-status"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.name}
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

      {/* Reports table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Generated Reports ({filteredReports.length})</CardTitle>
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
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Views
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
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{report.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            report.type === 'Financial' ? 'bg-purple-100 text-purple-800' :
                            report.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            report.type === 'Performance' ? 'bg-green-100 text-green-800' :
                            report.type === 'Technical' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {report.type}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.author}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.size}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {report.views}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          report.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : report.status === 'Processing' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Download className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredReports.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredReports.length}</span> of{' '}
                <span className="font-medium">{filteredReports.length}</span> results
              </div>
              <div className="flex space-x-2">
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}