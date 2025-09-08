'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">User Profile</h1>
            <p className="text-xl md:text-2xl mb-8">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-full flex items-center justify-center text-2xl">
                  U
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-800">User Name</h2>
                  <p className="text-gray-600">user@example.com</p>
                  <Button className="mt-2 bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50">
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">Personal Information</h4>
                    <p className="text-gray-600 mb-4">Update your personal details and contact information.</p>
                    <Button variant="outline">Edit Information</Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">Security</h4>
                    <p className="text-gray-600 mb-4">Manage your password and security preferences.</p>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">Notifications</h4>
                    <p className="text-gray-600 mb-4">Configure how you receive notifications.</p>
                    <Button variant="outline">Manage Notifications</Button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-2">Billing</h4>
                    <p className="text-gray-600 mb-4">View and manage your billing information.</p>
                    <Button variant="outline">Billing Settings</Button>
                  </div>
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