import { Button } from "@/components/ui/button";
import { Shield, Clock, TrendingUp } from "lucide-react";
import jeanImage from "/Jean.png";
import soaresImage from "/Soares.png";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const HeroSection = () => {
  const { currentLocale, isBrazilian } = useLocaleContext();

  const handleWhatsAppClick = () => {
    const phone = isBrazilian ? '5541998243692' : '15551234567';
    const message = isBrazilian 
      ? 'Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.'
      : 'I%20came%20through%20the%20website%20and%20want%20my%20free%20consultation.';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary-glow mt-1 animate-float flex-shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  {getTranslation('heroMainTitle', currentLocale)}{" "}
                  <span className="text-primary-glow">{getTranslation('heroMainTitleHighlight', currentLocale)}</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-primary-glow mb-3 sm:mb-4 leading-relaxed">
                  {getTranslation('heroSubtitle2', currentLocale)}
                </p>
              </div>
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-gray-200 leading-tight">
              {getTranslation('heroSubtitle', currentLocale)}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-8 sm:mb-10 text-gray-300 leading-relaxed">
              {getTranslation('heroDescription', currentLocale)}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">{getTranslation('sla24h', currentLocale)}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">{getTranslation('cost40', currentLocale)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">{getTranslation('guaranteedCapacity', currentLocale)}</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="xl" 
                variant="hero" 
                className="text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                <span className="whitespace-normal sm:whitespace-nowrap">
                  {getTranslation('ctaButton1', currentLocale)}
                </span>
              </Button>
              <Button 
                size="xl" 
                variant="outline-premium" 
                className="text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                <span className="whitespace-normal sm:whitespace-nowrap">
                  {getTranslation('ctaButton2', currentLocale)}
                </span>
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Fotos do Jean e Soares */}
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-2xl shadow-premium bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {/* Foto do Jean */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={jeanImage} 
                        alt="Jean - CEO"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                        <h3 className="font-bold text-xs sm:text-sm lg:text-base">Jean</h3>
                        <p className="text-xs opacity-90">CEO</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Foto do Soares */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={soaresImage} 
                        alt="Soares - CTO"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                        <h3 className="font-bold text-xs sm:text-sm lg:text-base">Soares</h3>
                        <p className="text-xs opacity-90">CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Texto central */}
                <div className="mt-4 sm:mt-6 text-center">
                  <p className="text-white/90 text-xs sm:text-sm lg:text-base font-medium">
                    {getTranslation('techExperts', currentLocale)}
                  </p>
                  <p className="text-primary-glow text-xs sm:text-sm mt-1">
                    {getTranslation('experience', currentLocale)}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-6 lg:-right-6 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-3 lg:p-4 animate-float">
              <div className="text-center">
                <div className="text-sm sm:text-lg lg:text-2xl font-bold text-primary-glow">24h</div>
                <div className="text-xs sm:text-sm text-gray-300">{getTranslation('slaGuaranteed', currentLocale)}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-6 lg:-left-6 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-3 lg:p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-sm sm:text-lg lg:text-2xl font-bold text-primary-glow">40%</div>
                <div className="text-xs sm:text-sm text-gray-300">{getTranslation('savings', currentLocale)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;