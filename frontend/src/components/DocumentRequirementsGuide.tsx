import React, { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  acceptedFormats: string[];
  maxSize: number; // in MB
  isRequired: boolean;
  examples?: string[];
}

interface DocumentRequirementsGuideProps {
  requirements: DocumentRequirement[];
  className?: string;
}

const DocumentRequirementsGuide: React.FC<DocumentRequirementsGuideProps> = ({
  requirements,
  className = ''
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getDocumentIcon = (name: string) => {
    if (name.toLowerCase().includes('registration')) {
      return <FileText className="w-5 h-5 text-blue-400" />;
    } else if (name.toLowerCase().includes('roadworthy')) {
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    } else if (name.toLowerCase().includes('insurance')) {
      return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    }
    return <FileText className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Info className="w-5 h-5 text-blue-400" />
          <h3 className="text-blue-300 font-medium">Document Requirements Guide</h3>
        </div>
        <p className="text-blue-200/80 text-sm">
          Please ensure all documents are clear, readable, and meet the requirements below. 
          Documents will be reviewed by our admin team before approval.
        </p>
      </div>

      <div className="space-y-3">
        {requirements.map((requirement) => {
          const isExpanded = expandedSections.has(requirement.id);
          
          return (
            <div
              key={requirement.id}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(requirement.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {getDocumentIcon(requirement.name)}
                  <div className="text-left">
                    <h4 className="text-white/90 font-medium flex items-center space-x-2">
                      <span>{requirement.name}</span>
                      {requirement.isRequired && (
                        <span className="text-red-400 text-xs">*</span>
                      )}
                    </h4>
                    <p className="text-white/60 text-sm">{requirement.description}</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-white/60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/60" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-white/10">
                  <div className="pt-4 space-y-4">
                    {/* Requirements */}
                    <div>
                      <h5 className="text-white/80 font-medium mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Requirements
                      </h5>
                      <ul className="space-y-1">
                        {requirement.requirements.map((req, index) => (
                          <li key={index} className="text-white/70 text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accepted Formats */}
                    <div>
                      <h5 className="text-white/80 font-medium mb-2">Accepted Formats</h5>
                      <div className="flex flex-wrap gap-2">
                        {requirement.acceptedFormats.map((format, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/60 text-xs mt-1">
                        Maximum file size: {requirement.maxSize}MB
                      </p>
                    </div>

                    {/* Examples */}
                    {requirement.examples && requirement.examples.length > 0 && (
                      <div>
                        <h5 className="text-white/80 font-medium mb-2">Examples</h5>
                        <ul className="space-y-1">
                          {requirement.examples.map((example, index) => (
                            <li key={index} className="text-white/70 text-sm">
                              • {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tips */}
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <h5 className="text-yellow-300 font-medium mb-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Tips for Better Approval
                      </h5>
                      <ul className="space-y-1 text-yellow-200/80 text-sm">
                        <li>• Ensure all text is clearly visible and readable</li>
                        <li>• Take photos in good lighting conditions</li>
                        <li>• Avoid blurry or dark images</li>
                        <li>• Include all pages if the document is multi-page</li>
                        <li>• Make sure the document is not expired</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* General Guidelines */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
        <h4 className="text-green-300 font-medium mb-2 flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          General Guidelines
        </h4>
        <ul className="space-y-1 text-green-200/80 text-sm">
          <li>• All documents must be current and valid</li>
          <li>• Documents should not be older than 2 years (except registration)</li>
          <li>• Ensure all personal information is clearly visible</li>
          <li>• Documents will be reviewed within 24-48 hours</li>
          <li>• You'll receive email notifications about approval status</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentRequirementsGuide;

