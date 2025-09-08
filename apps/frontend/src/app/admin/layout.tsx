'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  Bell, 
  Menu, 
  X,
  LogOut
} from 'lucide-react'
import AdminAuthCheck from '@/components/AdminAuthCheck'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Reports', href: '/admin/reports', icon: FileText },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <AdminAuthCheck>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary-500"></div>
                  <span className="text-xl font-bold text-white">CloudFi Admin</span>
                </div>
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      } group flex items-center rounded-md px-2 py-2 text-sm font-medium`}
                    >
                      <Icon
                        className={`${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                        } mr-3 h-6 w-6 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-700 p-4">
              <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <LogOut className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="relative z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary-500"></div>
                    <span className="text-xl font-bold text-white">CloudFi Admin</span>
                  </div>
                </div>
                <nav className="mt-5 space-y-1 px-2">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`${
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        } group flex items-center rounded-md px-2 py-2 text-base font-medium`}
                      >
                        <Icon
                          className={`${
                            isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                          } mr-4 h-6 w-6 flex-shrink-0`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-gray-700 p-4">
                <button className="group flex w-full items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  <LogOut className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminAuthCheck>
  )
}