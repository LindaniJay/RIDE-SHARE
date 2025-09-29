import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface DocumentUploadProps {
  label: string;
  name: string;
  value?: File;
  onChange: (file: File | undefined) => void;
  accept?: string;
  required?: boolean;
  error?: string;
  className?: string;
  description?: string;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  label,
  name,
  value,
  onChange,
  accept = "image/*,.pdf",
  required = false,
  error,
  className,
  description
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (file: File) => {
    if (file) {
      onChange(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileChange(files[0]);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const removeFile = () => {
    onChange(undefined);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-white/90">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      {description && (
        <p className="text-xs text-white/70">{description}</p>
      )}

      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 transition-all duration-300",
          isDragOver
            ? "border-blue-400 bg-blue-500/10"
            : "border-white/20 hover:border-white/40",
          error
            ? "border-red-400 bg-red-500/10"
            : "bg-white/5 backdrop-blur-md",
          "hover:bg-white/10"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {value ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{value.name}</p>
                <p className="text-xs text-white/70">
                  {(value.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm text-white/80 mb-2">
              {isDragOver ? "Drop your file here" : "Drag and drop your file here"}
            </p>
            <p className="text-xs text-white/60 mb-4">
              or click to browse (JPG, PNG, PDF up to 10MB)
            </p>
            <input
              type="file"
              name={name}
              accept={accept}
              onChange={handleInputChange}
              className="hidden"
              id={`file-input-${name}`}
              required={required}
            />
            <label
              htmlFor={`file-input-${name}`}
              className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer border border-white/20"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Choose File
            </label>
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default DocumentUpload;