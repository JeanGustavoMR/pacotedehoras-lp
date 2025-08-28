import { TrendingUp, Clock, Users, Award } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    stat: "40%",
    label: "menos custos vs. contratação fixa",
    description: "Economia comprovada em relação a CLT tradicional"
  },
  {
    icon: Clock,
    stat: "24h",
    label: "úteis para bugs críticos",
    description: "SLA garantido para situações emergenciais"
  },
  {
    icon: Users,
    stat: "20h → 80h+",
    label: "clientes que escalam em 6 meses",
    description: "Crescimento orgânico conforme necessidade"
  },
  {
    icon: Award,
    stat: "80%",
    label: "de retenção em 12 meses",
    description: "Modelo previsível e 'sticky' que funciona"
  }
];

const testimonials = [
  {
    quote: "Depois de 3 freelancers que sumiram no meio do projeto, encontrei a previsibilidade que minha startup precisava. SLA cumprido religiosamente.",
    author: "Carlos Silva",
    role: "CEO, StartupTech",
    plan: "Business (40h/mês)"
  },
  {
    quote: "Conseguimos manter nosso produto estável e ainda desenvolver novas features. O custo mensal é fixo e muito abaixo do que gastaríamos com CLT.",
    author: "Ana Costa", 
    role: "CTO, E-commerce Plus",
    plan: "Advanced (80h/mês)"
  },
  {
    quote: "Começamos testando com 20h e em 4 meses já estávamos no plano de 80h. O dashboard me dá controle total sobre o que está sendo feito.",
    author: "Roberto Lima",
    role: "Founder, FinTech Pro", 
    plan: "Escalou de StartUp para Advanced"
  }
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 lg:py-32 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-8.8-7.2-16-16-16v32c8.8 0 16-7.2 16-16z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Resultados que <span className="text-primary-glow">Entregamos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Números reais de clientes que transformaram sua operação de tecnologia
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-glow" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">
                  {result.stat}
                </div>
                
                <div className="text-lg font-semibold mb-3 text-white">
                  {result.label}
                </div>
                
                <p className="text-gray-300 text-sm">
                  {result.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white">
            O que nossos <span className="text-primary-glow">clientes dizem</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    {testimonial.role}
                  </div>
                  <div className="text-primary-glow text-sm font-medium">
                    {testimonial.plan}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-primary/20 border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Faça parte desses resultados
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a centenas de empresas que já transformaram sua operação de tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-primary-glow font-semibold">
                As horas são limitadas por mês
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;