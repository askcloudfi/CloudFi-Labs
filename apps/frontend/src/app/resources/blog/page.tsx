'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Financial Management',
      excerpt: 'Explore emerging trends and technologies that are reshaping how businesses manage their cloud costs.',
      date: 'May 15, 2023',
      author: 'Alex Johnson',
      category: 'Industry Insights',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: '5 Cost Optimization Strategies for AWS',
      excerpt: 'Practical tips to reduce your AWS spending without compromising performance or security.',
      date: 'April 28, 2023',
      author: 'Sam Smith',
      category: 'Best Practices',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Multi-Cloud vs Hybrid Cloud: Which is Right for You?',
      excerpt: 'Understanding the key differences and making the right infrastructure decisions for your business.',
      date: 'April 12, 2023',
      author: 'Taylor Brown',
      category: 'Cloud Strategy',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Compliance in the Cloud: Navigating Regulatory Requirements',
      excerpt: 'How to maintain compliance while leveraging the benefits of cloud infrastructure.',
      date: 'March 30, 2023',
      author: 'Jordan Lee',
      category: 'Compliance',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'The Hidden Costs of Cloud Migration',
      excerpt: 'Identifying and planning for often-overlooked expenses during cloud migration projects.',
      date: 'March 15, 2023',
      author: 'Casey Wilson',
      category: 'Migration',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Building a Cloud Financial Operations Team',
      excerpt: 'Key roles, responsibilities, and skills needed for effective cloud financial management.',
      date: 'February 28, 2023',
      author: 'Morgan Reed',
      category: 'Team Building',
      readTime: '6 min read',
    },
  ];

  const categories = [
    'All Posts',
    'Industry Insights',
    'Best Practices',
    'Cloud Strategy',
    'Compliance',
    'Migration',
    'Team Building',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">CloudFi Blog</h1>
            <p className="text-xl md:text-2xl mb-8">
              Insights, best practices, and industry trends in cloud financial management
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
                
                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                            <div>
                              <p className="font-medium text-gray-800">{post.author}</p>
                              <p className="text-gray-500 text-sm">{post.date}</p>
                            </div>
                          </div>
                          <a 
                            href="#" 
                            className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </article>
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
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block py-2 px-4 rounded-lg ${
                          index === 0 
                            ? 'bg-indigo-100 text-indigo-700 font-medium' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{post.title}</h4>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}