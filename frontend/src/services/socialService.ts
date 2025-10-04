import { notificationService } from './notificationService';

export interface UserProfile {
  id: string;
  userId: string;
  displayName: string;
  bio: string;
  avatar: string;
  coverImage: string;
  location: string;
  joinDate: string;
  stats: {
    totalBookings: number;
    totalEarnings: number;
    averageRating: number;
    responseRate: number;
    responseTime: number; // in hours
  };
  badges: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt: string;
  }>;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  preferences: {
    privacy: 'public' | 'friends' | 'private';
    notifications: {
      newMessages: boolean;
      bookingUpdates: boolean;
      communityActivity: boolean;
      promotions: boolean;
    };
  };
  verified: boolean;
  lastActive: string;
}

export interface SocialPost {
  id: string;
  userId: string;
  type: 'experience' | 'review' | 'tip' | 'question' | 'announcement';
  content: string;
  images: string[];
  tags: string[];
  location?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    displayName: string;
    avatar: string;
    verified: boolean;
  };
  engagement: {
    liked: boolean;
    shared: boolean;
    bookmarked: boolean;
  };
}

export interface CommunityForum {
  id: string;
  name: string;
  description: string;
  category: 'general' | 'tips' | 'reviews' | 'support' | 'events';
  memberCount: number;
  postCount: number;
  lastActivity: string;
  rules: string[];
  moderators: string[];
  isPrivate: boolean;
  createdAt: string;
}

export interface ForumPost {
  id: string;
  forumId: string;
  userId: string;
  title: string;
  content: string;
  tags: string[];
  views: number;
  likes: number;
  replies: number;
  isPinned: boolean;
  isLocked: boolean;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    displayName: string;
    avatar: string;
    verified: boolean;
  };
  lastReply?: {
    userId: string;
    displayName: string;
    createdAt: string;
  };
}

export interface ReferralProgram {
  id: string;
  referrerId: string;
  referredId: string;
  status: 'pending' | 'completed' | 'expired';
  reward: {
    type: 'credit' | 'discount' | 'points';
    amount: number;
    description: string;
  };
  createdAt: string;
  completedAt?: string;
  expiresAt: string;
}

export interface SocialShare {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'whatsapp';
  content: {
    title: string;
    description: string;
    image?: string;
    url: string;
  };
  analytics: {
    views: number;
    clicks: number;
    shares: number;
    engagement: number;
  };
}

export interface EventRental {
  id: string;
  eventName: string;
  eventDate: string;
  location: string;
  description: string;
  expectedAttendees: number;
  vehicleRequirements: {
    minCapacity: number;
    preferredTypes: string[];
    specialFeatures: string[];
  };
  budget: {
    min: number;
    max: number;
  };
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
  status: 'planning' | 'open' | 'closed' | 'completed';
  createdAt: string;
  updatedAt: string;
}

class SocialService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5001/api';

  /**
   * Get user profile
   */
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/profiles/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/profiles/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updates)
      });

      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  /**
   * Upload profile image
   */
  async uploadProfileImage(userId: string, imageFile: File, type: 'avatar' | 'cover'): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('type', type);

      const response = await fetch(`${this.API_BASE_URL}/social/profiles/${userId}/image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: formData
      });

      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error('Error uploading profile image:', error);
      throw error;
    }
  }

  /**
   * Create social post
   */
  async createSocialPost(postData: Omit<SocialPost, 'id' | 'createdAt' | 'updatedAt' | 'user' | 'engagement'>): Promise<SocialPost> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(postData)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Post Created',
          'Your post has been shared with the community.',
          'info'
        );
      }

      return data.post;
    } catch (error) {
      console.error('Error creating social post:', error);
      throw error;
    }
  }

  /**
   * Get social feed
   */
  async getSocialFeed(limit: number = 20, offset: number = 0): Promise<SocialPost[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/feed?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.posts || [];
    } catch (error) {
      console.error('Error getting social feed:', error);
      return [];
    }
  }

  /**
   * Like/unlike post
   */
  async togglePostLike(postId: string): Promise<{ liked: boolean; likes: number }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error toggling post like:', error);
      throw error;
    }
  }

  /**
   * Share post
   */
  async sharePost(postId: string, platform: string): Promise<SocialShare> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/posts/${postId}/share`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ platform })
      });

      const data = await response.json();
      return data.share;
    } catch (error) {
      console.error('Error sharing post:', error);
      throw error;
    }
  }

  /**
   * Get community forums
   */
  async getCommunityForums(): Promise<CommunityForum[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/forums`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.forums || [];
    } catch (error) {
      console.error('Error getting community forums:', error);
      return [];
    }
  }

  /**
   * Join forum
   */
  async joinForum(forumId: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/forums/${forumId}/join`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Joined Forum',
          'You have successfully joined the community forum.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error joining forum:', error);
      throw error;
    }
  }

  /**
   * Create forum post
   */
  async createForumPost(postData: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'user' | 'lastReply'>): Promise<ForumPost> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/forums/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(postData)
      });

      const data = await response.json();
      return data.post;
    } catch (error) {
      console.error('Error creating forum post:', error);
      throw error;
    }
  }

  /**
   * Get forum posts
   */
  async getForumPosts(forumId: string, limit: number = 20, offset: number = 0): Promise<ForumPost[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/forums/${forumId}/posts?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.posts || [];
    } catch (error) {
      console.error('Error getting forum posts:', error);
      return [];
    }
  }

  /**
   * Create referral
   */
  async createReferral(referredEmail: string, message?: string): Promise<ReferralProgram> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/referrals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          referredEmail,
          message
        })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Referral Sent',
          'Your referral has been sent successfully.',
          'info'
        );
      }

      return data.referral;
    } catch (error) {
      console.error('Error creating referral:', error);
      throw error;
    }
  }

  /**
   * Get referral program details
   */
  async getReferralProgram(): Promise<{
    program: {
      name: string;
      description: string;
      rewards: Array<{
        type: string;
        amount: number;
        description: string;
      }>;
      terms: string[];
    };
    userStats: {
      totalReferrals: number;
      successfulReferrals: number;
      totalRewards: number;
      pendingRewards: number;
    };
    referrals: ReferralProgram[];
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/referrals`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting referral program:', error);
      return {
        program: {
          name: 'RideShare Referral Program',
          description: 'Invite friends and earn rewards',
          rewards: [],
          terms: []
        },
        userStats: {
          totalReferrals: 0,
          successfulReferrals: 0,
          totalRewards: 0,
          pendingRewards: 0
        },
        referrals: []
      };
    }
  }

  /**
   * Create event rental
   */
  async createEventRental(eventData: Omit<EventRental, 'id' | 'createdAt' | 'updatedAt'>): Promise<EventRental> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/event-rentals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(eventData)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Event Rental Created',
          'Your event rental request has been posted.',
          'info'
        );
      }

      return data.eventRental;
    } catch (error) {
      console.error('Error creating event rental:', error);
      throw error;
    }
  }

  /**
   * Get event rentals
   */
  async getEventRentals(filters?: {
    location?: string;
    eventDate?: string;
    status?: string;
  }): Promise<EventRental[]> {
    try {
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });
      }

      const response = await fetch(`${this.API_BASE_URL}/social/event-rentals?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.eventRentals || [];
    } catch (error) {
      console.error('Error getting event rentals:', error);
      return [];
    }
  }

  /**
   * Get social analytics
   */
  async getSocialAnalytics(): Promise<{
    profileViews: number;
    postEngagement: number;
    followers: number;
    following: number;
    topPosts: SocialPost[];
    engagementRate: number;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting social analytics:', error);
      return {
        profileViews: 0,
        postEngagement: 0,
        followers: 0,
        following: 0,
        topPosts: [],
        engagementRate: 0
      };
    }
  }

  /**
   * Follow/unfollow user
   */
  async toggleFollow(userId: string): Promise<{ following: boolean; followers: number }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/follow/${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error toggling follow:', error);
      throw error;
    }
  }

  /**
   * Get followers/following
   */
  async getFollowers(userId: string, type: 'followers' | 'following'): Promise<UserProfile[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/${type}/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.users || [];
    } catch (error) {
      console.error(`Error getting ${type}:`, error);
      return [];
    }
  }

  /**
   * Search users
   */
  async searchUsers(query: string, limit: number = 20): Promise<UserProfile[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/search/users?q=${encodeURIComponent(query)}&limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.users || [];
    } catch (error) {
      console.error('Error searching users:', error);
      return [];
    }
  }

  /**
   * Report content
   */
  async reportContent(
    contentId: string,
    contentType: 'post' | 'comment' | 'user',
    reason: string,
    description: string
  ): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/social/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          contentId,
          contentType,
          reason,
          description
        })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Report Submitted',
          'Your report has been submitted and will be reviewed.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error reporting content:', error);
      throw error;
    }
  }
}

export const socialService = new SocialService();
