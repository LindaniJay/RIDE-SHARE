import React, { useState, useRef } from 'react';
import Icon from './Icon';

interface DocumentUploadProps {
  label: string;
  name: string;
  required?: boolean;
  acceptedTypes?: string[];
  maxSize?: number; // in MB
  onChange: (file: File | null) => void;
  value?: File | null;
  error?: string;
  description?: string;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  label,
  name,
  required = false,
  acceptedTypes = ['image/*', 'application/pdf'],
  maxSize = 5, // 5MB default
  onChange,
  value,
  error,
  description
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    setUploadError(null);

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Check file type
    const isValidType = acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -1));
      }
      return file.type === type;
    });

    if (!isValidType) {
      setUploadError(`File type must be one of: ${acceptedTypes.join(', ')}`);
      return;
    }

    onChange(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleRemoveFile = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      {description && (
        <p className="text-xs text-white/60">{description}</p>
      )}

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
          isDragOver
            ? 'border-blue-400 bg-blue-50/10'
            : error || uploadError
            ? 'border-red-400 bg-red-50/10'
            : 'border-white/20 hover:border-white/40'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {value ? (
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="FileText" size="lg" className="text-green-400" />
            </div>
            <p className="text-sm text-white/80 font-medium">{value.name}</p>
            <p className="text-xs text-white/60">{formatFileSize(value.size)}</p>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="mt-2 text-red-400 hover:text-red-300 text-xs underline"
            >
              Remove file
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Upload" size="lg" className="text-white/60" />
            </div>
            <p className="text-sm text-white/80">
              {isDragOver ? 'Drop file here' : 'Drag and drop or click to upload'}
            </p>
            <p className="text-xs text-white/60 mt-1">
              Accepted: {acceptedTypes.join(', ')} (max {maxSize}MB)
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
            >
              Choose File
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          name={name}
          accept={acceptedTypes.join(',')}
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {(error || uploadError) && (
        <p className="text-xs text-red-400 flex items-center">
          <Icon name="AlertCircle" size="sm" className="mr-1" />
          {error || uploadError}
        </p>
      )}
    </div>
  );
};

export default DocumentUpload;