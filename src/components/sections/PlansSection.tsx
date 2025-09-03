import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { getTranslation } from "@/translations";

const plansData = [
  {
    name: {
      'pt-BR': "StartUp",
      'en-US': "StartUp"
    },
    hours: {
      'pt-BR': "20h/mês",
      'en-US': "20h/month"
    },
    priceInBRL: 2990,
    description: {
      'pt-BR': "Ideal para testar nosso modelo",
      'en-US': "Ideal for testing our model"
    },
    icon: Zap,
    features: {
      'pt-BR': [
        "Analista/Desenvolvedor",
        "Entrega técnica do produto",
        "Traduz as necessidades em software funcionando",
        "Construindo e evoluindo o produto",
        "1 relatório mensal (Resumo de Entregas do Mês)",
        "1 reunião mensal de 1h com Ata, Plano de Ação e Registro de Decisões Técnicas"
      ],
      'en-US': [
        "Analyst/Developer",
        "Technical product delivery",
        "Translates needs into working software",
        "Building and evolving the product",
        "1 monthly report (Monthly Deliveries Summary)",
        "1 monthly 1h meeting with Minutes, Action Plan and Technical Decisions Record"
      ]
    },
    popular: false,
    color: "border-border"
  },
  {
    name: {
      'pt-BR': "Business",
      'en-US': "Business"
    },
    hours: {
      'pt-BR': "40h/mês",
      'en-US': "40h/month"
    },
    priceInBRL: 5180,
    description: {
      'pt-BR': "Para backlog constante",
      'en-US': "For constant backlog"
    },
    icon: Star,
    features: {
      'pt-BR': [
        "Analista/Desenvolvedor",
        "Entrega técnica do produto",
        "Traduz as necessidades em software funcionando",
        "Construindo e evoluindo o produto",
        "1 relatório mensal (Resumo de Entregas do Mês)",
        "1 reunião mensal de 1h com Ata, Plano de Ação e Registro de Decisões Técnicas",
        "QA/DevOps/UX-UI: Qualidade, operação e experiência do usuário",
        "Garantem que o produto seja confiável, fácil de usar e esteja sempre disponível em produção"
      ],
      'en-US': [
        "Analyst/Developer",
        "Technical product delivery",
        "Translates needs into working software",
        "Building and evolving the product",
        "1 monthly report (Monthly Deliveries Summary)",
        "1 monthly 1h meeting with Minutes, Action Plan and Technical Decisions Record",
        "QA/DevOps/UX-UI: Quality, operation and user experience",
        "Ensures the product is reliable, easy to use and always available in production"
      ]
    },
    popular: true,
    color: "border-primary shadow-glow"
  },
  {
    name: {
      'pt-BR': "Advanced",
      'en-US': "Advanced"
    },
    hours: {
      'pt-BR': "80h/mês",
      'en-US': "80h/month"
    },
    priceInBRL: 9600,
    description: {
      'pt-BR': "Para operações críticas",
      'en-US': "For critical operations"
    },
    icon: Crown,
    features: {
      'pt-BR': [
        "2 relatórios mensais (Tarefas Concluídas e em Andamento, Resumo de Entregas, Evolução do Roadmap)",
        "2 reuniões mensais de 1h (Ata, Decisões Técnicas, Atualização de Cronograma)",
        "Analista/Desenvolvedor: Entrega técnica do produto",
        "Traduz as necessidades em software funcionando, construindo e evoluindo o produto",
        "QA/DevOps/UX-UI: Qualidade, operação e experiência do usuário",
        "Garantem que o produto seja confiável, fácil de usar e esteja sempre disponível em produção",
        "Scrum Master/Product Owner: Direciona valor e priorização",
        "Faz o time trabalhar de forma ágil e sem bloqueios, mantendo foco e organização",
        "Define prioridades e direciona o que gera mais valor para o negócio"
      ],
      'en-US': [
        "2 monthly reports (Completed and In Progress Tasks, Deliveries Summary, Roadmap Evolution)",
        "2 monthly 1h meetings (Minutes, Technical Decisions, Schedule Update)",
        "Analyst/Developer: Technical product delivery",
        "Translates needs into working software, building and evolving the product",
        "QA/DevOps/UX-UI: Quality, operation and user experience",
        "Ensures the product is reliable, easy to use and always available in production",
        "Scrum Master/Product Owner: Directs value and prioritization",
        "Makes the team work agile and without blockers, maintaining focus and organization",
        "Defines priorities and directs what generates more value for the business"
      ]
    },
    popular: false,
    color: "border-primary-glow"
  }
];

const PlansSection = () => {
  const { currentLocale, formatPrice } = useLocaleContext();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.', '_blank');
  };

  return (
    <section id="plans" className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            {getTranslation('plansTitle', currentLocale)} <span className="text-primary">{getTranslation('plansTitleHighlight', currentLocale)}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {getTranslation('plansSubtitle', currentLocale)}
          </p>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">
              {getTranslation('slaText', currentLocale)}
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plansData.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative p-4 sm:p-6 lg:p-8 bg-card rounded-2xl border-2 ${plan.color} hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-accent text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-premium">
                      {getTranslation('popular', currentLocale)}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground mb-2 leading-tight">
                    {plan.name[currentLocale]}
                  </h3>
                  
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {formatPrice(plan.priceInBRL)}
                  </div>
                  
                  <div className="text-sm sm:text-base lg:text-lg font-medium text-primary-glow mb-2">
                    {plan.hours[currentLocale]}
                  </div>
                  
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {plan.description[currentLocale]}
                  </p>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features[currentLocale].map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  variant={plan.popular ? "hero" : "outline-premium"}
                  className="w-full text-sm sm:text-base"
                  onClick={handleWhatsAppClick}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    {plan.popular ? `${getTranslation('choose', currentLocale)} Business` : `${getTranslation('choose', currentLocale)} ${plan.name[currentLocale]}`}
                  </span>
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium text-sm sm:text-base leading-relaxed">
              <strong>{getTranslation('flexibility', currentLocale)}</strong> {getTranslation('flexibilityText', currentLocale)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;