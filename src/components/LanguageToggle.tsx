import { Globe, ChevronDown } from "lucide-react";
import { useLocaleContext, type Locale } from "@/contexts/LocaleContext";
import { useState, useRef, useEffect } from "react";

const LanguageToggle = () => {
  const { currentLocale, changeLocale, isLoading } = useLocaleContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt-BR' as Locale, name: 'Português', flag: '🇧🇷' },
    { code: 'en-US' as Locale, name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    changeLocale(locale);
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm font-medium border border-white/20 hover:border-white/30 shadow-sm hover:shadow-md"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="inline sm:hidden">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline lg:hidden">{currentLanguage?.flag}</span>
        <span className="hidden lg:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 sm:mt-3 w-40 sm:w-44 lg:w-52 bg-white/95 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3.5 text-left hover:bg-primary/10 transition-all duration-200 ${
                currentLocale === language.code ? 'bg-primary/5 text-primary font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span className="text-base sm:text-lg">{language.flag}</span>
              <span className="font-medium text-xs sm:text-sm lg:text-base">{language.name}</span>
              {currentLocale === language.code && (
                <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
