export interface Message {
  id: string;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
  read: boolean;
  messageType: 'text' | 'image' | 'file' | 'system';
  attachments?: {
    id: string;
    filename: string;
    url: string;
    type: string;
    size: number;
  }[];
}

export interface Conversation {
  id: string;
  participants: {
    id: number;
    name: string;
    role: string;
    avatar?: string;
  }[];
  lastMessage?: Message;
  unreadCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'technical' | 'billing' | 'booking' | 'account' | 'other';
  createdBy: number;
  assignedTo?: number;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

class MessagingService {
  private static baseUrl = '/api/messaging';

  // Message Management
  static async sendMessage(conversationId: string, content: string, messageType: 'text' | 'image' | 'file' = 'text', attachments?: File[]): Promise<Message> {
    try {
      const formData = new FormData();
      formData.append('content', content);
      formData.append('messageType', messageType);
      
      if (attachments) {
        attachments.forEach(file => {
          formData.append('attachments', file);
        });
      }

      const response = await fetch(`${this.baseUrl}/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  static async getMessages(conversationId: string, page = 1, limit = 50): Promise<Message[]> {
    try {
      const response = await fetch(`${this.baseUrl}/conversations/${conversationId}/messages?page=${page}&limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      return data.messages;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }

  static async markMessageAsRead(messageId: string): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/messages/${messageId}/read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  }

  // Conversation Management
  static async getConversations(): Promise<Conversation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/conversations`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch conversations');
      }

      const data = await response.json();
      return data.conversations;
    } catch (error) {
      console.error('Error fetching conversations:', error);
      throw error;
    }
  }

  static async createConversation(participantIds: number[]): Promise<Conversation> {
    try {
      const response = await fetch(`${this.baseUrl}/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ participantIds })
      });

      if (!response.ok) {
        throw new Error('Failed to create conversation');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  }

  // Support Ticket Management
  static async createSupportTicket(ticketData: Omit<SupportTicket, 'id' | 'createdAt' | 'updatedAt' | 'messages'>): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/support-tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(ticketData)
      });

      if (!response.ok) {
        throw new Error('Failed to create support ticket');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating support ticket:', error);
      throw error;
    }
  }

  static async getSupportTickets(status?: string, priority?: string): Promise<SupportTicket[]> {
    try {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      if (priority) params.append('priority', priority);

      const response = await fetch(`${this.baseUrl}/support-tickets?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch support tickets');
      }

      const data = await response.json();
      return data.tickets;
    } catch (error) {
      console.error('Error fetching support tickets:', error);
      throw error;
    }
  }

  static async updateSupportTicket(ticketId: string, updates: Partial<SupportTicket>): Promise<SupportTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/support-tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        throw new Error('Failed to update support ticket');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating support ticket:', error);
      throw error;
    }
  }

  static async addMessageToTicket(ticketId: string, content: string): Promise<Message> {
    try {
      const response = await fetch(`${this.baseUrl}/support-tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        throw new Error('Failed to add message to ticket');
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding message to ticket:', error);
      throw error;
    }
  }
}

export { MessagingService };
export default MessagingService;
