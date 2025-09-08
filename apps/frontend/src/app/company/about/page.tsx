'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former CFO at a major tech company with 15+ years of financial leadership experience.',
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'Tech visionary with a background in cloud infrastructure and distributed systems.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      bio: 'Product strategist with expertise in financial technology and user experience.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'VP of Engineering',
      bio: 'Engineering leader with a passion for building scalable, secure systems.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About CloudFi Labs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're on a mission to transform how businesses manage their cloud finances.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-600 mb-6 text-lg">
                CloudFi Labs was founded in 2020 by a team of financial experts and cloud engineers who recognized 
                the growing complexity of cloud cost management. As businesses increasingly moved to cloud infrastructure, 
                they faced unprecedented challenges in tracking, optimizing, and forecasting their cloud expenses.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our founders had firsthand experience with these challenges in their previous roles at major tech companies. 
                They realized that existing solutions were either too complex for small businesses or too limited for enterprises. 
                This insight became the foundation for CloudFi - a platform designed to make cloud financial management 
                accessible and powerful for organizations of all sizes.
              </p>
              <p className="text-gray-600 text-lg">
                Today, CloudFi Labs serves hundreds of customers worldwide, from startups to Fortune 500 companies. 
                We continue to innovate and expand our platform to meet the evolving needs of modern businesses in the cloud era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the people driving our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border border-blue-100">
              <p className="text-gray-700 text-xl text-center italic">
                "To empower businesses with intelligent cloud financial management tools that drive efficiency, 
                transparency, and cost savings in the cloud era."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete visibility into your cloud costs with no hidden fees or surprises.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously develop cutting-edge solutions to solve emerging cloud financial challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Partnership</h3>
                <p className="text-gray-600">
                  We work closely with our customers to understand their needs and build solutions that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}