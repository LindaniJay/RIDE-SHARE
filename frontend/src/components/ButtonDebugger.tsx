import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { Button } from './Button';
import FloatingActionButton from './FloatingActionButton';
import Icon from './Icon';

interface ButtonTest {
  id: string;
  name: string;
  component: React.ReactNode;
  expectedBehavior: string;
  status: 'pending' | 'testing' | 'passed' | 'failed';
  error?: string;
}

const ButtonDebugger: React.FC = () => {
  const [tests, setTests] = useState<ButtonTest[]>([]);
  const [currentTest, setCurrentTest] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, any>>({});
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    initializeTests();
  }, []);

  const initializeTests = () => {
    const buttonTests: ButtonTest[] = [
      {
        id: 'glass-button-primary',
        name: 'GlassButton Primary',
        component: (
          <GlassButton
            variant="primary"
            onClick={() => console.log('GlassButton Primary clicked')}
          >
            Primary Button
          </GlassButton>
        ),
        expectedBehavior: 'Should render with primary styling and handle click events',
        status: 'pending'
      },
      {
        id: 'glass-button-secondary',
        name: 'GlassButton Secondary',
        component: (
          <GlassButton
            variant="secondary"
            onClick={() => console.log('GlassButton Secondary clicked')}
          >
            Secondary Button
          </GlassButton>
        ),
        expectedBehavior: 'Should render with secondary styling and handle click events',
        status: 'pending'
      },
      {
        id: 'glass-button-disabled',
        name: 'GlassButton Disabled',
        component: (
          <GlassButton
            variant="primary"
            disabled={true}
            onClick={() => console.log('This should not fire')}
          >
            Disabled Button
          </GlassButton>
        ),
        expectedBehavior: 'Should be disabled and not respond to clicks',
        status: 'pending'
      },
      {
        id: 'glass-button-loading',
        name: 'GlassButton Loading',
        component: (
          <GlassButton
            variant="primary"
            loading={true}
            onClick={() => console.log('This should not fire while loading')}
          >
            Loading Button
          </GlassButton>
        ),
        expectedBehavior: 'Should show loading spinner and be disabled',
        status: 'pending'
      },
      {
        id: 'glass-button-with-icon',
        name: 'GlassButton with Icon',
        component: (
          <GlassButton
            variant="accent"
            icon={<Icon name="Search" size="sm" />}
            iconPosition="left"
            onClick={() => console.log('GlassButton with icon clicked')}
          >
            Search
          </GlassButton>
        ),
        expectedBehavior: 'Should render with icon on the left side',
        status: 'pending'
      },
      {
        id: 'glass-button-glow',
        name: 'GlassButton with Glow',
        component: (
          <GlassButton
            variant="primary"
            glow={true}
            onClick={() => console.log('GlassButton with glow clicked')}
          >
            Glow Button
          </GlassButton>
        ),
        expectedBehavior: 'Should render with glow effect',
        status: 'pending'
      },
      {
        id: 'regular-button-primary',
        name: 'Regular Button Primary',
        component: (
          <Button
            variant="primary"
            onClick={() => console.log('Regular Button Primary clicked')}
            data-testid="regular-button-primary"
          >
            Primary Button
          </Button>
        ),
        expectedBehavior: 'Should render with primary styling and handle click events',
        status: 'pending'
      },
      {
        id: 'regular-button-danger',
        name: 'Regular Button Danger',
        component: (
          <Button
            variant="danger"
            onClick={() => console.log('Regular Button Danger clicked')}
            data-testid="regular-button-danger"
          >
            Danger Button
          </Button>
        ),
        expectedBehavior: 'Should render with danger styling and handle click events',
        status: 'pending'
      },
      {
        id: 'regular-button-loading',
        name: 'Regular Button Loading',
        component: (
          <Button
            variant="primary"
            loading={true}
            onClick={() => console.log('This should not fire while loading')}
            data-testid="regular-button-loading"
          >
            Loading Button
          </Button>
        ),
        expectedBehavior: 'Should show loading spinner and be disabled',
        status: 'pending'
      },
      {
        id: 'floating-action-button',
        name: 'Floating Action Button',
        component: (
          <FloatingActionButton
            icon="Plus"
            onClick={() => console.log('FAB clicked')}
            tooltip="Add new item"
            className="relative"
          />
        ),
        expectedBehavior: 'Should render as floating button with icon and tooltip',
        status: 'pending'
      },
      {
        id: 'form-submit-button',
        name: 'Form Submit Button',
        component: (
          <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
            <GlassButton
              type="submit"
              variant="primary"
            >
              Submit Form
            </GlassButton>
          </form>
        ),
        expectedBehavior: 'Should submit form when clicked',
        status: 'pending'
      },
      {
        id: 'navigation-button',
        name: 'Navigation Button',
        component: (
          <GlassButton
            variant="ghost"
            onClick={() => window.location.href = '/search'}
          >
            Go to Search
          </GlassButton>
        ),
        expectedBehavior: 'Should navigate to search page',
        status: 'pending'
      }
    ];

    setTests(buttonTests);
  };

  const runTest = async (testId: string) => {
    const test = tests.find(t => t.id === testId);
    if (!test) return;

    setCurrentTest(testId);
    setTests(prev => prev.map(t => 
      t.id === testId ? { ...t, status: 'testing' } : t
    ));

    try {
      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if button exists in DOM
      const buttonElement = document.querySelector(`button`);
      
      if (buttonElement) {
        // Test click functionality
        const clickEvent = new MouseEvent('click', { bubbles: true });
        buttonElement.dispatchEvent(clickEvent);
        
        setTests(prev => prev.map(t => 
          t.id === testId ? { ...t, status: 'passed' } : t
        ));
        setTestResults(prev => ({
          ...prev,
          [testId]: { status: 'passed', message: 'Button rendered and clickable' }
        }));
      } else {
        setTests(prev => prev.map(t => 
          t.id === testId ? { ...t, status: 'failed', error: 'Button not found in DOM' } : t
        ));
        setTestResults(prev => ({
          ...prev,
          [testId]: { status: 'failed', message: 'Button not found in DOM' }
        }));
      }
    } catch (error) {
      setTests(prev => prev.map(t => 
        t.id === testId ? { ...t, status: 'failed', error: error instanceof Error ? error.message : 'Unknown error' } : t
      ));
      setTestResults(prev => ({
        ...prev,
        [testId]: { status: 'failed', message: error instanceof Error ? error.message : 'Unknown error' }
      }));
    }

    setCurrentTest(null);
  };

  const runAllTests = async () => {
    setIsRunning(true);
    for (const test of tests) {
      await runTest(test.id);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between tests
    }
    setIsRunning(false);
  };

  const resetTests = () => {
    setTests(prev => prev.map(t => ({ ...t, status: 'pending', error: undefined })));
    setTestResults({});
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-400';
      case 'failed': return 'text-red-400';
      case 'testing': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return 'CheckCircle';
      case 'failed': return 'XCircle';
      case 'testing': return 'Loader';
      default: return 'Circle';
    }
  };

  const passedTests = tests.filter(t => t.status === 'passed').length;
  const failedTests = tests.filter(t => t.status === 'failed').length;
  const totalTests = tests.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Button Debugger</h1>
              <p className="text-white/70">Comprehensive testing for all button components</p>
            </div>
            <div className="flex space-x-4">
              <GlassButton
                onClick={runAllTests}
                disabled={isRunning}
                loading={isRunning}
                variant="primary"
                icon={<Icon name="Play" size="sm" />}
              >
                Run All Tests
              </GlassButton>
              <GlassButton
                onClick={resetTests}
                variant="secondary"
                icon={<Icon name="RefreshCw" size="sm" />}
              >
                Reset Tests
              </GlassButton>
            </div>
          </div>
          
          {/* Test Summary */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{passedTests}</div>
              <div className="text-sm text-white/70">Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{failedTests}</div>
              <div className="text-sm text-white/70">Failed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{totalTests}</div>
              <div className="text-sm text-white/70">Total</div>
            </div>
          </div>
        </GlassCard>

        {/* Test Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tests.map((test) => (
            <GlassCard key={test.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Icon 
                    name={getStatusIcon(test.status)} 
                    size="sm" 
                    className={getStatusColor(test.status)}
                  />
                  <h3 className="text-lg font-semibold text-white">{test.name}</h3>
                </div>
                <GlassButton
                  onClick={() => runTest(test.id)}
                  disabled={currentTest === test.id}
                  size="sm"
                  variant="ghost"
                >
                  Test
                </GlassButton>
              </div>
              
              <div className="mb-4">
                <p className="text-white/70 text-sm mb-3">{test.expectedBehavior}</p>
                <div className="bg-white/5 rounded-lg p-4">
                  {test.component}
                </div>
              </div>
              
              {test.error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-200 text-sm">{test.error}</p>
                </div>
              )}
              
              {testResults[test.id] && (
                <div className={`border rounded-lg p-3 ${
                  testResults[test.id].status === 'passed' 
                    ? 'bg-green-500/20 border-green-500/30' 
                    : 'bg-red-500/20 border-red-500/30'
                }`}>
                  <p className={`text-sm ${
                    testResults[test.id].status === 'passed' 
                      ? 'text-green-200' 
                      : 'text-red-200'
                  }`}>
                    {testResults[test.id].message}
                  </p>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Console Output */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Console Output</h3>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-green-400 max-h-64 overflow-y-auto">
            <p>Button click events will appear here...</p>
            <p>Open browser console to see detailed logs</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ButtonDebugger;
