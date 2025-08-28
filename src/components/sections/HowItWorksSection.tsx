import { Calendar, Ticket, Code, BarChart } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Reserva de horas",
    subtitle: "capacidade garantida",
    description: "Escolha seu plano e garanta horas mensais dedicadas exclusivamente ao seu projeto. Sem surpresas, sem filas de espera."
  },
  {
    number: "2", 
    icon: Ticket,
    title: "Abertura de tickets",
    subtitle: "SLA até 24h úteis",
    description: "Abra tickets para bugs, evoluções ou melhorias. Nossa equipe sênior analisa e responde dentro do SLA garantido."
  },
  {
    number: "3",
    icon: Code,
    title: "Execução ágil",
    subtitle: "devs sênior validando rápido",
    description: "Desenvolvemos com qualidade, seguindo boas práticas. Code review obrigatório em todas as entregas."
  },
  {
    number: "4",
    icon: BarChart,
    title: "Transparência total", 
    subtitle: "relatórios + dashboard",
    description: "Acompanhe consumo de horas, status dos tickets e métricas de desempenho em tempo real pelo dashboard."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Como Funciona <span className="text-primary">(simples e direto)</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo otimizado para garantir agilidade, qualidade e transparência em cada etapa
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 p-6 bg-card rounded-xl shadow-card-premium hover:shadow-premium transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Visual Flow */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-premium">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Fluxo Otimizado
                </h3>
                <p className="text-muted-foreground">
                  Da necessidade à entrega, tudo transparente
                </p>
              </div>
              
              {/* Flow Diagram */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-4"></div>
                  <div className="text-sm text-muted-foreground">Reserva</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-4"></div>
                  <div className="text-sm text-muted-foreground">Ticket</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1 h-0.5 bg-primary/20 mx-4"></div>
                  <div className="text-sm text-muted-foreground">Execução</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary-glow rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                    ✓
                  </div>
                  <div className="flex-1 h-0.5 bg-primary mx-4"></div>
                  <div className="text-sm font-medium text-primary">Entrega</div>
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