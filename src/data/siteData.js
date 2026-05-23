export const personalInfo = {
  name: "Rafael Lemos",
  role: "Desenvolvedor Fullstack",
  location: "Fortaleza, CE",
  email: "rafaelemosfr@gmail.com",
  linkedin: "https://linkedin.com/in/rafalemosfrs",
  github: "https://github.com/rafalemosfrs",
  portfolio: "https://rafael-lemos.vercel.app",
  resumeUrl: "/RafaelLemos-Curriculo_Final.pdf",
  resumeFileName: "Rafael Lemos - Currículo.pdf",
};

export const heroContent = {
  title: "Desenvolvedor Fullstack criando experiências digitais performáticas, modernas e escaláveis.",
  subtitle: "Transformo ideias em aplicações web com React, Node.js, Tailwind CSS e APIs REST, unindo interface bem construída, performance e foco em entrega real.",
  typingTexts: [
    "Fullstack Developer",
    "React",
    "Node.js",
    "APIs REST",
    "Tailwind CSS",
    "Performance Web",
  ],
};

export const aboutContent = {
  description: "Sou Rafael Lemos, desenvolvedor fullstack de Fortaleza, CE. Trabalho com React, Node.js, Tailwind CSS e integração de APIs, criando aplicações web modernas, responsivas e focadas em performance. Tenho experiência com projetos freelance, sistemas internos e construção de interfaces que conectam tecnologia, usabilidade e resultado.\n\nGosto de transformar requisitos em soluções funcionais, bem organizadas e fáceis de evoluir. Minha trajetória também passa por experiências administrativas e financeiras, que fortaleceram minha visão de negócio, organização, comunicação e responsabilidade na entrega.",
  highlights: [
    "Interfaces performáticas",
    "APIs REST",
    "Projetos reais",
    "Performance web",
    "Experiência fullstack",
    "Visão de produto",
  ],
};

export const skills = {
  frontend: [
    { name: "React", icon: "code" },
    { name: "JavaScript ES6+", icon: "file-code" },
    { name: "TypeScript", icon: "file-type" },
    { name: "HTML5", icon: "file-code-2" },
    { name: "CSS3", icon: "palette" },
    { name: "Tailwind CSS", icon: "wind" },
    { name: "Responsividade", icon: "smartphone" },
    { name: "Next.js", icon: "layers" },
    { name: "Vite", icon: "zap" },
  ],
  backend: [
    { name: "Node.js", icon: "server" },
    { name: "Express.js", icon: "route" },
    { name: "SQL", icon: "database" },
    { name: "APIs REST", icon: "git-branch" },
    { name: "Banco de Dados", icon: "database" },
  ],
  testing: [
    { name: "Jest", icon: "test-tube" },
    { name: "Cypress", icon: "shield-check" },
    { name: "Testes automatizados", icon: "check-circle" },
  ],
  tools: [
    { name: "Git", icon: "git-branch" },
    { name: "GitHub", icon: "github" },
    { name: "Vercel", icon: "triangle" },
    { name: "Figma", icon: "figma" },
    { name: "Lighthouse", icon: "gauge" },
    { name: "NPM", icon: "package" },
  ],
  bestPractices: [
    { name: "Componentização", icon: "box" },
    { name: "Organização de código", icon: "folder-tree" },
    { name: "Performance", icon: "gauge" },
    { name: "Acessibilidade", icon: "accessibility" },
    { name: "SEO", icon: "search" },
    { name: "Consumo de APIs", icon: "plug" },
  ],
  softSkills: [
    { name: "Pensamento crítico", icon: "brain" },
    { name: "Proatividade", icon: "rocket" },
    { name: "Comunicação", icon: "message-circle" },
    { name: "Adaptabilidade", icon: "refresh-cw" },
    { name: "Trabalho em equipe", icon: "users" },
    { name: "Metodologias ágeis", icon: "kanban" },
  ],
};

export const projects = [
  {
    title: "Busca por Região",
    description:
      "Site que consulta a API do IBGE para exibir todos os municípios por estado do Brasil, demonstrando integração com APIs externas, manipulação de dados e construção de interface dinâmica.",
    image: "/assets/img/busca-por-regiao.jpg",
    tags: ["HTML", "CSS", "JavaScript", "API IBGE", "Frontend"],
    metrics: null,
    liveUrl: "https://busca-por-regiao.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/busca-por-regiao",
    status: "active",
  },
  {
    title: "Landing Page Dentista",
    description:
      "Landing page moderna, clean e responsiva para um consultório odontológico, com foco em apresentação profissional, clareza visual e boa experiência para o usuário.",
    image: "/assets/img/landing-page-dentista.jpg",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Frontend"],
    metrics: null,
    liveUrl: "https://landing-page-dentista-one.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/landing-page-dentista",
    status: "active",
  },
  {
    title: "Landing Page Solar",
    description:
      "Landing page para uma empresa de energia solar, desenvolvida com foco em apresentação comercial, conversão de clientes, responsividade e performance.",
    image: "/assets/img/landing-page-solar.jpg",
    tags: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Vite"],
    metrics: null,
    liveUrl: "https://landing-page-solar.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/LandingPage-Solar",
    status: "active",
  },
  {
    title: "Site para Engenharia Solar",
    description:
      "Site moderno e minimalista para uma empresa de engenharia elétrica voltada para energia solar, com interface responsiva e comunicação visual profissional.",
    image: "/assets/img/engenharia-solar.jpg",
    tags: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    metrics: null,
    liveUrl: "https://cearaenergiaengenharia.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/Pagina-Engenharia-Solar",
    status: "active",
  },
  {
    title: "Linkfour",
    description:
      "Aplicação fullstack inspirada na reconstrução do Linktree, com área logada, integração completa com backend, banco de dados e gerenciamento de links personalizados.",
    image: "/assets/img/linkfour.jpg",
    tags: [
      "React",
      "Node.js",
      "SQL",
      "Tailwind CSS",
      "NeonDB",
      "Render",
      "Vercel",
      "Git",
      "Fullstack",
    ],
    metrics: null,
    liveUrl: "https://link-four.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/LinkFour",
    status: "active",
  },
  {
    title: "AlineCunhaBeauty",
    description:
      "Landing page simples, elegante e responsiva para um salão de beleza, desenvolvida com React, Tailwind CSS e JavaScript.",
    image: "/assets/img/alinecunhabeauty.jpg",
    tags: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    metrics: null,
    liveUrl: "https://aline-cunha-beauty.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/AlineCunhaBeauty",
    status: "active",
  },
  {
    title: "Tcno Certificadora Digital",
    description:
      "Landing page e SPA para certificadora digital, com rotas, FAQ, página 404 e chamadas para ação integradas ao WhatsApp.",
    image: "/assets/img/tcno-certificadora.jpg",
    tags: ["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    metrics: null,
    liveUrl: "https://tcno-certificadora-digital.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/TcnoCertificadoraDigital",
    status: "active",
  },
  {
    title: "Projeto Sabres",
    description:
      "Site completo para um time de futebol americano, com informações institucionais, calendário e área logada para atletas, administradores e técnicos.",
    image: "/assets/img/projeto-sabres.jpg",
    tags: ["React", "Node.js", "Tailwind CSS", "JavaScript", "Fullstack"],
    metrics: null,
    liveUrl: "https://projeto-sabres.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/ProjetoSabres",
    status: "active",
  },
  {
    title: "ConecTEA - Espaço do Autista",
    description:
      "Projeto acadêmico em parceria com o Espaço do Autista, criado para apoiar o atendimento, a organização de informações e o acolhimento de pessoas autistas e suas famílias.",
    image: "/assets/img/conectea.jpeg",
    tags: ["React", "Tailwind CSS", "JavaScript", "Git", "Vercel", "Google Forms"],
    metrics: null,
    liveUrl: "https://espacodoautista.vercel.app",
    codeUrl: "https://github.com/rafalemosfrs/ConecTEA",
    status: "active",
  },
];

export const experiences = {
  main: [
    {
      title: "Desenvolvedor Fullstack React + Node",
      company: "G4Flex",
      location: "Fortaleza, CE",
      period: "Julho/2025 a Março/2026",
      highlights: [
        "Desenvolvimento de funcionalidades em sistemas internos utilizando React e Tailwind CSS, criando interfaces mais modernas, intuitivas e eficientes.",
        "Otimização de performance em componentes críticos, reduzindo o tempo de carregamento de páginas em aproximadamente 15%.",
        "Integração de APIs REST para automatização de processos manuais, economizando cerca de 5 horas semanais da equipe administrativa.",
      ],
    },
    {
      title: "Desenvolvedor Freelancer",
      company: "Autônomo",
      location: "Fortaleza, CE",
      period: "Julho/2023 até atualmente",
      highlights: [
        "Desenvolvimento de sites, landing pages e aplicações web para clientes reais, com foco em performance, responsividade, SEO e boa experiência do usuário.",
        "Projetos entregues incluem Ceará Energia Solar (landing page de alta conversão com Lighthouse 95+) e Ceará Sabres (site institucional responsivo).",
      ],
    },
  ],
  previous: [
    {
      title: "Diretor Financeiro",
      company: "KNN Idiomas",
      period: "2022 a 2023",
      skills: ["Liderança", "Gestão financeira", "Tomada de decisão"],
    },
    {
      title: "Auxiliar Administrativo",
      company: "Ceará Energia",
      period: "2021 a 2022",
      skills: ["Organização", "Processos administrativos", "Atendimento"],
    },
    {
      title: "Aprendiz Administrativo",
      company: "M Dias Branco",
      period: "2018 a 2020",
      skills: ["Responsabilidade", "Trabalho em equipe", "Comunicação"],
    },
    {
      title: "Serviço Social Voluntário",
      company: "Associação Mães Atípicas / AMA Famílias",
      period: "2024",
      skills: ["Trabalho voluntário", "Empatia", "Resolução de problemas"],
    },
        {
      title: "Serviço Social Voluntário",
      company: "Associação Beneficente Espaço do Autista",
      period: "2026",
      skills: ["Trabalho voluntário", "Empatia", "Resolução de problemas"],
    },
  ],
};

export const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Unifor",
    period: "Julho/2023 até atualmente",
    status: "Cursando",
  },
  {
    degree: "Ciência da Computação",
    institution: "Faculdade Estácio",
    period: "Junho/2021 a Junho/2023",
    status: "Concluído parcialmente",
  },
];

export const certificates = [
  {
    title: "Desenvolvimento Full Stack",
    institution: "Digital College",
    period: "Março/2024 - Março/2025",
    workload: "192 horas",
    certificateUrl: "/RafaelLemos-Certificado.pdf",
    fileName: "Certificado Full Stack - Rafael Lemos.pdf",
    contents: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "API",
      "NPM",
      "React.js",
      "Cypress",
      "Banco de Dados",
      "Node.js",
      "Express.js",
      "Testes Automatizados",
    ],
  },
];

export const languages = [
  { name: "Inglês", level: "Intermediário/Avançado", description: "Ótima leitura e compreensão" },
  { name: "Espanhol", level: "Básico", description: "Conhecimento complementar" },
];

export const missionSteps = [
  { step: "Descoberta", description: "Entender o problema e os requisitos" },
  { step: "Desenvolvimento", description: "Construir a solução eficiente" },
  { step: "Integração", description: "Conectar sistemas e APIs" },
  { step: "Performance", description: "Otimizar para experiência real" },
  { step: "Deploy", description: "Entregar e monitorar resultados" },
];

export const differentials = [
  {
    title: "Performance real",
    description: "Otimização de métricas que impactam a experiência do usuário.",
    icon: "gauge",
  },
  {
    title: "Interface com propósito",
    description: "Design centrado no usuário, não apenas estético.",
    icon: "layout",
  },
  {
    title: "Código organizado",
    description: "Arquitetura limpa, escalável e fácil de manter.",
    icon: "code-2",
  },
  {
    title: "Visão fullstack",
    description: "Compreensão de frontend e backend para soluções completas.",
    icon: "layers",
  },
];

export const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Formação", href: "#education" },
  { label: "Certificados", href: "#certificates" },
  { label: "Contato", href: "#contact" },
];
