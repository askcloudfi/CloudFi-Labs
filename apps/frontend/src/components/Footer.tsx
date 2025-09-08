'use client'

import { 
  CloudIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  FacebookIcon, 
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'lucide-react'

export default function Footer() {
  const navigation = {
    products: [
      { name: 'Cloud Cost Management', href: '/products/cost-management' },
      { name: 'Financial Analytics', href: '/admin/analytics' },
      { name: 'Compliance Dashboard', href: '/solutions/compliance' },
      { name: 'Team Collaboration', href: '/admin/projects' },
    ],
    solutions: [
      { name: 'Enterprise Finance', href: '/solutions/enterprise' },
      { name: 'Startup Growth', href: '/solutions/startup' },
      { name: 'Multi-Cloud Management', href: '/solutions/multi-cloud' },
      { name: 'Regulatory Compliance', href: '/solutions/compliance' },
    ],
    resources: [
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Blog', href: '/resources/blog' },
      { name: 'API Reference', href: '/resources/api' },
    ],
    company: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Careers', href: '/company' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Partners', href: '/company/partners' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/resources/privacy-policy' },
      { name: 'Terms of Service', href: '/resources/terms-of-service' },
      { name: 'Cookie Policy', href: '/resources/cookie-policy' },
      { name: 'Compliance', href: '/solutions/compliance' },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info and Social Media */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <CloudIcon className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">CloudFi Labs</span>
            </div>
            <p className="text-gray-400 mb-6">
              Comprehensive cloud finance platform for modern businesses.
            </p>
            
            {/* Social Media Links */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">123 Cloud Street, San Francisco, CA 94105</span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">support@cloudfi-labs.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2 mb-6">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 mb-6">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 mb-6">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 mb-6">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">
                Get the latest news and updates from CloudFi Labs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-lg rounded-r-none sm:rounded-r-none sm:rounded-l-lg text-gray-900 w-full md:w-64 mb-2 sm:mb-0"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg rounded-l-none sm:rounded-l-none sm:rounded-r-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 CloudFi Labs. All rights reserved. Built with Next.js, Node.js, and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}