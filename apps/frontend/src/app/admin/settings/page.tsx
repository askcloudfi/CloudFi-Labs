'use client'

import { useState } from 'react'
import { 
  Settings, 
  Save, 
  Key, 
  Bell, 
  Shield, 
  Palette,
  Mail,
  Globe
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  className={`group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      activeTab === tab.id ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>
                {tabs.find(tab => tab.id === activeTab)?.name} Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">
                      Site Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="site-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue="CloudFi Labs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <div className="mt-1">
                      <select
                        id="timezone"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue="UTC"
                      >
                        <option>UTC</option>
                        <option>GMT</option>
                        <option>EST</option>
                        <option>PST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <div className="mt-1">
                      <select
                        id="language"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue="English"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="maintenance-mode"
                      name="maintenance-mode"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                    />
                    <label htmlFor="maintenance-mode" className="ml-2 block text-sm text-gray-900">
                      Maintenance Mode
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        id="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        id="new-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        id="confirm-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="two-factor" className="block text-sm font-medium text-gray-700">
                      Two-Factor Authentication
                    </label>
                    <div className="mt-1">
                      <select
                        id="two-factor"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        defaultValue="disabled"
                      >
                        <option value="disabled">Disabled</option>
                        <option value="enabled">Enabled</option>
                        <option value="app">Authenticator App</option>
                        <option value="sms">SMS</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="email-reports"
                            name="email-reports"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            defaultChecked
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-reports" className="font-medium text-gray-700">
                            Reports
                          </label>
                          <p className="text-gray-500">Receive daily and weekly reports</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="email-alerts"
                            name="email-alerts"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            defaultChecked
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-alerts" className="font-medium text-gray-700">
                            Alerts
                          </label>
                          <p className="text-gray-500">Receive system alerts and notifications</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="email-updates"
                            name="email-updates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-updates" className="font-medium text-gray-700">
                            Product Updates
                          </label>
                          <p className="text-gray-500">Receive product updates and announcements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Push Notifications</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="push-reports"
                            name="push-reports"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            defaultChecked
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-reports" className="font-medium text-gray-700">
                            Reports
                          </label>
                          <p className="text-gray-500">Receive push notifications for reports</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="push-alerts"
                            name="push-alerts"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-alerts" className="font-medium text-gray-700">
                            Alerts
                          </label>
                          <p className="text-gray-500">Receive push notifications for alerts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Theme</h3>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                      <div className="relative">
                        <div className="overflow-hidden rounded-lg border-2 border-transparent ring-2 ring-primary-600">
                          <div className="bg-white p-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                            </div>
                            <div className="mt-4 space-y-2">
                              <div className="h-2 w-full rounded bg-gray-200"></div>
                              <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <input
                            id="theme-light"
                            name="theme"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                            defaultChecked
                          />
                          <label htmlFor="theme-light" className="ml-3 block text-sm font-medium text-gray-700">
                            Light
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="overflow-hidden rounded-lg border-2 border-transparent">
                          <div className="bg-gray-900 p-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                              <div className="h-4 w-4 rounded-full bg-gray-600"></div>
                            </div>
                            <div className="mt-4 space-y-2">
                              <div className="h-2 w-full rounded bg-gray-700"></div>
                              <div className="h-2 w-3/4 rounded bg-gray-700"></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <input
                            id="theme-dark"
                            name="theme"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                          />
                          <label htmlFor="theme-dark" className="ml-3 block text-sm font-medium text-gray-700">
                            Dark
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="overflow-hidden rounded-lg border-2 border-transparent">
                          <div className="bg-gradient-to-br from-indigo-900 to-purple-800 p-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                            </div>
                            <div className="mt-4 space-y-2">
                              <div className="h-2 w-full rounded bg-gray-200"></div>
                              <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <input
                            id="theme-system"
                            name="theme"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                          />
                          <label htmlFor="theme-system" className="ml-3 block text-sm font-medium text-gray-700">
                            System
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Sidebar</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="sidebar-collapsed"
                          name="sidebar-collapsed"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                        />
                        <label htmlFor="sidebar-collapsed" className="ml-3 block text-sm font-medium text-gray-700">
                          Collapsed by default
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  <Save className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Save Changes
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}