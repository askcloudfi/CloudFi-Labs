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
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock billing data
const billingData = [
  {
    id: 1,
    customer: 'Acme Corporation',
    email: 'billing@acme.com',
    plan: 'Enterprise',
    amount: '$2,450.00',
    status: 'Paid',
    date: '2025-09-01',
    nextBilling: '2025-10-01',
  },
  {
    id: 2,
    customer: 'Globex Inc.',
    email: 'finance@globex.com',
    plan: 'Business',
    amount: '$890.00',
    status: 'Pending',
    date: '2025-09-03',
    nextBilling: '2025-10-03',
  },
  {
    id: 3,
    customer: 'Wayne Enterprises',
    email: 'accounts@wayne.com',
    plan: 'Enterprise',
    amount: '$3,200.00',
    status: 'Overdue',
    date: '2025-08-28',
    nextBilling: '2025-09-28',
  },
  {
    id: 4,
    customer: 'Stark Industries',
    email: 'billing@stark.com',
    plan: 'Professional',
    amount: '$1,450.00',
    status: 'Paid',
    date: '2025-09-05',
    nextBilling: '2025-10-05',
  },
  {
    id: 5,
    customer: 'Oscorp Ltd.',
    email: 'finance@oscorp.com',
    plan: 'Business',
    amount: '$890.00',
    status: 'Failed',
    date: '2025-09-02',
    nextBilling: '2025-10-02',
  },
]

const plans = [
  { id: 1, name: 'Starter', price: '$99', users: 'Up to 5 users' },
  { id: 2, name: 'Professional', price: '$499', users: 'Up to 25 users' },
  { id: 3, name: 'Business', price: '$899', users: 'Up to 100 users' },
  { id: 4, name: 'Enterprise', price: 'Custom', users: 'Unlimited users' },
]

export default function BillingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPlan, setSelectedPlan] = useState('all')

  const filteredBilling = billingData.filter(billing => 
    (searchTerm === '' || 
      billing.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      billing.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === 'all' || billing.status.toLowerCase() === selectedStatus) &&
    (selectedPlan === 'all' || billing.plan.toLowerCase() === selectedPlan)
  )

  // Billing statistics
  const billingStats = {
    totalRevenue: '$8,880',
    pendingPayments: billingData.filter(b => b.status === 'Pending').length,
    overduePayments: billingData.filter(b => b.status === 'Overdue').length,
    failedPayments: billingData.filter(b => b.status === 'Failed').length,
  }

  const statusOptions = ['all', 'Paid', 'Pending', 'Overdue', 'Failed']
  const planOptions = ['all', 'Starter', 'Professional', 'Business', 'Enterprise']

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Billing Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage customer subscriptions and payments
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
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billingStats.totalRevenue}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billingStats.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">3 payments due soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billingStats.overduePayments}</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{billingStats.failedPayments}</div>
            <p className="text-xs text-muted-foreground">Needs follow-up</p>
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
            Payment Status
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

      {/* Billing table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Billing ({filteredBilling.length})</CardTitle>
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
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Billing Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Next Billing
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
                  {filteredBilling.map((billing) => (
                    <tr key={billing.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{billing.customer}</div>
                        <div className="text-sm text-gray-500">{billing.email}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            billing.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                            billing.plan === 'Business' ? 'bg-blue-100 text-blue-800' :
                            billing.plan === 'Professional' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {billing.plan}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {billing.amount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {billing.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {billing.nextBilling}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          billing.status === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : billing.status === 'Pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : billing.status === 'Overdue' 
                                ? 'bg-orange-100 text-orange-800' 
                                : 'bg-red-100 text-red-800'
                        }`}>
                          {billing.status}
                        </span>
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
              
              {filteredBilling.length === 0 && (
                <div className="text-center py-12">
                  <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No billing records found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">{filteredBilling.length}</span> results
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
                <div key={plan.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="mt-4">
                    <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                    <p className="text-sm text-gray-500 mt-1">per month</p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{plan.users}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Basic analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Email support</span>
                    </li>
                  </ul>
                  <button className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    View Details
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