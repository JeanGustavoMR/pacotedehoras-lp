import { Calendar, Ticket, Code, BarChart } from "lucide-react";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const stepsData = [
  {
    number: "1",
    icon: Calendar,
    titleKey: 'step1Title',
    subtitleKey: 'step1Subtitle',
    descriptionKey: 'step1Description'
  },
  {
    number: "2", 
    icon: Ticket,
    titleKey: 'step2Title',
    subtitleKey: 'step2Subtitle',
    descriptionKey: 'step2Description'
  },
  {
    number: "3",
    icon: Code,
    titleKey: 'step3Title',
    subtitleKey: 'step3Subtitle',
    descriptionKey: 'step3Description'
  },
  {
    number: "4",
    icon: BarChart,
    titleKey: 'step4Title',
    subtitleKey: 'step4Subtitle',
    descriptionKey: 'step4Description'
  }
];

const HowItWorksSection = () => {
  const { currentLocale } = useLocaleContext();

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            {getTranslation('howItWorksTitle', currentLocale).split('(simples e direto)')[0]}
            <span className="text-primary">{getTranslation('howItWorksTitle', currentLocale).includes('(simples e direto)') ? '(simples e direto)' : '(simple and direct)'}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getTranslation('howItWorksSubtitle', currentLocale)}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-xl shadow-card-premium hover:shadow-premium transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-card-foreground mb-1 sm:mb-2 leading-tight">
                      {getTranslation(step.titleKey, currentLocale)}
                    </h3>
                    <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      {getTranslation(step.subtitleKey, currentLocale)}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {getTranslation(step.descriptionKey, currentLocale)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Visual Flow */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-premium">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground mb-3 sm:mb-4 leading-tight">
                  {getTranslation('flowTitle', currentLocale)}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {getTranslation('flowDescription', currentLocale)}
                </p>
              </div>
              
              {/* Flow Diagram */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-2 sm:mx-4"></div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{getTranslation('flowStep1', currentLocale)}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-2 sm:mx-4"></div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{getTranslation('flowStep2', currentLocale)}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-2 sm:mx-4"></div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{getTranslation('flowStep3', currentLocale)}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary-glow rounded-full flex items-center justify-center text-white font-bold animate-pulse text-xs sm:text-sm">
                    ✓
                  </div>
                  <div className="flex-1 h-0.5 bg-primary mx-2 sm:mx-4"></div>
                  <div className="text-xs sm:text-sm font-medium text-primary">{getTranslation('flowStep4', currentLocale)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;