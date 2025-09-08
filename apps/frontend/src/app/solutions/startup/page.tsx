'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function StartupSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Startup Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">
              Financial tools designed for growing businesses
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Simple, scalable solutions that grow with your startup from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Management for Startups</h2>
              <p className="text-gray-600 mb-6">
                Our startup solutions are designed to help growing businesses manage their finances effectively 
                without the complexity and cost of enterprise systems. From basic bookkeeping to advanced 
                financial planning, we provide the tools you need to scale efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Simple Setup</h3>
                  <p className="text-gray-600">
                    Get started in minutes with our intuitive onboarding process and pre-configured templates 
                    designed for startups.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Pricing</h3>
                  <p className="text-gray-600">
                    Pay only for what you use with our flexible pricing model that grows with your business.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cash Flow Management</h3>
                  <p className="text-gray-600">
                    Track income and expenses in real-time with automated categorization and forecasting tools.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Investor Ready Reports</h3>
                  <p className="text-gray-600">
                    Generate professional financial reports that investors expect with one-click reporting tools.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}