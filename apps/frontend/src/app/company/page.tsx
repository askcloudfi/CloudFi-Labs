'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState('openings');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced frontend developer to join our team.',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead product development initiatives and work with cross-functional teams.',
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Help us build and maintain our cloud infrastructure.',
    },
    {
      id: 4,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences for our products.',
    },
  ];

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We push boundaries and challenge the status quo to create cutting-edge solutions.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
    },
    {
      title: 'Integrity',
      description: 'We act with honesty and transparency in all our dealings.',
    },
    {
      title: 'Growth',
      description: 'We invest in our employees and foster continuous learning.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Help us build the future of cloud financial management. We're looking for passionate people to join our mission.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Culture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We foster an environment where innovation thrives, diversity is celebrated, and every voice matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive medical, dental, and vision insurance for you and your family.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working hours and unlimited PTO to ensure you recharge.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Growth</h3>
              <p className="text-gray-600">Learning stipend and conference attendance to advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in revolutionizing cloud financial management. Find your perfect role.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-3">{job.description}</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}