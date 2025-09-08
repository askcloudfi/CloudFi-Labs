'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function MultiCloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Multi-Cloud Management</h1>
            <p className="text-xl md:text-2xl mb-8">
              Unified financial management across all cloud platforms
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Gain complete visibility and control over your multi-cloud financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Unified Multi-Cloud Financial Management</h2>
              <p className="text-gray-600 mb-6">
                Managing costs across multiple cloud providers can be complex and time-consuming. 
                Our multi-cloud solutions provide a single pane of glass for monitoring, optimizing, 
                and controlling your cloud spending across AWS, Azure, Google Cloud, and other platforms.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Centralized Visibility</h3>
                  <p className="text-gray-600">
                    Get a unified view of your spending across all cloud providers with real-time dashboards 
                    and comprehensive reporting.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cross-Platform Optimization</h3>
                  <p className="text-gray-600">
                    Identify optimization opportunities across all your cloud environments with intelligent 
                    recommendations tailored to each platform.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Automated Cost Controls</h3>
                  <p className="text-gray-600">
                    Set budgets and alerts that span multiple cloud providers, with automated actions 
                    to prevent overspending.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Multi-Cloud Analytics</h3>
                  <p className="text-gray-600">
                    Compare performance and costs across platforms with advanced analytics that help you 
                    make informed decisions about your cloud strategy.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Learn More
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