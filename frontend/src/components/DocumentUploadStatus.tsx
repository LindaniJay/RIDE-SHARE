import React from 'react';
import { CheckCircle, AlertCircle, Upload, FileText, Eye, X } from 'lucide-react';

export interface DocumentStatus {
  id: string;
  name: string;
  status: 'idle' | 'uploading' | 'success' | 'error';
  progress?: number;
  error?: string;
  file?: File;
  uploadedAt?: Date;
}

interface DocumentUploadStatusProps {
  documents: DocumentStatus[];
  onPreview?: (file: File) => void;
  onRemove?: (documentId: string) => void;
  className?: string;
}

const DocumentUploadStatus: React.FC<DocumentUploadStatusProps> = ({
  documents,
  onPreview,
  onRemove,
  className = ''
}) => {
  const getStatusIcon = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'uploading':
        return <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />;
      case 'idle':
      default:
        return <div className="w-5 h-5 border-2 border-white/30 rounded-full" />;
    }
  };

  const getStatusText = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'success':
        return 'Uploaded successfully';
      case 'error':
        return 'Upload failed';
      case 'uploading':
        return 'Uploading...';
      case 'idle':
      default:
        return 'Not uploaded';
    }
  };

  const getStatusColor = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'uploading':
        return 'text-blue-400';
      case 'idle':
      default:
        return 'text-white/60';
    }
  };

  const getDocumentTypeIcon = (name: string) => {
    if (name.toLowerCase().includes('registration')) {
      return <FileText className="w-4 h-4 text-blue-400" />;
    } else if (name.toLowerCase().includes('roadworthy')) {
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    } else if (name.toLowerCase().includes('insurance')) {
      return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    }
    return <FileText className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-white/90 font-medium flex items-center">
          <Upload className="w-5 h-5 mr-2" />
          Document Upload Status
        </h4>
        <div className="text-sm text-white/60">
          {documents.filter(d => d.status === 'success').length} of {documents.length} uploaded
        </div>
      </div>

      <div className="space-y-3">
        {documents.map((document) => (
          <div
            key={document.id}
            className={`p-4 rounded-lg border transition-all ${
              document.status === 'success'
                ? 'bg-green-500/10 border-green-500/20'
                : document.status === 'error'
                ? 'bg-red-500/10 border-red-500/20'
                : document.status === 'uploading'
                ? 'bg-blue-500/10 border-blue-500/20'
                : 'bg-white/5 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getDocumentTypeIcon(document.name)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white/90 truncate">
                    {document.name}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    {getStatusIcon(document.status)}
                    <span className={`text-xs ${getStatusColor(document.status)}`}>
                      {getStatusText(document.status)}
                    </span>
                  </div>
                  {document.error && (
                    <p className="text-xs text-red-400 mt-1">{document.error}</p>
                  )}
                  {document.file && (
                    <p className="text-xs text-white/60 mt-1">
                      {(document.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {document.status === 'success' && document.file && onPreview && (
                  <button
                    onClick={() => onPreview(document.file!)}
                    className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                    title="Preview document"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
                {document.status !== 'uploading' && onRemove && (
                  <button
                    onClick={() => onRemove(document.id)}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors"
                    title="Remove document"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {document.status === 'uploading' && document.progress !== undefined && (
              <div className="mt-3">
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${document.progress}%` }}
                  />
                </div>
                <p className="text-xs text-white/60 mt-1">
                  {document.progress}% complete
                </p>
              </div>
            )}

            {document.uploadedAt && (
              <p className="text-xs text-white/50 mt-2">
                Uploaded at {document.uploadedAt.toLocaleTimeString()}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white/5 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-green-400">
              {documents.filter(d => d.status === 'success').length}
            </div>
            <div className="text-xs text-white/60">Completed</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-blue-400">
              {documents.filter(d => d.status === 'uploading').length}
            </div>
            <div className="text-xs text-white/60">Uploading</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-red-400">
              {documents.filter(d => d.status === 'error').length}
            </div>
            <div className="text-xs text-white/60">Failed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadStatus;

