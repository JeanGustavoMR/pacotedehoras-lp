import { AlertTriangle, DollarSign, Clock, UserX, BarChart3 } from "lucide-react";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const problemsData = [
  {
    icon: AlertTriangle,
    titleKey: 'problem1Title',
    descriptionKey: 'problem1Description'
  },
  {
    icon: DollarSign,
    titleKey: 'problem2Title',
    descriptionKey: 'problem2Description'
  },
  {
    icon: Clock,
    titleKey: 'problem3Title',
    descriptionKey: 'problem3Description'
  },
  {
    icon: UserX,
    titleKey: 'problem4Title',
    descriptionKey: 'problem4Description'
  },
  {
    icon: BarChart3,
    titleKey: 'problem5Title',
    descriptionKey: 'problem5Description'
  }
];

const ProblemsSection = () => {
  const { currentLocale } = useLocaleContext();

  return (
    <section id="problems" className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            {getTranslation('problemsTitle', currentLocale).split('travam seu negócio')[0]}
            <span className="text-primary">{getTranslation('problemsTitle', currentLocale).includes('travam seu negócio') ? 'travam seu negócio' : 'hinder your business'}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {getTranslation('problemsSubtitle', currentLocale)}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsData.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-card-premium hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {getTranslation(problem.titleKey, currentLocale)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {getTranslation(problem.descriptionKey, currentLocale)}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-6 py-3 rounded-full font-medium">
            <AlertTriangle className="w-5 h-5" />
            {getTranslation('problemsCTA', currentLocale)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;