'use client';

import React, { useState } from 'react';
import { Users, FileText, RefreshCw, Clock, ChevronRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// Types
type User = {
  email: string;
  password: string;
  role: string;
};

const mockUser: User = {
    email: 'admin@engineering.gov',
    password: 'admin123',
    role: 'Administrator'
  };

  export default ({ onLogin }: { onLogin: (user: User) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (email === mockUser.email && password === mockUser.password) {
        onLogin(mockUser);
      } else {
        setError('Invalid credentials. Try: admin@engineering.gov / admin123');
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-blue-900 rounded-2xl mb-4 shadow-xl">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Engineering Board</h1>
            <p className="text-gray-600">Licensing Management System</p>
          </div>
  
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Administrator Login</h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="admin@engineering.gov"
                />
              </div>
  
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
  
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}
  
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-blue-900 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
  
            <div className="mt-6 text-center text-sm text-gray-500">
              Protected system. Authorized access only.
            </div>
          </div>
        </div>
      </div>
    );
  };
