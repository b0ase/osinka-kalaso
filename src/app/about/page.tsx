import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Osinka Kalaso</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming agriculture and empowering communities in Kenya through sustainable onion farming
          </p>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kenyan-farmer-3.jpg"
            alt="Kenyan farming community"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Osinka Kalaso was born from a vision to address the critical challenges facing 
                Kenyan farmers: unreliable water access, limited market opportunities, and 
                unsustainable farming practices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, our project began with a simple observation: the potential for 
                high-quality onion cultivation in the fertile soils of Kenya, combined with the 
                urgent need for sustainable water solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we work with over 50 local farmers, providing them with the knowledge, 
                resources, and infrastructure needed to build prosperous, sustainable livelihoods.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/kenyan-farmer-7.jpg"
                alt="Our farming journey"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core principles guide everything we do at Osinka Kalaso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower Kenyan farmers through sustainable onion cultivation, providing 
                reliable water access and creating lasting economic opportunities for local communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A Kenya where every farmer has access to sustainable water resources and 
                the knowledge to cultivate profitable, environmentally-friendly crops.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainability, community empowerment, innovation, and transparency guide 
                our approach to agricultural development and community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals working to transform agriculture in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-1.jpg"
                  alt="John Mwangi"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">John Mwangi</h3>
              <p className="text-green-600 mb-3 font-medium">Project Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Agricultural expert with 15+ years experience in sustainable farming practices
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-2.jpg"
                  alt="Sarah Wanjiku"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sarah Wanjiku</h3>
              <p className="text-green-600 mb-3 font-medium">Community Coordinator</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Local community leader dedicated to farmer empowerment and education
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-3.jpg"
                  alt="David Ochieng"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">David Ochieng</h3>
              <p className="text-green-600 mb-3 font-medium">Agricultural Specialist</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert in modern irrigation systems and crop management techniques
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-4.jpg"
                  alt="Grace Akinyi"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Grace Akinyi</h3>
              <p className="text-green-600 mb-3 font-medium">Marketing Coordinator</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting farmers with markets and managing product distribution
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-5.jpg"
                  alt="Peter Kamau"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Peter Kamau</h3>
              <p className="text-green-600 mb-3 font-medium">Training Coordinator</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Educating farmers on sustainable practices and modern techniques
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-6.jpg"
                  alt="Mary Njeri"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Mary Njeri</h3>
              <p className="text-green-600 mb-3 font-medium">Health & Safety Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensuring community health through clean water access and safety protocols
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/kenyan-farmer-7.jpg"
                  alt="James Kiprop"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">James Kiprop</h3>
              <p className="text-green-600 mb-3 font-medium">Field Operations Manager</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Overseeing daily farming operations and ensuring quality standards
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/0_0-1.jpg"
                  alt="Faith Muthoni"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Faith Muthoni</h3>
              <p className="text-green-600 mb-3 font-medium">Quality Control Specialist</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensuring our onions meet the highest quality standards for market
              </p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/0_1-3.jpg"
                  alt="Michael Odhiambo"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Michael Odhiambo</h3>
              <p className="text-green-600 mb-3 font-medium">Irrigation Technician</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintaining and optimizing our water management systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Measurable results of our work in the community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-green-100">Farmers Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-green-100">Families Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25</div>
              <p className="text-green-100">Acres Under Cultivation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-green-100">Harvest Cycles Per Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Support our water project and help us create lasting positive change in the Osinka Kalaso community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Support Our Project
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 