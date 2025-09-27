import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarVideoBackground from '../components/CarVideoBackground';
import { apiClient } from '../api/client';

interface PlatformStats {
  totalVehicles: number;
  totalRenters: number;
  totalEarnings: number;
  activeHosts: number;
  completedBookings: number;
  averageRating: number;
}

const About: React.FC = () => {
  const [stats, setStats] = useState<PlatformStats>({
    totalVehicles: 0,
    totalRenters: 0,
    totalEarnings: 0,
    activeHosts: 0,
    completedBookings: 0,
    averageRating: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await apiClient.get('/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching platform stats:', error);
        // Keep stats at zero if API fails - no fallback values
        setStats({
          totalVehicles: 0,
          totalRenters: 0,
          totalEarnings: 0,
          activeHosts: 0,
          completedBookings: 0,
          averageRating: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen">
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
              About RideShare SA
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl drop-shadow-md">
              South Africa's premier peer-to-peer vehicle rental platform, connecting locals and travelers across the Rainbow Nation.
            </p>
          </div>

          {/* Mission Section */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-white text-opacity-90 mb-6">
                    We believe that every South African should have access to reliable, affordable transportation. 
                    By connecting vehicle owners with people who need temporary access to cars, bakkies, and SUVs, 
                    we're building a more connected and sustainable South Africa.
                  </p>
                  <p className="text-lg text-white text-opacity-90">
                    Whether you're exploring the Cape Peninsula, visiting family in Johannesburg, or taking a safari 
                    in Kruger National Park, RideShare SA makes it easy to find the perfect vehicle for your journey.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">🇿🇦 Made for South Africa</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-white text-opacity-90">Local payment methods (EFT, SnapScan)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-white text-opacity-90">South African insurance coverage</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-white text-opacity-90">24/7 customer support in English & Afrikaans</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-white text-opacity-90">Verified hosts across all 9 provinces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Stats Section */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Impact</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">Building a connected South Africa, one ride at a time</p>
              </div>
              
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="h-12 bg-white/20 rounded animate-pulse mb-2"></div>
                      <div className="h-6 bg-white/20 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatNumber(stats.totalVehicles)}
                    </div>
                    <div className="text-white text-opacity-80">Vehicles Listed</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatNumber(stats.totalRenters)}
                    </div>
                    <div className="text-white text-opacity-80">Happy Renters</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      R {formatNumber(stats.totalEarnings)}
                    </div>
                    <div className="text-white text-opacity-80">Earned by Hosts</div>
                  </div>
                </div>
              )}
              
              {/* Additional Stats Row */}
              {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatNumber(stats.activeHosts)}
                    </div>
                    <div className="text-white text-opacity-80">Active Hosts</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      {formatNumber(stats.completedBookings)}
                    </div>
                    <div className="text-white text-opacity-80">Completed Bookings</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">
                      {stats.averageRating.toFixed(1)}★
                    </div>
                    <div className="text-white text-opacity-80">Average Rating</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Team Section */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Meet Our Team</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">The passionate South Africans behind RideShare SA</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Leadership Team</h3>
                  <p className="text-white text-opacity-80">Experienced entrepreneurs with deep roots in South African business</p>
                </div>
                
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👩‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tech Team</h3>
                  <p className="text-white text-opacity-80">Innovative developers building the future of mobility in South Africa</p>
                </div>
                
                <div className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Community Team</h3>
                  <p className="text-white text-opacity-80">Dedicated to supporting our hosts and renters across all 9 provinces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Values</h2>
                <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto drop-shadow-md">The principles that guide everything we do</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
                  <p className="text-white text-opacity-80 text-sm">Building trust through verification and transparency</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-2">Sustainability</h3>
                  <p className="text-white text-opacity-80 text-sm">Promoting shared mobility for a greener future</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-4xl mb-4">🇿🇦</div>
                  <h3 className="text-xl font-bold text-white mb-2">Local Focus</h3>
                  <p className="text-white text-opacity-80 text-sm">Supporting South African communities and economy</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-white text-opacity-80 text-sm">Using technology to solve real-world problems</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Join the RideShare SA Community</h2>
              <p className="text-xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto drop-shadow-md">
                Be part of South Africa's growing sharing economy. Whether you're looking to rent or list your vehicle, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/search" 
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  Browse Vehicles
                </Link>
                <Link 
                  to="/register" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Become a Host
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CarVideoBackground>
    </div>
  );
};

export default About;