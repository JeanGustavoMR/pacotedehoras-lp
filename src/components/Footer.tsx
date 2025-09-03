import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Shield, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const Footer = () => {
  const { currentLocale } = useLocaleContext();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-premium-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src={logo} 
                alt="TechHours Logo" 
                className="h-8 sm:h-10 w-auto"
              />
              <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold">
                TechHours
              </span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              {getTranslation('footerDescription', currentLocale)}
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary-glow flex-shrink-0" />
                <span>{getTranslation('sla24h', currentLocale)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary-glow flex-shrink-0" />
                <span>{getTranslation('cost40', currentLocale)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-glow flex-shrink-0" />
                <span>{getTranslation('guaranteedCapacity', currentLocale)}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-sm sm:text-base w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.', '_blank')}
            >
              <span className="whitespace-normal sm:whitespace-nowrap">
                {getTranslation('freeConsultation', currentLocale)}
              </span>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-primary-glow">
              {getTranslation('navigation', currentLocale)}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {getTranslation('problems', currentLocale)}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {getTranslation('solution', currentLocale)}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {getTranslation('plans', currentLocale)}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {getTranslation('howItWorks', currentLocale)}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {getTranslation('results', currentLocale)}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-primary-glow">
              {getTranslation('contact', currentLocale)}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">{getTranslation('phone', currentLocale)}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">{getTranslation('email', currentLocale)}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">contato@techhours.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">{getTranslation('schedule', currentLocale)}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">{getTranslation('location', currentLocale)}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 TechHours. {getTranslation('footerRights', currentLocale)}.
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button 
                onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {getTranslation('privacyPolicy', currentLocale)}
              </button>
              <button 
                onClick={() => document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {getTranslation('termsOfUse', currentLocale)}
              </button>
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {getTranslation('backToTop', currentLocale)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
