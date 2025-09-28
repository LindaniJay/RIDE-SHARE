import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your RideShare SA assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! 👋 Welcome to RideShare SA! I\'m here to help you with bookings, listings, and any questions you might have. What can I assist you with today?';
    }
    
    // Booking related
    if (message.includes('book') || message.includes('rent') || message.includes('reserve')) {
      return 'Great! To book a vehicle: 🚗\n\n1. Go to "Browse Rentals" in the menu\n2. Search by location and dates\n3. Filter by vehicle type and features\n4. Click "Book Now" on your chosen vehicle\n5. Complete the booking process\n\nNeed help with any of these steps?';
    }
    
    // Listing related
    if (message.includes('list') || message.includes('host') || message.includes('earn')) {
      return 'Perfect! To list your vehicle and start earning: 💰\n\n1. Click "List Your Vehicle" in the menu\n2. Create a host account (if you haven\'t already)\n3. Add vehicle details, photos, and description\n4. Set your availability and pricing\n5. Submit for approval\n\nOur hosts typically earn R200-800 per day!';
    }
    
    // Pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return 'Our pricing is competitive and varies by vehicle: 💵\n\n• Economy cars: R150-300/day\n• SUVs: R300-500/day\n• Luxury vehicles: R500+/day\n• Bakkies: R200-400/day\n\nAll prices include basic insurance. You can see exact pricing when browsing vehicles!';
    }
    
    // Safety questions
    if (message.includes('safe') || message.includes('insurance') || message.includes('secure')) {
      return 'Safety is our #1 priority! 🛡️\n\n✅ All vehicles are fully insured\n✅ Hosts are verified and background checked\n✅ 24/7 support team\n✅ Secure payment processing\n✅ Vehicle condition checks\n\nYou can read reviews and safety guidelines before booking.';
    }
    
    // Payment questions
    if (message.includes('pay') || message.includes('payment') || message.includes('eft') || message.includes('card')) {
      return 'We accept multiple payment methods: 💳\n\n• Credit/Debit cards\n• EFT transfers\n• Payfast (South African)\n• Bank transfers\n\nPayment is 100% secure and processed when you confirm your booking. No hidden fees!';
    }
    
    // Location questions
    if (message.includes('where') || message.includes('location') || message.includes('city')) {
      return 'We operate across South Africa! 🇿🇦\n\nMajor cities:\n• Cape Town\n• Johannesburg\n• Durban\n• Pretoria\n• Port Elizabeth\n• Bloemfontein\n\nUse the location filter to find vehicles near you!';
    }
    
    // Support questions
    if (message.includes('help') || message.includes('support') || message.includes('problem')) {
      return 'I\'m here to help! 🤝\n\nFor additional support:\n• FAQ page: /faq\n• Email: support@rideshare-sa.co.za\n• Phone: +27 21 123 4567\n• Live chat: Right here!\n\nWhat specific issue can I help you with?';
    }
    
    // Contact support
    if (message.includes('contact support') || message.includes('contact')) {
      return 'Here\'s how to reach our support team: 📞\n\n• Email: support@rideshare-sa.co.za\n• Phone: +27 21 123 4567\n• Live chat: Available 24/7 (that\'s me!)\n• FAQ: Visit /faq for common questions\n\nIs there something specific I can help you with right now?';
    }
    
    // Default response
    return `I understand you're asking about: "${userMessage}" 🤔\n\nI can help with:\n• Booking vehicles\n• Listing your car\n• Pricing information\n• Safety & insurance\n• Payment methods\n• Locations\n• General support\n\nWhat would you like to know more about?`;
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputValue.trim();
    if (!messageToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageToSend),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    'How do I book a vehicle?',
    'How do I list my car?',
    'What are your prices?',
    'Is it safe?',
    'Contact support'
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 500 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold">RideShare Assistant</h3>
                  <p className="text-xs text-blue-100">Online now</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setMessages([{
                      id: '1',
                      text: 'Hi! I\'m your RideShare SA assistant. How can I help you today?',
                      isUser: false,
                      timestamp: new Date()
                    }]);
                  }}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                  title="Start new conversation"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">RideShare Assistant is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isTyping ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
