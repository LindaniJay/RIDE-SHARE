import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';

interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  message: string;
  type: 'text' | 'image' | 'file';
  timestamp: string;
  read: boolean;
  sender?: {
    firstName: string;
    lastName: string;
  };
}

interface Conversation {
  id: string;
  participants: number[];
  lastMessage: Message;
  otherParticipant: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  unreadCount: number;
}

const RealTimeMessaging: React.FC = () => {
  const { user } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchConversations();
    setupSocket();
    
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (activeConversation) {
      fetchMessages(activeConversation);
    }
  }, [activeConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const setupSocket = () => {
    // In a real implementation, you would use Socket.IO client
    // For now, we'll simulate the socket connection
    const mockSocket = {
      on: (event: string, callback: Function) => {
        console.log(`Socket event: ${event}`);
        // Simulate receiving messages
        if (event === 'new_message') {
          setTimeout(() => {
            callback({
              message: {
                id: Date.now(),
                senderId: 2,
                recipientId: user?.id,
                message: 'Hello! How can I help you?',
                type: 'text',
                timestamp: new Date().toISOString(),
                read: false
              }
            });
          }, 3000);
        }
      },
      emit: (event: string, data: any) => {
        console.log(`Socket emit: ${event}`, data);
      },
      disconnect: () => {
        console.log('Socket disconnected');
      }
    };
    
    setSocket(mockSocket);
  };

  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/messages/conversations', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations || []);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (conversationId: string) => {
    try {
      const response = await fetch(`/api/messages/conversations/${conversationId}/messages`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !activeConversation) return;

    try {
      const otherParticipant = conversations.find(c => c.id === activeConversation)?.otherParticipant;
      if (!otherParticipant) return;

      const response = await fetch('/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          recipientId: otherParticipant.id,
          message: newMessage,
          type: 'text'
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, data.message]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 h-[600px] flex">
      {/* Conversations Sidebar */}
      <div className="w-1/3 border-r border-white/20 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Messages</h3>
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Icon name="Plus" size="sm" className="text-white" />
          </button>
        </div>
        
        <div className="space-y-2">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                activeConversation === conversation.id
                  ? 'bg-white/20'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {conversation.otherParticipant.firstName[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium truncate">
                      {conversation.otherParticipant.firstName} {conversation.otherParticipant.lastName}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-sm truncate">
                    {conversation.lastMessage.message}
                  </p>
                  <p className="text-white/50 text-xs">
                    {formatTime(conversation.lastMessage.timestamp)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 flex flex-col">
        {activeConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {conversations.find(c => c.id === activeConversation)?.otherParticipant.firstName[0]}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {conversations.find(c => c.id === activeConversation)?.otherParticipant.firstName} {' '}
                    {conversations.find(c => c.id === activeConversation)?.otherParticipant.lastName}
                  </h4>
                  <p className="text-white/70 text-sm">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === Number(user?.id) ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === Number(user?.id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.senderId === Number(user?.id) ? 'text-blue-100' : 'text-white/70'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="Send" size="sm" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MessageCircle" size="lg" className="text-white/50 mx-auto mb-4" />
              <p className="text-white/70">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealTimeMessaging;
