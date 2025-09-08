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
  Globe,
  Database,
  Network,
  Zap,
  User,
  Lock,
  CreditCard,
  FileText,
  HelpCircle,
  ChevronRight,
  Check
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'integrations', name: 'Integrations', icon: Network },
  ]

  // Form state
  const [formData, setFormData] = useState({
    siteName: 'CloudFi Labs',
    timezone: 'UTC',
    language: 'English',
    maintenanceMode: false,
    twoFactor: 'disabled',
    emailReports: true,
    emailAlerts: true,
    emailUpdates: false,
    pushReports: true,
    pushAlerts: false,
    theme: 'light',
    sidebarCollapsed: false,
    billingEmail: 'billing@cloudfi.com',
    paymentMethod: 'Credit Card',
    apiKey: 'sk_**********************a1b2c3',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Saving settings:', formData)
    alert('Settings saved successfully!')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Page title */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your account settings and preferences
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <FileText className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Export Settings
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <Save className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex items-center">
                    <Icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 ${
                        activeTab === tab.id ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                      aria-hidden="true"
                    />
                    {tab.name}
                  </div>
                  <ChevronRight className={`h-4 w-4 text-gray-400 ${activeTab === tab.id ? 'text-gray-500' : ''}`} />
                </button>
              )
            })}
          </nav>
          
          {/* Help section */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Need help?</h3>
                <p className="mt-1 text-sm text-blue-700">
                  Visit our documentation or contact support.
                </p>
                <div className="mt-2">
                  <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-600">
                    Documentation <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
                        name="siteName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        value={formData.siteName}
                        onChange={handleInputChange}
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
                        name="timezone"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        value={formData.timezone}
                        onChange={handleInputChange}
                      >
                        <option>UTC</option>
                        <option>GMT</option>
                        <option>EST</option>
                        <option>PST</option>
                        <option>CET</option>
                        <option>AEST</option>
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
                        name="language"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        value={formData.language}
                        onChange={handleInputChange}
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                        <option>Chinese</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="maintenance-mode"
                      name="maintenanceMode"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                      checked={formData.maintenanceMode}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="maintenance-mode" className="ml-2 block text-sm text-gray-900">
                      Maintenance Mode
                    </label>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">API Access</h3>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        API Key
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          readOnly
                          value={formData.apiKey}
                          className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          <Key className="-ml-0.5 h-5 w-5 text-gray-400" />
                          Regenerate
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Use this key to authenticate API requests. Keep it secret!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Password</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <label htmlFor="two-factor" className="block text-sm font-medium text-gray-700">
                            Two-Factor Authentication
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className={`${
                              formData.twoFactor !== 'disabled' ? 'bg-primary-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2`}
                            role="switch"
                            aria-checked={formData.twoFactor !== 'disabled'}
                          >
                            <span
                              aria-hidden="true"
                              className={`${
                                formData.twoFactor !== 'disabled' ? 'translate-x-5' : 'translate-x-0'
                              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                            />
                          </button>
                        </div>
                      </div>
                      
                      {formData.twoFactor !== 'disabled' && (
                        <div className="mt-4 p-4 bg-green-50 rounded-lg">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <Check className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-green-700">
                                <span className="font-medium">2FA is enabled</span> using {formData.twoFactor}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <label htmlFor="two-factor-method" className="block text-sm font-medium text-gray-700">
                          Authentication Method
                        </label>
                        <div className="mt-1">
                          <select
                            id="two-factor-method"
                            name="twoFactor"
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            value={formData.twoFactor}
                            onChange={handleInputChange}
                          >
                            <option value="disabled">Disabled</option>
                            <option value="authenticator">Authenticator App</option>
                            <option value="sms">SMS</option>
                            <option value="email">Email</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
                    <div className="mt-4">
                      <ul className="divide-y divide-gray-200">
                        <li className="py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">Chrome on Windows</p>
                                <p className="text-sm text-gray-500">San Francisco, CA · Active now</p>
                              </div>
                            </div>
                            <button className="text-sm font-medium text-red-600 hover:text-red-500">
                              Revoke
                            </button>
                          </div>
                        </li>
                        <li className="py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-gray-300 mr-3"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">Safari on macOS</p>
                                <p className="text-sm text-gray-500">Seattle, WA · 2 hours ago</p>
                              </div>
                            </div>
                            <button className="text-sm font-medium text-red-600 hover:text-red-500">
                              Revoke
                            </button>
                          </div>
                        </li>
                      </ul>
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
                            name="emailReports"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            checked={formData.emailReports}
                            onChange={handleInputChange}
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
                            name="emailAlerts"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            checked={formData.emailAlerts}
                            onChange={handleInputChange}
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
                            name="emailUpdates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            checked={formData.emailUpdates}
                            onChange={handleInputChange}
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

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Push Notifications</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="push-reports"
                            name="pushReports"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            checked={formData.pushReports}
                            onChange={handleInputChange}
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
                            name="pushAlerts"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                            checked={formData.pushAlerts}
                            onChange={handleInputChange}
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
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Quiet Hours
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Mute notifications during specific hours
                          </p>
                        </div>
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Configure
                        </button>
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
                            value="light"
                            checked={formData.theme === 'light'}
                            onChange={handleInputChange}
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
                            value="dark"
                            checked={formData.theme === 'dark'}
                            onChange={handleInputChange}
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
                            value="system"
                            checked={formData.theme === 'system'}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="theme-system" className="ml-3 block text-sm font-medium text-gray-700">
                            System
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Sidebar</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="sidebar-collapsed"
                          name="sidebarCollapsed"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                          checked={formData.sidebarCollapsed}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="sidebar-collapsed" className="ml-3 block text-sm font-medium text-gray-700">
                          Collapsed by default
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Density</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="relative">
                        <div className="border-2 border-primary-600 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900">Compact</h4>
                          <p className="mt-1 text-sm text-gray-500">More information in less space</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="border-2 border-transparent rounded-lg p-4 hover:border-gray-300">
                          <h4 className="font-medium text-gray-900">Default</h4>
                          <p className="mt-1 text-sm text-gray-500">Balanced spacing and information</p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="border-2 border-transparent rounded-lg p-4 hover:border-gray-300">
                          <h4 className="font-medium text-gray-900">Comfortable</h4>
                          <p className="mt-1 text-sm text-gray-500">More whitespace and relaxed spacing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Billing Information</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="billing-email" className="block text-sm font-medium text-gray-700">
                          Billing Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="billing-email"
                            name="billingEmail"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            value={formData.billingEmail}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
                          Payment Method
                        </label>
                        <div className="mt-1">
                          <select
                            id="payment-method"
                            name="paymentMethod"
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                          >
                            <option>Credit Card</option>
                            <option>PayPal</option>
                            <option>Bank Transfer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
                    <div className="mt-4 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-blue-900">Professional Plan</h4>
                          <p className="text-sm text-blue-700">$299/month</p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          Active
                        </span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-blue-700">Next billing date: June 1, 2023</p>
                        </div>
                        <div className="text-right">
                          <button className="text-sm font-medium text-blue-700 hover:text-blue-600">
                            View Invoice History
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Usage</h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Users</span>
                          <span className="text-sm text-gray-500">42/100</span>
                        </div>
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Storage</span>
                          <span className="text-sm text-gray-500">125GB/500GB</span>
                        </div>
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">API Requests</span>
                          <span className="text-sm text-gray-500">45,000/100,000</span>
                        </div>
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Connected Apps</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Zap className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Slack</h4>
                            <p className="text-sm text-gray-500">Connected 2 days ago</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Configure
                          </button>
                          <button className="text-sm font-medium text-red-600 hover:text-red-500">
                            Disconnect
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <Database className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">AWS</h4>
                            <p className="text-sm text-gray-500">Connected 1 week ago</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Configure
                          </button>
                          <button className="text-sm font-medium text-red-600 hover:text-red-500">
                            Disconnect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Available Integrations</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Network className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Microsoft Teams</h4>
                            <p className="text-sm text-gray-500">Collaboration platform</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Connect
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Globe className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">Google Cloud</h4>
                            <p className="text-sm text-gray-500">Cloud computing services</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSave}
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