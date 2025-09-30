import React, { useState } from 'react';
import Icon from '../components/Icon';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How do I book a vehicle on RideShare SA?',
      answer: 'Booking a vehicle is simple! Search for vehicles in your area, select your dates, choose your preferred vehicle, and send a booking request. The host will respond within 24 hours to confirm availability.',
      category: 'general'
    },
    {
      id: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) through Stripe for international users, and Payfast for South African users, which includes EFT, credit cards, SnapScan, Zapper, and other local payment methods.',
      category: 'payments'
    },
    {
      id: '3',
      question: 'Is my vehicle insured during rental?',
      answer: 'Yes! All vehicles are covered by comprehensive insurance during rentals. We work with leading South African insurers like Santam, Outsurance, and Discovery to protect both hosts and renters. The insurance covers damage, theft, and third-party liability.',
      category: 'safety'
    },
    {
      id: '4',
      question: 'How do I become a host?',
      answer: 'To become a host, register on our platform, verify your identity, and list your vehicle. We\'ll guide you through the process, help you set competitive pricing, and provide all the tools you need to manage your listings.',
      category: 'hosting'
    },
    {
      id: '5',
      question: 'What happens if I need to cancel my booking?',
      answer: 'Cancellation policies vary by host, but generally: Free cancellation up to 24 hours before pickup, 50% refund for cancellations within 24 hours, and no refund for no-shows. Check the specific cancellation policy when booking.',
      category: 'bookings'
    },
    {
      id: '6',
      question: 'How do I contact the host?',
      answer: 'Once your booking is confirmed, you can message the host directly through our platform. This allows you to coordinate pickup details, ask questions, and communicate throughout your rental period.',
      category: 'communication'
    },
    {
      id: '7',
      question: 'What documents do I need to rent a vehicle?',
      answer: 'You\'ll need a valid South African driver\'s license, ID document (green bar-coded ID or smart card), and a credit card for the security deposit. International visitors can use their valid international driver\'s license.',
      category: 'requirements'
    },
    {
      id: '8',
      question: 'How does the security deposit work?',
      answer: 'A security deposit is held on your card but not charged unless there\'s damage. The amount varies by vehicle but is typically R2,000-R5,000. The deposit is released within 7 days after the vehicle is returned in good condition.',
      category: 'payments'
    },
    {
      id: '9',
      question: 'Can I extend my rental period?',
      answer: 'Yes! If the vehicle is available, you can extend your rental through the app. Contact the host to confirm availability and we\'ll handle the payment adjustment automatically.',
      category: 'bookings'
    },
    {
      id: '10',
      question: 'What if the vehicle breaks down?',
      answer: 'If the vehicle breaks down due to mechanical issues, we\'ll help you find a replacement vehicle or provide a full refund. You\'re not responsible for mechanical failures, but you are responsible for damage caused by misuse.',
      category: 'safety'
    },
    {
      id: '11',
      question: 'How do I rate and review my experience?',
      answer: 'After your rental, you\'ll receive an email to rate and review both the vehicle and the host. Your feedback helps other users make informed decisions and helps hosts improve their service.',
      category: 'reviews'
    },
    {
      id: '12',
      question: 'What support is available?',
      answer: 'We offer 24/7 customer support via phone, email, and live chat. Our support team can help with bookings, payments, emergencies, and any questions you might have.',
      category: 'support'
    },
    {
      id: '13',
      question: 'Do you operate in all South African provinces?',
      answer: 'Yes! We operate across all 9 provinces of South Africa - from the Western Cape to Limpopo. Our platform connects hosts and renters in major cities like Cape Town, Johannesburg, Durban, Pretoria, and many more.',
      category: 'general'
    },
    {
      id: '14',
      question: 'What about toll fees and e-tolls?',
      answer: 'Toll fees and e-tolls are the responsibility of the renter. We recommend using your e-tag or paying cash at toll booths. Some hosts may include toll fees in their pricing - check the vehicle listing for details.',
      category: 'payments'
    },
    {
      id: '15',
      question: 'Can I rent a vehicle for a long weekend or public holiday?',
      answer: 'Absolutely! We have vehicles available for long weekends, public holidays, and school holidays. Book early for popular periods like December holidays, Easter, and long weekends.',
      category: 'bookings'
    },
    {
      id: '16',
      question: 'What about South African road regulations?',
      answer: 'All vehicles comply with South African road regulations including valid roadworthy certificates, valid license discs, and proper insurance. Drivers must have a valid SA driver\'s license and follow all traffic laws.',
      category: 'safety'
    },
    {
      id: '17',
      question: 'Do you comply with POPI Act requirements?',
      answer: 'Yes, we fully comply with the Protection of Personal Information (POPI) Act. Your personal data is protected and we only use it for legitimate business purposes. You can request your data or deletion at any time.',
      category: 'safety'
    }
  ];

  const categories = [
    { id: 'general', name: 'General', icon: 'Info' },
    { id: 'bookings', name: 'Bookings', icon: 'Clipboard' },
    { id: 'payments', name: 'Payments', icon: 'CreditCard' },
    { id: 'hosting', name: 'Hosting', icon: 'Home' },
    { id: 'safety', name: 'Safety', icon: 'Shield' },
    { id: 'communication', name: 'Communication', icon: 'Phone' },
    { id: 'requirements', name: 'Requirements', icon: 'FileText' },
    { id: 'reviews', name: 'Reviews', icon: 'Star' },
    { id: 'support', name: 'Support', icon: 'Phone' }
  ];

  const filteredFAQs = faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="page-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions 🇿🇦
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about RideShare SA. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
              <div className="px-6 py-4 border-b border-white/20">
                <h2 className="text-xl font-semibold text-white">
                  {categories.find(c => c.id === activeCategory)?.name} Questions
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  {filteredFAQs.length} questions in this category
                </p>
              </div>

              <div className="divide-y divide-white/20">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left flex justify-between items-center"
                    >
                      <h3 className="text-lg font-medium text-white pr-4">
                        {faq.question}
                      </h3>
                      <span className={`text-2xl transition-transform ${
                        openItems.has(faq.id) ? 'rotate-45' : ''
                      }`}>
                        +
                      </span>
                    </button>
                    
                    {openItems.has(faq.id) && (
                      <div className="mt-4 text-white/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-blue-100 mb-4">
                  Our support team is here to help you 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+27211234567"
                    className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                  >
                    📞 Call +27 21 123 4567
                  </a>
                  <a
                    href="mailto:support@rideshare-sa.co.za"
                    className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                  >
                    <Icon name="Mail" size="sm" className="mr-1" />
                    Email Support
                  </a>
                  <button className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                    💬 Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
