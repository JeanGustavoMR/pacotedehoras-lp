import { AlertTriangle, DollarSign, Clock, UserX, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fila de bugs e evoluções que nunca saem do backlog",
    description: "Acúmulo infinito de tarefas técnicas que travam o crescimento"
  },
  {
    icon: DollarSign,
    title: "CLT caro (salário + encargos + turnover)",
    description: "Custos fixos altos mesmo em períodos de menor demanda"
  },
  {
    icon: Clock,
    title: "Demandas imprevisíveis (meses tranquilos vs. picos caóticos)",
    description: "Oscilação entre sobrecarga e ociosidade da equipe"
  },
  {
    icon: UserX,
    title: "Freelancers sem compromisso → atrasos, retrabalho e prejuízo",
    description: "Falta de responsabilidade e qualidade inconsistente"
  },
  {
    icon: BarChart3,
    title: "Zero governança → ninguém sabe quanto gasta nem quando entrega",
    description: "Falta de transparência e controle sobre projetos"
  }
];

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-20 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            As dores que <span className="text-primary">travam seu negócio</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Problemas comuns que impedem sua empresa de crescer e gerar os resultados esperados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
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
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-6 py-3 rounded-full font-medium">
            <AlertTriangle className="w-5 h-5" />
            Reconhece esses problemas no seu negócio?
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;