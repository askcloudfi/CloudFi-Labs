'use client'

import { useState } from 'react'
import { 
  Folder, 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Cloud,
  Server,
  Database,
  Globe,
  Activity,
  BarChart3,
  Users,
  Calendar,
  DollarSign
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock project data
const projects = [
  {
    id: 1,
    name: 'E-commerce Platform Migration',
    description: 'Migrating legacy e-commerce platform to cloud infrastructure',
    status: 'active',
    provider: 'AWS',
    budget: 15000,
    spent: 12450,
    progress: 85,
    lastUpdated: '2 hours ago',
    team: 5,
    region: 'us-east-1',
    owner: 'Alex Johnson',
    startDate: '2023-01-15',
    endDate: '2023-06-30'
  },
  {
    id: 2,
    name: 'Data Analytics Pipeline',
    description: 'Building real-time data processing pipeline for business intelligence',
    status: 'planning',
    provider: 'Google Cloud',
    budget: 25000,
    spent: 3200,
    progress: 15,
    lastUpdated: '1 day ago',
    team: 3,
    region: 'us-central1',
    owner: 'Sam Smith',
    startDate: '2023-03-01',
    endDate: '2023-09-30'
  },
  {
    id: 3,
    name: 'Mobile App Backend',
    description: 'Developing scalable backend for mobile application',
    status: 'completed',
    provider: 'Azure',
    budget: 8000,
    spent: 7800,
    progress: 100,
    lastUpdated: '3 days ago',
    team: 2,
    region: 'eastus',
    owner: 'Taylor Brown',
    startDate: '2022-11-01',
    endDate: '2023-02-28'
  },
  {
    id: 4,
    name: 'Machine Learning Model Deployment',
    description: 'Deploying ML models for predictive analytics',
    status: 'active',
    provider: 'AWS',
    budget: 20000,
    spent: 14200,
    progress: 72,
    lastUpdated: '5 hours ago',
    team: 4,
    region: 'us-west-2',
    owner: 'Jordan Lee',
    startDate: '2023-02-15',
    endDate: '2023-08-31'
  },
  {
    id: 5,
    name: 'Security Compliance Audit',
    description: 'Comprehensive security audit for financial services platform',
    status: 'on-hold',
    provider: 'AWS',
    budget: 12000,
    spent: 8500,
    progress: 65,
    lastUpdated: '1 week ago',
    team: 2,
    region: 'eu-west-1',
    owner: 'Casey Wilson',
    startDate: '2023-04-01',
    endDate: '2023-07-31'
  }
]

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'planning', label: 'Planning' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
  { value: 'on-hold', label: 'On Hold' }
]

const providerOptions = [
  { value: 'all', label: 'All Providers' },
  { value: 'aws', label: 'AWS' },
  { value: 'google-cloud', label: 'Google Cloud' },
  { value: 'azure', label: 'Azure' }
]

export default function AdminProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [providerFilter, setProviderFilter] = useState('all')
  const [sortBy, setSortBy] = useState('lastUpdated')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.owner.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    const matchesProvider = providerFilter === 'all' || project.provider.toLowerCase() === providerFilter
    
    return matchesSearch && matchesStatus && matchesProvider
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'lastUpdated') return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    if (sortBy === 'progress') return b.progress - a.progress
    if (sortBy === 'budget') return b.budget - a.budget
    return b.id - a.id
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'planning': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-purple-100 text-purple-800'
      case 'on-hold': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProviderIcon = (provider: string) => {
    switch (provider.toLowerCase()) {
      case 'aws': return <Cloud className="h-4 w-4 text-orange-500" />
      case 'google cloud': return <Globe className="h-4 w-4 text-blue-500" />
      case 'azure': return <Server className="h-4 w-4 text-blue-400" />
      default: return <Database className="h-4 w-4 text-gray-500" />
    }
  }

  // Project statistics
  const projectStats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    planning: projects.filter(p => p.status === 'planning').length,
    completed: projects.filter(p => p.status === 'completed').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Project Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage all client projects and their progress
          </p>
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
            New Project
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-blue-500 p-3">
                <Folder className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Total Projects</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{projectStats.total}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-green-500 p-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Active Projects</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{projectStats.active}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-purple-500 p-3">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Total Budget</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      ${projectStats.totalBudget.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-orange-500 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Avg. Team Size</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {Math.round(projects.reduce((sum, p) => sum + p.team, 0) / projects.length)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4">
        {/* Search */}
        <div className="relative rounded-md shadow-sm sm:col-span-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Status Filter */}
        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status-filter"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Provider Filter */}
        <div>
          <label htmlFor="provider-filter" className="block text-sm font-medium text-gray-700">
            Provider
          </label>
          <select
            id="provider-filter"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={providerFilter}
            onChange={(e) => setProviderFilter(e.target.value)}
          >
            {providerOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>All Projects ({filteredProjects.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Project
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Owner
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Provider
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Progress
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Dates
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center">
                              <Folder className="h-6 w-6 text-indigo-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{project.name}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{project.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{project.owner}</div>
                        <div className="text-sm text-gray-500">{project.team} members</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center text-sm text-gray-900">
                          {getProviderIcon(project.provider)}
                          <span className="ml-2">{project.provider}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(project.status)}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <div>
                          <div className="font-medium">${project.spent.toLocaleString()}</div>
                          <div className="text-gray-400">of ${project.budget.toLocaleString()}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-full rounded-full bg-gray-200 h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                project.progress < 50 ? 'bg-red-500' : 
                                project.progress < 80 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <div className="ml-2 text-sm text-gray-500 w-10">{project.progress}%</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                          <span>{project.startDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                          <span>{project.endDate}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <Trash2 className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <Folder className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredProjects.length}</span> of{' '}
                <span className="font-medium">{filteredProjects.length}</span> results
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