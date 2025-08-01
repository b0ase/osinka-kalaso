'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = donationAmount === 'custom' ? customAmount : donationAmount
    console.log('Donation submitted:', { amount, donorInfo })
    alert('Thank you for your generous donation! We will contact you soon with confirmation details.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    })
  }

  const donationOptions = [
    { value: '5000', label: 'KES 5,000', description: 'Helps with paperwork and permits' },
    { value: '10000', label: 'KES 10,000', description: 'Contributes to drilling costs' },
    { value: '25000', label: 'KES 25,000', description: 'Funds solar pump components' },
    { value: '50000', label: 'KES 50,000', description: 'Supports casing and installation' },
    { value: '100000', label: 'KES 100,000', description: 'Major contribution to solar panels' },
    { value: 'custom', label: 'Custom Amount', description: 'Choose your own donation amount' }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG"
                alt="Osinka Kalaso Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Water Project</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Help us bring sustainable water access to the Osinka Kalaso community
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Donation Makes a Difference</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Every contribution directly impacts the lives of Kenyan farmers and their families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Water Access</h3>
              <p className="text-black">
                Provide reliable water access for farming and domestic use
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Food Security</h3>
              <p className="text-black">
                Enable year-round farming and increased crop yields
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Economic Growth</h3>
              <p className="text-black">
                Create sustainable income opportunities for local families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Progress */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Progress</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Track our progress towards the KES 2,865,000 goal for the borehole drilling & solarization project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Fundraising Progress</span>
                <span className="text-lg font-bold text-green-600">KES 0 / KES 2,865,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-green-600 h-4 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-black">0% of our goal achieved - KES 2,865,000 needed for complete project</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">KES 0</div>
                <p className="text-black">Raised So Far</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                <p className="text-black">Donors</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
                <p className="text-black">Weeks Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
                <p className="text-black mb-8">
                  Choose your donation amount and help us bring sustainable water access to the 
                  Osinka Kalaso community. Every contribution makes a real difference.
                </p>

                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Donation Amount *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {donationOptions.map((option) => (
                        <div key={option.value} className="relative">
                          <input
                            type="radio"
                            id={option.value}
                            name="donationAmount"
                            value={option.value}
                            checked={donationAmount === option.value}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="sr-only"
                          />
                          <label
                            htmlFor={option.value}
                            className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              donationAmount === option.value
                                ? 'border-green-600 bg-green-50'
                                : 'border-gray-300 hover:border-green-400'
                            }`}
                          >
                            <div className="font-semibold text-gray-800">{option.label}</div>
                            <div className="text-sm text-black">{option.description}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {donationAmount === 'custom' && (
                    <div>
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Amount (KES)
                      </label>
                      <input
                        type="number"
                        id="customAmount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter amount"
                        min="100"
                      />
                    </div>
                  )}

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Donor Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={donorInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={donorInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={donorInfo.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={donorInfo.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Share why you're supporting our project..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                  >
                    Complete Donation
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Your Donation Funds</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Paperwork & Permits</h4>
                    <p className="text-black mb-2">KES 146,000</p>
                    <p className="text-sm text-black">
                      Ground water survey, NEMA, WRMA, and County Council permits
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Borehole Drilling & Casing</h4>
                    <p className="text-black mb-2">KES 1,380,000</p>
                    <p className="text-sm text-black">
                      Mobilization, drilling, casing supply & installation, gravel packing, cleaning, test pumping, and chemical analysis
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Solar Pumping Equipment</h4>
                    <p className="text-black mb-2">KES 1,339,000</p>
                    <p className="text-sm text-black">
                      Submersible pump, motor, cables, pipes, hybrid inverter, solar panels, and steel works
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Total Project Cost</h4>
                    <p className="text-black mb-2">KES 2,865,000</p>
                    <p className="text-sm text-black">
                      Complete borehole drilling and solarization project for sustainable water access
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Transparency Promise</h4>
                  <p className="text-black text-sm">
                    We provide regular updates on project progress and detailed financial reports. 
                    Your donation will be used exclusively for the water project and community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Donor Testimonials</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Hear from our supporters about why they chose to help the Osinka Kalaso project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">
                &ldquo;I was moved by the impact this project will have on the community. 
                Water access is fundamental to sustainable development.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <div className="text-lg">👤</div>
                </div>
                <div>
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-gray-500">Donor from Nairobi</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">
                &ldquo;The transparency and detailed planning of this project gave me confidence 
                that my donation would make a real difference.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <div className="text-lg">👤</div>
                </div>
                <div>
                  <div className="font-semibold">Sarah Kimani</div>
                  <div className="text-sm text-gray-500">International Donor</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">
                &ldquo;Supporting sustainable agriculture in Kenya is close to my heart. 
                This project combines water access with economic empowerment perfectly.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <div className="text-lg">👤</div>
                </div>
                <div>
                  <div className="font-semibold">David Ochieng</div>
                  <div className="text-sm text-gray-500">Agricultural Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission Today</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Every donation brings us closer to providing sustainable water access for the Osinka Kalaso community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donation-form"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Donate Now
            </a>
            <a 
              href="/water-project"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 