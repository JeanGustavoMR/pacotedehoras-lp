import { Button } from "@/components/ui/button";
import { Shield, Clock, TrendingUp } from "lucide-react";
import jeanImage from "/Jean.png";
import soaresImage from "/Soares.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541998243692?text=Vim%20através%20do%20Site%20e%20quero%20minha%20consultoria%20Gratuita.', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-start gap-3 mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow mt-1 animate-float" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Seu Seguro de{" "}
                  <span className="text-primary-glow">Tecnologia</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-primary-glow mb-4">
                  Plano de Atendimento Dedicado com SLA Garantido
                </p>
              </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-gray-200">
              Flexibilidade, previsibilidade e resposta rápida para manter seu produto sempre no ar
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl mb-10 text-gray-300">
              Cansado de bugs eternos no backlog, freelas que somem e custos altíssimos com CLT? 
              Com nosso <strong className="text-primary-glow">Plano de Atendimento Dedicado</strong>, você garante 
              capacidade pré-reservada, com <strong className="text-white">SLA de até 24h úteis</strong> e 
              até <strong className="text-primary-glow">40% menos custo</strong> do que manter dev fixo.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow" />
                <span className="font-semibold text-sm sm:text-base">SLA 24h úteis</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow" />
                <span className="font-semibold text-sm sm:text-base">40% menos custos</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary-glow" />
                <span className="font-semibold text-sm sm:text-base">Capacidade garantida</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="hero" 
                className="text-base sm:text-lg"
                onClick={handleWhatsAppClick}
              >
                Quero Garantir Minha Consultoria Gratuita
              </Button>
              <Button 
                size="xl" 
                variant="outline-premium" 
                className="text-base sm:text-lg"
                onClick={handleWhatsAppClick}
              >
                Ver Planos
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Fotos do Jean e Soares */}
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-2xl shadow-premium bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Foto do Jean */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={jeanImage} 
                        alt="Jean - CEO"
                        className="w-full h-48 sm:h-56 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="font-bold text-sm sm:text-base">Jean</h3>
                        <p className="text-xs sm:text-sm opacity-90">CEO</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Foto do Soares */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={soaresImage} 
                        alt="Soares - CTO"
                        className="w-full h-48 sm:h-56 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <h3 className="font-bold text-sm sm:text-base">Soares</h3>
                        <p className="text-xs sm:text-sm opacity-90">CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Texto central */}
                <div className="mt-6 text-center">
                  <p className="text-white/90 text-sm sm:text-base font-medium">
                    Especialistas em Tecnologia
                  </p>
                  <p className="text-primary-glow text-xs sm:text-sm mt-1">
                    +8 anos de experiência
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 animate-float">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary-glow">24h</div>
                <div className="text-xs sm:text-sm text-gray-300">SLA Garantido</div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary-glow">40%</div>
                <div className="text-xs sm:text-sm text-gray-300">Economia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;