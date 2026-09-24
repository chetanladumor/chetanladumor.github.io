/**
 * Chetan V. Ladumor - Portfolio Interactive Engine
 * Senior Node.js Developer | Backend Systems Architect
 */

// All 11 Verified Shipped Projects
const PROJECTS_DATA = [
  {
    id: 'spillorama-bingo',
    caseStudyUrl: 'projects/spillorama-bingo.html',
    title: 'Spillorama Multi-Game Bingo Infrastructure',
    subtitle: 'AIS Technolabs (Norway Client)',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-bingo.jpg',
    desc: 'Architected hybrid Bingo infrastructure synchronizing 40+ physical halls across Norway with low-latency online play. Achieved sub-100ms state sync between TV displays and mobile players.',
    longDesc: 'Designed and built the core multiplayer infrastructure for Spillorama, connecting over 40 physical bingo halls with real-time mobile and web players across Norway. Created five synchronized game engines: Papir Bingo (hybrid 75-ball), Lyn Bingo (rapid 21-ball), Bingo Bonanza (configurable patterns & progressive jackpots), Turbo Mania (33-ball with dynamic multipliers), and SpinnGo (multi-ticket, wheel of fortune, roulette). Integrated third-party gaming providers Metronia and Ok Bingo into real-time settlement and ticket-validation pipelines.',
    techs: ['Node.js', 'WebSockets', 'Socket.IO', 'Redis Pub/Sub', 'Kafka', 'PostgreSQL', 'Express.js', 'State Sync', 'High Concurrency'],
    skills: ['node.js', 'websockets', 'socket.io', 'redis', 'kafka', 'postgresql', 'gaming', 'bingo', 'high concurrency', 'distributed systems', 'microservices'],
    metrics: '40+ Venues Synchronized | Sub-100ms TV & Mobile Latency | 5 Custom Game Engines',
    youtubeUrl: 'https://youtu.be/sxT9Rkm8hlw?si=qEjvGlZB4TUIZ48I',
  },
  {
    id: 'swisspoker',
    caseStudyUrl: 'projects/swisspoker.html',
    title: 'Swisspoker Multiplayer Poker Platform',
    subtitle: 'AIS Technolabs',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-poker.jpg',
    desc: 'Scalable multiplayer Texas Hold\'em and Omaha platform with real-time hand evaluation, multi-table tournaments, table balancing, and low-latency Socket.IO state sync.',
    longDesc: 'Engineered high-concurrency multiplayer Texas Hold\'em and Omaha poker backends. Designed table orchestration, matchmaking, dealer-state machine, side-pot splitting algorithms, and fast 7-card hand evaluators. Built comprehensive tournament workflows: scheduled MTTs, dynamic blind structures, chip consolidation, automated table rebalancing, and final table showdown flows with reconnect safeguards.',
    techs: ['Node.js', 'Socket.IO', 'Redis', 'MongoDB', 'PostgreSQL', 'Kafka', 'Hand Evaluator Engine', 'Multi-Table Tournaments'],
    skills: ['node.js', 'socket.io', 'websockets', 'redis', 'mongodb', 'postgresql', 'poker', 'gaming', 'high concurrency'],
    metrics: 'Multi-Table Dynamic Balancing | Zero-Disconnection State Recovery | Sub-50ms Action Turnaround',
    githubUrl: 'https://github.com/chetanladumor',
  },
  {
    id: 'crash-game',
    caseStudyUrl: 'projects/crash-game.html',
    title: 'Provably Fair Multiplayer Crash Game Engine',
    subtitle: 'AIS Technolabs',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-crash-game.jpg',
    desc: 'High-frequency multiplayer Crash game powered by provably fair SHA-256 cryptographic seeds, exponential multiplier curves, and sub-second cash-out resolution.',
    longDesc: 'Designed and developed a provably fair real-time Crash game backend capable of handling thousands of simultaneous players per round. Features cryptographic SHA-256 seed hashing ensuring tamper-proof odds, exponential curve calculation tick loops at 50ms intervals, sub-millisecond cashout request processing, and instant automated bankroll / wallet balance updates.',
    techs: ['Node.js', 'WebSockets', 'Socket.IO', 'Redis', 'SHA-256 Cryptography', 'PostgreSQL', 'High Concurrency'],
    skills: ['node.js', 'websockets', 'socket.io', 'redis', 'crash', 'gaming', 'crypto', 'provably fair', 'high concurrency'],
    metrics: '50ms State Ticks | 100% Provably Fair Cryptographic Verification | Thousands of Active Bets per Round',
  },
  {
    id: 'ai-pr-review',
    caseStudyUrl: 'projects/ai-code-reviewer.html',
    title: 'AI-Based PR & Commit Review Automation',
    subtitle: 'Independent Engineering Initiative',
    category: 'ai',
    badge: 'Agentic AI & RAG',
    badgeClass: 'tag-ai',
    image: 'assets/images/project-ai-code-review.jpg',
    desc: 'Autonomous code review system utilizing LangGraph, LangChain, and OpenRouter API to automatically detect architectural flaws, bugs, security vulnerabilities, and memory leaks before merge.',
    longDesc: 'Architected an automated multi-step code review agent for GitHub pull requests. Orchestrated via LangGraph state graphs, the system splits diff reviews into structured stages: AST parsing, semantic dependency analysis, security scanning (OWASP Top 10), and rule-based validation. Leverages OpenRouter API for dynamic model routing (Claude 3.5 Sonnet, GPT-4o, DeepSeek) based on task complexity and token efficiency.',
    techs: ['LangGraph', 'LangChain', 'Node.js', 'OpenRouter API', 'TypeScript', 'GitHub Webhooks & REST API', 'Docker'],
    skills: ['langgraph', 'langchain', 'ai', 'ai agents', 'rag', 'openrouter', 'node.js', 'typescript', 'github actions', 'docker'],
    metrics: 'Automated Codebase AST Analysis | 70% Reduction in Manual Review Time | Multi-Model Dynamic Routing',
    githubUrl: 'https://github.com/chetanladumor/ai-code-review',
  },
  {
    id: 'ai-customer-support',
    caseStudyUrl: 'projects/ai-customer-support.html',
    title: 'Multi-Agent AI Customer Support Platform',
    subtitle: 'Enterprise AI Architecture',
    category: 'ai',
    badge: 'Agentic AI & RAG',
    badgeClass: 'tag-ai',
    image: 'assets/images/project-ai-customer-support.jpg',
    desc: 'Enterprise multi-agent support platform featuring advanced RAG (pgvector HNSW, GIN lexical search, RRF reranking), dynamic agent routing, SSE streaming, and AWS ECS deployment.',
    longDesc: 'Built an enterprise customer support platform powered by cooperative AI agents (Routing, Order, Billing, Technical Support). Implemented an advanced hybrid RAG retrieval pipeline combining dense vector embeddings (pgvector HNSW index) and sparse keyword search (GIN index) unified through Reciprocal Rank Fusion (RRF) and cross-encoder reranking. Features Zod structured outputs, Server-Sent Events (SSE) streaming, Prisma ORM, and automated GitHub Actions CI/CD to AWS ECS Fargate.',
    techs: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'pgvector', 'Vercel AI SDK', 'Docker', 'AWS ECS Fargate', 'Prisma'],
    skills: ['node.js', 'typescript', 'postgresql', 'pgvector', 'rag', 'ai agents', 'docker', 'aws ecs', 'prisma', 'express.js'],
    metrics: 'Hybrid RAG (Vector + BM25 Lexical) | Multi-Tenant Data Isolation | Sub-Second SSE Response Streaming',
    githubUrl: 'https://github.com/chetanladumor/customer-support-node-agent',
  },
  {
    id: 'ecommerce-microservices',
    caseStudyUrl: 'projects/ecommerce-microservices.html',
    title: 'Enterprise E-Commerce Microservices Suite',
    subtitle: 'High-Volume Production Platform',
    category: 'enterprise',
    badge: 'Enterprise & Microservices',
    badgeClass: 'tag-microservices',
    image: 'assets/images/project-ecommerce.jpg',
    desc: 'Event-driven microservices for high-volume order processing, payment settlement, and inventory, cutting checkout latency by 42% via Apache Kafka and RabbitMQ messaging.',
    longDesc: 'Engineered an event-driven architecture decomposing monolithic e-commerce flows into dedicated microservices: Order Lifecycle, Inventory Reservation, Payment Gateway Orchestration, and Real-Time Logistics Tracking. Synchronized asynchronous events through Kafka topics and RabbitMQ queues with dead-letter queue resilience. Tuned PostgreSQL with connection pooling (PgBouncer) and partial indexing, cutting peak-traffic checkout latency by 42%.',
    techs: ['Node.js', 'Express', 'PostgreSQL', 'Apache Kafka', 'RabbitMQ', 'Redis', 'WebSockets', 'Docker', 'Stripe'],
    skills: ['node.js', 'express.js', 'postgresql', 'kafka', 'rabbitmq', 'redis', 'microservices', 'event-driven architecture', 'docker', 'stripe'],
    metrics: '42% Latency Reduction at Checkout | High-Throughput Message Queue Ingestion | Real-Time WebSocket Order Tracking',
    githubUrl: 'https://github.com/chetanladumor/React-Ecom',
  },
  {
    id: 'wewatchover-health',
    caseStudyUrl: 'projects/wewatchover-health.html',
    title: 'WeWatchOver – Health & Biometric Monitoring',
    subtitle: 'Production IoT Backend',
    category: 'health',
    badge: 'HealthTech & IoT',
    badgeClass: 'tag-health',
    image: 'assets/images/project-health-wewatchover.jpg',
    desc: 'Production backend processing real-time biometric streams (Heart Rate, SpO2, GPS) from Fitbit, Oura Ring, and E88 smartwatches with rule-based Twilio emergency SMS alerts.',
    longDesc: 'Engineered and maintained the high-reliability IoT streaming backend for patient safety. Handled continuous telemetry ingestion from wearable sensors (Fitbit SDK, Oura Ring API, E88 Bluetooth smartwatches). Implemented real-time anomaly detection triggers: if heart rate or SpO2 breaches medical thresholds, automated priority Twilio SMS alerts dispatch immediately to emergency contacts and attending doctors alongside live GPS coordinates streamed over WebSockets.',
    techs: ['Node.js', 'Socket.IO', 'MongoDB', 'Twilio API', 'IoT Wearable APIs', 'Redis', 'AWS EC2'],
    skills: ['node.js', 'socket.io', 'mongodb', 'redis', 'twilio', 'aws', 'iot', 'healthtech', 'websockets'],
    metrics: '24/7 Continuous Biometric Stream Ingestion | Sub-2s Emergency Alert Dispatch | Live Medical Dashboards',
  },
  {
    id: 'lottery-jackpot',
    caseStudyUrl: 'projects/lottery-jackpot.html',
    title: 'Online Lottery & Automated Draw Engine',
    subtitle: 'Jackpot Aruba / Emirates Draw Architecture',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-lottery.jpg',
    desc: 'Multi-tier lottery platform supporting Pick 3, Pick 4, Pick 5, automated recurring number draws, instant ticket validation, and distributed prize calculation.',
    longDesc: 'Built end-to-end backend services for high-volume lottery games. Developed ticket serialization algorithms, cryptographic draw seed execution, automated result evaluation against thousands of active tickets within seconds, and multi-tier prize payouts. Implemented distributed cron workers with Redis lock synchronization ensuring zero double-draw anomalies and audit-compliant transactional integrity.',
    techs: ['Node.js', 'MySQL', 'Redis Distributed Locks', 'REST APIs', 'RabbitMQ', 'Docker'],
    skills: ['node.js', 'mysql', 'redis', 'rabbitmq', 'lottery', 'gaming', 'docker', 'restful apis'],
    metrics: 'Automated Zero-Latency Ticket Verification | Cryptographic Draw Audit Logs | High-Concurrency Bet Ingestion',
  },
  {
    id: 'dating-anyflawa',
    caseStudyUrl: 'projects/dating-anyflawa.html',
    title: 'Anyflawa Geospatial Matchmaking & Real-Time Chat',
    subtitle: 'Location-Aware Social Platform',
    category: 'health',
    badge: 'Mobile & Geospatial',
    badgeClass: 'tag-social',
    image: 'assets/images/project-dating-geospatial.jpg',
    desc: 'Proximity-based matchmaking utilizing Redis Geospatial indexing and MongoDB 2dsphere queries for rapid location-aware match discovery with real-time WebSocket chat.',
    longDesc: 'Architected the geo-distributed backend for location-sensitive mobile matching. Utilized Redis Geospatial sets (GEOADD, GEORADIUSBYMEMBER) for microsecond distance filtering coupled with MongoDB 2dsphere indexes for rich demographic queries. Powered multi-user ephemeral chat, typing indicators, read receipts, and live GPS streaming over persistent WebSocket connections.',
    techs: ['Node.js', 'Redis Geospatial', 'MongoDB Spatial', 'WebSockets', 'Express.js', 'AWS S3'],
    skills: ['node.js', 'redis', 'mongodb', 'geospatial', 'websockets', 'express.js', 'aws'],
    metrics: 'Sub-5ms Proximity Distance Calculations | Live Location Geofencing | Scalable Socket Chat Rooms',
  },
  {
    id: 'belote-multiplayer',
    caseStudyUrl: 'projects/ladepeche-belote.html',
    title: 'Ladepeche Belote Real-Time Multiplayer Card Game',
    subtitle: 'AIS Technolabs (France Ecosystem)',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-belote.jpg',
    desc: 'Traditional French Belote card game engine featuring 2v2 matchmaking, bidding rounds, trick-taking rules, team scoring, and zero-loss reconnection recovery.',
    longDesc: 'Developed the complete server-authoritative Belote card game engine integrated into an international gaming portal. Built 2v2 partner matchmaking, trump bidding phases, trick validation according to official French card game rules, contract scoring, and multi-round tournament progression. Built resilient reconnection handling where disconnected players can rejoin active tables without dropping game state.',
    techs: ['Node.js', 'Socket.IO', 'Redis Caching', 'PostgreSQL', 'Express.js', 'State Machines'],
    skills: ['node.js', 'socket.io', 'redis', 'postgresql', 'belote', 'gaming', 'state synchronization'],
    metrics: 'Strict Server-Authoritative Card Rules | 2v2 Real-Time Room Orchestration | Instant Reconnection Resumption',
  },
  {
    id: 'slot-game',
    caseStudyUrl: 'projects/slot-game.html',
    title: 'Scalable RNG Slot Game Engine',
    subtitle: 'High-Concurrency Real-Time Gaming',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-slot-game.jpg',
    desc: 'Real-time RNG-based Slot game backend with configurable paylines, reel strip simulation, symbol weighting, multiplier triggers, and atomic wallet balance updates.',
    longDesc: 'Engineered spin lifecycle and reel evaluation backend systems for multiplayer slot environments. Configured mathematical RTP (Return to Player) models, dynamic paytable evaluations across multiple paylines, cascading symbol drops, wild/scatter multiplier triggers, and bonus spin state tracking. Integrated atomic wallet balance transactions ensuring zero financial discrepancies under rapid spin frequency.',
    techs: ['Node.js', 'Socket.IO', 'RNG Algorithms', 'MySQL', 'Redis Caching', 'Atomic Transactions'],
    skills: ['node.js', 'socket.io', 'mysql', 'redis', 'slots', 'gaming', 'rng', 'high concurrency'],
    metrics: 'Configurable Paylines & RTP Models | Sub-10ms Reel Math Evaluation | Atomic Balance Isolation',
  }
];

// Initialize on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderProjects(PROJECTS_DATA);
  initSkillSearch();
  initCategoryFilters();
  initProjectModal();
  initFaqAccordion();
  initScrollAnimations();
  initNavbar();
  initContactForm();
});

// Typewriter Hero Effect
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const roles = [
    'Senior Node.js Developer',
    'Backend Systems Architect',
    '20,000+ CCU Real-Time Specialist',
    'Agentic AI & LangGraph Engineer',
    'Kafka & Distributed Microservices Architect'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 40;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400; // Pause before next word
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
}

// Render Project Cards to Grid
function renderProjects(items) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects found matching that skill query.</p>
        <p style="font-size: 0.9rem;">Try searching for "Node.js", "WebSockets", "Kafka", "LangGraph", "PostgreSQL", or "Redis".</p>
      </div>
    `;
    return;
  }

  items.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', proj.id);
    card.setAttribute('data-category', proj.category);

    const tagsHtml = proj.techs.slice(0, 4).map(t => `<span class="project-tech-pill">${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-thumb-wrap">
        <img class="project-img" src="${proj.image}" alt="${proj.title} - Chetan Ladumor Portfolio" loading="lazy" width="1200" height="750">
        <span class="project-badge-tag ${proj.badgeClass}">${proj.badge}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-footer">
          <a href="${proj.caseStudyUrl}" class="project-btn-detail" aria-label="Read full case study for ${proj.title}">
            In-Depth Case Study <span>→</span>
          </a>
          <div class="project-external-links">
            ${proj.youtubeUrl ? `<a href="${proj.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Watch Video Demo" aria-label="YouTube Demo">📺</a>` : ''}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="View Source on GitHub" aria-label="GitHub Repo">🐙</a>` : ''}
            <button onclick="openProjectModal('${proj.id}')" class="project-ext-icon" title="Quick Architecture Modal" style="background: none; border: none; cursor: pointer; font-size: 1.05rem;" aria-label="Quick Modal">🔍</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Live Skill Search & Highlighting
function initSkillSearch() {
  const searchInput = document.getElementById('skill-search');
  const clearBtn = document.getElementById('search-clear');
  const resultCount = document.getElementById('search-result-count');
  const allSkillPills = document.querySelectorAll('.skill-pill');

  if (!searchInput) return;

  function filterByQuery(query) {
    const q = query.trim().toLowerCase();

    // Toggle clear button
    if (clearBtn) {
      clearBtn.style.display = q ? 'block' : 'none';
    }

    // Highlight matching skill pills in the skills section
    allSkillPills.forEach(pill => {
      const skillName = (pill.getAttribute('data-skill') || pill.textContent).toLowerCase();
      if (q && skillName.includes(q)) {
        pill.classList.add('highlight');
      } else {
        pill.classList.remove('highlight');
      }
    });

    if (!q) {
      renderProjects(PROJECTS_DATA);
      if (resultCount) resultCount.textContent = `Showing all ${PROJECTS_DATA.length} verified production projects`;
      return;
    }

    const filtered = PROJECTS_DATA.filter(p => {
      const matchSkill = p.skills.some(s => s.toLowerCase().includes(q));
      const matchTech = p.techs.some(t => t.toLowerCase().includes(q));
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q) || p.longDesc.toLowerCase().includes(q);
      return matchSkill || matchTech || matchTitle || matchDesc;
    });

    renderProjects(filtered);

    if (resultCount) {
      resultCount.innerHTML = `Found <strong style="color: var(--accent-cyan);">${filtered.length}</strong> projects matching "<span style="color: #ffffff;">${escapeHtml(query)}</span>"`;
    }
  }

  searchInput.addEventListener('input', (e) => {
    filterByQuery(e.target.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterByQuery('');
      searchInput.focus();
    });
  }

  // Click on any skill pill to instantly filter
  allSkillPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const val = pill.getAttribute('data-skill') || pill.textContent.trim();
      searchInput.value = val;
      filterByQuery(val);
      // Smooth scroll to projects section
      const projSec = document.getElementById('projects');
      if (projSec) {
        projSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Category Filter Tabs
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('skill-search');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      if (searchInput) searchInput.value = '';

      if (cat === 'all') {
        renderProjects(PROJECTS_DATA);
      } else {
        const filtered = PROJECTS_DATA.filter(p => p.category === cat);
        renderProjects(filtered);
      }
    });
  });
}

// Project Architecture Modal
function initProjectModal() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!overlay) return;

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });
}

// Global modal trigger
window.openProjectModal = function(projectId) {
  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  const overlay = document.getElementById('project-modal');
  if (!proj || !overlay) return;

  document.getElementById('modal-img').src = proj.image;
  document.getElementById('modal-img').alt = proj.title;
  document.getElementById('modal-title').textContent = proj.title;
  document.getElementById('modal-badge').className = `project-badge-tag modal-badge ${proj.badgeClass}`;
  document.getElementById('modal-badge').textContent = proj.badge;
  document.getElementById('modal-desc').textContent = proj.longDesc;
  document.getElementById('modal-metrics').textContent = proj.metrics;

  const techWrap = document.getElementById('modal-pills');
  techWrap.innerHTML = proj.techs.map(t => `<span class="skill-pill active">${t}</span>`).join('');

  const caseStudyBtn = document.getElementById('modal-casestudy-btn');
  if (caseStudyBtn) {
    caseStudyBtn.href = proj.caseStudyUrl;
  }

  const liveAction = document.getElementById('modal-live-btn');
  const gitAction = document.getElementById('modal-git-btn');

  if (proj.youtubeUrl) {
    liveAction.style.display = 'inline-flex';
    liveAction.href = proj.youtubeUrl;
  } else {
    liveAction.style.display = 'none';
  }

  if (proj.githubUrl) {
    gitAction.style.display = 'inline-flex';
    gitAction.href = proj.githubUrl;
  } else {
    gitAction.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      items.forEach(other => {
        other.classList.remove('active');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// Navbar Scroll & Mobile Menu
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

// Scroll Counter Animation
function initScrollAnimations() {
  const counters = document.querySelectorAll('.metric-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = counter.getAttribute('data-target');
          if (!target) return;
          animateValue(counter, target);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

function animateValue(elem, valStr) {
  // If value contains special chars like '<100ms' or '99.9%' or '20,000+'
  elem.textContent = valStr; // Render target directly with smooth pulse
  elem.style.transition = 'transform 0.5s ease, color 0.5s ease';
  elem.style.transform = 'scale(1.1)';
  setTimeout(() => {
    elem.style.transform = 'scale(1)';
  }, 400);
}

// Contact Form Handler & Toast
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const project = document.getElementById('form-project').value;
    const message = document.getElementById('form-message').value;

    const subject = encodeURIComponent(`Inquiry from ${name} regarding ${project || 'Backend Architecture'}`);
    const body = encodeURIComponent(`Hi Chetan,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${project}\n\nMessage:\n${message}\n\n-- Sent via chetanladumor.github.io`);

    window.location.href = `mailto:ladumorchetan@yahoo.com?subject=${subject}&body=${body}`;

    showToast('Redirecting to email client...');
  });
}

// Toast helper
window.showToast = function(msg) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
};

// Clipboard copy helper
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
};

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
