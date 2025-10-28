import React, { useState } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
  className = ''
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇿🇦' },
    { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', flag: '🇿🇦' },
    { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', flag: '🇿🇦' },
    { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦' }
  ];

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 text-shadow-sm"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm text-shadow-sm">{currentLanguage.nativeName}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50 relative">
          {/* Enhanced readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-inherit pointer-events-none" />
          <div className="py-2 relative z-10">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-white/20 transition-colors text-shadow-sm ${
                  selectedLanguage === language.code ? 'bg-white/20' : ''
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div>
                  <div className="text-white text-sm font-medium text-shadow-sm">{language.nativeName}</div>
                  <div className="text-white/70 text-xs text-shadow-sm">{language.name}</div>
                </div>
                {selectedLanguage === language.code && (
                  <span className="ml-auto text-green-400 text-shadow-sm">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
