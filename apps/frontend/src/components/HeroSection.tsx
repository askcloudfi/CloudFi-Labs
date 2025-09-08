'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading')

  useEffect(() => {
    // Test API connection
    fetch('/api/health')
      .then(res => res.json())
      .then(() => setApiStatus('connected'))
      .catch(() => setApiStatus('error'))
  }, [])

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                New features available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your <span className="text-primary-600">Cloud Financial</span> Operations
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              CloudFi Labs provides comprehensive financial management for cloud infrastructure. 
              Optimize costs, gain insights, and ensure compliance with our all-in-one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                Start Free Trial
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
                Schedule Demo
              </button>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://ui-avatars.com/api/?name=User+${item}&background=random&size=40`}
                    alt={`User ${item}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">10,000+</span> professionals trust CloudFi Labs
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-primary-600 rounded-2xl shadow-xl"></div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-secondary-500 rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-primary-400 rounded-2xl shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}