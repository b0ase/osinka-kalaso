import Link from 'next/link'
import Image from 'next/image'

export default function WaterProjectPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Water Access Project</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Drilling a borehole to provide sustainable water access for farming and community needs
          </p>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/borehole-1.jpg"
            alt="Borehole drilling operation"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                The Osinka Kalaso Water Access Project is our most critical initiative, addressing 
                the fundamental challenge of water scarcity that affects both agricultural productivity 
                and community health.
              </p>
              <p className="text-gray-600 mb-6">
                By drilling a deep borehole and implementing a comprehensive water management system, 
                we will provide reliable, year-round water access for irrigation, domestic use, and 
                livestock needs.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">100</div>
                  <div className="text-sm text-gray-600">Acres Irrigated</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">200</div>
                  <div className="text-sm text-gray-600">Livestock</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">30</div>
                  <div className="text-sm text-gray-600">Homesteads</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/borehole-2.jpg"
                alt="Borehole drilling operation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Borehole Progress Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Borehole Construction Progress</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual documentation of our borehole drilling and infrastructure development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/borehole-1.jpg"
                alt="Initial drilling setup"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Initial Setup</h3>
                <p className="text-sm">Drilling equipment and site preparation</p>
              </div>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/borehole-2.jpg"
                alt="Drilling in progress"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Drilling Phase</h3>
                <p className="text-sm">Core drilling to target depth</p>
              </div>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/borehole-3.jpg"
                alt="Infrastructure installation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Infrastructure</h3>
                <p className="text-sm">Casing and pump installation</p>
              </div>
            </div>
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/borehole-4.jpg"
                alt="Completed borehole"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="font-semibold">Completion</h3>
                <p className="text-sm">Final testing and commissioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Water Matters */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Water Access Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable water access is the foundation of sustainable agriculture and community development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-4">Agricultural Productivity</h3>
              <p className="text-gray-600">
                Consistent water access enables year-round farming, multiple harvest cycles, 
                and significantly increased crop yields and quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-4">Community Health</h3>
              <p className="text-gray-600">
                Clean water access reduces waterborne diseases and improves overall community 
                health, especially for children and vulnerable populations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4">Economic Stability</h3>
              <p className="text-gray-600">
                Reliable water access creates stable income opportunities and reduces 
                dependency on unpredictable rainfall patterns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
              <p className="text-gray-600">
                Eliminates the need for long journeys to collect water, allowing families 
                to focus on education, work, and community activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
              <p className="text-gray-600">
                Sustainable water management reduces soil erosion and promotes 
                environmentally-friendly farming practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold mb-4">Community Development</h3>
              <p className="text-gray-600">
                Water access attracts investment, improves living standards, and 
                creates opportunities for community growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of our borehole and water management system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Borehole Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Depth</span>
                  <span className="font-bold text-blue-600">200 meters</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Diameter</span>
                  <span className="font-bold text-blue-600">8 inches</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Water Yield</span>
                  <span className="font-bold text-blue-600">5,000 liters/hour</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Pump Type</span>
                  <span className="font-bold text-blue-600">Solar-powered submersible</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Storage Capacity</span>
                  <span className="font-bold text-blue-600">50,000 liters</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Infrastructure Components</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Water Storage Tanks</h4>
                  <p className="text-gray-600">Multiple storage tanks with a total capacity of 50,000 liters</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Distribution Network</h4>
                  <p className="text-gray-600">PVC piping system connecting storage to irrigation and community taps</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Irrigation System</h4>
                  <p className="text-gray-600">Drip irrigation and sprinkler systems for efficient water use</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Water Quality Monitoring</h4>
                  <p className="text-gray-600">Regular testing and treatment to ensure safe drinking water</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Maintenance System</h4>
                  <p className="text-gray-600">Local training and equipment for ongoing maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap to bringing sustainable water access to the community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Site Assessment & Planning</h3>
                  <p className="text-gray-600 mb-2">Duration: 2 weeks</p>
                  <p className="text-gray-600">
                    Geological survey, water table analysis, and community consultation to determine 
                    optimal borehole location and design.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Borehole Drilling</h3>
                  <p className="text-gray-600 mb-2">Duration: 3-4 weeks</p>
                  <p className="text-gray-600">
                    Professional drilling to target depth, installation of casing and screen, 
                    and initial water testing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Infrastructure Installation</h3>
                  <p className="text-gray-600 mb-2">Duration: 4-5 weeks</p>
                  <p className="text-gray-600">
                    Installation of pump, storage tanks, distribution network, and irrigation systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Testing & Commissioning</h3>
                  <p className="text-gray-600 mb-2">Duration: 1-2 weeks</p>
                  <p className="text-gray-600">
                    System testing, water quality verification, and training for local operators.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Launch</h3>
                  <p className="text-gray-600 mb-2">Duration: Ongoing</p>
                  <p className="text-gray-600">
                    Full system operation, community education, and ongoing monitoring and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Project & Economic Impact */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Onion Farming Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable onion farming with proven market demand and high profitability
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Farming Specifications</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Land Area</h4>
                    <p className="text-gray-600">5 acres dedicated to onion farming in Olasiti, Kajiado</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Crop Type</h4>
                    <p className="text-gray-600">High-quality hybrid onions (Red Coach F1, Red Creole)</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Growing Season</h4>
                    <p className="text-gray-600">3-4 months to full maturity per cycle</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Harvest Cycles</h4>
                    <p className="text-gray-600">2 seasons per year for maximum productivity</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Water Source</h4>
                    <p className="text-gray-600">200-meter borehole with drip irrigation system</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Production & Revenue Projections</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Yield Per Acre</h4>
                    <p className="text-gray-600">15,000 - 20,000 kgs (15-20 tons) with drip irrigation</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Market Price</h4>
                    <p className="text-gray-600">KES 50-70 per kilogram (average KES 60)</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Revenue Per Acre</h4>
                    <p className="text-gray-600">KES 900,000 - 1,400,000 per season</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Profit Per Season</h4>
                    <p className="text-gray-600">KES 550,000 - 1,050,000 per acre</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Annual Profit (5 acres)</h4>
                    <p className="text-gray-600">KES 5,500,000 - 10,500,000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Market Analysis</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-semibold text-green-800 mb-2">High Demand</h4>
                  <p className="text-gray-600">Strong market demand for onions with consistent consumption patterns</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-semibold text-green-800 mb-2">Stable Pricing</h4>
                  <p className="text-gray-600">Reliable market price of KES 50/kg with minimal fluctuations</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="font-semibold text-green-800 mb-2">Local & Regional</h4>
                  <p className="text-gray-600">Access to both local community and broader regional markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cost Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Onion Farming Cost Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed cost analysis for onion farming per acre in Olasiti, Kajiado
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Cost Breakdown Per Acre</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Land Leasing (4-5 months)</span>
                    <span className="font-bold text-blue-600">KES 15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Land Preparation</span>
                    <span className="font-bold text-blue-600">KES 18,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Seeds (2kg hybrid)</span>
                    <span className="font-bold text-blue-600">KES 46,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Nursery Management</span>
                    <span className="font-bold text-blue-600">KES 9,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Drip Irrigation System</span>
                    <span className="font-bold text-blue-600">KES 170,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Fertilizers & Pesticides</span>
                    <span className="font-bold text-blue-600">KES 37,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Labor (Seasonal)</span>
                    <span className="font-bold text-blue-600">KES 37,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Miscellaneous</span>
                    <span className="font-bold text-blue-600">KES 15,000</span>
                  </div>
                  <div className="border-t-2 border-blue-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total Cost Per Acre</span>
                      <span className="font-bold text-xl text-blue-600">KES 349,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Profitability Analysis</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Conservative Estimate</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Yield: 15 tons/acre</span>
                        <span className="font-semibold">18,000 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price: KES 50/kg</span>
                        <span className="font-semibold">KES 900,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costs</span>
                        <span className="font-semibold">KES 349,000</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-green-800">
                          <span>Net Profit</span>
                          <span>KES 551,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Optimistic Estimate</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Yield: 20 tons/acre</span>
                        <span className="font-semibold">20,000 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price: KES 70/kg</span>
                        <span className="font-semibold">KES 1,400,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costs</span>
                        <span className="font-semibold">KES 349,000</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-blue-800">
                          <span>Net Profit</span>
                          <span>KES 1,051,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Annual Projection (5 acres)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>2 Seasons per Year</span>
                        <span className="font-semibold">10 acre-seasons</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conservative Annual Profit</span>
                        <span className="font-semibold">KES 5,510,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Optimistic Annual Profit</span>
                        <span className="font-semibold">KES 10,510,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Key Success Factors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="text-4xl mb-4">💧</div>
                  <h4 className="font-semibold text-blue-800 mb-2">Reliable Water Access</h4>
                  <p className="text-gray-600">Drip irrigation ensures consistent moisture for optimal onion growth</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="text-4xl mb-4">🌱</div>
                  <h4 className="font-semibold text-green-800 mb-2">Quality Seeds</h4>
                  <p className="text-gray-600">Hybrid varieties (Red Coach F1) provide higher yields and market appeal</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="text-4xl mb-4">👨‍🌾</div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Expert Management</h4>
                  <p className="text-gray-600">Proper timing and care throughout the growing cycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investment Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed cost breakdown and funding requirements for the water project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Project Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Paperwork & Permits</span>
                    <span className="font-bold text-blue-600">KES 146,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Borehole Drilling & Casing</span>
                    <span className="font-bold text-blue-600">KES 1,380,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Solar Pumping Equipment</span>
                    <span className="font-bold text-blue-600">KES 1,339,000</span>
                  </div>
                  <div className="border-t-2 border-blue-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total Project Cost</span>
                      <span className="font-bold text-xl text-blue-600">KES 2,865,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Expected Benefits</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Annual Onion Farming Profit</h4>
                    <p className="text-gray-600">KES 5,500,000 - 10,500,000 from 5 acres</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Water Security</h4>
                    <p className="text-gray-600">Year-round access for 100 acres, 200 livestock, 30 homesteads</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Market Opportunity</h4>
                    <p className="text-gray-600">High demand for onions with KES 50-70/kg pricing</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Sustainable Income</h4>
                    <p className="text-gray-600">2 harvest cycles per year with 3-4 month growing periods</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Community Development</h4>
                    <p className="text-gray-600">Creates jobs and attracts additional investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Support Our Water Project</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your contribution will directly impact the lives of 100+ families and create 
            lasting positive change in the Osinka Kalaso community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 