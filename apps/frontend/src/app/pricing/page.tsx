'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'annual' ? '$29' : '$39',
      period: billingCycle === 'annual' ? 'per month (billed annually)' : 'per month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 users',
        'Basic cost monitoring',
        'Email support',
        'Standard reports',
        '1 cloud provider',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: billingCycle === 'annual' ? '$99' : '$129',
      period: billingCycle === 'annual' ? 'per month (billed annually)' : 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced cost monitoring',
        'Priority support',
        'Custom reports',
        '3 cloud providers',
        'Budget alerts',
        'Resource optimization',
      ],
      cta: 'Try Free for 14 Days',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored to your needs',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited users',
        'All Professional features',
        '24/7 dedicated support',
        'Custom integrations',
        'All cloud providers',
        'Advanced analytics',
        'Compliance dashboard',
        'Single sign-on (SSO)',
        'Personalized onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support bank transfers for annual plans.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, our Professional plan includes a 14-day free trial with full access to all features.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative rounded-full w-14 h-7 bg-white/20 transition duration-300"
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                  billingCycle === 'annual' ? 'left-8' : 'left-1'
                }`}
              ></div>
            </button>
            <span className={`ml-4 font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-blue-200'}`}>
              Annual <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded-full ml-2">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  plan.popular ? 'ring-2 ring-indigo-600 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2">
                    <span className="font-medium">Most Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}