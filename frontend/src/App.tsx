import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import Layout from './layouts/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import { FullPageLoading } from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const VehicleDetail = lazy(() => import('./pages/VehicleDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const RealTimeAdminDashboard = lazy(() => import('./pages/RealTimeAdminDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const Unauthorized = lazy(() => import('./pages/Unauthorized'));
const NotFound = lazy(() => import('./pages/NotFound'));

import './index.css';

// Create a client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes - increased for better caching
      gcTime: 30 * 60 * 1000, // 30 minutes - increased for better caching
      retry: 1, // Reduced retries for faster failure handling
      refetchOnWindowFocus: false,
      refetchOnMount: false, // Prevent unnecessary refetches
      refetchOnReconnect: false, // Prevent refetch on reconnect
    },
    mutations: {
      retry: 1, // Reduced retries for mutations
    },
  },
});

function App() {
  // Global error handler for message channel errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Suppress "message channel closed" errors as they're typically from browser extensions
      if (event.message && event.message.includes('message channel closed')) {
        event.preventDefault();
        console.warn('Suppressed message channel error (likely from browser extension):', event.message);
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Suppress "message channel closed" promise rejections
      if (event.reason && event.reason.message && event.reason.message.includes('message channel closed')) {
        event.preventDefault();
        console.warn('Suppressed message channel promise rejection (likely from browser extension):', event.reason.message);
        return false;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <ErrorBoundary>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <AuthProvider>
                <ThemeProvider>
                  <div className="App">
                    <PerformanceMonitor />
                    <Suspense fallback={<FullPageLoading text="Loading RideShare SA..." />}>
                      <Routes>
                        <Route path="/" element={<Layout><Home /></Layout>} />
                        <Route path="/search" element={<Layout><Search /></Layout>} />
                        <Route path="/vehicle/:id" element={<Layout><VehicleDetail /></Layout>} />
                        <Route path="/about" element={<Layout><About /></Layout>} />
                        <Route path="/contact" element={<Layout><Contact /></Layout>} />
                        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/register" element={<Signup />} />
                        <Route path="/admin-login" element={
                          <AdminAuthProvider>
                            <AdminLogin />
                          </AdminAuthProvider>
                        } />
                        <Route path="/unauthorized" element={<Unauthorized />} />
                        <Route path="/dashboard/*" element={
                          <ProtectedRoute>
                            <Layout><Dashboard /></Layout>
                          </ProtectedRoute>
                        } />
                        <Route path="/user-dashboard" element={
                          <ProtectedRoute>
                            <Layout><UserDashboard /></Layout>
                          </ProtectedRoute>
                        } />
                        <Route path="/admin-dashboard/*" element={
                          <AdminAuthProvider>
                            <AdminProtectedRoute>
                              <AdminDashboard />
                            </AdminProtectedRoute>
                          </AdminAuthProvider>
                        } />
                        <Route path="/legacy-admin-dashboard" element={<RealTimeAdminDashboard />} />
                        <Route path="*" element={<Layout><NotFound /></Layout>} />
                      </Routes>
                    </Suspense>
                  </div>
                </ThemeProvider>
              </AuthProvider>
            </Router>
          </ErrorBoundary>
        </ToastProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
