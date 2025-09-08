'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  const partners = [
    {
      name: 'AWS Partner Network',
      logo: '/images/aws-logo.png',
      description: 'Advanced Technology Partner with specialized expertise in cloud financial management.',
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/azure-logo.png',
      description: 'Gold Cloud Platform Partner with integrated cost management solutions.',
    },
    {
      name: 'Google Cloud',
      logo: '/images/gcp-logo.png',
      description: 'Premier Partner with specialized billing and cost optimization capabilities.',
    },
    {
      name: 'Salesforce',
      logo: '/images/salesforce-logo.png',
      description: 'ISV Partner with integrated financial reporting and analytics.',
    },
    {
      name: 'SAP',
      logo: '/images/sap-logo.png',
      description: 'Technology Partner with enterprise resource planning integration.',
    },
    {
      name: 'Oracle',
      logo: '/images/oracle-logo.png',
      description: 'Strategic Partner with cloud infrastructure cost management solutions.',
    },
  ];

  const partnerPrograms = [
    {
      title: 'Technology Alliance Program',
      description: 'Join our ecosystem of technology partners to build integrated solutions.',
      benefits: [
        'Co-development opportunities',
        'Joint go-to-market initiatives',
        'Technical enablement resources',
        'Priority support',
      ],
    },
    {
      title: 'Reseller Program',
      description: 'Become an authorized reseller and expand your cloud service offerings.',
      benefits: [
        'Competitive margins',
        'Sales training and enablement',
        'Marketing resources',
        'Dedicated account management',
      ],
    },
    {
      title: 'Consulting Partner Program',
      description: 'Certified consulting partners delivering implementation and advisory services.',
      benefits: [
        'Partner certification',
        'Implementation support',
        'Client referral program',
        'Revenue sharing opportunities',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional value to our customers.
          </p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with the world's leading technology companies to provide comprehensive cloud financial management solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partner Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our partner ecosystem and grow your business with CloudFi Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-6">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Interested in partnering with CloudFi Labs? Join our ecosystem today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Partner Portal
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}