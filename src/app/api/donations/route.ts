import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { donor_name, donor_email, donor_phone, donation_amount, message } = body

    // Validate required fields
    if (!donor_name || !donor_email || !donation_amount) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and amount are required' },
        { status: 400 }
      )
    }

    // Insert donation into database
    const { data, error } = await supabase
      .from('osinka_kalaso_donations')
      .insert([
        {
          donor_name,
          donor_email,
          donor_phone: donor_phone || null,
          donation_amount: parseFloat(donation_amount),
          message: message || null,
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save donation' },
        { status: 500 }
      )
    }

    // Update donation tracking
    await updateDonationTracking()

    return NextResponse.json(
      { 
        success: true, 
        message: 'Donation saved successfully',
        donation_id: data[0].id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function updateDonationTracking() {
  try {
    // Get total donations
    const { data: donations } = await supabase
      .from('osinka_kalaso_donations')
      .select('donation_amount')

    const totalDonations = donations?.reduce((sum, donation) => sum + parseFloat(donation.donation_amount), 0) || 0
    const totalDonors = donations?.length || 0

    // Update or insert tracking record
    const { error } = await supabase
      .from('osinka_kalaso_donation_tracking')
      .upsert([
        {
          id: '1', // Single record for tracking
          total_donations: totalDonations,
          total_donors: totalDonors,
          last_updated: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error updating tracking:', error)
    }
  } catch (error) {
    console.error('Error in updateDonationTracking:', error)
  }
}

export async function GET() {
  try {
    // Get donation statistics
    const { data: tracking } = await supabase
      .from('osinka_kalaso_donation_tracking')
      .select('*')
      .single()

    return NextResponse.json({
      total_donations: tracking?.total_donations || 0,
      total_donors: tracking?.total_donors || 0,
      project_goal: 2865000,
      progress_percentage: tracking?.total_donations ? (tracking.total_donations / 2865000) * 100 : 0
    })

  } catch (error) {
    console.error('Error fetching donation stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donation statistics' },
      { status: 500 }
    )
  }
} 