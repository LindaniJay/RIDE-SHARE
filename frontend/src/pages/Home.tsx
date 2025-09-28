import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CarVideoBackground from '../components/CarVideoBackground';
import LazyImage from '../components/LazyImage';
import { usePageTracking } from '../hooks/useAnalytics';

const Home: React.FC = () => {
  // Track page views
  usePageTracking();

  return (
    <div className="min-h-screen">
      <SEO 
        title="RideShare SA - South Africa's Leading Peer-to-Peer Vehicle Rental Platform"
        description="Rent vehicles from trusted hosts across South Africa. Find cars, bakkies, SUVs and more. Safe, secure, and insured rentals with local payment options including Payfast."
        keywords="vehicle rental South Africa, car rental Cape Town, bakkie rental Johannesburg, SUV rental Durban, peer-to-peer car sharing, Payfast payment, EFT car rental"
        url="https://rideshare-sa.co.za"
      />
      
      {/* Single Full-Page Experience with Video Background */}
        <CarVideoBackground 
          variant="hero" 
          overlay={true} 
        overlayOpacity={0.4}
          className="min-h-screen"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
          </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-4 py-20">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Your Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl drop-shadow-md">
              Discover the perfect ride for your adventure in South Africa. Rent from trusted locals, or list your vehicle and earn.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/search" 
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                🔍 Browse Rentals
              </Link>
              <Link 
                to="/register" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                List Your Vehicle
              </Link>
            </div>

          </div>

      {/* How It Works Section */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">How RideShare SA Works</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">Simple steps to rent or list your vehicle in South Africa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
                  <h3 className="text-2xl font-bold text-white mb-4">1. Search & Find</h3>
                  <p className="text-white text-opacity-90 text-lg">Browse thousands of vehicles across South Africa. Filter by location, date, and vehicle type.</p>
            </div>
            
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💳</span>
              </div>
                  <h3 className="text-2xl font-bold text-white mb-4">2. Book & Pay</h3>
                  <p className="text-white text-opacity-90 text-lg">Choose your dates, review the host's profile, and book securely with our protected payment system.</p>
            </div>
            
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">3. Enjoy Your Ride</h3>
                  <p className="text-white text-opacity-90 text-lg">Pick up your vehicle, enjoy your trip, and return it with ease. It's that simple!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Categories */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Vehicle Categories</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">Choose from our wide range of vehicles across South Africa</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-2">Economy Cars</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Perfect for city driving and short trips</p>
              <div className="text-white font-semibold">From R150/day</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-white mb-2">Bakkies</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Ideal for work and outdoor adventures</p>
              <div className="text-white font-semibold">From R200/day</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-xl font-bold text-white mb-2">SUVs</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Great for family trips and safaris</p>
              <div className="text-white font-semibold">From R300/day</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Cars</h3>
              <p className="text-white text-opacity-80 text-sm mb-4">Premium vehicles for special occasions</p>
              <div className="text-white font-semibold">From R500/day</div>
            </div>
          </div>
        </div>
          </div>

          {/* Featured Vehicles */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Featured Vehicles</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">Handpicked vehicles for your next adventure</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <LazyImage 
                    src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=Luxury+Sedan" 
                    alt="Luxury Sedan" 
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Luxury Sedan</h3>
                  <p className="text-white text-opacity-80 mb-4">Experience comfort and style.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">R 850/day</span>
                    <Link to="/search" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">Book Now</Link>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <LazyImage 
                    src="https://via.placeholder.com/600x400/10b981/ffffff?text=Adventure+SUV" 
                    alt="Adventure SUV" 
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Adventure SUV</h3>
                  <p className="text-white text-opacity-80 mb-4">Perfect for family trips.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">R 950/day</span>
                    <Link to="/search" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">Book Now</Link>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <LazyImage 
                    src="https://via.placeholder.com/600x400/ef4444/ffffff?text=Rugged+Bakkie" 
                    alt="Rugged Bakkie" 
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Rugged Bakkie</h3>
                  <p className="text-white text-opacity-80 mb-4">Tackle any terrain with ease.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">R 700/day</span>
                    <Link to="/search" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">Book Now</Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link 
                  to="/search" 
                  className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  View All Vehicles
                </Link>
              </div>
            </div>
        </div>
        
          {/* CTA Section */}
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Explore South Africa?</h2>
              <p className="text-xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto drop-shadow-md">
                Join thousands of South Africans who trust RideShare for their vehicle rental needs
              </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              Start Your Journey
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>
          </div>
        </div>
      </CarVideoBackground>

    </div>
  );
};

export default Home;