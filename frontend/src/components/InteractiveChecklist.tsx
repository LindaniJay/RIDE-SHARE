import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, AlertTriangle, Info, Clock, CheckSquare, Square } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  category: string;
  completed: boolean;
  notes?: string;
  timestamp?: Date;
}

interface ChecklistCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: ChecklistItem[];
}

interface InteractiveChecklistProps {
  type: 'pre-departure' | 'return' | 'safety' | 'maintenance';
  onComplete: (completedItems: ChecklistItem[]) => void;
  onProgress: (progress: number) => void;
  initialData?: ChecklistItem[];
}

const InteractiveChecklist: React.FC<InteractiveChecklistProps> = ({
  type,
  onComplete,
  onProgress,
  initialData = []
}) => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showNotes, setShowNotes] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  const checklistTemplates = {
    'pre-departure': {
      categories: [
        {
          id: 'vehicle_exterior',
          name: 'Vehicle Exterior',
          description: 'Check exterior condition',
          icon: '🚗',
          items: [
            { id: 'exterior_clean', title: 'Vehicle is clean', description: 'Exterior is clean and presentable', required: true, category: 'vehicle_exterior', completed: false },
            { id: 'tires_check', title: 'Tire condition', description: 'Check tire tread and pressure', required: true, category: 'vehicle_exterior', completed: false },
            { id: 'lights_working', title: 'Lights functional', description: 'All lights are working properly', required: true, category: 'vehicle_exterior', completed: false },
            { id: 'mirrors_adjusted', title: 'Mirrors adjusted', description: 'All mirrors are properly adjusted', required: true, category: 'vehicle_exterior', completed: false },
            { id: 'windows_clean', title: 'Windows clean', description: 'All windows are clean and clear', required: false, category: 'vehicle_exterior', completed: false }
          ]
        },
        {
          id: 'vehicle_interior',
          name: 'Vehicle Interior',
          description: 'Check interior condition',
          icon: '🪑',
          items: [
            { id: 'interior_clean', title: 'Interior clean', description: 'Interior is clean and tidy', required: true, category: 'vehicle_interior', completed: false },
            { id: 'seats_adjusted', title: 'Seats adjusted', description: 'Driver seat is properly adjusted', required: true, category: 'vehicle_interior', completed: false },
            { id: 'dashboard_clear', title: 'Dashboard clear', description: 'Dashboard is clear of obstructions', required: true, category: 'vehicle_interior', completed: false },
            { id: 'controls_working', title: 'Controls functional', description: 'All controls are working properly', required: true, category: 'vehicle_interior', completed: false },
            { id: 'air_conditioning', title: 'Air conditioning', description: 'AC/Heating system is working', required: false, category: 'vehicle_interior', completed: false }
          ]
        },
        {
          id: 'safety_equipment',
          name: 'Safety Equipment',
          description: 'Verify safety equipment',
          icon: '🛡️',
          items: [
            { id: 'seatbelts_working', title: 'Seatbelts functional', description: 'All seatbelts are working properly', required: true, category: 'safety_equipment', completed: false },
            { id: 'airbags_ready', title: 'Airbags ready', description: 'Airbag system is functional', required: true, category: 'safety_equipment', completed: false },
            { id: 'first_aid_kit', title: 'First aid kit', description: 'First aid kit is present and complete', required: true, category: 'safety_equipment', completed: false },
            { id: 'emergency_tools', title: 'Emergency tools', description: 'Emergency tools are present', required: true, category: 'safety_equipment', completed: false },
            { id: 'fire_extinguisher', title: 'Fire extinguisher', description: 'Fire extinguisher is present and charged', required: false, category: 'safety_equipment', completed: false }
          ]
        },
        {
          id: 'documentation',
          name: 'Documentation',
          description: 'Verify all documents',
          icon: '📄',
          items: [
            { id: 'registration_present', title: 'Registration present', description: 'Vehicle registration is in the vehicle', required: true, category: 'documentation', completed: false },
            { id: 'insurance_valid', title: 'Insurance valid', description: 'Insurance documents are current', required: true, category: 'documentation', completed: false },
            { id: 'license_present', title: 'Driver license', description: 'Valid driver license is present', required: true, category: 'documentation', completed: false },
            { id: 'keys_present', title: 'Keys present', description: 'All vehicle keys are present', required: true, category: 'documentation', completed: false }
          ]
        }
      ]
    },
    'return': {
      categories: [
        {
          id: 'vehicle_condition',
          name: 'Vehicle Condition',
          description: 'Check vehicle condition on return',
          icon: '🔍',
          items: [
            { id: 'exterior_condition', title: 'Exterior condition', description: 'Exterior is in good condition', required: true, category: 'vehicle_condition', completed: false },
            { id: 'interior_condition', title: 'Interior condition', description: 'Interior is clean and undamaged', required: true, category: 'vehicle_condition', completed: false },
            { id: 'fuel_level_return', title: 'Fuel level', description: 'Fuel level matches pickup level', required: true, category: 'vehicle_condition', completed: false },
            { id: 'mileage_recorded', title: 'Mileage recorded', description: 'Final mileage is recorded', required: true, category: 'vehicle_condition', completed: false }
          ]
        },
        {
          id: 'personal_items',
          name: 'Personal Items',
          description: 'Check for personal items',
          icon: '👤',
          items: [
            { id: 'personal_items_removed', title: 'Personal items removed', description: 'All personal items have been removed', required: true, category: 'personal_items', completed: false },
            { id: 'trunk_checked', title: 'Trunk checked', description: 'Trunk has been checked for items', required: true, category: 'personal_items', completed: false },
            { id: 'glovebox_checked', title: 'Glovebox checked', description: 'Glovebox has been checked', required: true, category: 'personal_items', completed: false }
          ]
        },
        {
          id: 'damage_assessment',
          name: 'Damage Assessment',
          description: 'Assess any damage',
          icon: '⚠️',
          items: [
            { id: 'no_new_damage', title: 'No new damage', description: 'No new damage has occurred', required: true, category: 'damage_assessment', completed: false },
            { id: 'damage_documented', title: 'Damage documented', description: 'Any damage has been documented', required: false, category: 'damage_assessment', completed: false },
            { id: 'scratches_noted', title: 'Scratches noted', description: 'Any scratches have been noted', required: false, category: 'damage_assessment', completed: false }
          ]
        }
      ]
    }
  };

  const template = checklistTemplates[type as keyof typeof checklistTemplates];
  const categories = template?.categories || [];

  useEffect(() => {
    if (initialData.length > 0) {
      setItems(initialData);
    } else {
      const allItems = categories.flatMap(category => category.items);
      setItems(allItems);
    }
    if (categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [initialData, categories]);

  const toggleItem = (itemId: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, completed: !item.completed, timestamp: new Date() }
        : item
    ));
  };

  const updateNotes = (itemId: string, noteText: string) => {
    setNotes(prev => ({ ...prev, [itemId]: noteText }));
  };

  const getCategoryProgress = (categoryId: string) => {
    const categoryItems = items.filter(item => item.category === categoryId);
    const completedItems = categoryItems.filter(item => item.completed);
    return categoryItems.length > 0 ? (completedItems.length / categoryItems.length) * 100 : 0;
  };

  const getOverallProgress = () => {
    const requiredItems = items.filter(item => item.required);
    const completedRequired = requiredItems.filter(item => item.completed);
    return requiredItems.length > 0 ? (completedRequired.length / requiredItems.length) * 100 : 0;
  };

  const isChecklistComplete = () => {
    const requiredItems = items.filter(item => item.required);
    return requiredItems.every(item => item.completed);
  };

  useEffect(() => {
    onProgress(getOverallProgress());
    if (isChecklistComplete()) {
      onComplete(items.filter(item => item.completed));
    }
  }, [items, onProgress, onComplete]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const categoryItems = items.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {type === 'pre-departure' ? 'Pre-Departure Checklist' : 
           type === 'return' ? 'Return Checklist' :
           type === 'safety' ? 'Safety Checklist' : 'Maintenance Checklist'}
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${getOverallProgress()}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(getOverallProgress())}% Complete
          </span>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => {
            const progress = getCategoryProgress(category.id);
            const isComplete = progress === 100;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : isComplete
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                {isComplete && <CheckCircle className="w-4 h-4" />}
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {Math.round(progress)}%
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Category Items */}
      {selectedCategoryData && (
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{selectedCategoryData.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedCategoryData.name}
              </h3>
              <p className="text-sm text-gray-600">
                {selectedCategoryData.description}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {categoryItems.map(item => (
              <div
                key={item.id}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  item.completed
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`mt-1 transition-colors ${
                      item.completed ? 'text-green-600' : 'text-gray-400 hover:text-blue-600'
                    }`}
                  >
                    {item.completed ? (
                      <CheckSquare className="w-5 h-5" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-medium ${
                        item.completed ? 'text-green-800' : 'text-gray-800'
                      }`}>
                        {item.title}
                      </h4>
                      {item.required && (
                        <span className="text-red-500 text-sm">*</span>
                      )}
                      {item.completed && (
                        <span className="text-green-600 text-sm">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {item.description}
                    </p>
                    
                    {item.completed && item.timestamp && (
                      <p className="text-xs text-gray-500">
                        Completed at {item.timestamp.toLocaleTimeString()}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => setShowNotes(showNotes === item.id ? null : item.id)}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        {showNotes === item.id ? 'Hide Notes' : 'Add Notes'}
                      </button>
                      
                      {item.required && !item.completed && (
                        <span className="text-xs text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Required
                        </span>
                      )}
                    </div>
                    
                    {showNotes === item.id && (
                      <div className="mt-3">
                        <textarea
                          value={notes[item.id] || ''}
                          onChange={(e) => updateNotes(item.id, e.target.value)}
                          placeholder="Add notes about this item..."
                          className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none"
                          rows={2}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completion Status */}
      {isChecklistComplete() && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">All required items completed!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveChecklist;
