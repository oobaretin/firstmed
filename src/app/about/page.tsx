'use client';

import Link from 'next/link';
import { Ambulance, User, Heart, Shield, Clock, Car } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png" 
                alt="First Med Care EMS Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-gray-900">First Med Care EMS</span>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About First Med Care EMS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in medical transportation for over 15 years. 
            We're committed to providing safe, reliable, and compassionate care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, First Med Care EMS began with a simple mission: to provide 
                exceptional medical transportation services that prioritize patient safety and comfort. 
                What started as a small local service has grown into a trusted regional provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified paramedics, EMTs, and medical professionals brings decades 
                of combined experience to every transport. We understand that medical emergencies 
                and appointments can be stressful, which is why we're dedicated to making the 
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
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by our core values and commitment to excellence in medical transportation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with dignity, respect, and genuine care, understanding 
                that each transport represents a person's health and well-being.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Patient safety is our top priority. We maintain the highest standards of 
                vehicle maintenance, staff training, and safety protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make First Med Care EMS the trusted choice for medical transportation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Paramedics</h3>
              <p className="text-gray-600">
                Our paramedics are fully certified and regularly trained in the latest 
                medical protocols and emergency procedures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Car className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Drivers</h3>
              <p className="text-gray-600">
                Our drivers are specially trained in medical transport safety and 
                defensive driving techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-16 w-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Staff</h3>
              <p className="text-gray-600">
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
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@firstmedcareems.com</p>
                <p>Address: 123 Medical Center Dr<br />City, State 12345</p>
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
