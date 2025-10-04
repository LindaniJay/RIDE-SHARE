import React, { useState } from 'react';
import { 
  Camera, 
  CheckSquare, 
  BarChart3, 
  Smartphone, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  Code,
  Eye
} from 'lucide-react';

// Import all the new components
import VisualInspectionWorkflow from '../components/VisualInspectionWorkflow';
import PhotoDocumentationSystem from '../components/PhotoDocumentationSystem';
import ProgressBar from '../components/ProgressBar';
import InteractiveChecklist from '../components/InteractiveChecklist';
import RealTimeStatusUpdates from '../components/RealTimeStatusUpdates';
import EnhancedMobileUI from '../components/EnhancedMobileUI';
import VisualHandoverProcess from '../components/VisualHandoverProcess';

const EnhancedFeaturesDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoData, setDemoData] = useState<any>({});

  const features = [
    {
      id: 'visual-inspection',
      title: 'Visual Inspection Workflows',
      description: 'Interactive checklists for pickup and return processes',
      icon: CheckSquare,
      color: 'bg-blue-600',
      component: VisualInspectionWorkflow,
      props: {
        type: 'pickup',
        onComplete: (data: any) => {
          console.log('Inspection completed:', data);
          setDemoData({ ...demoData, inspection: data });
        },
        onCancel: () => setActiveDemo(null)
      }
    },
    {
      id: 'photo-documentation',
      title: 'Photo Documentation System',
      description: 'Systematic vehicle condition documentation with photos',
      icon: Camera,
      color: 'bg-green-600',
      component: PhotoDocumentationSystem,
      props: {
        vehicleId: 'demo-vehicle-123',
        inspectionType: 'pickup',
        onPhotosComplete: (photos: any) => {
          console.log('Photos completed:', photos);
          setDemoData({ ...demoData, photos });
        },
        requiredCategories: ['exterior_front', 'exterior_rear', 'exterior_driver_side', 'exterior_passenger_side', 'interior_dashboard', 'interior_seats']
      }
    },
    {
      id: 'progress-bars',
      title: 'Progress Bars',
      description: 'Visual progress indicators in registration flows',
      icon: BarChart3,
      color: 'bg-purple-600',
      component: ProgressBar,
      props: {
        steps: [
          { id: 'personal_info', title: 'Personal Information', description: 'Enter your personal details', status: 'completed' },
          { id: 'verification', title: 'Identity Verification', description: 'Verify your identity', status: 'completed' },
          { id: 'payment_setup', title: 'Payment Setup', description: 'Set up payment method', status: 'current' },
          { id: 'preferences', title: 'Preferences', description: 'Set your preferences', status: 'pending' }
        ],
        currentStep: 2,
        variant: 'detailed'
      }
    },
    {
      id: 'interactive-checklists',
      title: 'Interactive Checklists',
      description: 'Pre-departure and return inspection checklists',
      icon: CheckSquare,
      color: 'bg-orange-600',
      component: InteractiveChecklist,
      props: {
        type: 'pre-departure',
        onComplete: (items: any) => {
          console.log('Checklist completed:', items);
          setDemoData({ ...demoData, checklist: items });
        },
        onProgress: (progress: number) => {
          console.log('Checklist progress:', progress);
        }
      }
    },
    {
      id: 'real-time-status',
      title: 'Real-Time Status Updates',
      description: 'Live booking and rental status tracking',
      icon: Clock,
      color: 'bg-red-600',
      component: RealTimeStatusUpdates,
      props: {
        bookingId: 'demo-booking-123',
        userId: 'demo-user-456',
        vehicleId: 'demo-vehicle-789',
        autoRefresh: true,
        refreshInterval: 3000
      }
    },
    {
      id: 'enhanced-mobile-ui',
      title: 'Enhanced Mobile UI',
      description: 'Polished mobile-first interface with smooth interactions',
      icon: Smartphone,
      color: 'bg-indigo-600',
      component: EnhancedMobileUI,
      props: {
        userType: 'renter',
        currentView: 'home',
        onViewChange: (view: string) => {
          console.log('View changed to:', view);
        }
      }
    },
    {
      id: 'visual-handover',
      title: 'Visual Handover Process',
      description: 'Step-by-step host-renter interaction workflows',
      icon: Users,
      color: 'bg-teal-600',
      component: VisualHandoverProcess,
      props: {
        handoverType: 'pickup',
        hostId: 'demo-host-123',
        renterId: 'demo-renter-456',
        vehicleId: 'demo-vehicle-789',
        bookingId: 'demo-booking-123',
        onComplete: (data: any) => {
          console.log('Handover completed:', data);
          setDemoData({ ...demoData, handover: data });
        },
        onCancel: () => setActiveDemo(null)
      }
    }
  ];

  const renderDemo = () => {
    if (!activeDemo) return null;

    const feature = features.find(f => f.id === activeDemo);
    if (!feature) return null;

    const Component = feature.component;
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <button
            onClick={() => setActiveDemo(null)}
            className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ← Back to Features
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-lg ${feature.color}`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Component {...feature.props} />
        </div>
      </div>
    );
  };

  if (activeDemo) {
    return renderDemo();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Enhanced Features Demo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Experience the new prototype features implemented in RideShare SA
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-blue-800 mb-2">🎉 New Features Added</h3>
            <p className="text-blue-700">
              All missing features from the prototype have been successfully implemented. 
              Click on any feature below to see it in action!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <button
                  onClick={() => setActiveDemo(feature.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Try Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Implementation Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">✅ Completed Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600" />
                  <span>Visual Inspection Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-green-600" />
                  <span>Photo Documentation System</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <span>Progress Bars</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600" />
                  <span>Interactive Checklists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span>Real-time Status Updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-600" />
                  <span>Enhanced Mobile UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-600" />
                  <span>Visual Handover Process</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">🚀 Key Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improved user experience with visual workflows</li>
                <li>• Better documentation and accountability</li>
                <li>• Enhanced mobile-first design</li>
                <li>• Real-time status tracking</li>
                <li>• Streamlined handover processes</li>
                <li>• Interactive and engaging interfaces</li>
                <li>• Professional and polished UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedFeaturesDemo;
