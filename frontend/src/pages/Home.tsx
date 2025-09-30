import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SEO from '../components/SEO';
import { usePageTracking } from '../hooks/useAnalytics';

const Home: React.FC = () => {
  // Track page views
  usePageTracking();

  return (
    <div className="page-background">
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
            Discover the perfect ride for your South African adventure. From Cape Town to Joburg, rent from trusted locals, or list your vehicle and earn extra income.
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
              <p className="text-xl text-white/80">Simple steps to get started - it's lekker easy!</p>
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
                <p className="text-white/80">Secure booking with flexible payment options including Payfast, EFT, and SnapScan</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">D</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Drive & Enjoy</h3>
                <p className="text-white/80">Pick up your vehicle and start your South African adventure - from the Cape to the Kruger!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Types Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Vehicle Types</h2>
              <p className="text-xl text-white/80">Choose from our diverse range of vehicles - from city cars to bush bakkies</p>
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
              <p className="text-xl text-white/80">Diverse vehicles for every South African need - from city commutes to bush adventures</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Toyota Hilux - Popular SA Bakkie */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚛</div>
                      <p className="text-white text-sm font-medium">Toyota Hilux</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Toyota Hilux 4WD</h3>
                <p className="text-white/80 mb-4">Legendary South African bakkie for farm work, construction, and outdoor adventures</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R750/day</span>
                  <Link to="/search?type=bakkie" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Bakkies
                  </Link>
                </div>
              </div>

              {/* Isuzu Truck - Commercial Vehicle */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚚</div>
                      <p className="text-white text-sm font-medium">Isuzu NPR 400</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Isuzu NPR 400 Truck</h3>
                <p className="text-white/80 mb-4">Reliable medium-duty truck for construction and delivery services across SA</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R1200/day</span>
                  <Link to="/search?type=truck" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Trucks
                  </Link>
                </div>
              </div>

              {/* Toyota Quantum Minibus */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-600 to-teal-700 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚌</div>
                      <p className="text-white text-sm font-medium">Toyota Quantum</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Toyota Quantum Minibus</h3>
                <p className="text-white/80 mb-4">Popular South African minibus for group transport and airport shuttles</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">R800/day</span>
                  <Link to="/search?type=minibus" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Minibuses
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Vehicle Categories */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Explore All Vehicle Types</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <Link to="/search?type=car" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🚗</div>
                  <p className="text-white font-medium">Cars</p>
                </Link>
                <Link to="/search?type=bakkie" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🚛</div>
                  <p className="text-white font-medium">Bakkies</p>
                </Link>
                <Link to="/search?type=truck" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🚚</div>
                  <p className="text-white font-medium">Trucks</p>
                </Link>
                <Link to="/search?type=van" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🚐</div>
                  <p className="text-white font-medium">Vans</p>
                </Link>
                <Link to="/search?type=minibus" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🚌</div>
                  <p className="text-white font-medium">Minibuses</p>
                </Link>
                <Link to="/search?type=motorcycle" className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl mb-2">🏍️</div>
                  <p className="text-white font-medium">Motorcycles</p>
                </Link>
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
            <p className="text-xl text-white/80 mb-8">Join thousands of satisfied customers across South Africa - from the Cape to the Kruger!</p>
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