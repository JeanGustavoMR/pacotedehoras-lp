import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "StartUp",
    hours: "20h/mês",
    price: "R$ 2.990",
    description: "Ideal para testar nosso modelo",
    icon: Zap,
    features: [
      "Analista/Desenvolvedor",
      "Entrega técnica do produto",
      "Traduz as necessidades em software funcionando",
      "Construindo e evoluindo o produto",
      "1 relatório mensal (Resumo de Entregas do Mês)",
      "1 reunião mensal de 1h com Ata, Plano de Ação e Registro de Decisões Técnicas"
    ],
    popular: false,
    color: "border-border"
  },
  {
    name: "Business",
    hours: "40h/mês", 
    price: "R$ 5.180",
    description: "Para backlog constante",
    icon: Star,
    features: [
      "Analista/Desenvolvedor",
      "Entrega técnica do produto",
      "Traduz as necessidades em software funcionando",
      "Construindo e evoluindo o produto",
      "1 relatório mensal (Resumo de Entregas do Mês)",
      "1 reunião mensal de 1h com Ata, Plano de Ação e Registro de Decisões Técnicas",
      "QA/DevOps/UX-UI: Qualidade, operação e experiência do usuário",
      "Garantem que o produto seja confiável, fácil de usar e esteja sempre disponível em produção"
    ],
    popular: true,
    color: "border-primary shadow-glow"
  },
  {
    name: "Advanced",
    hours: "80h/mês",
    price: "R$ 9.600", 
    description: "Para operações críticas",
    icon: Crown,
    features: [
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
    popular: false,
    color: "border-primary-glow"
  }
];

const PlansSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.', '_blank');
  };

  return (
    <section id="plans" className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Planos de Atendimento <span className="text-primary">Dedicado</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua necessidade. Flexibilidade total: upgrade/downgrade mensal + hora extra com tarifa fixa.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
            <Star className="w-5 h-5" />
            Todos os planos incluem garantia de SLA
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative p-8 bg-card rounded-2xl border-2 ${plan.color} hover:shadow-premium transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-premium">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  
                  <div className="text-lg font-medium text-primary-glow mb-2">
                    {plan.hours}
                  </div>
                  
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  variant={plan.popular ? "hero" : "outline-premium"}
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  {plan.popular ? "Escolher Business" : `Escolher ${plan.name}`}
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium">
              <strong>Flexibilidade total:</strong> Upgrade/downgrade mensal sem burocracias. 
              Horas extras disponíveis com tarifa fixa transparente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;