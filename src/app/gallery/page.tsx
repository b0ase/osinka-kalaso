'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    // Hero Images - Farm Landscapes
    {
      id: 1,
      title: "Golden Dawn Over Osinka Fields",
      description: "The first light of day breaks over our sustainable onion farm, painting the landscape in warm golden hues",
      category: "landscapes",
      image: "/images/hero.jpg",
    },
    {
      id: 2,
      title: "Misty Morning Harvest", 
      description: "Early morning mist blankets our fields as farmers begin their daily work in harmony with nature",
      category: "landscapes",
      image: "/images/hero-2.jpg",
    },
    {
      id: 3,
      title: "Sustainable Farming Panorama",
      description: "A breathtaking view of our integrated farming system where tradition meets modern sustainable practices",
      category: "landscapes",
      image: "/images/hero-3.jpg",
    },
    {
      id: 4,
      title: "Community Farming Symphony",
      description: "Where every farmer's hand contributes to the beautiful symphony of community agriculture",
      category: "landscapes",
      image: "/images/hero-4.jpg",
    },

    // Authentic Osinka Kallaso Farmers - Community Stories
    {
      id: 5,
      title: "Daniel Pariken",
      description: "A seasoned farmer sharing decades of knowledge with the next generation of Osinka Kallaso farmers",
      category: "farmers",
      image: "/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG",
    },
    {
      id: 6,
      title: "Josphat Tajeu",
      description: "Calloused hands that have nurtured countless crops, telling stories of resilience and dedication",
      category: "farmers",
      image: "/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG",
    },
    {
      id: 7,
      title: "Jecinta Wangui",
      description: "A community elder passing down traditional farming wisdom to ensure sustainable practices endure",
      category: "farmers",
      image: "/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG",
    },
    {
      id: 8,
      title: "Ann Nagirro",
      description: "A farmer's proud moment as they hold the fruits of their labor - onions that will feed families",
      category: "farmers",
      image: "/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG",
    },
    {
      id: 9,
      title: "Paul Sironka",
      description: "Farmers gather to discuss crop rotation, water management, and community development strategies",
      category: "farmers",
      image: "/images/Osinka Kallaso/66d0faea-0153-423d-9f1e-e59cd6b6c4fb.JPG",
    },
    {
      id: 10,
      title: "Simon Loomu",
      description: "A farmer working with our new irrigation system, ensuring every drop counts for sustainable farming",
      category: "farmers",
      image: "/images/Osinka Kallaso/79b03dc4-fda1-4b5c-baba-af9ab69ad965.JPG",
    },
    {
      id: 11,
      title: "Martin Tobiko",
      description: "A farmer tending to onion seedlings, nurturing the foundation of community wealth and food security",
      category: "farmers",
      image: "/images/Osinka Kallaso/93f6cb54-2506-4675-97d7-7cafac7649bc.JPG",
    },
    {
      id: 12,
      title: "Isabella Waithera",
      description: "Embracing new techniques while honoring traditional wisdom - the future of sustainable agriculture",
      category: "farmers",
      image: "/images/Osinka Kallaso/147f4684-d379-4c8e-8ca6-0cbb5a229886.JPG",
    },
    {
      id: 13,
      title: "Daniel Pariken",
      description: "A farmer who understands the language of the earth, reading soil health and crop needs instinctively",
      category: "farmers",
      image: "/images/Osinka Kallaso/290edef7-f319-42d3-9ac4-5a06eccfad9c.JPG",
    },
    {
      id: 14,
      title: "Josphat Tajeu",
      description: "Using modern tools with time-tested methods to create the perfect farming environment",
      category: "farmers",
      image: "/images/Osinka Kallaso/386d69df-c4b2-40c0-a6f0-bcb714800a2f.JPG",
    },
    {
      id: 15,
      title: "Jecinta Wangui",
      description: "Building not just crops, but a stronger, more resilient farming community for future generations",
      category: "farmers",
      image: "/images/Osinka Kallaso/427a34a6-4097-4eab-8cae-a3a7200a1de2.JPG",
    },
    {
      id: 16,
      title: "Ann Nagirro",
      description: "Teaching the next generation the delicate balance of patience, timing, and natural wisdom",
      category: "farmers",
      image: "/images/Osinka Kallaso/429e875f-e4fb-4750-9763-03c351092c32.JPG",
    },
    {
      id: 17,
      title: "Paul Sironka",
      description: "Managing our precious water resources with precision and care for optimal crop health",
      category: "farmers",
      image: "/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG",
    },
    {
      id: 18,
      title: "Simon Loomu",
      description: "Protecting and nurturing crops through every stage of growth with unwavering dedication",
      category: "farmers",
      image: "/images/Osinka Kallaso/8734f09b-23a2-4241-8e61-8ea16f9def42.JPG",
    },
    {
      id: 19,
      title: "Martin Tobiko",
      description: "A farmer's vision materializes as they work the land that will feed and sustain their community",
      category: "farmers",
      image: "/images/Osinka Kallaso/055343ff-8a43-4848-9c8f-b8ff2a0e4a4a.JPG",
    },
    {
      id: 20,
      title: "Isabella Waithera",
      description: "Every movement calculated, every action purposeful - the art of sustainable farming perfected",
      category: "farmers",
      image: "/images/Osinka Kallaso/67093a6c-e2d8-4318-b0d9-fcaa67779b4f.JPG",
    },
    {
      id: 21,
      title: "Daniel Pariken",
      description: "Creating sustainable farming systems that will nourish communities for generations to come",
      category: "farmers",
      image: "/images/Osinka Kallaso/1869026e-5d54-40ca-a351-699245bd1de4.JPG",
    },
    {
      id: 22,
      title: "Josphat Tajeu",
      description: "Farmers collaborating to solve challenges and share innovative solutions for better yields",
      category: "farmers",
      image: "/images/Osinka Kallaso/78977206-2a39-4de2-8573-ea9a84fb5658.JPG",
    },
    {
      id: 23,
      title: "Jecinta Wangui",
      description: "Managing resources with care, ensuring the land remains fertile for future harvests",
      category: "farmers",
      image: "/images/Osinka Kallaso/a7d4073e-9b1f-475c-bd45-4a7efc32ff59.JPG",
    },
    {
      id: 24,
      title: "Ann Nagirro",
      description: "Using modern farming tools with traditional wisdom to maximize efficiency and sustainability",
      category: "farmers",
      image: "/images/Osinka Kallaso/ad3e980b-a644-4fa3-8db2-ef126acd6aeb.JPG",
    },
    {
      id: 25,
      title: "Paul Sironka",
      description: "A moment of joy and pride as another successful harvest brings prosperity to the community",
      category: "farmers",
      image: "/images/Osinka Kallaso/ad861b74-9365-4f73-9864-480b2ce4338a.JPG",
    },
    {
      id: 26,
      title: "Simon Loomu",
      description: "Experimenting with new methods while respecting the wisdom of generations past",
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77.JPG",
    },
    {
      id: 27,
      title: "Martin Tobiko",
      description: "Bringing farmers together to share knowledge, resources, and build stronger communities",
      category: "farmers",
      image: "/images/Osinka Kallaso/af6e33ed-716b-4287-b125-dd5b43f92d8d.JPG",
    },
    {
      id: 28,
      title: "Isabella Waithera",
      description: "Optimizing every resource - water, soil, and time - for maximum community benefit",
      category: "farmers",
      image: "/images/Osinka Kallaso/b0e30e2e-9054-405a-916f-6afc280db903.JPG",
    },
    {
      id: 29,
      title: "Daniel Pariken",
      description: "Transforming barren land into fields of abundance through sustainable farming practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/b84b3bb1-4b16-4ede-8ce0-e8b6102360fc.JPG",
    },
    {
      id: 30,
      title: "Josphat Tajeu",
      description: "Ensuring every onion meets the highest standards of quality and nutrition",
      category: "farmers",
      image: "/images/Osinka Kallaso/bd14327a-e191-4af1-b0c8-2aa059cdba49.JPG",
    },
    {
      id: 31,
      title: "Jecinta Wangui",
      description: "Farmers gathering to discuss progress, challenges, and opportunities for growth",
      category: "farmers",
      image: "/images/Osinka Kallaso/c56bce87-dfb3-482a-9558-86a42ce6e0e1.JPG",
    },
    {
      id: 32,
      title: "Ann Nagirro",
      description: "Leading the way in eco-friendly farming practices that protect our environment",
      category: "farmers",
      image: "/images/Osinka Kallaso/cb7a9c1a-ab8e-4f7b-93b9-58812c0de6c6.JPG",
    },
    {
      id: 33,
      title: "Paul Sironka",
      description: "Every harvest tells a story of community, resilience, and the power of sustainable farming",
      category: "farmers",
      image: "/images/Osinka Kallaso/d502aa50-de22-47ad-afed-056b96f9bef1.JPG",
    },
    {
      id: 34,
      title: "Simon Loomu",
      description: "Balancing cutting-edge technology with time-honored farming traditions",
      category: "farmers",
      image: "/images/Osinka Kallaso/e1376929-9649-4177-883e-85be5cfa442c.JPG",
    },
    {
      id: 35,
      title: "Martin Tobiko",
      description: "Seeing beyond today's harvest to tomorrow's sustainable farming community",
      category: "farmers",
      image: "/images/Osinka Kallaso/eb361440-1518-494f-a962-13ac96ec3cd5.JPG",
    },
    {
      id: 36,
      title: "Isabella Waithera",
      description: "Protecting and nurturing crops through every season with unwavering dedication",
      category: "farmers",
      image: "/images/Osinka Kallaso/f6eddfe9-4e7c-46da-8278-036dd190a49c.JPG",
    },
    {
      id: 37,
      title: "Daniel Pariken",
      description: "Working with sustainable farming equipment and modern techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96 2.JPG",
    },
    {
      id: 38,
      title: "Josphat Tajeu",
      description: "Community planning and strategy sessions for sustainable development",
      category: "farmers",
      image: "/images/Osinka Kallaso/3c9789c1-0b01-4f75-a9d0-b944e99e1224.JPG",
    },
    {
      id: 39,
      title: "Jecinta Wangui",
      description: "Innovative farming techniques and community knowledge sharing",
      category: "farmers",
      image: "/images/Osinka Kallaso/6e4675aa-c955-4186-9611-38e3a41f89e7.JPG",
    },
    {
      id: 40,
      title: "Ann Nagirro",
      description: "Sustainable farming practices and community collaboration",
      category: "farmers",
      image: "/images/Osinka Kallaso/7bcf04ca-8f08-4aca-91a3-2faf0c28acaf.JPG",
    },
    {
      id: 41,
      title: "Paul Sironka",
      description: "Water management and irrigation system expertise",
      category: "farmers",
      image: "/images/Osinka Kallaso/7ce97cec-4774-4fbd-ab32-1684db6f2266.JPG",
    },
    {
      id: 42,
      title: "Simon Loomu",
      description: "Modern farming equipment and sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/7dec713a-75f4-4907-ab3f-905556a1c765.JPG",
    },
    {
      id: 43,
      title: "Martin Tobiko",
      description: "Community development and farming innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/8b8718ef-6a7e-4422-8a76-100e534c25f2.JPG",
    },
    {
      id: 44,
      title: "Isabella Waithera",
      description: "Sustainable farming techniques and community leadership",
      category: "farmers",
      image: "/images/Osinka Kallaso/9b399a68-6215-40a8-bd4f-ac4f94512bc1.JPG",
    },
    {
      id: 45,
      title: "Daniel Pariken",
      description: "Community planning and sustainable development strategies",
      category: "farmers",
      image: "/images/Osinka Kallaso/9bf1dd53-afec-4782-8f3a-745a34cfdc00.JPG",
    },
    {
      id: 46,
      title: "Josphat Tajeu",
      description: "Farming innovation and community collaboration",
      category: "farmers",
      image: "/images/Osinka Kallaso/10d900e2-4ca5-4793-9f9c-74bdc3a6c064.JPG",
    },
    {
      id: 47,
      title: "Jecinta Wangui",
      description: "Sustainable farming practices and community knowledge",
      category: "farmers",
      image: "/images/Osinka Kallaso/18ba6794-1181-4e80-b1b5-e91079a7993b.JPG",
    },
    {
      id: 48,
      title: "Ann Nagirro",
      description: "Community farming and sustainable development",
      category: "farmers",
      image: "/images/Osinka Kallaso/635b4497-ea7b-4d0d-aca7-e429af39a715.JPG",
    },
    {
      id: 49,
      title: "Paul Sironka",
      description: "Modern farming techniques and community innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/806d0878-68bc-4902-a014-d97bb2f99056.JPG",
    },
    {
      id: 50,
      title: "Simon Loomu",
      description: "Sustainable farming equipment and community development",
      category: "farmers",
      image: "/images/Osinka Kallaso/47710fa0-2b56-481c-b10a-607a96df1cea.JPG",
    },
    {
      id: 51,
      title: "Martin Tobiko",
      description: "Community farming and sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/a45c4afe-e70e-4850-8e54-346fe929f0e5.JPG",
    },
    {
      id: 52,
      title: "Isabella Waithera",
      description: "Sustainable farming innovation and community leadership",
      category: "farmers",
      image: "/images/Osinka Kallaso/d3d0a6da-b12d-4614-9360-33277d57560e.JPG",
    },
    {
      id: 53,
      title: "Daniel Pariken",
      description: "Community development and sustainable farming practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/c04d2b21-524d-4c6a-bee3-f7be704ba7ae.JPG",
    },
    {
      id: 54,
      title: "Josphat Tajeu",
      description: "Modern farming equipment and sustainable techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/97f73275-5e51-4e3d-883b-0aace3a442cc.JPG",
    },
    {
      id: 55,
      title: "Jecinta Wangui",
      description: "Community farming and sustainable development",
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77 2.JPG",
    },
    {
      id: 56,
      title: "Ann Nagirro",
      description: "Sustainable farming practices and community innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/adbc56bf-484f-4dc4-b8ca-0df5eef47e77 3.JPG",
    },
    {
      id: 57,
      title: "Paul Sironka",
      description: "Community development and sustainable farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/af3e8f3a-67cc-4edd-9038-72e15445e1c0.JPG",
    },
    {
      id: 58,
      title: "Simon Loomu",
      description: "Modern farming equipment and community collaboration",
      category: "farmers",
      image: "/images/Osinka Kallaso/b0e30e2e-9054-405a-916f-6afc280db903 2.JPG",
    },
    {
      id: 59,
      title: "Martin Tobiko",
      description: "Sustainable farming innovation and community development",
      category: "farmers",
      image: "/images/Osinka Kallaso/b2f8270a-e31b-4854-9fb9-4a19beaa4605.JPG",
    },
    {
      id: 60,
      title: "Isabella Waithera",
      description: "Community farming and sustainable practices",
      category: "farmers",
      image: "/images/Osinka Kallaso/be95880c-e903-4ea5-b240-30c4d00c0887.JPG",
    },
    {
      id: 61,
      title: "Daniel Pariken",
      description: "Sustainable farming equipment and community innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/de4a645b-69fe-40cd-a1ce-045ca9c887a1.JPG",
    },
    {
      id: 62,
      title: "Josphat Tajeu",
      description: "Modern farming techniques and community development",
      category: "farmers",
      image: "/images/Osinka Kallaso/e642e976-3be8-4770-8d5b-39a313676b31.JPG",
    },
    {
      id: 63,
      title: "Jecinta Wangui",
      description: "Community farming and sustainable innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/cb7a9c1a-ab8e-4f7b-93b9-58812c0de6c6 2.JPG",
    },
    {
      id: 64,
      title: "Ann Nagirro",
      description: "Sustainable farming practices and community leadership",
      category: "farmers",
      image: "/images/Osinka Kallaso/c6a76611-9782-453a-8bef-504f8c669525.JPG",
    },
    {
      id: 65,
      title: "Paul Sironka",
      description: "Community development and modern farming techniques",
      category: "farmers",
      image: "/images/Osinka Kallaso/c802cb00-96d0-48e5-9d98-7581411da36b.JPG",
    },
    {
      id: 66,
      title: "Simon Loomu",
      description: "Sustainable farming innovation and community collaboration",
      category: "farmers",
      image: "/images/Osinka Kallaso/f4fdab3a-9892-435b-ac46-41fd9ad8b528.JPG",
    },
    {
      id: 67,
      title: "Martin Tobiko",
      description: "Community farming and sustainable development",
      category: "farmers",
      image: "/images/Osinka Kallaso/f102f70f-5352-4f9b-b02c-39b13236fd6c.JPG",
    },
    {
      id: 68,
      title: "Isabella Waithera",
      description: "Sustainable farming practices and community innovation",
      category: "farmers",
      image: "/images/Osinka Kallaso/ffdf2b99-e760-4d50-b5b0-b34ea8705fbe.JPG",
    },

    // Onion Harvest - The Fruits of Labor
    {
      id: 69,
      title: "Golden Harvest Bounty",
      description: "A magnificent display of our premium onions, ready to nourish families across Kenya",
      category: "harvest",
      image: "/images/onions.jpg",
    },
    {
      id: 70,
      title: "Ruby Red Treasures",
      description: "Our signature red onions, bursting with flavor and packed with essential nutrients",
      category: "harvest",
      image: "/images/red-onions.jpg",
    },
    {
      id: 71,
      title: "Pearl White Harvest",
      description: "Pure white onions, crisp and fresh, representing the pinnacle of sustainable farming",
      category: "harvest",
      image: "/images/white-onions.jpg",
    },

    // Water Project - Life Source
    {
      id: 72,
      title: "The Water Revolution Begins",
      description: "Initial setup of our transformative borehole project that will change farming forever",
      category: "water-project",
      image: "/images/borehole-1.jpg",
    },
    {
      id: 73,
      title: "Drilling for Prosperity",
      description: "The moment when water meets earth, creating new possibilities for sustainable farming",
      category: "water-project",
      image: "/images/borehole-2.jpg",
    },
    {
      id: 74,
      title: "Infrastructure of Hope",
      description: "Building the systems that will deliver life-giving water to every corner of our farm",
      category: "water-project",
      image: "/images/borehole-3.jpg",
    },
    {
      id: 75,
      title: "Water Security Achieved",
      description: "The completion of our water project - a milestone in community development and sustainability",
      category: "water-project",
      image: "/images/borehole-4.jpg",
    },

    // Crop Management - The Science of Growth
    {
      id: 76,
      title: "The Growth Monitor",
      description: "Carefully monitoring every stage of onion development for optimal health and yield",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops.jpg",
    },
    {
      id: 77,
      title: "Precision Agriculture",
      description: "Using advanced techniques to ensure every plant receives exactly what it needs to thrive",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops2.jpg",
    },
    {
      id: 78,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure our onions meet the highest standards",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops3.jpg",
    },
    {
      id: 79,
      title: "Sustainable Practices",
      description: "Implementing eco-friendly crop management that protects our environment and community",
      category: "crop-management",
      image: "/images/Crop Management Monitoring and maintaining healthy onion crops4.jpg",
    },

    // Farm Overview
    {
      id: 80,
      title: "Osinka Kallaso Farm Vista",
      description: "A panoramic view of our sustainable farming paradise, where innovation meets tradition",
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
    { id: 'farmers', name: 'Our Farmers', count: galleryItems.filter(item => item.category === 'farmers').length },
    { id: 'harvest', name: 'Onion Harvest', count: galleryItems.filter(item => item.category === 'harvest').length },
    { id: 'water-project', name: 'Water Project', count: galleryItems.filter(item => item.category === 'water-project').length },
    { id: 'crop-management', name: 'Crop Management', count: galleryItems.filter(item => item.category === 'crop-management').length },
    { id: 'overview', name: 'Farm Overview', count: galleryItems.filter(item => item.category === 'overview').length },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Osinka Kallaso Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A visual journey through sustainable farming, community resilience, and the authentic stories of Osinka Kallaso
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stories from the Field</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our authentic Osinka Kallaso farmers - the heart and soul of sustainable agriculture
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                    alt="Josphat Tajeu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Josphat Tajeu&apos;s Journey</h3>
                  <p className="text-gray-600">Master Farmer, Osinka Kallaso Community</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;For three decades, I&apos;ve watched this land transform. Before the water project, we were at the mercy of unpredictable rains. Now, with sustainable irrigation, I can plan with confidence and teach others the art of precision farming.&rdquo;
              </p>
              <p className="text-gray-600">
                &ldquo;My greatest joy is seeing young farmers succeed and knowing our community will thrive for generations to come.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <Image
                    src="/images/Osinka Kallaso/5108cac3-4480-440b-9d00-dff8e89e2415.JPG"
                    alt="Paul Sironka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Paul Sironka&apos;s Mission</h3>
                  <p className="text-gray-600">Community Leader & Innovation Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Water is life, and managing it wisely is our sacred responsibility. The borehole project didn&apos;t just bring water - it brought hope, health, and economic opportunity to every family in our community.&rdquo;
              </p>
              <p className="text-gray-600">
                &ldquo;We&apos;re not just farming onions; we&apos;re building a sustainable future where every drop of water creates ripples of positive change.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Art of Sustainable Farming</h2>
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
                Choosing premium, disease-resistant varieties that thrive in our unique climate and soil conditions
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
                Soil testing, organic enrichment, and precision tilling for optimal growing conditions
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
              <h3 className="text-sm md:text-lg font-semibold mb-2">3. Smart Irrigation</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Sustainable water management through our advanced borehole and irrigation systems
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
              <h3 className="text-sm md:text-lg font-semibold mb-2">4. Quality Harvest</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Careful harvesting and rigorous quality control for market-ready premium onions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Visual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual representation of how sustainable farming transforms lives at Osinka Kallaso
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
              <h3 className="text-lg md:text-xl font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Clean water access has reduced waterborne diseases by 60% and improved overall community health
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
                85% of children from participating families now attend school regularly with improved resources
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
              <h3 className="text-lg md:text-xl font-semibold mb-2">Economic Prosperity</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Average household income has increased by 250% since project inception, creating lasting wealth
              </p>
            </div>
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