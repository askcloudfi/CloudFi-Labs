'use client'

import { TrendingUpIcon, DollarSignIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Challenge of Cloud Financial Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Managing cloud costs and financial operations is complex and time-consuming
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Problem Section */}
          <div className="lg:w-1/2">
            <div className="bg-red-50 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <AlertTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Lack of Visibility</h4>
                    <p className="text-gray-600">
                      Without proper tools, it's difficult to track where your cloud spending is going, 
                      leading to unexpected costs and budget overruns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Manual Processes</h4>
                    <p className="text-gray-600">
                      Spreadsheets and manual reporting are error-prone and time-consuming, 
                      taking valuable time away from strategic initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance Risks</h4>
                    <p className="text-gray-600">
                      Meeting regulatory requirements and internal policies without proper 
                      automation increases the risk of non-compliance and audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution Section */}
          <div className="lg:w-1/2">
            <div className="bg-green-50 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Complete Visibility</h4>
                    <p className="text-gray-600">
                      Real-time dashboards and detailed reports give you full visibility into 
                      your cloud spending across all services and providers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Automated Workflows</h4>
                    <p className="text-gray-600">
                      Automate cost allocation, budget alerts, and reporting to save time and 
                      reduce errors in your financial operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance Assurance</h4>
                    <p className="text-gray-600">
                      Built-in compliance monitoring and audit trails ensure you meet regulatory 
                      requirements and internal policies automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}