'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Define Solana wallet interface
interface SolanaWallet {
  isPhantom?: boolean
  connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: { toString: () => string } }>
}

interface WindowWithSolana extends Window {
  solana?: SolanaWallet
}

export default function OnionsTokenPage() {
  const [isConnecting, setIsConnecting] = useState(false)

  // Token data - launching soon
  const tokenData = {
    name: 'Osinka Kalaso Onions',
    symbol: 'ONIONS',
    status: 'Launching Soon',
    description: 'The official token of Osinka Kalaso sustainable farming project on Solana',
  }

  // Check if Phantom wallet is available
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window as WindowWithSolana
      if (solana && solana.isPhantom) {
        await solana.connect({ onlyIfTrusted: true })
      }
    } catch {
      console.log('Wallet not connected')
    }
  }

  // Connect to Phantom wallet
  const connectWallet = async () => {
    try {
      setIsConnecting(true)
      const { solana } = window as WindowWithSolana
      if (solana) {
        await solana.connect()
      } else {
        alert('Phantom wallet not found! Please install it from https://phantom.app/')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
      alert('Failed to connect wallet')
    } finally {
      setIsConnecting(false)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-800">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">$ONIONS Token</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            The official token of Osinka Kalaso sustainable farming project on Solana
          </p>
          <div className="mt-6">
            <span className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
              🚀 Launching Soon
            </span>
          </div>
        </div>
      </section>

      {/* Token Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
                             {/* Token Information */}
               <div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Token Information</h2>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Token Name:</span>
                     <span className="text-gray-800">{tokenData.name}</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Symbol:</span>
                     <span className="text-gray-800 font-bold">${tokenData.symbol}</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Status:</span>
                     <span className="text-yellow-600 font-bold">🚀 {tokenData.status}</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Blockchain:</span>
                     <span className="text-purple-600 font-bold">Solana</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Token Type:</span>
                     <span className="text-gray-800">SPL Token</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                     <span className="font-semibold text-gray-700">Use Case:</span>
                     <span className="text-gray-800">Sustainable Farming</span>
                   </div>
                 </div>
               </div>

                             {/* Coming Soon Section */}
               <div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
                 
                 <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg border-2 border-yellow-200">
                   <div className="text-center">
                     <div className="text-6xl mb-4">🚀</div>
                     <h3 className="text-2xl font-bold text-yellow-800 mb-4">Token Launch Coming Soon</h3>
                     <p className="text-gray-700 mb-6">
                       The $ONIONS token is currently in development and will be launching on the Solana blockchain soon. 
                       Get ready to participate in sustainable farming through blockchain technology.
                     </p>
                     
                     <div className="space-y-4 mb-6">
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                         <span className="text-gray-700">Token smart contract development</span>
                       </div>
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                         <span className="text-gray-700">Security audits and testing</span>
                       </div>
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                         <span className="text-gray-700">DEX listing and liquidity provision</span>
                       </div>
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                         <span className="text-gray-700">Community launch and trading</span>
                       </div>
                     </div>
                     
                     <button
                       onClick={connectWallet}
                       disabled={isConnecting}
                       className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                     >
                       {isConnecting ? 'Connecting...' : 'Connect Wallet for Updates'}
                     </button>
                   </div>
                 </div>
                 
                 <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                   <h4 className="font-semibold text-blue-800 mb-2">Stay Updated</h4>
                   <p className="text-blue-700 text-sm">
                     Connect your wallet to receive notifications when the token launches and trading begins.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">$ONIONS Token Utility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The $ONIONS token represents ownership and participation in the Osinka Kalaso sustainable farming project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Governance Rights</h3>
              <p className="text-gray-600">
                Token holders can participate in project decisions and vote on important farming initiatives
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Revenue Sharing</h3>
              <p className="text-gray-600">
                Earn a share of profits from onion sales and sustainable farming operations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Exclusive Benefits</h3>
              <p className="text-gray-600">
                Access to premium onions, farm tours, and exclusive community events
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability Impact</h3>
              <p className="text-gray-600">
                Support sustainable farming practices and contribute to community development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tokenomics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the distribution and economics of the $ONIONS token
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">Token Distribution</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Community & Farming</span>
                    <span className="font-bold text-orange-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Development Fund</span>
                    <span className="font-bold text-orange-600">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Team & Advisors</span>
                    <span className="font-bold text-orange-600">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Liquidity Pool</span>
                    <span className="font-bold text-orange-600">5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Vesting Schedule</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Community (Unlocked)</span>
                    <span className="font-bold text-green-600">Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Development (6 months)</span>
                    <span className="font-bold text-green-600">Linear</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Team (12 months)</span>
                    <span className="font-bold text-green-600">Linear</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Liquidity (Locked)</span>
                    <span className="font-bold text-green-600">2 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get Ready for $ONIONS</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Be among the first to participate in sustainable farming through blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isConnecting ? 'Connecting...' : 'Connect Wallet for Updates'}
            </button>
            <Link 
              href="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Support Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 