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
        mobileMenuOpen: false,
        selectedProjectTracks: JSON.parse(localStorage.getItem('cctSelectedTracks') || '[]'),
        auth: { authenticated: false, org: null, start: null, end: null },
        pendingSection: null,
        progress: JSON.parse(localStorage.getItem('cctChapterProgress') || '{}'),
        openModal: null,
        applyingHash: false,
        searchOpen: false,
        searchIndex: null,
        searchResults: [],
        searchCursor: 0
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
            heroDesc: 'エージェント型AIコーディングの真髄を学ぶ。<br>公式ベストプラクティスに基づいた全50章 + 13種類のハンズオン。<br><span style="font-size:0.85em;opacity:0.8;">2026年7月最新版 / Opus 5 / Sonnet 5 / Fable 5 / v2.1.220対応</span>',
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
            downloadSingle: 'ダウンロード',
            // Navigation 追加
            navProjects: '開発トラック',
            navSettings: '設定テンプレート',
            navPrivacy: 'プライバシー',
            sectionTagSettings: '配布物',
            sectionTitleSettings: 'Claude 設定テンプレート',
            sectionDescSettings: 'Mac / Windows 共通の ZIP で配布。展開して所定の場所に置くだけで使えます。',
            settingsDownloadLabel: 'ZIPでダウンロード',
            settingsPlacementLabel: '配置',
            settingsSizeLabel: 'サイズ',
            learningTimeLabel: '学習目安',
            searchPlaceholder: 'チュートリアル・ハンズオン・トラック・設定を検索',
            searchOpenLabel: '検索',
            searchHint: 'Enterで開く、↑↓で移動、Escで閉じる',
            searchNoResult: '該当なし。別のキーワードで試してください',
            searchKindTutorial: 'チュートリアル',
            searchKindHandson: 'ハンズオン',
            searchKindTrack: '開発トラック',
            searchKindSetting: '設定テンプレート',
            progressLabel: '完了',
            progressOfTotal: '章',
            markDone: 'この章を完了にする',
            markUndone: '完了を取り消す',
            doneBadge: '完了',
            prevChapter: '前の章',
            nextChapter: '次の章',
            resetProgress: '進捗をリセット',
            resetProgressConfirm: '学習進捗をすべて消します。よろしいですか',
            cheatSearchPlaceholder: '機能名で絞り込み',
            footerAbout: 'サイトについて',
            // 開発トラック
            sectionTagProjects: '開発一貫ハンズオン',
            sectionTitleProjects: 'テーマ別 開発トラック',
            sectionDescProjects: 'テーマを選び、準備物をその場でダウンロード。学ぶ章を順にこなし、最終成果物を受入基準で確かめて見比べる。',
            projTrackSelected: '選択中',
            projSelectTrack: 'このテーマを選ぶ',
            projSelectedSuffix: '件選択中',
            projDownloadBundle: '準備物をZIPでダウンロード',
            projDownloadZip: '準備物（ZIP・Mac/Win対応）',
            projBundleContents: '同梱ファイル',
            projOpenDetail: '詳細とパイプライン',
            projScenario: 'シナリオ',
            projPipeline: 'パイプライン',
            projParallel: '並列',
            projSequential: '逐次',
            projContext: 'コンテキスト分離',
            projLearnTutorials: '学ぶ章',
            projDeliverable: '最終成果物',
            projAcceptance: '受入基準',
            projCompareAxis: '比較の観点',
            projCompareTitle: '選択トラックの比較',
            projCompareEmpty: 'テーマを2つ以上選ぶと比較できます。'
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
            heroDesc: 'Master agent-based AI coding.<br>50 chapters + 13 hands-on exercises based on official best practices.<br><span style="font-size:0.85em;opacity:0.8;">July 2026 / Opus 5 / Sonnet 5 / Fable 5 / v2.1.220</span>',
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
            downloadSingle: 'Download',
            // Navigation added
            navProjects: 'Tracks',
            navSettings: 'Settings',
            navPrivacy: 'Privacy',
            sectionTagSettings: 'Distribution',
            sectionTitleSettings: 'Claude Settings Templates',
            sectionDescSettings: 'Cross-platform ZIPs (Mac/Windows). Extract and drop them into the right place.',
            settingsDownloadLabel: 'Download (ZIP)',
            settingsPlacementLabel: 'Placement',
            settingsSizeLabel: 'Size',
            learningTimeLabel: 'Est. time',
            searchPlaceholder: 'Search tutorials, hands-on, tracks, settings',
            searchOpenLabel: 'Search',
            searchHint: 'Enter to open, arrows to move, Esc to close',
            searchNoResult: 'No match. Try another keyword',
            searchKindTutorial: 'Tutorial',
            searchKindHandson: 'Hands-on',
            searchKindTrack: 'Dev track',
            searchKindSetting: 'Settings template',
            progressLabel: 'done',
            progressOfTotal: 'chapters',
            markDone: 'Mark this chapter done',
            markUndone: 'Unmark as done',
            doneBadge: 'Done',
            prevChapter: 'Previous',
            nextChapter: 'Next',
            resetProgress: 'Reset progress',
            resetProgressConfirm: 'This clears all learning progress. Continue?',
            cheatSearchPlaceholder: 'Filter by feature name',
            footerAbout: 'About',
            // Project tracks
            sectionTagProjects: 'End-to-end Hands-on',
            sectionTitleProjects: 'Themed Dev Tracks',
            sectionDescProjects: 'Pick a theme, download the materials, work through the listed chapters, then verify and compare the final deliverable.',
            projTrackSelected: 'Selected',
            projSelectTrack: 'Select this theme',
            projSelectedSuffix: ' selected',
            projDownloadBundle: 'Download bundle (ZIP)',
            projDownloadZip: 'Bundle (ZIP, Mac/Win)',
            projBundleContents: 'Included files',
            projOpenDetail: 'Detail & pipeline',
            projScenario: 'Scenario',
            projPipeline: 'Pipeline',
            projParallel: 'Parallel',
            projSequential: 'Sequential',
            projContext: 'Context isolation',
            projLearnTutorials: 'Chapters to learn',
            projDeliverable: 'Final deliverable',
            projAcceptance: 'Acceptance criteria',
            projCompareAxis: 'Comparison axes',
            projCompareTitle: 'Compare selected tracks',
            projCompareEmpty: 'Select 2+ themes to compare.'
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
        circle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>',
        search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>',
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
        renderProtectedContent();
        setupHelpTabs();
        setupAuth();
        setupRouting();
        setupSearch();
        setupCheatFilter();
        bootstrapAuth();
    }

    // tutorials.js（学習コンテンツ本体）は認証後に動的ロードされる。
    // 未ロード時はここで何もしない（hero/privacy のみ公開）。
    function renderProtectedContent() {
        if (!window.TUTORIALS) return;
        renderTutorials(state.currentLevel);
        renderHandson(state.currentHandsonType);
        renderProjects();
        renderSettings();
        renderBestPractices();
        renderBorisTips();
        renderPromptTips();
        renderTroubleshooting();
        renderFAQ();
        renderChecklist();
        renderProgressUI();
        state.searchIndex = null; // 言語切替などで作り直す
    }

    // ===================================
    // 受講者認証（組織ID＋パスワード＋閲覧期間）
    // 実体の保護は Vercel Middleware（サーバー側）。ここはUI制御。
    // ===================================
    const PROTECTED_SECTIONS = new Set(['tutorials', 'handson', 'projects', 'settings']);

    function daysLeft(endDate) {
        const end = Date.parse(endDate + 'T23:59:59Z');
        return Math.max(0, Math.ceil((end - Date.now()) / 86400000));
    }

    function applyAuthedUI(data) {
        state.auth = { authenticated: true, org: data.org, start: data.start, end: data.end };
        const searchBtn = document.getElementById('navSearchBtn');
        if (searchBtn) searchBtn.hidden = false;
        const statusEl = document.getElementById('authStatus');
        const loginBtn = document.getElementById('authLoginBtn');
        const logoutBtn = document.getElementById('authLogoutBtn');
        if (statusEl) {
            const left = daysLeft(data.end);
            statusEl.textContent = `${data.org.name}（残り${left}日）`;
            statusEl.hidden = false;
        }
        if (loginBtn) loginBtn.hidden = true;
        if (logoutBtn) logoutBtn.hidden = false;
    }

    function applyPublicUI() {
        state.auth = { authenticated: false, org: null, start: null, end: null };
        const searchBtn = document.getElementById('navSearchBtn');
        if (searchBtn) searchBtn.hidden = true;
        const statusEl = document.getElementById('authStatus');
        const loginBtn = document.getElementById('authLoginBtn');
        const logoutBtn = document.getElementById('authLogoutBtn');
        if (statusEl) statusEl.hidden = true;
        if (loginBtn) loginBtn.hidden = false;
        if (logoutBtn) logoutBtn.hidden = true;
    }

    // ログイン機能オフ（公開モード）。認証UIは一切出さず全コンテンツ閲覧可。
    function applyDisabledUI() {
        state.auth = { authenticated: true, org: null, start: null, end: null };
        const searchBtn = document.getElementById('navSearchBtn');
        if (searchBtn) searchBtn.hidden = false;
        ['authStatus', 'authLoginBtn', 'authLogoutBtn'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.hidden = true;
        });
    }

    // afterLogin=true なら直前にログインしたケース。pendingSection か、
    // 現在が保護外（hero など）なら tutorials に自動遷移して中身を見せる。
    function loadContentThenRender(afterLogin) {
        const finalize = () => {
            renderProtectedContent();
            // URLハッシュがあれば最優先で復元（共有リンク・リロード対応）
            if (!afterLogin && applyHash()) { state.pendingSection = null; return; }
            let target = state.pendingSection;
            if (!target && PROTECTED_SECTIONS.has(state.currentSection)) target = state.currentSection;
            if (!target && afterLogin) target = 'tutorials';
            state.pendingSection = null;
            if (target) window.showSection(target);
            else if (afterLogin && applyHash()) return;
        };
        if (window.TUTORIALS) { finalize(); return; }
        const s = document.createElement('script');
        s.src = 'js/tutorials.js';
        s.onload = finalize;
        s.onerror = function() {
            // middleware が遮断＝未認証/期限切れ
            applyPublicUI();
            openAuthModal();
        };
        document.body.appendChild(s);
    }

    async function bootstrapAuth() {
        try {
            const res = await fetch('/api/session', { credentials: 'same-origin' });
            const data = await res.json();
            if (data && data.disabled) {
                applyDisabledUI();
                loadContentThenRender();
            } else if (data && data.authenticated) {
                applyAuthedUI(data);
                loadContentThenRender();
            } else {
                applyPublicUI();
            }
        } catch (e) {
            applyPublicUI();
        }
    }

    window.openAuthModal = function() {
        const m = document.getElementById('authModal');
        if (!m) return;
        m.classList.add('active');
        m.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const f = document.getElementById('authOrgId');
        if (f) setTimeout(() => f.focus(), 50);
    };

    window.closeAuthModal = function() {
        const m = document.getElementById('authModal');
        if (!m) return;
        m.classList.remove('active');
        m.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    window.doLogout = async function() {
        try { await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' }); }
        catch (e) { /* 失敗してもcookieは期限で失効 */ }
        location.reload();
    };

    function authErrorMessage(code) {
        const ja = {
            invalid_credentials: '組織IDまたはパスワードが違います。',
            not_started: '閲覧開始日より前です。',
            expired: '閲覧期間が終了しています。',
            missing_credentials: '組織IDとパスワードを入力してください。',
            server_not_configured: 'サーバー設定が未完了です（管理者に連絡してください）。',
            org_table_unavailable: '組織情報を読み込めませんでした。',
            bad_request: '入力内容を確認してください。',
            network: '通信に失敗しました。時間をおいて再度お試しください。'
        };
        return ja[code] || 'ログインできませんでした。';
    }

    function setupAuth() {
        const form = document.getElementById('authForm');
        if (!form) return;
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const errEl = document.getElementById('authError');
            const submitBtn = document.getElementById('authSubmit');
            const orgId = (document.getElementById('authOrgId').value || '').trim();
            const password = document.getElementById('authPassword').value || '';
            if (errEl) { errEl.hidden = true; errEl.textContent = ''; }
            if (!orgId || !password) {
                if (errEl) { errEl.textContent = authErrorMessage('missing_credentials'); errEl.hidden = false; }
                return;
            }
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '確認中…'; }
            let data = null;
            try {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ orgId, password })
                });
                data = await res.json();
            } catch (e) {
                data = { ok: false, error: 'network' };
            }
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'ログイン'; }
            if (data && data.ok) {
                document.getElementById('authPassword').value = '';
                closeAuthModal();
                applyAuthedUI(data);
                loadContentThenRender(true);
            } else if (errEl) {
                errEl.textContent = authErrorMessage(data && data.error);
                errEl.hidden = false;
            }
        });
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

        // サイドバーのセクションリンク（data-i18n属性で個別にローカライズ）
        document.querySelectorAll('.sidebar-link[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (key && t[key]) el.textContent = t[key];
        });

        // 検索・進捗まわりのラベル
        const searchInputEl = document.getElementById('searchInput');
        if (searchInputEl) searchInputEl.placeholder = t.searchPlaceholder;
        const cheatInputEl = document.getElementById('cheatSearchInput');
        if (cheatInputEl) cheatInputEl.placeholder = t.cheatSearchPlaceholder;
        const navSearchEl = document.getElementById('navSearchBtn');
        if (navSearchEl) navSearchEl.title = t.searchOpenLabel + '（/）';
        const resetEl = document.querySelector('.tutorial-progress-reset');
        if (resetEl) resetEl.textContent = t.resetProgress;

        // Update mobile menu
        const mobileLinks = document.querySelectorAll('.mobile-link');
        if (mobileLinks.length >= 7) {
            mobileLinks[0].textContent = t.navTutorials;
            mobileLinks[1].textContent = t.navHandson;
            mobileLinks[2].textContent = t.navProjects;
            mobileLinks[3].textContent = t.navBestPractices;
            mobileLinks[4].textContent = t.navHelp;
            mobileLinks[5].textContent = t.navPrivacy;
            mobileLinks[6].textContent = t.navCheatsheet;
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
            if (footerColumns[2]) footerColumns[2].textContent = t.footerAbout;
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

        // Re-render localized content（未認証時は内部でスキップ）
        renderProtectedContent();
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

        // Projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const tag = projectsSection.querySelector('.section-tag');
            const title = projectsSection.querySelector('.section-title');
            const desc = projectsSection.querySelector('.section-description');
            if (tag) tag.textContent = t.sectionTagProjects;
            if (title) title.textContent = t.sectionTitleProjects;
            if (desc) desc.textContent = t.sectionDescProjects;
        }

        // Settings section
        const settingsSection = document.getElementById('settings');
        if (settingsSection) {
            const tag = settingsSection.querySelector('.section-tag');
            const title = settingsSection.querySelector('.section-title');
            const desc = settingsSection.querySelector('.section-description');
            if (tag) tag.textContent = t.sectionTagSettings;
            if (title) title.textContent = t.sectionTitleSettings;
            if (desc) desc.textContent = t.sectionDescSettings;
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
                const authModal = document.getElementById('authModal');
                if (state.searchOpen) {
                    window.closeSearch();
                } else if (authModal && authModal.classList.contains('active')) {
                    closeAuthModal();
                } else if (cheatSheetModal && cheatSheetModal.classList.contains('active')) {
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
        // 保護セクションは未認証だとログインへ誘導（実体はサーバー側で遮断済み）
        if (PROTECTED_SECTIONS.has(sectionId) && !state.auth.authenticated) {
            state.pendingSection = sectionId;
            openAuthModal();
            return;
        }

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

            // サイドバーのアクティブ表示を切り替え
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.classList.toggle('active', link.dataset.section === sectionId);
            });

            // セクション遷移でモーダル文脈をクリアし、URLへ反映
            state.openModal = null;
            updateHash();
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
        renderProgressUI();
    }

    // ===================================
    // Render Tutorials
    // ===================================
    function renderTutorials(level) {
        const tutorials = window.TUTORIALS[level] || [];

        const t = i18n[state.lang];
        elements.tutorialsGrid.innerHTML = tutorials.map((tutorial, index) => {
            const timeText = getLocalizedText(tutorial, 'time');
            return `
            <div class="tutorial-card${isDone(tutorial.id) ? ' is-done' : ''}" data-level="${level}" data-chapter-id="${tutorial.id}" onclick="openTutorial('${level}', ${index})" style="animation-delay: ${index * 0.1}s">
                <div class="card-header">
                    <span class="card-number">${tutorial.number}</span>
                    <div class="card-header-right">
                        <button type="button" class="card-done-toggle${isDone(tutorial.id) ? ' done' : ''}" title="${isDone(tutorial.id) ? t.markUndone : t.markDone}" aria-label="${isDone(tutorial.id) ? t.markUndone : t.markDone}" onclick="toggleChapterDone('${tutorial.id}', event)">${isDone(tutorial.id) ? icons['check-circle'] : icons.circle}</button>
                        <div class="card-icon">${icons[tutorial.icon] || icons.rocket}</div>
                    </div>
                </div>
                <h3 class="card-title">${getLocalizedText(tutorial, 'title')}</h3>
                <p class="card-description">${getLocalizedText(tutorial, 'description')}</p>
                ${timeText ? `<div class="card-time">${icons.clock} <span>${t.learningTimeLabel}: ${escapeHtml(timeText)}</span></div>` : ''}
                <div class="card-tags">
                    ${getLocalizedArray(tutorial, 'tags').map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
            </div>`;
        }).join('');

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
    // 開発トラック（テーマ別パイプライン）
    // ===================================
    function difficultyClass(track) {
        return (track.difficulty_en === 'Advanced') ? 'advanced' : 'intermediate';
    }

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid || !window.PROJECT_TRACKS) return;
        const t = i18n[state.lang];

        grid.innerHTML = window.PROJECT_TRACKS.map(track => {
            const selected = state.selectedProjectTracks.indexOf(track.id) !== -1;
            const pipeline = track.pipeline.map(p => `
                <span class="pl-chip ${p.mode}">${p.mode === 'parallel' ? t.projParallel : t.projSequential}</span>
            `).join('<span class="pl-arrow">›</span>');
            return `
            <div class="project-card${selected ? ' selected' : ''}" data-track="${track.id}">
                <div class="project-card-top">
                    <span class="project-number">${track.number}</span>
                    <span class="difficulty-badge ${difficultyClass(track)}">${getLocalizedText(track, 'difficulty')}</span>
                    <span class="time-badge">${icons.clock} ${getLocalizedText(track, 'estimatedTime')}</span>
                </div>
                <h3 class="project-title">${escapeHtml(getLocalizedText(track, 'title'))}</h3>
                <p class="project-tagline">${escapeHtml(getLocalizedText(track, 'tagline'))}</p>
                <div class="project-meta">
                    <span class="project-domain">${escapeHtml(getLocalizedText(track, 'domain'))}</span>
                    <span class="project-deliverable">${icons['check-circle']} ${escapeHtml(getLocalizedText(track, 'deliverable'))}</span>
                </div>
                <div class="project-pipeline-mini">${pipeline}</div>
                <div class="project-card-actions">
                    <button type="button" class="btn-track-select${selected ? ' on' : ''}" onclick="toggleTrackSelect('${track.id}')">
                        ${selected ? '✓ ' + t.projTrackSelected : t.projSelectTrack}
                    </button>
                    <button type="button" class="btn-track-detail" onclick="openProjectTrack('${track.id}')">${t.projOpenDetail}</button>
                </div>
                <button type="button" class="btn-track-download" onclick="downloadProjectBundle('${track.id}')">
                    ${icons.download} ${t.projDownloadBundle}
                </button>
            </div>`;
        }).join('');

        updateProjectsToolbar();
    }

    function updateProjectsToolbar() {
        const t = i18n[state.lang];
        const n = state.selectedProjectTracks.length;
        const countEl = document.getElementById('projectsSelectedCount');
        if (countEl) {
            countEl.textContent = state.lang === 'en'
                ? n + t.projSelectedSuffix
                : n + ' ' + t.projSelectedSuffix;
        }
        const dlBtn = document.getElementById('downloadSelectedBtn');
        const cmpBtn = document.getElementById('openCompareBtn');
        if (dlBtn) dlBtn.disabled = (n === 0);
        if (cmpBtn) cmpBtn.disabled = (n < 2);
    }

    function getTrack(id) {
        return (window.PROJECT_TRACKS || []).find(tr => tr.id === id);
    }

    // 連続ダウンロード（外部送信なし。ローカルassetを順にaタグで取得）
    function triggerSequentialDownloads(files) {
        files.forEach(function(f, i) {
            setTimeout(function() {
                const a = document.createElement('a');
                a.href = f.path;
                a.download = f.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }, i * 250);
        });
    }

    window.toggleTrackSelect = function(id) {
        const idx = state.selectedProjectTracks.indexOf(id);
        if (idx === -1) {
            state.selectedProjectTracks = [...state.selectedProjectTracks, id];
        } else {
            state.selectedProjectTracks = state.selectedProjectTracks.filter(x => x !== id);
        }
        localStorage.setItem('cctSelectedTracks', JSON.stringify(state.selectedProjectTracks));
        renderProjects();
    };

    // トラックは事前生成済みのZIP（Mac/Win対応・同一オリジン）を配布する
    window.downloadProjectBundle = function(id) {
        const dl = window.PROJECT_DOWNLOADS && window.PROJECT_DOWNLOADS[id];
        if (dl && dl.zip) triggerSequentialDownloads([{ path: dl.zip, name: dl.zipName }]);
    };

    window.downloadSelectedBundles = function() {
        const zips = [];
        state.selectedProjectTracks.forEach(id => {
            const dl = window.PROJECT_DOWNLOADS && window.PROJECT_DOWNLOADS[id];
            if (dl && dl.zip) zips.push({ path: dl.zip, name: dl.zipName });
        });
        if (zips.length) triggerSequentialDownloads(zips);
    };

    window.openProjectTrack = function(id) {
        const track = getTrack(id);
        if (!track) return;
        const t = i18n[state.lang];

        const pipeline = track.pipeline.map((p, i) => `
            <div class="pl-step">
                <div class="pl-step-head">
                    <span class="pl-step-no">${i + 1}</span>
                    <span class="pl-chip ${p.mode}">${p.mode === 'parallel' ? t.projParallel : t.projSequential}</span>
                    <span class="pl-step-phase">${escapeHtml(getLocalizedText(p, 'phase'))}</span>
                </div>
                <p class="pl-step-detail">${escapeHtml(getLocalizedText(p, 'detail'))}</p>
                <p class="pl-step-context">${t.projContext}: ${escapeHtml(getLocalizedText(p, 'context'))}</p>
            </div>
        `).join('');

        const tutorials = track.tutorials.map(tut => `
            <div class="related-tutorial-card" onclick="openTutorialById('${tut.id}')">
                <div class="tutorial-id">${tut.id}</div>
                <div class="tutorial-info">
                    <div class="tutorial-title">${escapeHtml(getLocalizedText(tut, 'title'))}</div>
                    <div class="tutorial-reason">${escapeHtml(getLocalizedText(tut, 'why'))}</div>
                </div>
                <span class="tutorial-arrow">${icons.chevronRight}</span>
            </div>
        `).join('');

        const acceptance = getLocalizedArray(track, 'acceptance')
            .map(a => `<li>${icons['check-circle']} ${escapeHtml(a)}</li>`).join('');

        const compare = track.compare.map(c => `
            <li><strong>${escapeHtml(getLocalizedText(c, 'axis'))}</strong> — ${escapeHtml(getLocalizedText(c, 'hint'))}</li>
        `).join('');

        const dl = window.PROJECT_DOWNLOADS && window.PROJECT_DOWNLOADS[track.id];
        const dlList = dl ? dl.files.map(f => `
            <span class="bundle-file-chip">${icons.file} ${f.name}</span>
        `).join('') : '';

        elements.modalBody.innerHTML = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="modal-level ${difficultyClass(track)}">${track.number}</span>
                    <span class="difficulty-badge ${difficultyClass(track)}">${getLocalizedText(track, 'difficulty')}</span>
                    <span class="time-badge">${icons.clock} ${getLocalizedText(track, 'estimatedTime')}</span>
                </div>
                <h2 class="modal-title">${escapeHtml(getLocalizedText(track, 'title'))}</h2>
                <p class="modal-description">${escapeHtml(getLocalizedText(track, 'tagline'))}</p>
            </div>

            <div class="modal-section">
                <h3>${icons.folder} ${t.projScenario}</h3>
                <p class="goal-text">${escapeHtml(getLocalizedText(track, 'scenario'))}</p>
            </div>

            <div class="modal-section">
                <h3>${icons.layers} ${t.projPipeline}</h3>
                <div class="pl-steps">${pipeline}</div>
            </div>

            <div class="modal-section related-tutorials-section">
                <h3>${icons.book} ${t.projLearnTutorials}</h3>
                <div class="related-tutorials-grid">${tutorials}</div>
            </div>

            <div class="modal-section">
                <h3>${icons['check-circle']} ${t.projDeliverable}</h3>
                <p class="goal-text">${escapeHtml(getLocalizedText(track, 'deliverable'))}</p>
            </div>

            <div class="modal-section">
                <h3>${icons['check-circle']} ${t.projAcceptance}</h3>
                <ul class="checklist">${acceptance}</ul>
            </div>

            <div class="modal-section">
                <h3>${icons.lightbulb} ${t.projCompareAxis}</h3>
                <ul class="learning-points">${compare}</ul>
            </div>

            ${dl ? `
                <div class="modal-section prep-download-section">
                    <h4>${icons.download} ${t.projDownloadZip}</h4>
                    <button class="download-all-btn" onclick="downloadProjectBundle('${track.id}')">
                        ${icons.download} ${state.lang === 'ja' ? dl.label : dl.label_en}（ZIP）
                    </button>
                    <p class="bundle-contents-label">${t.projBundleContents}</p>
                    <div class="bundle-file-list">${dlList}</div>
                </div>
            ` : ''}
        `;
        elements.tutorialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        elements.modalBody.scrollTop = 0;
        state.openModal = { kind: 'track', id: track.id };
        updateHash();
    };

    window.openCompareView = function() {
        const t = i18n[state.lang];
        const ids = state.selectedProjectTracks;
        if (ids.length < 2) return;
        const tracks = ids.map(getTrack).filter(Boolean);

        const cards = tracks.map(track => `
            <div class="compare-col">
                <div class="compare-col-head">
                    <span class="project-number">${track.number}</span>
                    <h3>${escapeHtml(getLocalizedText(track, 'title'))}</h3>
                    <span class="difficulty-badge ${difficultyClass(track)}">${getLocalizedText(track, 'difficulty')}</span>
                </div>
                <div class="compare-block">
                    <span class="compare-label">${t.projDeliverable}</span>
                    <p>${escapeHtml(getLocalizedText(track, 'deliverable'))}</p>
                </div>
                <div class="compare-block">
                    <span class="compare-label">${t.projAcceptance}</span>
                    <ul>${getLocalizedArray(track, 'acceptance').map(a => `<li>${escapeHtml(a)}</li>`).join('')}</ul>
                </div>
                <div class="compare-block">
                    <span class="compare-label">${t.projCompareAxis}</span>
                    <ul>${track.compare.map(c => `<li><strong>${escapeHtml(getLocalizedText(c, 'axis'))}</strong> — ${escapeHtml(getLocalizedText(c, 'hint'))}</li>`).join('')}</ul>
                </div>
            </div>
        `).join('');

        elements.modalBody.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${t.projCompareTitle}</h2>
                <p class="modal-description">${tracks.map(tr => escapeHtml(getLocalizedText(tr, 'title'))).join(' / ')}</p>
            </div>
            <div class="compare-grid">${cards}</div>
        `;
        elements.tutorialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // ===================================
    // Claude 設定テンプレート
    // ===================================
    function renderSettings() {
        const list = document.getElementById('settingsList');
        if (!list || !window.SETTINGS_TEMPLATES) return;
        const t = i18n[state.lang];
        const cats = window.SETTINGS_CATEGORIES || [];

        list.innerHTML = cats.map(cat => {
            const items = window.SETTINGS_TEMPLATES.filter(s => s.cat === cat.id);
            if (!items.length) return '';
            const cards = items.map(s => `
                <div class="settings-card" data-setting-id="${s.id}">
                    <div class="settings-card-head">
                        <h4 class="settings-card-title">${escapeHtml(s.title)}</h4>
                        <span class="settings-card-size">${t.settingsSizeLabel}: ${escapeHtml(s.size)}</span>
                    </div>
                    <p class="settings-card-desc">${escapeHtml(s.desc)}</p>
                    <p class="settings-card-placement"><strong>${t.settingsPlacementLabel}:</strong> ${parseInlineCode(s.placement)}</p>
                    <a class="settings-card-download" href="assets/settings/${encodeURIComponent(s.zip)}" download="${escapeHtml(s.zip)}">
                        ${icons.download} <span>${t.settingsDownloadLabel}</span>
                        <span class="settings-card-filename">${escapeHtml(s.zip)}</span>
                    </a>
                </div>
            `).join('');
            return `
                <div class="settings-category">
                    <h3 class="settings-category-title">${escapeHtml(cat.label)}</h3>
                    <div class="settings-grid">${cards}</div>
                </div>
            `;
        }).join('');
    }

    // インラインの `code` 部分だけタグに置換（XSS安全のため他はエスケープ）
    function parseInlineCode(text) {
        if (!text) return '';
        const escaped = escapeHtml(text);
        return escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
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

        const timeText = getLocalizedText(tutorial, 'time');
        let modalContent = `
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="modal-level ${level}">${tutorial.number} | ${levelLabels[level]}</span>
                    ${timeText ? `<span class="time-badge">${icons.clock} ${t.learningTimeLabel}: ${escapeHtml(timeText)}</span>` : ''}
                </div>
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

        // 章送りと完了ボタン（同レベル内で前後移動できる）
        modalContent += chapterNavHtml(level, index);

        elements.modalBody.innerHTML = modalContent;
        elements.tutorialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        elements.modalBody.scrollTop = 0;

        // モーダル文脈を保存してURLに反映、完了ボタンの表示を初期化
        state.openModal = { kind: 'tutorial', level: level, index: index, id: tutorial.id };
        updateHash();
        const doneBtn = document.getElementById('chapterDoneBtn');
        if (doneBtn) updateDoneButton(doneBtn, tutorial.id);
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
        elements.modalBody.scrollTop = 0;
        state.openModal = { kind: 'handson', id: String(item.id) };
        updateHash();
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
            const tutorials = window.TUTORIALS[level] || [];
            const index = tutorials.findIndex(t => t.id === id);
            if (index !== -1) {
                // 一覧のレベルタブも合わせる（閉じた後に迷子にならない）
                if (state.currentLevel !== level) setActiveLevel(level);
                openTutorial(level, index);
                return;
            }
        }
    };

    window.closeModal = function() {
        elements.tutorialModal.classList.remove('active');
        document.body.style.overflow = '';
        state.openModal = null;
        updateHash();
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


    // ===================================
    // 学習進捗（章ごとの完了状態・localStorage）
    // ===================================
    const LEVELS = ['intro', 'basic', 'intermediate', 'advanced'];

    function allTutorials() {
        if (!window.TUTORIALS) return [];
        return LEVELS.reduce((acc, lv) => acc.concat((window.TUTORIALS[lv] || []).map(c => ({ level: lv, chapter: c }))), []);
    }

    function isDone(id) {
        return !!state.progress[id];
    }

    function saveProgress() {
        localStorage.setItem('cctChapterProgress', JSON.stringify(state.progress));
    }

    window.toggleChapterDone = function(id, ev) {
        if (ev) { ev.stopPropagation(); ev.preventDefault(); }
        if (state.progress[id]) {
            state.progress = Object.keys(state.progress)
                .filter(k => k !== id)
                .reduce((acc, k) => Object.assign(acc, { [k]: true }), {});
        } else {
            state.progress = Object.assign({}, state.progress, { [id]: true });
        }
        saveProgress();
        renderTutorials(state.currentLevel);
        renderProgressUI();
        // モーダルが開いていれば完了ボタンの表示も更新
        if (state.openModal && state.openModal.kind === 'tutorial') {
            const btn = document.getElementById('chapterDoneBtn');
            if (btn) updateDoneButton(btn, id);
        }
    };

    window.resetChapterProgress = function() {
        const t = i18n[state.lang];
        if (!confirm(t.resetProgressConfirm)) return;
        state.progress = {};
        saveProgress();
        renderTutorials(state.currentLevel);
        renderProgressUI();
    };

    function updateDoneButton(btn, id) {
        const t = i18n[state.lang];
        const done = isDone(id);
        btn.classList.toggle('done', done);
        btn.innerHTML = (done ? icons['check-circle'] : icons.circle) +
            ' <span>' + (done ? t.markUndone : t.markDone) + '</span>';
    }

    // レベル別・全体の進捗をUIへ反映
    function renderProgressUI() {
        if (!window.TUTORIALS) return;
        const t = i18n[state.lang];
        const all = allTutorials();
        const doneCount = all.filter(x => isDone(x.chapter.id)).length;

        // レベルタブに 章数 と 完了数
        document.querySelectorAll('.level-tab').forEach(tab => {
            const lv = tab.dataset.level;
            const list = (window.TUTORIALS[lv] || []);
            const d = list.filter(c => isDone(c.id)).length;
            let meta = tab.querySelector('.tab-meta');
            if (!meta) {
                meta = document.createElement('span');
                meta.className = 'tab-meta';
                tab.appendChild(meta);
            }
            meta.textContent = d + '/' + list.length;
            tab.classList.toggle('level-complete', list.length > 0 && d === list.length);
        });

        // 全体の進捗バー
        const bar = document.getElementById('tutorialProgressFill');
        const label = document.getElementById('tutorialProgressText');
        if (bar) bar.style.width = all.length ? Math.round(doneCount / all.length * 100) + '%' : '0%';
        if (label) {
            label.textContent = doneCount + ' / ' + all.length + ' ' + t.progressOfTotal + ' ' + t.progressLabel +
                '（' + totalTimeLabel(all.filter(x => !isDone(x.chapter.id))) + '）';
        }
    }

    // 残り学習時間の目安（"30分" 表記を合算）
    function totalTimeLabel(items) {
        const mins = items.reduce((sum, x) => {
            const m = String(x.chapter.time || '').match(/(\d+)/);
            return sum + (m ? parseInt(m[1], 10) : 0);
        }, 0);
        if (state.lang === 'en') {
            return mins >= 60 ? 'about ' + Math.round(mins / 60 * 10) / 10 + ' h left' : mins + ' min left';
        }
        return mins >= 60 ? '残り約' + Math.round(mins / 60 * 10) / 10 + '時間' : '残り' + mins + '分';
    }

    // ===================================
    // ディープリンク（URLハッシュでセクション・章を復元）
    // #tutorials / #tutorials/02_05 / #handson/3 / #projects/alpha / #privacy
    // ===================================
    function updateHash() {
        if (state.applyingHash) return;
        const m = state.openModal;
        let hash = '#' + state.currentSection;
        if (m) {
            if (m.kind === 'tutorial') hash = '#tutorials/' + m.id;
            else if (m.kind === 'handson') hash = '#handson/' + m.id;
            else if (m.kind === 'track') hash = '#projects/' + m.id;
        } else if (state.currentSection === 'hero') {
            // トップではURLにノイズを残さない
            if (location.hash) history.replaceState(null, '', location.pathname);
            return;
        }
        if (location.hash !== hash) {
            history.replaceState(null, '', hash);
        }
    }

    function applyHash() {
        const raw = (location.hash || '').replace(/^#/, '');
        if (!raw) return false;
        const [sectionRaw, sub] = raw.split('/');
        const known = ['hero', 'tutorials', 'handson', 'projects', 'settings', 'bestpractices', 'troubleshooting', 'privacy'];
        if (known.indexOf(sectionRaw) === -1) return false;

        state.applyingHash = true;
        window.showSection(sectionRaw);
        if (sub) {
            if (sectionRaw === 'tutorials') window.openTutorialById(sub);
            else if (sectionRaw === 'handson') openHandsonById(sub);
            else if (sectionRaw === 'projects') window.openProjectTrack(sub);
        }
        state.applyingHash = false;
        return true;
    }

    function openHandsonById(id) {
        if (!window.HANDSON) return;
        const groups = [['non-dev', window.HANDSON.nonDev], ['dev', window.HANDSON.dev]];
        for (const [type, list] of groups) {
            const idx = (list || []).findIndex(x => String(x.id) === String(id));
            if (idx !== -1) {
                setActiveHandsonType(type);
                window.openHandson(type, idx);
                return;
            }
        }
    }

    function setupRouting() {
        window.addEventListener('hashchange', () => {
            if (state.applyingHash) return;
            const raw = (location.hash || '').replace(/^#/, '');
            if (!raw) { window.closeModal(); return; }
            applyHash();
        });
    }

    // ===================================
    // モーダル内の章送り（同レベル内で前後移動）
    // ===================================
    function chapterNavHtml(level, index) {
        const t = i18n[state.lang];
        const list = window.TUTORIALS[level] || [];
        const prev = index > 0 ? list[index - 1] : null;
        const next = index < list.length - 1 ? list[index + 1] : null;
        const doneBtn = '<button type="button" class="chapter-done-btn" id="chapterDoneBtn" ' +
            'onclick="toggleChapterDone(\'' + list[index].id + '\')"></button>';
        return '<div class="modal-section chapter-nav">' +
            doneBtn +
            '<div class="chapter-nav-links">' +
            (prev ? '<button type="button" class="chapter-nav-btn" onclick="openTutorial(\'' + level + '\', ' + (index - 1) + ')">' +
                '<span class="chapter-nav-dir">← ' + t.prevChapter + '</span>' +
                '<span class="chapter-nav-title">' + escapeHtml(getLocalizedText(prev, 'title')) + '</span></button>' : '<span></span>') +
            (next ? '<button type="button" class="chapter-nav-btn next" onclick="openTutorial(\'' + level + '\', ' + (index + 1) + ')">' +
                '<span class="chapter-nav-dir">' + t.nextChapter + ' →</span>' +
                '<span class="chapter-nav-title">' + escapeHtml(getLocalizedText(next, 'title')) + '</span></button>' : '<span></span>') +
            '</div></div>';
    }

    function gotoAdjacentChapter(delta) {
        const m = state.openModal;
        if (!m || m.kind !== 'tutorial') return;
        const list = window.TUTORIALS[m.level] || [];
        const idx = m.index + delta;
        if (idx < 0 || idx >= list.length) return;
        window.openTutorial(m.level, idx);
    }

    // ===================================
    // 横断検索（章・ハンズオン・トラック・設定テンプレ）
    // ===================================
    function buildSearchIndex() {
        const t = i18n[state.lang];
        const idx = [];
        allTutorials().forEach(({ level, chapter }, i) => {
            const list = window.TUTORIALS[level] || [];
            idx.push({
                kind: 'tutorial', kindLabel: t.searchKindTutorial,
                id: chapter.id,
                title: getLocalizedText(chapter, 'title'),
                desc: getLocalizedText(chapter, 'description') || '',
                extra: (getLocalizedArray(chapter, 'tags') || []).join(' '),
                level: level, index: list.findIndex(c => c.id === chapter.id)
            });
        });
        if (window.HANDSON) {
            [['non-dev', window.HANDSON.nonDev], ['dev', window.HANDSON.dev]].forEach(([type, list]) => {
                (list || []).forEach((item, i) => {
                    idx.push({
                        kind: 'handson', kindLabel: t.searchKindHandson,
                        id: String(item.id),
                        title: getLocalizedText(item, 'title'),
                        desc: getLocalizedText(item, 'description') || '',
                        extra: (getLocalizedArray(item, 'skills') || []).join(' '),
                        handsonType: type, index: i
                    });
                });
            });
        }
        (window.PROJECT_TRACKS || []).forEach(tr => {
            idx.push({
                kind: 'track', kindLabel: t.searchKindTrack,
                id: tr.id,
                title: getLocalizedText(tr, 'title'),
                desc: getLocalizedText(tr, 'tagline') || '',
                extra: getLocalizedText(tr, 'domain') || ''
            });
        });
        (window.SETTINGS_TEMPLATES || []).forEach(st => {
            idx.push({
                kind: 'setting', kindLabel: t.searchKindSetting,
                id: st.id,
                title: st.title,
                desc: st.desc || '',
                extra: st.zip || ''
            });
        });
        state.searchIndex = idx;
        return idx;
    }

    function runSearch(q) {
        const query = (q || '').trim().toLowerCase();
        if (!state.searchIndex) buildSearchIndex();
        if (!query) return [];
        const terms = query.split(/\s+/).filter(Boolean);
        return state.searchIndex
            .map(item => {
                const hay = (item.title + ' ' + item.desc + ' ' + item.extra + ' ' + item.id).toLowerCase();
                const hitAll = terms.every(term => hay.indexOf(term) !== -1);
                if (!hitAll) return null;
                // タイトル一致を優先
                const titleHit = terms.some(term => item.title.toLowerCase().indexOf(term) !== -1);
                return { item, score: titleHit ? 0 : 1 };
            })
            .filter(Boolean)
            .sort((a, b) => a.score - b.score)
            .slice(0, 30)
            .map(x => x.item);
    }

    function renderSearchResults() {
        const box = document.getElementById('searchResults');
        if (!box) return;
        const t = i18n[state.lang];
        if (!state.searchResults.length) {
            const q = (document.getElementById('searchInput') || {}).value || '';
            box.innerHTML = q.trim()
                ? '<p class="search-empty">' + t.searchNoResult + '</p>'
                : '<p class="search-empty">' + t.searchHint + '</p>';
            return;
        }
        box.innerHTML = state.searchResults.map((r, i) => {
            const doneMark = (r.kind === 'tutorial' && isDone(r.id))
                ? '<span class="search-done">' + t.doneBadge + '</span>' : '';
            return '<button type="button" class="search-result' + (i === state.searchCursor ? ' active' : '') + '" ' +
                'data-i="' + i + '" onclick="activateSearchResult(' + i + ')">' +
                '<span class="search-kind ' + r.kind + '">' + r.kindLabel + '</span>' +
                '<span class="search-title">' + escapeHtml(r.title) + '</span>' +
                doneMark +
                '<span class="search-desc">' + escapeHtml(r.desc) + '</span>' +
                '</button>';
        }).join('');
    }

    window.openSearch = function() {
        const overlay = document.getElementById('searchOverlay');
        if (!overlay) return;
        if (!window.TUTORIALS) { openAuthModal(); return; }
        state.searchOpen = true;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const input = document.getElementById('searchInput');
        if (input) { input.value = ''; setTimeout(() => input.focus(), 30); }
        state.searchResults = [];
        state.searchCursor = 0;
        renderSearchResults();
    };

    window.closeSearch = function() {
        const overlay = document.getElementById('searchOverlay');
        if (!overlay) return;
        state.searchOpen = false;
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    window.activateSearchResult = function(i) {
        const r = state.searchResults[i];
        if (!r) return;
        window.closeSearch();
        if (r.kind === 'tutorial') {
            window.showSection('tutorials');
            setActiveLevel(r.level);
            window.openTutorial(r.level, r.index);
        } else if (r.kind === 'handson') {
            window.showSection('handson');
            setActiveHandsonType(r.handsonType);
            window.openHandson(r.handsonType, r.index);
        } else if (r.kind === 'track') {
            window.showSection('projects');
            window.openProjectTrack(r.id);
        } else if (r.kind === 'setting') {
            window.showSection('settings');
            const card = document.querySelector('[data-setting-id="' + r.id + '"]');
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('flash');
                setTimeout(() => card.classList.remove('flash'), 1600);
            }
        }
    };

    function setupSearch() {
        const input = document.getElementById('searchInput');
        if (!input) return;
        input.addEventListener('input', () => {
            state.searchResults = runSearch(input.value);
            state.searchCursor = 0;
            renderSearchResults();
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                state.searchCursor = Math.min(state.searchCursor + 1, state.searchResults.length - 1);
                renderSearchResults();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                state.searchCursor = Math.max(state.searchCursor - 1, 0);
                renderSearchResults();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                window.activateSearchResult(state.searchCursor);
            }
        });
    }

    // ===================================
    // チートシート内の絞り込み
    // ===================================
    function setupCheatFilter() {
        const input = document.getElementById('cheatSearchInput');
        if (!input) return;
        input.addEventListener('input', () => {
            const q = input.value.trim().toLowerCase();
            document.querySelectorAll('.cheat-sheet-scroll table.cheat-table').forEach(table => {
                let visible = 0;
                table.querySelectorAll('tbody tr').forEach(tr => {
                    const hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
                    tr.style.display = hit ? '' : 'none';
                    if (hit) visible++;
                });
                // 見出しごと隠す（該当0のテーブル）
                const heading = table.previousElementSibling;
                const hide = q && visible === 0;
                table.style.display = hide ? 'none' : '';
                if (heading && heading.tagName === 'H3') heading.style.display = hide ? 'none' : '';
            });
        });
    }

    function handleKeydown(e) {
        // 入力中は素通し
        const tag = (e.target && e.target.tagName) || '';
        const typing = tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable);

        // / で検索を開く
        if (!typing && (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey)))) {
            e.preventDefault();
            window.openSearch();
            return;
        }
        // モーダル表示中は ← → で章送り（検索やチートシートが開いている間は無効）
        const cheatEl = document.getElementById('cheatSheetModal');
        const cheatOpen = !!(cheatEl && cheatEl.classList.contains('active'));
        if (!typing && !state.searchOpen && !cheatOpen && state.openModal && state.openModal.kind === 'tutorial') {
            if (e.key === 'ArrowLeft') { e.preventDefault(); gotoAdjacentChapter(-1); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); gotoAdjacentChapter(1); }
        }
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
