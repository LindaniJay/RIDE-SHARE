import React, { useState, useRef } from 'react';
import { Upload, X, FileText, Image, CheckCircle, AlertCircle } from 'lucide-react';

export interface DocumentUploadProps {
  // New interface
  documentType?: string;
  required?: boolean;
  acceptedTypes?: string[];
  maxSize?: number; // in MB
  onUpload?: (file: File | null) => void;
  onRemove?: () => void;
  existingFile?: File | null;
  className?: string;
  disabled?: boolean;
  
  // Legacy interface for backward compatibility
  label?: string;
  name?: string;
  onChange?: (file: File | null) => void;
  value?: File | null;
  description?: string;
}

export interface DocumentUploadState {
  file: File | null;
  preview: string | null;
  error: string | null;
  uploading: boolean;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  // New interface
  documentType,
  required = false,
  acceptedTypes = ['image/*', 'application/pdf'],
  maxSize = 10, // 10MB default
  onUpload,
  onRemove,
  existingFile = null,
  className = '',
  disabled = false,
  
  // Legacy interface
  label,
  onChange,
  value
}) => {
  const [state, setState] = useState<DocumentUploadState>({
    file: existingFile || value || null,
    preview: (existingFile || value) ? URL.createObjectURL(existingFile || value!) : null,
    error: null,
    uploading: false
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const isValidType = acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -1));
      }
      return file.type === type;
    });

    if (!isValidType) {
      setState(prev => ({
        ...prev,
        error: `Invalid file type. Accepted types: ${acceptedTypes.join(', ')}`
      }));
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setState(prev => ({
        ...prev,
        error: `File size must be less than ${maxSize}MB`
      }));
      return;
    }

    // Clear any previous errors
    setState(prev => ({
      ...prev,
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      error: null
    }));

    // Handle both new and legacy interfaces
    if (onUpload) {
      onUpload(file);
    }
    if (onChange) {
      onChange(file);
    }
  };

  const handleRemove = () => {
    setState({
      file: null,
      preview: null,
      error: null,
      uploading: false
    });
    
    if (onRemove) {
      onRemove();
    } else {
      if (onUpload) {
        onUpload(null);
      }
      if (onChange) {
        onChange(null);
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (disabled) return;

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const syntheticEvent = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFileSelect(syntheticEvent);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className="w-8 h-8 text-blue-500" />;
    }
    return <FileText className="w-8 h-8 text-gray-500" />;
  };

  const getDocumentTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'idDocument': 'ID Document',
      'driverLicense': 'Driver\'s License',
      'proofOfAddress': 'Proof of Address',
      'vehicleRegistration': 'Vehicle Registration',
      'roadworthyCertificate': 'Roadworthy Certificate',
      'insuranceCertificate': 'Insurance Certificate',
      'businessRegistration': 'Business Registration',
      'taxCertificate': 'Tax Certificate'
    };
    return labels[type] || type;
  };

  // Determine the label to display
  const displayLabel = label || (documentType ? getDocumentTypeLabel(documentType) : 'Document');
  
  return (
    <div className={`document-upload ${className}`}>
      {displayLabel && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {displayLabel}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {state.file ? (
        <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {state.preview ? (
                <img
                  src={state.preview}
                  alt="Preview"
                  className="w-12 h-12 object-cover rounded"
                />
              ) : (
                getFileIcon(state.file)
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">{state.file.name}</p>
                <p className="text-xs text-gray-500">
                  {(state.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {!disabled && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => !disabled && fileInputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-1">
            {disabled ? 'Upload disabled' : 'Click to upload or drag and drop'}
          </p>
          <p className="text-xs text-gray-500">
            {acceptedTypes.join(', ')} (max {maxSize}MB)
          </p>
        </div>
      )}

      {state.error && (
        <div className="mt-2 flex items-center space-x-2 text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{state.error}</span>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />
    </div>
  );
};

export default DocumentUpload;