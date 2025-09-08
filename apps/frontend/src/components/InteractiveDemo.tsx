'use client'

import { useState } from 'react'
import { PlayIcon, BarChartIcon, PieChartIcon, TrendingUpIcon } from 'lucide-react'

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const features = [
    {
      id: 'dashboard',
      title: 'Real-time Dashboard',
      icon: <BarChartIcon className="w-5 h-5" />,
      description: 'Monitor your cloud spending with customizable real-time dashboards.'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: <PieChartIcon className="w-5 h-5" />,
      description: 'Deep dive into your spending patterns with our advanced analytics.'
    },
    {
      id: 'forecasting',
      title: 'Cost Forecasting',
      icon: <TrendingUpIcon className="w-5 h-5" />,
      description: 'Predict future spending with our machine learning-powered forecasting.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See CloudFi Labs in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our platform with our interactive demo
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Feature Tabs */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Features</h3>
              
              <div className="space-y-4">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeTab === feature.id
                        ? 'bg-primary-50 border border-primary-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-primary-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Start Interactive Demo
                </button>
              </div>
            </div>
          </div>
          
          {/* Demo Visualization */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {features.find(f => f.id === activeTab)?.title}
                </h3>
                <p className="text-gray-600">
                  {features.find(f => f.id === activeTab)?.description}
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 mb-4">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Interactive Demo Preview
                  </h4>
                  <p className="text-gray-400 max-w-md">
                    This would be an interactive visualization of the {features.find(f => f.id === activeTab)?.title} feature. 
                    In a real implementation, users could interact with sample data and see the platform in action.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Monthly Spend</p>
                  <p className="text-xl font-bold text-gray-900">$12,482</p>
                  <p className="text-sm text-green-600">↓ 12% from last month</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Forecasted</p>
                  <p className="text-xl font-bold text-gray-900">$14,200</p>
                  <p className="text-sm text-green-600">On track</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Savings</p>
                  <p className="text-xl font-bold text-gray-900">$3,847</p>
                  <p className="text-sm text-green-600">This quarter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}