'use client';

import Link from 'next/link';
import { Phone, Ambulance, Heart, User, Clock, Shield, Car } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

export default function Home() {
  // First Med Care EMS location coordinates
  const businessLocation = {
    lat: 29.6161, // Stafford, TX latitude
    lng: -95.5577 // Stafford, TX longitude
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Ambulance className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">First Med Care EMS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
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
                <Link href="/contact" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-red-600 focus:outline-none focus:text-red-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Medical Transport
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Reliable, safe, and compassionate medical transportation services available 24/7. 
            Your health and safety are our top priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Book Now
            </Link>
                 <a 
                   href="tel:281-690-1274" 
                   className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                 >
                   Call (281) 690-1274
                 </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical transportation solutions for every need
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Ambulance className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Transport</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency medical transportation with fully equipped ambulances and trained paramedics.
              </p>
              <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                24/7 Available
              </span>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <User className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Emergency Transport</h3>
              <p className="text-gray-600 mb-4">
                Safe and comfortable transportation for medical appointments, dialysis, and other healthcare needs.
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Scheduled Service
              </span>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <Heart className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Care Transport</h3>
              <p className="text-gray-600 mb-4">
                Specialized transport for patients requiring intensive care during transportation.
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                Specialized Care
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose First Med Care EMS?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're committed to providing the highest quality medical transportation services with a focus on patient safety and comfort.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed medical transport company with comprehensive insurance coverage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">Round-the-clock service for emergencies and scheduled medical appointments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Staff</h3>
                    <p className="text-gray-600">Certified paramedics and medical professionals with years of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Car className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Fleet</h3>
                    <p className="text-gray-600">Well-maintained vehicles equipped with the latest medical technology.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Transport" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Medical Emergency?</h2>
          <p className="text-xl mb-8">Don't wait - call us immediately for emergency medical transport</p>
               <a 
                 href="tel:281-690-1274" 
                 className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
               >
                 <Phone className="h-6 w-6 mr-2" />
                 Call (281) 690-1274
               </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to book your medical transport? Contact us today!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
                 <div className="text-center">
                   <Phone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
                   <p className="text-xl text-gray-600">(281) 690-1274</p>
                 </div>
            
                 <div className="text-center">
                   <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                   <p className="text-xl text-gray-600">24hourserviceems@gmail.com</p>
                 </div>
            
                 <div className="text-center">
                   <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
                   <p className="text-xl text-gray-600">11104 W Airport Blvd, Suite 138<br />Stafford, TX 77477</p>
                 </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located at 11104 W Airport Blvd, Suite 138, Stafford, TX 77477
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <GoogleMap 
                center={businessLocation} 
                zoom={15}
                className="w-full h-96"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Directions</h3>
                <p className="text-gray-600 mb-6">
                  We're conveniently located near Houston's major medical centers and 
                  easily accessible from all major highways.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Call for Directions</p>
                    <a href="tel:281-690-1274" className="text-red-600 hover:text-red-700">
                      (281) 690-1274
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">11104 W Airport Blvd, Suite 138<br />Stafford, TX 77477</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Ambulance className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-xl font-bold">First Med Care EMS</span>
              </div>
              <p className="text-gray-400">
                Professional medical transport services you can trust. Available 24/7 for emergency and non-emergency medical transportation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                     <p className="flex items-center">
                       <Phone className="h-4 w-4 mr-2" />
                       (281) 690-1274
                     </p>
                     <p className="flex items-center">
                       <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                       24hourserviceems@gmail.com
                     </p>
                     <p className="flex items-center">
                       <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                       11104 W Airport Blvd, Suite 138, Stafford, TX 77477
                     </p>
              </div>
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
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 First Med Care EMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}