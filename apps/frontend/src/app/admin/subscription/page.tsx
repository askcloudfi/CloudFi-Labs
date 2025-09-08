'use client'

import { useState } from 'react'
import { 
  CreditCard, 
  Download, 
  Filter,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  DollarSign,
  Users,
  Calendar,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock subscription data
const subscriptionData = [
  {
    id: 1,
    customer: 'Acme Corporation',
    email: 'billing@acme.com',
    plan: 'Enterprise',
    status: 'Active',
    startDate: '2025-01-15',
    endDate: '2026-01-15',
    amount: '$2,450.00',
    billingCycle: 'Annual',
    users: 120,
    revenue: '$29,400',
  },
  {
    id: 2,
    customer: 'Globex Inc.',
    email: 'finance@globex.com',
    plan: 'Business',
    status: 'Active',
    startDate: '2025-03-22',
    endDate: '2026-03-22',
    amount: '$890.00',
    billingCycle: 'Annual',
    users: 45,
    revenue: '$10,680',
  },
  {
    id: 3,
    customer: 'Wayne Enterprises',
    email: 'accounts@wayne.com',
    plan: 'Enterprise',
    status: 'Cancelled',
    startDate: '2024-06-10',
    endDate: '2025-06-10',
    amount: '$3,200.00',
    billingCycle: 'Annual',
    users: 210,
    revenue: '$38,400',
  },
  {
    id: 4,
    customer: 'Stark Industries',
    email: 'billing@stark.com',
    plan: 'Professional',
    status: 'Active',
    startDate: '2025-05-01',
    endDate: '2026-05-01',
    amount: '$1,450.00',
    billingCycle: 'Annual',
    users: 18,
    revenue: '$17,400',
  },
  {
    id: 5,
    customer: 'Oscorp Ltd.',
    email: 'finance@oscorp.com',
    plan: 'Business',
    status: 'Trial',
    startDate: '2025-09-01',
    endDate: '2025-10-01',
    amount: '$0.00',
    billingCycle: 'Trial',
    users: 8,
    revenue: '$0.00',
  },
]

const plans = [
  { 
    id: 1, 
    name: 'Starter', 
    price: '$99', 
    billing: 'per month',
    users: 'Up to 5 users',
    features: [
      'Basic analytics',
      'Email support',
      '5 projects',
      '1GB storage',
      'Standard security'
    ],
    popular: false
  },
  { 
    id: 2, 
    name: 'Professional', 
    price: '$499', 
    billing: 'per month',
    users: 'Up to 25 users',
    features: [
      'Advanced analytics',
      'Priority support',
      'Unlimited projects',
      '10GB storage',
      'Enhanced security',
      'API access'
    ],
    popular: false
  },
  { 
    id: 3, 
    name: 'Business', 
    price: '$899', 
    billing: 'per month',
    users: 'Up to 100 users',
    features: [
      'Premium analytics',
      '24/7 phone support',
      'Unlimited projects',
      '100GB storage',
      'Advanced security',
      'API access',
      'Custom integrations'
    ],
    popular: true
  },
  { 
    id: 4, 
    name: 'Enterprise', 
    price: 'Custom', 
    billing: '',
    users: 'Unlimited users',
    features: [
      'Enterprise analytics',
      'Dedicated account manager',
      'Unlimited projects',
      'Unlimited storage',
      'Enterprise-grade security',
      'API access',
      'Custom integrations',
      'SLA guarantee'
    ],
    popular: false
  },
]

export default function SubscriptionManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPlan, setSelectedPlan] = useState('all')

  const filteredSubscriptions = subscriptionData.filter(sub => 
    (searchTerm === '' || 
      sub.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === 'all' || sub.status.toLowerCase() === selectedStatus) &&
    (selectedPlan === 'all' || sub.plan.toLowerCase() === selectedPlan)
  )

  // Subscription statistics
  const subscriptionStats = {
    totalSubscriptions: subscriptionData.filter(s => s.status === 'Active').length,
    monthlyRecurringRevenue: '$4,739',
    annualRecurringRevenue: '$56,868',
    churnRate: '2.3%',
  }

  const statusOptions = ['all', 'Active', 'Cancelled', 'Trial']
  const planOptions = ['all', 'Starter', 'Professional', 'Business', 'Enterprise']

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Subscription Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage customer subscriptions and plans
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 md:ml-4 md:mt-0">
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
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New Subscription
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.totalSubscriptions}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.monthlyRecurringRevenue}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Recurring Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.annualRecurringRevenue}</div>
            <p className="text-xs text-muted-foreground">+15% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStats.churnRate}</div>
            <p className="text-xs text-muted-foreground">-0.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* Search */}
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Status Filter */}
        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
            Subscription Status
          </label>
          <select
            id="status-filter"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status === 'all' ? 'all' : status.toLowerCase()}>
                {status === 'all' ? 'All Statuses' : status}
              </option>
            ))}
          </select>
        </div>
        
        {/* Plan Filter */}
        <div>
          <label htmlFor="plan-filter" className="block text-sm font-medium text-gray-700">
            Subscription Plan
          </label>
          <select
            id="plan-filter"
            className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            {planOptions.map((plan) => (
              <option key={plan} value={plan === 'all' ? 'all' : plan.toLowerCase()}>
                {plan === 'all' ? 'All Plans' : plan}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subscriptions table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Subscriptions ({filteredSubscriptions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Plan
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Users
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      End Date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredSubscriptions.map((subscription) => (
                    <tr key={subscription.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{subscription.customer}</div>
                        <div className="text-sm text-gray-500">{subscription.email}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            subscription.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                            subscription.plan === 'Business' ? 'bg-blue-100 text-blue-800' :
                            subscription.plan === 'Professional' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {subscription.plan}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          subscription.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : subscription.status === 'Cancelled' 
                              ? 'bg-red-100 text-red-800' 
                              : subscription.status === 'Trial' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                          {subscription.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {subscription.users}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {subscription.amount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {subscription.startDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {subscription.endDate}
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredSubscriptions.length === 0 && (
                <div className="text-center py-12">
                  <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No subscriptions found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredSubscriptions.length}</span> of{' '}
                <span className="font-medium">{filteredSubscriptions.length}</span> results
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

      {/* Plans Overview */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div key={plan.id} className={`border rounded-lg p-6 hover:shadow-md transition-shadow relative ${plan.popular ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-50' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                    <p className="text-sm text-gray-500 mt-1">{plan.billing}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{plan.users}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full py-2 px-4 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500' 
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500'
                  }`}>
                    {plan.popular ? 'Get Started' : 'View Details'}
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}