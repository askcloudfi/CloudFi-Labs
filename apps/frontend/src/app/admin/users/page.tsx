'use client'

import { useState } from 'react'
import { 
  Users, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock user data
const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2 minutes ago',
  },
  {
    id: 2,
    name: 'Sam Smith',
    email: 'sam.smith@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '15 minutes ago',
  },
  {
    id: 3,
    name: 'Taylor Brown',
    email: 'taylor.brown@example.com',
    role: 'Moderator',
    status: 'Away',
    lastActive: '1 hour ago',
  },
  {
    id: 4,
    name: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    role: 'User',
    status: 'Offline',
    lastActive: '3 hours ago',
  },
  {
    id: 5,
    name: 'Casey Wilson',
    email: 'casey.wilson@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '5 hours ago',
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Plus className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add User
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mt-6">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Users table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
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
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{user.role}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : user.status === 'Away' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {user.lastActive}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-500 hover:text-gray-700">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
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