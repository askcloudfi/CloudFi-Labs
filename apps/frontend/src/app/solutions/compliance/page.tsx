'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function ComplianceSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Regulatory Compliance</h1>
            <p className="text-xl md:text-2xl mb-8">
              Automated compliance for complex regulatory environments
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Ensure continuous compliance with automated tools and comprehensive reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Automated Compliance Management</h2>
              <p className="text-gray-600 mb-6">
                Navigating complex regulatory requirements is challenging and time-consuming. 
                Our compliance solutions automate the process of maintaining compliance with 
                frameworks like SOX, GDPR, HIPAA, and industry-specific regulations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Monitoring</h3>
                  <p className="text-gray-600">
                    Automatically monitor your systems 24/7 for compliance violations with real-time alerts 
                    when issues are detected.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Audit-Ready Reporting</h3>
                  <p className="text-gray-600">
                    Generate comprehensive compliance reports with a single click, including detailed 
                    audit trails and evidence of controls.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Policy Management</h3>
                  <p className="text-gray-600">
                    Create, deploy, and enforce security policies across your organization with our 
                    centralized policy management system.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Dashboards</h3>
                  <p className="text-gray-600">
                    Track your compliance status across multiple frameworks with intuitive dashboards 
                    that highlight areas of risk and improvement.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Request Demo
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