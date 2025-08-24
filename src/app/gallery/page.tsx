'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    // Farm Landscapes
    {
      id: 1,
      category: "landscapes",
      image: "/images/hero.jpg",
    },
    {
      id: 2,
      category: "landscapes",
      image: "/images/hero-2.jpg",
    },
    {
      id: 3,
      category: "landscapes",
      image: "/images/hero-3.jpg",
    },
    {
      id: 4,
      category: "landscapes",
      image: "/images/hero-4.jpg",
    },

    // Authentic Osinka Kallaso Images
    {
      id: 5,
      category: "farmers",
      image: "/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG",
    },
    {
      id: 6,
      category: "farmers",
      image: "/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG",
    },
    {
      id: 7,
      category: "farmers",
      image: "/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG",
    },
    {
      id: 8,
      category: "farmers",
      image: "/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG",
    },
    {
      id: 9,
      category: "farmers",
      image: "/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG",
    },
    {
      id: 10,
      category: "farmers",
      image: "/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG",
    },
    {
      id: 11,
      category: "farmers",
      image: "/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG",
    },
    {
      id: 12,
      category: "farmers",
      image: "/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG",
    },
    {
      id: 13,
      category: "farmers",
      image: "/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG",
    },
    {
      id: 14,
      category: "farmers",
      image: "/images/Osinka Kallaso/386d69df-c4b2-40c0-a6f0-bcb714800a2f.JPG",
    },
    {
      id: 15,
      category: "farmers",
      image: "/images/Osinka Kallaso/427a34a6-4097-4eab-8cae-a3a7200a1de2.JPG",
    },
    {
      id: 16,
      category: "farmers",
      image: "/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG",
    },
    {
      id: 17,
      category: "farmers",
      image: "/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG",
    },
    {
      id: 18,
      category: "farmers",
      image: "/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG",
    },
    {
      id: 19,
      category: "farmers",
      image: "/images/Osinka Kallaso/055343ff-8a43-4848-9c8f-b8ff2a0e4a4a.JPG",
    },
    {
      id: 20,
      category: "farmers",
      image: "/images/Osinka Kallaso/67093a6c-e2d8-4318-b0d9-fcaa67779b4f.JPG",
    },
    {
      id: 21,
      category: "farmers",
      image: "/images/Osinka Kallaso/1869026e-5d54-40ca-a351-699245bd1de4.JPG",
    },
    {
      id: 22,
      category: "farmers",
      image: "/images/Osinka Kallaso/78977206-2a39-4de2-8573-ea9a84fb5658.JPG",
    },
    {
      id: 23,
      category: "farmers",
      image: "/images/Osinka Kallaso/a7d4073e-9b1f-475c-bd45-4a7efc32ff59.JPG",
    },
    {
      id: 24,
      category: "farmers",
      image: "/images/Osinka Kallaso/ad3e980b-a644-4fa3-8db2-ef126acd6aeb.JPG",
    },
    {
      id: 25,
      category: "farmers",
      image: "/images/Osinka Kallaso/ad861b74-9365-4f73-9864-480b2ce4338a.JPG",
    },
    {
      id: 26,
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77.JPG",
    },
    {
      id: 27,
      category: "farmers",
      image: "/images/Osinka Kallaso/af6e33ed-716b-4287-b125-dd5b43f92d8d.JPG",
    },
    {
      id: 28,
      category: "farmers",
      image: "/images/Osinka Kallaso/b0e30e2e-9054-405a-916f-6afc280db903.JPG",
    },
    {
      id: 29,
      category: "farmers",
      image: "/images/Osinka Kallaso/b84b3bb1-4b16-4ede-8ce0-e8b6102360fc.JPG",
    },
    {
      id: 30,
      category: "farmers",
      image: "/images/Osinka Kallaso/bd14327a-e191-4af1-b0c8-2aa059cdba49.JPG",
    },
    {
      id: 31,
      category: "farmers",
      image: "/images/Osinka Kallaso/c56bce87-dfb3-482a-9558-86a42ce6e0e1.JPG",
    },
    {
      id: 32,
      category: "farmers",
      image: "/images/Osinka Kallaso/cb7a9c1a-ab8e-4f7b-93b9-58812c0de6c6.JPG",
    },
    {
      id: 33,
      category: "farmers",
      image: "/images/Osinka Kallaso/d502aa50-de22-47ad-afed-056b96f9bef1.JPG",
    },
    {
      id: 34,
      category: "farmers",
      image: "/images/Osinka Kallaso/e1376929-9649-4177-883e-85be5cfa442c.JPG",
    },
    {
      id: 35,
      category: "farmers",
      image: "/images/Osinka Kallaso/eb361440-1518-494f-a962-13ac96ec3cd5.JPG",
    },
    {
      id: 36,
      category: "farmers",
      image: "/images/Osinka Kallaso/f6eddfe9-4e7c-46da-8278-036dd190a49c.JPG",
    },
    {
      id: 37,
      category: "farmers",
      image: "/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96 2.JPG",
    },
    {
      id: 38,
      category: "farmers",
      image: "/images/Osinka Kallaso/3c9789c1-0b01-4f75-a9d0-b944e99e1224.JPG",
    },
    {
      id: 39,
      category: "farmers",
      image: "/images/Osinka Kallaso/6e4675aa-c955-4186-9611-38e3a41f89e7.JPG",
    },
    {
      id: 40,
      category: "farmers",
      image: "/images/Osinka Kallaso/7bcf04ca-8f08-4aca-91a3-2faf0c28acaf.JPG",
    },
    {
      id: 41,
      category: "farmers",
      image: "/images/Osinka Kallaso/7ce97cec-4774-4fbd-ab32-1684db6f2266.JPG",
    },
    {
      id: 42,
      category: "farmers",
      image: "/images/Osinka Kallaso/7dec713a-75f4-4907-ab3f-905556a1c765.JPG",
    },
    {
      id: 43,
      category: "farmers",
      image: "/images/Osinka Kallaso/8b8718ef-6a7e-4422-8a76-100e534c25f2.JPG",
    },
    {
      id: 44,
      category: "farmers",
      image: "/images/Osinka Kallaso/9b399a68-6215-40a8-bd4f-ac4f94512bc1.JPG",
    },
    {
      id: 45,
      category: "farmers",
      image: "/images/Osinka Kallaso/9bf1dd53-afec-4782-8f3a-745a34cfdc00.JPG",
    },
    {
      id: 46,
      category: "farmers",
      image: "/images/Osinka Kallaso/10d900e2-4ca5-4793-9f9c-74bdc3a6c064.JPG",
    },
    {
      id: 47,
      category: "farmers",
      image: "/images/Osinka Kallaso/18ba6794-1181-4e80-b1b5-e91079a7993b.JPG",
    },
    {
      id: 48,
      category: "farmers",
      image: "/images/Osinka Kallaso/635b4497-ea7b-4d0d-aca7-e429af39a715.JPG",
    },
    {
      id: 49,
      category: "farmers",
      image: "/images/Osinka Kallaso/806d0878-68bc-4902-a014-d97bb2f99056.JPG",
    },
    {
      id: 50,
      category: "farmers",
      image: "/images/Osinka Kallaso/47710fa0-2b56-481c-b10a-607a96df1cea.JPG",
    },
    {
      id: 51,
      category: "farmers",
      image: "/images/Osinka Kallaso/a45c4afe-e70e-4850-8e54-346fe929f0e5.JPG",
    },
    {
      id: 52,
      category: "farmers",
      image: "/images/Osinka Kallaso/d3d0a6da-b12d-4614-9360-33277d57560e.JPG",
    },
    {
      id: 53,
      category: "farmers",
      image: "/images/Osinka Kallaso/c04d2b21-524d-4c6a-bee3-f7be704ba7ae.JPG",
    },
    {
      id: 54,
      category: "farmers",
      image: "/images/Osinka Kallaso/97f73275-5e51-4e3d-883b-0aace3a442cc.JPG",
    },
    {
      id: 55,
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77 2.JPG",
    },
    {
      id: 56,
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77 3.JPG",
    },
    {
      id: 57,
      category: "farmers",
      image: "/images/Osinka Kallaso/af3e8f3a-67cc-4edd-9038-72e15445e1c0.JPG",
    },
    {
      id: 58,
      category: "farmers",
      image: "/images/Osinka Kallaso/b0e30e2e-9054-405a-916f-6afc280db903 2.JPG",
    },
    {
      id: 59,
      category: "farmers",
      image: "/images/Osinka Kallaso/b2f8270a-e31b-4854-9fb9-4a19beaa4605.JPG",
    },
    {
      id: 60,
      category: "farmers",
      image: "/images/Osinka Kallaso/be95880c-e903-4ea5-b240-30c4d00c0887.JPG",
    },
    {
      id: 61,
      category: "farmers",
      image: "/images/Osinka Kallaso/de4a645b-69fe-40cd-a1ce-045ca9c887a1.JPG",
    },
    {
      id: 62,
      category: "farmers",
      image: "/images/Osinka Kallaso/e642e976-3be8-4770-8d5b-39a313676b31.JPG",
    },
    {
      id: 63,
      category: "farmers",
      image: "/images/Osinka Kallaso/cb7a9c1a-ab8e-4f7b-93b9-58812c0de6c6 2.JPG",
    },
    {
      id: 64,
      category: "farmers",
      image: "/images/Osinka Kallaso/c6a76611-9782-453a-8bef-504f8c669525.JPG",
    },
    {
      id: 65,
      category: "farmers",
      image: "/images/Osinka Kallaso/c802cb00-96d0-48e5-9d98-7581411da36b.JPG",
    },
    {
      id: 66,
      category: "farmers",
      image: "/images/Osinka Kallaso/f4fdab3a-9892-435b-ac46-41fd9ad8b528.JPG",
    },
    {
      id: 67,
      category: "farmers",
      image: "/images/Osinka Kallaso/f102f70f-5352-4f9b-b02c-39b13236fd6c.JPG",
    },
    {
      id: 68,
      category: "farmers",
      image: "/images/Osinka Kallaso/ffdf2b99-e760-4d50-b5b0-b34ea8705fbe.JPG",
    },

    // Onion Harvest
    {
      id: 69,
      category: "harvest",
      image: "/images/onions.jpg",
    },
    {
      id: 70,
      category: "harvest",
      image: "/images/red-onions.jpg",
    },
    {
      id: 71,
      category: "harvest",
      image: "/images/white-onions.jpg",
    },

    // Water Project
    {
      id: 72,
      category: "water-project",
      image: "/images/borehole-1.jpg",
    },
    {
      id: 73,
      category: "water-project",
      image: "/images/borehole-2.jpg",
    },
    {
      id: 74,
      category: "water-project",
      image: "/images/borehole-3.jpg",
    },
    {
      id: 75,
      category: "water-project",
      image: "/images/borehole-4.jpg",
    },

    // Crop Management
    {
      id: 76,
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops.jpg",
    },
    {
      id: 77,
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops2.jpg",
    },
    {
      id: 78,
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops3.jpg",
    },
    {
      id: 79,
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops4.jpg",
    },

    // Farm Overview
    {
      id: 80,
      category: "overview",
      image: "/images/onion-farm.jpg",
    },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'landscapes', name: 'Farm Landscapes', count: galleryItems.filter(item => item.category === 'landscapes').length },
    { id: 'farmers', name: 'Our Community', count: galleryItems.filter(item => item.category === 'farmers').length },
    { id: 'harvest', name: 'Onion Harvest', count: galleryItems.filter(item => item.category === 'harvest').length },
    { id: 'water-project', name: 'Water Project', count: galleryItems.filter(item => item.category === 'water-project').length },
    { id: 'crop-management', name: 'Crop Management', count: galleryItems.filter(item => item.category === 'crop-management').length },
    { id: 'overview', name: 'Farm Overview', count: galleryItems.filter(item => item.category === 'overview').length },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-green-600 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white h-full flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/Osinka-Kalaso-Logo.png"
                alt="Osinka Kalaso Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Osinka Kalaso Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A visual journey through sustainable farming and community resilience
          </p>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG"
            alt="Osinka Kallaso farming community"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
        {/* Bottom mask to ensure clean edge */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white z-30 shadow-lg"></div>
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
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Support sustainable farming and help us continue documenting the success stories of Osinka Kallaso
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