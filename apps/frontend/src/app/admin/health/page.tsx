'use client'

import { useState, useEffect } from 'react'
import { 
  Activity, 
  Database, 
  Server, 
  Wifi, 
  HardDrive, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock health data
const systemHealth = {
  overallStatus: 'healthy',
  lastUpdated: '2025-09-09 14:30:00',
  uptime: '99.98%',
  responseTime: '124ms'
}

const services = [
  {
    id: 1,
    name: 'Frontend Application',
    status: 'healthy',
    responseTime: '85ms',
    uptime: '100%',
    lastCheck: '2 minutes ago'
  },
  {
    id: 2,
    name: 'Backend API',
    status: 'healthy',
    responseTime: '120ms',
    uptime: '99.95%',
    lastCheck: '1 minute ago'
  },
  {
    id: 3,
    name: 'Database',
    status: 'healthy',
    responseTime: '45ms',
    uptime: '100%',
    lastCheck: '30 seconds ago'
  },
  {
    id: 4,
    name: 'Authentication Service',
    status: 'degraded',
    responseTime: '320ms',
    uptime: '99.8%',
    lastCheck: '5 minutes ago'
  },
  {
    id: 5,
    name: 'File Storage',
    status: 'healthy',
    responseTime: '95ms',
    uptime: '100%',
    lastCheck: '1 minute ago'
  },
  {
    id: 6,
    name: 'Email Service',
    status: 'down',
    responseTime: 'N/A',
    uptime: '98.5%',
    lastCheck: '10 seconds ago'
  }
]

const metrics = [
  {
    title: "API Requests",
    value: "1.2M",
    change: "+12.5%",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    title: "Error Rate",
    value: "0.2%",
    change: "-0.1%",
    icon: AlertTriangle,
    color: "bg-green-500",
  },
  {
    title: "Database Queries",
    value: "850K",
    change: "+8.3%",
    icon: Database,
    color: "bg-purple-500",
  },
  {
    title: "Active Users",
    value: "2,458",
    change: "+5.7%",
    icon: Activity,
    color: "bg-orange-500",
  },
]

export default function HealthPage() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h')

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'down':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Activity className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800'
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800'
      case 'down':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">System Health</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor the health and performance of all system services
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <div className="flex rounded-md shadow-sm">
            <button
              type="button"
              className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                selectedTimeRange === '1h' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setSelectedTimeRange('1h')}
            >
              1H
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                selectedTimeRange === '24h' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setSelectedTimeRange('24h')}
            >
              24H
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                selectedTimeRange === '7d' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setSelectedTimeRange('7d')}
            >
              7D
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
                selectedTimeRange === '30d' ? 'bg-primary-600 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => setSelectedTimeRange('30d')}
            >
              30D
            </button>
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50"
          >
            <RefreshCw className={`-ml-0.5 mr-1.5 h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} aria-hidden="true" />
            Refresh
          </button>
        </div>
      </div>

      {/* Overall Health Status */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <div className={`rounded-full p-3 ${systemHealth.overallStatus === 'healthy' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  {systemHealth.overallStatus === 'healthy' ? (
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 capitalize">{systemHealth.overallStatus}</h3>
                  <p className="text-sm text-gray-500">Last updated: {systemHealth.lastUpdated}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:mt-0 md:grid-cols-3">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500">Uptime</p>
                  <p className="text-lg font-semibold text-gray-900">{systemHealth.uptime}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500">Response Time</p>
                  <p className="text-lg font-semibold text-gray-900">{systemHealth.responseTime}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500">Services</p>
                  <p className="text-lg font-semibold text-gray-900">{services.length}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
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
                  {metric.change.startsWith('+') ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingUp className="h-3 w-3 text-red-500 mr-1 rotate-180" />
                  )}
                  {metric.change} from last period
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Services Status */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
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
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Response Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Uptime
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Last Check
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {services.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {service.name === 'Frontend Application' && <Wifi className="h-5 w-5 text-gray-500" />}
                            {service.name === 'Backend API' && <Server className="h-5 w-5 text-gray-500" />}
                            {service.name === 'Database' && <Database className="h-5 w-5 text-gray-500" />}
                            {service.name === 'Authentication Service' && <Activity className="h-5 w-5 text-gray-500" />}
                            {service.name === 'File Storage' && <HardDrive className="h-5 w-5 text-gray-500" />}
                            {service.name === 'Email Service' && <Zap className="h-5 w-5 text-gray-500" />}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          {getStatusIcon(service.status)}
                          <span className={`ml-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {service.responseTime}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {service.uptime}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {service.lastCheck}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Performance chart visualization</p>
                  <p className="mt-1 text-xs text-gray-400">Using Recharts or similar library</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Alerts */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">Authentication service response time degradation</p>
                      <p className="text-sm text-gray-500">Response time increased to 320ms from normal 80ms</p>
                      <p className="text-xs text-gray-400">2025-09-09 14:25:00</p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <XCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">Email service is down</p>
                      <p className="text-sm text-gray-500">Service is not responding to health checks</p>
                      <p className="text-xs text-gray-400">2025-09-09 14:20:00</p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">Database connection restored</p>
                      <p className="text-sm text-gray-500">Connection issues resolved after 5 minutes</p>
                      <p className="text-xs text-gray-400">2025-09-09 10:15:00</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}