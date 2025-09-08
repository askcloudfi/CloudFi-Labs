'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CostManagementPage() {
  const features = [
    {
      title: 'Real-time Cost Monitoring',
      description: 'Track your cloud spending as it happens with real-time dashboards and alerts.',
    },
    {
      title: 'Budget Management',
      description: 'Set budgets for projects, teams, or departments with customizable alerts.',
    },
    {
      title: 'Resource Optimization',
      description: 'Identify underutilized resources and receive actionable optimization recommendations.',
    },
    {
      title: 'Multi-cloud Support',
      description: 'Unified view of spending across AWS, Azure, Google Cloud, and other providers.',
    },
    {
      title: 'Cost Allocation',
      description: 'Allocate costs to specific projects, teams, or business units with tagging.',
    },
    {
      title: 'Forecasting',
      description: 'Predict future spending based on historical trends and planned activities.',
    },
  ];

  const benefits = [
    {
      stat: 'Up to 30%',
      description: 'Reduction in cloud costs',
    },
    {
      stat: '99.9%',
      description: 'Data accuracy',
    },
    {
      stat: 'Real-time',
      description: 'Monitoring and alerts',
    },
    {
      stat: '24/7',
      description: 'Expert support',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Cost Management</h1>
            <p className="text-xl md:text-2xl mb-8">
              Gain complete visibility and control over your cloud spending with real-time tracking and optimization.
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
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{benefit.stat}</div>
                <div className="text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to monitor, optimize, and control your cloud spending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with CloudFi in just a few simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Connect Your Accounts</h3>
                  <p className="text-gray-600">
                    Securely connect your cloud provider accounts with our easy setup process.
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Monitor & Analyze</h3>
                  <p className="text-gray-600">
                    View real-time spending data and receive insights on optimization opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Optimize & Save</h3>
                  <p className="text-gray-600">
                    Implement recommendations to reduce costs and improve efficiency.
                  </p>
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