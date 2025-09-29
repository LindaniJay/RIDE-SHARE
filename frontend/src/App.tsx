import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layouts/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const VehicleDetail = lazy(() => import('./pages/VehicleDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SetupAdmin = lazy(() => import('./pages/SetupAdmin'));
const Unauthorized = lazy(() => import('./pages/Unauthorized'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <ThemeProvider>
              <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    <Route path="/search" element={<Layout><Search /></Layout>} />
                    <Route path="/vehicle/:id" element={<Layout><VehicleDetail /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                    <Route path="/dashboard/*" element={
                      <ProtectedRoute>
                        <Layout><Dashboard /></Layout>
                      </ProtectedRoute>
                    } />
                    <Route path="/login" element={<Layout><Login /></Layout>} />
                    <Route path="/register" element={<Layout><Register /></Layout>} />
                    <Route path="/setup-admin" element={<SetupAdmin />} />
                    <Route path="/unauthorized" element={<Layout><Unauthorized /></Layout>} />
                    <Route path="*" element={<Layout><NotFound /></Layout>} />
                  </Routes>
                </Suspense>
              </div>
            </ThemeProvider>
          </AuthProvider>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
