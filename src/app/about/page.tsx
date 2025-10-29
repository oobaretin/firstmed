'use client';

import Link from 'next/link';
import { Heart, Shield, Clock, Stethoscope, Truck, Headphones, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    try {
      setIsMobileMenuOpen(prev => !prev);
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b mobile-menu-container sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png" 
                alt="First Med Care EMS Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 mr-2 sm:mr-4"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-900">First Med Care EMS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/booking" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Booking
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={handleMenuToggle}
                className="text-gray-500 hover:text-red-600 p-2 bg-gray-100 rounded border-2 border-gray-300"
                type="button"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-gray-900 bg-gray-100 rounded font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/booking" 
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Booking
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            About First Med Care EMS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto px-4">
            Your trusted partner in medical transportation for over 15 years. 
                We&apos;re committed to providing safe, reliable, and compassionate care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, First Med Care EMS began with a simple mission: to provide 
                exceptional medical transportation services that prioritize patient safety and comfort. 
                What started as a small local service has grown into a trusted regional provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified paramedics, EMTs, and medical professionals brings decades 
                of combined experience to every transport. We understand that medical emergencies 
                and appointments can be stressful, which is why we&apos;re dedicated to making the 
                transportation aspect as smooth and comfortable as possible.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve thousands of patients annually across the region, maintaining 
                our commitment to excellence while continuously improving our services and 
                expanding our capabilities.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/CC62A920-775C-4A60-92BC-CCDEB0711D52.jpeg" 
                alt="First Med Care EMS Team - Our Story" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We&apos;re driven by our core values and commitment to excellence in medical transportation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Compassion</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We treat every patient with dignity, respect, and genuine care, understanding 
                that each transport represents a person&apos;s health and well-being.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Safety First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Patient safety is our top priority. We maintain the highest standards of 
                vehicle maintenance, staff training, and safety protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Reliability</h3>
              <p className="text-sm sm:text-base text-gray-600">
                You can count on us to be on time, every time. We understand the importance 
                of punctuality in medical care and transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the dedicated professionals who make First Med Care EMS the trusted choice for medical transportation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Stethoscope className="h-10 w-10 sm:h-12 sm:w-12 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Certified Paramedics</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our paramedics are fully certified and regularly trained in the latest 
                medical protocols and emergency procedures.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Truck className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Professional Drivers</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our drivers are specially trained in medical transport safety and 
                defensive driving techniques.
              </p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Headphones className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Support Staff</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our administrative and support team ensures smooth operations and 
                excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8">Contact us today to learn more about our medical transportation services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Book Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png" 
                  alt="First Med Care EMS Logo" 
                  className="h-8 w-8 mr-2"
                />
                <span className="text-xl font-bold">First Med Care EMS</span>
              </div>
              <p className="text-gray-400">
                Professional medical transport services you can trust. Available 24/7 for emergency and non-emergency medical transportation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition duration-300">Home</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition duration-300">About</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition duration-300">Services</Link>
                <Link href="/booking" className="block text-gray-400 hover:text-white transition duration-300">Booking</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition duration-300">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (281) 690-1274</p>
                <p>Email: info@firstmedcareems.com</p>
                <p>Address: 123 Medical Center Dr<br />City, State 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 First Med Care EMS. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed by <span className="text-white font-semibold">TenQ Designs LLC</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
