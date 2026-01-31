/**
 * Claude Code Tutorial - Main Application (Enhanced)
 * by EZOAI
 *
 * Anthropic-inspired interactive tutorial website
 * with detailed hands-on modals and official resource links
 */

(function() {
    'use strict';

    // ===================================
    // State Management
    // ===================================
    const state = {
        currentSection: 'hero',
        currentLevel: 'intro',
        currentHandsonType: 'non-dev',
        theme: localStorage.getItem('theme') || 'light',
        mobileMenuOpen: false
    };

    // ===================================
    // DOM Elements
    // ===================================
    const elements = {
        cursorGlow: document.getElementById('cursorGlow'),
        mainNav: document.getElementById('mainNav'),
        themeToggle: document.getElementById('themeToggle'),
        navMenuBtn: document.getElementById('navMenuBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        tutorialsGrid: document.getElementById('tutorialsGrid'),
        handsonGrid: document.getElementById('handsonGrid'),
        practicesGrid: document.getElementById('practicesGrid'),
        levelTabs: document.getElementById('levelTabs'),
        tutorialModal: document.getElementById('tutorialModal'),
        modalBody: document.getElementById('modalBody')
    };

    // ===================================
    // Icons SVG
    // ===================================
    const icons = {
        rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
        cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
        database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
        download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        command: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>',
        users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
        'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        'alert-triangle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
        layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        'git-branch': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
        'x-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
        zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        anchor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>',
        'list-checks': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>',
        plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>',
        package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16.5 9.4-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
        'minimize-2': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
        'git-fork': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>',
        'trending-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
        'refresh-cw': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
        'file-edit': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg>',
        list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
        'external-link': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
        copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
        check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
        target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
        info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
        lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
        clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
        chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
        folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>',
        file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    };

    // ===================================
    // Initialization
    // ===================================
    function init() {
        applyTheme(state.theme);
        setupEventListeners();
        setupCursorGlow();
        animateStats();
        renderTutorials(state.currentLevel);
        renderHandson(state.currentHandsonType);
        renderBestPractices();
        renderPromptTips();
    }

    // ===================================
    // Theme Management
    // ===================================
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        state.theme = theme;
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    // ===================================
    // Event Listeners
    // ===================================
    function setupEventListeners() {
        // Theme toggle
        elements.themeToggle.addEventListener('click', toggleTheme);

        // Mobile menu
        elements.navMenuBtn.addEventListener('click', toggleMobileMenu);

        // Scroll effects
        window.addEventListener('scroll', handleScroll);

        // Level tabs
        if (elements.levelTabs) {
            elements.levelTabs.addEventListener('click', (e) => {
                const tab = e.target.closest('.level-tab');
                if (tab) {
                    const level = tab.dataset.level;
                    setActiveLevel(level);
                }
            });
        }

        // Hands-on tabs
        document.querySelectorAll('.handson-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const type = tab.dataset.type;
                setActiveHandsonType(type);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeydown);

        // Modal close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
                closeMobileMenu();
            }
        });
    }

    // ===================================
    // Cursor Glow Effect
    // ===================================
    function setupCursorGlow() {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                elements.cursorGlow.style.left = e.clientX + 'px';
                elements.cursorGlow.style.top = e.clientY + 'px';
            });
        });
    }

    // ===================================
    // Scroll Handling
    // ===================================
    function handleScroll() {
        const scrollY = window.scrollY;

        // Nav background
        if (scrollY > 50) {
            elements.mainNav.classList.add('scrolled');
        } else {
            elements.mainNav.classList.remove('scrolled');
        }
    }

    // ===================================
    // Stats Animation
    // ===================================
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    animateNumber(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    function animateNumber(element, target) {
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        function update() {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // ===================================
    // Mobile Menu
    // ===================================
    function toggleMobileMenu() {
        state.mobileMenuOpen = !state.mobileMenuOpen;
        elements.navMenuBtn.classList.toggle('active', state.mobileMenuOpen);
        elements.mobileMenu.classList.toggle('active', state.mobileMenuOpen);
        document.body.style.overflow = state.mobileMenuOpen ? 'hidden' : '';
    }

    function closeMobileMenu() {
        state.mobileMenuOpen = false;
        elements.navMenuBtn.classList.remove('active');
        elements.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===================================
    // Section Navigation
    // ===================================
    window.showSection = function(sectionId) {
        // Hide all sections
        document.querySelectorAll('.hero, .section').forEach(section => {
            section.style.display = 'none';
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            state.currentSection = sectionId;

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update nav active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
        }
    };

    // ===================================
    // Tutorial Level Management
    // ===================================
    function setActiveLevel(level) {
        state.currentLevel = level;

        // Update tabs
        document.querySelectorAll('.level-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.level === level);
        });

        // Re-render tutorials
        renderTutorials(level);
    }

    // ===================================
    // Render Tutorials
    // ===================================
    function renderTutorials(level) {
        const tutorials = window.TUTORIALS[level] || [];

        elements.tutorialsGrid.innerHTML = tutorials.map((tutorial, index) => `
            <div class="tutorial-card" data-level="${level}" onclick="openTutorial('${level}', ${index})" style="animation-delay: ${index * 0.1}s">
                <div class="card-header">
                    <span class="card-number">${tutorial.number}</span>
                    <div class="card-icon">${icons[tutorial.icon] || icons.rocket}</div>
                </div>
                <h3 class="card-title">${tutorial.title}</h3>
                <p class="card-description">${tutorial.description}</p>
                <div class="card-tags">
                    ${tutorial.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // Animate cards
        requestAnimationFrame(() => {
            document.querySelectorAll('.tutorial-card').forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, i * 100);
            });
        });
    }

    // ===================================
    // Hands-on Management
    // ===================================
    function setActiveHandsonType(type) {
        state.currentHandsonType = type;

        document.querySelectorAll('.handson-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.type === type);
        });

        renderHandson(type);
    }

    function renderHandson(type) {
        const items = type === 'non-dev' ? window.HANDSON.nonDev : window.HANDSON.dev;

        elements.handsonGrid.innerHTML = items.map((item, index) => `
            <div class="handson-card" onclick="openHandson('${type}', ${index})" style="animation-delay: ${index * 0.1}s; cursor: pointer;">
                <div class="handson-visual">
                    <span class="handson-number">${item.number}</span>
                </div>
                <div class="handson-content">
                    <span class="handson-badge ${type === 'dev' ? 'dev' : ''}">${item.badge}</span>
                    <h3 class="handson-title">${item.title}</h3>
                    <p class="handson-description">${item.description}</p>
                    <div class="handson-skills">
                        ${item.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Animate cards
        requestAnimationFrame(() => {
            document.querySelectorAll('.handson-card').forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, i * 100);
            });
        });
    }

    // ===================================
    // Best Practices
    // ===================================
    function renderBestPractices() {
        elements.practicesGrid.innerHTML = window.BEST_PRACTICES.map((practice, index) => `
            <div class="practice-card" style="animation-delay: ${index * 0.1}s">
                <span class="practice-number">${practice.number}</span>
                <div class="practice-content">
                    <h3 class="practice-title">${practice.title}</h3>
                    <p class="practice-description">${practice.description}</p>
                    ${practice.example ? `
                        <div class="practice-example">
                            <div class="example-bad">
                                <span class="example-label">NG</span>
                                <code>${practice.example.bad}</code>
                            </div>
                            <div class="example-good">
                                <span class="example-label">OK</span>
                                <code>${practice.example.good}</code>
                            </div>
                        </div>
                    ` : ''}
                    ${practice.officialLink ? `
                        <a href="${practice.officialLink}" target="_blank" rel="noopener" class="practice-link">
                            公式ドキュメントを見る ${icons['external-link']}
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    function renderPromptTips() {
        const tipsGrid = document.getElementById('tipsGrid');
        if (!tipsGrid || !window.PROMPT_TIPS) return;

        tipsGrid.innerHTML = window.PROMPT_TIPS.map((tip, index) => `
            <div class="tip-card" style="animation-delay: ${index * 0.05}s">
                <div class="tip-header">
                    <span class="tip-number">${tip.number}</span>
                    <span class="tip-category">${tip.category}</span>
                </div>
                <div class="tip-content">
                    <h3 class="tip-title">${tip.title}</h3>
                    <p class="tip-description">${tip.description}</p>
                    ${tip.example ? `
                        <div class="tip-example">
                            <div class="example-bad">
                                <span class="example-label">NG</span>
                                <code>${tip.example.bad}</code>
                            </div>
                            <div class="example-good">
                                <span class="example-label">OK</span>
                                <code>${tip.example.good}</code>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    // ===================================
    // Tutorial Modal
    // ===================================
    window.openTutorial = function(level, index) {
        const tutorial = window.TUTORIALS[level][index];
        if (!tutorial) return;

        const levelLabels = {
            intro: '入門',
            basic: '基礎',
            intermediate: '中級',
            advanced: '上級'
        };

        let modalContent = `
            <div class="modal-header">
                <span class="modal-level ${level}">${tutorial.number} | ${levelLabels[level]}</span>
                <h2 class="modal-title">${tutorial.title}</h2>
                <p class="modal-description">${tutorial.content.summary}</p>
            </div>
        `;

        if (tutorial.content.keyPoints) {
            modalContent += `
                <div class="modal-section">
                    <h3>Key Points</h3>
                    <ul>
                        ${tutorial.content.keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (tutorial.content.quote) {
            modalContent += `
                <div class="modal-section">
                    <h3>公式より</h3>
                    <blockquote class="modal-quote">
                        "${tutorial.content.quote}"
                    </blockquote>
                </div>
            `;
        }

        if (tutorial.content.code) {
            modalContent += `
                <div class="modal-section">
                    <h3>コード例</h3>
                    <div class="modal-code">
                        <button class="copy-btn" onclick="copyCode(this)">
                            ${icons.copy} コピー
                        </button>
                        <pre>${escapeHtml(tutorial.content.code)}</pre>
                    </div>
                </div>
            `;
        }

        if (tutorial.content.commands) {
            modalContent += `
                <div class="modal-section">
                    <h3>コマンド一覧</h3>
                    <div class="commands-list">
                        ${tutorial.content.commands.map(cmd => `
                            <div class="command-item">
                                <code class="command-name">${cmd.cmd}</code>
                                <span class="command-desc">${cmd.desc}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Hands-on section with detailed steps
        if (tutorial.content.handson) {
            const ho = tutorial.content.handson;
            modalContent += `
                <div class="modal-section handson-detail">
                    <h3>ハンズオン: ${ho.title}</h3>
                    <div class="handson-goal">
                        <strong>目標:</strong> ${ho.goal}
                    </div>
                    ${ho.prerequisites && ho.prerequisites.length > 0 ? `
                        <div class="handson-prereq">
                            <strong>前提条件:</strong>
                            <ul>${ho.prerequisites.map(p => `<li>${p}</li>`).join('')}</ul>
                        </div>
                    ` : ''}
                    <div class="handson-steps">
                        <h4>手順</h4>
                        ${ho.steps.map(step => `
                            <div class="step-item">
                                <div class="step-number">${step.step}</div>
                                <div class="step-content">
                                    <div class="step-action">${step.action}</div>
                                    <div class="step-prompt">
                                        <div class="prompt-label">Claude Codeに入力:</div>
                                        <div class="prompt-box">
                                            <code>${escapeHtml(step.prompt)}</code>
                                            <button class="copy-btn-small" onclick="copyText('${escapeHtml(step.prompt).replace(/'/g, "\\'")}')">
                                                ${icons.copy}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="step-expected">
                                        <span class="expected-label">期待結果:</span> ${step.expected}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${ho.checkpoints ? `
                        <div class="handson-checkpoints">
                            <h4>確認ポイント</h4>
                            <ul>
                                ${ho.checkpoints.map(cp => `<li>${icons['check-circle']} ${cp}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${ho.files ? `
                        <div class="handson-files">
                            <h4>生成されるファイル</h4>
                            <div class="files-list">
                                ${ho.files.created ? ho.files.created.map(f => `<span class="file-tag created">${f}</span>`).join('') : ''}
                                ${ho.files.modified ? ho.files.modified.map(f => `<span class="file-tag modified">${f}</span>`).join('') : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        elements.modalBody.innerHTML = modalContent;
        elements.tutorialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // ===================================
    // Hands-on Modal (Enhanced)
    // ===================================
    window.openHandson = function(type, index) {
        const items = type === 'non-dev' ? window.HANDSON.nonDev : window.HANDSON.dev;
        const item = items[index];
        if (!item) return;

        const details = item.details;
        const prep = details.preparation;

        let modalContent = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="modal-level ${type === 'dev' ? 'intermediate' : 'basic'}">${item.badge}</span>
                    ${details.difficulty ? `<span class="difficulty-badge ${details.difficulty}">${details.difficulty}</span>` : ''}
                    ${details.estimatedTime ? `<span class="time-badge">${icons.clock} ${details.estimatedTime}</span>` : ''}
                </div>
                <h2 class="modal-title">${item.title}</h2>
                <p class="modal-description">${item.description}</p>
            </div>

            <!-- 関連チュートリアル -->
            ${item.relatedTutorials && item.relatedTutorials.length > 0 ? `
                <div class="modal-section related-tutorials-section">
                    <h3>${icons.book} 事前に読むべきチュートリアル</h3>
                    <p class="section-hint">このハンズオンを効果的に進めるために、以下のチュートリアルを先に確認することをお勧めします。</p>
                    <div class="related-tutorials-grid">
                        ${item.relatedTutorials.map(t => `
                            <div class="related-tutorial-card" onclick="openTutorialById('${t.id}')">
                                <div class="tutorial-id">${t.id}</div>
                                <div class="tutorial-info">
                                    <div class="tutorial-title">${t.title}</div>
                                    <div class="tutorial-reason">${t.reason}</div>
                                </div>
                                <span class="tutorial-arrow">${icons.chevronRight}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- 目標 -->
            <div class="modal-section goal-section">
                <h3>${icons.target} 目標</h3>
                <p class="goal-text">${details.goal}</p>
            </div>

            <!-- 準備セクション -->
            ${prep ? `
                <div class="modal-section preparation-section">
                    <h3>${icons.folder} 準備（重要）</h3>
                    <p class="section-hint">${prep.description}</p>

                    <!-- フォルダ構造 -->
                    ${prep.folderStructure ? `
                        <div class="folder-structure">
                            <div class="folder-structure-header">
                                <span class="label">フォルダ構造</span>
                                <button class="copy-btn-small" onclick="copyText(\`${escapeHtml(prep.folderStructure).replace(/`/g, '\\`')}\`)">
                                    ${icons.copy}
                                </button>
                            </div>
                            <pre class="folder-tree">${escapeHtml(prep.folderStructure)}</pre>
                        </div>
                    ` : ''}

                    <!-- 準備ファイル -->
                    ${prep.files && prep.files.length > 0 ? `
                        <div class="prep-files">
                            <h4>作成するファイル</h4>
                            ${prep.files.map((file, idx) => `
                                <div class="prep-file-item">
                                    <div class="prep-file-header" onclick="togglePrepFile(${idx})">
                                        <span class="file-path">${icons.file} ${file.path}</span>
                                        <span class="file-desc">${file.description}</span>
                                        <span class="toggle-icon">${icons.chevronRight}</span>
                                    </div>
                                    <div class="prep-file-content" id="prep-file-${idx}">
                                        <div class="prompt-box">
                                            <pre><code>${escapeHtml(file.content)}</code></pre>
                                            <button class="copy-btn-small" onclick="copyText(\`${escapeHtml(file.content).replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">
                                                ${icons.copy}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <!-- セットアップ手順 -->
                    ${prep.setupSteps && prep.setupSteps.length > 0 ? `
                        <div class="setup-steps">
                            <h4>セットアップ手順</h4>
                            <ol class="setup-steps-list">
                                ${prep.setupSteps.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                    ` : ''}
                </div>
            ` : ''}

            <!-- 実行ステップ -->
            <div class="modal-section execution-section">
                <h3>${icons.terminal} 実行手順</h3>
                <div class="handson-steps">
                    ${details.steps.map(step => `
                        <div class="step-item">
                            <div class="step-number">${step.step}</div>
                            <div class="step-content">
                                <div class="step-title">${step.title}</div>
                                ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
                                <div class="step-prompt">
                                    <div class="prompt-label">Claude Codeに入力:</div>
                                    <div class="prompt-box">
                                        <code>${escapeHtml(step.prompt)}</code>
                                        <button class="copy-btn-small" onclick="copyText(\`${escapeHtml(step.prompt).replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">
                                            ${icons.copy}
                                        </button>
                                    </div>
                                </div>
                                <div class="step-expected">
                                    <span class="expected-label">期待結果:</span> ${step.expected}
                                </div>
                                ${step.tips ? `
                                    <div class="step-tips">
                                        <span class="tips-label">${icons.info} Tips:</span> ${step.tips}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 成果物 -->
            <div class="modal-section outputs-section">
                <h3>${icons['check-circle']} 成果物</h3>
                <div class="outputs-grid">
                    ${details.outputs.map(o => {
                        const output = typeof o === 'string' ? { file: o, description: '' } : o;
                        return `
                            <div class="output-item">
                                <span class="file-tag created">${output.file}</span>
                                ${output.description ? `<span class="output-desc">${output.description}</span>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- 完了チェックリスト -->
            <div class="modal-section checklist-section">
                <h3>${icons['check-circle']} 完了チェックリスト</h3>
                <ul class="checklist">
                    ${details.checkpoints.map(cp => `
                        <li><label><input type="checkbox"> ${cp}</label></li>
                    `).join('')}
                </ul>
            </div>

            <!-- 学びのポイント -->
            ${details.learningPoints && details.learningPoints.length > 0 ? `
                <div class="modal-section learning-section">
                    <h3>${icons.lightbulb} 学びのポイント</h3>
                    <ul class="learning-points">
                        ${details.learningPoints.map(lp => `<li>${lp}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- 関連スキル -->
            <div class="modal-section skills-section">
                <h3>関連スキル</h3>
                <div class="skills-list">
                    ${item.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;

        elements.modalBody.innerHTML = modalContent;
        elements.tutorialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Preparation file toggle
    window.togglePrepFile = function(idx) {
        const content = document.getElementById(`prep-file-${idx}`);
        const header = content.previousElementSibling;
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            header.classList.remove('open');
        } else {
            content.classList.add('open');
            header.classList.add('open');
        }
    };

    // Open tutorial by ID
    window.openTutorialById = function(id) {
        const levels = ['intro', 'basic', 'intermediate', 'advanced'];
        for (const level of levels) {
            const tutorials = window.TUTORIALS[level];
            const index = tutorials.findIndex(t => t.id === id);
            if (index !== -1) {
                openTutorial(level, index);
                return;
            }
        }
    };

    window.closeModal = function() {
        elements.tutorialModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // ===================================
    // Copy Functions
    // ===================================
    window.copyCode = function(btn) {
        const code = btn.nextElementSibling.textContent;
        navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = `${icons.check} コピー完了`;
            setTimeout(() => {
                btn.innerHTML = `${icons.copy} コピー`;
            }, 2000);
        });
    };

    window.copyText = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show brief feedback
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = 'コピーしました';
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 1500);
        });
    };

    // ===================================
    // Utility Functions
    // ===================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function handleKeydown(e) {
        // Add keyboard navigation if needed
    }

    // ===================================
    // Export functions
    // ===================================
    window.closeMobileMenu = closeMobileMenu;

    // ===================================
    // Initialize
    // ===================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
