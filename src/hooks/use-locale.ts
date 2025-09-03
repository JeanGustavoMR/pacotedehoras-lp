import { useState, useEffect } from 'react';

export type Locale = 'pt-BR' | 'en-US';

interface LocaleConfig {
  locale: Locale;
  currency: string;
  currencySymbol: string;
  exchangeRate: number;
}

const LOCALE_CONFIGS: Record<Locale, LocaleConfig> = {
  'pt-BR': {
    locale: 'pt-BR',
    currency: 'BRL',
    currencySymbol: 'R$',
    exchangeRate: 1
  },
  'en-US': {
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
    exchangeRate: 0.21 // Aproximadamente 1 BRL = 0.21 USD
  }
};

export const useLocale = () => {
  const [currentLocale, setCurrentLocale] = useState<Locale>('pt-BR');
  const [isLoading, setIsLoading] = useState(true);

  // Detectar localização do usuário
  const detectUserLocation = async (): Promise<Locale> => {
    try {
      // Primeiro, tentar usar a API de geolocalização do navegador
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      // Se o país for Brasil, usar português, senão inglês
      if (data.country_code === 'BR') {
        return 'pt-BR';
      } else {
        return 'en-US';
      }
    } catch (error) {
      console.warn('Erro ao detectar localização:', error);
      // Fallback: verificar o idioma do navegador
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      return browserLang.startsWith('pt') ? 'pt-BR' : 'en-US';
    }
  };

  // Converter preço para a moeda local (mantendo valores em Real, apenas alterando símbolo)
  const formatPrice = (priceInBRL: number): string => {
    const config = LOCALE_CONFIGS[currentLocale];
    
    if (currentLocale === 'pt-BR') {
      return `${config.currencySymbol} ${priceInBRL.toLocaleString('pt-BR')}`;
    } else {
      return `${config.currencySymbol}${priceInBRL.toLocaleString('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
      })}`;
    }
  };

  // Mudar localização
  const changeLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale);
    localStorage.setItem('userLocale', newLocale);
  };

  // Obter configuração atual
  const getCurrentConfig = () => LOCALE_CONFIGS[currentLocale];

  useEffect(() => {
    const initializeLocale = async () => {
      setIsLoading(true);
      
      // Verificar se há uma preferência salva
      const savedLocale = localStorage.getItem('userLocale') as Locale;
      
      if (savedLocale && LOCALE_CONFIGS[savedLocale]) {
        setCurrentLocale(savedLocale);
      } else {
        // Detectar automaticamente
        const detectedLocale = await detectUserLocation();
        setCurrentLocale(detectedLocale);
        localStorage.setItem('userLocale', detectedLocale);
      }
      
      setIsLoading(false);
    };

    initializeLocale();
  }, []);

  return {
    currentLocale,
    changeLocale,
    formatPrice,
    getCurrentConfig,
    isLoading
  };
};
