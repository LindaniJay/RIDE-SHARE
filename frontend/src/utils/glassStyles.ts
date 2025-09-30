// Glass styling utility functions for consistent form elements

export const glassStyles = {
  // Input field styles
  input: 'w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 hover:border-white/30',
  
  // Select dropdown styles
  select: 'w-full px-4 py-3 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 hover:border-white/30',
  
  // Textarea styles
  textarea: 'w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 hover:border-white/30 resize-none',
  
  // Label styles
  label: 'block text-sm font-medium text-white/90 mb-2',
  
  // Error states
  inputError: 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-500/50',
  selectError: 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-500/50',
  textareaError: 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-500/50',
  
  // Success states
  inputSuccess: 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-500/50',
  selectSuccess: 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-500/50',
  textareaSuccess: 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-500/50',
  
  // Error text
  errorText: 'mt-2 text-sm text-red-400',
  
  // Helper text
  helperText: 'mt-2 text-sm text-white/60',
  
  // Required indicator
  required: 'text-red-400 ml-1',
  
  // Disabled state
  disabled: 'opacity-50 cursor-not-allowed',
};

// Helper function to combine base styles with variants
export const getGlassStyles = (
  baseType: 'input' | 'select' | 'textarea',
  variant?: 'error' | 'success',
  disabled?: boolean
) => {
  const base = glassStyles[baseType];
  const variantStyle = variant ? (glassStyles as any)[`${baseType}${variant.charAt(0).toUpperCase() + variant.slice(1)}`] : '';
  const disabledStyle = disabled ? glassStyles.disabled : '';
  
  return [base, variantStyle, disabledStyle].filter(Boolean).join(' ');
};

// Option styles for select elements
export const optionStyles = 'bg-gray-800 text-white';

// Common form element classes
export const formClasses = {
  input: glassStyles.input,
  select: glassStyles.select,
  textarea: glassStyles.textarea,
  label: glassStyles.label,
  errorText: glassStyles.errorText,
  helperText: glassStyles.helperText,
  required: glassStyles.required,
  disabled: glassStyles.disabled,
  option: optionStyles,
};
