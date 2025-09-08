'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  const products = [
    {
      title: 'Cloud Cost Management',
      description: 'Gain complete visibility and control over your cloud spending with real-time tracking and optimization.',
      features: [
        'Real-time cost monitoring',
        'Budget alerts and forecasting',
        'Resource optimization recommendations',
        'Multi-cloud cost allocation',
      ],
    },
    {
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting to make data-driven financial decisions for your cloud infrastructure.',
      features: [
        'Customizable dashboards',
        'Trend analysis and forecasting',
        'Cost attribution models',
        'ROI tracking for cloud investments',
      ],
    },
    {
      title: 'Compliance Dashboard',
      description: 'Ensure regulatory compliance and governance with automated policy enforcement and audit trails.',
      features: [
        'Policy compliance monitoring',
        'Audit trail generation',
        'Regulatory reporting',
        'Access control management',
      ],
    },
    {
      title: 'Team Collaboration',
      description: 'Streamline financial workflows and improve team collaboration with shared workspaces and notifications.',
      features: [
        'Shared dashboards and reports',
        'Team-based access controls',
        'Notification and alert systems',
        'Integrated communication tools',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive cloud financial management solutions designed for modern businesses.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Cloud Financial Management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of companies using CloudFi to optimize their cloud spending.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}