'use client'

import { useState } from 'react'
import { 
  Folder, 
  Calendar, 
  Cloud, 
  Server,
  Globe,
  Users,
  Activity,
  BarChart3,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  Edit,
  MoreHorizontal,
  ArrowLeft
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

// Mock project data
const project = {
  id: 1,
  name: 'E-commerce Platform Migration',
  description: 'Migrating legacy e-commerce platform to cloud infrastructure with improved scalability and performance.',
  status: 'active',
  provider: 'AWS',
  budget: 15000,
  spent: 12450,
  progress: 85,
  lastUpdated: '2 hours ago',
  team: [
    { id: 1, name: 'Alex Johnson', role: 'Project Manager', avatar: 'AJ' },
    { id: 2, name: 'Sam Smith', role: 'Backend Developer', avatar: 'SS' },
    { id: 3, name: 'Taylor Brown', role: 'Frontend Developer', avatar: 'TB' },
    { id: 4, name: 'Jordan Lee', role: 'DevOps Engineer', avatar: 'JL' },
    { id: 5, name: 'Casey Wilson', role: 'QA Engineer', avatar: 'CW' }
  ],
  region: 'us-east-1',
  owner: 'Alex Johnson',
  startDate: '2023-01-15',
  endDate: '2023-06-30',
  milestones: [
    { id: 1, name: 'Planning Phase', status: 'completed', dueDate: '2023-01-31' },
    { id: 2, name: 'Infrastructure Setup', status: 'completed', dueDate: '2023-02-28' },
    { id: 3, name: 'Database Migration', status: 'completed', dueDate: '2023-03-31' },
    { id: 4, name: 'Application Migration', status: 'active', dueDate: '2023-05-15' },
    { id: 5, name: 'Testing & QA', status: 'pending', dueDate: '2023-06-15' },
    { id: 6, name: 'Go-Live', status: 'pending', dueDate: '2023-06-30' }
  ],
  recentActivity: [
    { id: 1, user: 'Alex Johnson', action: 'Updated project progress', time: '2 hours ago' },
    { id: 2, user: 'Sam Smith', action: 'Completed database migration', time: '1 day ago' },
    { id: 3, user: 'Taylor Brown', action: 'Fixed frontend performance issues', time: '2 days ago' },
    { id: 4, user: 'Jordan Lee', action: 'Set up monitoring alerts', time: '3 days ago' }
  ]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800'
    case 'planning': return 'bg-blue-100 text-blue-800'
    case 'completed': return 'bg-purple-100 text-purple-800'
    case 'on-hold': return 'bg-yellow-100 text-yellow-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getMilestoneStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500'
    case 'active': return 'bg-blue-500'
    case 'pending': return 'bg-gray-300'
    default: return 'bg-gray-300'
  }
}

const getProviderIcon = (provider: string) => {
  switch (provider.toLowerCase()) {
    case 'aws': return <Cloud className="h-5 w-5 text-orange-500" />
    case 'google cloud': return <Globe className="h-5 w-5 text-blue-500" />
    case 'azure': return <Server className="h-5 w-5 text-blue-400" />
    default: return <Activity className="h-5 w-5 text-gray-500" />
  }
}

export default function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Back button */}
      <div className="mb-6">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          <ArrowLeft className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Back to projects
        </Link>
      </div>

      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {project.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Edit className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <MoreHorizontal className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Actions
          </button>
        </div>
      </div>

      {/* Status and provider badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.status)}`}>
          <Activity className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" />
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
          {getProviderIcon(project.provider)}
          <span className="ml-1.5">{project.provider}</span>
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
          <Users className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" />
          {project.team.length} members
        </span>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-blue-500 p-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Timeline</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-gray-900">
                      {project.startDate} to {project.endDate}
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
              <div className="flex-shrink-0 rounded-md bg-green-500 p-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Progress</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-gray-900">{project.progress}%</div>
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
                  <dt className="truncate text-sm font-medium text-gray-500">Budget</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-gray-900">
                      ${project.spent.toLocaleString()} of ${project.budget.toLocaleString()}
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
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Last Updated</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-gray-900">{project.lastUpdated}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`${
                activeTab === 'team'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`${
                activeTab === 'milestones'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Milestones
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`${
                activeTab === 'activity'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Activity
            </button>
          </nav>
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Progress chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                        <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className={`h-4 rounded-full ${
                            project.progress < 50 ? 'bg-red-500' : 
                            project.progress < 80 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Budget Utilization</h3>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Spent</span>
                          <span className="text-sm font-medium text-gray-700">
                            ${(project.spent / project.budget * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className={`h-4 rounded-full ${
                              (project.spent / project.budget * 100) < 70 ? 'bg-green-500' : 
                              (project.spent / project.budget * 100) < 90 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${(project.spent / project.budget * 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-6 text-sm text-gray-500">
                          <span>${project.spent.toLocaleString()} spent</span>
                          <span>${(project.budget - project.spent).toLocaleString()} remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Project details */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Owner</h4>
                      <p className="mt-1 text-sm text-gray-900">{project.owner}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Region</h4>
                      <p className="mt-1 text-sm text-gray-900">{project.region}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Start Date</h4>
                      <p className="mt-1 text-sm text-gray-900">{project.startDate}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">End Date</h4>
                      <p className="mt-1 text-sm text-gray-900">{project.endDate}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Description</h4>
                      <p className="mt-1 text-sm text-gray-900">{project.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === 'team' && (
          <Card>
            <CardHeader>
              <CardTitle>Project Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.team.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-800 font-medium">{member.avatar}</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-sm text-gray-500 truncate">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'milestones' && (
          <Card>
            <CardHeader>
              <CardTitle>Project Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {project.milestones.map((milestone, index) => (
                    <li key={milestone.id} className="py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${getMilestoneStatusColor(milestone.status)}`}>
                            {milestone.status === 'completed' ? (
                              <CheckCircle className="h-5 w-5 text-white" />
                            ) : milestone.status === 'active' ? (
                              <Activity className="h-5 w-5 text-white" />
                            ) : (
                              <Clock className="h-5 w-5 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="ml-4 min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{milestone.name}</p>
                            <p className="text-sm text-gray-500">{milestone.dueDate}</p>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                              milestone.status === 'active' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'activity' && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {project.recentActivity.map((activity) => (
                    <li key={activity.id} className="py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <Activity className="h-5 w-5 text-indigo-600" />
                          </div>
                        </div>
                        <div className="ml-4 min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-500">{activity.action}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}