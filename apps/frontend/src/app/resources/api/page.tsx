'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ApiReferencePage() {
  const [activeEndpoint, setActiveEndpoint] = useState('authentication');

  const endpoints = {
    authentication: {
      title: 'Authentication',
      description: 'Endpoints for user authentication and token management',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate a user and receive an access token',
          request: `{
  "email": "user@example.com",
  "password": "your_password"
}`,
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 123,
    "email": "user@example.com",
    "name": "John Doe"
  }
}`,
        },
        {
          method: 'POST',
          path: '/api/auth/logout',
          description: 'Invalidate the current user session',
          request: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
          response: `{
  "message": "Successfully logged out"
}`,
        },
      ],
    },
    users: {
      title: 'Users',
      description: 'Endpoints for user management',
      endpoints: [
        {
          method: 'GET',
          path: '/api/users',
          description: 'Retrieve a list of users',
          request: '',
          response: `{
  "users": [
    {
      "id": 123,
      "email": "user@example.com",
      "name": "John Doe",
      "role": "admin"
    }
  ]
}`,
        },
        {
          method: 'GET',
          path: '/api/users/{id}',
          description: 'Retrieve a specific user by ID',
          request: '',
          response: `{
  "id": 123,
  "email": "user@example.com",
  "name": "John Doe",
  "role": "admin",
  "createdAt": "2023-01-01T00:00:00Z"
}`,
        },
        {
          method: 'POST',
          path: '/api/users',
          description: 'Create a new user',
          request: `{
  "email": "newuser@example.com",
  "name": "New User",
  "password": "secure_password"
}`,
          response: `{
  "id": 124,
  "email": "newuser@example.com",
  "name": "New User",
  "role": "user",
  "createdAt": "2023-01-02T00:00:00Z"
}`,
        },
      ],
    },
    financial: {
      title: 'Financial Data',
      description: 'Endpoints for retrieving financial information',
      endpoints: [
        {
          method: 'GET',
          path: '/api/financial/overview',
          description: 'Get financial overview for the current period',
          request: '',
          response: `{
  "totalSpent": 12500.75,
  "budget": 15000.00,
  "remaining": 2499.25,
  "trend": "decreasing"
}`,
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">API Reference</h1>
            <p className="text-xl md:text-2xl mb-8">
              Integrate CloudFi with your applications using our comprehensive API
            </p>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Endpoints</h3>
                <ul className="space-y-2">
                  {Object.entries(endpoints).map(([key, endpoint]) => (
                    <li key={key}>
                      <button
                        onClick={() => setActiveEndpoint(key)}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                          activeEndpoint === key
                            ? 'bg-indigo-100 text-indigo-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {endpoint.title}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">SDKs</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        Python
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        Java
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        Go
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {endpoints[activeEndpoint as keyof typeof endpoints].title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {endpoints[activeEndpoint as keyof typeof endpoints].description}
                </p>
                
                <div className="space-y-12">
                  {endpoints[activeEndpoint as keyof typeof endpoints].endpoints.map((endpoint, index) => (
                    <div key={index} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                      <div className="flex items-center mb-6">
                        <span className={`px-3 py-1 rounded font-mono text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="ml-4 text-gray-800 font-mono">{endpoint.path}</code>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{endpoint.description}</p>
                      
                      {endpoint.request && (
                        <div className="mb-6">
                          <h4 className="font-medium text-gray-800 mb-2">Request</h4>
                          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
                            <pre className="overflow-x-auto">
                              <code>{endpoint.request}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Response</h4>
                        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
                          <pre className="overflow-x-auto">
                            <code>{endpoint.response}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Code Examples */}
              <div className="mt-8 bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Code Examples</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium">
                    JavaScript
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
                    Python
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
                    cURL
                  </button>
                </div>
                
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg">
                  <pre className="overflow-x-auto">
                    <code>
{`// JavaScript example
const response = await fetch('https://api.cloudfi.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your_password'
  })
});

const data = await response.json();
console.log(data.token);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}