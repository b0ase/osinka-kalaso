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
            src="/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG"
            alt="Osinka Kallaso farming community"
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
              <p className="text-black mb-6 leading-relaxed">
                Osinka Kalaso was born from a vision to address the critical challenges facing 
                Kenyan farmers: unreliable water access, limited market opportunities, and 
                unsustainable farming practices.
              </p>
              <p className="text-black mb-6 leading-relaxed">
                Founded in 2023, our project began with a simple observation: the potential for 
                high-quality onion cultivation in the fertile soils of Kenya, combined with the 
                urgent need for sustainable water solutions.
              </p>
              <p className="text-black leading-relaxed">
                Today, we work with over 50 local farmers, providing them with the knowledge, 
                resources, and infrastructure needed to build prosperous, sustainable livelihoods.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG"
                alt="Our farming journey at Osinka Kallaso"
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
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Our core principles guide everything we do at Osinka Kalaso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-black leading-relaxed">
                To empower Kenyan farmers through sustainable onion cultivation, providing 
                reliable water access and creating lasting economic opportunities for local communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-black leading-relaxed">
                A Kenya where every farmer has access to sustainable water resources and 
                the knowledge to cultivate profitable, environmentally-friendly crops.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Values</h3>
              <p className="text-black leading-relaxed">
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
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals working to transform agriculture in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                  alt="Daniel Pariken Sakuda"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Daniel Pariken Sakuda</h3>
              <p className="text-black">Project Organizer & Community Leader</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                  alt="Josphat Tajeu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Josphat Tajeu</h3>
              <p className="text-black">Master Farmer & Water Management Expert</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG"
                  alt="Jecinta Wangui"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Jecinta Wangui</h3>
              <p className="text-black">Community Elder & Knowledge Keeper</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG"
                  alt="Ann Nagirro"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Ann Nagirro</h3>
              <p className="text-black">Sustainable Farming Specialist</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG"
                  alt="Paul Sironka"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Paul Sironka</h3>
              <p className="text-black">Innovation & Technology Lead</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG"
                  alt="Simon Loomu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Simon Loomu</h3>
              <p className="text-black">Equipment & Infrastructure Manager</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG"
                  alt="Martin Tobiko"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Martin Tobiko</h3>
              <p className="text-black">Community Development Coordinator</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG"
                  alt="Isabella Waithera"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Isabella Waithera</h3>
              <p className="text-black">Youth & Education Coordinator</p>
            </div>
          </div>

          {/* Community Impact */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">👥</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">50+ Families</h4>
                    <p className="text-black">Directly benefiting from sustainable farming</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">💰</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">300% Income Increase</h4>
                    <p className="text-black">Average income growth for participating families</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Education Access</h4>
                    <p className="text-black">Children can now attend better schools</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/427a34a6-4097-4eab-8cae-a3a7200a1de2.JPG"
                alt="Osinka Kallaso community working together"
                fill
                className="object-cover"
              />
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
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
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