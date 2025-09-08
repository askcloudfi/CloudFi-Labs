'use client'

import { useState } from 'react'
import { QuoteIcon, StarIcon } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechInnovate",
      company: "TechInnovate",
      content: "CloudFi Labs has transformed how we manage our cloud spending. We've reduced costs by 35% while gaining better visibility into our financial operations.",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Finance Director at Global Enterprises",
      company: "Global Enterprises",
      content: "The compliance dashboard alone has saved us hundreds of hours in audit preparation. The automated reporting features are a game-changer.",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Cloud Architect at StartupHub",
      company: "StartupHub",
      content: "As a growing startup, we needed financial tools that could scale with us. CloudFi Labs provided exactly that with intuitive dashboards and powerful analytics.",
      avatar: "https://ui-avatars.com/api/?name=Emma+Rodriguez&background=random"
    }
  ]

  const companies = [
    { name: "TechCorp", logo: "https://placehold.co/120x40?text=TechCorp" },
    { name: "InnovateCo", logo: "https://placehold.co/120x40?text=InnovateCo" },
    { name: "GlobalSoft", logo: "https://placehold.co/120x40?text=GlobalSoft" },
    { name: "CloudFirst", logo: "https://placehold.co/120x40?text=CloudFirst" },
    { name: "DataDriven", logo: "https://placehold.co/120x40?text=DataDriven" },
    { name: "FutureTech", logo: "https://placehold.co/120x40?text=FutureTech" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who rely on CloudFi Labs for their cloud financial management
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <QuoteIcon className="w-10 h-10 text-primary-600 mb-6" />
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center items-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-h-10 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}