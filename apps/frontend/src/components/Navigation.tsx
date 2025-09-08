'use client'

import { useState, useEffect } from 'react'
import { Menu, X, CloudIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {
      name: 'Products',
      href: '#',
      subItems: [
        { name: 'Cloud Cost Management', href: '#' },
        { name: 'Financial Analytics', href: '#' },
        { name: 'Compliance Dashboard', href: '#' },
        { name: 'Team Collaboration', href: '#' },
      ],
    },
    {
      name: 'Solutions',
      href: '#',
      subItems: [
        { name: 'Enterprise Finance', href: '#' },
        { name: 'Startup Growth', href: '#' },
        { name: 'Multi-Cloud Management', href: '#' },
        { name: 'Regulatory Compliance', href: '#' },
      ],
    },
    {
      name: 'Resources',
      href: '#',
      subItems: [
        { name: 'Documentation', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'API Reference', href: '#' },
      ],
    },
    {
      name: 'Pricing',
      href: '#',
      subItems: [
        { name: 'Plans Overview', href: '#' },
        { name: 'Compare Plans', href: '#' },
        { name: 'Enterprise Options', href: '#' },
      ],
    },
    {
      name: 'Company',
      href: '#',
      subItems: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <CloudIcon className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">CloudFi Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 font-medium">
              Login
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-primary-600 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="w-full text-center text-gray-700 hover:text-primary-600 font-medium py-2 border border-gray-300 rounded-lg">
                  Login
                </button>
                <button className="w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}