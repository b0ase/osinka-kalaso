'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    '/images/hero.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG"
                alt="Osinka Kalaso Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Osinka Kalaso
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            Onion Farm Project
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering Kenyan farmers through sustainable onion cultivation and water access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#water-project"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Support Water Project
            </Link>
            <Link 
              href="#about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Background Images with Fade Effect */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-green-800/30"></div>
            </div>
          ))}
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Osinka Kalaso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Kenya, Osinka Kalaso is dedicated to transforming local agriculture 
              through sustainable onion farming practices and community development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We are committed to empowering local farmers with the knowledge, resources, and infrastructure 
                needed to cultivate high-quality onions while ensuring sustainable water access for the entire community.
              </p>
              <p className="text-gray-600 mb-6">
                Our project combines modern agricultural techniques with traditional farming wisdom, 
                creating a model that can be replicated across Kenya.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Acres Farming</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">200m</div>
                  <div className="text-sm text-gray-600">Borehole Depth</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">KES 2.8M</div>
                  <div className="text-sm text-gray-600">Project Cost</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG"
                alt="Osinka Kallaso onion farm with farmers working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Water Project Section */}
      <section id="water-project" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Water Access Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most critical initiative: drilling a borehole to provide sustainable water access 
              for farming and community needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Borehole Drilling</h3>
              <p className="text-gray-600">
                Installing a deep borehole to access reliable groundwater, ensuring year-round 
                water availability for irrigation and domestic use.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚰</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Water Storage</h3>
              <p className="text-gray-600">
                Building water storage tanks and distribution systems to efficiently manage 
                water resources across the farm and community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Irrigation System</h3>
              <p className="text-gray-600">
                Implementing modern irrigation techniques to maximize water efficiency 
                and onion crop yields.
              </p>
            </div>
          </div>

          {/* Water Project Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                alt="Water project development"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                alt="Water project progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG"
                alt="Water project infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG"
                alt="Water project completion"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Project Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-700">Immediate Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reliable water access for 100+ families</li>
                  <li>• Year-round onion cultivation capability</li>
                  <li>• Reduced dependency on seasonal rainfall</li>
                  <li>• Improved crop yields and quality</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-700">Long-term Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sustainable farming practices</li>
                  <li>• Economic empowerment of local farmers</li>
                  <li>• Community water security</li>
                  <li>• Replicable model for other regions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Onion Farming Economics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the financial benefits and economic impact of sustainable onion farming in Kenya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Market Analysis</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">High Market Demand</h4>
                  <p className="text-gray-600">
                    Onions are a staple in Kenyan cuisine with consistent demand throughout the year. 
                    The local market offers stable prices and growing export opportunities.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Profitability</h4>
                  <p className="text-gray-600">
                    With proper irrigation and farming techniques, onion farming can generate 
                    KES 150,000-300,000 per acre per harvest cycle, providing sustainable income for farmers.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Multiple Harvests</h4>
                  <p className="text-gray-600">
                    With reliable water access, farmers can achieve 2-3 harvest cycles per year, 
                    significantly increasing annual income potential.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Investment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Paperwork & Permits</span>
                  <span className="font-bold text-green-600">KES 146,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Borehole Drilling & Casing</span>
                  <span className="font-bold text-green-600">KES 1,380,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Solar Pumping Equipment</span>
                  <span className="font-bold text-green-600">KES 1,339,000</span>
                </div>
                <div className="border-t-2 border-green-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total Investment</span>
                    <span className="font-bold text-xl text-green-600">KES 2,865,000</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Expected Annual Return</h4>
                <p className="text-gray-600">
                  With proper implementation, this investment can generate KES 2,000,000 - 4,000,000 annually 
                  through onion farming with 2 harvest cycles per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How the Osinka Kalaso project will transform the local community and create lasting positive change.
            </p>
          </div>

          {/* Authentic Osinka Kallaso Farmer Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                alt="Osinka Kallaso farmer working in onion field"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                alt="Osinka Kallaso farmer tending to onion crops"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG"
                alt="Osinka Kallaso farmer with harvest"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG"
                alt="Osinka Kallaso farmer community meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG"
                alt="Osinka Kallaso farmer training session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG"
                alt="Osinka Kallaso farmer with irrigation system"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG"
                alt="Osinka Kallaso farmer in onion field"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG"
                alt="Osinka Kallaso farmer working in field"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Farmer Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG"
                alt="Osinka Kallaso farmer with sustainable equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/386d69df-c4b2-40c0-a6f0-bcb714800a2f.JPG"
                alt="Osinka Kallaso farmer working with modern techniques"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/427a34a6-4097-4eab-8cae-a3a7200a1de2.JPG"
                alt="Osinka Kallaso farmer in community meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG"
                alt="Osinka Kallaso farmer training coordinator"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG"
                alt="Osinka Kallaso farmer with irrigation system"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG"
                alt="Osinka Kallaso farmer with harvest"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Farmer Empowerment</h3>
              <p className="text-gray-600">
                Training and resources for local farmers to adopt modern farming techniques
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Job Creation</h3>
              <p className="text-gray-600">
                New employment opportunities in farming, processing, and distribution
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Health Benefits</h3>
              <p className="text-gray-600">
                Clean water access improves community health and reduces waterborne diseases
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
              <p className="text-gray-600">
                Increased income enables families to invest in children&apos;s education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onion Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Onion Harvest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality onions cultivated through sustainable farming practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/onions.jpg"
                alt="Fresh harvested onions"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/red-onions.jpg"
                alt="Red onions variety"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/white-onions.jpg"
                alt="White onions variety"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG"
                alt="Onion harvest display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Farming Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Farming Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daily activities and processes in our sustainable onion farming operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG"
                alt="Farming activity"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Field Preparation</h3>
                <p className="text-sm">Preparing the soil for optimal onion growth</p>
              </div>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG"
                alt="Farming activity"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Crop Management</h3>
                <p className="text-sm">Monitoring and maintaining healthy onion crops</p>
              </div>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG"
                alt="Farming activity"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Harvest Time</h3>
                <p className="text-sm">Careful harvesting of mature onions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Support Our Water Project</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Help us bring sustainable water access to the Osinka Kalaso community. 
            Your support will transform lives and create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>


    </main>
  )
}
