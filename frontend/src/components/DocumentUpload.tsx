import React, { useState, useRef } from 'react';

interface DocumentUploadProps {
  onUpload: (file: File, type: string) => void;
  documentType: string;
  acceptedTypes?: string[];
  maxSize?: number; // in MB
  className?: string;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onUpload,
  documentType,
  acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'],
  maxSize = 5,
  className = ''
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      alert(`Please upload a valid file type. Accepted types: ${acceptedTypes.join(', ')}`);
      return;
    }

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    setUploadedFile(file);
    
    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    onUpload(file, documentType);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes.join(',')}
          onChange={handleFileInputChange}
          className="hidden"
        />
        
        {uploadedFile ? (
          <div className="space-y-4">
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Document preview"
                  className="w-full h-32 object-cover rounded-lg mx-auto"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <span className="text-2xl">📄</span>
                <span className="font-medium">{uploadedFile.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-4xl text-gray-400">📁</div>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Upload {documentType}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drag and drop your file here, or click to browse
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Max size: {maxSize}MB • Accepted: {acceptedTypes.join(', ')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
