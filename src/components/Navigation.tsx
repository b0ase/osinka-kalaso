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

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wallet, setWallet] = useState<SolanaWallet | null>(null)
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [isConnecting, setIsConnecting] = useState(false)

  // Check if Phantom wallet is available
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window as WindowWithSolana
      if (solana && solana.isPhantom) {
        const response = await solana.connect({ onlyIfTrusted: true })
        setWalletAddress(response.publicKey.toString())
        setWallet(solana)
      }
    } catch (error) {
      console.log('Wallet not connected')
    }
  }

  // Connect to Phantom wallet
  const connectWallet = async () => {
    try {
      setIsConnecting(true)
      const { solana } = window as WindowWithSolana
      if (solana) {
        const response = await solana.connect()
        setWalletAddress(response.publicKey.toString())
        setWallet(solana)
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

  // Disconnect wallet
  const disconnectWallet = () => {
    setWallet(null)
    setWalletAddress('')
  }

  // Format wallet address for display
  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG"
                alt="Osinka Kalaso Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-green-600 hidden sm:block">
              Osinka Kalaso
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/water-project" className="text-gray-700 hover:text-green-600 transition-colors">
              Water Project
            </Link>
            <Link href="/economics" className="text-gray-700 hover:text-green-600 transition-colors">
              Economics
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-green-600 transition-colors">
              Gallery
            </Link>
            <Link href="/onions" className="text-gray-700 hover:text-green-600 transition-colors">
              $ONIONS
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            
            {/* Wallet Connection */}
            {walletAddress ? (
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {formatWalletAddress(walletAddress)}
                </div>
                <button
                  onClick={disconnectWallet}
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
            )}
            
            <Link 
              href="/donate" 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/water-project" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Water Project
              </Link>
              <Link 
                href="/economics" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Economics
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/onions" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                $ONIONS
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Wallet Connection */}
              {walletAddress ? (
                <div className="space-y-2">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                    {formatWalletAddress(walletAddress)}
                  </div>
                  <button
                    onClick={() => {
                      disconnectWallet()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-gray-600 hover:text-red-600 transition-colors text-sm text-center"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    connectWallet()
                    setIsMenuOpen(false)
                  }}
                  disabled={isConnecting}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              )}
              
              <Link 
                href="/donate" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 