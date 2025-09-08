'use client';

import { useState, useEffect } from 'react';

export default function TestPage() {
  const [apiStatus, setApiStatus] = useState('loading');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setApiData(data);
        setApiStatus('connected');
      })
      .catch(err => {
        console.error('API Error:', err);
        setApiStatus('error');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">API Test Page</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">API Status:</h2>
          <div className={`px-4 py-2 rounded text-center font-medium ${
            apiStatus === 'connected' ? 'bg-green-100 text-green-800' : 
            apiStatus === 'error' ? 'bg-red-100 text-red-800' : 
            'bg-yellow-100 text-yellow-800'
          }`}>
            {apiStatus === 'connected' ? 'Connected' : 
             apiStatus === 'error' ? 'Error' : 
             'Loading...'}
          </div>
        </div>

        {apiData && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </div>
        )}

        <div className="text-center">
          <a 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}