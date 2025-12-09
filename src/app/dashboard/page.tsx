'use client';

import React, { useState } from 'react';
import { Users, FileText, RefreshCw, Clock, ChevronRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type Application = {
    id: string;
    name: string;
    category: string;
    type: 'new' | 'renewal';
    status: 'pending' | 'approved' | 'rejected';
    date: string;
    licenseNumber?: string;
};


const stats = {
    totalEngineers: 1247,
    categories: {
      'Civil Engineering': 423,
      'Electrical Engineering': 298,
      'Mechanical Engineering': 267,
      'Chemical Engineering': 134,
      'Software Engineering': 125
    },
    renewals: 189,
    newApplications: 76
};


const mockApplications: Application[] = [
    { id: '001', name: 'John Mukasa', category: 'Civil Engineering', type: 'new', status: 'pending', date: '2024-12-05' },
    { id: '002', name: 'Sarah Nakato', category: 'Electrical Engineering', type: 'renewal', status: 'pending', date: '2024-12-04', licenseNumber: 'EE-2019-456' },
    { id: '003', name: 'David Okello', category: 'Mechanical Engineering', type: 'new', status: 'pending', date: '2024-12-03' },
    { id: '004', name: 'Grace Achieng', category: 'Chemical Engineering', type: 'renewal', status: 'pending', date: '2024-12-02', licenseNumber: 'CH-2020-789' },
    { id: '005', name: 'Michael Kaaya', category: 'Civil Engineering', type: 'new', status: 'pending', date: '2024-12-01' },
    { id: '006', name: 'Rebecca Namuli', category: 'Software Engineering', type: 'renewal', status: 'pending', date: '2024-11-30', licenseNumber: 'SW-2021-234' },
  ];

export default ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-900 rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-red-100">Engineering Licensing Board Management System</p>
        </div>
  
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 text-blue-900" />
              <span className="text-sm font-semibold text-gray-500 uppercase">Total</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{stats.totalEngineers}</div>
            <div className="text-sm text-gray-600">Registered Engineers</div>
          </div>
  
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-10 h-10 text-red-600" />
              <span className="text-sm font-semibold text-gray-500 uppercase">New</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{stats.newApplications}</div>
            <div className="text-sm text-gray-600">New Applications</div>
          </div>
  
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <RefreshCw className="w-10 h-10 text-blue-600" />
              <span className="text-sm font-semibold text-gray-500 uppercase">Renewal</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">{stats.renewals}</div>
            <div className="text-sm text-gray-600">Renewal Applications</div>
          </div>
  
          <div 
            onClick={() => onNavigate('pending')}
            className="bg-gradient-to-br from-red-600 to-blue-900 rounded-xl shadow-lg p-6 text-white cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-10 h-10 text-white" />
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold mb-1">{mockApplications.length}</div>
            <div className="text-sm text-red-100">Pending Applications</div>
          </div>
        </div>
  
        {/* Categories Breakdown */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Engineers by Category</h2>
          <div className="space-y-4">
            {Object.entries(stats.categories).map(([category, count]) => (
              <div key={category} className="flex items-center">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{category}</span>
                    <span className="text-gray-900 font-bold">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-red-600 to-blue-900 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(count / stats.totalEngineers) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };