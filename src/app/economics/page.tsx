import Link from 'next/link'
import Image from 'next/image'

export default function EconomicsPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Onion Farming Economics</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Understanding the financial benefits and economic impact of sustainable onion farming in Kenya
          </p>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Market Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of the Kenyan onion market and its potential for sustainable growth
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Market Demand</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 text-lg">High Domestic Demand</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Onions are a staple ingredient in Kenyan cuisine, with consistent demand 
                      throughout the year. The local market consumes approximately 500,000 tons annually.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">Export Opportunities</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Growing demand from neighboring countries and international markets 
                      presents significant export potential for high-quality Kenyan onions.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">Price Stability</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Onion prices in Kenya show relative stability compared to other crops, 
                      providing predictable income for farmers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Market Statistics</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Annual Domestic Consumption</span>
                      <span className="font-bold text-green-700 text-lg">500,000 tons</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Average Price per Kg</span>
                      <span className="font-bold text-blue-700 text-lg">KES 80-120</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Market Growth Rate</span>
                      <span className="font-bold text-purple-700 text-lg">8% annually</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Import Dependency</span>
                      <span className="font-bold text-orange-700 text-lg">30%</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Export Potential</span>
                      <span className="font-bold text-teal-700 text-lg">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sustainable Farming in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our farmers are implementing sustainable practices for profitable onion cultivation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                  alt="Sustainable onion farming practices"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profitability Analysis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Profitability Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of costs, revenues, and profit margins for onion farming
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cost Structure (Per Acre)</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Land Preparation</span>
                      <span className="font-bold text-red-700 text-lg">KES 15,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Seeds & Planting</span>
                      <span className="font-bold text-orange-700 text-lg">KES 25,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Fertilizers</span>
                      <span className="font-bold text-yellow-700 text-lg">KES 30,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Irrigation (Water)</span>
                      <span className="font-bold text-blue-700 text-lg">KES 20,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Pest Control</span>
                      <span className="font-bold text-purple-700 text-lg">KES 15,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Labor</span>
                      <span className="font-bold text-pink-700 text-lg">KES 40,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Harvesting</span>
                      <span className="font-bold text-indigo-700 text-lg">KES 25,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Transport & Marketing</span>
                      <span className="font-bold text-teal-700 text-lg">KES 20,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-lg border-2 border-red-300">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-gray-800">Total Cost</span>
                      <span className="font-bold text-xl text-red-800">KES 190,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Revenue & Profit Analysis</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 text-lg">Yield Expectations</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      With proper irrigation and farming techniques, we expect:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        15-20 tons per acre per harvest
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        2-3 harvest cycles per year
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        Average price: KES 100 per kg
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Annual Yield (2 cycles)</span>
                        <span className="font-bold text-blue-700 text-lg">35 tons</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Annual Revenue</span>
                        <span className="font-bold text-green-700 text-lg">KES 3,500,000</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Annual Costs (2 cycles)</span>
                        <span className="font-bold text-red-700 text-lg">KES 380,000</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-2 border-green-300">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-gray-800">Annual Profit</span>
                        <span className="font-bold text-xl text-green-800">KES 3,120,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2 text-lg">Profit Margin</h4>
                    <p className="text-gray-700 leading-relaxed">89% profit margin demonstrates excellent return on investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Economic Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How the Osinka Kalaso project will transform the local economy and create lasting prosperity
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Income Generation</h3>
                <p className="text-gray-700 leading-relaxed">
                  KES 3,000,000+ annual income potential for participating farmers
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
                <div className="text-5xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Market Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creation of local markets and distribution networks
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Value Addition</h3>
                <p className="text-gray-700 leading-relaxed">
                  Opportunities for processing, packaging, and export
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Economic Growth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multiplier effect on local businesses and services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Investment Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How onion farming compares to other agricultural investments in Kenya
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Crop</th>
                      <th className="px-6 py-4 text-center font-semibold">Investment per Acre</th>
                      <th className="px-6 py-4 text-center font-semibold">Annual Return</th>
                      <th className="px-6 py-4 text-center font-semibold">Profit Margin</th>
                      <th className="px-6 py-4 text-center font-semibold">Market Stability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 bg-gradient-to-r from-green-50 to-green-100">
                      <td className="px-6 py-4 font-semibold text-gray-800">Onions (with irrigation)</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 190,000</td>
                      <td className="px-6 py-4 text-center text-green-700 font-bold">KES 3,120,000</td>
                      <td className="px-6 py-4 text-center text-green-700 font-bold">89%</td>
                      <td className="px-6 py-4 text-center text-gray-700">High</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">Maize</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 50,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 80,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">60%</td>
                      <td className="px-6 py-4 text-center text-gray-700">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">Beans</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 40,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 60,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">50%</td>
                      <td className="px-6 py-4 text-center text-gray-700">Medium</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">Tomatoes</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 150,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 300,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">100%</td>
                      <td className="px-6 py-4 text-center text-gray-700">Low</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Coffee</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 200,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">KES 400,000</td>
                      <td className="px-6 py-4 text-center text-gray-700">100%</td>
                      <td className="px-6 py-4 text-center text-gray-700">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Long-term Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sustainability & Long-term Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How sustainable onion farming creates lasting economic value for the community
            </p>
          </div>

          {/* Farmer Success Stories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/2bf70573-4230-4c77-8282-a37f89f29e96.JPG"
                  alt="Osinka Kallaso Farmer Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">John's Success</h3>
              <p className="text-gray-600 text-sm text-center">
                &ldquo;My income increased from KES 15,000 to KES 45,000 per month. 
                I can now afford better education for my children.&rdquo;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/3ad53087-816a-4dd5-b6a5-cb02f03ec71f.JPG"
                  alt="Osinka Kallaso Farmer Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Sarah's Journey</h3>
              <p className="text-gray-600 text-sm text-center">
                &ldquo;The sustainable farming techniques have transformed my farm. 
                I'm now a mentor to other farmers in the community.&rdquo;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full overflow-hidden">
                <Image
                  src="/images/Osinka Kallaso/3c894237-9648-4c33-bfe3-bbba3a922418.JPG"
                  alt="Osinka Kallaso Farmer Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">David's Growth</h3>
              <p className="text-gray-600 text-sm text-center">
                &ldquo;From struggling to make ends meet to becoming a successful 
                onion farmer with a stable income.&rdquo;
              </p>
            </div>
          </div>

          {/* Community Impact Visualization */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">👥</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">50+ Families</h4>
                    <p className="text-gray-600">Directly benefiting from the project</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">💰</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">KES 2.5M+</h4>
                    <p className="text-gray-600">Total annual income generated</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">100+ Children</h4>
                    <p className="text-gray-600">Now have access to better education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/Osinka Kallaso/9c68d72e-39a7-4832-b781-2b2348050175.JPG"
                alt="Osinka Kallaso community economic impact"
                fill
                className="object-cover"
              />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sustainable Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                Water-efficient irrigation, organic fertilizers, and crop rotation ensure 
                long-term soil health and productivity.
              </p>
            </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Generational Wealth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stable income enables families to invest in education, healthcare, and 
                  future business opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Increased economic activity attracts infrastructure development, 
                  schools, and healthcare facilities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Environmental Benefits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sustainable farming practices protect local ecosystems and 
                  contribute to climate change mitigation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Knowledge Transfer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Training programs create skilled agricultural workers and 
                  enable knowledge sharing across communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connection to national and international markets creates 
                  opportunities for scaling and diversification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Invest in Sustainable Agriculture</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Support our water project and help create a sustainable, profitable future 
            for Kenyan farmers and their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Support Our Project
            </Link>
            <Link 
              href="/water-project"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn About Water Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 