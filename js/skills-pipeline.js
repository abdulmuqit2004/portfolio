/**
 * Skills Pipeline — interactive data-to-product skills section
 * Renders entirely from JS data; no external deps required.
 */
(function () {
  'use strict';

  // ─── STAGE DEFINITIONS ────────────────────────────────────────────────────

  const STAGES = [
    {
      id:       'collect',
      label:    'Collect Data',
      short:    'Collect',
      icon:     'fas fa-database',
      color:    '#0EA5E9',
      rgb:      '14,165,233',
      desc:     'Gathering raw data from databases, APIs, file systems, CMSs, and real-world business sources.',
    },
    {
      id:       'clean',
      label:    'Clean & Prepare',
      short:    'Clean',
      icon:     'fas fa-broom',
      color:    '#22D3EE',
      rgb:      '34,211,238',
      desc:     'Wrangling messy inputs into structured, analysis-ready formats using pipelines and transforms.',
    },
    {
      id:       'analyze',
      label:    'Analyze',
      short:    'Analyze',
      icon:     'fas fa-chart-line',
      color:    '#4ADE80',
      rgb:      '74,222,128',
      desc:     'Exploring patterns, testing hypotheses, and surfacing actionable insights from data.',
    },
    {
      id:       'build',
      label:    'Build Models',
      short:    'Build',
      icon:     'fas fa-brain',
      color:    '#C084FC',
      rgb:      '192,132,252',
      desc:     'Training ML models, fine-tuning LLMs, and engineering intelligent AI pipelines.',
    },
    {
      id:       'visualize',
      label:    'Visualize',
      short:    'Visualize',
      icon:     'fas fa-chart-bar',
      color:    '#FBBF24',
      rgb:      '251,191,36',
      desc:     'Turning numbers into stories with charts, dashboards, and polished interfaces.',
    },
    {
      id:       'deploy',
      label:    'Deploy Products',
      short:    'Deploy',
      icon:     'fas fa-rocket',
      color:    '#F472B6',
      rgb:      '244,114,182',
      desc:     'Shipping real products to real users — from static sites to full-stack apps and ML demos.',
    },
  ];

  // ─── SKILLS REGISTRY ──────────────────────────────────────────────────────
  // level: proficient | intermediate | familiar | exploring
  // stages: which pipeline stages this skill belongs to

  const SKILLS = {
    // Core languages
    'Python':              { level: 'proficient',   icon: 'fab fa-python',          stages: ['collect','clean','analyze','build'] },
    'Java':                { level: 'proficient',   icon: 'fab fa-java',            stages: ['collect','build'] },
    'SQL':                 { level: 'proficient',   icon: 'fas fa-database',        stages: ['collect','clean','analyze'] },
    'JavaScript':          { level: 'proficient',   icon: 'fab fa-js',              stages: ['collect','visualize','deploy'] },
    'HTML / CSS':          { level: 'proficient',   icon: 'fab fa-html5',           stages: ['visualize','deploy'] },
    'TypeScript':          { level: 'intermediate', icon: 'fas fa-code',            stages: ['deploy'] },
    'C':                   { level: 'intermediate', icon: 'fas fa-code',            stages: ['collect'] },
    'Bash / CLI':          { level: 'intermediate', icon: 'fas fa-terminal',        stages: ['collect','deploy'] },
    // Collect
    'REST APIs':           { level: 'intermediate', icon: 'fas fa-plug',            stages: ['collect'] },
    'Firebase':            { level: 'intermediate', icon: 'fas fa-fire',            stages: ['collect','deploy'] },
    'Sanity CMS':          { level: 'familiar',     icon: 'fas fa-pen-nib',         stages: ['collect','deploy'] },
    // Clean & Prepare
    'Pandas':              { level: 'intermediate', icon: 'fab fa-python',          stages: ['clean','analyze'] },
    'NumPy':               { level: 'intermediate', icon: 'fab fa-python',          stages: ['clean','analyze','build'] },
    'Excel':               { level: 'proficient',   icon: 'fas fa-table',           stages: ['clean','analyze','visualize'] },
    'Google Sheets':       { level: 'proficient',   icon: 'fas fa-table',           stages: ['clean','analyze'] },
    'Data Pipelines':      { level: 'intermediate', icon: 'fas fa-stream',          stages: ['clean'] },
    'Automation':          { level: 'intermediate', icon: 'fas fa-robot',           stages: ['clean','deploy'] },
    // Analyze
    'EDA':                 { level: 'intermediate', icon: 'fas fa-search-plus',     stages: ['analyze'] },
    'Statistics':          { level: 'familiar',     icon: 'fas fa-percentage',      stages: ['analyze'] },
    'Jupyter':             { level: 'proficient',   icon: 'fas fa-book-open',       stages: ['analyze','build'] },
    'Google Analytics':    { level: 'intermediate', icon: 'fab fa-google',          stages: ['analyze'] },
    'SEMrush':             { level: 'familiar',     icon: 'fas fa-search',          stages: ['analyze'] },
    'SEO':                 { level: 'intermediate', icon: 'fas fa-search',          stages: ['analyze','deploy'] },
    // Build Models
    'scikit-learn':        { level: 'exploring',    icon: 'fas fa-cogs',            stages: ['build'] },
    'TensorFlow / Keras':  { level: 'intermediate', icon: 'fas fa-brain',           stages: ['build'] },
    'PyTorch':             { level: 'intermediate', icon: 'fas fa-fire-alt',        stages: ['build'] },
    'HuggingFace':         { level: 'intermediate', icon: 'fas fa-robot',           stages: ['build','deploy'] },
    'LLMs':                { level: 'intermediate', icon: 'fas fa-comment-dots',    stages: ['build','collect'] },
    'Prompt Engineering':  { level: 'intermediate', icon: 'fas fa-magic',           stages: ['build'] },
    'Naive Bayes':         { level: 'intermediate', icon: 'fas fa-envelope',        stages: ['build'] },
    'Machine Learning':    { level: 'intermediate', icon: 'fas fa-project-diagram', stages: ['build'] },
    'Deep Learning':       { level: 'intermediate', icon: 'fas fa-layer-group',     stages: ['build'] },
    'Librosa':             { level: 'familiar',     icon: 'fas fa-music',           stages: ['build'] },
    // Visualize
    'Matplotlib':          { level: 'intermediate', icon: 'fas fa-chart-area',      stages: ['visualize','analyze'] },
    'Power BI':            { level: 'intermediate', icon: 'fas fa-chart-bar',       stages: ['visualize','analyze'] },
    'Gradio':              { level: 'familiar',     icon: 'fas fa-window-restore',  stages: ['visualize','deploy'] },
    'Canva':               { level: 'proficient',   icon: 'fas fa-paint-brush',     stages: ['visualize'] },
    'Figma':               { level: 'familiar',     icon: 'fas fa-pencil-ruler',    stages: ['visualize'] },
    // Deploy Products
    'React':               { level: 'intermediate', icon: 'fab fa-react',           stages: ['deploy','visualize'] },
    'Next.js':             { level: 'exploring',    icon: 'fas fa-bolt',            stages: ['deploy'] },
    'Node.js':             { level: 'familiar',     icon: 'fab fa-node',            stages: ['deploy'] },
    'Tailwind CSS':        { level: 'familiar',     icon: 'fas fa-wind',            stages: ['deploy','visualize'] },
    'Git / GitHub':        { level: 'proficient',   icon: 'fab fa-github',          stages: ['deploy'] },
    'Vercel':              { level: 'familiar',     icon: 'fas fa-rocket',          stages: ['deploy'] },
    'Cloudflare':          { level: 'familiar',     icon: 'fas fa-shield-alt',      stages: ['deploy'] },
    'Stripe':              { level: 'familiar',     icon: 'fas fa-credit-card',     stages: ['deploy'] },
    'WordPress':           { level: 'proficient',   icon: 'fab fa-wordpress',       stages: ['deploy'] },
    'Postman':             { level: 'familiar',     icon: 'fas fa-paper-plane',     stages: ['collect','deploy'] },
  };

  // ─── PROJECTS REGISTRY ────────────────────────────────────────────────────

  const PROJECTS = [
    {
      id:     'multilingual-nlp',
      name:   'Multilingual LLM Evaluation',
      url:    'https://github.com/ahatanar/multilingual-mental-health',
      icon:   'fas fa-language',
      stages: ['collect','clean','analyze','build'],
      tech:   ['Python','Excel','LLMs','Prompt Engineering'],
    },
    {
      id:     'image-caption',
      name:   'Image Caption Generator (BLIP)',
      url:    'https://github.com/abdulmuqit2004/image-caption-generator',
      icon:   'fas fa-image',
      stages: ['collect','build','visualize','deploy'],
      tech:   ['PyTorch','HuggingFace','Gradio'],
    },
    {
      id:     'speech-emotion',
      name:   'Speech Emotion Detector',
      url:    'https://github.com/abdulmuqit2004/SER',
      icon:   'fas fa-microphone',
      stages: ['collect','clean','build','visualize'],
      tech:   ['TensorFlow / Keras','Librosa','Gradio'],
    },
    {
      id:     'nba-salary',
      name:   'NBA Salary Analysis',
      url:    'https://github.com/abdulmuqit2004/NBA-Metrics-Analysis',
      icon:   'fas fa-chart-pie',
      stages: ['collect','clean','analyze','visualize'],
      tech:   ['Pandas','NumPy','Matplotlib'],
    },
    {
      id:     'spam-detector',
      name:   'Spam Detector',
      url:    'https://github.com/abdulmuqit2004/SpamDetector',
      icon:   'fas fa-envelope-open-text',
      stages: ['collect','build'],
      tech:   ['Java','Naive Bayes'],
    },
    {
      id:     'ai-tech-support',
      name:   'AI Tech Support Assistant',
      url:    'https://github.com/abdulmuqit2004/AI-Tech-Support',
      icon:   'fas fa-headset',
      stages: ['build','visualize','deploy'],
      tech:   ['React','LLMs','REST APIs'],
    },
    {
      id:     'safa-website',
      name:   'Safa Driving Academy',
      url:    'https://www.safadrivingacademy.ca',
      icon:   'fas fa-car',
      stages: ['collect','deploy'],
      tech:   ['HTML / CSS','Stripe','Sanity CMS'],
    },
    {
      id:     'film-fusion',
      name:   'Film Fusion',
      url:    'https://github.com/abdulmuqit2004/filmfusion',
      icon:   'fas fa-film',
      stages: ['collect','deploy'],
      tech:   ['React','Firebase','Vercel'],
    },
    {
      id:     'pak-halal',
      name:   'Pak Halal Analytics',
      url:    null,
      icon:   'fas fa-store',
      stages: ['collect','clean','analyze','visualize'],
      tech:   ['Python','SQL','Excel','Power BI'],
    },
    {
      id:     'brandlifters',
      name:   'BrandLifters',
      url:    'https://brandlifters.ca',
      icon:   'fas fa-bullhorn',
      stages: ['analyze','deploy'],
      tech:   ['Next.js','TypeScript','Google Analytics'],
    },
    {
      id:     'g1-tool',
      name:   'G1 Practice Test Tool',
      url:    'https://g1.safadrivingacademy.ca',
      icon:   'fas fa-clipboard-check',
      stages: ['collect','deploy'],
      tech:   ['JavaScript','HTML / CSS'],
    },
  ];

  // ─── ALL-SKILLS VIEW CATEGORIES ───────────────────────────────────────────

  const ALL_CATEGORIES = [
    {
      label: 'Languages',
      icon:  'fas fa-code',
      keys:  ['Python','Java','SQL','JavaScript','HTML / CSS','TypeScript','C','Bash / CLI'],
    },
    {
      label: 'Data & ML',
      icon:  'fas fa-brain',
      keys:  ['Pandas','NumPy','scikit-learn','TensorFlow / Keras','PyTorch','HuggingFace',
              'LLMs','Prompt Engineering','Machine Learning','Deep Learning',
              'Naive Bayes','Librosa','EDA','Statistics','Matplotlib','Jupyter','Data Pipelines','Automation'],
    },
    {
      label: 'Web & Cloud',
      icon:  'fas fa-cloud',
      keys:  ['React','Next.js','TypeScript','Node.js','Tailwind CSS','Firebase','Vercel',
              'Cloudflare','Stripe','Sanity CMS','WordPress','Git / GitHub','REST APIs','Gradio','Postman'],
    },
    {
      label: 'Analytics & Tools',
      icon:  'fas fa-chart-pie',
      keys:  ['Google Analytics','SEMrush','SEO','Excel','Power BI','Google Sheets','Canva','Figma'],
    },
  ];

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  function stageSkills(stageId) {
    return Object.entries(SKILLS)
      .filter(([, s]) => s.stages.includes(stageId))
      .map(([name, s]) => ({ name, ...s }));
  }

  function stageProjects(stageId) {
    return PROJECTS.filter(p => p.stages.includes(stageId));
  }

  // ─── RENDER: PIPELINE TRACK ───────────────────────────────────────────────

  function renderTrack() {
    const nodes = STAGES.map((st, i) => {
      const isFirst = i === 0;
      const connector = i < STAGES.length - 1
        ? `<div class="pipeline-connector" aria-hidden="true"><span class="connector-line"></span></div>`
        : '';
      return `
        <button
          class="pipeline-node${isFirst ? ' active' : ''}"
          data-stage="${st.id}"
          data-index="${i}"
          role="tab"
          aria-selected="${isFirst}"
          aria-controls="pipeline-panel"
          tabindex="${isFirst ? '0' : '-1'}"
          style="--sc:${st.color};--sr:${st.rgb};"
          title="${st.label}"
        >
          <div class="node-ring">
            <div class="node-circle"><i class="${st.icon}" aria-hidden="true"></i></div>
          </div>
          <span class="node-label">${st.short}</span>
        </button>${connector}`;
    }).join('');

    return `<div class="pipeline-track" role="tablist" aria-label="Pipeline stages">${nodes}</div>`;
  }

  // ─── RENDER: STAGE PANEL ──────────────────────────────────────────────────

  function renderPanel(stage) {
    const skills   = stageSkills(stage.id);
    const projects = stageProjects(stage.id);

    const skillTags = skills.map((s, i) => `
      <span class="skill-tag" data-level="${s.level}" style="animation-delay:${(i * 40)}ms">
        <i class="${s.icon}" aria-hidden="true"></i>${s.name}
      </span>`).join('');

    const projectChips = projects.map((p, i) => {
      const tag = p.url ? 'a' : 'div';
      const href = p.url ? `href="${p.url}" target="_blank" rel="noopener noreferrer"` : '';
      return `
        <${tag} class="project-chip" ${href} style="animation-delay:${(i * 55)}ms" title="${p.name}">
          <span class="chip-icon"><i class="${p.icon}" aria-hidden="true"></i></span>
          <span class="chip-body">
            <span class="chip-name">${p.name}</span>
            <span class="chip-tech">${p.tech.join(' · ')}</span>
          </span>
          ${p.url ? '<i class="fas fa-external-link-alt chip-link-icon" aria-hidden="true"></i>' : ''}
        </${tag}>`;
    }).join('');

    return `
      <div class="panel-inner" style="--sc:${stage.color};--sr:${stage.rgb};">
        <div class="panel-header">
          <div class="panel-stage-icon" aria-hidden="true"><i class="${stage.icon}"></i></div>
          <div class="panel-header-text">
            <h3 class="panel-title">${stage.label}</h3>
            <p class="panel-desc">${stage.desc}</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="panel-col panel-col--skills">
            <h4 class="panel-col-title"><i class="fas fa-tools" aria-hidden="true"></i> Skills</h4>
            <div class="skills-tag-cloud pipeline-skills">${skillTags}</div>
            <div class="skills-legend-mini" aria-label="Skill level legend">
              <span class="legend-dot proficient"   aria-hidden="true"></span><span>Proficient</span>
              <span class="legend-dot intermediate" aria-hidden="true"></span><span>Intermediate</span>
              <span class="legend-dot familiar"     aria-hidden="true"></span><span>Familiar</span>
              <span class="legend-dot exploring"    aria-hidden="true"></span><span>Exploring</span>
            </div>
          </div>
          <div class="panel-col panel-col--projects">
            <h4 class="panel-col-title"><i class="fas fa-folder-open" aria-hidden="true"></i> Projects</h4>
            <div class="project-chips">${projectChips}</div>
          </div>
        </div>
      </div>`;
  }

  // ─── RENDER: ALL SKILLS GRID ──────────────────────────────────────────────

  function renderAllSkills() {
    return ALL_CATEGORIES.map(cat => `
      <div class="all-skills-category">
        <h4 class="all-cat-title"><i class="${cat.icon}" aria-hidden="true"></i> ${cat.label}</h4>
        <div class="skills-tag-cloud">
          ${cat.keys.filter(k => SKILLS[k]).map(k => `
            <span class="skill-tag" data-level="${SKILLS[k].level}">
              <i class="${SKILLS[k].icon}" aria-hidden="true"></i>${k}
            </span>`).join('')}
        </div>
      </div>`).join('');
  }

  // ─── RENDER: ROOT ─────────────────────────────────────────────────────────

  function render(root) {
    const totalSkills = Object.keys(SKILLS).length;
    root.innerHTML = `
      <div class="pipeline-wrapper">
        ${renderTrack()}
        <div class="pipeline-panel" id="pipeline-panel" role="tabpanel" aria-live="polite">
          ${renderPanel(STAGES[0])}
        </div>
      </div>
      <div class="skills-all-section">
        <button
          class="btn-all-skills"
          id="btn-toggle-all"
          aria-expanded="false"
          aria-controls="skills-all-grid"
        >
          <i class="fas fa-th" aria-hidden="true"></i>
          View all ${totalSkills} skills
          <i class="fas fa-chevron-down chevron-icon" aria-hidden="true"></i>
        </button>
        <div class="skills-all-grid" id="skills-all-grid" hidden>
          ${renderAllSkills()}
        </div>
      </div>`;
  }

  // ─── INTERACTIONS ─────────────────────────────────────────────────────────

  function swapPanel(panel, stage) {
    panel.classList.add('panel-out');
    setTimeout(() => {
      panel.innerHTML = renderPanel(stage);
      panel.classList.remove('panel-out');
    }, 200);
  }

  function initInteractions(root) {
    const nodes  = Array.from(root.querySelectorAll('.pipeline-node'));
    const panel  = root.querySelector('#pipeline-panel');
    const toggleBtn = root.querySelector('#btn-toggle-all');
    const allGrid   = root.querySelector('#skills-all-grid');

    function activate(index) {
      nodes.forEach((n, i) => {
        const on = i === index;
        n.classList.toggle('active', on);
        n.setAttribute('aria-selected', on);
        n.tabIndex = on ? 0 : -1;
      });
      swapPanel(panel, STAGES[index]);
    }

    nodes.forEach((node, i) => {
      node.addEventListener('click', () => activate(i));
      node.addEventListener('keydown', e => {
        let next = i;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next = Math.min(i + 1, nodes.length - 1); }
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); next = Math.max(i - 1, 0); }
        if (e.key === 'Home')  { e.preventDefault(); next = 0; }
        if (e.key === 'End')   { e.preventDefault(); next = nodes.length - 1; }
        if (next !== i) { activate(next); nodes[next].focus(); }
      });
    });

    if (toggleBtn && allGrid) {
      toggleBtn.addEventListener('click', () => {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        allGrid.hidden = expanded;
        toggleBtn.querySelector('.chevron-icon').classList.toggle('chevron-up', !expanded);
      });
    }
  }

  // ─── PUBLIC INIT ──────────────────────────────────────────────────────────

  window.initSkillsPipeline = function () {
    const root = document.getElementById('skills-pipeline-root');
    if (!root) return;
    render(root);
    initInteractions(root);
  };

})();
