'use client'

import { useState } from 'react'
import { CheckIcon, XIcon } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '$29' : '$39',
      period: isAnnual ? '/month (billed annually)' : '/month',
      description: 'Perfect for small teams getting started',
      featured: false,
      features: [
        'Up to 5 users',
        'Basic dashboards',
        'Email support',
        '100+ integrations',
        'Basic reporting'
      ],
      notIncluded: [
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'SLA guarantee'
      ]
    },
    {
      name: 'Professional',
      price: isAnnual ? '$79' : '$99',
      period: isAnnual ? '/month (billed annually)' : '/month',
      description: 'Ideal for growing businesses',
      featured: true,
      features: [
        'Up to 20 users',
        'Advanced dashboards',
        'Priority email support',
        '200+ integrations',
        'Advanced reporting',
        'Cost forecasting',
        'Budget alerts'
      ],
      notIncluded: [
        'Custom dashboards',
        'Dedicated account manager',
        'SLA guarantee'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      featured: false,
      features: [
        'Unlimited users',
        'Custom dashboards',
        '24/7 phone & email support',
        'Unlimited integrations',
        'Advanced analytics',
        'Custom reporting',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise options'
      ],
      notIncluded: []
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your team. All plans include our core features.
          </p>
          
          {/* Pricing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative rounded-full w-14 h-7 transition duration-200 ease-linear"
            >
              <span
                className={`absolute left-0 top-0 w-14 h-7 rounded-full transition-colors ${
                  isAnnual ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              ></span>
              <span
                className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${
                  isAnnual ? 'transform translate-x-7' : ''
                }`}
              ></span>
            </button>
            <span className={`ml-3 font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full ml-1">Save 25%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${
                plan.featured 
                  ? 'border-primary-600 ring-2 ring-primary-600 ring-opacity-20 shadow-xl' 
                  : 'border-gray-200'
              } p-8`}
            >
              {plan.featured && (
                <div className="bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
              
              <button 
                className={`w-full py-3 px-4 rounded-lg font-medium mb-8 ${
                  plan.featured
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get started
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                
                {plan.notIncluded.map((notIncluded, notIncludedIndex) => (
                  <li key={notIncludedIndex} className="flex items-start opacity-60">
                    <XIcon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{notIncluded}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer discounts for non-profits?</h4>
              <p className="text-gray-600">
                Yes, we offer special pricing for non-profit organizations. Contact our sales team for more information.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial available?</h4>
              <p className="text-gray-600">
                We offer a 14-day free trial for all paid plans. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}