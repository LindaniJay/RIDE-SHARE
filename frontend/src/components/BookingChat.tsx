import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import websocketService from '../services/websocketService';
import { ChatMessage } from '../services/realtimeService';
import { toast } from 'react-hot-toast';
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Info,
  Check,
  CheckCheck,
  Loader2,
  AlertCircle
} from 'lucide-react';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';

interface BookingChatProps {
  bookingId: number;
  recipientId: number;
  recipientName: string;
  isOpen: boolean;
  onClose: () => void;
}

interface TypingIndicator {
  isTyping: boolean;
  userName: string;
}

const BookingChat: React.FC<BookingChatProps> = ({
  bookingId,
  recipientId,
  recipientName,
  isOpen,
  onClose
}) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState<TypingIndicator | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'connecting'>('connecting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Join booking room
    websocketService.joinBookingRoom(bookingId);

    // Set up event listeners
    const handleChatMessage = (message: ChatMessage) => {
      setMessages(prev => [...prev, message]);
      scrollToBottom();
    };

    const handleTypingStart = (data: any) => {
      if (data.bookingId === bookingId && data.senderId !== user?.id) {
        setTypingIndicator({
          isTyping: true,
          userName: data.senderName || 'Someone'
        });
      }
    };

    const handleTypingStop = (data: any) => {
      if (data.bookingId === bookingId) {
        setTypingIndicator(null);
      }
    };

    // const _handleConnectionStatus = (status: any) => {
    //   setConnectionStatus(status.connected ? 'connected' : 'disconnected');
    // };

    // Register event listeners
    websocketService.onChatMessage(handleChatMessage);
    websocketService.on('typing-start', handleTypingStart);
    websocketService.on('typing-stop', handleTypingStop);
    websocketService.on('connection_established', () => setConnectionStatus('connected'));
    websocketService.on('connection_lost', () => setConnectionStatus('disconnected'));

    // Load existing messages
    loadMessages();

    return () => {
      websocketService.offChatMessage(handleChatMessage);
      websocketService.off('typing-start', handleTypingStart);
      websocketService.off('typing-stop', handleTypingStop);
      websocketService.leaveBookingRoom(bookingId);
    };
  }, [isOpen, bookingId, user?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5001/api/bookings/${bookingId}/messages`, {
        headers: {
          'Authorization': `Bearer ${await user?.getIdToken()}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        setMessages(result.data || []);
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    try {
      // Send message via WebSocket
      websocketService.sendChatMessage(bookingId, messageText, recipientId);

      // Optimistically add message to UI
      const tempMessage: ChatMessage = {
        id: `temp_${Date.now()}`,
        bookingId,
        senderId: parseInt(user.id),
        senderName: user.name || 'You',
        message: messageText,
        timestamp: new Date(),
        isRead: false
      };

      setMessages(prev => [...prev, tempMessage]);

      // Stop typing indicator
      websocketService.stopTyping(bookingId, recipientId);
      setIsTyping(false);

    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message');
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);

    if (!isTyping) {
      setIsTyping(true);
      websocketService.startTyping(bookingId, recipientId);
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      websocketService.stopTyping(bookingId, recipientId);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getMessageStatus = (message: ChatMessage) => {
    if (message.senderId === parseInt(user?.id || '0')) {
      return message.isRead ? (
        <CheckCheck className="w-4 h-4 text-blue-400" />
      ) : (
        <Check className="w-4 h-4 text-gray-400" />
      );
    }
    return null;
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/20 w-full max-w-2xl h-[600px] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {recipientName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{recipientName}</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  connectionStatus === 'connected' ? 'bg-green-400' : 'bg-red-400'
                }`} />
                <span className="text-sm text-gray-400">
                  {connectionStatus === 'connected' ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <GlassButton size="sm" variant="outline">
              <Phone className="w-4 h-4" />
            </GlassButton>
            <GlassButton size="sm" variant="outline">
              <Video className="w-4 h-4" />
            </GlassButton>
            <GlassButton size="sm" variant="outline">
              <Info className="w-4 h-4" />
            </GlassButton>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
            </div>
          ) : messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                <p>No messages yet</p>
                <p className="text-sm">Start a conversation!</p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.senderId === parseInt(user?.id || '0') ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.senderId === parseInt(user?.id || '0')
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-white'
                }`}>
                  <p className="text-sm">{message.message}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                    {getMessageStatus(message)}
                  </div>
                </div>
              </motion.div>
            ))
          )}

          {/* Typing Indicator */}
          <AnimatePresence>
            {typingIndicator && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-start"
              >
                <div className="bg-white/10 text-white px-4 py-2 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                    <span className="text-sm">{typingIndicator.userName} is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <GlassButton size="sm" variant="outline">
              <Paperclip className="w-4 h-4" />
            </GlassButton>
            <div className="flex-1">
              <GlassInput
                value={newMessage}
                onChange={(value) => handleTyping({ target: { value } } as React.ChangeEvent<HTMLInputElement>)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full"
              />
            </div>
            <GlassButton size="sm" variant="outline">
              <Smile className="w-4 h-4" />
            </GlassButton>
            <GlassButton
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="sm"
            >
              <Send className="w-4 h-4" />
            </GlassButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingChat;
