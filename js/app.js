/**
 * Claude Code Tutorial - Main Application (Enhanced)
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
        lang: localStorage.getItem('lang') || 'ja',
        mobileMenuOpen: false
    };

    // ===================================
    // Internationalization (i18n)
    // ===================================
    const i18n = {
        ja: {
            // Navigation
            navTutorials: 'チュートリアル',
            navHandson: 'ハンズオン',
            navBestPractices: 'ベストプラクティス',
            navHelp: 'ヘルプ',
            navCheatsheet: '機能一覧',
            // Hero
            heroBadge: 'Anthropic Best Practices',
            heroTitle1: 'Claude Code',
            heroTitle2: '完全チュートリアル',
            heroDesc: 'エージェント型AIコーディングの真髄を学ぶ。<br>公式ベストプラクティスに基づいた全40章 + 13種類のハンズオン。<br><span style="font-size:0.85em;opacity:0.8;">2026年5月最新版 / Opus 4.7 / Sonnet 4.6 / Haiku 4.5 / v2.1.142対応</span>',
            heroStatChapters: 'チャプター',
            heroStatHandson: 'ハンズオン',
            heroStatTips: 'Tips',
            heroBtnStart: 'チュートリアルを始める',
            heroBtnHandson: 'ハンズオンを見る',
            heroScroll: 'スクロールして探索',
            // Sections
            sectionTagLearning: '学習コース',
            sectionTitleTutorials: 'チュートリアル',
            sectionDescTutorials: '入門から上級まで、段階的にClaude Codeをマスター',
            sectionTagPractice: '実践演習',
            sectionTitleHandson: 'ハンズオン',
            sectionDescHandson: '13種類のテーマで実践的なスキルを習得',
            sectionTagGuidelines: '公式ガイドライン',
            sectionTitleBestPractices: '公式ベストプラクティス',
            sectionDescBestPractices: 'Anthropicが推奨する7つの原則',
            sectionTagSupport: 'サポート',
            sectionTitleHelp: 'ヘルプ・FAQ',
            sectionDescHelp: 'よくある問題の解決策とFAQ',
            // Level tabs
            levelIntro: '入門',
            levelBasic: '基礎',
            levelIntermediate: '中級',
            levelAdvanced: '上級',
            // Handson tabs
            tabNonDev: '非開発系',
            tabDev: '開発系',
            // Help tabs
            tabTroubleshooting: 'トラブルシューティング',
            tabFaq: 'FAQ',
            tabChecklist: 'チェックリスト',
            // Checklist
            checklistIntro: 'Claude Codeを効果的に使うためのチェックリスト。各項目を確認してベストプラクティスを実践してください。',
            checklistComplete: '完了',
            // Footer
            footerResources: '公式リソース',
            footerLearn: '学習コンテンツ',
            footerCopyright: '© 2026 Claude Code Tutorial. Built with Claude Code.',
            // Boris Tips
            borisTipsTitle: 'Boris Cherny氏のTIPS 22選',
            borisTipsDesc: 'Claude Code開発者本人が実践する運用テクニック',
            borisTipsSource: '出典: Boris Cherny (@anthropicaiのClaude Code開発チーム)',
            // Prompt Tips
            promptTipsTitle: 'プロンプトTips 10選',
            promptTipsDesc: 'より良いプロンプトを書くための実践的なテクニック',
            // Modal
            modalKeyPoints: 'ポイント',
            modalOfficial: '公式より',
            modalCodeExample: 'コード例',
            modalCommands: 'コマンド一覧',
            modalRelatedTutorials: '事前に読むべきチュートリアル',
            modalGoal: '目標',
            modalPreparation: '準備（重要）',
            modalExecution: '実行手順',
            modalOutputs: '成果物',
            modalChecklist: '完了チェックリスト',
            modalLearning: '学びのポイント',
            modalRelatedSkills: '関連スキル',
            modalSolutions: '解決策',
            modalPrevention: '予防策',
            modalRelatedTutorial: '関連チュートリアルを見る',
            // Additional modal labels
            copy: 'コピー',
            copyComplete: 'コピー完了',
            copied: 'コピーしました',
            handsonLabel: 'ハンズオン',
            prerequisites: '前提条件',
            steps: '手順',
            inputToClaudeCode: 'Claude Codeに入力:',
            expectedResult: '期待結果:',
            checkpoints: '確認ポイント',
            generatedFiles: '生成されるファイル',
            prerequisiteTutorialsHint: 'このハンズオンを効果的に進めるために、以下のチュートリアルを先に確認することをお勧めします。',
            folderStructure: 'フォルダ構造',
            filesToCreate: '作成するファイル',
            setupSteps: 'セットアップ手順',
            cause: '原因',
            hint: 'ヒント',
            // ダウンロード
            downloadFiles: 'ファイルをダウンロード',
            downloadAll: '一括ダウンロード',
            downloadSingle: 'ダウンロード'
        },
        en: {
            // Navigation
            navTutorials: 'Tutorials',
            navHandson: 'Hands-on',
            navBestPractices: 'Best Practices',
            navHelp: 'Help',
            navCheatsheet: 'Cheat Sheet',
            // Hero
            heroBadge: 'Anthropic Best Practices',
            heroTitle1: 'Claude Code',
            heroTitle2: 'Complete Tutorial',
            heroDesc: 'Master agent-based AI coding.<br>40 chapters + 13 hands-on exercises based on official best practices.<br><span style="font-size:0.85em;opacity:0.8;">May 2026 / Opus 4.7 / Sonnet 4.6 / Haiku 4.5 / v2.1.142</span>',
            heroStatChapters: 'Chapters',
            heroStatHandson: 'Hands-on',
            heroStatTips: 'Tips',
            heroBtnStart: 'Start Tutorials',
            heroBtnHandson: 'View Hands-on',
            heroScroll: 'Scroll to explore',
            // Sections
            sectionTagLearning: 'Learning Path',
            sectionTitleTutorials: 'Tutorials',
            sectionDescTutorials: 'Master Claude Code step by step, from beginner to advanced',
            sectionTagPractice: 'Practice',
            sectionTitleHandson: 'Hands-on',
            sectionDescHandson: '13 themed exercises to build practical skills',
            sectionTagGuidelines: 'Official Guidelines',
            sectionTitleBestPractices: 'Official Best Practices',
            sectionDescBestPractices: '7 principles recommended by Anthropic',
            sectionTagSupport: 'Support',
            sectionTitleHelp: 'Help & FAQ',
            sectionDescHelp: 'Solutions to common problems and FAQ',
            // Level tabs
            levelIntro: 'Intro',
            levelBasic: 'Basic',
            levelIntermediate: 'Intermediate',
            levelAdvanced: 'Advanced',
            // Handson tabs
            tabNonDev: 'Non-Dev',
            tabDev: 'Development',
            // Help tabs
            tabTroubleshooting: 'Troubleshooting',
            tabFaq: 'FAQ',
            tabChecklist: 'Checklist',
            // Checklist
            checklistIntro: 'A checklist for using Claude Code effectively. Review each item and practice best practices.',
            checklistComplete: 'completed',
            // Footer
            footerResources: 'Official Resources',
            footerLearn: 'Learning Content',
            footerCopyright: '© 2026 Claude Code Tutorial. Built with Claude Code.',
            // Boris Tips
            borisTipsTitle: "Boris Cherny's 22 TIPS",
            borisTipsDesc: 'Operational techniques practiced by the Claude Code developer himself',
            borisTipsSource: 'Source: Boris Cherny (Claude Code team @anthropicai)',
            // Prompt Tips
            promptTipsTitle: '10 Prompt Tips',
            promptTipsDesc: 'Practical techniques for writing better prompts',
            // Modal
            modalKeyPoints: 'Key Points',
            modalOfficial: 'From Official',
            modalCodeExample: 'Code Example',
            modalCommands: 'Commands',
            modalRelatedTutorials: 'Prerequisite Tutorials',
            modalGoal: 'Goal',
            modalPreparation: 'Preparation (Important)',
            modalExecution: 'Steps',
            modalOutputs: 'Outputs',
            modalChecklist: 'Completion Checklist',
            modalLearning: 'Learning Points',
            modalRelatedSkills: 'Related Skills',
            modalSolutions: 'Solutions',
            modalPrevention: 'Prevention',
            modalRelatedTutorial: 'View Related Tutorial',
            // Additional modal labels
            copy: 'Copy',
            copyComplete: 'Copied!',
            copied: 'Copied',
            handsonLabel: 'Hands-on',
            prerequisites: 'Prerequisites',
            steps: 'Steps',
            inputToClaudeCode: 'Input to Claude Code:',
            expectedResult: 'Expected Result:',
            checkpoints: 'Checkpoints',
            generatedFiles: 'Generated Files',
            prerequisiteTutorialsHint: 'We recommend reviewing the following tutorials first to make the most of this hands-on exercise.',
            folderStructure: 'Folder Structure',
            filesToCreate: 'Files to Create',
            setupSteps: 'Setup Steps',
            cause: 'Cause',
            hint: 'Hint',
            // Downloads
            downloadFiles: 'Download Files',
            downloadAll: 'Download All',
            downloadSingle: 'Download'
        }
    };

    // ===================================
    // Localization Helper
    // ===================================
    /**
     * Get localized text from an object with _en suffix fields
     * @param {Object} obj - The object containing text fields
     * @param {string} field - The field name (e.g., 'title', 'description')
     * @returns {string} - The localized text
     */
    function getLocalizedText(obj, field) {
        if (!obj) return '';
        if (state.lang === 'en' && obj[field + '_en']) {
            return obj[field + '_en'];
        }
        return obj[field] || '';
    }

    /**
     * Get localized array from an object with _en suffix fields
     * @param {Object} obj - The object containing array fields
     * @param {string} field - The field name (e.g., 'keyPoints', 'tags')
     * @returns {Array} - The localized array
     */
    function getLocalizedArray(obj, field) {
        if (!obj) return [];
        if (state.lang === 'en' && obj[field + '_en']) {
            return obj[field + '_en'];
        }
        return obj[field] || [];
    }

    // ===================================
    // DOM Elements
    // ===================================
    const elements = {
        cursorGlow: document.getElementById('cursorGlow'),
        mainNav: document.getElementById('mainNav'),
        themeToggle: document.getElementById('themeToggle'),
        langToggle: document.getElementById('langToggle'),
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
        applyLanguage(state.lang);
        setupEventListeners();
        setupCursorGlow();
        animateStats();
        renderTutorials(state.currentLevel);
        renderHandson(state.currentHandsonType);
        renderBestPractices();
        renderBorisTips();
        renderPromptTips();
        renderTroubleshooting();
        renderFAQ();
        renderChecklist();
        setupHelpTabs();
    }

    // ===================================
    // Language Management
    // ===================================
    function applyLanguage(lang) {
        state.lang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);

        const t = i18n[lang];
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.querySelector('.lang-label').textContent = lang === 'ja' ? 'EN' : 'JA';
        }

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length >= 4) {
            navLinks[0].textContent = t.navTutorials;
            navLinks[1].textContent = t.navHandson;
            navLinks[2].textContent = t.navBestPractices;
            navLinks[3].textContent = t.navHelp;
        }
        const cheatsheetBtn = document.querySelector('.nav-link-btn');
        if (cheatsheetBtn) cheatsheetBtn.textContent = t.navCheatsheet;

        // Update mobile menu
        const mobileLinks = document.querySelectorAll('.mobile-link');
        if (mobileLinks.length >= 5) {
            mobileLinks[0].textContent = t.navTutorials;
            mobileLinks[1].textContent = t.navHandson;
            mobileLinks[2].textContent = t.navBestPractices;
            mobileLinks[3].textContent = t.navHelp;
            mobileLinks[4].textContent = t.navCheatsheet;
        }

        // Update hero section
        const heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) {
            const badgeDot = heroBadge.querySelector('.badge-dot');
            heroBadge.innerHTML = '';
            if (badgeDot) heroBadge.appendChild(badgeDot.cloneNode(true));
            heroBadge.appendChild(document.createTextNode(t.heroBadge));
        }

        const titleLines = document.querySelectorAll('.title-line');
        if (titleLines.length >= 2) {
            titleLines[0].textContent = t.heroTitle1;
            titleLines[1].textContent = t.heroTitle2;
        }

        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.innerHTML = t.heroDesc;

        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = t.heroStatChapters;
            statLabels[1].textContent = t.heroStatHandson;
            statLabels[2].textContent = t.heroStatTips;
        }

        const btnPrimary = document.querySelector('.btn-primary span');
        if (btnPrimary) btnPrimary.textContent = t.heroBtnStart;

        const btnSecondary = document.querySelector('.btn-secondary span');
        if (btnSecondary) btnSecondary.textContent = t.heroBtnHandson;

        const scrollIndicator = document.querySelector('.scroll-indicator span');
        if (scrollIndicator) scrollIndicator.textContent = t.heroScroll;

        // Update section headers
        updateSectionTexts(t);

        // Update level tabs
        const levelTabs = document.querySelectorAll('.level-tab .tab-text');
        if (levelTabs.length >= 4) {
            levelTabs[0].textContent = t.levelIntro;
            levelTabs[1].textContent = t.levelBasic;
            levelTabs[2].textContent = t.levelIntermediate;
            levelTabs[3].textContent = t.levelAdvanced;
        }

        // Update handson tabs
        const handsonTabs = document.querySelectorAll('.handson-tab');
        if (handsonTabs.length >= 2) {
            handsonTabs[0].textContent = t.tabNonDev;
            handsonTabs[1].textContent = t.tabDev;
        }

        // Update help tabs (preserve SVG)
        const helpTabs = document.querySelectorAll('.help-tab');
        if (helpTabs.length >= 3) {
            const svg0 = helpTabs[0].querySelector('svg');
            const svg1 = helpTabs[1].querySelector('svg');
            const svg2 = helpTabs[2].querySelector('svg');
            helpTabs[0].innerHTML = '';
            helpTabs[1].innerHTML = '';
            helpTabs[2].innerHTML = '';
            if (svg0) helpTabs[0].appendChild(svg0);
            if (svg1) helpTabs[1].appendChild(svg1);
            if (svg2) helpTabs[2].appendChild(svg2);
            helpTabs[0].appendChild(document.createTextNode(' ' + t.tabTroubleshooting));
            helpTabs[1].appendChild(document.createTextNode(' ' + t.tabFaq));
            helpTabs[2].appendChild(document.createTextNode(' ' + t.tabChecklist));
        }

        // Update checklist intro
        const checklistIntro = document.querySelector('.checklist-intro p');
        if (checklistIntro) checklistIntro.textContent = t.checklistIntro;

        // Update footer
        const footerColumns = document.querySelectorAll('.footer-column h4');
        if (footerColumns.length >= 2) {
            footerColumns[0].textContent = t.footerResources;
            footerColumns[1].textContent = t.footerLearn;
        }

        const footerCopyright = document.querySelector('.footer-bottom p');
        if (footerCopyright) footerCopyright.textContent = t.footerCopyright;

        // Update Boris Tips section header
        const borisTipsTitle = document.querySelector('#borisContainer .tips-section-header h2');
        const borisTipsDesc = document.querySelector('#borisContainer .tips-section-header p');
        const borisTipsSource = document.querySelector('#borisContainer .tips-source');
        if (borisTipsTitle) borisTipsTitle.textContent = t.borisTipsTitle;
        if (borisTipsDesc) borisTipsDesc.textContent = t.borisTipsDesc;
        if (borisTipsSource) borisTipsSource.textContent = t.borisTipsSource;

        // Update Prompt Tips section header
        const promptTipsTitle = document.querySelector('#tipsGrid')?.closest('.tips-container')?.querySelector('.tips-section-header h2');
        const promptTipsDesc = document.querySelector('#tipsGrid')?.closest('.tips-container')?.querySelector('.tips-section-header p');
        if (promptTipsTitle) promptTipsTitle.textContent = t.promptTipsTitle;
        if (promptTipsDesc) promptTipsDesc.textContent = t.promptTipsDesc;

        // Re-render all content sections with localized data
        renderTutorials(state.currentLevel);
        renderHandson(state.currentHandsonType);
        renderBestPractices();
        renderBorisTips();
        renderPromptTips();
        renderTroubleshooting();
        renderFAQ();
        renderChecklist();
    }

    function updateSectionTexts(t) {
        // Tutorials section
        const tutorialsSection = document.getElementById('tutorials');
        if (tutorialsSection) {
            const tag = tutorialsSection.querySelector('.section-tag');
            const title = tutorialsSection.querySelector('.section-title');
            const desc = tutorialsSection.querySelector('.section-description');
            if (tag) tag.textContent = t.sectionTagLearning;
            if (title) title.textContent = t.sectionTitleTutorials;
            if (desc) desc.textContent = t.sectionDescTutorials;
        }

        // Handson section
        const handsonSection = document.getElementById('handson');
        if (handsonSection) {
            const tag = handsonSection.querySelector('.section-tag');
            const title = handsonSection.querySelector('.section-title');
            const desc = handsonSection.querySelector('.section-description');
            if (tag) tag.textContent = t.sectionTagPractice;
            if (title) title.textContent = t.sectionTitleHandson;
            if (desc) desc.textContent = t.sectionDescHandson;
        }

        // Best Practices section
        const bpSection = document.getElementById('bestpractices');
        if (bpSection) {
            const headers = bpSection.querySelectorAll('.section-header');
            if (headers[0]) {
                const tag = headers[0].querySelector('.section-tag');
                const title = headers[0].querySelector('.section-title');
                const desc = headers[0].querySelector('.section-description');
                if (tag) tag.textContent = t.sectionTagGuidelines;
                if (title) title.textContent = t.sectionTitleBestPractices;
                if (desc) desc.textContent = t.sectionDescBestPractices;
            }
        }

        // Help section
        const helpSection = document.getElementById('troubleshooting');
        if (helpSection) {
            const tag = helpSection.querySelector('.section-header .section-tag');
            const title = helpSection.querySelector('.section-header .section-title');
            const desc = helpSection.querySelector('.section-header .section-description');
            if (tag) tag.textContent = t.sectionTagSupport;
            if (title) title.textContent = t.sectionTitleHelp;
            if (desc) desc.textContent = t.sectionDescHelp;
        }
    }

    function toggleLanguage() {
        const newLang = state.lang === 'ja' ? 'en' : 'ja';
        applyLanguage(newLang);
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

        // Language toggle
        if (elements.langToggle) {
            elements.langToggle.addEventListener('click', toggleLanguage);
        }

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
                const cheatSheetModal = document.getElementById('cheatSheetModal');
                if (cheatSheetModal && cheatSheetModal.classList.contains('active')) {
                    closeCheatSheetModal();
                } else {
                    closeModal();
                }
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
            // heroセクションはflexbox、他はblock
            targetSection.style.display = sectionId === 'hero' ? 'flex' : 'block';
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
                <h3 class="card-title">${getLocalizedText(tutorial, 'title')}</h3>
                <p class="card-description">${getLocalizedText(tutorial, 'description')}</p>
                <div class="card-tags">
                    ${getLocalizedArray(tutorial, 'tags').map(tag => `<span class="card-tag">${tag}</span>`).join('')}
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
                    <span class="handson-badge ${type === 'dev' ? 'dev' : ''}">${getLocalizedText(item, 'badge')}</span>
                    <h3 class="handson-title">${getLocalizedText(item, 'title')}</h3>
                    <p class="handson-description">${getLocalizedText(item, 'description')}</p>
                    <div class="handson-skills">
                        ${getLocalizedArray(item, 'skills').map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
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
        const t = i18n[state.lang];
        const linkText = state.lang === 'en' ? 'View official documentation' : '公式ドキュメントを見る';

        elements.practicesGrid.innerHTML = window.BEST_PRACTICES.map((practice, index) => `
            <div class="practice-card" style="animation-delay: ${index * 0.1}s">
                <span class="practice-number">${practice.number}</span>
                <div class="practice-content">
                    <h3 class="practice-title">${getLocalizedText(practice, 'title')}</h3>
                    <p class="practice-description">${getLocalizedText(practice, 'description')}</p>
                    ${practice.example ? `
                        <div class="practice-example">
                            <div class="example-bad">
                                <span class="example-label">NG</span>
                                <code>${getLocalizedText(practice.example, 'bad')}</code>
                            </div>
                            <div class="example-good">
                                <span class="example-label">OK</span>
                                <code>${getLocalizedText(practice.example, 'good')}</code>
                            </div>
                        </div>
                    ` : ''}
                    ${practice.officialLink ? `
                        <a href="${practice.officialLink}" target="_blank" rel="noopener" class="practice-link">
                            ${linkText} ${icons['external-link']}
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    function renderBorisTips() {
        const borisGrid = document.getElementById('borisGrid');
        if (!borisGrid || !window.BORIS_TIPS) return;

        borisGrid.innerHTML = window.BORIS_TIPS.map((tip, index) => `
            <div class="tip-card" style="animation-delay: ${index * 0.05}s">
                <div class="tip-header">
                    <span class="tip-number">${tip.number}</span>
                    <span class="tip-category">${getLocalizedText(tip, 'category')}</span>
                </div>
                <div class="tip-content">
                    <h3 class="tip-title">${getLocalizedText(tip, 'title')}</h3>
                    <p class="tip-description">${getLocalizedText(tip, 'description')}</p>
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
                    <span class="tip-category">${getLocalizedText(tip, 'category')}</span>
                </div>
                <div class="tip-content">
                    <h3 class="tip-title">${getLocalizedText(tip, 'title')}</h3>
                    <p class="tip-description">${getLocalizedText(tip, 'description')}</p>
                    ${tip.example ? `
                        <div class="tip-example">
                            <div class="example-bad">
                                <span class="example-label">NG</span>
                                <code>${getLocalizedText(tip.example, 'bad')}</code>
                            </div>
                            <div class="example-good">
                                <span class="example-label">OK</span>
                                <code>${getLocalizedText(tip.example, 'good')}</code>
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

        const t = i18n[state.lang];
        const levelLabels = {
            intro: t.levelIntro,
            basic: t.levelBasic,
            intermediate: t.levelIntermediate,
            advanced: t.levelAdvanced
        };

        let modalContent = `
            <div class="modal-header">
                <span class="modal-level ${level}">${tutorial.number} | ${levelLabels[level]}</span>
                <h2 class="modal-title">${getLocalizedText(tutorial, 'title')}</h2>
                <p class="modal-description">${getLocalizedText(tutorial.content, 'summary')}</p>
            </div>
        `;

        const keyPoints = getLocalizedArray(tutorial.content, 'keyPoints');
        if (keyPoints && keyPoints.length > 0) {
            modalContent += `
                <div class="modal-section">
                    <h3>${t.modalKeyPoints}</h3>
                    <ul>
                        ${keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        const quote = getLocalizedText(tutorial.content, 'quote');
        if (quote) {
            modalContent += `
                <div class="modal-section">
                    <h3>${t.modalOfficial}</h3>
                    <blockquote class="modal-quote">
                        "${quote}"
                    </blockquote>
                </div>
            `;
        }

        if (tutorial.content.code) {
            modalContent += `
                <div class="modal-section">
                    <h3>${t.modalCodeExample}</h3>
                    <div class="modal-code">
                        <button class="copy-btn" onclick="copyCode(this)">
                            ${icons.copy} ${t.copy}
                        </button>
                        <pre>${escapeHtml(tutorial.content.code)}</pre>
                    </div>
                </div>
            `;
        }

        const commands = getLocalizedArray(tutorial.content, 'commands');
        if (commands && commands.length > 0) {
            modalContent += `
                <div class="modal-section">
                    <h3>${t.modalCommands}</h3>
                    <div class="commands-list">
                        ${commands.map(cmd => `
                            <div class="command-item">
                                <code class="command-name">${cmd.cmd}</code>
                                <span class="command-desc">${getLocalizedText(cmd, 'desc')}</span>
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
                    <h3>${t.handsonLabel}: ${getLocalizedText(ho, 'title')}</h3>
                    <div class="handson-goal">
                        <strong>${t.modalGoal}:</strong> ${getLocalizedText(ho, 'goal')}
                    </div>
                    ${ho.prerequisites && ho.prerequisites.length > 0 ? `
                        <div class="handson-prereq">
                            <strong>${t.prerequisites}:</strong>
                            <ul>${getLocalizedArray(ho, 'prerequisites').map(p => `<li>${p}</li>`).join('')}</ul>
                        </div>
                    ` : ''}
                    <div class="handson-steps">
                        <h4>${t.steps}</h4>
                        ${getLocalizedArray(ho, 'steps').map(step => `
                            <div class="step-item">
                                <div class="step-number">${step.step}</div>
                                <div class="step-content">
                                    <div class="step-action">${getLocalizedText(step, 'action')}</div>
                                    <div class="step-prompt">
                                        <div class="prompt-label">${t.inputToClaudeCode}</div>
                                        <div class="prompt-box">
                                            <code>${escapeHtml(step.prompt)}</code>
                                            <button class="copy-btn-small" onclick="copyText('${escapeHtml(step.prompt).replace(/'/g, "\\'")}')">
                                                ${icons.copy}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="step-expected">
                                        <span class="expected-label">${t.expectedResult}</span> ${getLocalizedText(step, 'expected')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${ho.checkpoints ? `
                        <div class="handson-checkpoints">
                            <h4>${t.checkpoints}</h4>
                            <ul>
                                ${getLocalizedArray(ho, 'checkpoints').map(cp => `<li>${icons['check-circle']} ${cp}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${ho.files ? `
                        <div class="handson-files">
                            <h4>${t.generatedFiles}</h4>
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

        const t = i18n[state.lang];
        const details = item.details;
        const prep = details.preparation;

        let modalContent = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="modal-level ${type === 'dev' ? 'intermediate' : 'basic'}">${getLocalizedText(item, 'badge')}</span>
                    ${details.difficulty ? `<span class="difficulty-badge ${details.difficulty}">${details.difficulty}</span>` : ''}
                    ${details.estimatedTime ? `<span class="time-badge">${icons.clock} ${details.estimatedTime}</span>` : ''}
                </div>
                <h2 class="modal-title">${getLocalizedText(item, 'title')}</h2>
                <p class="modal-description">${getLocalizedText(item, 'description')}</p>
            </div>

            <!-- Related Tutorials -->
            ${item.relatedTutorials && item.relatedTutorials.length > 0 ? `
                <div class="modal-section related-tutorials-section">
                    <h3>${icons.book} ${t.modalRelatedTutorials}</h3>
                    <p class="section-hint">${t.prerequisiteTutorialsHint}</p>
                    <div class="related-tutorials-grid">
                        ${item.relatedTutorials.map(rt => `
                            <div class="related-tutorial-card" onclick="openTutorialById('${rt.id}')">
                                <div class="tutorial-id">${rt.id}</div>
                                <div class="tutorial-info">
                                    <div class="tutorial-title">${getLocalizedText(rt, 'title')}</div>
                                    <div class="tutorial-reason">${getLocalizedText(rt, 'reason')}</div>
                                </div>
                                <span class="tutorial-arrow">${icons.chevronRight}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Goal -->
            <div class="modal-section goal-section">
                <h3>${icons.target} ${t.modalGoal}</h3>
                <p class="goal-text">${getLocalizedText(details, 'goal')}</p>
            </div>

            <!-- Preparation Section -->
            ${prep ? `
                <div class="modal-section preparation-section">
                    <h3>${icons.folder} ${t.modalPreparation}</h3>
                    <p class="section-hint">${getLocalizedText(prep, 'description')}</p>

                    <!-- Folder Structure -->
                    ${prep.folderStructure ? `
                        <div class="folder-structure">
                            <div class="folder-structure-header">
                                <span class="label">${t.folderStructure}</span>
                                <button class="copy-btn-small" onclick="copyText(\`${escapeHtml(prep.folderStructure).replace(/`/g, '\\`')}\`)">
                                    ${icons.copy}
                                </button>
                            </div>
                            <pre class="folder-tree">${escapeHtml(prep.folderStructure)}</pre>
                        </div>
                    ` : ''}

                    <!-- Download Section -->
                    ${window.HANDSON_DOWNLOADS && window.HANDSON_DOWNLOADS[item.id] ? `
                        <div class="prep-download-section">
                            <h4>${icons.download} ${t.downloadFiles}</h4>
                            <div class="download-file-list">
                                ${window.HANDSON_DOWNLOADS[item.id].files.map(df => `
                                    <a class="download-file-link" href="${df.path}" download="${df.name}">
                                        ${icons.file} <span>${df.name}</span>
                                        <span class="download-icon-small">${icons.download}</span>
                                    </a>
                                `).join('')}
                            </div>
                            ${window.HANDSON_DOWNLOADS[item.id].files.length > 1 ? `
                                <button class="download-all-btn" onclick="downloadAllHandsonFiles(${item.id})">
                                    ${icons.download} ${t.downloadAll}（${state.lang === 'ja' ? window.HANDSON_DOWNLOADS[item.id].label : window.HANDSON_DOWNLOADS[item.id].label_en}）
                                </button>
                            ` : ''}
                        </div>
                    ` : ''}

                    <!-- Preparation Files -->
                    ${prep.files && prep.files.length > 0 ? `
                        <div class="prep-files">
                            <h4>${t.filesToCreate}</h4>
                            ${prep.files.map((file, idx) => `
                                <div class="prep-file-item">
                                    <div class="prep-file-header" onclick="togglePrepFile(${idx})">
                                        <span class="file-path">${icons.file} ${file.path}</span>
                                        <span class="file-desc">${getLocalizedText(file, 'description')}</span>
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

                    <!-- Setup Steps -->
                    ${prep.setupSteps && prep.setupSteps.length > 0 ? `
                        <div class="setup-steps">
                            <h4>${t.setupSteps}</h4>
                            <ol class="setup-steps-list">
                                ${getLocalizedArray(prep, 'setupSteps').map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                    ` : ''}
                </div>
            ` : ''}

            <!-- Execution Steps -->
            <div class="modal-section execution-section">
                <h3>${icons.terminal} ${t.modalExecution}</h3>
                <div class="handson-steps">
                    ${getLocalizedArray(details, 'steps').map(step => `
                        <div class="step-item">
                            <div class="step-number">${step.step}</div>
                            <div class="step-content">
                                <div class="step-title">${getLocalizedText(step, 'title')}</div>
                                ${step.description ? `<p class="step-description">${getLocalizedText(step, 'description')}</p>` : ''}
                                <div class="step-prompt">
                                    <div class="prompt-label">${t.inputToClaudeCode}</div>
                                    <div class="prompt-box">
                                        <code>${escapeHtml(step.prompt)}</code>
                                        <button class="copy-btn-small" onclick="copyText(\`${escapeHtml(step.prompt).replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">
                                            ${icons.copy}
                                        </button>
                                    </div>
                                </div>
                                <div class="step-expected">
                                    <span class="expected-label">${t.expectedResult}</span> ${getLocalizedText(step, 'expected')}
                                </div>
                                ${step.tips ? `
                                    <div class="step-tips">
                                        <span class="tips-label">${icons.info} ${t.hint}:</span> ${getLocalizedText(step, 'tips')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Outputs -->
            <div class="modal-section outputs-section">
                <h3>${icons['check-circle']} ${t.modalOutputs}</h3>
                <div class="outputs-grid">
                    ${getLocalizedArray(details, 'outputs').map(o => {
                        const output = typeof o === 'string' ? { file: o, description: '' } : o;
                        return `
                            <div class="output-item">
                                <span class="file-tag created">${output.file}</span>
                                ${output.description ? `<span class="output-desc">${getLocalizedText(output, 'description')}</span>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Completion Checklist -->
            <div class="modal-section checklist-section">
                <h3>${icons['check-circle']} ${t.modalChecklist}</h3>
                <ul class="checklist">
                    ${getLocalizedArray(details, 'checkpoints').map(cp => `
                        <li><label><input type="checkbox"> ${cp}</label></li>
                    `).join('')}
                </ul>
            </div>

            <!-- Learning Points -->
            ${details.learningPoints && details.learningPoints.length > 0 ? `
                <div class="modal-section learning-section">
                    <h3>${icons.lightbulb} ${t.modalLearning}</h3>
                    <ul class="learning-points">
                        ${getLocalizedArray(details, 'learningPoints').map(lp => `<li>${lp}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- Related Skills -->
            <div class="modal-section skills-section">
                <h3>${t.modalRelatedSkills}</h3>
                <div class="skills-list">
                    ${getLocalizedArray(item, 'skills').map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
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

    // 複数ファイルの一括ダウンロード
    window.downloadAllHandsonFiles = function(handsonId) {
        const dl = window.HANDSON_DOWNLOADS && window.HANDSON_DOWNLOADS[handsonId];
        if (!dl) return;
        dl.files.forEach(function(file, i) {
            setTimeout(function() {
                const a = document.createElement('a');
                a.href = file.path;
                a.download = file.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }, i * 300);
        });
    };

    // ===================================
    // 機能一覧（チートシート）モーダル
    // ===================================
    window.openCheatSheetModal = function() {
        const modal = document.getElementById('cheatSheetModal');
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeCheatSheetModal = function() {
        const modal = document.getElementById('cheatSheetModal');
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    // ===================================
    // Copy Functions
    // ===================================
    window.copyCode = function(btn) {
        const code = btn.nextElementSibling.textContent;
        const t = i18n[state.lang];
        navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = `${icons.check} ${t.copyComplete}`;
            setTimeout(() => {
                btn.innerHTML = `${icons.copy} ${t.copy}`;
            }, 2000);
        });
    };

    window.copyText = function(text) {
        const t = i18n[state.lang];
        navigator.clipboard.writeText(text).then(() => {
            // Show brief feedback
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = t.copied;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 1500);
        });
    };

    // ===================================
    // Troubleshooting Section
    // ===================================
    function renderTroubleshooting() {
        const grid = document.getElementById('troubleshootingGrid');
        if (!grid || !window.TROUBLESHOOTING) return;

        const t = i18n[state.lang];
        const causeLabel = state.lang === 'en' ? 'Cause: ' : '原因: ';
        const solutionsLabel = state.lang === 'en' ? 'Solutions' : '解決策';
        const preventionLabel = state.lang === 'en' ? 'Prevention' : '予防策';

        grid.innerHTML = window.TROUBLESHOOTING.map((item, index) => `
            <div class="troubleshooting-card" style="animation-delay: ${index * 0.05}s">
                <div class="troubleshooting-header">
                    <div class="troubleshooting-icon">
                        ${icons['alert-triangle']}
                    </div>
                    <div class="troubleshooting-title-area">
                        <div class="troubleshooting-symptom">${getLocalizedText(item, 'symptom')}</div>
                        <span class="troubleshooting-cause">${causeLabel}${getLocalizedText(item, 'cause')}</span>
                    </div>
                </div>
                <div class="troubleshooting-solutions">
                    <h4>${icons['check-circle']} ${solutionsLabel}</h4>
                    <ul class="solution-list">
                        ${item.solutions.map(sol => {
                            const action = typeof sol === 'string' ? sol : getLocalizedText(sol, 'action');
                            const priorityText = typeof sol === 'object' && sol.priority ? getLocalizedText(sol, 'priority') : '';
                            const priorityClass = typeof sol === 'object' && sol.priority ? (sol.priority === '高' ? 'high' : sol.priority === '中' ? 'med' : 'low') : '';
                            const priority = priorityText ? `<span class="priority-${priorityClass}">[${priorityText}]</span> ` : '';
                            return `<li>${priority}${action}</li>`;
                        }).join('')}
                    </ul>
                </div>
                ${item.prevention || item.prevention_en ? `
                    <div class="troubleshooting-prevention">
                        <h4>${preventionLabel}</h4>
                        <p>${getLocalizedText(item, 'prevention')}</p>
                    </div>
                ` : ''}
                ${item.relatedTutorial ? `
                    <a href="#" class="troubleshooting-link" onclick="openTutorialById('${item.relatedTutorial}'); return false;">
                        ${t.modalRelatedTutorial} ${icons.chevronRight}
                    </a>
                ` : ''}
            </div>
        `).join('');
    }

    // ===================================
    // FAQ Section
    // ===================================
    function renderFAQ() {
        const filtersContainer = document.getElementById('faqFilters');
        const grid = document.getElementById('faqGrid');
        if (!grid || !window.FAQ) return;

        const allLabel = state.lang === 'en' ? 'All' : 'すべて';

        // Get unique categories with localization
        const categories = [allLabel, ...new Set(window.FAQ.map(item => getLocalizedText(item, 'category')))];

        // Render filter buttons
        if (filtersContainer) {
            filtersContainer.innerHTML = categories.map((cat, idx) => `
                <button class="faq-filter ${idx === 0 ? 'active' : ''}" data-category="${cat}">
                    ${cat}
                </button>
            `).join('');

            // Add click handlers
            filtersContainer.querySelectorAll('.faq-filter').forEach(btn => {
                btn.addEventListener('click', () => {
                    filtersContainer.querySelectorAll('.faq-filter').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterFAQ(btn.dataset.category);
                });
            });
        }

        // Render FAQ items
        renderFAQItems(window.FAQ);
    }

    function renderFAQItems(items) {
        const grid = document.getElementById('faqGrid');
        if (!grid) return;

        const t = i18n[state.lang];

        grid.innerHTML = items.map((item, index) => `
            <div class="faq-card" data-category="${getLocalizedText(item, 'category')}" style="animation-delay: ${index * 0.03}s">
                <div class="faq-question" onclick="toggleFAQ(this.parentElement)">
                    <div class="faq-question-content">
                        <span class="faq-category-badge">${getLocalizedText(item, 'category')}</span>
                        <span class="faq-question-text">${getLocalizedText(item, 'question')}</span>
                    </div>
                    <div class="faq-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        ${getLocalizedText(item, 'answer')}
                        ${item.relatedTutorial ? `
                            <br><br>
                            <a href="#" class="troubleshooting-link" onclick="openTutorialById('${item.relatedTutorial}'); return false;">
                                ${t.modalRelatedTutorial} ${icons.chevronRight}
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function filterFAQ(category) {
        const allLabel = state.lang === 'en' ? 'All' : 'すべて';
        const items = category === allLabel
            ? window.FAQ
            : window.FAQ.filter(item => getLocalizedText(item, 'category') === category);
        renderFAQItems(items);
    }

    window.toggleFAQ = function(card) {
        card.classList.toggle('open');
    };

    // ===================================
    // Checklist Section
    // ===================================
    function renderChecklist() {
        const container = document.getElementById('checklistSections');
        if (!container || !window.CHECKLIST) return;

        const sectionIcons = {
            beforeSession: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
            duringSession: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
            afterSession: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
            qualityGates: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
        };

        container.innerHTML = Object.entries(window.CHECKLIST).map(([key, section]) => `
            <div class="checklist-section" data-section="${key}">
                <div class="checklist-section-header">
                    <div class="checklist-section-icon">
                        ${sectionIcons[key] || icons['list-checks']}
                    </div>
                    <h3 class="checklist-section-title">${getLocalizedText(section, 'title')}</h3>
                </div>
                <div class="checklist-items">
                    ${section.items.map((item, idx) => `
                        <div class="checklist-item" data-item="${key}-${idx}">
                            <input type="checkbox" id="check-${key}-${idx}" onchange="updateChecklistProgress()">
                            <label for="check-${key}-${idx}">
                                <span class="checklist-item-text">${getLocalizedText(item, 'text')}</span>
                                ${item.tip || item.tip_en ? `<span class="checklist-item-tip">${getLocalizedText(item, 'tip')}</span>` : ''}
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Load saved progress
        loadChecklistProgress();
    }

    window.updateChecklistProgress = function() {
        const checkboxes = document.querySelectorAll('#checklistSections input[type="checkbox"]');
        const checked = document.querySelectorAll('#checklistSections input[type="checkbox"]:checked');
        const total = checkboxes.length;
        const completed = checked.length;
        const percentage = total > 0 ? (completed / total * 100) : 0;

        // Update progress bar
        const fill = document.getElementById('checklistProgressFill');
        const text = document.getElementById('checklistProgressText');
        const t = i18n[state.lang];
        if (fill) fill.style.width = percentage + '%';
        if (text) text.textContent = `${completed} / ${total} ${t.checklistComplete}`;

        // Update item styling
        checkboxes.forEach(cb => {
            const item = cb.closest('.checklist-item');
            if (item) {
                item.classList.toggle('completed', cb.checked);
            }
        });

        // Save to localStorage
        saveChecklistProgress();
    };

    function saveChecklistProgress() {
        const checkboxes = document.querySelectorAll('#checklistSections input[type="checkbox"]');
        const progress = {};
        checkboxes.forEach(cb => {
            progress[cb.id] = cb.checked;
        });
        localStorage.setItem('claudeCodeChecklistProgress', JSON.stringify(progress));
    }

    function loadChecklistProgress() {
        const saved = localStorage.getItem('claudeCodeChecklistProgress');
        if (!saved) return;

        try {
            const progress = JSON.parse(saved);
            Object.entries(progress).forEach(([id, checked]) => {
                const cb = document.getElementById(id);
                if (cb) cb.checked = checked;
            });
            updateChecklistProgress();
        } catch (e) {
            console.error('Failed to load checklist progress:', e);
        }
    }

    // ===================================
    // Help Tabs Management
    // ===================================
    function setupHelpTabs() {
        const tabs = document.getElementById('helpTabs');
        if (!tabs) return;

        tabs.querySelectorAll('.help-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                tabs.querySelectorAll('.help-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show corresponding content
                const tabName = tab.dataset.tab;
                document.getElementById('troubleshootingContent').style.display = tabName === 'troubleshooting' ? 'block' : 'none';
                document.getElementById('faqContent').style.display = tabName === 'faq' ? 'block' : 'none';
                document.getElementById('checklistContent').style.display = tabName === 'checklist' ? 'block' : 'none';
            });
        });
    }

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
