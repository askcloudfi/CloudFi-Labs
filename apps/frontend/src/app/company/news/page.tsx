'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'CloudFi Labs Announces Series B Funding',
      date: 'May 15, 2023',
      excerpt: 'We\'re excited to announce our $25M Series B funding round led by prominent investors...',
      category: 'Company News',
    },
    {
      id: 2,
      title: 'New Partnership with AWS Announced',
      date: 'April 3, 2023',
      excerpt: 'CloudFi Labs partners with Amazon Web Services to provide enhanced cost optimization...',
      category: 'Partnerships',
    },
    {
      id: 3,
      title: 'CloudFi 3.0 Launches with AI-Powered Insights',
      date: 'March 12, 2023',
      excerpt: 'Our latest release introduces machine learning capabilities for predictive cost analysis...',
      category: 'Product Updates',
    },
    {
      id: 4,
      title: 'CloudFi Labs Named in Gartner Magic Quadrant',
      date: 'February 28, 2023',
      excerpt: 'Industry analysts recognize our platform as a leader in cloud financial management...',
      category: 'Recognition',
    },
    {
      id: 5,
      title: 'Expanding Our Team: New Office in Austin',
      date: 'January 20, 2023',
      excerpt: 'We\'re opening a new engineering office in Austin, Texas to accelerate product development...',
      category: 'Company News',
    },
    {
      id: 6,
      title: 'Sustainability Initiative Launch',
      date: 'December 5, 2022',
      excerpt: 'CloudFi Labs commits to carbon neutrality with new sustainability program...',
      category: 'Corporate Responsibility',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Company News</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay up to date with the latest announcements, product updates, and company news.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">1</button>
                <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">2</button>
                <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">3</button>
                <button className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">Next →</button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}