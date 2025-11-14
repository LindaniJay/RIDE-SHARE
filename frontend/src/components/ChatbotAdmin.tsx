import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ChatbotAnalytics {
  totalConversations: number;
  totalMessages: number;
  averageResponseTime: number;
  userSatisfaction: number;
  popularIntents: Array<{ intent: string; count: number }>;
  languageDistribution: Array<{ language: string; count: number }>;
  sentimentDistribution: Array<{ sentiment: string; count: number }>;
}

const ChatbotAdmin: React.FC = () => {
  const [analytics, setAnalytics] = useState<ChatbotAnalytics>({
    totalConversations: 0,
    totalMessages: 0,
    averageResponseTime: 0,
    userSatisfaction: 0,
    popularIntents: [],
    languageDistribution: [],
    sentimentDistribution: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalytics({
        totalConversations: 1247,
        totalMessages: 8934,
        averageResponseTime: 1.2,
        userSatisfaction: 4.6,
        popularIntents: [
          { intent: 'Booking', count: 456 },
          { intent: 'Pricing', count: 234 },
          { intent: 'Support', count: 189 },
          { intent: 'Listing', count: 156 },
          { intent: 'Safety', count: 123 }
        ],
        languageDistribution: [
          { language: 'English', count: 789 },
          { language: 'Afrikaans', count: 234 },
          { language: 'Zulu', count: 156 }
        ],
        sentimentDistribution: [
          { sentiment: 'Positive', count: 567 },
          { sentiment: 'Neutral', count: 234 },
          { sentiment: 'Negative', count: 89 }
        ]
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Chatbot Analytics Dashboard</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white"
        >
          <h3 className="text-sm font-medium opacity-90">Total Conversations</h3>
          <p className="text-2xl font-bold">{analytics.totalConversations.toLocaleString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white"
        >
          <h3 className="text-sm font-medium opacity-90">Total Messages</h3>
          <p className="text-2xl font-bold">{analytics.totalMessages.toLocaleString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg text-white"
        >
          <h3 className="text-sm font-medium opacity-90">Avg Response Time</h3>
          <p className="text-2xl font-bold">{analytics.averageResponseTime}s</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-lg text-white"
        >
          <h3 className="text-sm font-medium opacity-90">User Satisfaction</h3>
          <p className="text-2xl font-bold">{analytics.userSatisfaction}/5</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Intents */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Intents</h3>
          <div className="space-y-3">
            {analytics.popularIntents.map((item, _index) => (
              <div key={item.intent} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{item.intent}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / analytics.popularIntents[0].count) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Language Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Language Distribution</h3>
          <div className="space-y-3">
            {analytics.languageDistribution.map((item, _index) => (
              <div key={item.language} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{item.language}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / analytics.languageDistribution[0].count) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sentiment Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sentiment Distribution</h3>
          <div className="space-y-3">
            {analytics.sentimentDistribution.map((item, _index) => (
              <div key={item.sentiment} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{item.sentiment}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        item.sentiment === 'Positive' ? 'bg-green-500' :
                        item.sentiment === 'Negative' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${(item.count / analytics.sentimentDistribution[0].count) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Export Analytics Data
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
              Update Intent Responses
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors">
              View Conversation Logs
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors">
              Test Chatbot Flow
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotAdmin;




