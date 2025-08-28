import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

const ValuePropositionSection = () => {
  const benefits = [
    "Mais barato que CLT",
    "Mais confiável que freelancer", 
    "Mais rápido que seu time interno"
  ];

  const features = [
    {
      icon: Clock,
      title: "Planos de 20h, 40h ou 80h/mês",
      description: "Flexibilidade para diferentes necessidades"
    },
    {
      icon: Shield,
      title: "SLA garantido de até 24h úteis",
      description: "Resposta rápida quando você mais precisa"
    },
    {
      icon: Zap,
      title: "Dashboard em tempo real de consumo",
      description: "Transparência total sobre utilização"
    },
    {
      icon: CheckCircle,
      title: "Rollover de horas (limitado)",
      description: "Flexibilidade para usar suas horas"
    }
  ];

  return (
    <section id="value" className="py-20 lg:py-32 bg-premium-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Nossa <span className="text-primary-glow">Proposta de Valor</span>
          </h2>
          
          {/* Main Value Prop */}
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 shadow-premium max-w-4xl mx-auto mb-12">
            <blockquote className="text-2xl lg:text-4xl font-bold text-center">
              "Mais barato que CLT. Mais confiável que freelancer. 
              Mais rápido que seu time interno."
            </blockquote>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-6 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary-glow" />
                <span className="font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-glow px-6 py-3 rounded-full font-semibold text-lg">
              <Zap className="w-5 h-5" />
              Economia média de 40%
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-glow" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="xl" variant="hero" className="text-lg">
            Descobrir Qual Plano é Ideal Para Mim
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;