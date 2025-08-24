'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface Donation {
  id: string
  donor_name: string
  donor_email: string
  donor_phone: string | null
  donation_amount: number
  message: string | null
  status: string
  created_at: string
}

interface DonationStats {
  total_donations: number
  total_donors: number
  progress_percentage: number
}

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([])
  const [stats, setStats] = useState<DonationStats>({
    total_donations: 0,
    total_donors: 0,
    progress_percentage: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDonations()
    fetchStats()
  }, [])

  const fetchDonations = async () => {
    try {
      const { data, error } = await supabase
        .from('osinka_kalaso_donations')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching donations:', error)
        return
      }

      setDonations(data || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/donations')
      const stats = await response.json()
      if (response.ok) {
        setStats(stats)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading donations...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Osinka Kalaso Donations</h1>
          <p className="text-gray-600">Admin dashboard for tracking donations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Donations</h3>
            <p className="text-3xl font-bold text-green-600">
              KES {stats.total_donations.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Donors</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.total_donors}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress</h3>
            <p className="text-3xl font-bold text-orange-600">
              {stats.progress_percentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Donations Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Donations</h2>
          </div>
          
          {donations.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No donations yet. Donations will appear here once submitted.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Donor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donations.map((donation) => (
                    <tr key={donation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {donation.donor_name}
                        </div>
                                                 {donation.message && (
                           <div className="text-sm text-gray-500 mt-1">
                             &ldquo;{donation.message.substring(0, 50)}...&rdquo;
                           </div>
                         )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">
                          KES {donation.donation_amount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{donation.donor_email}</div>
                        {donation.donor_phone && (
                          <div className="text-sm text-gray-500">{donation.donor_phone}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(donation.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          donation.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {donation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 