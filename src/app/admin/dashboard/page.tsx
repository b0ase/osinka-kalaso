'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface GoogleService {
  name: string
  description: string
  icon: string
  url: string
  color: string
  category: string
}

const googleServices: GoogleService[] = [
  // Communication & Email
  {
    name: 'Gmail',
    description: 'Full access to read, compose, send, and manage emails',
    icon: '📧',
    url: 'https://mail.google.com',
    color: 'bg-red-500 hover:bg-red-600',
    category: 'Communication'
  },
  {
    name: 'Gmail Settings',
    description: 'Manage email settings, filters, and sharing permissions',
    icon: '⚙️',
    url: 'https://mail.google.com/mail/u/0/#settings',
    color: 'bg-red-600 hover:bg-red-700',
    category: 'Communication'
  },
  
  // Document & Office
  {
    name: 'Google Docs',
    description: 'Create, edit, and manage documents with full access',
    icon: '📄',
    url: 'https://docs.google.com',
    color: 'bg-blue-500 hover:bg-blue-600',
    category: 'Documents'
  },
  {
    name: 'Google Sheets',
    description: 'Manage spreadsheets, data analysis, and reporting',
    icon: '📊',
    url: 'https://sheets.google.com',
    color: 'bg-green-500 hover:bg-green-600',
    category: 'Documents'
  },
  
  // Calendar & Scheduling
  {
    name: 'Google Calendar',
    description: 'Full calendar management, events, and scheduling',
    icon: '📅',
    url: 'https://calendar.google.com',
    color: 'bg-purple-500 hover:bg-purple-600',
    category: 'Calendar'
  },
  {
    name: 'Calendar Settings',
    description: 'Manage calendar permissions, sharing, and integrations',
    icon: '🔧',
    url: 'https://calendar.google.com/calendar/u/0/r/settings',
    color: 'bg-purple-600 hover:bg-purple-700',
    category: 'Calendar'
  },
  
  // File Storage & Management
  {
    name: 'Google Drive',
    description: 'Full access to files, folders, and cloud storage',
    icon: '☁️',
    url: 'https://drive.google.com',
    color: 'bg-yellow-500 hover:bg-yellow-600',
    category: 'Storage'
  },
  {
    name: 'Drive Activity',
    description: 'Monitor file activity and manage permissions',
    icon: '📈',
    url: 'https://drive.google.com/drive/my-drive',
    color: 'bg-yellow-600 hover:bg-yellow-700',
    category: 'Storage'
  },
  
  // Analytics & Data
  {
    name: 'Google Analytics',
    description: 'Website analytics, user behavior, and performance data',
    icon: '📊',
    url: 'https://analytics.google.com',
    color: 'bg-indigo-500 hover:bg-indigo-600',
    category: 'Analytics'
  },
  {
    name: 'BigQuery',
    description: 'Advanced data analytics and business intelligence',
    icon: '🔍',
    url: 'https://console.cloud.google.com/bigquery',
    color: 'bg-indigo-600 hover:bg-indigo-700',
    category: 'Analytics'
  },
  
  // Cloud & Development
  {
    name: 'Cloud Console',
    description: 'Manage Google Cloud resources and services',
    icon: '☁️',
    url: 'https://console.cloud.google.com',
    color: 'bg-gray-500 hover:bg-gray-600',
    category: 'Cloud'
  },
  {
    name: 'Cloud Storage',
    description: 'Manage cloud storage buckets and data',
    icon: '🗄️',
    url: 'https://console.cloud.google.com/storage',
    color: 'bg-gray-600 hover:bg-gray-700',
    category: 'Cloud'
  }
]

const categories = ['Communication', 'Documents', 'Calendar', 'Storage', 'Analytics', 'Cloud']

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/signin')
    }
  }, [status, router])

  const handleSignOut = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: '/admin/signin' })
  }

  const openGoogleService = (url: string) => {
    window.open(url, '_blank')
  }

  const filteredServices = selectedCategory === 'All' 
    ? googleServices 
    : googleServices.filter(service => service.category === selectedCategory)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/Osinka-Kalaso-Logo.png"
                  alt="Osinka Kalaso Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome, {session.user?.email}</p>
                <p className="text-xs text-green-600 font-medium">Full Google Workspace Access Enabled</p>
              </div>
            </div>
            
            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Workspace Services</h2>
          <p className="text-gray-600 mb-6">
            Complete access to all Google services with 75+ OAuth scopes enabled
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Google Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openGoogleService(service.url)}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${service.color}`}
                >
                  Open {service.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Donation Management</h4>
              <p className="text-gray-600 mb-4">View and manage donations from supporters</p>
              <button
                onClick={() => router.push('/admin/donations')}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Manage Donations
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Advanced Analytics</h4>
              <p className="text-gray-600 mb-4">Access BigQuery and advanced data insights</p>
              <button
                onClick={() => openGoogleService('https://console.cloud.google.com/bigquery')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Open BigQuery
              </button>
            </div>
          </div>
        </div>

        {/* OAuth Scope Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">🔐 OAuth Access Granted</h3>
          <p className="text-blue-800 mb-3">
            Your admin account has been granted access to <strong>75+ Google OAuth scopes</strong>, including:
          </p>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• <strong>Gmail:</strong> Full email access, compose, send, settings management</li>
            <li>• <strong>Drive:</strong> Complete file access, metadata, activity monitoring</li>
            <li>• <strong>Calendar:</strong> Full calendar management, event creation, sharing</li>
            <li>• <strong>Analytics:</strong> Website data, BigQuery, advanced reporting</li>
            <li>• <strong>Cloud:</strong> Storage, logging, development resources</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
