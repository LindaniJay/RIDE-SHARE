import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';
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
      
      {/* Main Content Container */}
      <div className="min-h-screen flex flex-col">
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
              Browse Rentals
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
              <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-white/80">Simple steps to get started</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Search & Browse</h3>
                <p className="text-white/80">Find the perfect vehicle for your needs from our wide selection</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📅</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Book & Pay</h3>
                <p className="text-white/80">Secure booking with flexible payment options including Payfast</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">D</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Drive & Enjoy</h3>
                <p className="text-white/80">Pick up your vehicle and start your South African adventure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Types Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Vehicle Types</h2>
              <p className="text-xl text-white/80">Choose from our diverse range of vehicles</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4 font-bold text-white">C</div>
                <h3 className="text-xl font-bold text-white mb-2">Cars</h3>
                <div className="text-white font-semibold">From R150/day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">🚛</div>
                <h3 className="text-xl font-bold text-white mb-2">Bakkies</h3>
                <div className="text-white font-semibold">From R200/day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">🚙</div>
                <h3 className="text-xl font-bold text-white mb-2">SUVs</h3>
                <div className="text-white font-semibold">From R300/day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <Icon name="Car" size="lg" className="text-white/50 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Luxury</h3>
                <div className="text-white font-semibold">From R500/day</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Vehicles Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Vehicles</h2>
              <p className="text-xl text-white/80">Popular choices from our community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Empty Vehicle Card 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-500/50">
                    <div className="text-center">
                      <div className="text-4xl mb-2 font-bold text-white">V</div>
                      <p className="text-gray-400 text-sm">Vehicle Image</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Name</h3>
                <p className="text-white/80 mb-4">Vehicle description</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R0/day</span>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
                    Upload Vehicle
                  </button>
                </div>
              </div>

              {/* Empty Vehicle Card 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-500/50">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚙</div>
                      <p className="text-gray-400 text-sm">Vehicle Image</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Name</h3>
                <p className="text-white/80 mb-4">Vehicle description</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R0/day</span>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
                    Upload Vehicle
                  </button>
                </div>
              </div>

              {/* Empty Vehicle Card 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-500/50">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚛</div>
                      <p className="text-gray-400 text-sm">Vehicle Image</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Name</h3>
                <p className="text-white/80 mb-4">Vehicle description</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R0/day</span>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
                    Upload Vehicle
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/dashboard/host" 
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                Become a Host
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/80 mb-8">Join thousands of satisfied customers across South Africa</p>
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
    </div>
  );
};

export default Home;