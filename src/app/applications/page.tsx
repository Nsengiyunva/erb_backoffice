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
  
export default () => {
    const [applications, setApplications] = useState(mockApplications);
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  
    const handleAction = (id: string, action: 'approved' | 'rejected') => {
      setApplications(apps => apps.map(app => 
        app.id === id ? { ...app, status: action } : app
      ));
      setSelectedApp(null);
    };
  
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-600 rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-3xl font-bold mb-2">Pending Applications</h1>
          <p className="text-blue-100">Review and process engineering license applications</p>
        </div>
  
        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app)}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transform hover:-translate-y-1 transition-all border-2 ${
                app.status === 'pending' 
                  ? 'border-gray-200 hover:border-blue-900' 
                  : app.status === 'approved'
                  ? 'border-green-300 bg-green-50'
                  : 'border-red-300 bg-red-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.category}</p>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  app.type === 'new' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {app.type.toUpperCase()}
                </div>
              </div>
  
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Application ID:</span>
                  <span className="font-semibold text-gray-900">#{app.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Submission Date:</span>
                  <span className="font-semibold text-gray-900">{app.date}</span>
                </div>
                {app.licenseNumber && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">License Number:</span>
                    <span className="font-semibold text-gray-900">{app.licenseNumber}</span>
                  </div>
                )}
              </div>
  
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  {app.status === 'pending' && (
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                  )}
                  {app.status === 'approved' && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {app.status === 'rejected' && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className={`text-sm font-semibold ${
                    app.status === 'pending' ? 'text-yellow-600' :
                    app.status === 'approved' ? 'text-green-600' :
                    'text-red-600'
                  }`}>
                    {app.status.toUpperCase()}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
  
        {/* Detail Modal */}
        {selectedApp && selectedApp.status === 'pending' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Details</h2>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Applicant Name</label>
                    <p className="text-lg text-gray-900">{selectedApp.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Category</label>
                    <p className="text-lg text-gray-900">{selectedApp.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Application Type</label>
                    <p className="text-lg text-gray-900">{selectedApp.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Date Submitted</label>
                    <p className="text-lg text-gray-900">{selectedApp.date}</p>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-4">
                <button
                  onClick={() => handleAction(selectedApp.id, 'approved')}
                  className="flex-1 bg-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve
                </button>
                <button
                  onClick={() => handleAction(selectedApp.id, 'rejected')}
                  className="flex-1 bg-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <XCircle className="w-5 h-5" />
                  Reject
                </button>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };