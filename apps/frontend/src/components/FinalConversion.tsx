'use client'

export default function FinalConversion() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Cloud Financial Operations?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl">
              Join thousands of professionals who trust CloudFi Labs to manage, optimize, and secure their cloud spending.
            </p>
          </div>
          
          <div className="lg:w-1/3 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">10,000+</div>
            <div className="text-primary-100">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">$50M+</div>
            <div className="text-primary-100">Saved Annually</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-primary-100">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-primary-100">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}