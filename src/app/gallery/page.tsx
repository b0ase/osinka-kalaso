'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    // Hero Images
    {
      id: 1,
      title: "Hero Image 1",
      description: "Stunning aerial view of our onion farm landscape",
      category: "hero",
      image: "/images/hero.jpg",
    },
    {
      id: 2,
      title: "Hero Image 2", 
      description: "Beautiful sunrise over the farming fields",
      category: "hero",
      image: "/images/hero-2.jpg",
    },
    {
      id: 3,
      title: "Hero Image 3",
      description: "Panoramic view of sustainable farming practices",
      category: "hero",
      image: "/images/hero-3.jpg",
    },
    {
      id: 4,
      title: "Hero Image 4",
      description: "Community farming at its finest",
      category: "hero",
      image: "/images/hero-4.jpg",
    },

    // Onion Harvest
    {
      id: 5,
      title: "Fresh Onion Harvest",
      description: "High-quality onions ready for market distribution",
      category: "onions",
      image: "/images/onions.jpg",
    },
    {
      id: 6,
      title: "Red Onion Variety",
      description: "Premium red onions cultivated with care",
      category: "onions",
      image: "/images/red-onions.jpg",
    },
    {
      id: 7,
      title: "White Onion Variety",
      description: "Fresh white onions from our sustainable farm",
      category: "onions",
      image: "/images/white-onions.jpg",
    },

    // Authentic Osinka Kallaso Farmers
    {
      id: 8,
      title: "Osinka Kallaso Farmer 1",
      description: "Dedicated farmer working in onion field at Osinka Kallaso",
      category: "farmers",
      image: "/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG",
    },
    {
      id: 9,
      title: "Osinka Kallaso Farmer 2",
      description: "Local farmer tending to onion crops with sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG",
    },
    {
      id: 10,
      title: "Osinka Kallaso Farmer 3",
      description: "Expert farmer sharing knowledge with community",
      category: "farmers",
      image: "/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG",
    },
    {
      id: 11,
      title: "Osinka Kallaso Farmer 4",
      description: "Farmer with harvest and community support",
      category: "farmers",
      image: "/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG",
    },
    {
      id: 12,
      title: "Osinka Kallaso Farmer 5",
      description: "Community leader in sustainable farming practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG",
    },
    {
      id: 13,
      title: "Osinka Kallaso Farmer 6",
      description: "Farmer working with irrigation system",
      category: "farmers",
      image: "/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG",
    },
    {
      id: 14,
      title: "Osinka Kallaso Farmer 7",
      description: "Farmer in onion field with sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG",
    },
    {
      id: 15,
      title: "Osinka Kallaso Farmer 8",
      description: "Farmer working in field with modern techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG",
    },
    {
      id: 16,
      title: "Osinka Kallaso Farmer 9",
      description: "Farmer with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG",
    },
    {
      id: 17,
      title: "Osinka Kallaso Farmer 10",
      description: "Farmer working with modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/386d69df-c4b2-40c0-a6f0-bcb714800a2f.JPG",
    },
    {
      id: 18,
      title: "Osinka Kallaso Farmer 11",
      description: "Farmer in community meeting and planning session",
      category: "farmers",
      image: "/images/Osinka Kallaso/427a34a6-4097-4eab-8cae-a3a7200a1de2.JPG",
    },
    {
      id: 19,
      title: "Osinka Kallaso Farmer 12",
      description: "Training coordinator and mentor for new farmers",
      category: "farmers",
      image: "/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG",
    },
    {
      id: 20,
      title: "Osinka Kallaso Farmer 13",
      description: "Farmer working with irrigation system",
      category: "farmers",
      image: "/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG",
    },
    {
      id: 21,
      title: "Osinka Kallaso Farmer 14",
      description: "Farmer with harvest and community support",
      category: "farmers",
      image: "/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG",
    },
    {
      id: 22,
      title: "Osinka Kallaso Farmer 15",
      description: "Farmer working in onion field",
      category: "farmers",
      image: "/images/Osinka Kallaso/055343ff-8a43-4848-9c8f-b8ff2a0e4a4a.JPG",
    },
    {
      id: 23,
      title: "Osinka Kallaso Farmer 16",
      description: "Farmer with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/67093a6c-e2d8-4318-b0d9-fcaa67779b4f.JPG",
    },
    {
      id: 24,
      title: "Osinka Kallaso Farmer 17",
      description: "Farmer working with modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/1869026e-5d54-40ca-a351-699245bd1de4.JPG",
    },
    {
      id: 25,
      title: "Osinka Kallaso Farmer 18",
      description: "Farmer in community meeting and planning session",
      category: "farmers",
      image: "/images/Osinka Kallaso/78977206-2a39-4de2-8573-ea9a84fb5658.JPG",
    },
    {
      id: 26,
      title: "Osinka Kallaso Farmer 19",
      description: "Farmer in onion field with sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/a7d4073e-9b1f-475c-bd45-4a7efc32ff59.JPG",
    },
    {
      id: 27,
      title: "Osinka Kallaso Farmer 20",
      description: "Farmer working with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/ad3e980b-a644-4fa3-8db2-ef126acd6aeb.JPG",
    },
    {
      id: 28,
      title: "Osinka Kallaso Farmer 21",
      description: "Farmer with harvest and community support",
      category: "farmers",
      image: "/images/Osinka Kallaso/ad861b74-9365-4f73-9864-480b2ce4338a.JPG",
    },
    {
      id: 29,
      title: "Osinka Kallaso Farmer 22",
      description: "Farmer working with modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77.JPG",
    },
    {
      id: 30,
      title: "Osinka Kallaso Farmer 23",
      description: "Farmer in community meeting and planning session",
      category: "farmers",
      image: "/images/Osinka Kallaso/af6e33ed-716b-4287-b125-dd5b43f92d8d.JPG",
    },
    {
      id: 31,
      title: "Osinka Kallaso Farmer 24",
      description: "Farmer working with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/b0e30e2e-9054-405a-916f-6afc280db903.JPG",
    },
    {
      id: 32,
      title: "Osinka Kallaso Farmer 25",
      description: "Farmer with harvest and community support",
      category: "farmers",
      image: "/images/Osinka Kallaso/b84b3bb1-4b16-4ede-8ce0-e8b6102360fc.JPG",
    },
    {
      id: 33,
      title: "Osinka Kallaso Farmer 26",
      description: "Farmer working with modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/bd14327a-e191-4af1-b0c8-2aa059cdba49.JPG",
    },
    {
      id: 34,
      title: "Osinka Kallaso Farmer 27",
      description: "Farmer in community meeting and planning session",
      category: "farmers",
      image: "/images/Osinka Kallaso/c56bce87-dfb3-482a-9558-86a42ce6e0e1.JPG",
    },
    {
      id: 35,
      title: "Osinka Kallaso Farmer 28",
      description: "Farmer working with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/cb7a9c1a-ab8e-4f7b-93b9-58812c0de6c6.JPG",
    },
    {
      id: 36,
      title: "Osinka Kallaso Farmer 29",
      description: "Farmer with harvest and community support",
      category: "farmers",
      image: "/images/Osinka Kallaso/d502aa50-de22-47ad-afed-056b96f9bef1.JPG",
    },
    {
      id: 37,
      title: "Osinka Kallaso Farmer 30",
      description: "Farmer working with modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/e1376929-9649-4177-883e-85be5cfa442c.JPG",
    },
    {
      id: 38,
      title: "Osinka Kallaso Farmer 31",
      description: "Farmer in community meeting and planning session",
      category: "farmers",
      image: "/images/Osinka Kallaso/eb361440-1518-494f-a962-13ac96ec3cd5.JPG",
    },
    {
      id: 39,
      title: "Osinka Kallaso Farmer 32",
      description: "Farmer working with sustainable farming equipment",
      category: "farmers",
      image: "/images/Osinka Kallaso/f6eddfe9-4e7c-46da-8278-036dd190a49c.JPG",
    },

    // Crop Management
    {
      id: 40,
      title: "Crop Management 1",
      description: "Monitoring and maintaining healthy onion crops",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops.jpg",
    },
    {
      id: 41,
      title: "Crop Management 2",
      description: "Advanced crop monitoring techniques",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops2.jpg",
    },
    {
      id: 42,
      title: "Crop Management 3",
      description: "Quality control and crop health",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops3.jpg",
    },
    {
      id: 43,
      title: "Crop Management 4",
      description: "Sustainable crop management practices",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops4.jpg",
    },

    // Borehole Project
    {
      id: 44,
      title: "Borehole Drilling Setup",
      description: "Initial setup for water access project",
      category: "borehole",
      image: "/images/borehole-1.jpg",
    },
    {
      id: 45,
      title: "Borehole Construction",
      description: "Progress of borehole drilling operation",
      category: "borehole",
      image: "/images/borehole-2.jpg",
    },
    {
      id: 46,
      title: "Borehole Infrastructure",
      description: "Installation of water infrastructure",
      category: "borehole",
      image: "/images/borehole-3.jpg",
    },
    {
      id: 47,
      title: "Borehole Completion",
      description: "Final stages of borehole project",
      category: "borehole",
      image: "/images/borehole-4.jpg",
    },

    // Farm Landscape
    {
      id: 48,
      title: "Onion Farm Landscape",
      description: "Expansive view of our sustainable onion farm",
      category: "landscape",
      image: "/images/onion-farm.jpg",
    },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'hero', name: 'Hero Images', count: galleryItems.filter(item => item.category === 'hero').length },
    { id: 'onions', name: 'Onion Harvest', count: galleryItems.filter(item => item.category === 'onions').length },
    { id: 'farmers', name: 'Our Farmers', count: galleryItems.filter(item => item.category === 'farmers').length },
    { id: 'crop-management', name: 'Crop Management', count: galleryItems.filter(item => item.category === 'crop-management').length },
    { id: 'borehole', name: 'Water Project', count: galleryItems.filter(item => item.category === 'borehole').length },
    { id: 'landscape', name: 'Farm Landscape', count: galleryItems.filter(item => item.category === 'landscape').length },
  ]

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Visual journey through our onion farming project and the authentic Osinka Kallaso farming community
          </p>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG"
            alt="Osinka Kallaso farming community"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base whitespace-nowrap ${
                  activeFilter === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-green-600 font-medium capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our authentic Osinka Kallaso farmers and the impact of sustainable onion farming
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                    alt="Osinka Kallaso Farmer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Osinka Kallaso Farmer&apos;s Story</h3>
                  <p className="text-gray-600">Local Farmer, Osinka Kallaso Community</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Before joining the Osinka Kalaso project, I struggled with unpredictable harvests 
                due to water scarcity. Now, with the new irrigation system, I can plan my farming 
                with confidence.&rdquo;
              </p>
              <p className="text-gray-600">
                &ldquo;My income has increased by 300% and I can now afford to send my children to better schools.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG"
                    alt="Osinka Kallaso Community Leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Osinka Kallaso Community Leader&apos;s Journey</h3>
                  <p className="text-gray-600">Community Leader, Osinka Kallaso</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;As a community leader, I&apos;ve seen how this project has transformed not just farming, 
                but our entire community. The water access has improved health and created new opportunities.&rdquo;
              </p>
              <p className="text-gray-600">
                &ldquo;We&apos;re now training other communities to replicate our success model.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Farming Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From seed to harvest: the complete journey of sustainable onion farming at Osinka Kallaso
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG"
                  alt="Seed selection"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-2">1. Seed Selection</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Choosing high-quality, disease-resistant onion varieties suitable for local conditions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG"
                  alt="Land preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-2">2. Land Preparation</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Soil testing, tilling, and preparation for optimal growing conditions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/borehole-1.jpg"
                  alt="Irrigation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-2">3. Irrigation</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Consistent water supply through modern irrigation systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/onions.jpg"
                  alt="Harvest"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-2">4. Harvest</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Careful harvesting and quality control for market-ready onions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Visual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual representation of how our project transforms lives at Osinka Kallaso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG"
                  alt="Health improvements"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Health Improvements</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Clean water access has reduced waterborne diseases by 60% in our community
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG"
                  alt="Education access"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Education Access</h3>
              <p className="text-gray-600 text-sm md:text-base">
                85% of children from participating families now attend school regularly
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG"
                  alt="Income growth"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Income Growth</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Average household income has increased by 250% since project inception
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Support Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Help us continue documenting and sharing the success stories of sustainable farming at Osinka Kallaso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Support Our Project
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 