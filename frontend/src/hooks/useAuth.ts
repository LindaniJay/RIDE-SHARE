import { useState, useEffect } from 'react';

// Simple API service
const api = {
  defaults: {
    headers: {
      common: {} as Record<string, string>
    }
  },
  get: async (url: string) => {
    const response = await fetch(url, {
      headers: {
        'Authorization': api.defaults.headers.common['Authorization'] || ''
      }
    });
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  }
};

export default function useAuth() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      (async () => { 
        try { 
          const r = await api.get('/me'); 
          setUser(r.data.user); 
        } catch(e) { 
          console.warn(e); 
        } 
      })();
    }
  }, []);
  return { user, setUser };
}
