# 🚀 Pacote de Horas - Landing Page

Landing page moderna para consultoria de tecnologia com sistema de planos de atendimento dedicado.

## ✨ Funcionalidades

### 🎨 Sistema de Tema Claro/Escuro
- **Detecção automática** da preferência do sistema
- **Logo dinâmica**: Branca para tema escuro, padrão para tema claro
- **Favicon dinâmico**: Adapta-se automaticamente ao tema
- **Cores e gradientes** otimizados para cada tema

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Componentes otimizados para diferentes tamanhos de tela
- Animações suaves e efeitos visuais modernos

### 💬 Integração WhatsApp
- Todos os botões CTA conectados ao WhatsApp
- Link padronizado: `https://wa.me/5541998243692`
- Mensagem automática para consultoria gratuita

### 👥 Seção de Especialistas
- Fotos do **Jean (CEO)** e **Soares (CTO)**
- Layout em moldura elegante
- Informações profissionais e experiência

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/JeanGustavoMR/pacotedehoras-lp.git

# Entre na pasta
cd pacotedehoras-lp

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Build para Produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── sections/          # Seções da landing page
│   ├── ui/               # Componentes UI reutilizáveis
│   ├── Navbar.tsx        # Navegação
│   ├── Footer.tsx        # Rodapé
│   ├── WhatsAppButton.tsx # Botão flutuante WhatsApp
│   └── DynamicFavicon.tsx # Favicon dinâmico
├── hooks/
│   └── use-theme.ts      # Hook para tema claro/escuro
├── pages/
│   ├── Index.tsx         # Página principal
│   └── NotFound.tsx      # Página 404
├── assets/               # Imagens e recursos
└── lib/                  # Utilitários
```

## 🎯 Seções da Landing Page

1. **Hero Section** - Apresentação principal com especialistas
2. **Problems Section** - Problemas que resolvemos
3. **Value Proposition** - Nossa proposta de valor
4. **Plans Section** - Planos de atendimento (20h, 40h, 80h/mês)
5. **How It Works** - Como funciona nosso processo
6. **Results Section** - Estatísticas e resultados
7. **Final CTA** - Call-to-action final

## 🌐 Deploy

O projeto está configurado para deploy automático via GitHub Pages.

### Links de Acesso
- **Desenvolvimento**: `http://localhost:5500/`
- **Produção**: [GitHub Pages](https://jeangustavomr.github.io/pacotedehoras-lp/)

## 📞 Contato

- **WhatsApp**: [5541998243692](https://wa.me/5541998243692)
- **Email**: [contato@consultoriatecnologia.com.br](mailto:contato@consultoriatecnologia.com.br)

## 📄 Licença

Este projeto é privado e de uso exclusivo da consultoria de tecnologia.

---

**Desenvolvido com ❤️ por Jean Gustavo**

