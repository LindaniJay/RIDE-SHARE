import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import Icon from '../components/Icon';
import { heroVariants, containerVariants, itemVariants } from '../utils/motionVariants';

const Marketing: React.FC = () => {
  return (
    <div className="page-background">
      <SEO 
        title="About RideShare SA - South Africa's Premier Peer-to-Peer Vehicle Rental Platform"
        description="Discover RideShare SA - the innovative platform connecting vehicle owners with renters across South Africa. Learn how we're revolutionizing vehicle rental with peer-to-peer sharing, local payment options, and trusted community."
        keywords="RideShare SA, peer-to-peer car rental, vehicle sharing South Africa, car rental platform, bakkie rental, SUV rental Cape Town"
        url="https://rideshare-sa.co.za/marketing"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section 
          className="relative py-20 px-4 text-center text-white"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-shadow-lg font-heading">
                Welcome to RideShare SA 🇿🇦
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto text-shadow-md font-body"
              variants={itemVariants}
            >
              South Africa's Premier Peer-to-Peer Vehicle Rental Platform
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300"
              variants={itemVariants}
            >
              Connecting vehicle owners with renters across all 9 provinces. 
              From Cape Town to Johannesburg, discover a smarter way to rent and share vehicles.
            </motion.p>

            {/* Main Enter Platform Button */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <Link to="/platform">
                <GlassButton className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Icon name="Car" className="mr-3 w-6 h-6" />
                  Enter Platform →
                </GlassButton>
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <Link to="/search">
                <GlassButton className="px-8 py-4 text-lg">
                  <Icon name="Search" className="mr-2" />
                  Start Renting
                </GlassButton>
              </Link>
              <Link to="/signup">
                <GlassButton className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20">
                  <Icon name="Car" className="mr-2" />
                  List Your Vehicle
                </GlassButton>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* What is RideShare SA Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-md">
                What is RideShare SA?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </motion.div>

            <GlassCard className="p-8 md:p-12 mb-12">
              <motion.div
                variants={itemVariants}
                className="prose prose-lg max-w-none text-gray-200"
              >
                <p className="text-xl mb-6 leading-relaxed">
                  <strong className="text-white">RideShare SA</strong> is an innovative peer-to-peer vehicle rental platform 
                  designed specifically for the South African market. We connect vehicle owners (hosts) with people who need 
                  to rent vehicles (renters), creating a trusted community marketplace for vehicle sharing.
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  Whether you're a tourist exploring the Garden Route, a business professional needing a reliable vehicle, 
                  or a local looking for a bakkie to move furniture, RideShare SA makes it easy to find and rent the perfect 
                  vehicle from trusted hosts in your area.
                </p>

                <p className="text-lg leading-relaxed">
                  For vehicle owners, RideShare SA provides an opportunity to earn extra income by renting out your vehicle 
                  when you're not using it. Our platform handles bookings, payments, and provides insurance coverage, making 
                  it safe and easy to become a host.
                </p>
              </motion.div>
            </GlassCard>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-md">
                Why Choose RideShare SA?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Shield',
                  title: 'Safe & Secure',
                  description: 'All vehicles are verified, insured, and backed by our comprehensive safety system. Real-time tracking and emergency support available.'
                },
                {
                  icon: 'MapPin',
                  title: 'Nationwide Coverage',
                  description: 'Available across all 9 provinces of South Africa. From major cities to tourist destinations, find vehicles wherever you need them.'
                },
                {
                  icon: 'CreditCard',
                  title: 'Local Payment Options',
                  description: 'Pay with EFT, PayFast, SnapScan, Zapper, or credit cards. Transparent pricing with no hidden fees.'
                },
                {
                  icon: 'Car',
                  title: 'Wide Vehicle Selection',
                  description: 'Choose from sedans, SUVs, bakkies, trucks, luxury vehicles, and more. Find the perfect vehicle for your needs.'
                },
                {
                  icon: 'Users',
                  title: 'Trusted Community',
                  description: 'Verified hosts and renters with ratings and reviews. Build trust through our community-driven platform.'
                },
                {
                  icon: 'Clock',
                  title: 'Flexible Booking',
                  description: 'Book instantly or request approval. Same-day bookings available. Modify or cancel with ease.'
                },
                {
                  icon: 'TrendingUp',
                  title: 'Earn Extra Income',
                  description: 'For hosts: Turn your idle vehicle into income. Set your own prices and availability. Track earnings in real-time.'
                },
                {
                  icon: 'Settings',
                  title: 'Mobile Optimized',
                  description: 'Fully responsive design works perfectly on mobile, tablet, and desktop. PWA support for app-like experience.'
                },
                {
                  icon: 'Zap',
                  title: 'South African Context',
                  description: 'Loadshedding awareness, local events integration, 11 official languages support, and cultural sensitivity built-in.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlassCard className="p-6 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg mr-4">
                        <Icon name={feature.icon} className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-md">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* For Renters */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Icon name="User" className="w-8 h-8 mr-3 text-blue-400" />
                  For Renters
                </h3>
                <ol className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                    <div>
                      <strong className="text-white">Sign Up</strong> - Create your free account and verify your identity
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                    <div>
                      <strong className="text-white">Search</strong> - Find vehicles by location, type, price, and availability
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                    <div>
                      <strong className="text-white">Book</strong> - Reserve your vehicle and pay securely online
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                    <div>
                      <strong className="text-white">Drive</strong> - Pick up your vehicle and enjoy your journey
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                    <div>
                      <strong className="text-white">Return & Review</strong> - Return the vehicle and share your experience
                    </div>
                  </li>
                </ol>
                <div className="mt-6">
                  <Link to="/signup">
                    <GlassButton className="w-full">
                      Get Started as Renter
                    </GlassButton>
                  </Link>
                </div>
              </GlassCard>

              {/* For Hosts */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Icon name="Car" className="w-8 h-8 mr-3 text-purple-400" />
                  For Hosts
                </h3>
                <ol className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                    <div>
                      <strong className="text-white">Register</strong> - Create your host account and verify your vehicle
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                    <div>
                      <strong className="text-white">List</strong> - Add your vehicle with photos, details, and pricing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                    <div>
                      <strong className="text-white">Get Approved</strong> - Our team reviews and approves your listing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
                    <div>
                      <strong className="text-white">Receive Bookings</strong> - Renters find and book your vehicle
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
                    <div>
                      <strong className="text-white">Earn Money</strong> - Get paid securely and track your earnings
                    </div>
                  </li>
                </ol>
                <div className="mt-6">
                  <Link to="/signup">
                    <GlassButton className="w-full bg-white/10 hover:bg-white/20">
                      Become a Host
                    </GlassButton>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* South African Context Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-md">
                    Built for South Africa 🇿🇦
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Icon name="MapPin" className="w-6 h-6 mr-2 text-blue-400" />
                      Nationwide Coverage
                    </h3>
                    <p className="mb-4">
                      Available across all 9 provinces: Western Cape, Eastern Cape, KwaZulu-Natal, 
                      Gauteng, Mpumalanga, Limpopo, North West, Free State, and Northern Cape.
                    </p>
                    <p>
                      Major cities including Cape Town, Johannesburg, Durban, Pretoria, and Port Elizabeth.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Icon name="Users" className="w-6 h-6 mr-2 text-purple-400" />
                      Local Support
                    </h3>
                    <p className="mb-4">
                      Support for all 11 official languages. Cultural sensitivity and local business 
                      etiquette built into the platform.
                    </p>
                    <p>
                      Loadshedding awareness, local events integration, and South African regulations compliance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Icon name="CreditCard" className="w-6 h-6 mr-2 text-green-400" />
                      Local Payment Methods
                    </h3>
                    <p className="mb-4">
                      EFT transfers, PayFast, SnapScan, Zapper, and international credit cards supported.
                    </p>
                    <p>
                      Transparent pricing in ZAR with no hidden fees. Competitive rates for all vehicle types.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Icon name="Car" className="w-6 h-6 mr-2 text-yellow-400" />
                      South African Vehicles
                    </h3>
                    <p className="mb-4">
                      Popular vehicles including Toyota Hilux, Ford Ranger, Toyota Fortuner, and more.
                    </p>
                    <p>
                      From economy cars to luxury vehicles, bakkies to SUVs - find what South Africans drive.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="p-12 bg-gradient-to-br from-blue-900/60 to-purple-900/60">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-md">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Join thousands of South Africans who are already using RideShare SA to rent and share vehicles. 
                  Start your journey today!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/platform">
                    <GlassButton className="px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl">
                      <Icon name="Car" className="mr-2" />
                      Enter Platform →
                    </GlassButton>
                  </Link>
                  <Link to="/search">
                    <GlassButton className="px-8 py-4 text-lg">
                      <Icon name="Search" className="mr-2" />
                      Browse Vehicles
                    </GlassButton>
                  </Link>
                  <Link to="/signup">
                    <GlassButton className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20">
                      <Icon name="User" className="mr-2" />
                      Create Account
                    </GlassButton>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketing;

