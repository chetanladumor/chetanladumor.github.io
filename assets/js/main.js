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
    image: 'assets/images/project-bingo.jpg?v=3',
    desc: 'Architected hybrid Bingo infrastructure synchronizing 40+ physical halls across Norway with low-latency online play. Achieved sub-100ms state sync between TV displays and mobile players.',
    longDesc: 'Designed and built the core multiplayer infrastructure for Spillorama, connecting over 40 physical bingo halls with real-time mobile and web players across Norway. Created five synchronized game engines: Papir Bingo (hybrid 75-ball), Lyn Bingo (rapid 21-ball), Bingo Bonanza (configurable patterns & progressive jackpots), Turbo Mania (33-ball with dynamic multipliers), and SpinnGo (multi-ticket, wheel of fortune, roulette). Integrated third-party gaming providers Metronia and Ok Bingo into real-time settlement and ticket-validation pipelines.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'Redis Adapter', 'BullMQ', 'Redlock Mutex', 'MongoDB', 'MSSQL', 'Fortuna PRNG', 'PM2', 'Docker'],
    skills: ['node.js', 'express.js', 'socket.io', 'redis', 'bullmq', 'redlock', 'mongodb', 'mssql', 'sql server', 'fortuna prng', 'pm2', 'docker', 'nginx', 'high concurrency', 'distributed systems'],
    metrics: '40+ Venues Synchronized | Sub-100ms TV & Mobile Latency | 5 Custom Game Engines',
    liveUrl: 'https://spillorama.no/',
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
    image: 'assets/images/project-poker.jpg?v=3',
    desc: 'Scalable multiplayer Texas Hold\'em and Omaha platform with real-time hand evaluation, multi-table tournaments, table balancing, and low-latency Socket.IO state sync.',
    longDesc: 'Engineered high-concurrency multiplayer Texas Hold\'em and Omaha poker backends. Designed table orchestration, matchmaking, dealer-state machine, side-pot splitting algorithms, and fast 7-card hand evaluators. Built comprehensive tournament workflows: scheduled MTTs, dynamic blind structures, chip consolidation, automated table rebalancing, and final table showdown flows with reconnect safeguards.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'Pokersolver', 'Fortuna PRNG', 'MongoDB (50+ Models)', 'Redis', 'Multi-Wallet', 'PM2'],
    skills: ['node.js', 'express.js', 'socket.io', 'pokersolver', 'fortuna prng', 'mongodb', 'mongoose', 'redis', 'coinpayments', 'poker', 'gaming', 'high concurrency', 'mtt tournaments'],
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
    image: 'assets/images/project-crash-game.jpg?v=3',
    desc: 'High-frequency multiplayer Crash game powered by provably fair SHA-256 cryptographic seeds, exponential multiplier curves, and sub-second cash-out resolution.',
    longDesc: 'Designed and developed a provably fair real-time Crash game backend capable of handling thousands of simultaneous players per round. Features cryptographic SHA-256 seed hashing ensuring tamper-proof odds, exponential curve calculation tick loops at 50ms intervals, sub-millisecond cashout request processing, and instant automated bankroll / wallet balance updates.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'HMAC SHA-256', 'Redis Lua Scripts', 'MongoDB', 'Fortuna PRNG', 'Exact-Math', 'PM2'],
    skills: ['node.js', 'express.js', 'socket.io', 'redis', 'lua scripts', 'hmac sha-256', 'mongodb', 'mongoose', 'exact-math', 'provably fair', 'gaming', 'crypto'],
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
    image: 'assets/images/project-ai-code-review.jpg?v=3',
    desc: 'Autonomous code review system utilizing LangGraph, LangChain, and OpenRouter API to automatically detect architectural flaws, bugs, security vulnerabilities, and memory leaks before merge.',
    longDesc: 'Architected an automated multi-step code review agent for GitHub pull requests. Orchestrated via LangGraph state graphs, the system splits diff reviews into structured stages: AST parsing, semantic dependency analysis, security scanning (OWASP Top 10), and rule-based validation. Leverages OpenRouter API for dynamic model routing (Claude 3.5 Sonnet, GPT-4o, DeepSeek) based on task complexity and token efficiency.',
    techs: ['LangGraph', 'LangChain', 'Node.js', 'TypeScript', 'OpenRouter (Claude 3.5 / GPT-4o)', 'BullMQ', 'Redis', 'MongoDB', 'Octokit', 'Zod'],
    skills: ['langgraph', 'langchain', 'ai', 'multi-agent systems', 'openrouter', 'node.js', 'typescript', 'bullmq', 'redis', 'mongodb', 'octokit', 'github webhooks', 'zod'],
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
    image: 'assets/images/project-ai-customer-support.jpg?v=3',
    desc: 'Enterprise multi-agent support platform featuring advanced RAG (pgvector HNSW, GIN lexical search, RRF reranking), dynamic agent routing, SSE streaming, and AWS ECS deployment.',
    longDesc: 'Built an enterprise customer support platform powered by cooperative AI agents (Routing, Order, Billing, Technical Support). Implemented an advanced hybrid RAG retrieval pipeline combining dense vector embeddings (pgvector HNSW index) and sparse keyword search (GIN index) unified through Reciprocal Rank Fusion (RRF) and cross-encoder reranking. Features Zod structured outputs, Server-Sent Events (SSE) streaming, Prisma ORM, and automated GitHub Actions CI/CD to AWS ECS Fargate.',
    techs: ['TypeScript 5.8', 'Node.js', 'Express 5', 'PostgreSQL', 'pgvector (HNSW)', 'Prisma 6', 'Vercel AI SDK', 'Docker', 'AWS ECS', 'Zod'],
    skills: ['typescript', 'node.js', 'express.js', 'postgresql', 'pgvector', 'hnsw', 'prisma', 'rag', 'vercel ai sdk', 'xenova transformers', 'docker', 'aws ecs', 'zod'],
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
    image: 'assets/images/project-ecommerce.jpg?v=3',
    desc: 'Event-driven microservices for high-volume order processing, payment settlement, and inventory, cutting checkout latency by 42% via Apache Kafka and RabbitMQ messaging.',
    longDesc: 'Engineered an event-driven architecture decomposing monolithic e-commerce flows into dedicated microservices: Order Lifecycle, Inventory Reservation, Payment Gateway Orchestration, and Real-Time Logistics Tracking. Synchronized asynchronous events through Kafka topics and RabbitMQ queues with dead-letter queue resilience. Tuned PostgreSQL with connection pooling (PgBouncer) and partial indexing, cutting peak-traffic checkout latency by 42%.',
    techs: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'PgBouncer', 'Apache Kafka', 'RabbitMQ', 'Redis', 'Docker Compose', 'React'],
    skills: ['node.js', 'express.js', 'typescript', 'postgresql', 'pgbouncer', 'kafka', 'rabbitmq', 'redis', 'microservices', 'event-driven architecture', 'docker'],
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
    image: 'assets/images/project-health-wewatchover.jpg?v=3',
    desc: 'Production backend processing real-time biometric streams (Heart Rate, SpO2, GPS) from Fitbit, Oura Ring, and E88 smartwatches with rule-based Twilio emergency SMS alerts.',
    longDesc: 'Engineered and maintained the high-reliability IoT streaming backend for patient safety. Handled continuous telemetry ingestion from wearable sensors (Fitbit SDK, Oura Ring API, E88 Bluetooth smartwatches). Implemented real-time anomaly detection triggers: if heart rate or SpO2 breaches medical thresholds, automated priority Twilio SMS alerts dispatch immediately to emergency contacts and attending doctors alongside live GPS coordinates streamed over WebSockets.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'Twilio REST API', 'Fitbit Web API', 'Oura Ring API', 'E88 Wearable Ingestion', 'MongoDB', 'Redis', 'PM2'],
    skills: ['node.js', 'express.js', 'socket.io', 'mongodb', 'redis', 'twilio', 'fitbit api', 'oura ring', 'iot', 'healthtech', 'telemetry', 'pm2'],
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
    image: 'assets/images/project-lottery.jpg?v=3',
    desc: 'Multi-tier lottery platform supporting Pick 3, Pick 4, Pick 5, automated recurring number draws, instant ticket validation, and distributed prize calculation.',
    longDesc: 'Built end-to-end backend services for high-volume lottery games. Developed ticket serialization algorithms, cryptographic draw seed execution, automated result evaluation against thousands of active tickets within seconds, and multi-tier prize payouts. Implemented distributed cron workers with Redis lock synchronization ensuring zero double-draw anomalies and audit-compliant transactional integrity.',
    techs: ['Node.js', 'Express', 'Redis Distributed Locks', 'MongoDB', 'RabbitMQ', 'SHA-256 RNG', 'REST APIs', 'Docker'],
    skills: ['node.js', 'express.js', 'redis', 'mongodb', 'rabbitmq', 'lottery', 'gaming', 'distributed locks', 'docker'],
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
    image: 'assets/images/project-dating-geospatial.jpg?v=3',
    desc: 'Proximity-based matchmaking utilizing Redis Geospatial indexing and MongoDB 2dsphere queries for rapid location-aware match discovery with real-time WebSocket chat.',
    longDesc: 'Architected the geo-distributed backend for location-sensitive mobile matching. Utilized Redis Geospatial sets (GEOADD, GEORADIUSBYMEMBER) for microsecond distance filtering coupled with MongoDB 2dsphere indexes for rich demographic queries. Powered multi-user ephemeral chat, typing indicators, read receipts, and live GPS streaming over persistent WebSocket connections.',
    techs: ['Node.js', 'Express', 'Redis Geospatial (GEOSEARCH)', 'MongoDB (2dsphere)', 'Socket.IO', 'AWS S3', 'Firebase FCM', 'JWT'],
    skills: ['node.js', 'express.js', 'redis geospatial', 'geosearch', 'mongodb', '2dsphere', 'socket.io', 'aws s3', 'fcm', 'websockets'],
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
    image: 'assets/images/project-belote.jpg?v=3',
    desc: 'Traditional French Belote card game engine featuring 2v2 matchmaking, bidding rounds, trick-taking rules, team scoring, and zero-loss reconnection recovery.',
    longDesc: 'Developed the complete server-authoritative Belote card game engine integrated into an international gaming portal. Built 2v2 partner matchmaking, trump bidding phases, trick validation according to official French card game rules, contract scoring, and multi-round tournament progression. Built resilient reconnection handling where disconnected players can rejoin active tables without dropping game state.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Redis', 'Gamify API Gateway', 'Heuristic AI Bots', 'PM2', 'Docker'],
    skills: ['node.js', 'express.js', 'socket.io', 'mongodb', 'redis', 'gamify api', 'ai bots', 'belote', 'gaming', 'state machines'],
    metrics: 'Strict Server-Authoritative Card Rules | 2v2 Real-Time Room Orchestration | Instant Reconnection Resumption',
    liveUrl: 'https://belote.mygamify.fr/',
  },
  {
    id: 'slot-game',
    caseStudyUrl: 'projects/slot-game.html',
    title: 'Scalable RNG Slot Game Engine',
    subtitle: 'High-Concurrency Real-Time Gaming',
    category: 'gaming',
    badge: 'iGaming & Real-Time',
    badgeClass: 'tag-gaming',
    image: 'assets/images/project-slot-game.jpg?v=3',
    desc: 'Real-time RNG-based Slot game backend with configurable paylines, reel strip simulation, symbol weighting, multiplier triggers, and atomic wallet balance updates.',
    longDesc: 'Engineered spin lifecycle and reel evaluation backend systems for multiplayer slot environments. Configured mathematical RTP (Return to Player) models, dynamic paytable evaluations across multiple paylines, cascading symbol drops, wild/scatter multiplier triggers, and bonus spin state tracking. Integrated atomic wallet balance transactions ensuring zero financial discrepancies under rapid spin frequency.',
    techs: ['Node.js', 'Express', 'Socket.IO', 'Fortuna Cryptographic PRNG', 'MongoDB ACID Ledger', 'Redis Caching', 'Exact-Math'],
    skills: ['node.js', 'express.js', 'socket.io', 'fortuna prng', 'mongodb', 'redis', 'exact-math', 'slots', 'gaming', 'rtp math'],
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
  initScrollFeatures();
  initCommandPalette();
  initImageLightbox();
  initPwaServiceWorker();
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
            ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-icon" title="Play Live Game (${proj.liveUrl})" aria-label="Play Live Game">🌐</a>` : ''}
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
  const videoAction = document.getElementById('modal-video-btn');
  const gitAction = document.getElementById('modal-git-btn');

  if (proj.liveUrl && liveAction) {
    liveAction.style.display = 'inline-flex';
    liveAction.href = proj.liveUrl;
    liveAction.textContent = proj.id === 'spillorama-bingo' ? 'Visit Live Platform 🌐' : 'Play Live Game 🌐';
  } else if (liveAction) {
    liveAction.style.display = 'none';
  }

  if (proj.youtubeUrl && videoAction) {
    videoAction.style.display = 'inline-flex';
    videoAction.href = proj.youtubeUrl;
  } else if (videoAction) {
    videoAction.style.display = 'none';
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

// Reading Progress Bar & Back to Top Controller
function initScrollFeatures() {
  // Reading progress bar
  let progressBar = document.getElementById('reading-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  // Back to top floating button
  let bttBtn = document.getElementById('back-to-top');
  if (!bttBtn) {
    bttBtn = document.createElement('button');
    bttBtn.id = 'back-to-top';
    bttBtn.setAttribute('aria-label', 'Back to top of page');
    bttBtn.innerHTML = '↑';
    document.body.appendChild(bttBtn);
  }

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Scroll listener
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

    if (window.scrollY > 380) {
      bttBtn.classList.add('show');
    } else {
      bttBtn.classList.remove('show');
    }
  }, { passive: true });
}

// Case Study Social Share Helper
window.shareCaseStudy = function(platform, customTitle) {
  const currentUrl = window.location.href;
  const title = customTitle || document.title;

  if (platform === 'native' || (!platform && navigator.share)) {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this backend architecture case study by Chetan Ladumor: ${title}`,
        url: currentUrl
      }).catch(() => {});
      return;
    }
  }

  if (platform === 'linkedin') {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
  } else if (platform === 'twitter') {
    const text = encodeURIComponent(`Check out this backend systems architecture case study: "${title}" by Chetan Ladumor`);
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${text}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  } else if (platform === 'copy') {
    copyToClipboard(currentUrl, 'Case study link');
  }
};

// PWA Service Worker Registration
function initPwaServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      const swPath = window.location.pathname.includes('/projects/') ? '../sw.js' : '/sw.js';
      navigator.serviceWorker.register(swPath).catch(() => {});
    });
  }
}

// Architecture Diagram Lightbox
function initImageLightbox() {
  let lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox-modal';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Architecture Diagram Zoom');
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image zoom">✕</button>
      <img id="lightbox-img" src="" alt="Enlarged Architecture Diagram">
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Architecture Diagram';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Click listener for case featured images
  document.querySelectorAll('.case-featured-img-box, .case-featured-img').forEach(elem => {
    elem.addEventListener('click', (e) => {
      const img = elem.tagName === 'IMG' ? elem : elem.querySelector('img');
      if (img && img.src) {
        openLightbox(img.src, img.alt);
      }
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

// Command Palette (Cmd+K / Ctrl+K) Controller
function initCommandPalette() {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const shortcutText = isMac ? '⌘K' : 'Ctrl+K';

  // Mount backdrop and palette
  let backdrop = document.getElementById('cmd-palette-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'cmd-palette-backdrop';
    backdrop.innerHTML = `
      <div id="cmd-palette" role="dialog" aria-modal="true" aria-label="Command Palette">
        <div class="cmd-search-wrap">
          <span class="cmd-search-icon">🔍</span>
          <input type="text" class="cmd-input" id="cmd-input" placeholder="Type a project, skill, or action (e.g. 'poker', 'kafka', 'resume')..." autocomplete="off" spellcheck="false">
          <button class="cmd-close-btn" id="cmd-close" aria-label="Close">ESC</button>
        </div>
        <div class="cmd-results" id="cmd-results"></div>
        <div class="cmd-footer">
          <span>Navigation: <kbd>↑</kbd> <kbd>↓</kbd> to move • <kbd>↵</kbd> to select</span>
          <span>Close: <kbd>ESC</kbd></span>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
  }

  // Update or inject command trigger chip into navbar
  const navActions = document.querySelector('.nav-actions');
  if (navActions && !document.querySelector('.cmd-trigger')) {
    const trigger = document.createElement('button');
    trigger.className = 'cmd-trigger';
    trigger.setAttribute('title', `Open Quick Navigation (${shortcutText})`);
    trigger.setAttribute('aria-label', 'Open Command Palette');
    trigger.innerHTML = `<span>Search</span> <span>${shortcutText}</span>`;
    trigger.addEventListener('click', openPalette);
    navActions.prepend(trigger);
  }

  const isProjectPage = window.location.pathname.includes('/projects/');
  const rootPrefix = isProjectPage ? '../' : '';
  const projectsPrefix = isProjectPage ? '' : 'projects/';

  const COMMAND_ITEMS = [
    // Case Studies
    { type: 'case-study', label: 'Provably Fair Crash Game', sub: '50ms WebSocket Loop, HMAC-SHA256 Fairness', icon: '🚀', badge: 'iGaming', url: `${projectsPrefix}crash-game.html` },
    { type: 'case-study', label: 'Swiss Poker Platform', sub: 'Multiplayer Texas Hold\'em & Omaha MTTs', icon: '♠️', badge: 'Real-Time', url: `${projectsPrefix}swisspoker.html` },
    { type: 'case-study', label: 'Spillorama Bingo (Norway)', sub: 'Synchronizing 40+ Physical Halls & Online', icon: '🎰', badge: 'Live Production', url: `${projectsPrefix}spillorama-bingo.html` },
    { type: 'case-study', label: 'La Dépêche Belote', sub: 'Live 2v2 French Card Engine at belote.mygamify.fr', icon: '🃏', badge: 'Live Production', url: `${projectsPrefix}ladepeche-belote.html` },
    { type: 'case-study', label: 'Autonomous AI PR Reviewer', sub: 'LangGraph Multi-Agent GitHub PR Review', icon: '🤖', badge: 'Agentic AI', url: `${projectsPrefix}ai-code-reviewer.html` },
    { type: 'case-study', label: 'Multi-Agent Customer Support', sub: 'PostgreSQL pgvector HNSW Hybrid RAG Pipeline', icon: '🧠', badge: 'Hybrid RAG', url: `${projectsPrefix}ai-customer-support.html` },
    { type: 'case-study', label: 'E-Commerce Microservices', sub: 'Kafka, RabbitMQ, PgBouncer 42% Latency Cut', icon: '📦', badge: 'Distributed', url: `${projectsPrefix}ecommerce-microservices.html` },
    { type: 'case-study', label: 'WeWatchOver Health IoT', sub: 'Wearable Biometric Telemetry & Alerts', icon: '❤️', badge: 'HealthTech', url: `${projectsPrefix}wewatchover-health.html` },
    { type: 'case-study', label: 'AnyFlawa Geospatial Dating', sub: 'Redis GEO Real-Time Location Matchmaking', icon: '📍', badge: 'Geospatial', url: `${projectsPrefix}dating-anyflawa.html` },
    { type: 'case-study', label: 'Lottery & Automated Draw Engine', sub: 'High-Volume Financial Ticket Transactions', icon: '🎟️', badge: 'FinTech', url: `${projectsPrefix}lottery-jackpot.html` },
    { type: 'case-study', label: 'Casino RNG Slot Engine', sub: 'Server-Authoritative Certified Mathematics', icon: '🎰', badge: 'Certified RNG', url: `${projectsPrefix}slot-game.html` },

    // Navigation Sections
    { type: 'navigation', label: 'Portfolio Home', sub: 'Hero & Architectural Overview', icon: '🏠', badge: 'Page', url: `${rootPrefix}index.html#hero` },
    { type: 'navigation', label: 'Engineering Projects', sub: 'Filterable Grid of 11 Production Systems', icon: '💻', badge: 'Section', url: `${rootPrefix}index.html#projects` },
    { type: 'navigation', label: 'Technical Architecture & Principles', sub: 'High Concurrency, Fault Tolerance, Zero Latency', icon: '🏛️', badge: 'Section', url: `${rootPrefix}index.html#architecture` },
    { type: 'navigation', label: 'Core Skills & Competencies', sub: 'Node.js, WebSockets, Kafka, LangGraph, Redis, SQL', icon: '⚡', badge: 'Section', url: `${rootPrefix}index.html#skills` },
    { type: 'navigation', label: 'Professional Experience', sub: '10+ Years Building Production Systems', icon: '💼', badge: 'Section', url: `${rootPrefix}index.html#experience` },
    { type: 'navigation', label: 'Architectural FAQ', sub: 'Concurrency, iGaming, AI, and Availability', icon: '❓', badge: 'Section', url: `${rootPrefix}index.html#faq` },
    { type: 'navigation', label: 'Contact & Hire Chetan', sub: 'Email, WhatsApp, LinkedIn Direct Inquiries', icon: '✉️', badge: 'Section', url: `${rootPrefix}index.html#contact` },

    // Quick Actions
    { type: 'action', label: 'Download Official Resume PDF', sub: 'Chetan_Ladumor_Resume.pdf', icon: '📄', badge: 'Action', action: () => { window.location.href = `${rootPrefix}assets/docs/Chetan_Ladumor_Resume.pdf`; } },
    { type: 'action', label: 'Copy Direct Email', sub: 'ladumorchetan@yahoo.com', icon: '📋', badge: 'Action', action: () => { copyToClipboard('ladumorchetan@yahoo.com', 'Email'); } },
    { type: 'action', label: 'Open WhatsApp Chat', sub: '+91 84695 35440', icon: '💬', badge: 'External', action: () => { window.open('https://wa.me/918469535440', '_blank'); } },
    { type: 'action', label: 'Visit GitHub Profile', sub: 'github.com/chetanladumor', icon: '🐙', badge: 'External', action: () => { window.open('https://github.com/chetanladumor', '_blank'); } },
    { type: 'action', label: 'Visit LinkedIn Profile', sub: 'linkedin.com/in/chetan-ladumor', icon: '💼', badge: 'External', action: () => { window.open('https://www.linkedin.com/in/chetan-ladumor', '_blank'); } }
  ];

  const input = document.getElementById('cmd-input');
  const resultsContainer = document.getElementById('cmd-results');
  const closeBtn = document.getElementById('cmd-close');
  let selectedIndex = 0;
  let filteredItems = [];

  function openPalette() {
    backdrop.classList.add('open');
    input.value = '';
    selectedIndex = 0;
    renderResults('');
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderResults(query) {
    const q = query.toLowerCase().trim();
    filteredItems = COMMAND_ITEMS.filter(item => {
      if (!q) return true;
      return item.label.toLowerCase().includes(q) ||
             item.sub.toLowerCase().includes(q) ||
             (item.badge && item.badge.toLowerCase().includes(q));
    });

    if (filteredItems.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
          <p style="margin-bottom: 0.25rem; font-weight: 600;">No matching commands or architecture case studies found.</p>
          <p style="font-size: 0.8rem;">Try searching for "poker", "kafka", "resume", "email", or "bingo".</p>
        </div>
      `;
      return;
    }

    if (selectedIndex >= filteredItems.length) selectedIndex = 0;

    let html = '';
    let currentType = '';

    filteredItems.forEach((item, idx) => {
      if (item.type !== currentType) {
        currentType = item.type;
        const typeHeader = currentType === 'case-study' ? 'System Case Studies' :
                           currentType === 'navigation' ? 'Navigation' : 'Quick Actions';
        html += `<div class="cmd-group-title">${typeHeader}</div>`;
      }

      const isSelected = idx === selectedIndex ? 'selected' : '';
      html += `
        <div class="cmd-item ${isSelected}" data-index="${idx}">
          <div class="cmd-item-left">
            <span class="cmd-item-icon">${item.icon}</span>
            <div>
              <div class="cmd-item-label">${item.label}</div>
              <div class="cmd-item-sub">${item.sub}</div>
            </div>
          </div>
          <span class="cmd-item-badge">${item.badge}</span>
        </div>
      `;
    });

    resultsContainer.innerHTML = html;

    // Attach click events
    resultsContainer.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        executeItem(filteredItems[idx]);
      });
      el.addEventListener('mouseenter', () => {
        resultsContainer.querySelectorAll('.cmd-item').forEach(item => item.classList.remove('selected'));
        el.classList.add('selected');
        selectedIndex = parseInt(el.getAttribute('data-index'), 10);
      });
    });

    // Scroll into view
    const selectedEl = resultsContainer.querySelector('.cmd-item.selected');
    if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
  }

  function executeItem(item) {
    if (!item) return;
    closePalette();
    if (item.action) {
      item.action();
    } else if (item.url) {
      window.location.href = item.url;
    }
  }

  // Keyboard shortcut listener
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePalette();
    }
  });

  input.addEventListener('input', (e) => {
    selectedIndex = 0;
    renderResults(e.target.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        renderResults(input.value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        renderResults(input.value);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        executeItem(filteredItems[selectedIndex]);
      }
    }
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });

  closeBtn.addEventListener('click', closePalette);
}


