'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: '📚',
      href: '/resources/documentation',
    },
    {
      title: 'Blog',
      description: 'Latest news, insights, and industry trends',
      icon: '📰',
      href: '/resources/blog',
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of our solutions in action',
      icon: '📊',
      href: '/resources/case-studies',
    },
    {
      title: 'API Reference',
      description: 'Detailed technical documentation for developers',
      icon: '⚙️',
      href: '/resources/api',
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and walkthroughs',
      icon: '🎥',
      href: '/resources/videos',
    },
    {
      title: 'Community',
      description: 'Connect with other users and experts',
      icon: '👥',
      href: '/resources/community',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Everything you need to get the most out of CloudFi Labs
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href={category.href} 
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular and helpful resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <div className="p-8">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Guide
                </span>
                <h3 className="text-xl font-bold text-gray-800 my-3">Getting Started with Cloud Cost Management</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to set up and optimize your cloud cost management with our step-by-step guide.
                </p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                  Read Guide →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500"></div>
              <div className="p-8">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
                <h3 className="text-xl font-bold text-gray-800 my-3">How TechCorp Reduced Cloud Costs by 40%</h3>
                <p className="text-gray-600 mb-4">
                  Discover how a leading technology company optimized their cloud spending with CloudFi Labs.
                </p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
                  Read Case Study →
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