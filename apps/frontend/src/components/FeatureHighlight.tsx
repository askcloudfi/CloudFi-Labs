'use client'

import { 
  CloudIcon, 
  TrendingUpIcon, 
  ShieldCheckIcon, 
  UsersIcon,
  BarChartIcon,
  ZapIcon,
  LockIcon,
  GlobeIcon
} from 'lucide-react'

export default function FeatureHighlight() {
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
    },
    {
      icon: <BarChartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Real-time Dashboards',
      description: 'Monitor your cloud spending with customizable real-time dashboards.'
    },
    {
      icon: <ZapIcon className="w-8 h-8 text-primary-600" />,
      title: 'Automated Alerts',
      description: 'Get notified when spending exceeds thresholds or unusual patterns emerge.'
    },
    {
      icon: <LockIcon className="w-8 h-8 text-primary-600" />,
      title: 'Data Security',
      description: 'End-to-end encryption and secure data handling for all your financial data.'
    },
    {
      icon: <GlobeIcon className="w-8 h-8 text-primary-600" />,
      title: 'Multi-Cloud Support',
      description: 'Unified management across AWS, Azure, Google Cloud, and other providers.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Cloud Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage, optimize, and secure your cloud financial operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}