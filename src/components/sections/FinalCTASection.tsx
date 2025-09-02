import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight, Clock } from "lucide-react";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const FinalCTASection = () => {
  const { currentLocale, isBrazilian } = useLocaleContext();

  const handleWhatsAppClick = () => {
    const phone = isBrazilian ? '5541998243692' : '15551234567';
    const message = isBrazilian 
      ? 'Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.'
      : 'I%20came%20through%20the%20website%20and%20want%20my%20free%20consultation.';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-32 bg-premium-dark text-white relative overflow-hidden">
      {/* Urgency Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Alert */}
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 animate-pulse">
            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base leading-relaxed">
                {getTranslation('finalCTAUrgency', currentLocale)}
              </span>
            </div>
          </div>
          
          {/* Main CTA */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            {getTranslation('finalCTATitle', currentLocale).split('15 minutos')[0]}
            <span className="text-primary-glow">15 minutos</span>
            {getTranslation('finalCTATitle', currentLocale).split('15 minutos')[1]}
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            {getTranslation('finalCTASubtitle', currentLocale)}
          </p>
          
          {/* Primary CTA Button */}
          <div className="mb-8 sm:mb-12">
            <Button 
              size="xl" 
              variant="hero" 
              className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 shadow-glow animate-float w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                {getTranslation('finalCTAMainButton', currentLocale)}
              </span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
            </Button>
          </div>
          
          {/* Question Hook */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-primary-glow leading-tight">
              {getTranslation('finalCTAQuestion', currentLocale)}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Option 1 */}
              <div className="p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-primary-glow transition-colors leading-tight">
                  {getTranslation('finalCTAOption1Title', currentLocale)}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {getTranslation('finalCTAOption1Description', currentLocale)}
                </p>
              </div>
              
              {/* Option 2 */}
              <div className="p-4 sm:p-6 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/15 transition-all duration-300 cursor-pointer group">
                <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary-glow group-hover:text-white transition-colors leading-tight">
                  {getTranslation('finalCTAOption2Title', currentLocale)}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {getTranslation('finalCTAOption2Description', currentLocale)}
                </p>
              </div>
            </div>
          </div>
          
          {/* Secondary Actions */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              variant="outline-premium" 
              size="lg" 
              className="bg-white/5 backdrop-blur-sm w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="whitespace-normal sm:whitespace-nowrap">
                {getTranslation('finalCTASecondaryButton', currentLocale)}
              </span>
            </Button>
            
            <div className="text-gray-400 text-xs sm:text-sm text-center">
              {getTranslation('finalCTAResponse', currentLocale)}
            </div>
          </div>
          
          {/* Final Guarantee */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="font-medium text-sm sm:text-base">
                {getTranslation('finalCTAGuarantee', currentLocale)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;