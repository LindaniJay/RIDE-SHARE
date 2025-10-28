import React, { useState } from 'react';
import GlassInput from './GlassInput';
import GlassDropdown from './GlassDropdown';

const GlassFormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    password: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Glass Form Example</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Input */}
          <GlassInput
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e)}
            placeholder="Enter your full name"
            required
            error={errors.name}
          />

          {/* Email Input */}
          <GlassInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e)}
            placeholder="Enter your email"
            required
            error={errors.email}
          />

          {/* Password Input */}
          <GlassInput
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e)}
            placeholder="Enter your password"
            required
            error={errors.password}
          />

          {/* Dropdown */}
          <GlassDropdown
            label="Role"
            value={formData.role}
            onChange={(value) => handleInputChange('role', value)}
            options={[
              { value: '', label: 'Select a role', icon: 'User' },
              { value: 'admin', label: 'Administrator', icon: 'Shield' },
              { value: 'host', label: 'Host', icon: 'Home' },
              { value: 'renter', label: 'Renter', icon: 'Car' }
            ]}
            required
            error={errors.role}
          />

          {/* Textarea */}
          <div>
            <label className="glass-label">
              Message
              <span className="glass-label-required">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Enter your message"
              rows={4}
              className="glass-textarea"
              required
            />
            {errors.message && (
              <p className="glass-error-text">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default GlassFormExample;
