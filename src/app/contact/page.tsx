'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with the Osinka Kalaso team and learn how you can support our mission
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We&apos;d love to hear from you! Whether you have questions about our project, 
                want to learn more about how to get involved, or are interested in supporting 
                our water access initiative, please reach out to us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">📍</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Osinka Kalaso, Kenya</p>
                    <p className="text-gray-600">East Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">📧</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@osinkakalaso.website</p>
                    <p className="text-gray-600">support@osinkakalaso.website</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">📞</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+254 722 846966</p>
                    <p className="text-gray-600">Project Organizer</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">🕒</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our project leaders and team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                  alt="Daniel Pariken Sakuda"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Daniel Pariken Sakuda</h3>
              <p className="text-green-600 mb-4">Project Organizer</p>
              <p className="text-gray-600 mb-4">+254 722 846966</p>
              <p className="text-gray-600 text-sm">
                Community leader and organizer of the Osinka Kallaso sustainable farming project
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG"
                  alt="Paul Sironka"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Paul Sironka</h3>
              <p className="text-green-600 mb-4">Innovation & Technology Lead</p>
              <p className="text-gray-600 mb-4">paul@osinkakalaso.website</p>
              <p className="text-gray-600 text-sm">
                Leading sustainable farming innovation and water management systems
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG"
                  alt="Simon Loomu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Simon Loomu</h3>
              <p className="text-green-600 mb-4">Equipment & Infrastructure Manager</p>
              <p className="text-gray-600 mb-4">simon@osinkakalaso.website</p>
              <p className="text-gray-600 text-sm">
                Managing modern farming equipment and sustainable infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our project and how to get involved
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How can I support the Osinka Kalaso project?</h3>
              <p className="text-gray-600">
                You can support us through donations, volunteering, spreading awareness, or partnering with us. 
                Visit our donation page to learn more about specific ways to contribute.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What is the timeline for the water project?</h3>
              <p className="text-gray-600">
                The complete water project will take approximately 12-16 weeks from start to finish, 
                including site assessment, drilling, infrastructure installation, and testing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How many families will benefit from the water project?</h3>
              <p className="text-gray-600">
                Our borehole project will provide sustainable water access for over 100 families 
                in the Osinka Kalaso community, including both farming and domestic water needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Can I visit the project site?</h3>
              <p className="text-gray-600">
                Yes! We welcome visitors and volunteers. Please contact us in advance to arrange 
                a visit and learn about our current visitor guidelines.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do you ensure the sustainability of the project?</h3>
              <p className="text-gray-600">
                We implement sustainable farming practices, provide ongoing training, establish 
                local maintenance systems, and create long-term economic opportunities for the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in transforming lives through sustainable agriculture and water access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Support Our Project
            </a>
            <a 
              href="/about"
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