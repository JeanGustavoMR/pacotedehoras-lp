import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Shield, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-premium-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="TechHours Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold">
                TechHours
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Seu seguro de tecnologia com pacote de horas e SLA garantido. 
              Flexibilidade, previsibilidade e resposta rápida para manter seu produto sempre no ar.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary-glow" />
                <span>SLA 24h úteis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-primary-glow" />
                <span>40% menos custos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary-glow" />
                <span>Capacidade garantida</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Consultoria Gratuita
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-glow">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Problemas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solução
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Resultados
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-glow">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-300 text-sm">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 text-sm">contato@techhours.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Horário</p>
                  <p className="text-gray-300 text-sm">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-gray-300 text-sm">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 TechHours. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Voltar ao Topo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
