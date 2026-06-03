// PromptVault Interactive App Core
// Orchestrates theme states, prompt rendering, dynamic filters, copy actions, and mindmap timelines.

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Services
  initThemeManager();
  initToolDirectory();
  initPromptLibrary();
  initFormulaInteractive();
  initWorkflowEngine();
  initScrollAnimations();
  initMobileNav();
});

/* ==========================================================================
   1. Theme Management (Light/Dark Switch)
   ========================================================================== */
function initThemeManager() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Retrieve existing preferences or default to OS preference
  const savedTheme = localStorage.getItem("promptvault-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  // Apply initial theme
  document.documentElement.setAttribute("data-theme", initialTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("promptvault-theme", nextTheme);
    
    // Animate theme switch via temporary transition override
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 500);
  });
}

/* ==========================================================================
   2. AI Tool Directory (Filtering & Rendering)
   ========================================================================== */
function initToolDirectory() {
  const directoryGrid = document.getElementById("directory-grid");
  const filterContainer = document.getElementById("directory-filters");
  if (!directoryGrid || !filterContainer) return;

  const tools = PromptVaultData.tools;
  let activeFilter = "all";

  // Render Category Filter Buttons dynamically
  const categories = ["all", ...new Set(tools.map(t => t.category))];
  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" data-category="${cat}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join("");

  // Initial render
  renderTools(tools, activeFilter);

  // Bind click handlers
  filterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    // Update active states
    filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilter = btn.dataset.category;
    renderTools(tools, activeFilter);
  });
}

function renderTools(tools, filter) {
  const grid = document.getElementById("directory-grid");
  if (!grid) return;

  // Filter tools
  const filteredTools = filter === "all" ? tools : tools.filter(t => t.category === filter);

  grid.innerHTML = filteredTools.map(tool => {
    const bulletList = tool.bestFor.map(item => `<li>${item}</li>`).join("");
    return `
      <div class="tool-card sketch-card scroll-reveal">
        <div class="tool-top">
          <div class="tool-header-block">
            <div class="tool-logo-container" style="border-color: ${tool.accent}; box-shadow: 2px 2px 0 ${tool.accent};">
              ${getSVGIcon(tool.logo)}
            </div>
            <span class="tool-utility-badge">${tool.utility}</span>
          </div>
          <div class="tool-name-dev">
            <h3>${tool.name}</h3>
            <span>by ${tool.developer}</span>
          </div>
        </div>
        
        <p class="tool-description">${tool.description}</p>
        
        <div class="tool-bullets-container" style="margin-bottom: 2rem;">
          <h4 class="tool-bullet-title">Best For</h4>
          <ul class="tool-bullets">
            ${bulletList}
          </ul>
        </div>

        <div class="tool-footer-block">
          <span class="tool-rating">Vault Rating: <span>${tool.rating}</span></span>
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link-btn" style="border-color: ${tool.accent}; color: ${tool.accent};">
            Open Tool ↗
          </a>
        </div>
      </div>
    `;
  }).join("");

  // Re-trigger scroll observer for new items
  observeElements();
}

/* ==========================================================================
   3. Student Prompt Library (Tabs & Dynamic Content)
   ========================================================================== */
function initPromptLibrary() {
  const tabsList = document.getElementById("library-tabs");
  const canvasWrapper = document.getElementById("library-canvas-content");
  if (!tabsList || !canvasWrapper) return;

  const promptsData = PromptVaultData.prompts;
  
  // Set up categories mapping
  const categoryMeta = {
    study: { name: "Study Skills", desc: "Supercharge your classes, textbooks, and active recall study systems." },
    dsa: { name: "DSA Mastery", desc: "Solve tough algorithms and data structures questions using guided feedback." },
    programming: { name: "Clean Coding", desc: "Refactor architecture, hunt bugs, and model robust API layouts." },
    resume: { name: "Resume Builder", desc: "Craft metrics-focused bullet points and pass ATS keyword scans." },
    linkedin: { name: "LinkedIn Growth", desc: "Share your developer learning journey without looking boastful." },
    hackathons: { name: "Hackathon Prep", desc: "Ideate winning features, design structures, and script flawless pitches." },
    productivity: { name: "Productivity", desc: "Build daily schedules and cut massive scope creep down to size." },
    research: { name: "Academic Research", desc: "Synthesize deep academic papers and audit competitive patents." },
    career: { name: "Career Planning", desc: "Construct career roadmaps, network, and master behavioral loops." }
  };

  const categories = Object.keys(promptsData);
  let activeTab = "study";

  // Render Tabs
  tabsList.innerHTML = categories.map(cat => `
    <li>
      <button class="tab-item-btn ${cat === activeTab ? 'active' : ''}" data-tab="${cat}">
        ${getTabIcon(cat)}
        ${categoryMeta[cat]?.name || cat}
      </button>
    </li>
  `).join("");

  // Initial render
  renderPromptCanvas(activeTab, promptsData[activeTab], categoryMeta[activeTab]);

  // Bind click handlers
  tabsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-item-btn");
    if (!btn) return;

    tabsList.querySelectorAll(".tab-item-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeTab = btn.dataset.tab;
    
    // Smooth fade transition for the canvas content
    canvasWrapper.style.opacity = 0;
    setTimeout(() => {
      renderPromptCanvas(activeTab, promptsData[activeTab], categoryMeta[activeTab]);
      canvasWrapper.style.opacity = 1;
    }, 200);
  });

  // Global event delegation for copy buttons
  canvasWrapper.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy-prompt-btn");
    if (!copyBtn) return;

    const targetId = copyBtn.dataset.target;
    const textToCopy = document.getElementById(targetId)?.textContent;

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.classList.remove("copied");
        }, 2000);
      });
    }
  });
}

function renderPromptCanvas(categoryKey, prompts, meta) {
  const canvas = document.getElementById("library-canvas-content");
  if (!canvas) return;

  const promptsHTML = prompts.map((p, idx) => {
    const elementId = `prompt-text-${categoryKey}-${idx}`;
    return `
      <div class="prompt-library-card scroll-reveal">
        <div class="prompt-card-header">
          <div class="prompt-card-title-block">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>
          <span class="prompt-tag-badge">${p.badge}</span>
        </div>
        
        <div class="prompt-code-container">
          <pre class="prompt-pre-block" id="${elementId}">${escapeHTML(p.prompt)}</pre>
          <button class="copy-prompt-btn" data-target="${elementId}" title="Copy Prompt to Clipboard">
            <svg class="copy-icon" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            <svg class="check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  canvas.innerHTML = `
    <div class="canvas-content-wrapper">
      <h2 class="library-section-title highlight-yellow">${meta.name}</h2>
      <p class="library-section-desc">${meta.desc}</p>
      
      <div class="prompts-stack">
        ${promptsHTML}
      </div>
    </div>
  `;

  // Re-trigger scroll observer for new items
  observeElements();
}

/* ==========================================================================
   4. AI Workflows Mind-map Diagram Engine
   ========================================================================== */
function initWorkflowEngine() {
  const menuContainer = document.getElementById("workflow-menu");
  const stage = document.getElementById("workflow-display-stage");
  if (!menuContainer || !stage) return;

  const workflows = PromptVaultData.workflows;
  let activeWfId = workflows[0].id;

  // Render Workflow menu items
  menuContainer.innerHTML = workflows.map(wf => `
    <button class="workflow-menu-btn ${wf.id === activeWfId ? 'active' : ''}" data-workflow-id="${wf.id}">
      ${wf.title}
    </button>
  `).join("");

  // Initial render
  renderWorkflow(workflows.find(w => w.id === activeWfId));

  // Bind click handlers
  menuContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".workflow-menu-btn");
    if (!btn) return;

    menuContainer.querySelectorAll(".workflow-menu-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeWfId = btn.dataset.workflowId;
    const targetWf = workflows.find(w => w.id === activeWfId);

    // Slide transition for workflow content
    stage.style.opacity = 0;
    setTimeout(() => {
      renderWorkflow(targetWf);
      stage.style.opacity = 1;
    }, 200);
  });
}

function renderWorkflow(wf) {
  const stage = document.getElementById("workflow-display-stage");
  if (!stage) return;

  // Construct steps HTML
  const stepsHTML = wf.steps.map((step, idx) => `
    <div class="workflow-node-item scroll-reveal delay-${idx + 1}" id="wf-step-${idx}">
      <span class="node-role-badge">${step.role}</span>
      <div class="node-icon-circle">
        ${getSVGIcon(step.icon)}
      </div>
      <h4 class="node-tool-name">${step.tool}</h4>
      <span class="prompt-tag-badge" style="margin-bottom: 0.75rem;">${step.badge}</span>
      <p class="node-desc">${step.action}</p>
    </div>
  `).join("");

  stage.className = "workflow-stage scroll-reveal";
  stage.innerHTML = `
    <div class="workflow-intro">
      <h3>${wf.title} Blueprint</h3>
      <p>${wf.subtitle}</p>
      <button class="btn btn-secondary workflow-sim-btn" id="run-wf-sim" style="margin-top: 1.5rem; padding: 0.6rem 1.5rem; font-size: 0.9rem;">
        ⚡ Run Pipeline Simulation
      </button>
      <div id="sim-status-log" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-coral); margin-top: 0.75rem; height: 1.25rem;"></div>
    </div>

    <div class="workflow-nodes-container">
      <!-- Animated connecting line -->
      <svg class="workflow-line-svg">
        <path d="M 0 5 H 1000" id="wf-line-path" />
      </svg>
      ${stepsHTML}
    </div>

    <div class="workflow-result-box scroll-reveal delay-3" id="wf-result-box">
      <div class="check" id="wf-check-mark">✓</div>
      <div class="workflow-result-details">
        <h4>Expected Workflow Outcome</h4>
        <p>${wf.result}</p>
      </div>
    </div>
  `;

  // Bind simulation trigger
  const runBtn = stage.querySelector("#run-wf-sim");
  runBtn.addEventListener("click", () => {
    runWorkflowSimulation(wf.steps);
  });

  observeElements();
}

function runWorkflowSimulation(steps) {
  const runBtn = document.getElementById("run-wf-sim");
  const logDiv = document.getElementById("sim-status-log");
  const resultBox = document.getElementById("wf-result-box");
  const checkMark = document.getElementById("wf-check-mark");
  
  if (!runBtn) return;
  runBtn.disabled = true;
  runBtn.textContent = "Running Simulation...";
  
  // Reset visual states
  steps.forEach((_, idx) => {
    const el = document.getElementById(`wf-step-${idx}`);
    if (el) el.classList.remove("sim-active", "sim-done");
  });
  resultBox.classList.remove("sim-success");
  
  let currentStep = 0;
  
  function nextStep() {
    if (currentStep < steps.length) {
      // Mark previous steps done
      if (currentStep > 0) {
        const prevEl = document.getElementById(`wf-step-${currentStep - 1}`);
        if (prevEl) {
          prevEl.classList.remove("sim-active");
          prevEl.classList.add("sim-done");
        }
      }
      
      const el = document.getElementById(`wf-step-${currentStep}`);
      if (el) {
        el.classList.add("sim-active");
        logDiv.textContent = `⚡ [Step ${currentStep + 1}/${steps.length}] ${steps[currentStep].tool} is processing: "${steps[currentStep].role}"...`;
      }
      
      currentStep++;
      setTimeout(nextStep, 1800);
    } else {
      // Mark last step done
      const lastEl = document.getElementById(`wf-step-${steps.length - 1}`);
      if (lastEl) {
        lastEl.classList.remove("sim-active");
        lastEl.classList.add("sim-done");
      }
      
      // Light up results
      resultBox.classList.add("sim-success");
      logDiv.textContent = "🎉 Pipeline success! Outputs successfully generated.";
      
      // Trigger temporary check animation
      checkMark.style.transform = "scale(1.3)";
      setTimeout(() => {
        checkMark.style.transform = "";
      }, 300);
      
      runBtn.disabled = false;
      runBtn.textContent = "⚡ Run Pipeline Simulation";
    }
  }
  
  nextStep();
}

/* ==========================================================================
   5. Scroll Animations (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  observeElements();
}

function observeElements() {
  const elements = document.querySelectorAll(".scroll-reveal, .reveal-scale");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Keep elements revealed once visible to make scrolling smoother
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. Navigation Interactions
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  });

  // Close nav on link click
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("active");
      toggleBtn.classList.remove("active");
    }
  });
}

/* ==========================================================================
   7. SVG Icon Sprite Repository
   ========================================================================== */
function getSVGIcon(key) {
  const icons = {
    claude: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 7.42l-5.63-3.25a2.76 2.76 0 00-2.76 0L5.12 7.42a2.76 2.76 0 00-1.38 2.39v6.5a2.76 2.76 0 001.38 2.39l5.63 3.25a2.76 2.76 0 002.76 0l5.63-3.25a2.76 2.76 0 001.38-2.39v-6.5a2.76 2.76 0 00-1.38-2.39zM12 20.35l-5.63-3.25V10.6L12 7.35l5.63 3.25v6.5z"/></svg>`,
    cursor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    openai: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.22 10.74a5.52 5.52 0 00-.73-2.62 5.55 5.55 0 00-2.38-2.38 5.6 5.6 0 00-6.68 1.48L12 7.74l-.43-.52a5.6 5.6 0 00-6.68-1.48 5.55 5.55 0 00-2.38 2.38 5.52 5.52 0 00-.73 2.62v2.52a5.52 5.52 0 00.73 2.62 5.55 5.55 0 002.38 2.38 5.6 5.6 0 006.68-1.48l.43-.52.43.52a5.6 5.6 0 006.68 1.48 5.55 5.55 0 002.38-2.38 5.52 5.52 0 00.73-2.62v-2.52zM12 9.5l2-1.63 2 1.63v3.27l-2 1.63-2-1.63V9.5z"/></svg>`,
    perplexity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    canva: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M12 6V18"/><path d="M6 12H18"/></svg>`,
    gamma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    capcut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7a2 2 0 00-2.45-1.45L16 7V5a2 2 0 00-2-2H2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2l4.55 1.45A2 2 0 0023 17V7z"/></svg>`,
    elevenlabs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
    midjourney: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.42 17.58L14 11.16l-5.83 5.84a3 3 0 00.34 4.09H19a2 2 0 001.42-.59z"/></svg>`,
    dalle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zM9 13.5l3-3 3 3H9z"/></svg>`,
    notebooklm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
  };
  return icons[key] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

/* ==========================================================================
   8. Specific Category Icons for Notebook Tabs
   ========================================================================== */
function getTabIcon(category) {
  const icons = {
    study: `🎓`,
    dsa: `🌲`,
    programming: `💻`,
    resume: `📄`,
    linkedin: `✍️`,
    hackathons: `⚡`,
    productivity: `⏳`,
    research: `🔬`,
    career: `🚀`
  };
  return icons[category] || `📝`;
}

/* ==========================================================================
   9. Helper Utilities
   ========================================================================== */
function escapeHTML(str) {
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

/* ==========================================================================
   10. Interactive Formula Deck System
   ========================================================================== */
function initFormulaInteractive() {
  const formulaBlock = document.getElementById("formula-interactive-container");
  if (!formulaBlock) return;

  const formulaSteps = [
    {
      num: "01",
      title: "Role",
      analogy: "🎭 The Professional Actor Mask",
      desc: "Assigns a specific expert identity. This establishes vocabulary standards, technical depth boundaries, and contextual focus.",
      withoutPrompt: "Write a resume.",
      withPrompt: "Act as an <strong>experienced technical recruiter at a top-tier software firm</strong>. Write a resume..."
    },
    {
      num: "02",
      title: "Context",
      analogy: "📋 The Scenario Dossier",
      desc: "Provides background details, project scopes, inputs, and environments to anchor the answer logic.",
      withoutPrompt: "Write a resume for software engineering.",
      withPrompt: "Act as an experienced recruiter... <strong>Targeting software engineering internships. Here is my current course syllabus and project notes...</strong>"
    },
    {
      num: "03",
      title: "Task",
      analogy: "🎯 The Action Plan",
      desc: "The core command. The direct action indicating what content should be analyzed, written, or structured.",
      withoutPrompt: "Review my work history.",
      withPrompt: "Act as an experienced recruiter... Targeting internships... <strong>Refactor my experience bullet points using the STAR method.</strong>"
    },
    {
      num: "04",
      title: "Constraints",
      analogy: "🚧 The Boundary Guardrails",
      desc: "Explicit limitations on word lengths, algorithms, libraries, styling formats, or tone rules.",
      withoutPrompt: "Make it look professional.",
      withPrompt: "Act as an experienced recruiter... Refactor experience... <strong>Constraint: Do NOT write more than 4 bullets. Do not use generic words like 'assisted'. Focus on technical outcomes.</strong>"
    },
    {
      num: "05",
      title: "Output Format",
      analogy: "📐 The Output Blueprint",
      desc: "The structural container formatting the answer (markdown tables, code blocks, bullet points, JSON trees).",
      withoutPrompt: "Show the new bullet points.",
      withPrompt: "Act as an experienced recruiter... Refactor experience... Constraint... <strong>Output Format: Render as a double-column markdown table showing 'Original Bullet' vs 'Optimized Bullet'.</strong>"
    }
  ];

  let currentStepIdx = 0;

  renderInteractiveFormula();

  function renderInteractiveFormula() {
    const activeStep = formulaSteps[currentStepIdx];
    
    // Render steps list
    const stepsHTML = formulaSteps.map((step, idx) => `
      <button class="formula-node-btn ${idx === currentStepIdx ? 'active' : ''}" data-step-idx="${idx}">
        <span class="step-num">${step.num}</span>
        <h4 class="step-title">${step.title}</h4>
      </button>
    `).join('<div class="formula-step-connector">➔</div>');

    formulaBlock.innerHTML = `
      <div class="formula-interactive-wrapper">
        <div class="formula-node-tabs">
          ${tabsHTMLGenerator(currentStepIdx)}
        </div>
        
        <div class="formula-details-display ruled-paper">
          <div class="formula-display-left">
            <span class="formula-analogy-tag">${activeStep.analogy}</span>
            <h3>What is ${activeStep.title}?</h3>
            <p>${activeStep.desc}</p>
          </div>
          
          <div class="formula-display-right">
            <div class="comparison-bubble bad">
              <span class="bubble-tag">Without ${activeStep.title} (Basic)</span>
              <p>${activeStep.withoutPrompt}</p>
            </div>
            
            <div class="comparison-bubble good">
              <span class="bubble-tag">With ${activeStep.title} (Engineered)</span>
              <p>${activeStep.withPrompt}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add click listeners to tabs
    formulaBlock.querySelectorAll(".formula-node-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const targetBtn = e.currentTarget;
        currentStepIdx = parseInt(targetBtn.dataset.stepIdx);
        renderInteractiveFormula();
      });
    });
  }

  function tabsHTMLGenerator(currentIdx) {
    return formulaSteps.map((step, idx) => `
      <button class="formula-node-btn ${idx === currentIdx ? 'active' : ''}" data-step-idx="${idx}">
        <span class="step-num">${step.num}</span>
        <span class="step-title">${step.title}</span>
      </button>
    `).join('<div class="formula-step-connector">➔</div>');
  }
}
