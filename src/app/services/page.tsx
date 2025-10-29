'use client';

import Link from 'next/link';
import { Ambulance, User, Heart, Phone, Clock, Shield, Car, Stethoscope, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
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
                <Link href="/services" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
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
                className="block px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 text-gray-900 bg-gray-100 rounded font-semibold"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive medical transportation solutions designed to meet every patient&apos;s needs. 
            From emergency response to scheduled appointments, we&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Medical Transport</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When every second counts, our emergency response team is ready to provide immediate, 
              life-saving medical transportation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Ambulance className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency medical transport with fully equipped ambulances, 
                advanced life support, and certified paramedics.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Advanced Life Support (ALS)</li>
                <li>• Basic Life Support (BLS)</li>
                <li>• Cardiac monitoring</li>
                <li>• Oxygen therapy</li>
                <li>• IV therapy</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Care Transport</h3>
              <p className="text-gray-600 mb-4">
                Specialized transport for patients requiring intensive care during transportation 
                between medical facilities.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• ICU-level monitoring</li>
                <li>• Ventilator support</li>
                <li>• Medication management</li>
                <li>• Specialized equipment</li>
                <li>• Critical care nurses</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Stethoscope className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma Transport</h3>
              <p className="text-gray-600 mb-4">
                Rapid response for trauma patients with specialized equipment and 
                highly trained medical personnel.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Trauma assessment</li>
                <li>• Spinal immobilization</li>
                <li>• Bleeding control</li>
                <li>• Pain management</li>
                <li>• Rapid transport protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Non-Emergency Medical Transport</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe, comfortable, and reliable transportation for scheduled medical appointments, 
              treatments, and other healthcare needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <User className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Appointments</h3>
              <p className="text-gray-600 mb-4">
                Reliable transportation to and from doctor visits, specialist appointments, 
                and routine medical check-ups.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Doctor appointments</li>
                <li>• Specialist visits</li>
                <li>• Routine check-ups</li>
                <li>• Follow-up appointments</li>
                <li>• Medical consultations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dialysis Transport</h3>
              <p className="text-gray-600 mb-4">
                Specialized transport for dialysis patients with trained staff who understand 
                the unique needs of renal care.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Regular dialysis appointments</li>
                <li>• Comfortable seating</li>
                <li>• Punctual service</li>
                <li>• Specialized equipment</li>
                <li>• Experienced drivers</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheelchair Transport</h3>
              <p className="text-gray-600 mb-4">
                Accessible transportation for wheelchair users with properly equipped vehicles 
                and trained assistance staff.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Wheelchair-accessible vehicles</li>
                <li>• Lift assistance</li>
                <li>• Secure wheelchair restraints</li>
                <li>• Trained staff</li>
                <li>• Comfortable seating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services to meet specific medical transportation needs and ensure 
              comprehensive care for all patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Scheduled Transports</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Pre-scheduled medical transportation for planned procedures, treatments, 
                and appointments with guaranteed pickup times.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Surgery transport</li>
                <li>• Chemotherapy appointments</li>
                <li>• Physical therapy sessions</li>
                <li>• Diagnostic procedures</li>
                <li>• Rehabilitation visits</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Discharge Transport</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Safe transport home from hospitals, rehabilitation centers, and other 
                medical facilities following treatment or procedures.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Hospital discharge</li>
                <li>• Rehabilitation discharge</li>
                <li>• Post-surgery transport</li>
                <li>• Nursing home transport</li>
                <li>• Home care setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing the highest quality medical transportation with 
              features that set us apart from the competition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service for emergencies and scheduled transports</p>
            </div>
            
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed medical transport with comprehensive insurance coverage</p>
            </div>
            
            <div className="text-center">
              <User className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Staff</h3>
              <p className="text-gray-600">Trained paramedics, EMTs, and medical professionals</p>
            </div>
            
            <div className="text-center">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Fleet</h3>
              <p className="text-gray-600">Well-maintained vehicles with latest medical equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Medical Transport?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your transportation needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Book Now
            </Link>
            <a 
              href="tel:281-690-1274" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              <Phone className="h-5 w-5 inline mr-2" />
              Call (281) 690-1274
            </a>
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
                className="h-16 w-16 mr-4"
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
