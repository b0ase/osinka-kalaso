'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG"
                alt="Osinka Kalaso Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Connect with the Osinka Kalaso team and discover how you can support our mission
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="donation">Donation Information</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="media">Media Inquiry</option>
                        <option value="visit">Site Visit Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Tell us about your inquiry or how you'd like to get involved..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-lg">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <a href="tel:+254722846966" className="text-green-600 hover:text-green-700">
                          +254 722 846966
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-lg">📧</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <a href="mailto:info@osinkakalaso.website" className="text-green-600 hover:text-green-700">
                          info@osinkakalaso.website
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-lg">📍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Location</p>
                        <p className="text-gray-600">Osinka Kalaso, Kenya</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-lg">🕒</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Office Hours</p>
                        <p className="text-gray-600 text-sm">Mon-Fri: 8AM-6PM</p>
                        <p className="text-gray-600 text-sm">Sat: 9AM-3PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link 
                      href="/donate"
                      className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                    >
                      Support Our Project
                    </Link>
                    <Link 
                      href="/about"
                      className="block w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg text-center font-semibold hover:bg-green-50 transition-colors"
                    >
                      Learn More About Us
                    </Link>
                    <Link 
                      href="/gallery"
                      className="block w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg text-center font-semibold hover:bg-gray-50 transition-colors"
                    >
                      View Our Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect directly with the key members of our Osinka Kalaso project
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                    alt="Daniel Pariken Sakuda"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Daniel Pariken Sakuda</h3>
                <p className="text-green-600 font-semibold mb-2">Project Organizer</p>
                <p className="text-sm text-gray-600 mb-3">+254 722 846966</p>
                <p className="text-sm text-gray-600">
                  Community leader and organizer of the Osinka Kallaso sustainable farming project
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG"
                    alt="Paul Sironka"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Paul Sironka</h3>
                <p className="text-green-600 font-semibold mb-2">Innovation & Technology Lead</p>
                <p className="text-sm text-gray-600 mb-3">paul@osinkakalaso.website</p>
                <p className="text-sm text-gray-600">
                  Leading sustainable farming innovation and water management systems
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG"
                    alt="Simon Loomu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Simon Loomu</h3>
                <p className="text-green-600 font-semibold mb-2">Equipment & Infrastructure Manager</p>
                <p className="text-sm text-gray-600 mb-3">simon@osinkakalaso.website</p>
                <p className="text-sm text-gray-600">
                  Managing modern farming equipment and sustainable infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our project and how to get involved
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">How can I support the Osinka Kalaso project?</h3>
                <p className="text-gray-600 text-sm">
                  You can support us through donations, volunteering, spreading awareness, or partnering with us. 
                  Visit our donation page to learn more about specific ways to contribute.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">What is the timeline for the water project?</h3>
                <p className="text-gray-600 text-sm">
                  The complete water project will take approximately 12-16 weeks from start to finish, 
                  including site assessment, drilling, infrastructure installation, and testing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">How many families will benefit from the water project?</h3>
                <p className="text-gray-600 text-sm">
                  Our borehole project will provide sustainable water access for over 100 families 
                  in the Osinka Kalaso community, including both farming and domestic water needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Can I visit the project site?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We welcome visitors and volunteers. Please contact us in advance to arrange 
                  a visit and learn about our current visitor guidelines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
                <h3 className="text-lg font-bold text-gray-800 mb-3">How do you ensure the sustainability of the project?</h3>
                <p className="text-gray-600 text-sm">
                  We implement sustainable farming practices, provide ongoing training, establish 
                  local maintenance systems, and create long-term economic opportunities for the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in transforming lives through sustainable agriculture and water access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Support Our Project
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 