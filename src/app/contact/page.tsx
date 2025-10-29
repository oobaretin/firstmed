'use client';

import Link from 'next/link';
import { Ambulance, Phone, Mail, MapPin, Clock, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
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
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png" 
                alt="First Med Care EMS Logo" 
                className="h-20 w-20 sm:h-24 sm:w-24 mr-4 sm:mr-5"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">First Med Care EMS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/booking" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Booking
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
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
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
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
                className="block px-4 py-3 text-gray-900 bg-gray-100 rounded font-semibold"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with First Med Care EMS. We&apos;re here to answer your questions 
            and provide the medical transportation services you need.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Emergency & General Inquiries</p>
                    <a href="tel:281-690-1274" className="text-red-600 font-semibold text-lg hover:text-red-700">
                      (281) 690-1274
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">General Information & Support</p>
                    <a href="mailto:24hourserviceems@gmail.com" className="text-red-600 font-semibold hover:text-red-700">
                      24hourserviceems@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 mb-2">Our Main Office</p>
                    <address className="text-gray-600 not-italic">
                      11104 W Airport Blvd<br />
                      Suite 138<br />
                      Stafford, TX 77477
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Emergency Services:</strong> 24/7</p>
                      <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                      <p><strong>Scheduled Transports:</strong> 6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="emergency">Emergency Transport</option>
                    <option value="scheduled">Scheduled Transport</option>
                    <option value="information">General Information</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please describe your transportation needs or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Medical Emergency?</h2>
          <p className="text-xl mb-8">Don&apos;t wait - call us immediately for emergency medical transport</p>
          <a 
            href="tel:281-690-1274" 
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
          >
            <Phone className="h-6 w-6 mr-2" />
            Call (281) 690-1274
          </a>
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
                <p>Email: 24hourserviceems@gmail.com</p>
                <p>Address: 11104 W Airport Blvd<br />Suite 138, Stafford, TX 77477</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 First Med Care EMS. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed by <span className="text-white font-semibold">TenQ Designs LLC</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
