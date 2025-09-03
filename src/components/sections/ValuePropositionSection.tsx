import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const ValuePropositionSection = () => {
  const { currentLocale } = useLocaleContext();

  const benefits = [
    'valueBenefit1',
    'valueBenefit2', 
    'valueBenefit3'
  ];

  const features = [
    {
      icon: Clock,
      titleKey: 'valueFeature1Title',
      descriptionKey: 'valueFeature1Description'
    },
    {
      icon: Shield,
      titleKey: 'valueFeature2Title',
      descriptionKey: 'valueFeature2Description'
    },
    {
      icon: Zap,
      titleKey: 'valueFeature3Title',
      descriptionKey: 'valueFeature3Description'
    },
    {
      icon: CheckCircle,
      titleKey: 'valueFeature4Title',
      descriptionKey: 'valueFeature4Description'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.', '_blank');
  };

  return (
    <section id="value" className="py-20 lg:py-32 bg-premium-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            {getTranslation('valueTitle', currentLocale).split('Proposta de Valor')[0]}
            <span className="text-primary-glow">{getTranslation('valueTitle', currentLocale).includes('Proposta de Valor') ? 'Proposta de Valor' : 'Value Proposition'}</span>
          </h2>
          
          {/* Main Value Prop */}
          <div className="bg-gradient-accent rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-premium max-w-4xl mx-auto mb-8 sm:mb-12">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center leading-tight">
              {getTranslation('valueMainQuote', currentLocale)}
            </blockquote>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {benefits.map((benefitKey, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg text-center leading-tight">
                  {getTranslation(benefitKey, currentLocale)}
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-glow px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              {getTranslation('valueSavings', currentLocale)}
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-white leading-tight">
                  {getTranslation(feature.titleKey, currentLocale)}
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {getTranslation(feature.descriptionKey, currentLocale)}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button 
            size="xl" 
            variant="hero" 
            className="text-sm sm:text-base lg:text-lg w-full sm:w-auto"
            onClick={handleWhatsAppClick}
          >
            <span className="whitespace-normal sm:whitespace-nowrap">
              {getTranslation('valueCTA', currentLocale)}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;