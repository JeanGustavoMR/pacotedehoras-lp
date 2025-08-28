import { useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';

const DynamicFavicon = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const faviconPath = isDark ? '/favicon-branco.png' : '/favicon.png';
    
    // Atualizar todos os favicons
    const favicons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    favicons.forEach((favicon) => {
      const link = favicon as HTMLLinkElement;
      link.href = faviconPath;
    });
  }, [isDark]);

  return null;
};

export default DynamicFavicon;
