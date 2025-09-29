import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import Layout from './layouts/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { FullPageLoading } from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const VehicleDetail = lazy(() => import('./pages/VehicleDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const RealTimeAdminDashboard = lazy(() => import('./pages/RealTimeAdminDashboard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SetupAdmin = lazy(() => import('./pages/SetupAdmin'));
const Unauthorized = lazy(() => import('./pages/Unauthorized'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminGuard = lazy(() => import('./components/AdminGuard'));

import './index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: 3,
      refetchOnWindowFocus: false,
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
                    <Suspense fallback={<FullPageLoading text="Loading RideShare SA..." />}>
                      <Routes>
                        <Route path="/" element={<Layout><Home /></Layout>} />
                        <Route path="/search" element={<Layout><Search /></Layout>} />
                        <Route path="/vehicle/:id" element={<Layout><VehicleDetail /></Layout>} />
                        <Route path="/about" element={<Layout><About /></Layout>} />
                        <Route path="/contact" element={<Layout><Contact /></Layout>} />
                        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                        <Route path="/dashboard/*" element={
                          <ProtectedRoute allowedRoles={['host', 'admin']}>
                            <Layout><Dashboard /></Layout>
                          </ProtectedRoute>
                        } />
                        <Route path="/admin-dashboard" element={
                          <AdminGuard>
                            <RealTimeAdminDashboard />
                          </AdminGuard>
                        } />
                        <Route path="/login" element={<Layout><Login /></Layout>} />
                        <Route path="/register" element={<Layout><Register /></Layout>} />
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/setup-admin" element={
                          <AdminGuard>
                            <SetupAdmin />
                          </AdminGuard>
                        } />
                        <Route path="/unauthorized" element={<Layout><Unauthorized /></Layout>} />
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
