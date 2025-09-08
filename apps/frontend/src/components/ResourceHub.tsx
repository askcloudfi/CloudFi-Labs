'use client'

import { BookOpenIcon, FileTextIcon, VideoIcon, DownloadIcon } from 'lucide-react'

export default function ResourceHub() {
  const resources = [
    {
      id: 1,
      title: 'Cloud Cost Optimization Guide',
      description: 'Learn how to reduce your cloud spending by up to 40% with our comprehensive guide.',
      type: 'Guide',
      icon: <BookOpenIcon className="w-5 h-5" />,
      date: 'May 15, 2025'
    },
    {
      id: 2,
      title: 'Multi-Cloud Financial Management',
      description: 'Best practices for managing finances across multiple cloud providers.',
      type: 'Whitepaper',
      icon: <FileTextIcon className="w-5 h-5" />,
      date: 'Apr 28, 2025'
    },
    {
      id: 3,
      title: 'Platform Overview Webinar',
      description: 'Watch our 30-minute webinar covering all major features of CloudFi Labs.',
      type: 'Video',
      icon: <VideoIcon className="w-5 h-5" />,
      date: 'Apr 12, 2025'
    },
    {
      id: 4,
      title: 'Compliance Checklist',
      description: 'Ensure your cloud financial operations meet industry standards with our checklist.',
      type: 'Template',
      icon: <DownloadIcon className="w-5 h-5" />,
      date: 'Mar 30, 2025'
    },
    {
      id: 5,
      title: 'Case Study: TechInnovate',
      description: 'How TechInnovate reduced cloud costs by 35% in 6 months using our platform.',
      type: 'Case Study',
      icon: <FileTextIcon className="w-5 h-5" />,
      date: 'Mar 18, 2025'
    },
    {
      id: 6,
      title: 'API Documentation',
      description: 'Complete reference for integrating CloudFi Labs with your existing systems.',
      type: 'Documentation',
      icon: <BookOpenIcon className="w-5 h-5" />,
      date: 'Mar 5, 2025'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resource Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of guides, whitepapers, and resources to help you master cloud financial management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                    {resource.icon}
                  </div>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.date}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  )
}