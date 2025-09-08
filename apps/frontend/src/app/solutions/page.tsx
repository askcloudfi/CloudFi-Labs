'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: 'Cloud Cost Management',
      description: 'Optimize your cloud spending with real-time visibility and automated cost controls.',
      features: [
        'Real-time cost monitoring',
        'Budget alerts and notifications',
        'Resource optimization recommendations',
        'Multi-cloud cost allocation'
      ],
      icon: '💰',
    },
    {
      id: 2,
      title: 'Financial Analytics',
      description: 'Gain deep insights into your financial performance with advanced analytics and reporting.',
      features: [
        'Customizable dashboards',
        'Predictive financial modeling',
        'ROI analysis and tracking',
        'Automated report generation'
      ],
      icon: '📊',
    },
    {
      id: 3,
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and maintain governance across your cloud infrastructure.',
      features: [
        'Policy enforcement automation',
        'Audit trail and reporting',
        'Compliance dashboard',
        'Risk assessment tools'
      ],
      icon: '🔒',
    },
    {
      id: 4,
      title: 'Team Collaboration',
      description: 'Enhance team productivity with integrated collaboration tools and workflows.',
      features: [
        'Shared workspaces',
        'Real-time collaboration',
        'Task management',
        'Communication tools'
      ],
      icon: '👥',
    },
  ];

  const benefits = [
    {
      title: 'Reduce Costs',
      description: 'Cut cloud expenses by up to 30% with our optimization tools.',
      stat: '30% average savings',
    },
    {
      title: 'Increase Efficiency',
      description: 'Automate routine tasks and focus on strategic initiatives.',
      stat: '50% time savings',
    },
    {
      title: 'Ensure Compliance',
      description: 'Maintain regulatory compliance with automated tools.',
      stat: '99.9% compliance rate',
    },
    {
      title: 'Improve Visibility',
      description: 'Get complete visibility into your financial operations.',
      stat: '100% transparency',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive solutions for modern financial operations
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Discover how CloudFi Labs can transform your financial management with our suite of powerful tools and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg">
                Get Started
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to optimize your financial operations and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose CloudFi Labs?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the benefits that thousands of businesses enjoy with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-2">{benefit.stat}</p>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Financial Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using CloudFi Labs to optimize their financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg">
                Start Free Trial
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}