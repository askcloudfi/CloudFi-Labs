'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">
              Scalable financial management for large organizations
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Comprehensive solutions designed for the complex needs of enterprise businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Enterprise Financial Management</h2>
              <p className="text-gray-600 mb-6">
                Our enterprise solutions are designed to handle the complex financial operations of large organizations. 
                With advanced features for multi-entity management, regulatory compliance, and sophisticated reporting, 
                CloudFi Labs provides the tools needed to optimize financial performance at scale.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Multi-Entity Management</h3>
                  <p className="text-gray-600">
                    Consolidate financial data across multiple entities, subsidiaries, and geographic regions 
                    with our powerful consolidation tools.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Compliance</h3>
                  <p className="text-gray-600">
                    Meet complex regulatory requirements with automated compliance frameworks that adapt 
                    to your specific industry and jurisdiction.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Reporting</h3>
                  <p className="text-gray-600">
                    Generate sophisticated financial reports with customizable dashboards and automated 
                    distribution to stakeholders.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Role-Based Access</h3>
                  <p className="text-gray-600">
                    Control access to sensitive financial data with granular permissions and audit trails 
                    for all user activities.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Schedule Enterprise Demo
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