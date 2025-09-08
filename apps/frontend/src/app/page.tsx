'use client'

import { useState, useEffect } from 'react'
import { CloudIcon, TrendingUpIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react'

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading')

  useEffect(() => {
    // Test API connection
    fetch('/api/health')
      .then(res => res.json())
      .then(() => setApiStatus('connected'))
      .catch(() => setApiStatus('error'))
  }, [])

  const features = [
    {
      icon: <CloudIcon className="w-8 h-8 text-primary-600" />,
      title: 'Cloud-Native',
      description: 'Built for the modern cloud infrastructure with scalability in mind.'
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 text-primary-600" />,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting for better financial insights.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with regulatory compliance built-in.'
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-primary-600" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for finance teams of all sizes.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <CloudIcon className="w-8 h-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">CloudFi Labs</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                apiStatus === 'connected' 
                  ? 'bg-green-100 text-green-800' 
                  : apiStatus === 'error'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                API: {apiStatus === 'connected' ? 'Connected' : apiStatus === 'error' ? 'Disconnected' : 'Checking...'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-600">CloudFi Labs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive cloud finance platform built with Next.js and Node.js. 
            Streamline your financial operations with modern technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary px-8 py-3 text-lg">
              Get Started
            </button>
            <button className="btn-secondary px-8 py-3 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CloudFi Labs?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with financial expertise 
              to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 CloudFi Labs. Built with Next.js, Node.js, and TypeScript.</p>
      </footer>
    </div>
  )
}