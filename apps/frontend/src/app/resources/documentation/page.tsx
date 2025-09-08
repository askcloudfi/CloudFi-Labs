'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DocumentationPage() {
  const docSections = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up and configure CloudFi Labs',
      items: [
        'Quick Start Guide',
        'Installation',
        'Configuration',
        'First Steps',
      ],
    },
    {
      title: 'API Reference',
      description: 'Detailed documentation for our REST and GraphQL APIs',
      items: [
        'Authentication',
        'User Management',
        'Financial Data',
        'Reporting',
        'Webhooks',
      ],
    },
    {
      title: 'Integration Guides',
      description: 'Connect CloudFi with your existing tools and services',
      items: [
        'AWS Integration',
        'Azure Integration',
        'Google Cloud Integration',
        'Slack Integration',
        'Jira Integration',
      ],
    },
    {
      title: 'Best Practices',
      description: 'Optimize your usage of CloudFi Labs',
      items: [
        'Cost Optimization',
        'Security Recommendations',
        'Performance Tuning',
        'Team Collaboration',
      ],
    },
    {
      title: 'Troubleshooting',
      description: 'Solutions to common issues and problems',
      items: [
        'Connection Issues',
        'Permission Errors',
        'Data Sync Problems',
        'Performance Issues',
      ],
    },
    {
      title: 'Release Notes',
      description: 'What\'s new in each version',
      items: [
        'Version 3.0',
        'Version 2.5',
        'Version 2.0',
        'Version 1.5',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation</h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive guides and references to help you get the most out of CloudFi Labs
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href="#" 
                          className="text-indigo-600 hover:text-indigo-800 flex items-center"
                        >
                          <span className="mr-2">→</span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                  >
                    View All →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">API Documentation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Integrate CloudFi with your applications using our comprehensive API
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium">
                  REST API
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
                  GraphQL
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Authentication</h3>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
                    <pre className="overflow-x-auto">
                      <code>
{`curl -X POST https://api.cloudfi.com/v1/auth \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`}
                      </code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Get User Data</h3>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
                    <pre className="overflow-x-auto">
                      <code>
{`curl -X GET https://api.cloudfi.com/v1/users/123 \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json"`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#" 
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                  View Full API Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}