import { useState, useEffect, useCallback, useRef } from 'react';
import { useCache } from './useCache';

interface FetchOptions {
  cache?: boolean;
  cacheKey?: string;
  cacheTtl?: number;
  retry?: number;
  retryDelay?: number;
  timeout?: number;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  retryCount: number;
}

export const useOptimizedFetch = <T = any>(
  url: string,
  options: FetchOptions = {}
) => {
  const {
    retry = 3,
    retryDelay = 1000,
    timeout = 10000
  } = options;

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
    retryCount: 0
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async (isRetry = false) => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setState(prev => ({
      ...prev,
      loading: !isRetry || prev.retryCount === 0,
      error: null
    }));

    try {
      // Set timeout
      timeoutRef.current = setTimeout(() => {
        abortControllerRef.current?.abort();
      }, timeout);

      const response = await fetch(url, {
        signal: abortControllerRef.current.signal,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setState(prev => ({
        ...prev,
        data,
        loading: false,
        error: null,
        retryCount: 0
      }));

      return data;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return; // Request was cancelled
      }

      const shouldRetry = state.retryCount < retry;
      
      if (shouldRetry) {
        setState(prev => ({
          ...prev,
          retryCount: prev.retryCount + 1,
          loading: false
        }));

        // Retry with exponential backoff
        setTimeout(() => {
          fetchData(true);
        }, retryDelay * Math.pow(2, state.retryCount));
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error as Error
        }));
      }
    } finally {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [url, retry, retryDelay, timeout, state.retryCount]);

  const refetch = useCallback(() => {
    setState(prev => ({ ...prev, retryCount: 0 }));
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [url]);

  return {
    ...state,
    refetch
  };
};

// Hook for cached API calls
export const useCachedFetch = <T = any>(
  url: string,
  options: FetchOptions = {}
) => {
  const { cacheKey = url, cacheTtl = 5 * 60 * 1000 } = options;

  return useCache<T>(
    cacheKey,
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    { ttl: cacheTtl }
  );
};

// Hook for batch API calls
export const useBatchFetch = <T = any>(
  urls: string[]
) => {
  const [state, setState] = useState<{
    data: T[];
    loading: boolean;
    error: Error | null;
  }>({
    data: [],
    loading: false,
    error: null
  });

  const fetchAll = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const promises = urls.map(url => 
        fetch(url).then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
      );

      const results = await Promise.all(promises);
      
      setState({
        data: results,
        loading: false,
        error: null
      });
    } catch (error) {
      setState({
        data: [],
        loading: false,
        error: error as Error
      });
    }
  }, [urls]);

  useEffect(() => {
    if (urls.length > 0) {
      fetchAll();
    }
  }, [fetchAll]);

  return {
    ...state,
    refetch: fetchAll
  };
};

export default useOptimizedFetch;
