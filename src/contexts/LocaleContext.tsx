import React, { createContext, useContext, ReactNode } from 'react';
import { useLocale, type Locale } from '@/hooks/use-locale';

interface LocaleContextType {
  currentLocale: Locale;
  changeLocale: (locale: Locale) => void;
  formatPrice: (priceInBRL: number) => string;
  getCurrentConfig: () => any;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }
  return context;
};

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const localeData = useLocale();

  return (
    <LocaleContext.Provider value={localeData}>
      {children}
    </LocaleContext.Provider>
  );
};
