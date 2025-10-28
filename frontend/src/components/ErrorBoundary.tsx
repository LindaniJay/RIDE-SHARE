import { Component, ErrorInfo, ReactNode } from 'react';
import Icon from './Icon';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="max-w-md w-full mx-auto p-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <Icon name="AlertTriangle" size="lg" className="text-red-400" />
              </div>
              
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-white/70 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Refresh Page
                </button>
                
                <button
                  onClick={() => window.history.back()}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Go Back
                </button>
              </div>
              
              {import.meta.env.DEV && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-white/70 cursor-pointer mb-2">
                    Error Details (Development)
                  </summary>
                  <pre className="text-xs text-red-400 bg-red-500/10 p-3 rounded overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;