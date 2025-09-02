import { Locale } from '@/hooks/use-locale';

export interface Translations {
  [key: string]: {
    [key in Locale]: string;
  };
}

export const translations: Translations = {
  // Hero Section
  heroTitle: {
    'pt-BR': 'Seu Seguro de Tecnologia com SLA Garantido',
    'en-US': 'Your Technology Insurance with Guaranteed SLA'
  },
  heroSubtitle: {
    'pt-BR': 'Flexibilidade, previsibilidade e resposta rápida para manter seu produto sempre no ar. Economia de até 40% vs CLT.',
    'en-US': 'Flexibility, predictability and fast response to keep your product always running. Save up to 40% vs full-time employee.'
  },
  heroCTA: {
    'pt-BR': 'Quero minha consultoria gratuita',
    'en-US': 'I want my free consultation'
  },
  heroMainTitle: {
    'pt-BR': 'Seu Seguro de',
    'en-US': 'Your Insurance of'
  },
  heroMainTitleHighlight: {
    'pt-BR': 'Tecnologia',
    'en-US': 'Technology'
  },
  heroSubtitle2: {
    'pt-BR': 'Plano de Atendimento Dedicado com SLA Garantido',
    'en-US': 'Dedicated Service Plan with Guaranteed SLA'
  },
  heroDescription: {
    'pt-BR': 'Cansado de bugs eternos no backlog, freelas que somem e custos altíssimos com CLT? Com nosso Plano de Atendimento Dedicado, você garante capacidade pré-reservada, com SLA de até 24h úteis e até 40% menos custo do que manter dev fixo.',
    'en-US': 'Tired of endless bugs in the backlog, freelancers who disappear and extremely high costs with full-time employees? With our Dedicated Service Plan, you guarantee pre-reserved capacity, with SLA up to 24 business hours and up to 40% less cost than maintaining a fixed developer.'
  },
  sla24h: {
    'pt-BR': 'SLA 24h úteis',
    'en-US': 'SLA 24h business'
  },
  cost40: {
    'pt-BR': '40% menos custos',
    'en-US': '40% less costs'
  },
  guaranteedCapacity: {
    'pt-BR': 'Capacidade garantida',
    'en-US': 'Guaranteed capacity'
  },
  ctaButton1: {
    'pt-BR': 'Quero Garantir Minha Consultoria Gratuita',
    'en-US': 'I Want to Secure My Free Consultation'
  },
  ctaButton2: {
    'pt-BR': 'Ver Planos',
    'en-US': 'View Plans'
  },
  techExperts: {
    'pt-BR': 'Especialistas em Tecnologia',
    'en-US': 'Technology Experts'
  },
  experience: {
    'pt-BR': '+8 anos de experiência',
    'en-US': '+8 years of experience'
  },
  slaGuaranteed: {
    'pt-BR': 'SLA Garantido',
    'en-US': 'SLA Guaranteed'
  },
  savings: {
    'pt-BR': 'Economia',
    'en-US': 'Savings'
  },

  // Plans Section
  plansTitle: {
    'pt-BR': 'Planos de Atendimento',
    'en-US': 'Dedicated Service'
  },
  plansTitleHighlight: {
    'pt-BR': 'Dedicado',
    'en-US': 'Plans'
  },
  plansSubtitle: {
    'pt-BR': 'Escolha o plano ideal para sua necessidade. Flexibilidade total: upgrade/downgrade mensal + hora extra com tarifa fixa.',
    'en-US': 'Choose the ideal plan for your needs. Total flexibility: monthly upgrade/downgrade + extra hours with fixed rate.'
  },
  slaText: {
    'pt-BR': 'Todos os planos incluem garantia de SLA',
    'en-US': 'All plans include SLA guarantee'
  },
  popular: {
    'pt-BR': 'Mais Popular',
    'en-US': 'Most Popular'
  },
  choose: {
    'pt-BR': 'Escolher',
    'en-US': 'Choose'
  },
  flexibility: {
    'pt-BR': 'Flexibilidade total:',
    'en-US': 'Total flexibility:'
  },
  flexibilityText: {
    'pt-BR': 'Upgrade/downgrade mensal sem burocracias. Horas extras disponíveis com tarifa fixa transparente.',
    'en-US': 'Monthly upgrade/downgrade without bureaucracy. Extra hours available with transparent fixed rate.'
  },

  // Value Proposition Section
  valueTitle: {
    'pt-BR': 'Por que escolher nossa consultoria?',
    'en-US': 'Why choose our consulting?'
  },
  valueSubtitle: {
    'pt-BR': 'Oferecemos uma solução completa que combina a flexibilidade do freelancer com a confiabilidade de uma empresa estabelecida.',
    'en-US': 'We offer a complete solution that combines freelancer flexibility with the reliability of an established company.'
  },

  // Problems Section
  problemsTitle: {
    'pt-BR': 'Problemas que resolvemos',
    'en-US': 'Problems we solve'
  },
  problemsSubtitle: {
    'pt-BR': 'Entendemos os desafios que você enfrenta e oferecemos soluções práticas.',
    'en-US': 'We understand the challenges you face and offer practical solutions.'
  },

  // How It Works Section
  howItWorksTitle: {
    'pt-BR': 'Como funciona',
    'en-US': 'How it works'
  },
  howItWorksSubtitle: {
    'pt-BR': 'Processo simples e transparente para começar rapidamente.',
    'en-US': 'Simple and transparent process to get started quickly.'
  },

  // Results Section
  resultsTitle: {
    'pt-BR': 'Resultados que entregamos',
    'en-US': 'Results we deliver'
  },
  resultsSubtitle: {
    'pt-BR': 'Nossos clientes comprovam a eficácia de nossa abordagem.',
    'en-US': 'Our clients prove the effectiveness of our approach.'
  },

  // Final CTA Section
  finalCTATitle: {
    'pt-BR': 'Pronto para transformar sua tecnologia?',
    'en-US': 'Ready to transform your technology?'
  },
  finalCTASubtitle: {
    'pt-BR': 'Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.',
    'en-US': 'Contact us and discover how we can help your business grow.'
  },
  finalCTAButton: {
    'pt-BR': 'Falar com especialista',
    'en-US': 'Talk to specialist'
  },

  // Footer
  footerRights: {
    'pt-BR': 'Todos os direitos reservados',
    'en-US': 'All rights reserved'
  },
  footerDescription: {
    'pt-BR': 'Seu seguro de tecnologia com pacote de horas e SLA garantido. Flexibilidade, previsibilidade e resposta rápida para manter seu produto sempre no ar.',
    'en-US': 'Your technology insurance with hour package and guaranteed SLA. Flexibility, predictability and fast response to keep your product always running.'
  },
  freeConsultation: {
    'pt-BR': 'Consultoria Gratuita',
    'en-US': 'Free Consultation'
  },
  navigation: {
    'pt-BR': 'Navegação',
    'en-US': 'Navigation'
  },
  problems: {
    'pt-BR': 'Problemas',
    'en-US': 'Problems'
  },
  solution: {
    'pt-BR': 'Solução',
    'en-US': 'Solution'
  },
  plans: {
    'pt-BR': 'Planos',
    'en-US': 'Plans'
  },
  howItWorks: {
    'pt-BR': 'Como Funciona',
    'en-US': 'How It Works'
  },
  results: {
    'pt-BR': 'Resultados',
    'en-US': 'Results'
  },
  contact: {
    'pt-BR': 'Contato',
    'en-US': 'Contact'
  },
  phone: {
    'pt-BR': 'Telefone',
    'en-US': 'Phone'
  },
  email: {
    'pt-BR': 'Email',
    'en-US': 'Email'
  },
  schedule: {
    'pt-BR': 'Horário',
    'en-US': 'Schedule'
  },
  location: {
    'pt-BR': 'Localização',
    'en-US': 'Location'
  },
  privacyPolicy: {
    'pt-BR': 'Política de Privacidade',
    'en-US': 'Privacy Policy'
  },
  termsOfUse: {
    'pt-BR': 'Termos de Uso',
    'en-US': 'Terms of Use'
  },
  backToTop: {
    'pt-BR': 'Voltar ao Topo',
    'en-US': 'Back to Top'
  },

  // Problems Section
  problemsTitle: {
    'pt-BR': 'As dores que travam seu negócio',
    'en-US': 'The pains that hinder your business'
  },
  problemsSubtitle: {
    'pt-BR': 'Problemas comuns que impedem sua empresa de crescer e gerar os resultados esperados',
    'en-US': 'Common problems that prevent your company from growing and generating expected results'
  },
  problem1Title: {
    'pt-BR': 'Fila de bugs e evoluções que nunca saem do backlog',
    'en-US': 'Queue of bugs and evolutions that never leave the backlog'
  },
  problem1Description: {
    'pt-BR': 'Acúmulo infinito de tarefas técnicas que travam o crescimento',
    'en-US': 'Infinite accumulation of technical tasks that hinder growth'
  },
  problem2Title: {
    'pt-BR': 'CLT caro (salário + encargos + turnover)',
    'en-US': 'Expensive full-time employee (salary + charges + turnover)'
  },
  problem2Description: {
    'pt-BR': 'Custos fixos altos mesmo em períodos de menor demanda',
    'en-US': 'High fixed costs even in periods of lower demand'
  },
  problem3Title: {
    'pt-BR': 'Demandas imprevisíveis (meses tranquilos vs. picos caóticos)',
    'en-US': 'Unpredictable demands (quiet months vs. chaotic peaks)'
  },
  problem3Description: {
    'pt-BR': 'Oscilação entre sobrecarga e ociosidade da equipe',
    'en-US': 'Fluctuation between team overload and idleness'
  },
  problem4Title: {
    'pt-BR': 'Freelancers sem compromisso → atrasos, retrabalho e prejuízo',
    'en-US': 'Freelancers without commitment → delays, rework and loss'
  },
  problem4Description: {
    'pt-BR': 'Falta de responsabilidade e qualidade inconsistente',
    'en-US': 'Lack of responsibility and inconsistent quality'
  },
  problem5Title: {
    'pt-BR': 'Zero governança → ninguém sabe quanto gasta nem quando entrega',
    'en-US': 'Zero governance → no one knows how much it costs or when it delivers'
  },
  problem5Description: {
    'pt-BR': 'Falta de transparência e controle sobre projetos',
    'en-US': 'Lack of transparency and control over projects'
  },
  problemsCTA: {
    'pt-BR': 'Reconhece esses problemas no seu negócio?',
    'en-US': 'Do you recognize these problems in your business?'
  },

  // Value Proposition Section
  valueTitle: {
    'pt-BR': 'Nossa Proposta de Valor',
    'en-US': 'Our Value Proposition'
  },
  valueMainQuote: {
    'pt-BR': 'Mais barato que CLT. Mais confiável que freelancer. Mais rápido que seu time interno.',
    'en-US': 'Cheaper than full-time employee. More reliable than freelancer. Faster than your internal team.'
  },
  valueBenefit1: {
    'pt-BR': 'Mais barato que CLT',
    'en-US': 'Cheaper than full-time employee'
  },
  valueBenefit2: {
    'pt-BR': 'Mais confiável que freelancer',
    'en-US': 'More reliable than freelancer'
  },
  valueBenefit3: {
    'pt-BR': 'Mais rápido que seu time interno',
    'en-US': 'Faster than your internal team'
  },
  valueSavings: {
    'pt-BR': 'Economia média de 40%',
    'en-US': 'Average savings of 40%'
  },
  valueFeature1Title: {
    'pt-BR': 'Planos de 20h, 40h ou 80h/mês',
    'en-US': 'Plans of 20h, 40h or 80h/month'
  },
  valueFeature1Description: {
    'pt-BR': 'Flexibilidade para diferentes necessidades',
    'en-US': 'Flexibility for different needs'
  },
  valueFeature2Title: {
    'pt-BR': 'SLA garantido de até 24h úteis',
    'en-US': 'Guaranteed SLA up to 24 business hours'
  },
  valueFeature2Description: {
    'pt-BR': 'Resposta rápida quando você mais precisa',
    'en-US': 'Fast response when you need it most'
  },
  valueFeature3Title: {
    'pt-BR': 'Dashboard em tempo real de consumo',
    'en-US': 'Real-time consumption dashboard'
  },
  valueFeature3Description: {
    'pt-BR': 'Transparência total sobre utilização',
    'en-US': 'Total transparency on usage'
  },
  valueFeature4Title: {
    'pt-BR': 'Rollover de horas (limitado)',
    'en-US': 'Hour rollover (limited)'
  },
  valueFeature4Description: {
    'pt-BR': 'Flexibilidade para usar suas horas',
    'en-US': 'Flexibility to use your hours'
  },
  valueCTA: {
    'pt-BR': 'Descobrir Qual Plano é Ideal Para Mim',
    'en-US': 'Discover Which Plan is Ideal For Me'
  },

  // How It Works Section
  howItWorksTitle: {
    'pt-BR': 'Como Funciona (simples e direto)',
    'en-US': 'How It Works (simple and direct)'
  },
  howItWorksSubtitle: {
    'pt-BR': 'Um processo otimizado para garantir agilidade, qualidade e transparência em cada etapa',
    'en-US': 'An optimized process to ensure agility, quality and transparency at each stage'
  },
  step1Title: {
    'pt-BR': 'Reserva de horas',
    'en-US': 'Hour reservation'
  },
  step1Subtitle: {
    'pt-BR': 'capacidade garantida',
    'en-US': 'guaranteed capacity'
  },
  step1Description: {
    'pt-BR': 'Escolha seu plano e garanta horas mensais dedicadas exclusivamente ao seu projeto. Sem surpresas, sem filas de espera.',
    'en-US': 'Choose your plan and guarantee monthly hours dedicated exclusively to your project. No surprises, no waiting lines.'
  },
  step2Title: {
    'pt-BR': 'Abertura de tickets',
    'en-US': 'Ticket opening'
  },
  step2Subtitle: {
    'pt-BR': 'SLA até 24h úteis',
    'en-US': 'SLA up to 24 business hours'
  },
  step2Description: {
    'pt-BR': 'Abra tickets para bugs, evoluções ou melhorias. Nossa equipe sênior analisa e responde dentro do SLA garantido.',
    'en-US': 'Open tickets for bugs, evolutions or improvements. Our senior team analyzes and responds within the guaranteed SLA.'
  },
  step3Title: {
    'pt-BR': 'Execução ágil',
    'en-US': 'Agile execution'
  },
  step3Subtitle: {
    'pt-BR': 'devs sênior validando rápido',
    'en-US': 'senior devs validating fast'
  },
  step3Description: {
    'pt-BR': 'Desenvolvemos com qualidade, seguindo boas práticas. Code review obrigatório em todas as entregas.',
    'en-US': 'We develop with quality, following best practices. Mandatory code review on all deliveries.'
  },
  step4Title: {
    'pt-BR': 'Transparência total',
    'en-US': 'Total transparency'
  },
  step4Subtitle: {
    'pt-BR': 'relatórios + dashboard',
    'en-US': 'reports + dashboard'
  },
  step4Description: {
    'pt-BR': 'Acompanhe consumo de horas, status dos tickets e métricas de desempenho em tempo real pelo dashboard.',
    'en-US': 'Track hour consumption, ticket status and performance metrics in real time through the dashboard.'
  },
  flowTitle: {
    'pt-BR': 'Fluxo Otimizado',
    'en-US': 'Optimized Flow'
  },
  flowDescription: {
    'pt-BR': 'Da necessidade à entrega, tudo transparente',
    'en-US': 'From need to delivery, everything transparent'
  },
  flowStep1: {
    'pt-BR': 'Reserva',
    'en-US': 'Reservation'
  },
  flowStep2: {
    'pt-BR': 'Ticket',
    'en-US': 'Ticket'
  },
  flowStep3: {
    'pt-BR': 'Execução',
    'en-US': 'Execution'
  },
  flowStep4: {
    'pt-BR': 'Entrega',
    'en-US': 'Delivery'
  },

  // Results Section
  resultsTitle: {
    'pt-BR': 'Resultados que Entregamos',
    'en-US': 'Results we Deliver'
  },
  resultsSubtitle: {
    'pt-BR': 'Números reais de clientes que transformaram sua operação de tecnologia',
    'en-US': 'Real numbers from clients who transformed their technology operation'
  },
  result1Label: {
    'pt-BR': 'menos custos vs. contratação fixa',
    'en-US': 'less costs vs. fixed hiring'
  },
  result1Description: {
    'pt-BR': 'Economia comprovada em relação a CLT tradicional',
    'en-US': 'Proven savings compared to traditional full-time employment'
  },
  result2Label: {
    'pt-BR': 'úteis para bugs críticos',
    'en-US': 'business hours for critical bugs'
  },
  result2Description: {
    'pt-BR': 'SLA garantido para situações emergenciais',
    'en-US': 'SLA guaranteed for emergency situations'
  },
  result3Label: {
    'pt-BR': 'clientes que escalam em 6 meses',
    'en-US': 'clients who scale in 6 months'
  },
  result3Description: {
    'pt-BR': 'Crescimento orgânico conforme necessidade',
    'en-US': 'Organic growth as needed'
  },
  result4Label: {
    'pt-BR': 'de retenção em 12 meses',
    'en-US': 'retention in 12 months'
  },
  result4Description: {
    'pt-BR': 'Modelo previsível e \'sticky\' que funciona',
    'en-US': 'Predictable and \'sticky\' model that works'
  },
  resultsCTATitle: {
    'pt-BR': 'Faça parte desses resultados',
    'en-US': 'Be part of these results'
  },
  resultsCTADescription: {
    'pt-BR': 'Junte-se a centenas de empresas que já transformaram sua operação de tecnologia',
    'en-US': 'Join hundreds of companies that have already transformed their technology operation'
  },
  resultsCTANote: {
    'pt-BR': 'As horas são limitadas por mês',
    'en-US': 'Hours are limited per month'
  },

  // Final CTA Section
  finalCTAUrgency: {
    'pt-BR': 'As horas são limitadas por mês. Reserve agora para não ficar sem SLA este mês.',
    'en-US': 'Hours are limited per month. Reserve now to not be without SLA this month.'
  },
  finalCTATitle: {
    'pt-BR': 'Agende agora sua call de 15 minutos com um especialista',
    'en-US': 'Schedule your 15-minute call with a specialist now'
  },
  finalCTASubtitle: {
    'pt-BR': 'e escolha o plano certo para sua necessidade',
    'en-US': 'and choose the right plan for your needs'
  },
  finalCTAMainButton: {
    'pt-BR': 'Quero Garantir Minha Consultoria Gratuita',
    'en-US': 'I Want to Secure My Free Consultation'
  },
  finalCTAQuestion: {
    'pt-BR': 'Prefere começar leve com 20h/mês para testar ou já resolver de vez seu backlog com 40h/mês?',
    'en-US': 'Do you prefer to start light with 20h/month to test or resolve your backlog once and for all with 40h/month?'
  },
  finalCTAOption1Title: {
    'pt-BR': 'Começar Testando (20h/mês)',
    'en-US': 'Start Testing (20h/month)'
  },
  finalCTAOption1Description: {
    'pt-BR': 'Ideal para validar nosso modelo sem grandes investimentos. Perfeito para pequenos ajustes e bugs pontuais.',
    'en-US': 'Ideal for validating our model without large investments. Perfect for small adjustments and punctual bugs.'
  },
  finalCTAOption2Title: {
    'pt-BR': 'Resolver de Vez (40h/mês)',
    'en-US': 'Resolve Once and For All (40h/month)'
  },
  finalCTAOption2Description: {
    'pt-BR': 'Para quem tem backlog acumulado e quer ver resultados rápidos. Desenvolvimento consistente e melhorias constantes.',
    'en-US': 'For those with accumulated backlog and want to see quick results. Consistent development and constant improvements.'
  },
  finalCTASecondaryButton: {
    'pt-BR': 'Falar Direto com Especialista',
    'en-US': 'Talk Directly with Specialist'
  },
  finalCTAResponse: {
    'pt-BR': 'Resposta em até 2 horas úteis',
    'en-US': 'Response within 2 business hours'
  },
  finalCTAGuarantee: {
    'pt-BR': 'Consultoria 100% gratuita - sem compromisso',
    'en-US': '100% free consultation - no commitment'
  }
};

export const getTranslation = (key: string, locale: Locale): string => {
  return translations[key]?.[locale] || key;
};
