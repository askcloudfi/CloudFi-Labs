'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@cloudfi.com',
    role: 'Administrator',
    department: 'Engineering',
    joinDate: '2023-01-15',
    lastLogin: '2023-12-01 09:30:00',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-gray-300 mb-4"></div>
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-gray-600">{profile.role}</p>
                <p className="text-gray-500 text-sm mt-2">{profile.department}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Joined</p>
                  <p className="font-medium">{profile.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Login</p>
                  <p className="font-medium">{profile.lastLogin}</p>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6" 
                onClick={() => {
                  setIsEditing(true);
                  setEditProfile(profile);
                }}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{isEditing ? 'Edit Profile' : 'Profile Details'}</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2"
                      value={editProfile.name}
                      onChange={(e) => setEditProfile({...editProfile, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2"
                      value={editProfile.email}
                      onChange={(e) => setEditProfile({...editProfile, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2"
                      value={editProfile.department}
                      onChange={(e) => setEditProfile({...editProfile, department: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      className="px-4 py-2"
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                    <Button 
                      variant="outline"
                      className="px-4 py-2"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your personal information and contact details.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900">Security</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your password and secure your account.
                    </p>
                    <Button variant="outline" className="mt-3 px-4 py-2">Change Password</Button>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Configure how you receive notifications.
                    </p>
                    <Button variant="outline" className="mt-3 px-4 py-2">Manage Notifications</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}