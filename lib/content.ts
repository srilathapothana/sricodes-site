export const siteConfig = {
  name: 'Sri Codes',
  tagline: 'Full Stack Developer specializing in scalable web applications and clean, production-ready code.',
  email: 'sricodes.dev@gmail.com',
};

export const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'End-to-end development of responsive, performant websites and web applications built to modern standards.',
    tag: 'Next.js · React · HTML/CSS',
  },
  {
    icon: '⚙️',
    title: 'Full Stack Application Development',
    description:
      'Design and development of complete web applications with robust backends, secure authentication, and scalable database architecture.',
    tag: 'Node · Spring Boot · PostgreSQL',
  },
  {
    icon: '✨',
    title: 'Feature Development',
    description:
      'Scoped implementation of new features into existing systems — payment integrations, real-time functionality, AI capabilities, and third-party APIs.',
    tag: 'REST · GraphQL · LLM APIs',
  },
  {
    icon: '🐛',
    title: 'Debugging & Issue Resolution',
    description:
      'Systematic identification and resolution of bugs in production or development environments, with clear documentation of root cause and fix.',
    tag: 'Debugging · Root-cause Analysis',
  },
  {
    icon: '🔁',
    title: 'Maintenance & Modernization',
    description:
      'Dependency upgrades, code refactoring, performance optimization, and UI improvements to keep existing applications current and maintainable.',
    tag: 'Refactors · Migrations',
  },
  {
    icon: '🎓',
    title: 'Technical Mentorship',
    description:
      'Guided support for students and junior developers on academic projects and assignments — focused on understanding, not just delivery.',
    tag: 'Guided · Explained · Structured',
  },
];
export const processSteps = [
  {
    num: '1',
    title: 'Tell me what you need',
    description: 'A quick message about the project, bug, or feature. No form-filling required.',
  },
  {
    num: '2',
    title: 'Scope & quote',
    description: "I'll confirm what's involved and give you a clear price and timeline before any work starts.",
  },
  {
    num: '3',
    title: 'Build',
    description: 'Regular updates as I go. No disappearing for two weeks and resurfacing with a surprise.',
  },
  {
    num: '4',
    title: 'Ship & support',
    description: 'Deployed, tested, and handed over, with a short support window for anything that comes up.',
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  status: 'live' | 'in-dev';
};

export const projects: Project[] = [
  {
    title: 'discvrai',
    description:
      'AI-powered product discovery. Browse a catalog or ask natural-language questions and get AI-matched results with a generated summary, backed by an LLM API.',
    tags: ['Next.js 14', 'TypeScript', 'LLaMA 3.3 70B'],
    liveUrl: 'https://discvrai-lemon.vercel.app/',
    status: 'live',
  },
  {
    title: 'FinExtract',
    description:
      'Extracts structured income-statement data from financial documents using an LLM, then exports a clean 4-sheet Excel workbook, built for research workflows.',
    tags: ['Next.js', 'SheetJS', 'LLM extraction'],
    liveUrl: 'https://finextract-ashen.vercel.app/',
    status: 'live',
  },
  {
    title: 'TaskFlow',
    description:
      'Team task manager with Kanban boards, role-based access, real-time notifications, and an activity audit log: a full project management workflow.',
    tags: ['PostgreSQL', 'Prisma', 'Pusher', 'NextAuth'],
    liveUrl: 'https://task-manager-production-ff6d.up.railway.app/',
    status: 'live',
  },
  {
    title: 'Spendly',
    description:
      'Personal finance dashboard with role-based views, interactive charts, CSV export, and a dark-mode-first design system built with zero external dependencies.',
    tags: ['React 18', 'Chart.js', 'useReducer'],
    liveUrl: 'https://finance-dashboard-six-sigma.vercel.app/',
    status: 'live',
  },
  {
    title: 'Slooze',
    description:
      'Role-based food ordering app with country-scoped data access and granular permissions across admin, manager, and member roles.',
    tags: ['NestJS', 'GraphQL', 'Prisma', 'JWT'],
    liveUrl: 'https://slooze-frontend-production.up.railway.app/',
    status: 'live',
  },
  {
    title: 'User Dashboard',
    description:
      'Admin panel for user management with lazy-loaded modules, RxJS state handling, and dynamic charts in a fully responsive dark UI.',
    tags: ['Angular 17', 'RxJS', 'Chart.js'],
    liveUrl: 'https://user-dashboard-64rut1aa7-pothana-srilathas-projects.vercel.app/dashboard',
    status: 'live',
  },
];

export const pricingTiers = [
  {
    name: 'Quick Fix',
    price: '₹299+',
    description: 'For small, scoped fixes',
    features: ['Single bug fix', 'Minor UI tweak', 'Config or deploy issue', 'Turnaround in 1-2 days'],
    featured: false,
  },
  {
    name: 'Feature / Project',
    price: '₹1,299+',
    description: 'For a feature, page, or student project',
    features: ['New feature on existing app', 'Standalone student project', 'API or DB integration', 'Includes 1 revision round'],
    featured: true,
  },
  {
    name: 'Full Website',
    price: '₹2,999+',
    description: 'For a complete site, built from scratch',
    features: ['Multi-page responsive site', 'Contact form & basic backend', 'Deployment included', '2 weeks of post-launch support'],
    featured: false,
  },
];

export const faqs = [
  {
    question: 'Have you worked with clients before?',
    answer:
      "I'm early in freelancing specifically, but I work professionally as a full-stack developer and have shipped 6+ independent projects with live demos, so you can see exactly what I can build before hiring.",
  },
  {
    question: 'How does pricing actually work?',
    answer:
      'You tell me what you need, I scope it and give a fixed quote before starting. No hourly surprises. If scope changes mid-project, we agree on the new price first.',
  },
  {
    question: 'Can you help with my college/university project?',
    answer:
      'Yes, I help students finish projects and explain the code along the way, so you can actually understand and present it, not just hand in something you didn\u2019t build.',
  },
  {
    question: "What if I just need a small bug fixed?",
    answer:
      'That\u2019s the "Quick Fix" tier. Send the repo or describe the issue, and most small fixes turn around in a day or two.',
  },
  {
    question: 'Do you sign NDAs or contracts?',
    answer: 'Yes, happy to for any project where that matters to you. Just mention it when we scope the work.',
  },
  {
    question: "What's your response time?",
    answer: "Usually within 24-48 hours. I'm available full-time now, so I can move quickly once a project is scoped.",
  },
];
