'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'TechFlow Reduces Cloud Costs by 40%',
      company: 'TechFlow Inc.',
      industry: 'Technology',
      challenge: 'Managing multi-cloud expenses across AWS, Azure, and GCP',
      solution: 'Implemented CloudFi Labs cost management and optimization tools',
      results: '40% reduction in cloud spending, improved resource utilization',
      logo: '/images/techflow-logo.png',
      testimonial: 'CloudFi Labs helped us gain complete visibility into our cloud spending and identify optimization opportunities we never knew existed.',
      author: 'Sarah Johnson, CTO'
    },
    {
      id: 2,
      title: 'Global Retailer Achieves Compliance',
      company: 'RetailCorp',
      industry: 'Retail',
      challenge: 'Meeting strict regulatory requirements across multiple regions',
      solution: 'Deployed CloudFi Labs compliance and governance framework',
      results: '100% compliance rate, automated audit reporting',
      logo: '/images/retailcorp-logo.png',
      testimonial: 'With CloudFi Labs, we achieved full compliance in weeks instead of months, saving countless hours of manual work.',
      author: 'Michael Chen, Security Director'
    },
    {
      id: 3,
      title: 'Startup Scales Financial Operations',
      company: 'FinTech Startup',
      industry: 'Financial Services',
      challenge: 'Scaling financial operations during rapid growth phase',
      solution: 'Integrated CloudFi Labs financial analytics and reporting',
      results: '50% faster financial reporting, real-time insights',
      logo: '/images/fintech-logo.png',
      testimonial: 'CloudFi Labs enabled us to scale our financial operations seamlessly as we grew from 50 to 500 employees.',
      author: 'David Wilson, CFO'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl mb-8">
              See how businesses like yours are transforming their financial operations
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden mb-12 last:mb-0">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{study.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.company}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Results</h3>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{study.testimonial}"
                    </blockquote>
                    <p className="font-medium text-gray-800">— {study.author}</p>
                  </div>
                  
                  <div className="mt-6">
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
                      Read Full Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using CloudFi Labs to optimize their financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
              <button className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}