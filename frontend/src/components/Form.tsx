import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { cn } from '../utils/cn';

export interface FormField {
  name: string;
  value: any;
  error?: string;
  touched: boolean;
}

export interface FormState {
  fields: Record<string, FormField>;
  isValid: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
}

type FormAction =
  | { type: 'SET_FIELD_VALUE'; payload: { name: string; value: any } }
  | { type: 'SET_FIELD_ERROR'; payload: { name: string; error: string } }
  | { type: 'CLEAR_FIELD_ERROR'; payload: { name: string } }
  | { type: 'TOUCH_FIELD'; payload: { name: string } }
  | { type: 'SET_SUBMITTING'; payload: boolean }
  | { type: 'RESET_FORM' }
  | { type: 'SET_FORM_DATA'; payload: Record<string, any> };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: {
            ...state.fields[action.payload.name],
            value: action.payload.value,
            touched: true,
          },
        },
        isDirty: true,
      };
    case 'SET_FIELD_ERROR':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: {
            ...state.fields[action.payload.name],
            error: action.payload.error,
          },
        },
      };
    case 'CLEAR_FIELD_ERROR':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: {
            ...state.fields[action.payload.name],
            error: undefined,
          },
        },
      };
    case 'TOUCH_FIELD':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: {
            ...state.fields[action.payload.name],
            touched: true,
          },
        },
      };
    case 'SET_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case 'RESET_FORM':
      return {
        fields: {},
        isValid: true,
        isSubmitting: false,
        isDirty: false,
      };
    case 'SET_FORM_DATA': {
      const fields: Record<string, FormField> = {};
      Object.entries(action.payload).forEach(([name, value]) => {
        fields[name] = {
          name,
          value,
          touched: false,
        };
      });
      return {
        ...state,
        fields,
        isDirty: false,
      };
    }
    default:
      return state;
  }
};

interface FormContextType {
  state: FormState;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
  clearFieldError: (name: string) => void;
  touchField: (name: string) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
  getFieldValue: (name: string) => any;
  getFieldError: (name: string) => string | undefined;
  isFieldTouched: (name: string) => boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

interface FormProps {
  children: React.ReactNode;
  initialValues?: Record<string, any>;
  onSubmit: (values: Record<string, any>) => Promise<void> | void;
  validationSchema?: (values: Record<string, any>) => Record<string, string>;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  children,
  initialValues = {},
  onSubmit,
  validationSchema,
  className,
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    fields: {},
    isValid: true,
    isSubmitting: false,
    isDirty: false,
  });

  const setFieldValue = useCallback((name: string, value: any) => {
    dispatch({ type: 'SET_FIELD_VALUE', payload: { name, value } });
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    dispatch({ type: 'SET_FIELD_ERROR', payload: { name, error } });
  }, []);

  const clearFieldError = useCallback((name: string) => {
    dispatch({ type: 'CLEAR_FIELD_ERROR', payload: { name } });
  }, []);

  const touchField = useCallback((name: string) => {
    dispatch({ type: 'TOUCH_FIELD', payload: { name } });
  }, []);

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    dispatch({ type: 'SET_SUBMITTING', payload: isSubmitting });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({ type: 'RESET_FORM' });
  }, []);

  const getFieldValue = useCallback((name: string) => {
    return state.fields[name]?.value;
  }, [state.fields]);

  const getFieldError = useCallback((name: string) => {
    return state.fields[name]?.error;
  }, [state.fields]);

  const isFieldTouched = useCallback((name: string) => {
    return state.fields[name]?.touched || false;
  }, [state.fields]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (state.isSubmitting) return;

    setSubmitting(true);

    try {
      // Get current values
      const values: Record<string, any> = {};
      Object.entries(state.fields).forEach(([name, field]) => {
        values[name] = field.value;
      });

      // Validate if schema provided
      if (validationSchema) {
        const errors = validationSchema(values);
        const hasErrors = Object.keys(errors).length > 0;
        
        if (hasErrors) {
          Object.entries(errors).forEach(([name, error]) => {
            setFieldError(name, error);
          });
          setSubmitting(false);
          return;
        }
      }

      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Initialize form with initial values
  React.useEffect(() => {
    if (Object.keys(initialValues).length > 0) {
      dispatch({ type: 'SET_FORM_DATA', payload: initialValues });
    }
  }, [initialValues]);

  const contextValue: FormContextType = {
    state,
    setFieldValue,
    setFieldError,
    clearFieldError,
    touchField,
    setSubmitting,
    resetForm,
    getFieldValue,
    getFieldError,
    isFieldTouched,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

// Form Field component
interface FormFieldProps {
  name: string;
  children: (field: {
    value: any;
    error?: string;
    touched: boolean;
    setValue: (value: any) => void;
    setError: (error: string) => void;
    clearError: () => void;
    touch: () => void;
  }) => React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const { getFieldValue, getFieldError, isFieldTouched, setFieldValue, setFieldError, clearFieldError, touchField } = useForm();

  const field = {
    value: getFieldValue(name),
    error: getFieldError(name),
    touched: isFieldTouched(name),
    setValue: (value: any) => setFieldValue(name, value),
    setError: (error: string) => setFieldError(name, error),
    clearError: () => clearFieldError(name),
    touch: () => touchField(name),
  };

  return <>{children(field)}</>;
};

// Form Submit Button
interface FormSubmitProps {
  children: React.ReactNode;
  className?: string;
}

export const FormSubmit: React.FC<FormSubmitProps> = ({ children, className }) => {
  const { state } = useForm();

  return (
    <button
      type="submit"
      disabled={state.isSubmitting || !state.isValid}
      className={cn(
        'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    >
      {state.isSubmitting ? 'Submitting...' : children}
    </button>
  );
};
