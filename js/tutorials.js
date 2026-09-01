/**
 * Claude Code Tutorial - Tutorial Data (Enhanced)
 *
 * 詳細なハンズオン手順と公式ベストプラクティスリンク付き
 */

// 公式リソースリンク
const OFFICIAL_RESOURCES = {
    docs: {
        url: "https://code.claude.com/docs/ja/overview",
        title: "Claude Code 公式ドキュメント",
        title_en: "Claude Code Official Documentation",
        description: "Anthropicが提供する公式ドキュメント。最新の機能とベストプラクティス。",
        description_en: "Official documentation provided by Anthropic. Latest features and best practices."
    },
    bestPractices: {
        url: "https://code.claude.com/docs/en/best-practices",
        title: "公式ベストプラクティス",
        title_en: "Official Best Practices",
        description: "Anthropicが推奨する7つのベストプラクティスと失敗パターン。",
        description_en: "Seven best practices and failure patterns recommended by Anthropic."
    },
    zennGuide: {
        url: "https://zenn.dev/tmasuyama1114/books/claude_code_basic",
        title: "Claude Code 完全ガイド（Zenn）",
        title_en: "Claude Code Complete Guide (Zenn)",
        description: "とまだ氏による包括的な日本語ガイド。全10パート・約50チャプター。",
        description_en: "Comprehensive Japanese guide by Tomada. 10 parts with approximately 50 chapters."
    },
    slides: {
        url: "https://speakerdeck.com/minorun365/claude-codebesutopurakuteisumatome",
        title: "ベストプラクティスまとめスライド",
        title_en: "Best Practices Summary Slides",
        description: "みのるん氏による公式ベストプラクティスの図解スライド。",
        description_en: "Illustrated slides of official best practices by Minorun."
    }
};

const TUTORIALS = {
    intro: [
        {
            id: "00_01",
            time: "10分",
            time_en: "10 min",
            number: "00_01",
            title: "Claude Codeとは何か",
            title_en: "What is Claude Code",
            description: "Claude Codeの本質は「エージェント型コーディング環境」。自律的にファイルを読み、コマンドを実行し、問題を解決する。",
            description_en: "Claude Code is an agent-based coding environment. It autonomously reads files, executes commands, and solves problems.",
            icon: "rocket",
            tags: ["概要", "エージェント", "ツールコール"],
            tags_en: ["Overview", "Agent", "Tool Calls"],
            content: {
                summary: "Claude Codeは、Anthropicが提供する公式CLIツールです。本質は「エージェント型コーディング環境」にあります。従来のAIチャットボットとは根本的に異なり、ファイルを読み、コマンドを実行し、変更を加え、問題を自律的に解決します。",
                summary_en: "Claude Code is an official CLI tool provided by Anthropic. Its essence is an 'agent-based coding environment.' Fundamentally different from traditional AI chatbots, it reads files, executes commands, makes changes, and autonomously solves problems.",
                keyPoints: [
                    "ファイルを読み、コマンドを実行し、変更を加え、問題を自律的に解決",
                    "ローカルで動くため、あなたのPCのファイルやプログラムを直接操作可能",
                    "Read、Write、Edit、Bash、Glob、Grep等のツールを自律的に使い分ける",
                    "「Claude Codeという名前を忘れろ。Claude Agentだと思ってください」"
                ],
                keyPoints_en: [
                    "Reads files, executes commands, makes changes, and autonomously solves problems",
                    "Runs locally, directly operating on files and programs on your PC",
                    "Autonomously uses tools like Read, Write, Edit, Bash, Glob, Grep",
                    "'Forget the name Claude Code. Think of it as Claude Agent'"
                ],
                tools: [
                    { name: "Read", desc: "ファイルを読む", desc_en: "Read files" },
                    { name: "Write", desc: "ファイルを書く", desc_en: "Write files" },
                    { name: "Edit", desc: "ファイルを編集する", desc_en: "Edit files" },
                    { name: "Bash", desc: "コマンドを実行する", desc_en: "Execute commands" },
                    { name: "Glob", desc: "ファイルパターンで検索する", desc_en: "Search by file patterns" },
                    { name: "Grep", desc: "ファイル内容を検索する", desc_en: "Search file contents" }
                ],
                handson: {
                    title: "エージェントを体感する",
                    title_en: "Experience the Agent",
                    goal: "Claude Codeが「ローカルで動き、ファイルを自分で読む」ことを体験",
                    goal_en: "Experience that Claude Code 'runs locally and reads files on its own'",
                    prerequisites: ["VSCodeでプロジェクトフォルダを開いている", "Claude Code拡張がインストール済み"],
                    prerequisites_en: ["Project folder open in VSCode", "Claude Code extension installed"],
                    steps: [
                        {
                            step: 1,
                            action: "Claude Codeを起動し、以下のプロンプトを入力",
                            action_en: "Launch Claude Code and enter the following prompt",
                            prompt: "このフォルダの中身を教えて。READMEとdataフォルダの役割を簡潔に説明して。",
                            prompt_en: "Tell me what's in this folder. Briefly explain the roles of README and data folder.",
                            expected: "Claudeが Read / Glob などでフォルダを読み、ファイル構造を説明する",
                            expected_en: "Claude reads the folder using Read/Glob and explains the file structure"
                        },
                        {
                            step: 2,
                            action: "続けて以下を入力",
                            action_en: "Continue with the following input",
                            prompt: "data フォルダにあるCSVの先頭5行の内容を要約して",
                            prompt_en: "Summarize the first 5 rows of the CSV in the data folder",
                            expected: "ファイルを読んで要約する一連の動作が自律的に進む",
                            expected_en: "A series of autonomous actions to read and summarize the file"
                        }
                    ],
                    checkpoints: [
                        "質問に答えるだけでなく、必要なファイルを自分で開いている",
                        "内容に基づいて回答している（これが「エージェント」の振る舞い）"
                    ],
                    checkpoints_en: [
                        "Opens necessary files on its own, not just answering questions",
                        "Responds based on actual content (this is 'agent' behavior)"
                    ]
                }
            }
        },
        {
            id: "00_02",
            time: "10分",
            time_en: "10 min",
            number: "00_02",
            title: "エージェントという概念",
            title_en: "The Concept of Agents",
            description: "エージェントとは自律的に判断し行動するAI。目標を与えれば、計画→実行→検証のループを自分で回す。",
            description_en: "An agent is an AI that autonomously judges and acts. Given a goal, it runs the plan→execute→verify loop on its own.",
            icon: "cpu",
            tags: ["エージェント", "自律性", "フィードバックループ"],
            tags_en: ["Agent", "Autonomy", "Feedback Loop"],
            content: {
                summary: "エージェントは、チャットボットとは根本的に異なります。目標を与えれば、自分で考え、自分で動きます。探索→計画→実行→検証のフィードバックループを自律的に回し続けます。",
                summary_en: "Agents are fundamentally different from chatbots. Given a goal, they think and act on their own. They continuously run the explore→plan→execute→verify feedback loop autonomously.",
                keyPoints: [
                    "チャットボット: 質問→回答→待機（受動的）",
                    "エージェント: 目標→計画→実行→検証→改善（能動的）",
                    "フィードバックループを自律的に回し続ける",
                    "人間は「何を達成したいか」を伝えるだけでよい"
                ],
                keyPoints_en: [
                    "Chatbot: Question→Answer→Wait (passive)",
                    "Agent: Goal→Plan→Execute→Verify→Improve (active)",
                    "Continuously runs feedback loop autonomously",
                    "Humans only need to communicate 'what they want to achieve'"
                ],
                comparison: {
                    chatbot: ["質問に答える", "次の質問を待つ", "完全に受け身"],
                    chatbot_en: ["Answer questions", "Wait for next question", "Completely passive"],
                    agent: ["目標を理解する", "計画を立てる", "実行する", "結果を検証する", "必要なら修正する"],
                    agent_en: ["Understand the goal", "Make a plan", "Execute", "Verify results", "Revise if needed"]
                },
                handson: {
                    title: "自律的な実行を体感する",
                    title_en: "Experience Autonomous Execution",
                    goal: "CSVファイルの集計を依頼し、Claudeが読み込み→分析→出力まで自律的に行う様子を確認",
                    goal_en: "Request CSV aggregation and observe Claude autonomously reading→analyzing→outputting",
                    prerequisites: ["ハンズオンフォルダにdata/sales_2025.csvがある"],
                    prerequisites_en: ["data/sales_2025.csv exists in hands-on folder"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のプロンプトを入力",
                            action_en: "Enter the following prompt",
                            prompt: "data/sales_2025.csv を読んで、月別の売上合計を計算して表形式で表示して。",
                            prompt_en: "Read data/sales_2025.csv and calculate monthly sales totals, displaying in table format.",
                            expected: "Claudeがファイルを読み、Pythonスクリプトを作成・実行し、結果を表示する",
                            expected_en: "Claude reads the file, creates and executes a Python script, displays results"
                        },
                        {
                            step: 2,
                            action: "続けて依頼",
                            action_en: "Continue with request",
                            prompt: "地域別の売上も追加して、どの地域が最も売上が高いか教えて。",
                            prompt_en: "Add regional sales breakdown and tell me which region has the highest sales.",
                            expected: "前の文脈を維持しながら追加分析を行う",
                            expected_en: "Performs additional analysis while maintaining previous context"
                        }
                    ],
                    checkpoints: [
                        "こちらが「どうやって」を指示しなくても、Claudeが方法を考えている",
                        "必要なコマンドを自分で実行している"
                    ],
                    checkpoints_en: [
                        "Claude figures out the method without you specifying 'how'",
                        "Executes necessary commands on its own"
                    ]
                }
            }
        },
        {
            id: "00_03",
            time: "15分",
            time_en: "15 min",
            number: "00_03",
            title: "なぜコンテキストウィンドウが最重要か",
            title_en: "Why Context Window is Critical",
            description: "コンテキストウィンドウは有限のリソース。効率的に使わなければ、AIの性能は急激に劣化する。",
            description_en: "Context window is a finite resource. Without efficient use, AI performance degrades rapidly.",
            icon: "database",
            tags: ["コンテキスト", "トークン", "最適化"],
            tags_en: ["Context", "Token", "Optimization"],
            content: {
                summary: "コンテキストウィンドウは「AIの短期記憶」です。この有限リソースをどう使うかが成否を分けます。2026年7月現在、Opus 5 / Sonnet 5 / Fable 5 が最大1Mトークン（日本語で約55万語相当）、Haiku 4.5は200kトークンに対応しています。容量があっても効率的に使わなければ性能が劣化します。",
                summary_en: "The context window is 'AI's short-term memory.' How you use this finite resource determines success or failure. As of July 2026, Opus 5 / Sonnet 5 / Fable 5 support up to 1M tokens, while Haiku 4.5 supports 200k. Even with this capacity, performance degrades without efficient use.",
                keyPoints: [
                    "Opus 5 / Sonnet 5 / Fable 5 は最大1Mトークン対応、Haiku 4.5は200kトークン",
                    "コンテキストが埋まるとAIの性能が劣化（Context Rot）",
                    "不要な情報を送らない、必要な情報を効率的に渡すことが重要",
                    "/cost コマンドで使用量と費用を確認できる"
                ],
                keyPoints_en: [
                    "Opus 5 / Sonnet 5 / Fable 5 support up to 1M tokens, Haiku 4.5 up to 200k",
                    "AI performance degrades when context fills up (Context Rot)",
                    "Important to not send unnecessary info, pass needed info efficiently",
                    "Check usage with /context command"
                ],
                handson: {
                    title: "コンテキスト使用量を確認する",
                    title_en: "Check Context Usage",
                    goal: "やり取りでコンテキストが消費されることを体感",
                    goal_en: "Experience how context is consumed through interactions",
                    prerequisites: ["Claude Codeでセッションを開始している"],
                    prerequisites_en: ["Session started in Claude Code"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のコマンドを実行",
                            action_en: "Execute the following command",
                            prompt: "/context",
                            expected: "現在のコンテキスト使用量が表示される（例: 5% used）",
                            expected_en: "Current context usage displayed (e.g., 5% used)"
                        },
                        {
                            step: 2,
                            action: "いくつかの質問をしてから再度確認",
                            action_en: "Ask several questions then check again",
                            prompt: "/context",
                            expected: "使用量が増加している",
                            expected_en: "Usage has increased"
                        }
                    ],
                    checkpoints: [
                        "やり取りのたびにコンテキストが消費されることを理解",
                        "大きなファイルを読むと一気に消費されることを確認"
                    ],
                    checkpoints_en: [
                        "Understand that context is consumed with each interaction",
                        "Confirm that reading large files consumes context rapidly"
                    ]
                }
            }
        },
        {
            id: "00_04",
            time: "20分",
            time_en: "20 min",
            number: "00_04",
            title: "インストールと初期設定",
            title_en: "Installation and Setup",
            description: "Node.js、Claude Code CLI、VSCode拡張のセットアップ。APIキーの設定まで。",
            description_en: "Setting up Node.js, Claude Code CLI, and VSCode extension. Including API key configuration.",
            icon: "download",
            tags: ["インストール", "セットアップ", "API"],
            tags_en: ["Install", "Setup", "API"],
            content: {
                summary: "Claude Codeの導入は簡単。npmでインストールし、APIキーを設定すれば準備完了です。",
                summary_en: "Getting started with Claude Code is easy. Install via npm, set up your API key, and you're ready.",
                keyPoints: [
                    "npm install -g @anthropic-ai/claude-code でグローバルインストール",
                    "claude --version で動作確認",
                    "VSCode拡張「Claude Code」をインストールして連携",
                    "claude auth login でAPI認証"
                ],
                keyPoints_en: [
                    "Global install with npm install -g @anthropic-ai/claude-code",
                    "Verify with claude --version",
                    "Install VSCode extension 'Claude Code' for integration",
                    "Authenticate with claude auth login"
                ],
                code: "# インストール\nnpm install -g @anthropic-ai/claude-code\n\n# バージョン確認\nclaude --version\n\n# 認証\nclaude auth login",
                handson: {
                    title: "インストールと動作確認",
                    title_en: "Installation and Verification",
                    goal: "Claude Codeが正しくインストールされ、動作することを確認",
                    goal_en: "Verify that Claude Code is correctly installed and working",
                    prerequisites: ["Node.js v18以上がインストール済み"],
                    prerequisites_en: ["Node.js v18 or higher installed"],
                    steps: [
                        {
                            step: 1,
                            action: "ターミナルで以下を実行",
                            action_en: "Execute in terminal",
                            prompt: "npm install -g @anthropic-ai/claude-code",
                            expected: "インストールが完了する",
                            expected_en: "Installation completes"
                        },
                        {
                            step: 2,
                            action: "バージョン確認",
                            action_en: "Version check",
                            prompt: "claude --version",
                            expected: "バージョン番号が表示される（例: 1.0.x）",
                            expected_en: "Version number displayed (e.g., 1.0.x)"
                        },
                        {
                            step: 3,
                            action: "認証",
                            action_en: "Authentication",
                            prompt: "claude auth login",
                            expected: "ブラウザが開き、認証フローが開始される",
                            expected_en: "Browser opens and authentication flow begins"
                        }
                    ],
                    checkpoints: [
                        "claude コマンドが認識される",
                        "認証が成功する"
                    ],
                    checkpoints_en: [
                        "claude command is recognized",
                        "Authentication succeeds"
                    ]
                }
            }
        },
        {
            id: "00_05",
            time: "15分",
            time_en: "15 min",
            number: "00_05",
            title: "基本操作とショートカット",
            title_en: "Basic Operations and Shortcuts",
            description: "/init、/plan、/compact、Esc、Shift+Tab。これだけ覚えれば始められる。",
            description_en: "/init, /plan, /compact, Esc, Shift+Tab. Learn these and you can get started.",
            icon: "command",
            tags: ["コマンド", "ショートカット", "基本操作"],
            tags_en: ["Commands", "Shortcuts", "Basics"],
            content: {
                summary: "Claude Codeの基本操作は5つのコマンドとショートカットで完結します。",
                summary_en: "Basic Claude Code operations are covered by 5 commands and shortcuts.",
                keyPoints: [
                    "/init - CLAUDE.mdを自動生成",
                    "/plan - Planモードで計画してから実装",
                    "/compact - コンテキストを圧縮",
                    "Esc - 処理を中断",
                    "Shift+Tab - 自動補完",
                    "/clear - コンテキストをリセット"
                ],
                keyPoints_en: [
                    "/init - Auto-generate CLAUDE.md",
                    "/plan - Plan before implementing in Plan mode",
                    "/compact - Compress context",
                    "Esc - Interrupt processing",
                    "Shift+Tab - Auto-complete",
                    "/clear - Reset context"
                ],
                commands: [
                    { cmd: "/init", desc: "プロジェクト構造に基づいたCLAUDE.mdを自動生成", desc_en: "Auto-generate CLAUDE.md based on project structure" },
                    { cmd: "/plan", desc: "Planモードを開始。変更なしで探索・計画", desc_en: "Start Plan mode. Explore and plan without changes" },
                    { cmd: "/compact", desc: "コンテキストを要約して圧縮", desc_en: "Summarize and compress context" },
                    { cmd: "/clear", desc: "コンテキストをリセット", desc_en: "Reset context" },
                    { cmd: "/context", desc: "コンテキスト使用量を確認", desc_en: "Check context usage" },
                    { cmd: "/model", desc: "使用モデルを変更", desc_en: "Change model" }
                ],
                handson: {
                    title: "CLAUDE.mdを自動生成する",
                    title_en: "Auto-generate CLAUDE.md",
                    goal: "/init を使ってプロジェクト固有のCLAUDE.mdを生成",
                    goal_en: "Generate project-specific CLAUDE.md using /init",
                    prerequisites: ["ハンズオンフォルダを開いている"],
                    prerequisites_en: ["Hands-on folder is open"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のコマンドを実行",
                            action_en: "Execute the following command",
                            prompt: "/init",
                            expected: "Claudeがフォルダを探索し、CLAUDE.mdの内容を提案する",
                            expected_en: "Claude explores the folder and suggests CLAUDE.md content"
                        },
                        {
                            step: 2,
                            action: "提案を確認し、承認する",
                            action_en: "Review and approve the suggestion",
                            prompt: "（提案された内容を確認してEnter）",
                            prompt_en: "(Review suggested content and press Enter)",
                            expected: "CLAUDE.mdファイルが作成される",
                            expected_en: "CLAUDE.md file is created"
                        },
                        {
                            step: 3,
                            action: "@参照を試す",
                            action_en: "Try @ reference",
                            prompt: "@CLAUDE.md の内容を説明して",
                            prompt_en: "Explain the contents of @CLAUDE.md",
                            expected: "CLAUDE.mdの内容を読んで説明する",
                            expected_en: "Reads and explains CLAUDE.md contents"
                        }
                    ],
                    checkpoints: [
                        "CLAUDE.mdファイルがプロジェクトルートに作成された",
                        "@参照でファイルを直接指定できることを確認"
                    ],
                    checkpoints_en: [
                        "CLAUDE.md file created in project root",
                        "Confirmed @ reference can directly specify files"
                    ],
                    files: {
                        created: ["CLAUDE.md"],
                        location: "プロジェクトルート",
                        location_en: "Project root"
                    }
                }
            }
        },
        {
            id: "00_06",
            time: "15分",
            time_en: "15 min",
            number: "00_06",
            title: "非技術者向けの最初の5つのコマンド",
            title_en: "First 5 Commands for Non-Developers",
            description: "コードを書かなくても使える。ファイル整理、要約、レポート作成から始めよう。",
            description_en: "Use it without writing code. Start with file organization, summaries, and report generation.",
            icon: "users",
            tags: ["非エンジニア", "入門", "ユースケース"],
            tags_en: ["Non-Engineer", "Intro", "Use Cases"],
            content: {
                summary: "プログラミング経験がなくても、日常業務の効率化にClaude Codeは使えます。自然な日本語で依頼するだけで、ファイル操作やデータ分析が可能です。",
                summary_en: "Even without programming experience, Claude Code can streamline daily tasks. Just request in natural language and perform file operations or data analysis.",
                keyPoints: [
                    "ファイルの整理・リネーム",
                    "文書の要約・翻訳",
                    "データの集計・分析",
                    "レポートの自動生成",
                    "議事録からタスク抽出"
                ],
                keyPoints_en: [
                    "File organization and renaming",
                    "Document summarization and translation",
                    "Data aggregation and analysis",
                    "Automated report generation",
                    "Task extraction from meeting notes"
                ],
                examples: [
                    "このフォルダの中身を一覧にして",
                    "更新日順にファイルを並べて",
                    "このCSVを月別に集計して",
                    "この議事録から次のアクションを抽出して",
                    "このレポートを3行で要約して"
                ],
                examples_en: [
                    "List the contents of this folder",
                    "Sort files by modification date",
                    "Aggregate this CSV by month",
                    "Extract action items from these meeting notes",
                    "Summarize this report in 3 lines"
                ],
                handson: {
                    title: "ファイル一覧と更新日順",
                    title_en: "File List and Sorting by Date",
                    goal: "自然な日本語でファイル操作を依頼する",
                    goal_en: "Request file operations in natural language",
                    prerequisites: ["ハンズオンフォルダを開いている"],
                    prerequisites_en: ["Hands-on folder is open"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のプロンプトを入力",
                            action_en: "Enter the following prompt",
                            prompt: "このフォルダ内のすべてのファイルを一覧にして、更新日が新しい順に並べて。",
                            prompt_en: "List all files in this folder and sort by most recently modified.",
                            expected: "ファイル一覧が更新日順で表示される",
                            expected_en: "File list displayed sorted by modification date"
                        },
                        {
                            step: 2,
                            action: "続けて依頼",
                            action_en: "Continue with request",
                            prompt: "この中でCSVファイルだけを抽出して、それぞれの行数を教えて。",
                            prompt_en: "Extract only CSV files from these and tell me the line count of each.",
                            expected: "CSVファイルと行数が表示される",
                            expected_en: "CSV files and their line counts displayed"
                        }
                    ],
                    checkpoints: [
                        "プログラミング用語を使わなくても操作できる",
                        "自然な日本語で依頼が通る"
                    ],
                    checkpoints_en: [
                        "Operations work without using programming terminology",
                        "Natural language requests are understood"
                    ]
                }
            }
        },
        {
            id: "00_07",
            time: "12分",
            time_en: "12 min",
            number: "00_07",
            title: "2026年のClaude Code - 最新モデルと新機能",
            title_en: "Claude Code in 2026 - Latest Models & Features",
            description: "Opus 5 / Sonnet 5 / Fable 5 / Haiku 4.5の性能差、1Mトークンコンテキスト、v2.1.252までの新機能群を把握する。",
            description_en: "Understand Opus 5 / Sonnet 5 / Fable 5 / Haiku 4.5 performance differences, 1M token context, and new features up to v2.1.252.",
            icon: "zap",
            tags: ["2026年9月最新", "モデル", "v2.1.252"],
            tags_en: ["September 2026 Latest", "Models", "v2.1.252"],
            content: {
                summary: "2026年9月時点でClaude Codeはv2.1.252（2026/8/31リリース）。モデル構成はOpus 5（v2.1.219でデフォルトに、複雑なエージェントコーディング・企業業務向け、1Mコンテキスト・128K最大出力、$5/$25 per MTok）、Sonnet 5（速度と知性のバランスが良く日常向き、1Mコンテキスト、$3/$15 per MTok・2026/8/31まで$2/$10の導入価格）、Fable 5（2026/6/9 GA、最も高性能な一般公開モデル、Adaptive Thinking常時有効）、Haiku 4.5（200kコンテキスト、軽量高速）。Opus 5・Sonnet 5はAdaptive Thinking対応でeffort既定はhigh（/effort xhighでさらに強化）。Opus 4.8以前はレガシー扱いで、Opus 4.1は2026/8/5に退役。コマンド面ではv2.1.202で/doctor（セットアップチェックアップ）、v2.1.198で/dataviz（チャート設計ガイダンス）が追加。v2.1.200では権限モード名称が「Default」→「Manual」に変更。v2.1.198でサブエージェントがデフォルトでバックグラウンド実行に。v2.1.207ではBedrock/Vertex/Foundryでのauto modeがopt-in不要に。v2.1.210ではWrite(path)/NotebookEdit(path)/Glob(path)権限ルールが廃止（Edit/Read使用）。v2.1.212では/subtask・/forkのバックグラウンド複製、v2.1.219でOpus 5がデフォルトになった。2026年8月の主要追加（v2.1.220〜v2.1.233）：セッション間メッセージング（macOS/Linux）、セルフホスト環境パブリックβ（Team/Enterprise）、auto modeがPro/Max/Teamの新規セッションでデフォルトに（2026/8/14〜）、/teleportコマンド（クラウドセッションをローカルへ転送）、--forward-subagent-text・--permission-prompt-toolフラグ、CLAUDE_CODE_ENABLE_TODO_TOOLS=1（新モデルでTodoツールが廃止されたため再有効化用）、Bash入力リダイレクト権限チェック（v2.1.233）、サブエージェント制御の新環境変数群（CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION等）、VS Code FocusビューがWeek 32で追加。2026年9月（v2.1.234〜v2.1.252）では/design（Claude DesignのアートボードワークフローをCLI/Desktopに統合、リサーチプレビュー）、Concise output style（Preambleを省略して結果から始める組み込み出力スタイル）、Remote Controlデバイスカード（スマートフォンから接続済みマシンにセッション開始）、ANTHROPIC_DEFAULT_MODEL環境変数（v2.1.234 Week 34）、--restrictedフラグ（コマンド・コード実行ツールを除去する制限モード、CLAUDE_CODE_RESTRICTED=1でも指定可、v2.1.248）、PreModelSwitch/PostModelSwitchフック（モデル切替前後に発火する新フックイベント、v2.1.251）、/costにセッション別プロンプトキャッシュヒット率・再キャッシュ情報を追加（v2.1.251）、/usageにスペンドリミットバーとusage-credits情報を追加（v2.1.251）が加わった。なおSonnet 5は2026/8/31でプロモ価格期間が終了し、正式価格$2/$10 per MTokが確定。",
                summary_en: "As of September 2026, Claude Code is at v2.1.252 (released 2026/8/31). Model lineup: Opus 5 (default since v2.1.219, for complex agentic coding and enterprise work, 1M context, 128k max output, $5/$25 per MTok), Sonnet 5 (best speed/intelligence balance for daily work, 1M context, $2/$10 per MTok), Fable 5 (GA 2026/6/9, most capable widely released model, Adaptive Thinking always on), Haiku 4.5 (200k context, lightweight). Opus 5 and Sonnet 5 support Adaptive Thinking with effort defaulting to high. Opus 4.8 and earlier are legacy. Key additions in v2.1.234–v2.1.252: /design (artboard UI design research preview in CLI/Desktop), Concise output style (built-in style that leads with results), Remote Control device cards (start sessions on connected machines from phone), ANTHROPIC_DEFAULT_MODEL env var (v2.1.234 Week 34), --restricted flag (removes command/code-execution tools; also CLAUDE_CODE_RESTRICTED=1, v2.1.248), PreModelSwitch/PostModelSwitch hooks (v2.1.251), /cost with per-session prompt cache hit-rate and re-caching info (v2.1.251), /usage spend limit bar with usage-credits info (v2.1.251).",
                keyPoints: [
                    "Fable 5: 1Mコンテキスト、最も高性能な一般公開モデル、Adaptive Thinking常時有効、$10/$50 per MTok",
                    "Opus 5: 1Mコンテキスト、デフォルトモデル（v2.1.219以降）。複雑なエージェントコーディング・企業業務向け、effort既定high、$5/$25 per MTok",
                    "Sonnet 5: 1Mコンテキスト・128K最大出力、デフォルトモデル（v2.1.197〜）、Adaptive Thinking対応、$3/$15 per MTok（2026/8/31まで$2/$10プロモ）",
                    "Haiku 4.5: 200kコンテキスト、軽量タスク・トリアージ向け、$1/$5 per MTok",
                    "opusplan: 計画フェーズ=Opus、実行フェーズ=Sonnetの自動切替",
                    "プロンプトキャッシュで90%、Batch APIで50%のコスト削減が可能",
                    "Opus 5 / Opus 4.8 は Fast mode 対応。/effort xhighで最大思考",
                    "dynamic workflows: 数十〜数百のサブエージェントをスクリプトでオーケストレーション",
                    "v2.1.234〜v2.1.252の主要新機能: /design（アートボードUI設計リサーチプレビュー）、ANTHROPIC_DEFAULT_MODEL環境変数、Concise output style（簡潔出力）、--restrictedフラグ（コマンド実行ツール除去）、PreModelSwitch/PostModelSwitchフック（v2.1.251）、/costにプロンプトキャッシュヒット率追加、/usageにスペンドリミットバー追加（v2.1.251）"
                ],
                keyPoints_en: [
                    "Fable 5: 1M context, most capable widely released model, Adaptive Thinking always on, $10/$50 per MTok",
                    "Opus 5: 1M context, the default since v2.1.219. For complex agentic coding and enterprise work, effort defaults to high, $5/$25 per MTok",
                    "Sonnet 5: 1M context, 128k max output, new default model (v2.1.197+), Adaptive Thinking, $3/$15 per MTok (promo $2/$10 until 2026/8/31)",
                    "Haiku 4.5: 200k context, for lightweight tasks & triage, $1/$5 per MTok",
                    "opusplan: Auto-switch Opus for planning, Sonnet for execution",
                    "90% cost reduction with prompt caching, 50% with Batch API",
                    "Opus 5 / Opus 4.8 support Fast mode; /effort xhigh for max thinking",
                    "dynamic workflows: orchestrate dozens-hundreds of subagents from a script",
                    "v2.1.234–v2.1.252 highlights: /design (artboard UI design research preview), ANTHROPIC_DEFAULT_MODEL env var, Concise output style, --restricted flag (removes command-execution tools), PreModelSwitch/PostModelSwitch hooks (v2.1.251), /cost with per-session prompt cache metrics, /usage spend limit bar (v2.1.251)"
                ],
                newFeatures: [
                    { name: "Claude Sonnet 5（新デフォルト）", desc: "2026/6/30リリース（v2.1.197）。デフォルトモデルに昇格。1Mコンテキスト・128K最大出力、Adaptive Thinking対応。$3/$15 per MTok（2026/8/31まで$2/$10プロモ価格）。API ID: claude-sonnet-5" },
                    { name: "組織別デフォルトモデル", desc: "組織管理者がデフォルトモデルを設定可能。読みやすいデフォルトセッション名。ファイル添付のクリック操作（Cmd/Ctrl-click）（v2.1.196）" },
                    { name: "CLAUDE_CODE_DISABLE_MOUSE_CLICKS", desc: "マウスクリックを無効化する環境変数（v2.1.195）" },
                    { name: "autoMode.classifyAllShell", desc: "全シェルコマンドをauto modeで分類する設定。OTEL_LOG_ASSISTANT_RESPONSESでアシスタント応答をテレメトリに記録。bashモードで!コマンド出力後にライブファイルパス補完（v2.1.193）" },
                    { name: "/rewind", desc: "/clearを実行する前の会話状態から再開するコマンド（v2.1.191）" },
                    { name: "Claude Fable 5", desc: "2026/6/9リリース。最も高性能な一般公開モデル。Adaptive Thinking常時有効、1Mコンテキスト。$10/$50 per MTok" },
                    { name: "/cd", desc: "セッションを新しいワーキングディレクトリに移動（v2.1.169）" },
                    { name: "Claude Code Artifacts", desc: "セッション文脈から共有可能なライブWebページを生成。単一HTML・組織内限定共有、Team/Enterprise向けβ（2026/6/18）" },
                    { name: ".claude/rules", desc: "paths指定で関連ディレクトリ作業時のみロードされる指示ファイル。CLAUDE.mdより省トークン（2026/6/18 steeringガイド）" },
                    { name: "Tool(param:value) 権限", desc: "パラメータ値で権限を制御。例 Agent(model:opus) でOpusサブエージェント起動を拒否（v2.1.178）" },
                    { name: "auto modeの破壊的gitブロック", desc: "auto modeで git reset --hard / clean -fd 等を自動遮断（v2.1.183）" },
                    { name: "sandbox.credentials", desc: "サンドボックス内コマンドからの認証情報・秘密環境変数の読取をブロック（v2.1.187）" },
                    { name: "/usage-credits", desc: "使用クレジット表示（/extra-usageを改名）" },
                    { name: "--fallback-model", desc: "プライマリモデル利用不可時のフォールバックモデルを指定するCLIフラグ" },
                    { name: "--safe-mode", desc: "全カスタマイズを無効化して起動するフラグ。CLAUDE_CODE_SAFE_MODE環境変数でも指定可" },
                    { name: "Claude Opus 5", desc: "v2.1.219（2026/7/25）でデフォルトモデルに。1Mコンテキスト・最大出力128K、Adaptive Thinking対応、effort既定high、Fast mode対応。$5/$25 per MTok" },
                    { name: "/subtask", desc: "副作業を独立コンテキストのサブエージェントへ切り出す明示コマンド（v2.1.212）" },
                    { name: "/fork（バックグラウンド複製）", desc: "現在の会話をバックグラウンドセッションへコピーし、元の作業を止めずに分岐を試す（v2.1.212）" },
                    { name: "sandbox.network.strictAllowlist", desc: "サンドボックスのネットワーク許可を厳格なallowlist方式にする設定キー（v2.1.219）" },
                    { name: "DirectoryAdded フック", desc: "作業ディレクトリ追加時に発火するフック。--add-dir や /cd と組み合わせた初期化に（v2.1.219）" },
                    { name: "Opus 4.8", desc: "2026/5/28リリース。v2.1.154でデフォルトだった世代。Adaptive Thinking対応、effortデフォルトhigh" },
                    { name: "dynamic workflows", desc: "数十〜数百のサブエージェントをスクリプトでオーケストレーション（v2.1.154）" },
                    { name: "/workflows", desc: "dynamic workflowの実行状況を表示（v2.1.154）" },
                    { name: "/code-review", desc: "正確性バグを指定レベルで報告。--commentでGitHub PRにコメント投稿（/simplifyを改名、v2.1.152）" },
                    { name: "/reload-skills", desc: "再起動なしでskillディレクトリを再スキャン（v2.1.157）" },
                    { name: "Plugin自動ロード", desc: ".claude/skillsからプラグインが自動ロード（マーケットプレイス不要、v2.1.157）" },
                    { name: "auto mode Pro対応", desc: "ProプランでSonnet 4.6とOpusでauto modeが利用可能に（v2.1.143）" },
                    { name: "claude agents", desc: "エージェントビュー。--add-dir, --model, --effort等のフラグで起動（v2.1.139/142）" },
                    { name: "/goal", desc: "完了条件を設定し、条件を満たすまで継続実行（v2.1.139）" },
                    { name: "auto permission mode", desc: "安全操作は自動許可・高リスクは自動ブロック。hard_deny/soft_deny対応" },
                    { name: "/dataviz", desc: "チャート・ダッシュボードのデザインガイダンスとカラーパレット検証スラッシュコマンド（v2.1.198）" },
                    { name: "サブエージェントのバックグラウンド実行（デフォルト化）", desc: "サブエージェントがデフォルトでバックグラウンド実行に。Claudeはサブエージェント実行中も作業継続可能。extended thinking継承も対応（v2.1.198）" },
                    { name: "「Default」→「Manual」権限モード改名", desc: "CLI・--help・VS Code・JetBrainsで「Default」が「Manual」に改名。--permission-mode manual / \"defaultMode\": \"manual\" で指定（v2.1.200）" },
                    { name: "/doctor（/checkup）", desc: "セットアップの完全チェックアップ。問題を診断して修正提案。/checkupがエイリアス（v2.1.202）" },
                    { name: "デスクトップ版アプリ内ブラウザ", desc: "Claude Codeデスクトップ版にビルトインブラウザ。ドキュメント・デザインなど任意サイトを参照しローカル開発サーバー同様に操作可能（v2.1.202）" },
                    { name: "--ax-screen-reader / CLAUDE_AX_SCREEN_READER=1", desc: "スクリーンリーダー向けプレーンテキストレンダリング（v2.1.208）" },
                    { name: "CLAUDE_CODE_PROCESS_WRAPPER", desc: "企業ランチャー向け。Claude Codeの全セルフスポーンプロセスに前置するラッパー指定環境変数（v2.1.208）" },
                    { name: "Auto modeのBedrock/Vertex/Foundry展開", desc: "opt-in不要でAuto modeが利用可能に。disableAutoMode設定で無効化（v2.1.207）" },
                    { name: "Write/NotebookEdit/Glob(path) 権限ルール廃止", desc: "Write(path)・NotebookEdit(path)・Glob(path)権限ルールは廃止。Edit(path) または Read(path) を使用。起動時に警告表示（v2.1.210）" },
                    { name: "Auto modeクラシファイアのSonnet 5デフォルト化", desc: "外部セッションのAuto modeクラシファイアがデフォルトでSonnet 5を使用（v2.1.210）" },
                    { name: "セッション間メッセージング", desc: "macOS・Linux でClaude Codeセッション同士がメッセージを送受信できる。知見や決定を再説明なく別セッションへ引き継げる（v2.1.220〜v2.1.224 / Week 32）" },
                    { name: "セルフホスト環境（public beta）", desc: "Team・Enterpriseプランで、組織が運営するインフラ上でClaude Codeクラウドセッションを実行できる（Week 32）" },
                    { name: "Auto modeがPro/Max/Teamのデフォルトに", desc: "2026/8/14よりPro・Max・Teamプランの新規セッションでauto modeがデフォルト権限モードに（v2.1.221以降）" },
                    { name: "/teleport", desc: "クラウドセッションをローカルへ転送するコマンド。claude.aiで「/teleport」→ CLIで「claude --teleport <session id>」で継続（v2.1.233）" },
                    { name: "--forward-subagent-text / CLAUDE_CODE_FORWARD_SUBAGENT_TEXT", desc: "stream-json出力にサブエージェントのテキストと思考を含めるCLIフラグ（v2.1.233）" },
                    { name: "--permission-prompt-tool", desc: "権限プロンプトの処理に使うMCPサーバーを指定するCLIフラグ（v2.1.233）" },
                    { name: "Todoツール廃止とCLAUDE_CODE_ENABLE_TODO_TOOLS=1", desc: "Opus 4.8・Sonnet 5・Fable 5・Mythos 5以降の新モデルではTodo/タスク追跡ツールを削除。再有効化には CLAUDE_CODE_ENABLE_TODO_TOOLS=1 を設定（v2.1.233）" },
                    { name: "Bash入力リダイレクト権限チェック", desc: "「< file」のような入力リダイレクトも権限チェック対象に（v2.1.233）" },
                    { name: "サブエージェント制御の新環境変数", desc: "CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION（既定200）・CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION（既定200）・CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS（既定20）・CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH（既定3、v2.1.219で有効化）・CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS（既定有効、0で無効化）でセッション内の上限を細かく制御（v2.1.221〜）" },
                    { name: "Ultraplan廃止", desc: "/ultraplanコマンドを削除（v2.1.221）" },
                    { name: "VS Code拡張 Focus view", desc: "VS Code拡張にFocus viewを追加（Week 32）" },
                    { name: "/design", desc: "Claude DesignのアートボードワークフローをCLIとDesktopアプリに統合。UIをアートボードとして下書きし選択・実装できるリサーチプレビュー（v2.1.234 / Week 34）" },
                    { name: "Concise output style（簡潔出力）", desc: "ClaudeがPreambleを省略して結果から始めるBuilt-in出力スタイル（v2.1.234 / Week 34）" },
                    { name: "Remote Controlデバイスカード", desc: "claude remote-control実行中のマシンがスマートフォンに端末カードとして表示され、Codeタブからセッション開始できる（v2.1.234 / Week 34）" },
                    { name: "ANTHROPIC_DEFAULT_MODEL", desc: "新規セッションのデフォルトモデルを設定する環境変数（v2.1.234 / Week 34）" },
                    { name: "--restricted フラグ / CLAUDE_CODE_RESTRICTED=1", desc: "コマンド・コードを実行するBuilt-inツールを除去し、ワーキングディレクトリ内ファイルツールのみ残す制限モード（v2.1.248）" },
                    { name: "experimental.cacheTtl エージェント設定", desc: "エージェントごとのプロンプトキャッシュTTLを個別設定できる設定キー（v2.1.248）" },
                    { name: "PreModelSwitch / PostModelSwitch フック", desc: "モデル切替前後に発火する新フックイベント。モデル切替を制御できる（v2.1.251）" },
                    { name: "/cost にプロンプトキャッシュ指標追加", desc: "セッション別プロンプトキャッシュのヒット率・トークン再キャッシュ情報を/costで確認可能（v2.1.251）" },
                    { name: "/usage にスペンドリミットバー追加", desc: "/usageコマンドにスペンドリミットバーとusage-credits情報が追加（v2.1.251）" }
                ],
                handson: {
                    title: "モデルとバージョンを確認する",
                    title_en: "Check Models and Version",
                    goal: "使用中のモデル・バージョン・コストを確認し、モデル切替を体験する",
                    goal_en: "Check current model, version, cost, and experience model switching",
                    prerequisites: ["Claude Codeがインストール済み"],
                    prerequisites_en: ["Claude Code is installed"],
                    steps: [
                        {
                            step: 1,
                            action: "バージョンとコストを確認",
                            action_en: "Check version and cost",
                            prompt: "/cost",
                            prompt_en: "/cost",
                            expected: "現在のモデル、トークン使用量、概算費用が表示される",
                            expected_en: "Current model, token usage, and estimated cost are displayed"
                        },
                        {
                            step: 2,
                            action: "Shift+Tabでモード切替を体験",
                            action_en: "Experience mode switching with Shift+Tab",
                            prompt: "Shift+Tabを押す → Normal → Auto-accept → Plan の切替を確認",
                            prompt_en: "Press Shift+Tab → Confirm Normal → Auto-accept → Plan switching",
                            expected: "ステータスバーにモードが表示される",
                            expected_en: "Mode is shown in status bar"
                        }
                    ],
                    checkpoints: [
                        "使用中のモデルとバージョンが確認できた",
                        "Shift+Tabでのモード切替を理解した"
                    ],
                    checkpoints_en: [
                        "Confirmed current model and version",
                        "Understood mode switching with Shift+Tab"
                    ]
                }
            }
        },
        {
            id: "00_08",
            time: "20分",
            time_en: "20 min",
            number: "00_08",
            title: "IDE統合 - VS Code / JetBrains",
            title_en: "IDE Integration - VS Code / JetBrains",
            description: "VS Code拡張とJetBrainsプラグインの導入方法、ネイティブパネル、インラインdiffレビュー。",
            description_en: "VS Code extension and JetBrains plugin setup, native panel, inline diff review.",
            icon: "layout",
            tags: ["VS Code", "JetBrains", "IDE"],
            tags_en: ["VS Code", "JetBrains", "IDE"],
            content: {
                summary: "Claude Codeはターミナル単体でも動作するが、VS Code拡張やJetBrainsプラグインと組み合わせると生産性が跳ね上がる。VS Code版ではネイティブパネル、インラインdiff、Plan Modeの計画UI表示、@メンションによるファイル指定、複数同時会話に対応。JetBrains版はBeta提供中で、IDE内ターミナルとdiffビューアが連動する。",
                summary_en: "Claude Code works standalone in terminal, but combining with VS Code extension or JetBrains plugin dramatically boosts productivity. VS Code provides native panel, inline diff, Plan Mode UI, @mentions for files, and multiple simultaneous conversations. JetBrains plugin is in Beta with terminal and diff viewer integration.",
                keyPoints: [
                    "VS Code: 公式拡張機能 'Claude Code' をMarketplaceからインストール",
                    "ネイティブパネルでチャット、インライン編集、IDE形式のdiffレビュー",
                    "Plan Modeの計画をUIで確認・編集してから承認できる",
                    "@メンションでファイル名や行範囲を直接指定可能",
                    "複数会話を別タブ・ウィンドウで同時に開ける",
                    "JetBrains: 'Claude Code [Beta]' プラグインで IntelliJ / PyCharm / WebStorm 等に対応"
                ],
                keyPoints_en: [
                    "VS Code: Install official 'Claude Code' extension from Marketplace",
                    "Native panel for chat, inline editing, IDE-style diff review",
                    "Review and edit Plan Mode plans in UI before approving",
                    "@mentions to directly specify file names and line ranges",
                    "Open multiple conversations in separate tabs/windows",
                    "JetBrains: 'Claude Code [Beta]' plugin supports IntelliJ/PyCharm/WebStorm etc."
                ],
                handson: {
                    title: "VS Code拡張を試す",
                    title_en: "Try VS Code Extension",
                    goal: "VS Code拡張をインストールし、ネイティブパネルからClaude Codeを使う",
                    goal_en: "Install VS Code extension and use Claude Code from the native panel",
                    prerequisites: ["VS Codeがインストール済み"],
                    prerequisites_en: ["VS Code is installed"],
                    steps: [
                        {
                            step: 1,
                            action: "VS Code Marketplaceで 'Claude Code' を検索してインストール",
                            action_en: "Search 'Claude Code' in VS Code Marketplace and install",
                            prompt: "拡張機能パネル → 'Claude Code' で検索 → インストール",
                            prompt_en: "Extensions panel → Search 'Claude Code' → Install",
                            expected: "サイドバーにClaude Codeパネルが表示される",
                            expected_en: "Claude Code panel appears in sidebar"
                        },
                        {
                            step: 2,
                            action: "パネルからファイルを@指定して質問",
                            action_en: "Ask a question by @mentioning a file from the panel",
                            prompt: "@package.json の依存関係を要約して",
                            prompt_en: "@package.json summarize the dependencies",
                            expected: "パネル内で回答が表示され、ファイル内容を参照した応答が得られる",
                            expected_en: "Response appears in panel, referencing file contents"
                        }
                    ],
                    checkpoints: [
                        "VS Code拡張が正常にインストールできた",
                        "@メンションでファイルを指定できた"
                    ],
                    checkpoints_en: [
                        "VS Code extension installed successfully",
                        "Successfully used @mention to specify files"
                    ]
                }
            }
        }
    ],
    basic: [
        {
            id: "01_01",
            time: "25分",
            time_en: "25 min",
            number: "01_01",
            title: "CLAUDE.md - プロジェクトの記憶",
            title_en: "CLAUDE.md - Project Memory",
            description: "CLAUDE.mdはプロジェクト固有のルールや知識を記載する場所。セッションを超えて参照される。",
            description_en: "CLAUDE.md stores project-specific rules and knowledge. Referenced across sessions.",
            icon: "file-text",
            tags: ["CLAUDE.md", "設定", "ルール"],
            tags_en: ["CLAUDE.md", "Config", "Rules"],
            content: {
                summary: "CLAUDE.mdは「プロジェクトの説明書」です。Claudeはセッション開始時に自動で読み込み、ここに書かれたルールに従います。",
                summary_en: "CLAUDE.md is the 'project manual.' Claude automatically reads it at session start and follows the rules written there.",
                keyPoints: [
                    "プロジェクトルートに配置",
                    "コーディング規約、アーキテクチャ、禁止事項を記載",
                    "~/CLAUDE.md でグローバル設定も可能",
                    "/init で自動生成、その後カスタマイズ",
                    "言語標準や自明な指示は含めない（コンテキスト節約）"
                ],
                keyPoints_en: [
                    "Place in project root",
                    "Document coding conventions, architecture, prohibited actions",
                    "Global settings possible with ~/CLAUDE.md",
                    "Auto-generate with /init, then customize",
                    "Don't include language standards or obvious instructions (saves context)"
                ],
                structure: [
                    "## プロジェクト概要",
                    "## 技術スタック",
                    "## コーディング規約",
                    "## 禁止事項",
                    "## テスト方法"
                ],
                structure_en: [
                    "## Project Overview",
                    "## Tech Stack",
                    "## Coding Conventions",
                    "## Prohibited Actions",
                    "## Testing Methods"
                ],
                code: "# CLAUDE.md\n\n## プロジェクト概要\n売上データ分析プロジェクト\n\n## 制約\n- Pythonスクリプトはscripts/に配置\n- 出力形式はCSV\n- コミット前にテスト実行必須\n\n## 禁止事項\n- 本番データの直接編集禁止",
                handson: {
                    title: "CLAUDE.mdにルールを追加する",
                    title_en: "Add Rules to CLAUDE.md",
                    goal: "既存のCLAUDE.mdにプロジェクト固有のルールを追加",
                    goal_en: "Add project-specific rules to existing CLAUDE.md",
                    prerequisites: ["00_05で/initを実行し、CLAUDE.mdが存在する"],
                    prerequisites_en: ["Ran /init in 00_05, CLAUDE.md exists"],
                    steps: [
                        {
                            step: 1,
                            action: "現在のCLAUDE.mdを確認",
                            action_en: "Check current CLAUDE.md",
                            prompt: "@CLAUDE.md を表示して",
                            prompt_en: "Show @CLAUDE.md",
                            expected: "現在のCLAUDE.mdの内容が表示される",
                            expected_en: "Current CLAUDE.md contents displayed"
                        },
                        {
                            step: 2,
                            action: "ルールを追加",
                            action_en: "Add rules",
                            prompt: "CLAUDE.md に以下のルールを追加して：\n\n## 出力ルール\n- スクリプトは scripts/ フォルダに配置\n- 集計結果は常にCSV形式で出力\n- コメントは日本語で記載",
                            prompt_en: "Add the following rules to CLAUDE.md:\n\n## Output Rules\n- Place scripts in scripts/ folder\n- Always output aggregation results in CSV format\n- Write comments in English",
                            expected: "CLAUDE.mdにルールが追加される",
                            expected_en: "Rules added to CLAUDE.md"
                        },
                        {
                            step: 3,
                            action: "ルールが適用されるか確認",
                            action_en: "Verify rules are applied",
                            prompt: "data/sales_2025.csv を月別に集計するスクリプトを作成して",
                            prompt_en: "Create a script to aggregate data/sales_2025.csv by month",
                            expected: "scripts/フォルダにスクリプトが作成され、CSV形式で出力される",
                            expected_en: "Script created in scripts/ folder, output in CSV format"
                        }
                    ],
                    checkpoints: [
                        "CLAUDE.mdにルールが追加された",
                        "以降のタスクでルールが自動的に適用される"
                    ],
                    checkpoints_en: [
                        "Rules added to CLAUDE.md",
                        "Rules automatically applied in subsequent tasks"
                    ],
                    files: {
                        modified: ["CLAUDE.md"],
                        created: ["scripts/summary_by_month.py"]
                    }
                }
            }
        },
        {
            id: "01_02",
            time: "20分",
            time_en: "20 min",
            number: "01_02",
            title: "検証の仕組みを与える",
            title_en: "Provide Verification Methods",
            description: "公式ベストプラクティスで最も強調されているのがこれ。テスト、期待出力を示して自己検証させる。",
            description_en: "The most emphasized official best practice. Provide tests and expected outputs for self-verification.",
            icon: "check-circle",
            tags: ["検証", "テスト", "ベストプラクティス"],
            tags_en: ["Verification", "Test", "Best Practice"],
            content: {
                summary: "「検証方法を提供せよ」はAnthropicが最も強調するプラクティスです。具体的な入力→期待出力を示すことで、Claudeが自己検証できるようになります。",
                summary_en: "'Provide verification methods' is the practice Anthropic emphasizes most. By showing specific input→expected output, Claude can self-verify.",
                keyPoints: [
                    "具体的な入力→期待出力を示す",
                    "テストを書かせて実行させる",
                    "スクリーンショットで視覚的に検証",
                    "「根本原因に対処して」と指示する",
                    "曖昧な「うまく動くようにして」は避ける"
                ],
                keyPoints_en: [
                    "Show specific input→expected output",
                    "Have tests written and executed",
                    "Verify visually with screenshots",
                    "Instruct to 'address root cause'",
                    "Avoid vague 'make it work'"
                ],
                quote: "テスト、スクリーンショット、期待される出力を含めて、Claudeが自己検証できるようにせよ。これが最もレバレッジの高い一手です。",
                quote_en: "Include tests, screenshots, expected outputs so Claude can self-verify. This is the highest-leverage move.",
                comparison: {
                    bad: "メール検証関数を実装して",
                    bad_en: "Implement email validation function",
                    good: "validateEmail関数を書いて。test@example.comは真、invalidは偽を返す。実装後テストを実行して",
                    good_en: "Write validateEmail function. test@example.com returns true, invalid returns false. Run tests after implementation"
                },
                handson: {
                    title: "期待出力を渡して集計を検証させる",
                    title_en: "Verify Aggregation with Expected Output",
                    goal: "「期待される出力」を明示して依頼し、Claudeが自分で結果を検証できるようにする",
                    goal_en: "Make requests with explicit 'expected output' so Claude can verify results itself",
                    prerequisites: ["CLAUDE.mdがある", "data/sales_2025.csvがある"],
                    prerequisites_en: ["CLAUDE.md exists", "data/sales_2025.csv exists"],
                    steps: [
                        {
                            step: 1,
                            action: "検証付きの依頼文を送る",
                            action_en: "Send request with verification",
                            prompt: "data/sales_2025.csv を読んで、月別の合計金額を計算するPythonスクリプト scripts/summary_by_month.py を作成して。\n\n条件:\n- 標準入力またはファイルパスでCSVを受け取る\n- date列はYYYY-MM-DD形式で、月は先頭7文字（YYYY-MM）で集計\n- 出力は「月, 合計」のCSV形式で標準出力に出す\n\n作成したら、data/sales_2025.csv に対してスクリプトを実行し、出力された月別合計がCSVの内容と一致するか検算して確認して。",
                            prompt_en: "Read data/sales_2025.csv and create Python script scripts/summary_by_month.py to calculate monthly totals.\n\nConditions:\n- Accept CSV via stdin or file path\n- date column is YYYY-MM-DD format, aggregate by first 7 chars (YYYY-MM)\n- Output as 'month, total' CSV format to stdout\n\nAfter creating, run script against data/sales_2025.csv and verify the monthly totals match the CSV content.",
                            expected: "スクリプト作成→実行→検証までClaudeが自律的に行う",
                            expected_en: "Claude autonomously creates script→executes→verifies"
                        },
                        {
                            step: 2,
                            action: "不一致があれば修正を依頼",
                            action_en: "Request fixes if mismatched",
                            prompt: "期待する集計結果と一致するように修正して",
                            prompt_en: "Fix to match expected aggregation results",
                            expected: "修正と再実行・再検証が行われる",
                            expected_en: "Fix, re-execute, and re-verify performed"
                        }
                    ],
                    checkpoints: [
                        "「正解」を渡すことで、Claudeが自己検証している",
                        "不一致なら修正するループが回る"
                    ],
                    checkpoints_en: [
                        "Claude self-verifies by being given the 'correct answer'",
                        "Correction loop runs if there's a mismatch"
                    ],
                    files: {
                        created: ["scripts/summary_by_month.py"]
                    }
                }
            }
        },
        {
            id: "01_03",
            time: "15分",
            time_en: "15 min",
            number: "01_03",
            title: "Context Rotとは何か",
            title_en: "What is Context Rot",
            description: "コンテキストが汚染されると、AIの性能が劣化する。これを「Context Rot」と呼ぶ。",
            description_en: "When context gets polluted, AI performance degrades. This is called Context Rot.",
            icon: "alert-triangle",
            tags: ["Context Rot", "劣化", "対策"],
            tags_en: ["Context Rot", "Degradation", "Countermeasures"],
            content: {
                summary: "長いセッションでは、古い情報や誤った推論が蓄積し、AIの判断力が低下します。これを「Context Rot（コンテキスト腐敗）」と呼びます。",
                summary_en: "In long sessions, old information and incorrect reasoning accumulate, degrading AI judgment. This is called 'Context Rot.'",
                keyPoints: [
                    "初期の誤った推論が後続の判断を歪める",
                    "無関係な情報がコンテキストを圧迫",
                    "対策: /compact、/clear、新規セッション開始",
                    "2回失敗したら /clear と再プロンプトを検討"
                ],
                keyPoints_en: [
                    "Early incorrect reasoning distorts subsequent judgments",
                    "Irrelevant information fills up context",
                    "Countermeasures: /compact, /clear, start new session",
                    "Consider /clear and re-prompt after 2 failures"
                ],
                symptoms: [
                    "同じ間違いを繰り返す",
                    "以前の指示を忘れる",
                    "無関係な情報を参照する",
                    "処理が遅くなる"
                ],
                symptoms_en: [
                    "Repeats same mistakes",
                    "Forgets previous instructions",
                    "References irrelevant information",
                    "Processing becomes slow"
                ],
                handson: {
                    title: "Context Rotの症状を理解する",
                    title_en: "Understand Context Rot Symptoms",
                    goal: "/contextで増加を確認し、症状を理解する",
                    goal_en: "Check increase with /context and understand symptoms",
                    prerequisites: ["いくつかのタスクを実行済み"],
                    prerequisites_en: ["Several tasks already executed"],
                    steps: [
                        {
                            step: 1,
                            action: "コンテキスト使用量を確認",
                            action_en: "Check context usage",
                            prompt: "/context",
                            expected: "現在の使用量が表示される",
                            expected_en: "Current usage displayed"
                        },
                        {
                            step: 2,
                            action: "いくつかの質問をする",
                            action_en: "Ask several questions",
                            prompt: "（複数の質問やファイル読み込みを行う）",
                            prompt_en: "(Ask multiple questions or read files)",
                            expected: "使用量が増加する",
                            expected_en: "Usage increases"
                        },
                        {
                            step: 3,
                            action: "圧縮を実行",
                            action_en: "Execute compression",
                            prompt: "/compact",
                            expected: "コンテキストが圧縮され、使用量が減少する",
                            expected_en: "Context compressed, usage decreases"
                        }
                    ],
                    checkpoints: [
                        "コンテキストが増加する仕組みを理解",
                        "/compactで圧縮できることを確認"
                    ],
                    checkpoints_en: [
                        "Understand how context accumulates",
                        "Confirm /compact can compress"
                    ]
                }
            }
        },
        {
            id: "01_04",
            time: "20分",
            time_en: "20 min",
            number: "01_04",
            title: "4つの基本戦略 - WSCEフレームワーク",
            title_en: "4 Core Strategies - WSCE Framework",
            description: "W: Write（書く）、S: Structure（構造化）、C: Compress（圧縮）、E: Extend（拡張）。",
            description_en: "W: Write, S: Structure, C: Compress, E: Extend.",
            icon: "layers",
            tags: ["WSCE", "フレームワーク", "戦略"],
            tags_en: ["WSCE", "Framework", "Strategy"],
            content: {
                summary: "コンテキスト管理の4つの柱「WSCE」で、効率的なセッションを実現します。",
                summary_en: "Achieve efficient sessions with the 4 pillars of context management: 'WSCE'.",
                keyPoints: [
                    "Write: 結果をファイルに書き出す（コンテキストから外す）",
                    "Structure: CLAUDE.mdで構造化（毎回説明しない）",
                    "Compress: /compactで圧縮（要約して継続）",
                    "Extend: Skills/Hooksで拡張（繰り返しを自動化）"
                ],
                keyPoints_en: [
                    "Write: Write results to files (remove from context)",
                    "Structure: Structure with CLAUDE.md (don't explain every time)",
                    "Compress: Compress with /compact (summarize and continue)",
                    "Extend: Extend with Skills/Hooks (automate repetition)"
                ],
                framework: [
                    { letter: "W", name: "Write", desc: "結果をファイルに書き出してコンテキストから外す", desc_en: "Write results to file, remove from context" },
                    { letter: "S", name: "Structure", desc: "CLAUDE.mdでルールを構造化", desc_en: "Structure rules with CLAUDE.md" },
                    { letter: "C", name: "Compress", desc: "/compactでコンテキストを圧縮", desc_en: "Compress context with /compact" },
                    { letter: "E", name: "Extend", desc: "Skills/Hooksで機能を拡張", desc_en: "Extend features with Skills/Hooks" }
                ],
                handson: {
                    title: "Write戦略を試す",
                    title_en: "Try the Write Strategy",
                    goal: "大きなCSVを要約してファイルに書き出す",
                    goal_en: "Summarize large CSV and write to file",
                    prerequisites: ["data/sales_2025.csvがある"],
                    prerequisites_en: ["data/sales_2025.csv exists"],
                    steps: [
                        {
                            step: 1,
                            action: "要約をファイルに書き出す",
                            action_en: "Write summary to file",
                            prompt: "data/sales_2025.csv の内容を分析し、以下の情報を data/summary.txt に書き出して：\n- 総レコード数\n- 期間（最初と最後の日付）\n- 合計金額\n- カテゴリ別の件数",
                            prompt_en: "Analyze data/sales_2025.csv and write the following to data/summary.txt:\n- Total record count\n- Date range (first and last dates)\n- Total amount\n- Count by category",
                            expected: "summary.txtが作成され、要約が保存される",
                            expected_en: "summary.txt created with saved summary"
                        },
                        {
                            step: 2,
                            action: "ファイルを参照して作業",
                            action_en: "Work by referencing file",
                            prompt: "@data/summary.txt を参照して、この売上データの特徴を説明して",
                            prompt_en: "Reference @data/summary.txt and explain the characteristics of this sales data",
                            expected: "元のCSV全体ではなく、要約ファイルを参照して回答",
                            expected_en: "Responds referencing summary file, not entire original CSV"
                        }
                    ],
                    checkpoints: [
                        "ファイルに書き出すことでコンテキストを節約",
                        "@参照で必要な情報だけを読み込む"
                    ],
                    checkpoints_en: [
                        "Save context by writing to files",
                        "Load only needed info with @ reference"
                    ],
                    files: {
                        created: ["data/summary.txt"]
                    }
                }
            }
        },
        {
            id: "01_05",
            time: "25分",
            time_en: "25 min",
            number: "01_05",
            title: "探索→計画→実装→コミット",
            title_en: "Explore → Plan → Implement → Commit",
            description: "Planモードで計画を立ててから実装。公式推奨のワークフロー。",
            description_en: "Plan before implementing in Plan mode. Officially recommended workflow.",
            icon: "git-branch",
            tags: ["Planモード", "ワークフロー", "計画"],
            tags_en: ["Plan Mode", "Workflow", "Planning"],
            content: {
                summary: "いきなりコードを書かない。まず探索し、計画を立て、承認を得てから実装。これが公式推奨のワークフローです。",
                summary_en: "Don't write code immediately. First explore, plan, get approval, then implement. This is the officially recommended workflow.",
                keyPoints: [
                    "/plan でPlanモードを開始",
                    "Claudeがコードベースを探索し、計画を提案",
                    "ユーザーが承認したら実装フェーズへ",
                    "実装後はコミットして完了",
                    "計画段階では変更が行われない（安全）"
                ],
                keyPoints_en: [
                    "Start Plan mode with /plan",
                    "Claude explores codebase and proposes plan",
                    "Move to implementation phase after user approval",
                    "Commit after implementation to complete",
                    "No changes made during planning phase (safe)"
                ],
                workflow: [
                    { phase: "探索", phase_en: "Explore", desc: "関連ファイルを読み、現状を把握", desc_en: "Read related files, grasp current state" },
                    { phase: "計画", phase_en: "Plan", desc: "変更計画を立て、ユーザーに提示", desc_en: "Create change plan, present to user" },
                    { phase: "実装", phase_en: "Implement", desc: "承認後、計画に従って変更を実行", desc_en: "Execute changes according to plan after approval" },
                    { phase: "コミット", phase_en: "Commit", desc: "変更をGitにコミット", desc_en: "Commit changes to Git" }
                ],
                handson: {
                    title: "Planモードで機能追加を計画する",
                    title_en: "Plan Feature Addition in Plan Mode",
                    goal: "Planモードで「レポートに集計表を追加」を計画・実装",
                    goal_en: "Plan and implement 'add summary table to report' in Plan mode",
                    prerequisites: ["scripts/summary_by_month.pyが存在する"],
                    prerequisites_en: ["scripts/summary_by_month.py exists"],
                    steps: [
                        {
                            step: 1,
                            action: "Planモードを開始",
                            action_en: "Start Plan mode",
                            prompt: "/plan",
                            expected: "Planモードに入る（プロンプトが変わる）",
                            expected_en: "Enter Plan mode (prompt changes)"
                        },
                        {
                            step: 2,
                            action: "計画を依頼",
                            action_en: "Request planning",
                            prompt: "売上データの月別・地域別レポートをMarkdownで出力する機能を追加したい。reports/q1_report.md として出力する。どのように実装すべきか計画して。",
                            prompt_en: "I want to add a feature to output monthly/regional sales report in Markdown. Output as reports/q1_report.md. Plan how to implement this.",
                            expected: "Claudeが既存コードを探索し、実装計画を提示",
                            expected_en: "Claude explores existing code and presents implementation plan"
                        },
                        {
                            step: 3,
                            action: "計画を承認して実装",
                            action_en: "Approve plan and implement",
                            prompt: "この計画で実装して",
                            prompt_en: "Implement with this plan",
                            expected: "計画に従って実装が行われる",
                            expected_en: "Implementation follows the plan"
                        }
                    ],
                    checkpoints: [
                        "Planモードでは変更が行われないことを確認",
                        "計画を確認してから実装できる安心感"
                    ],
                    checkpoints_en: [
                        "Confirm no changes are made in Plan mode",
                        "Peace of mind from reviewing plan before implementation"
                    ],
                    files: {
                        created: ["reports/q1_report.md"]
                    }
                }
            }
        },
        {
            id: "01_06",
            time: "20分",
            time_en: "20 min",
            number: "01_06",
            title: "よくある失敗パターン",
            title_en: "Common Failure Patterns",
            description: "公式ドキュメントが警告する失敗パターンと、その対策を学ぶ。",
            description_en: "Learn failure patterns warned by official documentation and their countermeasures.",
            icon: "x-circle",
            tags: ["失敗パターン", "アンチパターン", "対策"],
            tags_en: ["Failure Patterns", "Anti-patterns", "Countermeasures"],
            content: {
                summary: "Anthropic公式が警告する失敗パターンを知り、避けることで生産性を最大化します。",
                summary_en: "Maximize productivity by knowing and avoiding failure patterns warned by Anthropic officially.",
                keyPoints: [
                    "曖昧な指示を出す → 具体的なゴールと検証方法を示す",
                    "検証手段を与えない → テスト・期待出力を提供",
                    "コンテキストを肥大化させる → /compact、ファイル書き出し",
                    "計画せずに実装させる → /plan を使う"
                ],
                keyPoints_en: [
                    "Vague instructions → Show specific goals and verification methods",
                    "No verification means → Provide tests and expected outputs",
                    "Context bloat → Use /compact, write to files",
                    "Implementing without planning → Use /plan"
                ],
                antiPatterns: [
                    { name: "キッチンシンク", name_en: "Kitchen Sink", problem: "無関係タスク混在でコンテキスト散乱", problem_en: "Context scattered by mixing unrelated tasks", solution: "/clearでリセット", solution_en: "Reset with /clear" },
                    { name: "繰り返し修正", name_en: "Repeated Fixes", problem: "失敗アプローチで汚染", problem_en: "Polluted by failed approaches", solution: "2回失敗後に/clearと再プロンプト", solution_en: "/clear and re-prompt after 2 failures" },
                    { name: "長すぎるCLAUDE.md", name_en: "Too Long CLAUDE.md", problem: "ルールがノイズに埋没", problem_en: "Rules buried in noise", solution: "容赦なく削除またはフック化", solution_en: "Ruthlessly delete or convert to hooks" },
                    { name: "検証なし", name_en: "No Verification", problem: "エッジケース未処理", problem_en: "Unhandled edge cases", solution: "常に検証手段を提供", solution_en: "Always provide verification means" },
                    { name: "無限探索", name_en: "Infinite Exploration", problem: "大量ファイル読込", problem_en: "Loading massive files", solution: "スコープ限定またはサブエージェント", solution_en: "Limit scope or use subagents" }
                ],
                handson: {
                    title: "失敗パターンを避ける",
                    title_en: "Avoid Failure Patterns",
                    goal: "キッチンシンクを避け、/clearのタイミングを学ぶ",
                    goal_en: "Avoid kitchen sink and learn when to use /clear",
                    prerequisites: ["いくつかのタスクを実行済み"],
                    prerequisites_en: ["Several tasks already executed"],
                    steps: [
                        {
                            step: 1,
                            action: "コンテキストを確認",
                            action_en: "Check context",
                            prompt: "/context",
                            expected: "使用量が表示される",
                            expected_en: "Usage displayed"
                        },
                        {
                            step: 2,
                            action: "新しいタスクの前に/clear",
                            action_en: "Use /clear before new task",
                            prompt: "/clear",
                            expected: "コンテキストがリセットされる",
                            expected_en: "Context is reset"
                        },
                        {
                            step: 3,
                            action: "クリーンな状態で新タスク開始",
                            action_en: "Start new task with clean state",
                            prompt: "（新しいタスクを開始）",
                            prompt_en: "(Start a new task)",
                            expected: "クリーンなコンテキストで作業できる",
                            expected_en: "Can work with clean context"
                        }
                    ],
                    checkpoints: [
                        "タスクの切れ目で/clearを使う習慣",
                        "2回失敗したら/clearを検討"
                    ],
                    checkpoints_en: [
                        "Habit of using /clear at task boundaries",
                        "Consider /clear after 2 failures"
                    ]
                }
            }
        },
        {
            id: "01_07",
            time: "25分",
            time_en: "25 min",
            number: "01_07",
            title: "Plan Mode 完全ガイド",
            title_en: "Plan Mode Complete Guide",
            description: "Shift+Tab×2 または /plan で起動する読み取り専用モード。コードを変更せず、計画だけを練る。",
            description_en: "Read-only mode activated with Shift+Tab×2 or /plan. Plans without modifying code.",
            icon: "map",
            tags: ["Plan Mode", "計画", "Shift+Tab"],
            tags_en: ["Plan Mode", "Planning", "Shift+Tab"],
            content: {
                summary: "Plan Modeは「まず考え、次に動く」を強制する仕組み。Shift+Tabを2回押すか /plan コマンドで起動する。Claudeはコードベースを探索し、質問し、詳細な計画を立てるが、ファイル変更は一切行わない。計画をレビュー・承認した後にNormal Modeに戻して実行する流れが正攻法。",
                summary_en: "Plan Mode enforces 'think first, act second.' Activate with Shift+Tab×2 or /plan. Claude explores the codebase, asks questions, and creates detailed plans without modifying files. Review and approve the plan, then switch to Normal Mode for execution.",
                keyPoints: [
                    "Shift+Tab×2 または /plan で起動（/plan 認証機能の設計 のように引数付きも可）",
                    "利用可能なツール: Read, Glob, Grep, Task, WebFetch, WebSearch（書き込み系は全て無効）",
                    "不要なケース: タイポ修正、1行変更など明白な小修正",
                    "有効なケース: アプローチが不確実、複数ファイルにまたがる変更、不慣れなコードベース",
                    "VS Code拡張ではPlan Modeの計画をUI上で確認・編集してから承認できる",
                    "承認後はShift+TabでNormal Modeに戻し、計画に沿って実行させる"
                ],
                keyPoints_en: [
                    "Activate with Shift+Tab×2 or /plan (can pass arguments like /plan auth design)",
                    "Available tools: Read, Glob, Grep, Task, WebFetch, WebSearch (all write tools disabled)",
                    "Not needed: typo fixes, single-line changes, obvious small fixes",
                    "Effective for: uncertain approach, multi-file changes, unfamiliar codebase",
                    "VS Code extension allows reviewing and editing plans in UI before approval",
                    "After approval, switch to Normal Mode with Shift+Tab to execute the plan"
                ],
                handson: {
                    title: "Plan Modeで機能設計を体験する",
                    title_en: "Experience Feature Design in Plan Mode",
                    goal: "Plan Modeで計画を立て、承認後に実行する一連の流れを体験",
                    goal_en: "Experience the full flow of planning in Plan Mode, approving, then executing",
                    prerequisites: ["何かしらのプロジェクトフォルダを開いている"],
                    prerequisites_en: ["Any project folder is open"],
                    steps: [
                        {
                            step: 1,
                            action: "Plan Modeに切り替える",
                            action_en: "Switch to Plan Mode",
                            prompt: "/plan このプロジェクトにダークモード切替機能を追加したい。どのファイルを変更すべきか計画を立てて。",
                            prompt_en: "/plan I want to add a dark mode toggle to this project. Plan which files to modify.",
                            expected: "Claudeがファイルを探索し、変更計画を提示する（コードは変更しない）",
                            expected_en: "Claude explores files and presents a modification plan (no code changes)"
                        },
                        {
                            step: 2,
                            action: "計画を承認してNormal Modeで実行",
                            action_en: "Approve plan and execute in Normal Mode",
                            prompt: "Shift+TabでNormal Modeに戻り、「この計画で実行して」と指示",
                            prompt_en: "Switch to Normal Mode with Shift+Tab and say 'Execute this plan'",
                            expected: "計画に沿ってファイルの変更が行われる",
                            expected_en: "Files are modified according to the plan"
                        }
                    ],
                    checkpoints: [
                        "Plan Modeではファイル変更が発生しなかった",
                        "計画の内容を確認してから実行に移れた"
                    ],
                    checkpoints_en: [
                        "No file changes occurred in Plan Mode",
                        "Could review the plan before moving to execution"
                    ]
                }
            }
        },
        {
            id: "01_08",
            time: "20分",
            time_en: "20 min",
            number: "01_08",
            title: "CLAUDE.mdの4階層メモリシステム",
            title_en: "CLAUDE.md 4-Layer Memory System",
            description: "ユーザー・プロジェクト共有・ローカル・自動メモリの4層で、Claudeの記憶を管理する。",
            description_en: "Manage Claude's memory across 4 layers: user, project-shared, local, and auto-memory.",
            icon: "layers",
            tags: ["CLAUDE.md", "メモリ", "設定階層"],
            tags_en: ["CLAUDE.md", "Memory", "Settings Hierarchy"],
            content: {
                summary: "CLAUDE.mdは単なる設定ファイルではなく、4階層で構成されるメモリシステムとして機能する。ユーザーレベル（~/.claude/CLAUDE.md）、プロジェクト共有（./CLAUDE.md、Git管理）、プロジェクトローカル（.claude/settings.local.json）、自動メモリ（~/.claude/projects/配下）の4層。2026年1月のv2.0からは .claude/rules/ フォルダによるモジュラールール読み込みにも対応。最適なファイルサイズは200行以下で、命令形で書くとルール適用率が高い。",
                summary_en: "CLAUDE.md functions as a 4-layer memory system. User level (~/.claude/CLAUDE.md), project-shared (./CLAUDE.md, Git-managed), project-local (.claude/settings.local.json), and auto-memory (~/.claude/projects/). Since v2.0 in January 2026, modular rule loading via .claude/rules/ folder is supported. Optimal file size is under 200 lines, and imperative form has higher rule application rate.",
                keyPoints: [
                    "~/.claude/CLAUDE.md: 全プロジェクト共通の個人ルール",
                    "./CLAUDE.md: Git管理でチーム共有するプロジェクトルール",
                    ".claude/settings.local.json: Gitに含めない個人設定",
                    "~/.claude/projects/: 「これを覚えて」で自動保存される記憶",
                    ".claude/rules/: モジュラールール読み込み（v2.0以降）",
                    "200行以下でルール適用率92%超。400行超で71%に低下",
                    "命令形（『TypeScript strictを使え』）のほうが説明形より規則として認識されやすい"
                ],
                keyPoints_en: [
                    "~/.claude/CLAUDE.md: Personal rules for all projects",
                    "./CLAUDE.md: Project rules shared via Git",
                    ".claude/settings.local.json: Personal settings not in Git",
                    "~/.claude/projects/: Auto-saved memories via 'remember this'",
                    ".claude/rules/: Modular rule loading (v2.0+)",
                    "Rule application rate >92% under 200 lines, drops to 71% over 400 lines",
                    "Imperative form ('Use TypeScript strict') recognized as rules more than descriptive form"
                ],
                handson: {
                    title: "4階層のCLAUDE.mdを体験する",
                    title_en: "Experience the 4-Layer CLAUDE.md",
                    goal: "ユーザーレベルとプロジェクトレベルのCLAUDE.mdの違いを体験",
                    goal_en: "Experience the difference between user-level and project-level CLAUDE.md",
                    prerequisites: ["Claude Codeが利用可能"],
                    prerequisites_en: ["Claude Code is available"],
                    steps: [
                        {
                            step: 1,
                            action: "プロジェクトのCLAUDE.mdを自動生成",
                            action_en: "Auto-generate project CLAUDE.md",
                            prompt: "/init",
                            prompt_en: "/init",
                            expected: "プロジェクトを分析してCLAUDE.mdが生成される",
                            expected_en: "CLAUDE.md is generated after analyzing the project"
                        },
                        {
                            step: 2,
                            action: "自動メモリに記憶させる",
                            action_en: "Save to auto-memory",
                            prompt: "今後このプロジェクトではTypeScriptのstrictモードを使うこと。これを覚えて。",
                            prompt_en: "From now on, use TypeScript strict mode in this project. Remember this.",
                            expected: "~/.claude/projects/ 配下に自動保存される",
                            expected_en: "Auto-saved under ~/.claude/projects/"
                        }
                    ],
                    checkpoints: [
                        "/initでプロジェクトCLAUDE.mdが生成された",
                        "「覚えて」の指示で自動メモリに保存された"
                    ],
                    checkpoints_en: [
                        "Project CLAUDE.md generated with /init",
                        "Auto-memory saved with 'remember' instruction"
                    ]
                }
            }
        },
        {
            id: "01_09",
            time: "15分",
            time_en: "15 min",
            number: "01_09",
            title: "キーボードショートカットとカスタマイズ",
            title_en: "Keyboard Shortcuts and Customization",
            description: "Shift+Enter改行、Shift+Tabモード切替、/vimモード、keybindings.jsonによるカスタマイズ。",
            description_en: "Shift+Enter for newline, Shift+Tab mode switch, /vim mode, customization via keybindings.json.",
            icon: "terminal",
            tags: ["キーボード", "ショートカット", "カスタマイズ"],
            tags_en: ["Keyboard", "Shortcuts", "Customization"],
            content: {
                summary: "Claude Code v2.1ではキーボード操作が大幅に改善された。Shift+Enterでプロンプト内改行、Shift+Tabでモード切替（Normal → Auto-accept → Plan）、Ctrl+F 2回で全バックグラウンドエージェント停止。/vim でvimキーバインドを適用でき、/keybindings で ~/.claude/keybindings.json を編集してカスタマイズも可能。",
                summary_en: "Claude Code v2.1 significantly improved keyboard operations. Shift+Enter for in-prompt newline, Shift+Tab for mode switching (Normal → Auto-accept → Plan), Ctrl+F twice to stop all background agents. /vim applies vim keybindings, /keybindings opens ~/.claude/keybindings.json for customization.",
                keyPoints: [
                    "Enter: メッセージ送信",
                    "Shift+Enter: プロンプト内で改行（v2.1.0で追加）",
                    "Esc: 操作中断（コンテキストは保持）",
                    "Esc Esc: コード復元（直前の変更を巻き戻し）",
                    "Shift+Tab: Normal → Auto-accept → Plan のサイクル",
                    "Ctrl+F (2回): 全バックグラウンドエージェントを停止",
                    "/vim: プロンプト入力にvimキーバインド（h/j/k/l、d/c/y/p対応）",
                    "/keybindings: ~/.claude/keybindings.json を開いてカスタマイズ"
                ],
                keyPoints_en: [
                    "Enter: Send message",
                    "Shift+Enter: Newline within prompt (added in v2.1.0)",
                    "Esc: Interrupt (context preserved)",
                    "Esc Esc: Undo code changes (revert last changes)",
                    "Shift+Tab: Cycle Normal → Auto-accept → Plan",
                    "Ctrl+F (twice): Stop all background agents",
                    "/vim: Apply vim keybindings (h/j/k/l, d/c/y/p supported)",
                    "/keybindings: Open ~/.claude/keybindings.json for customization"
                ],
                handson: {
                    title: "ショートカットを体験する",
                    title_en: "Experience Shortcuts",
                    goal: "主要なキーボードショートカットを実際に試す",
                    goal_en: "Try major keyboard shortcuts hands-on",
                    prerequisites: ["Claude Codeが起動済み"],
                    prerequisites_en: ["Claude Code is running"],
                    steps: [
                        {
                            step: 1,
                            action: "Shift+Enterで複数行プロンプトを入力",
                            action_en: "Enter multi-line prompt with Shift+Enter",
                            prompt: "以下の条件でコードを書いて（Shift+Enterで改行）\n- TypeScript\n- 関数型スタイル\n- エラーハンドリング付き",
                            prompt_en: "Write code with these conditions (Shift+Enter for newline)\n- TypeScript\n- Functional style\n- With error handling",
                            expected: "複数行のプロンプトが1回で送信される",
                            expected_en: "Multi-line prompt is sent at once"
                        },
                        {
                            step: 2,
                            action: "Shift+Tabでモードを切り替えて確認",
                            action_en: "Switch modes with Shift+Tab and verify",
                            prompt: "Shift+Tabを3回押して、Normal → Auto-accept → Plan → Normal の切替を確認",
                            prompt_en: "Press Shift+Tab 3 times to confirm Normal → Auto-accept → Plan → Normal cycle",
                            expected: "ステータスバーのモード表示が変わる",
                            expected_en: "Mode display in status bar changes"
                        }
                    ],
                    checkpoints: [
                        "Shift+Enterで改行入力ができた",
                        "Shift+Tabの3モード切替を理解した"
                    ],
                    checkpoints_en: [
                        "Successfully entered newlines with Shift+Enter",
                        "Understood 3-mode switching with Shift+Tab"
                    ]
                }
            }
        }
    ],
    intermediate: [
        {
            id: "02_01",
            time: "35分",
            time_en: "35 min",
            number: "02_01",
            title: "Skills - ワークフローの定義",
            title_en: "Skills - Workflow Definitions",
            description: "繰り返しの作業をSkillとして定義。Claudeが必要に応じて自動で読み込む。",
            description_en: "Define repetitive tasks as Skills. Claude auto-loads them when needed.",
            icon: "zap",
            tags: ["Skills", "ワークフロー", "自動化"],
            tags_en: ["Skills", "Workflow", "Automation"],
            content: {
                summary: "Skillsは特定のワークフローを定義するマークダウンファイルです。Progressive Disclosure（必要なときだけ読み込む）により、コンテキストを効率的に使用します。Claudeはdescriptionを読んで、関連するタスクが来たときに自動でスキルの内容を読み込みます。",
                summary_en: "Skills are markdown files that define specific workflows. Through Progressive Disclosure (loading only when needed), context is used efficiently. Claude reads the description and auto-loads skill content when related tasks come up.",
                keyPoints: [
                    "~/.claude/skills/（グローバル）または .claude/skills/（プロジェクト）に配置",
                    "YAML Front Matterでname、description、globs等のメタデータを記載",
                    "Claudeがdescriptionを見て、必要と判断したら自動で本文を読み込む",
                    "globs指定で特定ファイル編集時に自動読み込み",
                    "user-invocable: true でスラッシュコマンド化（/skill-name で呼び出し）",
                    "/learn コマンドで会話から自動的にSkillを生成可能"
                ],
                keyPoints_en: [
                    "Place in ~/.claude/skills/ (global) or .claude/skills/ (project)",
                    "Write metadata like name, description, globs in YAML Front Matter",
                    "Claude reads description, auto-loads content when deemed necessary",
                    "Auto-load when editing specific files via globs",
                    "user-invocable: true makes it a slash command (/skill-name)",
                    "/learn command auto-generates Skills from conversation"
                ],
                skillStructure: {
                    title: "Skillファイルの構造",
                    structure: `---
name: skill-name                    # スキル名（必須）
description: |                      # 説明（必須）- Claudeがこれを見て読み込むか判断
  このスキルが何をするか、
  いつ使うべきかを記載
globs:                              # 特定ファイル編集時に自動読み込み
  - "*.py"
  - "tests/**/*.py"
user-invocable: true                # trueで /skill-name コマンド化
disable-model-invocation: false     # trueでスラッシュコマンド専用に
---

# スキル本文

ここにワークフローの詳細手順を記載。
Claudeはこの内容に従って作業を行う。`
                },
                skillExamples: [
                    {
                        name: "コードレビュー",
                        description: "PRレビュー時の観点と手順を定義",
                        code: `---
name: code-review
description: |
  コードレビューを依頼されたとき、または
  「レビューして」と言われたときに使用。
  セキュリティ、パフォーマンス、可読性の観点でレビュー。
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# コードレビュー手順

## 1. 変更の概要を把握
- git diff で変更内容を確認
- 影響範囲を特定

## 2. レビュー観点
### セキュリティ
- 入力バリデーション
- 認証・認可チェック
- SQLインジェクション/XSS対策

### パフォーマンス
- N+1クエリ
- 不要な再レンダリング
- メモリリーク

### 可読性
- 命名の適切さ
- 関数の単一責任
- コメントの必要性

## 3. フィードバック形式
- 🔴 Critical: 必ず修正
- 🟡 Suggestion: 修正推奨
- 💭 Question: 確認したい点`
                    },
                    {
                        name: "テスト作成",
                        description: "テストコード作成のルールを定義",
                        code: `---
name: write-tests
description: |
  テストを書くよう依頼されたとき、または
  新機能実装後にテストが必要なときに使用。
globs:
  - "tests/**/*.py"
  - "**/*_test.py"
---

# テスト作成ガイドライン

## 命名規則
- test_<機能>_<条件>_<期待結果>
- 例: test_login_invalid_password_returns_401

## 構造（AAA パターン）
1. Arrange: テストデータの準備
2. Act: テスト対象の実行
3. Assert: 結果の検証

## カバレッジ目標
- 正常系: 必須
- 境界値: 必須
- 異常系: 主要なもの
- エッジケース: 可能な限り`
                    },
                    {
                        name: "ドキュメント生成",
                        description: "READMEやドキュメント作成時のテンプレート",
                        code: `---
name: generate-docs
description: |
  READMEの作成・更新、ドキュメント生成を
  依頼されたときに使用。
user-invocable: true
---

# ドキュメント生成テンプレート

## README.md 構成
1. プロジェクト名とバッジ
2. 概要（3行以内）
3. 主要機能（箇条書き）
4. インストール方法
5. クイックスタート
6. 設定オプション
7. ライセンス

## APIドキュメント構成
- エンドポイント一覧
- 各エンドポイントの詳細
  - メソッド・パス
  - パラメータ
  - リクエスト例
  - レスポンス例
  - エラーコード`
                    }
                ],
                learnCommand: {
                    title: "/learn コマンド",
                    description: "会話の中で効果的だったパターンを自動的にSkillとして保存できます。",
                    usage: `# 使い方
1. 効果的なワークフローを見つけたら
2. /learn と入力
3. Claudeが会話を分析してSkillを提案
4. 承認すると .claude/skills/ に保存される

# 例
> /learn
Claude: "この会話から「売上レポート作成」の
Skillを作成しますか？"
> はい
Claude: ".claude/skills/sales-report.md を
作成しました"`
                },
                code: "---\nname: report-draft\ndescription: 売上レポート作成時、先に要約を出力\n---\n\n# レポート作成手順\n\n売上データのレポートを書くときは、必ず以下の順序で出力すること：\n\n1. **3行要約**\n   - 対象期間\n   - 合計金額\n   - 特記事項\n\n2. **詳細本文**\n   - 月別推移\n   - 地域別分析\n   - 考察",
                handson: {
                    title: "実践: コードレビューSkillを作成する",
                    title_en: "Practice: Create Code Review Skill",
                    goal: "コードレビュー時に自動適用されるSkillを作成し、実際にレビューで使用する",
                    goal_en: "Create a Skill that auto-applies during code review and use it in actual reviews",
                    prerequisites: ["任意のプロジェクトフォルダをVSCodeで開いている"],
                    prerequisites_en: ["Any project folder open in VSCode"],
                    steps: [
                        {
                            step: 1,
                            action: "Skillフォルダを作成",
                            action_en: "Create Skill folder",
                            prompt: "このプロジェクトに .claude/skills フォルダを作成して",
                            prompt_en: "Create .claude/skills folder in this project",
                            expected: ".claude/skills フォルダが作成される",
                            expected_en: ".claude/skills folder is created"
                        },
                        {
                            step: 2,
                            action: "コードレビューSkillを作成",
                            action_en: "Create code review Skill",
                            prompt: ".claude/skills/code-review.md を作成して。内容:\n\n---\nname: code-review\ndescription: |\n  コードレビュー、PRレビューを依頼されたときに使用。\n  セキュリティ、パフォーマンス、可読性の3観点でレビューする。\nglobs:\n  - \"*.py\"\n  - \"*.js\"\n  - \"*.ts\"\n---\n\n# コードレビューチェックリスト\n\n## セキュリティ\n- [ ] 入力バリデーションがある\n- [ ] 機密情報がハードコードされていない\n- [ ] SQLインジェクション対策がある\n\n## パフォーマンス\n- [ ] 不要なループがない\n- [ ] N+1クエリがない\n- [ ] メモリリークの可能性がない\n\n## 可読性\n- [ ] 変数名が適切\n- [ ] 関数が単一責任\n- [ ] 適切なコメントがある\n\n## フィードバック形式\n🔴 Critical（必須修正）/ 🟡 Suggestion（推奨）/ 💭 Question（質問）",
                            prompt_en: "Create .claude/skills/code-review.md with content for reviewing code with security, performance, and readability perspectives",
                            expected: "code-review.md が作成される",
                            expected_en: "code-review.md is created"
                        },
                        {
                            step: 3,
                            action: "テスト用Pythonファイルを作成",
                            action_en: "Create test Python file",
                            prompt: "test_sample.py というファイルを作成して、意図的にいくつかの問題があるコードを書いて（例：ハードコードされたパスワード、未使用変数など）",
                            prompt_en: "Create test_sample.py with intentionally problematic code (e.g., hardcoded passwords, unused variables)",
                            expected: "問題のあるコードが作成される",
                            expected_en: "Problematic code is created"
                        },
                        {
                            step: 4,
                            action: "Skillを使ってレビュー",
                            action_en: "Review using Skill",
                            prompt: "test_sample.py をレビューして",
                            prompt_en: "Review test_sample.py",
                            expected: "code-review Skillが自動で読み込まれ、チェックリストに従ったレビューが行われる",
                            expected_en: "code-review Skill auto-loads and review follows checklist"
                        }
                    ],
                    checkpoints: [
                        "Skillファイルの構造（YAML Front Matter + 本文）を理解した",
                        "globs指定でファイルタイプに応じた自動読み込みを確認",
                        "Skillの内容に従ったレビューが実行された"
                    ],
                    checkpoints_en: [
                        "Understood Skill file structure (YAML Front Matter + body)",
                        "Confirmed auto-loading by file type via globs",
                        "Review executed according to Skill content"
                    ],
                    files: {
                        created: [".claude/skills/code-review.md", "test_sample.py"]
                    }
                }
            }
        },
        {
            id: "02_02",
            time: "30分",
            time_en: "30 min",
            number: "02_02",
            title: "Hooks - 自動化トリガー",
            title_en: "Hooks - Automation Triggers",
            description: "特定のイベントに応じて自動でスクリプトを実行。保存時フォーマット、テスト実行など。",
            description_en: "Auto-execute scripts on specific events. Format on save, run tests, etc.",
            icon: "anchor",
            tags: ["Hooks", "自動化", "トリガー"],
            tags_en: ["Hooks", "Automation", "Triggers"],
            content: {
                summary: "Hooksはイベント駆動の自動化機構です。ファイル保存時のフォーマット、機密情報の検出、テスト自動実行など、Claude Codeの操作に応じてスクリプトを自動実行できます。.claude.json（プロジェクト）または ~/.claude/settings.json（グローバル）で設定します。",
                summary_en: "Hooks are event-driven automation mechanisms. Auto-execute scripts for formatting on save, detecting sensitive info, auto-running tests, etc. Configure in .claude.json (project) or ~/.claude/settings.json (global).",
                keyPoints: [
                    "SessionStart/SessionStop: セッション開始・終了時に実行",
                    "PreToolUse: ツール実行前にチェック（ブロック可能）",
                    "PostToolUse: ツール実行後に処理",
                    "Notification: Claudeの応答を加工して表示",
                    "$EVENT: イベント種別、$FILE: 対象ファイル、$CONTENT: 内容などの変数が使用可能",
                    "終了コード0以外でツール実行をブロック"
                ],
                keyPoints_en: [
                    "SessionStart/SessionStop: Execute on session start/end",
                    "PreToolUse: Check before tool execution (can block)",
                    "PostToolUse: Process after tool execution",
                    "Notification: Process and display Claude's response",
                    "Variables available: $EVENT (event type), $FILE (target file), $CONTENT (content)",
                    "Non-zero exit code blocks tool execution"
                ],
                configStructure: {
                    title: ".claude.json の構造",
                    structure: `{
  "hooks": {
    "SessionStart": [
      {
        "command": "echo 'Session started at $(date)' >> .claude-log"
      }
    ],
    "PreToolUse": [
      {
        "event": "Write",
        "pattern": "*.env*",
        "command": "echo '⚠️ .envファイルの編集はブロックされました' && exit 1"
      }
    ],
    "PostToolUse": [
      {
        "event": "Write",
        "pattern": "*.py",
        "command": "black $FILE && isort $FILE"
      },
      {
        "event": "Write",
        "pattern": "*.{ts,tsx,js,jsx}",
        "command": "prettier --write $FILE"
      }
    ],
    "Notification": [
      {
        "pattern": ".*",
        "command": "say 'Claude finished'"
      }
    ]
  }
}`
                },
                events: [
                    { event: "SessionStart", desc: "セッション開始時に実行。環境変数設定、ログ記録など", variables: ["$SESSION_ID"] },
                    { event: "SessionStop", desc: "セッション終了時に実行。クリーンアップ、レポート生成など", variables: ["$SESSION_ID"] },
                    { event: "PreToolUse", desc: "ツール実行前に実行。exit 1でブロック可能。セキュリティチェックに最適", variables: ["$EVENT", "$FILE", "$CONTENT"] },
                    { event: "PostToolUse", desc: "ツール実行後に実行。フォーマット、リント、テストに最適", variables: ["$EVENT", "$FILE", "$CONTENT"] },
                    { event: "Notification", desc: "Claudeの応答時に実行。通知、音声読み上げなど", variables: ["$MESSAGE"] }
                ],
                practicalPatterns: [
                    {
                        name: "Python自動フォーマット",
                        description: "Python保存時にblack + isortを実行",
                        code: `{
  "hooks": {
    "PostToolUse": [{
      "event": "Write",
      "pattern": "*.py",
      "command": "black $FILE && isort $FILE"
    }]
  }
}`
                    },
                    {
                        name: "機密情報検出（ブロック）",
                        description: ".envファイルや秘密鍵の編集をブロック",
                        code: `{
  "hooks": {
    "PreToolUse": [
      {
        "event": "Write",
        "pattern": "*.env*",
        "command": "echo '⛔ .envファイルは直接編集禁止です' && exit 1"
      },
      {
        "event": "Write",
        "pattern": "**/secrets/**",
        "command": "echo '⛔ secretsフォルダは編集禁止です' && exit 1"
      }
    ]
  }
}`
                    },
                    {
                        name: "テスト自動実行",
                        description: "テストファイル更新時に該当テストを実行",
                        code: `{
  "hooks": {
    "PostToolUse": [{
      "event": "Write",
      "pattern": "**/test_*.py",
      "command": "pytest $FILE -v --tb=short"
    }]
  }
}`
                    },
                    {
                        name: "TypeScript型チェック",
                        description: "TS/TSXファイル保存時に型チェック",
                        code: `{
  "hooks": {
    "PostToolUse": [{
      "event": "Write",
      "pattern": "*.{ts,tsx}",
      "command": "npx tsc --noEmit"
    }]
  }
}`
                    },
                    {
                        name: "コミット前検証",
                        description: "Bashでgit commit実行前にテストを強制",
                        code: `{
  "hooks": {
    "PreToolUse": [{
      "event": "Bash",
      "pattern": "git commit*",
      "command": "npm test || (echo '❌ テスト失敗。コミットをブロックします' && exit 1)"
    }]
  }
}`
                    },
                    {
                        name: "セッションログ",
                        description: "セッション開始・終了を記録",
                        code: `{
  "hooks": {
    "SessionStart": [{
      "command": "echo '=== Session Start: $(date) ===' >> .claude-sessions.log"
    }],
    "SessionStop": [{
      "command": "echo '=== Session End: $(date) ===' >> .claude-sessions.log"
    }]
  }
}`
                    }
                ],
                variables: [
                    { var: "$EVENT", desc: "イベントの種類（Write, Bash, Read等）" },
                    { var: "$FILE", desc: "操作対象のファイルパス" },
                    { var: "$CONTENT", desc: "書き込まれた内容（Writeイベント時）" },
                    { var: "$SESSION_ID", desc: "現在のセッションID" },
                    { var: "$MESSAGE", desc: "Claudeの応答メッセージ（Notification時）" }
                ],
                code: '{\n  "hooks": {\n    "PostToolUse": [\n      {\n        "event": "Write",\n        "pattern": "*.py",\n        "command": "black $FILE"\n      }\n    ]\n  }\n}',
                handson: {
                    title: "実践: セキュリティ + フォーマットHookを構築",
                    title_en: "Practice: Build Security + Format Hooks",
                    goal: "機密ファイル編集をブロックし、Python保存時に自動フォーマットする総合的なHook設定を作成",
                    goal_en: "Create comprehensive Hook settings that block sensitive file edits and auto-format Python on save",
                    prerequisites: ["pip install black isort でフォーマッターをインストール済み"],
                    prerequisites_en: ["Formatters installed with pip install black isort"],
                    steps: [
                        {
                            step: 1,
                            action: "テスト用フォルダ構造を作成",
                            action_en: "Create test folder structure",
                            prompt: "以下のフォルダ構造を作成して：\nhooks-demo/\n├── src/\n├── secrets/\n│   └── api_keys.json\n└── .env.example",
                            prompt_en: "Create this folder structure:\nhooks-demo/\n├── src/\n├── secrets/\n│   └── api_keys.json\n└── .env.example",
                            expected: "フォルダ構造が作成される",
                            expected_en: "Folder structure is created"
                        },
                        {
                            step: 2,
                            action: "総合的なHook設定を作成",
                            action_en: "Create comprehensive Hook settings",
                            prompt: ".claude.json を作成して、以下の設定を記載：\n\n{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"*.env*\",\n        \"command\": \"echo '⛔ .envファイルの直接編集は禁止されています' && exit 1\"\n      },\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"**/secrets/**\",\n        \"command\": \"echo '⛔ secretsフォルダは編集禁止です' && exit 1\"\n      }\n    ],\n    \"PostToolUse\": [\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"*.py\",\n        \"command\": \"black $FILE && isort $FILE && echo '✅ フォーマット完了'\"\n      }\n    ],\n    \"SessionStart\": [\n      {\n        \"command\": \"echo 'Session: $(date)' >> .claude-log\"\n      }\n    ]\n  }\n}",
                            prompt_en: "Create .claude.json with PreToolUse (block .env and secrets), PostToolUse (format Python with black/isort), and SessionStart hooks",
                            expected: ".claude.json が作成される",
                            expected_en: ".claude.json is created"
                        },
                        {
                            step: 3,
                            action: "セキュリティHookをテスト（ブロック確認）",
                            action_en: "Test security Hook (verify blocking)",
                            prompt: "secrets/api_keys.json に何か書き込んで",
                            prompt_en: "Write something to secrets/api_keys.json",
                            expected: "「secretsフォルダは編集禁止」というメッセージが表示され、書き込みがブロックされる",
                            expected_en: "'secrets folder editing prohibited' message displays, write is blocked"
                        },
                        {
                            step: 4,
                            action: "フォーマットHookをテスト",
                            action_en: "Test format Hook",
                            prompt: "src/sample.py を作成して、以下の未フォーマットコードを書いて：\n\ndef hello(   name ):\n    print(    f'Hello, {name}!'   )\n\nif __name__=='__main__':\n    hello('World')",
                            prompt_en: "Create src/sample.py with unformatted code",
                            expected: "ファイル作成後、自動でblack/isortが実行され、コードがフォーマットされる",
                            expected_en: "After file creation, black/isort auto-runs and code is formatted"
                        },
                        {
                            step: 5,
                            action: "フォーマット結果を確認",
                            action_en: "Verify format result",
                            prompt: "src/sample.py の内容を表示して",
                            prompt_en: "Show contents of src/sample.py",
                            expected: "適切にフォーマットされたコードが表示される",
                            expected_en: "Properly formatted code is displayed"
                        }
                    ],
                    checkpoints: [
                        "PreToolUseでブロック機能が動作した（exit 1）",
                        "PostToolUseで自動フォーマットが実行された",
                        "パターンマッチング（*.py, *.env*, **/secrets/**）を理解した",
                        "$FILE変数が正しく展開された"
                    ],
                    checkpoints_en: [
                        "PreToolUse blocking worked (exit 1)",
                        "PostToolUse auto-formatting executed",
                        "Pattern matching (*.py, *.env*, **/secrets/**) understood",
                        "$FILE variable expanded correctly"
                    ],
                    files: {
                        created: [".claude.json", "src/sample.py", ".claude-log"]
                    }
                }
            }
        },
        {
            id: "02_03",
            time: "35分",
            time_en: "35 min",
            number: "02_03",
            title: "Subagents - タスク委譲の仕組み",
            title_en: "Subagents - Task Delegation",
            description: "複雑なタスクを専門のサブエージェントに委譲。並列処理も可能。",
            description_en: "Delegate complex tasks to specialized subagents. Parallel processing available.",
            icon: "users",
            tags: ["Subagents", "委譲", "並列処理"],
            tags_en: ["Subagents", "Delegation", "Parallel Processing"],
            content: {
                summary: "Subagents（サブエージェント）は、特定のタスクを専門のエージェントに委譲する仕組みです。大規模なコードベース探索、複数ファイルの同時処理、長時間タスクのバックグラウンド実行など、メインエージェントでは効率が悪い作業を分散処理できます。",
                summary_en: "Subagents delegate specific tasks to specialized agents. Distribute work that's inefficient for the main agent: large-scale codebase exploration, simultaneous multi-file processing, long-running background tasks.",
                keyPoints: [
                    "Taskツールで専門サブエージェントを起動",
                    "Explore: コードベース探索に特化（ファイル検索、パターン検出）",
                    "Plan: 実装計画の設計に特化（アーキテクチャ分析）",
                    "Bash: コマンド実行に特化（ビルド、テスト、デプロイ）",
                    "run_in_background: true で並列実行（複数タスク同時処理）",
                    "結果は親エージェントに集約されて報告"
                ],
                keyPoints_en: [
                    "Launch specialized subagents with Task tool",
                    "Explore: Specialized in codebase exploration (file search, pattern detection)",
                    "Plan: Specialized in implementation planning (architecture analysis)",
                    "Bash: Specialized in command execution (build, test, deploy)",
                    "run_in_background: true for parallel execution (simultaneous multi-task processing)",
                    "Results aggregated and reported to parent agent"
                ],
                agentTypes: [
                    {
                        type: "Explore",
                        desc: "コードベースの探索・検索に特化",
                        useCases: [
                            "特定の関数やクラスの使用箇所を全検索",
                            "プロジェクト全体のアーキテクチャを把握",
                            "依存関係の調査",
                            "特定パターン（エラーハンドリング等）の検出"
                        ],
                        example: "「認証に関連するすべてのファイルを探索して、どのような認証方式が使われているか調査して」"
                    },
                    {
                        type: "Plan",
                        desc: "実装計画・設計に特化",
                        useCases: [
                            "新機能の実装計画を立案",
                            "リファクタリング戦略の策定",
                            "アーキテクチャの改善提案",
                            "影響範囲の分析"
                        ],
                        example: "「ログイン機能をOAuth対応にする計画を立てて。影響範囲と必要な変更をリストアップして」"
                    },
                    {
                        type: "Bash",
                        desc: "コマンド実行に特化",
                        useCases: [
                            "ビルドプロセスの実行",
                            "テストスイートの実行",
                            "デプロイスクリプトの実行",
                            "環境セットアップ"
                        ],
                        example: "「全テストを実行して、失敗したテストの詳細を報告して」"
                    }
                ],
                parallelExecution: {
                    title: "並列実行パターン",
                    description: "run_in_background: true で複数タスクを同時に実行し、処理時間を短縮できます。",
                    examples: [
                        {
                            name: "複数ファイルの同時分析",
                            scenario: "フロントエンドとバックエンドを同時にレビュー",
                            prompt: "以下の2つのタスクを並列で実行して：\n1. src/frontend/ のReactコンポーネントを分析\n2. src/backend/ のAPIエンドポイントを分析"
                        },
                        {
                            name: "テストと型チェックの同時実行",
                            scenario: "CIの各ステップを並列化",
                            prompt: "以下を並列で実行して結果を報告して：\n1. npm test\n2. npm run type-check\n3. npm run lint"
                        },
                        {
                            name: "複数リポジトリの調査",
                            scenario: "マイクロサービス間の整合性チェック",
                            prompt: "以下の各サービスのAPI定義を同時に調査して、不整合がないか確認して：\n- user-service/api\n- order-service/api\n- payment-service/api"
                        }
                    ]
                },
                bestPractices: [
                    "大規模探索（100+ファイル）はExploreサブエージェントに委譲",
                    "独立したタスクは並列実行で時間短縮",
                    "計画フェーズはPlanサブエージェントで慎重に",
                    "長時間コマンド（ビルド等）はバックグラウンドで実行",
                    "結果を待つ間に他のタスクを進める"
                ],
                handson: {
                    title: "実践: 並列サブエージェントで複数ファイルを同時分析",
                    title_en: "Practice: Analyze Multiple Files in Parallel with Subagents",
                    goal: "Exploreサブエージェントを使った大規模検索と、並列実行による効率化を体験",
                    goal_en: "Experience large-scale search with Explore subagent and efficiency through parallel execution",
                    prerequisites: ["ある程度のサイズのプロジェクトフォルダがある"],
                    prerequisites_en: ["Have a reasonably sized project folder"],
                    steps: [
                        {
                            step: 1,
                            action: "プロジェクト全体の探索を依頼",
                            action_en: "Request full project exploration",
                            prompt: "このプロジェクト全体を探索して、以下を調査して報告して：\n- プロジェクトの構造と主要なファイル\n- 使用している言語・フレームワーク\n- エントリーポイント（main関数等）\n\nExploreサブエージェントを使って詳細に調査して。",
                            prompt_en: "Explore this entire project and investigate:\n- Project structure and main files\n- Languages/frameworks used\n- Entry points (main functions etc.)\n\nUse Explore subagent for detailed investigation.",
                            expected: "Exploreサブエージェントが起動し、プロジェクト全体を探索して構造を報告",
                            expected_en: "Explore subagent launches and reports project structure"
                        },
                        {
                            step: 2,
                            action: "複数の観点で並列分析を依頼",
                            action_en: "Request parallel analysis from multiple perspectives",
                            prompt: "以下の3つの分析を並列で実行して：\n1. セキュリティ観点: 機密情報のハードコード、入力バリデーション漏れを検索\n2. パフォーマンス観点: N+1クエリ、不要なループを検索\n3. コード品質観点: 未使用変数、重複コードを検索",
                            prompt_en: "Execute these 3 analyses in parallel:\n1. Security: Search for hardcoded secrets, missing input validation\n2. Performance: Search for N+1 queries, unnecessary loops\n3. Code quality: Search for unused variables, duplicate code",
                            expected: "3つのサブエージェントが並列で起動し、各観点での分析結果が報告される",
                            expected_en: "3 subagents launch in parallel and report analysis results from each perspective"
                        },
                        {
                            step: 3,
                            action: "改善計画の策定を依頼",
                            action_en: "Request improvement plan",
                            prompt: "分析結果をもとに、優先度の高い改善項目のリストと実装計画を作成して。Planサブエージェントで詳細な計画を立てて。",
                            prompt_en: "Based on analysis results, create a prioritized improvement list and implementation plan. Use Plan subagent for detailed planning.",
                            expected: "Planサブエージェントが起動し、優先度付きの改善計画が提示される",
                            expected_en: "Plan subagent launches and presents prioritized improvement plan"
                        },
                        {
                            step: 4,
                            action: "最優先の改善を実施",
                            action_en: "Implement top priority improvement",
                            prompt: "計画の中で最も優先度が高い1つを実装して",
                            prompt_en: "Implement the highest priority item from the plan",
                            expected: "改善が実装される",
                            expected_en: "Improvement is implemented"
                        }
                    ],
                    checkpoints: [
                        "Exploreサブエージェントがプロジェクト全体を効率的に探索した",
                        "並列実行で複数の分析が同時に行われた",
                        "Planサブエージェントで実装計画が策定された",
                        "サブエージェントの使い分け（探索 vs 計画 vs 実行）を理解した"
                    ],
                    checkpoints_en: [
                        "Explore subagent efficiently explored entire project",
                        "Multiple analyses ran simultaneously via parallel execution",
                        "Implementation plan created with Plan subagent",
                        "Understood subagent differentiation (explore vs plan vs execute)"
                    ]
                }
            }
        },
        {
            id: "02_04",
            time: "25分",
            time_en: "25 min",
            number: "02_04",
            title: "Tasks - セッションを超えるタスク管理",
            title_en: "Tasks - Cross-Session Task Management",
            description: "長期タスクの進捗をファイルで管理。セッションをまたいで継続可能。",
            description_en: "Manage long-term task progress in files. Continue across sessions.",
            icon: "list-checks",
            tags: ["Tasks", "進捗管理", "永続化"],
            tags_en: ["Tasks", "Progress Management", "Persistence"],
            content: {
                summary: "複雑なタスクをTodoリストで管理し、セッションを超えて進捗を追跡します。",
                summary_en: "Manage complex tasks with Todo lists and track progress across sessions.",
                keyPoints: [
                    "TodoWrite で構造化されたタスクリストを作成",
                    "pending → in_progress → completed の状態遷移",
                    "複雑なタスクを小さなステップに分解",
                    "ファイルに書き出して永続化"
                ],
                keyPoints_en: [
                    "Create structured task lists with TodoWrite",
                    "State transitions: pending → in_progress → completed",
                    "Break complex tasks into small steps",
                    "Write to files for persistence"
                ],
                handson: {
                    title: "タスクリストで「要約」「本文」を管理",
                    title_en: "Manage 'Summary' and 'Body' with Task List",
                    goal: "複数ステップのタスクをリスト化して進捗管理",
                    goal_en: "List multi-step tasks and manage progress",
                    prerequisites: ["レポート作成タスクがある"],
                    prerequisites_en: ["Have a report creation task"],
                    steps: [
                        {
                            step: 1,
                            action: "タスクを分解",
                            action_en: "Break down tasks",
                            prompt: "Q1売上レポートの作成タスクを以下のステップに分解してリスト化して：\n1. データ読み込みと検証\n2. 月別集計\n3. 地域別集計\n4. 要約の作成\n5. 本文の作成\n6. レビューと修正",
                            prompt_en: "Break down the Q1 sales report task into these steps:\n1. Data loading and validation\n2. Monthly aggregation\n3. Regional aggregation\n4. Create summary\n5. Create body\n6. Review and revise",
                            expected: "タスクリストが作成される",
                            expected_en: "Task list is created"
                        },
                        {
                            step: 2,
                            action: "順番に実行",
                            action_en: "Execute in order",
                            prompt: "最初のタスクから順番に実行して、完了したらチェックを付けて",
                            prompt_en: "Execute tasks in order from the first one, check off when complete",
                            expected: "タスクが順番に実行され、進捗が更新される",
                            expected_en: "Tasks execute in order, progress is updated"
                        }
                    ],
                    checkpoints: [
                        "タスクが小さなステップに分解されている",
                        "進捗が可視化されている"
                    ],
                    checkpoints_en: [
                        "Tasks broken into small steps",
                        "Progress is visualized"
                    ]
                }
            }
        },
        {
            id: "02_05",
            time: "40分",
            time_en: "40 min",
            number: "02_05",
            title: "MCP - 外部サービス連携",
            title_en: "MCP - External Service Integration",
            description: "Model Context Protocolで外部サービス（Slack、GitHub、DB等）と連携。",
            description_en: "Connect to external services (Slack, GitHub, DB etc.) via Model Context Protocol.",
            icon: "plug",
            tags: ["MCP", "外部連携", "API"],
            tags_en: ["MCP", "Integration", "API"],
            content: {
                summary: "MCP（Model Context Protocol）は、Claudeを外部サービスやデータソースと安全に接続するための標準プロトコルです。GitHub、Slack、データベース、Webブラウザなど、様々なサービスとの連携が可能になります。MCPサーバーを設定することで、Claudeが直接外部APIにアクセスできるようになります。",
                summary_en: "MCP (Model Context Protocol) is a standard protocol for securely connecting Claude to external services and data sources. Enables integration with GitHub, Slack, databases, web browsers, and more. By configuring MCP servers, Claude can directly access external APIs.",
                keyPoints: [
                    "~/.claude/settings.json でMCPサーバーを設定",
                    "npx/node/pythonでMCPサーバーを起動",
                    "公式・コミュニティ提供の多数のMCPサーバーが利用可能",
                    "ファイルシステム、GitHub、Slack、データベース等と連携",
                    "セキュアな認証・スコープ制限",
                    "Claude Codeセッション内で直接外部データにアクセス"
                ],
                keyPoints_en: [
                    "Configure MCP servers in ~/.claude/settings.json",
                    "Start MCP servers with npx/node/python",
                    "Many official and community MCP servers available",
                    "Integrate with filesystem, GitHub, Slack, databases, etc.",
                    "Secure authentication and scope restrictions",
                    "Access external data directly within Claude Code sessions"
                ],
                mcpConcept: {
                    title: "MCPの仕組み",
                    description: "MCPサーバーは、Claudeと外部サービスの間の「通訳」として機能します。",
                    flow: [
                        "1. ユーザーが「GitHubのIssueを確認して」と依頼",
                        "2. Claude Codeが設定済みのMCPサーバーを呼び出し",
                        "3. MCPサーバーがGitHub APIにアクセス",
                        "4. 結果がClaudeに返され、ユーザーに報告"
                    ]
                },
                configStructure: {
                    title: "settings.json の構造",
                    structure: `// ~/.claude/settings.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic-ai/mcp-server-filesystem",
        "/Users/yourname/Documents"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}`
                },
                popularServers: [
                    {
                        name: "@anthropic-ai/mcp-server-filesystem",
                        desc: "ローカルファイルシステムへのアクセス",
                        install: "npx -y @anthropic-ai/mcp-server-filesystem /path/to/folder",
                        useCase: "特定フォルダ内のファイルを読み書き"
                    },
                    {
                        name: "@anthropic-ai/mcp-server-github",
                        desc: "GitHub APIとの連携",
                        install: "GITHUB_TOKEN=xxx npx -y @anthropic-ai/mcp-server-github",
                        useCase: "Issue/PR操作、リポジトリ管理"
                    },
                    {
                        name: "@anthropic-ai/mcp-server-postgres",
                        desc: "PostgreSQLデータベース接続",
                        install: "DATABASE_URL=xxx npx -y @anthropic-ai/mcp-server-postgres",
                        useCase: "SQLクエリ実行、データ分析"
                    },
                    {
                        name: "@anthropic-ai/mcp-server-slack",
                        desc: "Slack APIとの連携",
                        install: "SLACK_TOKEN=xxx npx -y @anthropic-ai/mcp-server-slack",
                        useCase: "メッセージ送信、チャンネル管理"
                    },
                    {
                        name: "@anthropic-ai/mcp-server-puppeteer",
                        desc: "Webブラウザ自動操作",
                        install: "npx -y @anthropic-ai/mcp-server-puppeteer",
                        useCase: "Webスクレイピング、UI自動テスト"
                    }
                ],
                securityTips: [
                    "環境変数でトークンを管理（設定ファイルに直書きしない）",
                    "最小限のスコープでトークンを発行",
                    "信頼できるMCPサーバーのみを使用",
                    "アクセス可能なパスを制限（filesystemの場合）"
                ],
                cliAlternative: {
                    title: "CLIツールによる代替",
                    description: "MCPを設定しなくても、CLIツール（gh, curl等）で外部サービスと連携できます。",
                    examples: [
                        { tool: "gh", desc: "GitHub CLI", example: "gh issue list --limit 5" },
                        { tool: "curl", desc: "HTTP API呼び出し", example: "curl https://api.example.com/data" },
                        { tool: "psql", desc: "PostgreSQL CLI", example: "psql -c 'SELECT * FROM users'" }
                    ]
                },
                handson: {
                    title: "実践: GitHub MCP設定 + Issue管理",
                    title_en: "Practice: GitHub MCP Setup + Issue Management",
                    goal: "GitHub MCPサーバーを設定し、Claude CodeからIssueを直接操作する",
                    goal_en: "Configure GitHub MCP server and operate Issues directly from Claude Code",
                    prerequisites: [
                        "GitHubアカウントがある",
                        "Personal Access Token（PAT）を取得済み（repo, read:org スコープ）",
                        "Node.js v18以上がインストール済み"
                    ],
                    prerequisites_en: [
                        "Have a GitHub account",
                        "Personal Access Token (PAT) obtained (repo, read:org scopes)",
                        "Node.js v18+ installed"
                    ],
                    steps: [
                        {
                            step: 1,
                            action: "GitHub PATを取得（まだの場合）",
                            action_en: "Get GitHub PAT (if not done)",
                            prompt: "GitHub Settings > Developer settings > Personal access tokens > Generate new token で、repo と read:org スコープを持つトークンを作成してください。",
                            prompt_en: "Create a token with repo and read:org scopes at GitHub Settings > Developer settings > Personal access tokens > Generate new token.",
                            expected: "ghp_xxxx 形式のトークンが発行される（これは安全に保管）",
                            expected_en: "Token in ghp_xxxx format is issued (store securely)"
                        },
                        {
                            step: 2,
                            action: "MCP設定ファイルを作成",
                            action_en: "Create MCP config file",
                            prompt: "~/.claude/settings.json を作成して、以下の内容を設定：\n\n{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@anthropic-ai/mcp-server-github\"],\n      \"env\": {\n        \"GITHUB_TOKEN\": \"ghp_YOUR_TOKEN_HERE\"\n      }\n    }\n  }\n}\n\n※ ghp_YOUR_TOKEN_HERE を実際のトークンに置き換え",
                            prompt_en: "Create ~/.claude/settings.json with mcpServers config for github (replace ghp_YOUR_TOKEN_HERE with actual token)",
                            expected: "settings.json が作成される",
                            expected_en: "settings.json is created"
                        },
                        {
                            step: 3,
                            action: "Claude Codeを再起動",
                            action_en: "Restart Claude Code",
                            prompt: "Claude Codeを一度終了し、再度起動してください。MCPサーバーが読み込まれます。",
                            prompt_en: "Exit Claude Code once and restart. MCP server will be loaded.",
                            expected: "MCPサーバーが初期化される",
                            expected_en: "MCP server is initialized"
                        },
                        {
                            step: 4,
                            action: "GitHubリポジトリのIssueを確認",
                            action_en: "Check GitHub repository Issues",
                            prompt: "GitHubの <owner>/<repo> リポジトリのオープンなIssueを5件表示して",
                            prompt_en: "Show 5 open Issues from GitHub <owner>/<repo> repository",
                            expected: "MCPサーバー経由でGitHub APIが呼び出され、Issue一覧が表示される",
                            expected_en: "GitHub API called via MCP server, Issue list displayed"
                        },
                        {
                            step: 5,
                            action: "新しいIssueを作成（オプション）",
                            action_en: "Create new Issue (optional)",
                            prompt: "「テスト用Issue - Claude Codeから作成」というタイトルで新しいIssueを作成して",
                            prompt_en: "Create a new Issue titled 'Test Issue - Created from Claude Code'",
                            expected: "GitHubに新しいIssueが作成される",
                            expected_en: "New Issue created on GitHub"
                        }
                    ],
                    alternativeWithCLI: {
                        title: "MCPなしでCLIで代替する場合",
                        steps: [
                            {
                                step: 1,
                                action: "GitHub CLIをインストール",
                                prompt: "brew install gh && gh auth login",
                                expected: "gh コマンドが使用可能になる"
                            },
                            {
                                step: 2,
                                action: "CLIでIssueを操作",
                                prompt: "gh issue list -R owner/repo --limit 5 の結果を表示して",
                                expected: "Issue一覧が表示される（BashツールでCLIを実行）"
                            }
                        ]
                    },
                    checkpoints: [
                        "settings.json でMCPサーバーが設定できた",
                        "Claude CodeからGitHub APIに直接アクセスできた",
                        "MCPとCLIツールの違いを理解した"
                    ],
                    files: {
                        created: ["~/.claude/settings.json"]
                    }
                }
            }
        },
        {
            id: "02_06",
            time: "30分",
            time_en: "30 min",
            number: "02_06",
            title: "Plugins - 拡張パッケージ",
            title_en: "Plugins - Extension Packages",
            description: "コミュニティが作成した拡張機能をインストール。機能を簡単に追加。",
            description_en: "Install community-created extensions. Easily add functionality.",
            icon: "package",
            tags: ["Plugins", "拡張", "コミュニティ"],
            tags_en: ["Plugins", "Extensions", "Community"],
            content: {
                summary: "Pluginsは、Skills、Hooks、MCPサーバーをまとめたパッケージです。プロジェクトテンプレートのように、一度のインストールで複数の機能を追加できます。チームやコミュニティで共有することで、ベストプラクティスを標準化できます。",
                summary_en: "Plugins are packages bundling Skills, Hooks, and MCP servers. Like project templates, one install adds multiple features. Sharing across teams and communities standardizes best practices.",
                keyPoints: [
                    "claude plugin install <name> でインストール",
                    "スキル、フック、MCPをまとめて提供",
                    "manifest.json で構成を定義",
                    "ローカルまたはGitリポジトリから配布可能",
                    "チーム開発のオンボーディングを効率化"
                ],
                keyPoints_en: [
                    "Install with claude plugin install <name>",
                    "Provides skills, hooks, MCP together",
                    "Define structure in manifest.json",
                    "Distribute from local or Git repository",
                    "Streamline team development onboarding"
                ],
                pluginStructure: {
                    title: "Pluginの構造",
                    structure: `my-plugin/
├── manifest.json          # プラグイン定義
├── skills/                # スキルファイル群
│   ├── code-review.md
│   └── testing.md
├── hooks/                 # フック設定
│   └── hooks.json
└── mcp/                   # MCP設定（オプション）
    └── servers.json`,
                    manifestExample: `{
  "name": "my-team-plugin",
  "version": "1.0.0",
  "description": "チーム標準のClaude Code設定",
  "author": "Your Team",
  "skills": [
    "skills/code-review.md",
    "skills/testing.md"
  ],
  "hooks": "hooks/hooks.json",
  "mcp": "mcp/servers.json"
}`
                },
                installMethods: [
                    {
                        method: "ローカルフォルダから",
                        command: "claude plugin install ./my-plugin",
                        description: "ローカルに作成したプラグインをインストール"
                    },
                    {
                        method: "Gitリポジトリから",
                        command: "claude plugin install https://github.com/user/my-plugin",
                        description: "GitHubなどからプラグインをインストール"
                    },
                    {
                        method: "npmパッケージから",
                        command: "claude plugin install @scope/claude-plugin-name",
                        description: "npmで公開されたプラグインをインストール"
                    }
                ],
                useCases: [
                    {
                        name: "チームオンボーディング",
                        description: "新メンバーがすぐにチームのコーディング規約に従えるよう、標準スキルとフックを一括配布"
                    },
                    {
                        name: "言語特化環境",
                        description: "Python/TypeScript/Rust等の言語別に最適化されたスキル・フックのセット"
                    },
                    {
                        name: "プロジェクトテンプレート",
                        description: "新規プロジェクト作成時にベストプラクティスを自動適用"
                    }
                ],
                managementCommands: [
                    { cmd: "claude plugin list", desc: "インストール済みプラグイン一覧" },
                    { cmd: "claude plugin install <name>", desc: "プラグインをインストール" },
                    { cmd: "claude plugin uninstall <name>", desc: "プラグインをアンインストール" },
                    { cmd: "claude plugin update <name>", desc: "プラグインを更新" }
                ],
                handson: {
                    title: "実践: シンプルなプラグインを作成する",
                    goal: "Skills + Hooksをまとめたプラグインを作成し、インストールする",
                    prerequisites: ["任意のプロジェクトフォルダで作業"],
                    steps: [
                        {
                            step: 1,
                            action: "プラグインのフォルダ構造を作成",
                            prompt: "以下の構造でプラグインフォルダを作成して:\n\nmy-plugin/\n├── manifest.json\n├── skills/\n│   └── quick-test.md\n└── hooks/\n    └── hooks.json",
                            expected: "フォルダ構造が作成される"
                        },
                        {
                            step: 2,
                            action: "manifest.json を作成",
                            prompt: "my-plugin/manifest.json に以下の内容を書いて:\n\n{\n  \"name\": \"my-quick-plugin\",\n  \"version\": \"1.0.0\",\n  \"description\": \"テスト用プラグイン\",\n  \"skills\": [\"skills/quick-test.md\"],\n  \"hooks\": \"hooks/hooks.json\"\n}",
                            expected: "manifest.json が作成される"
                        },
                        {
                            step: 3,
                            action: "スキルファイルを作成",
                            prompt: "my-plugin/skills/quick-test.md に、テスト実行時のガイドラインを記載したスキルを作成して",
                            expected: "quick-test.md が作成される"
                        },
                        {
                            step: 4,
                            action: "フック設定を作成",
                            prompt: "my-plugin/hooks/hooks.json に、Pythonファイル保存時にフォーマットするフックを設定して",
                            expected: "hooks.json が作成される"
                        },
                        {
                            step: 5,
                            action: "プラグインをインストール",
                            prompt: "作成したプラグインをインストールして: claude plugin install ./my-plugin",
                            expected: "プラグインがインストールされる"
                        }
                    ],
                    checkpoints: [
                        "manifest.json でプラグインの構成を定義できた",
                        "複数のファイル（Skills + Hooks）を1つにまとめられた",
                        "プラグインのインストールが完了した"
                    ],
                    files: {
                        created: ["my-plugin/manifest.json", "my-plugin/skills/quick-test.md", "my-plugin/hooks/hooks.json"]
                    }
                }
            }
        },
        {
            id: "02_07",
            time: "25分",
            time_en: "25 min",
            number: "02_07",
            title: "戦略的コンパクト化",
            title_en: "Strategic Compaction",
            description: "/compact の効果的な使い方。いつ、どのように圧縮するか。",
            description_en: "Effective use of /compact. When and how to compress.",
            icon: "minimize-2",
            tags: ["/compact", "圧縮", "最適化"],
            tags_en: ["/compact", "Compression", "Optimization"],
            content: {
                summary: "/compactはコンテキストを要約して圧縮するコマンドです。コンテキストウィンドウは有限リソースであり、適切なタイミングで圧縮することで、長時間のセッションでも品質を維持できます。ただし、タイミングを間違えると重要な文脈を失うリスクがあります。",
                summary_en: "/compact is a command that summarizes and compresses context. Context window is a finite resource; compressing at appropriate times maintains quality in long sessions. However, wrong timing risks losing important context.",
                keyPoints: [
                    "70%を超えたら圧縮を検討",
                    "フェーズの切れ目（探索完了→実装開始など）で実行",
                    "重要な情報はファイルに書き出してから圧縮",
                    "圧縮後は重要な文脈を再確認",
                    "/compact <カスタム指示> で圧縮内容をカスタマイズ可能"
                ],
                keyPoints_en: [
                    "Consider compacting when exceeding 70%",
                    "Execute at phase boundaries (e.g., exploration complete → start implementation)",
                    "Write important info to files before compacting",
                    "Reconfirm important context after compacting",
                    "Customize with /compact <custom instructions>"
                ],
                compactTiming: {
                    title: "圧縮のタイミング",
                    good: [
                        { timing: "フェーズ完了時", example: "探索フェーズ完了後、実装に移る前" },
                        { timing: "大きなファイル読み込み後", example: "10000行のログを分析した後" },
                        { timing: "試行錯誤の終了後", example: "複数のアプローチを試して解決策が見つかった後" },
                        { timing: "中間成果物の保存後", example: "分析結果をファイルに書き出した後" }
                    ],
                    bad: [
                        { timing: "実装途中", example: "コードの半分を書いた段階" },
                        { timing: "デバッグ中", example: "エラーの原因を探っている最中" },
                        { timing: "重要な決定直後", example: "アーキテクチャ選定の直後（理由が失われる）" }
                    ]
                },
                compactStrategies: [
                    {
                        name: "Write-before-Compact",
                        description: "重要な情報をファイルに書き出してから圧縮",
                        example: "分析結果をdocs/analysis.mdに保存してから/compactを実行",
                        benefit: "情報が永続化され、圧縮後も参照可能"
                    },
                    {
                        name: "Checkpoint Compact",
                        description: "作業の区切りでチェックポイントとして圧縮",
                        example: "機能Aの実装完了後に/compactし、機能Bの実装を開始",
                        benefit: "各フェーズが独立し、文脈の混乱を防ぐ"
                    },
                    {
                        name: "Custom Summary Compact",
                        description: "カスタム指示で圧縮内容を指定",
                        example: "/compact 認証機能の設計決定と理由を重点的に残して",
                        benefit: "重要な文脈を確実に保持"
                    }
                ],
                commands: [
                    { cmd: "/context", desc: "現在のコンテキスト使用量を確認" },
                    { cmd: "/compact", desc: "デフォルト設定で圧縮" },
                    { cmd: "/compact <指示>", desc: "カスタム指示で圧縮内容を調整" },
                    { cmd: "/clear", desc: "コンテキストを完全にクリア（新しいセッション開始）" }
                ],
                handson: {
                    title: "実践: 戦略的なコンパクト化",
                    goal: "Write-before-Compact戦略を使って、情報を失わずに圧縮する",
                    prerequisites: ["ある程度のやり取りを行った後"],
                    steps: [
                        {
                            step: 1,
                            action: "使用量を確認",
                            prompt: "/context",
                            expected: "使用量が表示される（例: 15% used, 150K/1M tokens）"
                        },
                        {
                            step: 2,
                            action: "重要な情報をファイルに書き出し",
                            prompt: "これまでの分析結果と決定事項を docs/session_summary.md に保存して",
                            expected: "重要な情報がファイルに永続化される"
                        },
                        {
                            step: 3,
                            action: "カスタム指示で圧縮",
                            prompt: "/compact プロジェクト構造の理解と、未完了タスクのリストを残して",
                            expected: "指定した内容を重視して圧縮される"
                        },
                        {
                            step: 4,
                            action: "圧縮後の確認",
                            prompt: "/context",
                            expected: "使用量が大幅に減少している"
                        },
                        {
                            step: 5,
                            action: "文脈の維持を確認",
                            prompt: "このプロジェクトの概要と、次にやるべきことを教えて",
                            expected: "圧縮前の重要な文脈が維持されている"
                        }
                    ],
                    checkpoints: [
                        "圧縮前にファイル書き出しで情報を保護できた",
                        "カスタム指示で圧縮内容をコントロールできた",
                        "圧縮後も重要な文脈が維持されている"
                    ],
                    files: {
                        created: ["docs/session_summary.md"]
                    }
                }
            }
        },
        {
            id: "02_08",
            time: "30分",
            time_en: "30 min",
            number: "02_08",
            title: "並列化戦略",
            title_en: "Parallelization Strategies",
            description: "複数のタスクを並列で実行。効率を最大化する設計。",
            description_en: "Execute multiple tasks in parallel. Design for maximum efficiency.",
            icon: "git-fork",
            tags: ["並列処理", "効率化", "設計"],
            tags_en: ["Parallel Processing", "Efficiency", "Design"],
            content: {
                summary: "Claude Codeは内部的にSubagentsを使って並列処理を行います。独立したタスクを特定し、並列実行することで処理時間を大幅に短縮できます。また、ヘッドレスモードで複数のCLIセッションを同時に実行することも可能です。",
                summary_en: "Claude Code uses Subagents internally for parallel processing. Identify independent tasks and run in parallel to significantly reduce processing time. Multiple CLI sessions can also run simultaneously in headless mode.",
                keyPoints: [
                    "依存関係のないタスクを特定して並列化",
                    "Subagentsが自動的に並列実行を判断",
                    "明示的に「並列で」と指示して強制も可能",
                    "ヘッドレスモード（-p）で複数セッション起動",
                    "結果を統合して次のステップへ"
                ],
                keyPoints_en: [
                    "Identify tasks without dependencies for parallelization",
                    "Subagents automatically determine parallel execution",
                    "Can force with explicit 'in parallel' instruction",
                    "Launch multiple sessions with headless mode (-p)",
                    "Integrate results for next steps"
                ],
                parallelPatterns: [
                    {
                        name: "分析の並列化",
                        description: "同じデータに対する複数の分析を同時実行",
                        example: "「このCSVの月別集計と地域別集計を並列で実行して」",
                        benefit: "分析時間を半減"
                    },
                    {
                        name: "ファイル処理の並列化",
                        description: "複数のファイルに対する同じ処理を同時実行",
                        example: "「src/以下の全てのPythonファイルにdocstringを追加して（並列で）」",
                        benefit: "大量ファイルの処理を高速化"
                    },
                    {
                        name: "テストの並列化",
                        description: "独立したテストスイートを同時実行",
                        example: "「ユニットテストとE2Eテストを並列で実行して」",
                        benefit: "CI/CDパイプラインの高速化"
                    },
                    {
                        name: "調査の並列化",
                        description: "複数の観点からの調査を同時実行",
                        example: "「セキュリティ観点とパフォーマンス観点でこのコードをレビューして（並列で）」",
                        benefit: "包括的なレビューを短時間で"
                    }
                ],
                headlessMode: {
                    title: "ヘッドレスモードでの並列実行",
                    description: "CLIの -p オプションでプロンプトを直接渡し、複数のタスクを並列起動できます。",
                    examples: [
                        {
                            title: "複数タスクの同時実行",
                            code: `# ターミナル1
claude -p "src/auth/ のコードをレビューして" > auth_review.txt &

# ターミナル2
claude -p "src/api/ のコードをレビューして" > api_review.txt &

# 両方の完了を待機
wait`
                        },
                        {
                            title: "ループで大量タスク",
                            code: `# 複数のフォルダを並列でレビュー
for dir in src/*/; do
  claude -p "\${dir} のコードをレビューして" > "\${dir}review.txt" &
done
wait`
                        }
                    ]
                },
                dependencyAnalysis: {
                    title: "依存関係の判断",
                    description: "並列化できるかどうかは、タスク間の依存関係で決まります。",
                    parallelizable: [
                        "異なるファイルへの読み取り専用アクセス",
                        "独立したモジュールの分析",
                        "互いに影響しないテストの実行"
                    ],
                    notParallelizable: [
                        "同じファイルへの書き込み",
                        "前の処理結果を使う計算",
                        "順序に意味があるDB操作"
                    ]
                },
                handson: {
                    title: "実践: 分析タスクを並列実行",
                    goal: "2つの独立した分析を並列で実行し、処理時間の短縮を体験",
                    prerequisites: ["data/sales_2025.csv が存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "並列分析を依頼",
                            prompt: "data/sales_2025.csv に対して以下の2つの分析を並列で実行して：\n1. 月別売上トレンド分析（増減率含む）\n2. カテゴリ別売上構成比分析\n\n結果はそれぞれ別のMarkdownファイルに保存して",
                            expected: "2つのSubagentが並列で実行され、それぞれの分析結果が別ファイルに保存される"
                        },
                        {
                            step: 2,
                            action: "結果を統合",
                            prompt: "2つの分析結果を統合して、経営サマリーレポートを作成して",
                            expected: "両方の分析結果が統合されたレポートが生成される"
                        },
                        {
                            step: 3,
                            action: "（オプション）ヘッドレスモードを試す",
                            prompt: "ターミナルで以下を実行:\nclaude -p \"data/sales_2025.csv の月別売上を表示して\" &\nclaude -p \"data/sales_2025.csv の地域別売上を表示して\" &\nwait",
                            expected: "2つのCLIセッションが並列で実行される"
                        }
                    ],
                    checkpoints: [
                        "並列実行により処理が効率化された",
                        "独立したタスクを正しく並列化できた",
                        "結果を統合して活用できた"
                    ],
                    files: {
                        created: ["reports/monthly_trend.md", "reports/category_analysis.md", "reports/executive_summary.md"]
                    }
                }
            }
        },
        {
            id: "02_09",
            time: "30分",
            time_en: "30 min",
            number: "02_09",
            title: "Worktree - 並列開発の隔離環境",
            title_en: "Worktree - Isolated Parallel Development",
            description: "git worktreeでセッションごとに隔離された作業環境を作り、複数タスクを同時並行で進める。",
            description_en: "Create isolated working environments per session with git worktree for parallel task execution.",
            icon: "git-branch",
            tags: ["Worktree", "並列開発", "git"],
            tags_en: ["Worktree", "Parallel Dev", "git"],
            content: {
                summary: "claude -w（--worktree）フラグで起動すると、.claude/worktrees/<name> に隔離されたgit worktreeが作成され、worktree-<name>ブランチで作業が始まる。複数エージェントが互いに干渉せず並列作業でき、変更がなければセッション終了時に自動削除される。大規模モノレポではworktree.sparsePathsで特定ディレクトリだけをチェックアウトするsparse checkout対応もある。",
                summary_en: "Start with claude -w (--worktree) to create an isolated git worktree at .claude/worktrees/<name> on branch worktree-<name>. Multiple agents can work in parallel without interference. Auto-cleaned on session exit if no changes. Supports sparse checkout via worktree.sparsePaths for large monorepos.",
                keyPoints: [
                    "claude -w または --worktree フラグで起動",
                    ".claude/worktrees/<name> にworktreeが作成される",
                    "変更がなければセッション終了時に自動削除、変更があれば確認プロンプト",
                    "サブエージェントでも isolation: worktree で worktree 分離が使える",
                    "worktree.sparsePaths 設定で大規模モノレポの特定ディレクトリだけチェックアウト",
                    "複数ブランチで同時に作業する場合の衝突防止に最適"
                ],
                keyPoints_en: [
                    "Start with claude -w or --worktree flag",
                    "Worktree created at .claude/worktrees/<name>",
                    "Auto-deleted on exit if no changes, confirmation prompt if changes exist",
                    "Subagents also support worktree isolation via isolation: worktree",
                    "worktree.sparsePaths for sparse checkout in large monorepos",
                    "Ideal for preventing conflicts when working on multiple branches simultaneously"
                ],
                handson: {
                    title: "Worktreeで隔離された環境を体験する",
                    title_en: "Experience Isolated Environment with Worktree",
                    goal: "Worktreeモードで起動し、メインブランチと独立した環境で作業する",
                    goal_en: "Start in Worktree mode and work in an environment independent of main branch",
                    prerequisites: ["gitリポジトリ内であること"],
                    prerequisites_en: ["Must be inside a git repository"],
                    steps: [
                        {
                            step: 1,
                            action: "Worktreeモードで新しいセッションを起動",
                            action_en: "Start a new session in Worktree mode",
                            prompt: "claude -w",
                            prompt_en: "claude -w",
                            expected: "worktree-<random-name>ブランチが作成され、隔離された環境で起動する",
                            expected_en: "worktree-<random-name> branch created, starts in isolated environment"
                        },
                        {
                            step: 2,
                            action: "隔離環境で変更を行う",
                            action_en: "Make changes in isolated environment",
                            prompt: "READMEに「Worktreeテスト」セクションを追加して",
                            prompt_en: "Add a 'Worktree Test' section to README",
                            expected: "変更がworktreeブランチだけに適用される（mainは影響なし）",
                            expected_en: "Changes apply only to worktree branch (main is unaffected)"
                        }
                    ],
                    checkpoints: [
                        "Worktreeが.claude/worktrees/に作成された",
                        "mainブランチに影響を与えずに変更できた"
                    ],
                    checkpoints_en: [
                        "Worktree created in .claude/worktrees/",
                        "Made changes without affecting main branch"
                    ]
                }
            }
        },
        {
            id: "02_10",
            time: "30分",
            time_en: "30 min",
            number: "02_10",
            title: "Settings & Permissions - 権限管理の完全ガイド",
            title_en: "Settings & Permissions - Complete Permission Guide",
            description: "5階層の設定ファイル優先順位、allow/deny配列、ワイルドカード権限、$schemaサポート。",
            description_en: "5-layer settings file priority, allow/deny arrays, wildcard permissions, $schema support.",
            icon: "shield",
            tags: ["Settings", "Permissions", "セキュリティ"],
            tags_en: ["Settings", "Permissions", "Security"],
            content: {
                summary: "Claude Codeの設定は5階層で管理される。Enterprise managed-settings.json が最優先、次にセッション設定（--settingsフラグ）、プロジェクト共有 .claude/settings.json、プロジェクトローカル .claude/settings.local.json、最後にユーザーグローバル ~/.claude/settings.json。権限はpermissionsオブジェクト内のallow/deny配列で制御し、denyが最優先でチェックされる。Bash(*-h*)のようなワイルドカード指定も可能。",
                summary_en: "Claude Code settings are managed in 5 layers. Enterprise managed-settings.json has highest priority, then session settings (--settings flag), project-shared .claude/settings.json, project-local .claude/settings.local.json, finally user-global ~/.claude/settings.json. Permissions controlled via allow/deny arrays, with deny checked first. Wildcard patterns like Bash(*-h*) are supported.",
                keyPoints: [
                    "優先順位: Enterprise > セッション > プロジェクト共有 > ローカル > グローバル",
                    "permissions.allow: 自動承認するツールやコマンド",
                    "permissions.deny: 常に拒否するツールやコマンド（最優先）",
                    "ワイルドカード対応: Bash(*test*), Bash(*build:*) のような指定が可能",
                    "$schemaを追加するとVS CodeやCursorでオートコンプリート有効",
                    "設定ファイルは自動バックアップ（直近5件保持）"
                ],
                keyPoints_en: [
                    "Priority: Enterprise > Session > Project-shared > Local > Global",
                    "permissions.allow: Auto-approve tools and commands",
                    "permissions.deny: Always deny tools and commands (highest priority)",
                    "Wildcard support: Bash(*test*), Bash(*build:*) patterns",
                    "Add $schema for VS Code/Cursor autocomplete support",
                    "Settings files auto-backed up (last 5 kept)"
                ],
                handson: {
                    title: "権限設定をカスタマイズする",
                    title_en: "Customize Permission Settings",
                    goal: "プロジェクトのsettings.jsonで安全なコマンドを事前許可する",
                    goal_en: "Pre-approve safe commands in project settings.json",
                    prerequisites: ["プロジェクトフォルダがある"],
                    prerequisites_en: ["Have a project folder"],
                    steps: [
                        {
                            step: 1,
                            action: "プロジェクトのsettings.jsonを作成",
                            action_en: "Create project settings.json",
                            prompt: ".claude/settings.json に以下を設定して: テスト実行(npm test)とビルド(npm run build)を自動承認、rm -rf は常に拒否",
                            prompt_en: "Set up .claude/settings.json: auto-approve test (npm test) and build (npm run build), always deny rm -rf",
                            expected: "settings.jsonが作成され、allow/deny配列が設定される",
                            expected_en: "settings.json created with allow/deny arrays configured"
                        },
                        {
                            step: 2,
                            action: "/permissionsで現在の権限設定を確認",
                            action_en: "Check current permissions with /permissions",
                            prompt: "/permissions",
                            prompt_en: "/permissions",
                            expected: "許可済み・拒否済みのコマンド一覧が表示される",
                            expected_en: "List of allowed and denied commands is displayed"
                        }
                    ],
                    checkpoints: [
                        "settings.jsonの階層構造を理解した",
                        "allow/denyで権限を制御できた"
                    ],
                    checkpoints_en: [
                        "Understood settings.json hierarchy",
                        "Controlled permissions with allow/deny"
                    ]
                }
            }
        },
        {
            id: "02_11",
            time: "30分",
            time_en: "30 min",
            number: "02_11",
            title: "新コマンド群 - /voice, /loop, /effort, /ultrareview, /goal, /workflows, /doctor, /dataviz, /teleport, /design（v2.1.252）",
            title_en: "New Commands - /voice, /loop, /effort, /ultrareview, /goal, /workflows, /doctor, /dataviz, /teleport, /design (v2.1.252)",
            description: "v2.1〜v2.1.252で追加された新コマンド群。音声・定期実行・セッション転送・思考深度・クラウド連携・エージェントビュー・完了条件設定・ワークフロー・セットアップ診断・チャート設計ガイダンス・クラウドセッション転送・UI設計。",
            description_en: "New commands added between v2.1 and v2.1.252: voice, periodic execution, session transfer, thinking depth, cloud-backed review, agent view, goal setting, workflows, setup checkup, dataviz guidance, cloud-to-local session teleport, UI design.",
            icon: "radio",
            tags: ["v2.1.252新機能", "Voice", "Loop", "/teleport", "/workflows", "/doctor", "/design"],
            tags_en: ["v2.1.252 New", "Voice", "Loop", "/teleport", "/workflows", "/doctor", "/design"],
            content: {
                summary: "Claude Code v2.1〜v2.1.233で多数のコマンドが拡充された。/voice はスペースバーのpush-to-talk方式で音声入力ができる。/loop は指定間隔でプロンプトを繰り返す軽量cronで、間隔を省略するとモデルが自己ペースで動く動的モードになる。/teleport はクラウドセッションをローカルへ転送する（claude.ai側で「/teleport」→ CLIで「claude --teleport <session id>」）。/effort は矢印キーのスライダーUIで思考深度を調整し、xhighで最大思考が可能。2026年4月にはクラウド連携の /ultrareview（並列マルチエージェントコードレビュー）と /team-onboarding、/powerupが登場（/ultraplanはv2.1.221で廃止）。v2.1.139では`claude agents`、`/goal`、`/scroll-speed`が追加。v2.1.149では/usageにカテゴリ別内訳が追加。v2.1.152では/code-review（/simplifyを改名）が追加。v2.1.154ではOpus 4.8がデフォルトになりdynamic workflows（/workflows）が登場。v2.1.157ではプラグインの.claude/skills自動ロードと/reload-skillsが追加。v2.1.166では--fallback-model（最大3モデルの代替）、v2.1.169では/cd（ワーキングディレクトリ変更）と--safe-modeが追加。v2.1.181〜183では/config key=value（プロンプトから設定変更）、v2.1.186ではclaude mcp login/logoutが加わった。v2.1.191では/rewind（/clear前の会話状態から再開）が追加。v2.1.197ではSonnet 5が新デフォルトモデルになった。v2.1.198では/dataviz（チャート・ダッシュボード設計ガイダンス）が追加され、サブエージェントがデフォルトでバックグラウンド実行になった。v2.1.200では権限モード名称が「Default」→「Manual」に変更（--permission-mode manual）。v2.1.202では/doctor（セットアップ完全チェックアップ、/checkupがエイリアス）とデスクトップ版アプリ内ブラウザが追加。v2.1.207ではBedrock/Vertex/Foundryでのauto modeがopt-in不要に。v2.1.210ではWrite(path)/NotebookEdit(path)/Glob(path)権限ルールが廃止（Edit(path)/Read(path)を使用）。2026年8月（v2.1.220〜v2.1.233）では、/teleportコマンド（クラウドセッションをCLIへ転送）、--forward-subagent-text・--permission-prompt-toolフラグ、セッション間メッセージング（macOS/Linux）、セルフホスト環境β（Team/Enterprise）、auto modeがPro/Max/Teamでデフォルトに（2026/8/14〜）が加わった。2026年9月（v2.1.234〜v2.1.252）では/design（Claude DesignアートボードをCLI/Desktopに統合、リサーチプレビュー）、ANTHROPIC_DEFAULT_MODEL環境変数、Concise output style、Remote Controlデバイスカード（Week 34 / v2.1.234）、--restrictedフラグ・CLAUDE_CODE_RESTRICTED=1（コマンド実行ツール除去の制限モード）、experimental.cacheTtlエージェント設定（v2.1.248）、PreModelSwitch/PostModelSwitchフック・/costプロンプトキャッシュ指標・/usageスペンドリミットバー（v2.1.251）が加わった。",
                summary_en: "Many commands were added between v2.1 and v2.1.252. /voice enables push-to-talk via spacebar. /loop repeats prompts at intervals; omitting the interval enters a dynamic self-paced mode. /teleport transfers cloud sessions to local ('/teleport' in claude.ai → 'claude --teleport <session id>' in CLI). /effort got a slider UI with xhigh for max thinking. April 2026 introduced /ultrareview, /team-onboarding, and /powerup (/ultraplan was removed in v2.1.221). v2.1.139 added `claude agents`, `/goal`, and `/scroll-speed`. v2.1.149 added category breakdown to /usage. v2.1.152 added /code-review (renamed from /simplify). v2.1.154 made Opus 4.8 the default and introduced dynamic workflows (/workflows). v2.1.157 added plugin auto-loading from .claude/skills and /reload-skills. v2.1.166 added --fallback-model (up to 3); v2.1.169 added /cd and --safe-mode; v2.1.181-183 added /config key=value; v2.1.186 added claude mcp login/logout. v2.1.191 added /rewind (resume from before /clear). v2.1.197 made Sonnet 5 the new default model. v2.1.198 added /dataviz (chart and dashboard design guidance) and made subagents run in background by default. v2.1.200 renamed 'Default' permission mode to 'Manual' (--permission-mode manual). v2.1.202 added /doctor (full setup checkup; /checkup alias) and in-app browser on Desktop. v2.1.207 expanded auto mode to Bedrock/Vertex/Foundry without opt-in. v2.1.210 deprecated Write(path)/NotebookEdit(path)/Glob(path) permission rules (use Edit(path)/Read(path)). August 2026 (v2.1.220–v2.1.233) added /teleport command (transfer cloud session to local CLI), --forward-subagent-text and --permission-prompt-tool flags, cross-session messaging (macOS/Linux), self-hosted environments beta (Team/Enterprise), and auto mode as default on Pro/Max/Team (from 2026/8/14). September 2026 (v2.1.234–v2.1.252) added /design (Claude Design artboard workflow in CLI/Desktop, research preview), ANTHROPIC_DEFAULT_MODEL env var, Concise output style, Remote Control device cards (Week 34 / v2.1.234), --restricted flag / CLAUDE_CODE_RESTRICTED=1 (removes command-execution tools), experimental.cacheTtl agent setting (v2.1.248), PreModelSwitch/PostModelSwitch hooks, /cost per-session prompt cache metrics, and /usage spend limit bar (v2.1.251).",
                keyPoints: [
                    "/rewind: /clearを実行する前の会話状態から再開（v2.1.191）",
                    "/cd: セッションを新しいワーキングディレクトリに移動（v2.1.169）",
                    "/usage-credits: 使用クレジット表示（/extra-usageを改名）",
                    "--fallback-model: プライマリモデル利用不可時のフォールバックモデル指定フラグ",
                    "--safe-mode: 全カスタマイズを無効化して起動（CLAUDE_CODE_SAFE_MODE環境変数でも指定可）",
                    "/workflows: dynamic workflowの実行状況を表示（v2.1.154）",
                    "/code-review: 正確性バグを指定レベルで報告。--commentでGitHub PRにコメント投稿（/simplify改名、v2.1.152）",
                    "/reload-skills: 再起動なしでskillディレクトリを再スキャン（v2.1.157）",
                    "claude agents: エージェントビューを起動。--model, --effort, --add-dir等のフラグ対応（v2.1.139/142）",
                    "/goal: 完了条件を設定し、条件を満たすまでClaudeが継続実行（v2.1.139）",
                    "/usage: /cost と /stats を統合。カテゴリ別内訳表示（v2.1.149）",
                    "/scroll-speed: マウスホイールのスクロール速度を調整（v2.1.139）",
                    "/voice: スペースバーでpush-to-talk音声入力。keybindings.jsonでキーカスタマイズ可能",
                    "/loop 5m check deploy: 5分ごとに定期実行。間隔省略でモデル自己ペースの動的モード",
                    "/teleport: ローカル→Web（&コマンド）、Web→ローカル（--teleport）のセッション転送",
                    "/effort: 矢印キースライダーで low/medium/high/xhigh を指定",
                    "/ultrareview: マルチエージェント並列コードレビューをクラウドで実行（2026/4）",
                    "/ultraplan: クラウドで計画ドラフト → Webで編集・コメント → ローカル実行（早期プレビュー）",
                    "/fast: 同じモデルのまま高速出力モードに切替（Opus 5 / Opus 4.8 が対応、2倍レートで約2.5倍速）",
                    "auto permission mode: 安全操作は自動許可、高リスクは自動ブロック。hard_deny/soft_deny対応",
                    "/dataviz: チャート・ダッシュボード設計ガイダンスとカラーパレット検証（v2.1.198）",
                    "/doctor（/checkup）: セットアップの完全チェックアップ。問題を診断して修正提案（v2.1.202）",
                    "「Default」→「Manual」権限モード改名: --permission-mode manual / \"defaultMode\": \"manual\" で指定（v2.1.200）",
                    "Write/NotebookEdit/Glob(path) 権限ルール廃止: Edit(path) または Read(path) を使用（v2.1.210）",
                    "/teleport: クラウドセッションをローカルへ転送。claude.aiで /teleport → CLIで claude --teleport <session id>（v2.1.233）",
                    "セッション間メッセージング: macOS・Linux でセッション同士がメッセージを送受信（Week 32）",
                    "auto modeがデフォルトに: 2026/8/14よりPro・Max・Teamの新規セッションで自動有効化（v2.1.221以降）",
                    "CLAUDE_CODE_ENABLE_TODO_TOOLS=1: 新モデルで廃止されたTodoツールを再有効化する環境変数（v2.1.233）",
                    "CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION: セッション内のサブエージェント起動上限を設定（既定200、v2.1.221〜）",
                    "/design: Claude DesignのアートボードワークフローをCLI/Desktopに統合。UIアートボード下書き→選択→実装のリサーチプレビュー（v2.1.234 / Week 34）",
                    "ANTHROPIC_DEFAULT_MODEL: 新規セッションのデフォルトモデルを設定する環境変数（v2.1.234）",
                    "--restricted / CLAUDE_CODE_RESTRICTED=1: コマンド・コード実行ツールを除去する制限モード（v2.1.248）",
                    "PreModelSwitch / PostModelSwitch フック: モデル切替前後に発火する新フックイベント（v2.1.251）",
                    "/cost にプロンプトキャッシュ指標追加: セッション別キャッシュヒット率・再キャッシュ情報を表示（v2.1.251）",
                    "/usage にスペンドリミットバー追加: スペンドリミットバーとusage-credits情報が追加（v2.1.251）"
                ],
                keyPoints_en: [
                    "/rewind: Resume conversation from before /clear was run (v2.1.191)",
                    "/cd: Move session to a new working directory (v2.1.169)",
                    "/usage-credits: Display usage credits (renamed from /extra-usage)",
                    "--fallback-model: Specify fallback model when primary is unavailable",
                    "--safe-mode: Start with all customizations disabled (also via CLAUDE_CODE_SAFE_MODE env var)",
                    "/workflows: View dynamic workflow runs (v2.1.154)",
                    "/code-review: Report correctness bugs at chosen effort level. --comment posts to GitHub PR (renamed from /simplify, v2.1.152)",
                    "/reload-skills: Re-scan skill directories without restarting (v2.1.157)",
                    "claude agents: Launch agent view. Supports --model, --effort, --add-dir flags (v2.1.139/142)",
                    "/goal: Set completion conditions; Claude runs continuously until conditions are met (v2.1.139)",
                    "/usage: Consolidates /cost and /stats. Category breakdown available (v2.1.149)",
                    "/scroll-speed: Adjust mouse wheel scroll speed (v2.1.139)",
                    "/voice: Push-to-talk via spacebar. Key customizable in keybindings.json",
                    "/loop 5m check deploy: Periodic execution; omit interval for dynamic self-paced mode",
                    "/teleport: Local→Web (& command), Web→Local (--teleport) session transfer",
                    "/effort: Slider UI to set low/medium/high/xhigh",
                    "/ultrareview: Cloud-backed parallel multi-agent code review (2026/4)",
                    "/ultraplan: Cloud planning draft → web edit → local execution (early preview)",
                    "/fast: Fast output mode with same model (Opus 5 / Opus 4.8: 2x rate for ~2.5x speed)",
                    "auto permission mode: Auto-approves safe ops, auto-blocks risky ops; hard_deny/soft_deny supported",
                    "/dataviz: Chart and dashboard design guidance with color-palette validator (v2.1.198)",
                    "/doctor (/checkup): Full setup checkup — diagnoses issues and suggests fixes (v2.1.202)",
                    "'Default' → 'Manual' permission mode rename: --permission-mode manual / \"defaultMode\": \"manual\" (v2.1.200)",
                    "Write/NotebookEdit/Glob(path) permission rule deprecation: Use Edit(path) or Read(path) instead (v2.1.210)",
                    "/teleport: Transfer cloud session to local CLI — run '/teleport' on claude.ai, then 'claude --teleport <session id>' (v2.1.233)",
                    "Cross-session messaging: Claude Code sessions can message each other on macOS and Linux (Week 32)",
                    "auto mode as default: New sessions on Pro/Max/Team default to auto mode from 2026/8/14 (v2.1.221+)",
                    "CLAUDE_CODE_ENABLE_TODO_TOOLS=1: Re-enable todo tools removed from newer models (v2.1.233)",
                    "CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION: Cap subagent spawns per session (default 200, v2.1.221+)",
                    "/design: Claude Design artboard workflow in CLI/Desktop — draft artboard UI, pick, and implement; research preview (v2.1.234 / Week 34)",
                    "ANTHROPIC_DEFAULT_MODEL: Set default model for new sessions via environment variable (v2.1.234)",
                    "--restricted / CLAUDE_CODE_RESTRICTED=1: Removes command/code-execution built-in tools, keeps only file tools in working directory (v2.1.248)",
                    "PreModelSwitch / PostModelSwitch hooks: New hook events that fire before and after model switching (v2.1.251)",
                    "/cost with prompt cache metrics: Shows per-session cache hit ratios and token re-caching info (v2.1.251)",
                    "/usage spend limit bar: Spend limit bar and usage-credits info added to /usage (v2.1.251)"
                ],
                handson: {
                    title: "新コマンドを試す",
                    title_en: "Try New Commands",
                    goal: "/effort と /fast を実際に試して挙動の違いを体感する",
                    goal_en: "Try /effort and /fast to experience behavioral differences",
                    prerequisites: ["Claude Codeが起動済み"],
                    prerequisites_en: ["Claude Code is running"],
                    steps: [
                        {
                            step: 1,
                            action: "/effort で思考深度を変えて同じ質問をする",
                            action_en: "Change thinking depth with /effort and ask the same question",
                            prompt: "/effort low\nFizzBuzzを書いて\n\n（応答後）\n/effort high\nFizzBuzzを書いて",
                            prompt_en: "/effort low\nWrite FizzBuzz\n\n(After response)\n/effort high\nWrite FizzBuzz",
                            expected: "lowでは簡潔な回答、highではより詳細で考慮された回答になる",
                            expected_en: "low gives concise answer, high gives more detailed and considered answer"
                        },
                        {
                            step: 2,
                            action: "/fast で高速モードを切替",
                            action_en: "Toggle fast mode with /fast",
                            prompt: "/fast\nこのプロジェクトの構造を説明して",
                            prompt_en: "/fast\nExplain the structure of this project",
                            expected: "同じモデルで出力速度が速くなる",
                            expected_en: "Output speed increases with the same model"
                        }
                    ],
                    checkpoints: [
                        "/effortの低/高で応答の詳細さが変わることを確認した",
                        "/fastモードの速度差を体感した"
                    ],
                    checkpoints_en: [
                        "Confirmed response detail changes with /effort low/high",
                        "Experienced speed difference in /fast mode"
                    ]
                }
            }
        },
                {
            id: "02_12",
            time: "30分",
            time_en: "30 min",
            number: "02_12",
            title: "コンテキスト予算管理 - dumb zone回避",
            title_en: "Context Budget Management - Avoiding the Dumb Zone",
            description: "1Mコンテキストでも300-400kで劣化が始まる。autocompact閾値調整と手書きブリーフ+/clearで品質を保つ。",
            description_en: "Even with 1M context, degradation starts around 300-400k. Keep quality with autocompact tuning and handwritten brief + /clear.",
            icon: "database",
            tags: ["コンテキスト", "compact", "予算管理"],
            tags_en: ["Context", "Compact", "Budgeting"],
            content: {
                summary: "コンテキストは大きいほど良いわけではない。実測ベースの運用報告では、1Mコンテキストでも300〜400k付近からcontext rotによる劣化（指示の取りこぼし、古い方針への回帰）が始まり、使用率40%を超えたあたりから顕著になる。対策は2系統ある。1つは CLAUDE_AUTOCOMPACT_PCT_OVERRIDE で自動compactの発火を早めに引く、あるいはあえてコンテキスト上限を200kに縮めて常に新鮮な状態で回す逆張り運用。もう1つは /compact の要約に頼らず、自分で次セッションへの引き継ぎブリーフを書いて /clear する方法で、長期タスクではこちらの方が確実性が高い。",
                summary_en: "Bigger context is not automatically better. Field reports show degradation (dropped instructions, regression to stale plans) starting around 300-400k even on 1M windows, becoming pronounced past 40% utilization. Two countermeasures: tune CLAUDE_AUTOCOMPACT_PCT_OVERRIDE to compact earlier (or contrarian: shrink to 200k and stay fresh), or skip /compact summaries entirely and write your own handoff brief before /clear — more reliable for long-running work.",
                keyPoints: [
                    "/context で現在の使用内訳（システム/ツール/メッセージ/MCP）を常時把握する",
                    "劣化は使用率40%超から体感できる。1Mあっても300-400kが実用上の天井",
                    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE で自動compactの発火閾値を調整（早め推奨）",
                    "/compact <指示> で残したい情報を明示。例: /compact 設計判断とTODOだけ残して",
                    "長期タスクは /compact より「手書きブリーフ → /clear → ブリーフ貼り付け」が確実",
                    "MCPサーバーの繋ぎすぎはツール定義だけで数万トークンを食う。使わないものは外す"
                ],
                keyPoints_en: [
                    "Watch /context for the live breakdown (system / tools / messages / MCP)",
                    "Degradation is noticeable past 40% utilization; 300-400k is the practical ceiling even on 1M",
                    "Tune CLAUDE_AUTOCOMPACT_PCT_OVERRIDE to trigger autocompact earlier",
                    "Give /compact explicit instructions: /compact keep only design decisions and TODOs",
                    "For long tasks prefer handwritten brief then /clear over /compact summaries",
                    "Too many MCP servers burn tens of thousands of tokens on tool definitions alone"
                ],
                quote: "コンテキストウィンドウを200kに戻したら、Claude Codeはむしろ賢くなった。大きな窓は、注意を薄く引き伸ばすだけのことがある。",
                quote_en: "When I shrank the context window back to 200k, Claude Code actually got smarter. A big window can just stretch attention thinner.",
                commands: [
                    { cmd: "/context", desc: "コンテキスト使用量の内訳を表示", desc_en: "Show context usage breakdown" },
                    { cmd: "/compact 設計判断とTODOだけ残して", desc: "残す情報を指定してコンパクト", desc_en: "Compact with explicit keep-list" },
                    { cmd: "export CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=60", desc: "自動compactを60%で発火させる", desc_en: "Fire autocompact at 60%" }
                ],
                handson: {
                    title: "実践: 劣化を観測してから予算運用に切り替える",
                    title_en: "Practice: Observe degradation, then switch to budget-driven operation",
                    goal: "コンテキスト使用率と応答品質の関係を体感し、自分の閾値運用を決める",
                    goal_en: "Feel the utilization-vs-quality relationship and set your own thresholds",
                    prerequisites: ["長めの作業履歴があるセッション、または大きめのプロジェクト"],
                    prerequisites_en: ["A session with long history, or a reasonably large project"],
                    steps: [
                        { step: 1, action: "現在の使用内訳を確認", action_en: "Check current usage breakdown",
                          prompt: "/context",
                          prompt_en: "/context",
                          expected: "システムプロンプト・ツール定義・MCP・会話履歴の内訳が表示される",
                          expected_en: "Breakdown of system prompt, tool definitions, MCP, and history is shown" },
                        { step: 2, action: "重い作業でコンテキストを消費して再測定", action_en: "Consume context with heavy work and re-measure",
                          prompt: "プロジェクト全体を読み込んで構造をまとめて。その後 /context で使用率を確認",
                          prompt_en: "Read the whole project and summarize the structure, then check /context again",
                          expected: "使用率が大きく上がる。どの操作が何トークン食うかの感覚がつかめる",
                          expected_en: "Utilization jumps; you get a feel for token cost per operation" },
                        { step: 3, action: "指示付きcompactを試す", action_en: "Try compact with instructions",
                          prompt: "/compact ここまでの設計判断・未完了TODO・次にやることだけを残して",
                          prompt_en: "/compact keep only design decisions, open TODOs, and next steps",
                          expected: "指定した情報を中心に圧縮され、不要な探索ログが消える",
                          expected_en: "History is compacted around the keep-list; exploration noise disappears" },
                        { step: 4, action: "手書きブリーフ + /clear と比較", action_en: "Compare with handwritten brief + /clear",
                          prompt: "次セッションへの引き継ぎブリーフを書いて（背景・確定事項・残タスク・注意点）。出力をコピーしたら /clear して貼り付け",
                          prompt_en: "Write a handoff brief (background / decisions / remaining tasks / cautions). Copy it, /clear, and paste",
                          expected: "compact要約より意図が正確に引き継がれることを確認できる",
                          expected_en: "Intent carries over more accurately than a compact summary" }
                    ],
                    checkpoints: [
                        "/context で内訳を読めるようになった",
                        "自分の環境での「劣化が始まる使用率」の目安を持てた",
                        "/compact に残すものを指示する習慣がついた",
                        "長期タスクでは手書きブリーフ + /clear を選べるようになった"
                    ],
                    checkpoints_en: [
                        "Can read the /context breakdown",
                        "Have a personal threshold for when degradation starts",
                        "Habitually give /compact an explicit keep-list",
                        "Choose handwritten brief + /clear for long-running tasks"
                    ]
                }
            }
        },
        {
            "id": "02_13",
            "time": "25分",
            "time_en": "25 min",
            "number": "02_13",
            "title": ".claude/rules - パススコープ指示",
            "title_en": ".claude/rules - Path-Scoped Instructions",
            "description": "特定ディレクトリの作業時だけロードされる指示ファイル。常時読み込むCLAUDE.mdよりトークン効率が良い。",
            "description_en": "Instruction files loaded only when working in matching directories - more token-efficient than always-on CLAUDE.md.",
            "icon": "file-text",
            "tags": [
                ".claude/rules",
                "steering",
                "コンテキスト効率"
            ],
            "tags_en": [
                ".claude/rules",
                "Steering",
                "Context efficiency"
            ],
            "content": {
                "summary": "2026年6月の公式steeringガイドで、.claude/rules/ に置く指示ファイルが正式化された。各ファイルの先頭に paths: フロントマターを書くと、その対象ディレクトリやファイルを触るときだけ内容がコンテキストに入る。常に読み込まれるCLAUDE.mdと違い、無関係な作業中はロードされないのでトークンを節約できる。公式は CLAUDE.md を200行以内・事実中心に保ち、手順はskillへ、必ず守らせたい禁止はhookやmanaged settingsで強制、パス限定の制約はrulesへ、と役割分担を推奨している。（出典: 公式 steering ガイド 2026/6/18）",
                "summary_en": "The June 2026 official steering guide formalized instruction files under .claude/rules/. A paths: frontmatter makes a file load into context only when you touch matching directories or files. Unlike always-on CLAUDE.md, unrelated work does not pay the token cost. Anthropic recommends keeping CLAUDE.md under 200 lines and fact-focused, moving procedures to skills, enforcing hard 'never do X' rules via hooks or managed settings, and path-scoped constraints into rules.",
                "keyPoints": [
                    "rulesは .claude/rules/ 配下のmarkdown。paths: フロントマターで対象ディレクトリ/ファイルを指定",
                    "対象を編集するときだけロードされるため、常時読込のCLAUDE.mdよりトークン効率が良い",
                    "公式推奨: CLAUDE.mdは200行以内、所有者を決めて変更をレビュー、手順でなく事実を書く",
                    "「never do X」のような禁止は守られにくい。hookやmanaged settingsで決定的に強制する",
                    "使い分け: 常時の事実=CLAUDE.md / パス限定の制約=rules / 必ず起こす操作=hook / 隔離した副作業=subagent",
                    "CLAUDE.md・rules・skill・hookは役割が重複しないよう責務を分離する"
                ],
                "keyPoints_en": [
                    "rules are markdown under .claude/rules/; paths: frontmatter targets directories/files",
                    "Loads only when you edit matching paths, saving tokens vs always-on CLAUDE.md",
                    "Official guidance: keep CLAUDE.md under 200 lines, assign an owner, write facts not procedures",
                    "'never do X' rules are unreliable; enforce them with hooks or managed settings",
                    "Split roles: always-true facts=CLAUDE.md / path-scoped=rules / must-happen=hook / isolated subtask=subagent",
                    "Keep CLAUDE.md, rules, skills, and hooks non-overlapping in responsibility"
                ],
                "code": "---\npaths:\n  - \"frontend/**\"\n  - \"**/*.tsx\"\n---\n\n# フロントエンド規約（frontend/ 作業時のみロード）\n\n- コンポーネントは関数コンポーネント＋hooksで書く\n- 状態は最小限。サーバー状態は react-query を使う\n- スタイルは既存の design tokens を使い、生の色値を書かない",
                "commands": [
                    {
                        "cmd": "/context",
                        "desc": "どのrulesが今ロードされているか使用内訳で確認",
                        "desc_en": "Check which rules are loaded via the context breakdown"
                    }
                ],
                "handson": {
                    "title": "実践: 肥大化したCLAUDE.mdをrulesへ切り出す",
                    "title_en": "Practice: Split a bloated CLAUDE.md into rules",
                    "goal": "パス限定の制約をrulesへ移し、CLAUDE.mdを事実中心に絞る",
                    "goal_en": "Move path-scoped constraints to rules and trim CLAUDE.md to facts",
                    "prerequisites": [
                        "ある程度ルールが溜まったCLAUDE.mdを持つプロジェクト"
                    ],
                    "prerequisites_en": [
                        "A project whose CLAUDE.md has accumulated rules"
                    ],
                    "steps": [
                        {
                            "step": 1,
                            "action": "CLAUDE.mdを棚卸し",
                            "action_en": "Inventory CLAUDE.md",
                            "prompt": "今のCLAUDE.mdを読んで、(1)常に効くべき事実 (2)特定ディレクトリでしか使わない制約 (3)手順 (4)禁止事項 に分類して一覧にして。",
                            "prompt_en": "Read CLAUDE.md and classify each line into (1) always-true facts (2) path-scoped constraints (3) procedures (4) prohibitions.",
                            "expected": "4分類のリストが出て、rules/skill/hookへ移すべき候補が見える",
                            "expected_en": "A 4-way classification shows what to move to rules/skills/hooks"
                        },
                        {
                            "step": 2,
                            "action": "パス限定の制約をrulesへ",
                            "action_en": "Move path-scoped constraints to rules",
                            "prompt": "frontend配下でだけ効く制約を .claude/rules/frontend.md に paths: フロントマター付きで切り出して。",
                            "prompt_en": "Extract frontend-only constraints into .claude/rules/frontend.md with a paths: frontmatter.",
                            "expected": "frontend.md が作成され、paths指定が入る",
                            "expected_en": "frontend.md is created with a paths frontmatter"
                        },
                        {
                            "step": 3,
                            "action": "ロード挙動を確認",
                            "action_en": "Verify load behavior",
                            "prompt": "無関係なディレクトリのファイルを開いて /context を確認し、次にfrontend配下を開いて /context を確認して。ロードの差を報告して。",
                            "prompt_en": "Open a file in an unrelated dir and run /context, then open one under frontend and run /context. Report the difference.",
                            "expected": "frontend作業時のみ frontend.md がロードされることを確認できる",
                            "expected_en": "frontend.md loads only while working under frontend"
                        },
                        {
                            "step": 4,
                            "action": "CLAUDE.mdを再構成",
                            "action_en": "Restructure CLAUDE.md",
                            "prompt": "手順記述はskillへ、禁止系はhookかmanaged settingsへ移し、CLAUDE.mdを200行以内の事実中心に整理して。",
                            "prompt_en": "Move procedures to skills, prohibitions to hooks/managed settings, and trim CLAUDE.md to under 200 fact-focused lines.",
                            "expected": "CLAUDE.mdが短くなり、役割が分離される",
                            "expected_en": "CLAUDE.md shrinks and responsibilities are separated"
                        }
                    ],
                    "checkpoints": [
                        "paths: フロントマター付きrulesを作れた",
                        "対象ディレクトリ作業時のみロードされることを /context で確認した",
                        "CLAUDE.md・rules・skill・hookの役割分担を説明できる",
                        "CLAUDE.mdを事実中心に絞れた"
                    ],
                    "checkpoints_en": [
                        "Created a rule with a paths: frontmatter",
                        "Confirmed it loads only for matching paths via /context",
                        "Can explain the split across CLAUDE.md/rules/skills/hooks",
                        "Trimmed CLAUDE.md to facts"
                    ]
                }
            }
        },
        {
            "id": "02_14",
            "time": "25分",
            "time_en": "25 min",
            "number": "02_14",
            "title": "Claude Code Artifacts - 共有ライブページ",
            "title_en": "Claude Code Artifacts - Shareable Live Pages",
            "description": "セッション文脈から共有可能なライブWebページを生成。PRウォークスルーやダッシュボードを単一HTMLで。",
            "description_en": "Generate shareable live web pages from session context - PR walkthroughs, dashboards - as a single HTML.",
            "icon": "layers",
            "tags": [
                "Artifacts",
                "共有",
                "ライブページ"
            ],
            "tags_en": [
                "Artifacts",
                "Sharing",
                "Live page"
            ],
            "content": {
                "summary": "2026/6/18にTeam/Enterprise向けβとして登場した新機能。セッションの文脈（コードベース・コネクタ・会話）から、共有できるライブWebページを作る。出力は単一HTMLで、CSSとJSはインライン、画像はdata URIで埋め込まれ、ビルド不要。発行のたびに同じリンクで新バージョンになり、開いているページはその場で更新される。既定は作者のみ閲覧で、組織内の認証メンバーに限定共有でき、一般公開はできない。PRウォークスルー、システム説明、フィルタ可能なダッシュボード、リリースチェックリストなどに向く。専用スラッシュコマンドはなく、会話的に依頼して作る。（出典: 公式ブログ Artifacts in Claude Code）",
                "summary_en": "A Team/Enterprise beta launched 2026/6/18. It builds a shareable live web page from session context (codebase, connectors, conversation). Output is a single HTML with inline CSS/JS and data-URI images, no build step. Each publish reuses the same link as a new version and open pages update in place. Default is author-only; you can limit-share to authenticated org members, but public sharing is not allowed. Good for PR walkthroughs, system explainers, filterable dashboards, and release checklists. There is no dedicated slash command - you ask conversationally.",
                "keyPoints": [
                    "セッション文脈から共有可能なライブWebページを生成（PRウォークスルー・ダッシュボード等）",
                    "単一HTML出力。CSS/JSインライン、画像data URI、外部依存ゼロ、ビルド不要",
                    "発行ごとに同一リンクで新バージョン化。開いているページが自動で更新される",
                    "専用コマンドはなく、会話で「〜をArtifactにして」と依頼して作成・更新する",
                    "既定は作者のみ閲覧。組織内メンバーへ限定共有でき、一般公開は不可",
                    "共有範囲は組織管理者のorgレベル設定で制御。Team/Enterprise向けβ、CLI/デスクトップ対応"
                ],
                "keyPoints_en": [
                    "Generate a shareable live web page from session context (PR walkthroughs, dashboards)",
                    "Single HTML output: inline CSS/JS, data-URI images, zero external deps, no build",
                    "Each publish reuses the same link as a new version; open pages auto-update",
                    "No dedicated command - ask conversationally to create/update an Artifact",
                    "Default author-only; limit-share to org members, no public sharing",
                    "Org admins control share scope; Team/Enterprise beta, CLI/desktop"
                ],
                "commands": [],
                "handson": {
                    "title": "実践: 直近の変更をPRウォークスルーArtifactにする",
                    "title_en": "Practice: Turn recent changes into a PR-walkthrough Artifact",
                    "goal": "セッション文脈から共有ライブページを作り、更新とバージョン化を体験する",
                    "goal_en": "Create a shareable live page from context and experience updates and versioning",
                    "prerequisites": [
                        "Team/EnterpriseプランのClaude Code",
                        "直近に変更のあるリポジトリ"
                    ],
                    "prerequisites_en": [
                        "Claude Code on a Team/Enterprise plan",
                        "A repo with recent changes"
                    ],
                    "steps": [
                        {
                            "step": 1,
                            "action": "PRウォークスルーを依頼",
                            "action_en": "Request a PR walkthrough",
                            "prompt": "直近のブランチの変更を、レビュアー向けのPRウォークスルーページとしてArtifactにして。各変更の意図と影響範囲を含めて。",
                            "prompt_en": "Make an Artifact: a reviewer-facing PR walkthrough of this branch's recent changes, including intent and impact per change.",
                            "expected": "単一HTMLのArtifactが生成され、共有リンクが提示される",
                            "expected_en": "A single-HTML Artifact is created with a share link"
                        },
                        {
                            "step": 2,
                            "action": "単一HTML構成を確認",
                            "action_en": "Inspect the single-HTML structure",
                            "prompt": "生成されたArtifactのHTMLを開いて、CSS/JSがインラインで外部依存がないこと、画像がdata URIであることを確認して。",
                            "prompt_en": "Open the Artifact HTML and confirm inline CSS/JS, no external deps, and data-URI images.",
                            "expected": "外部リソースを読まない自己完結HTMLであることが分かる",
                            "expected_en": "Confirmed self-contained HTML with no external resources"
                        },
                        {
                            "step": 3,
                            "action": "内容を追記して再発行",
                            "action_en": "Add content and republish",
                            "prompt": "テスト結果のサマリを1セクション追記して再発行して。リンクは変わらず、開いているページが新バージョンに更新されることを確認して。",
                            "prompt_en": "Append a test-results section and republish. Confirm the link stays the same and open pages update to the new version.",
                            "expected": "同一リンクのままバージョンが上がり、ページが更新される",
                            "expected_en": "Same link, version bumps, page updates"
                        },
                        {
                            "step": 4,
                            "action": "限定共有を設定",
                            "action_en": "Set limited sharing",
                            "prompt": "このArtifactを組織内の認証メンバーだけが見られる共有範囲に設定して。一般公開はできないことも確認して。",
                            "prompt_en": "Set the share scope to authenticated org members only, and confirm public sharing is unavailable.",
                            "expected": "組織内限定共有が設定され、公開は不可と確認できる",
                            "expected_en": "Org-only sharing is set; public sharing is unavailable"
                        }
                    ],
                    "checkpoints": [
                        "セッション文脈からArtifactを生成できた",
                        "単一HTML・外部依存ゼロを確認した",
                        "再発行で同一リンク・自動更新・バージョン化を確認した",
                        "組織内限定共有の範囲を設定できた"
                    ],
                    "checkpoints_en": [
                        "Created an Artifact from session context",
                        "Verified single-HTML with zero external deps",
                        "Confirmed same-link auto-update and versioning on republish",
                        "Set org-only share scope"
                    ]
                }
            }
        }
    ],
    advanced: [
        {
            id: "03_01",
            time: "35分",
            time_en: "35 min",
            number: "03_01",
            title: "トークン最適化",
            title_en: "Token Optimization",
            description: "トークン消費を最小化するテクニック。コスト削減と性能向上を両立。",
            description_en: "Techniques to minimize token consumption. Achieve both cost reduction and performance improvement.",
            icon: "trending-down",
            tags: ["トークン", "最適化", "コスト"],
            tags_en: ["Token", "Optimization", "Cost"],
            content: {
                summary: "Claude Codeのコストはトークン消費に直結します。必要最小限のトークンで最大の効果を得ることで、コスト削減とパフォーマンス向上の両方を実現できます。WSCEフレームワーク（Write/Summarize/Compress/Extract）を使いこなしましょう。",
                summary_en: "Claude Code costs are directly tied to token consumption. Achieve both cost reduction and performance improvement by getting maximum effect with minimum tokens. Master the WSCE framework (Write/Summarize/Compress/Extract).",
                keyPoints: [
                    "WSCEフレームワーク: Write → Summarize → Compress → Extract",
                    "不要なファイル読み込みを避ける（@指定で必要部分のみ）",
                    "結果はファイルに書き出してコンテキストから解放",
                    "Grepで必要な部分だけ抽出してから渡す",
                    "モデル選択: 簡単なタスクはHaiku 4.5、日常的なコード生成はSonnet 5、複雑な判断はOpus 5、最難関はFable 5"
                ],
                keyPoints_en: [
                    "WSCE Framework: Write → Summarize → Compress → Extract",
                    "Avoid unnecessary file reads (@ specify only needed parts)",
                    "Write results to files to release from context",
                    "Extract only needed parts with Grep before passing",
                    "Model selection: Haiku 4.5 for simple tasks, Sonnet 5 for daily coding, Opus 5 for complex decisions, Fable 5 for the hardest"
                ],
                wsceFramework: {
                    title: "WSCEフレームワーク",
                    description: "トークン最適化の4つの基本戦略",
                    strategies: [
                        {
                            name: "Write（書き出す）",
                            description: "中間結果をファイルに書き出し、コンテキストから解放",
                            example: "分析結果を results.md に保存してから次の処理へ",
                            saving: "大きな中間データをコンテキストに残さない"
                        },
                        {
                            name: "Summarize（要約する）",
                            description: "大きなファイルを要約してから渡す",
                            example: "10000行のログを100行の要約にしてから分析",
                            saving: "入力トークンを1/100に削減"
                        },
                        {
                            name: "Compress（圧縮する）",
                            description: "/compactで会話履歴を圧縮",
                            example: "フェーズ完了時に/compactを実行",
                            saving: "累積コンテキストを削減"
                        },
                        {
                            name: "Extract（抽出する）",
                            description: "必要な部分だけを抽出して渡す",
                            example: "grep -A5 'エラー' でエラー箇所のみ抽出",
                            saving: "関係ない行を渡さない"
                        }
                    ]
                },
                modelSelection: {
                    title: "タスク別モデル選択ガイド（2026年9月）",
                    models: [
                        {
                            model: "Haiku 4.5",
                            cost: "200kコンテキスト・$1/$5 per MTok",
                            useCase: "単純な変換、フォーマット、トリアージ",
                            examples: ["JSONの整形", "変数名の一括置換", "簡単な質問応答"]
                        },
                        {
                            model: "Sonnet 5",
                            cost: "1Mコンテキスト・$2/$10 per MTok",
                            useCase: "日常的なコード生成、分析、レビュー。速度と知性のバランス重視",
                            examples: ["新機能の実装", "コードレビュー", "バグ修正"]
                        },
                        {
                            model: "Opus 5（デフォルト）",
                            cost: "1Mコンテキスト・$5/$25 per MTok",
                            useCase: "複雑なアーキテクチャ判断、エージェントコーディング、企業業務（v2.1.219でデフォルト、effort既定high）",
                            examples: ["システム設計", "複雑なアルゴリズム", "セキュリティ分析", "dynamic workflows"]
                        },
                        {
                            model: "Fable 5",
                            cost: "1Mコンテキスト・$10/$50 per MTok",
                            useCase: "最高難度の推論・長期エージェント作業。Adaptive Thinking常時有効",
                            examples: ["超複雑なシステム設計", "長期自律エージェント", "最高品質が求められる判断"]
                        },
                        {
                            model: "opusplan（ハイブリッド）",
                            cost: "Plan=Opus / 実行=Sonnet",
                            useCase: "コスト効率と品質のバランス",
                            examples: ["計画フェーズは深い思考、実装は高速実行"]
                        }
                    ]
                },
                optimizationTips: [
                    {
                        tip: "@ 指定で必要なファイルのみ参照",
                        bad: "このプロジェクトのコードを全部読んで",
                        good: "@src/auth/login.ts を読んで"
                    },
                    {
                        tip: "行番号指定で必要な部分のみ",
                        bad: "このファイルのバグを直して",
                        good: "@src/api.ts:45-60 のエラーハンドリングを修正して"
                    },
                    {
                        tip: "出力形式を簡潔に指定",
                        bad: "詳しく説明して",
                        good: "3行で要約して"
                    },
                    {
                        tip: "不要な確認を省略",
                        bad: "まず計画を説明して、それから実行して",
                        good: "計画なしで直接実行して"
                    }
                ],
                commands: [
                    { cmd: "/model", desc: "現在のモデルを確認" },
                    { cmd: "/model <name>", desc: "モデルを変更（haiku, sonnet, opus）" },
                    { cmd: "/cost", desc: "このセッションのコスト概算を表示" },
                    { cmd: "/context", desc: "コンテキスト使用量を確認" }
                ],
                handson: {
                    title: "実践: WSCEフレームワークでトークン最適化",
                    goal: "大きなデータを効率的に処理し、トークン消費を最小化する",
                    prerequisites: ["data/sales_2025.csv が存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "現在のコンテキストとモデルを確認",
                            prompt: "/context\n/model",
                            expected: "使用量とモデルが表示される"
                        },
                        {
                            step: 2,
                            action: "Extract: 必要な部分のみ抽出",
                            prompt: "data/sales_2025.csv から東京地域のデータのみ抽出して表示して（全データは渡さないで）",
                            expected: "フィルタされたデータのみが処理される"
                        },
                        {
                            step: 3,
                            action: "Summarize: 要約してから分析",
                            prompt: "data/sales_2025.csv を10行以内に要約して、その要約をもとに傾向を分析して",
                            expected: "要約→分析の2段階で効率的に処理"
                        },
                        {
                            step: 4,
                            action: "Write: 結果をファイルに書き出し",
                            prompt: "分析結果を reports/analysis.md に保存して。保存後は結果をコンテキストに残さないで",
                            expected: "ファイルに保存され、コンテキストが解放される"
                        },
                        {
                            step: 5,
                            action: "コンテキスト使用量の変化を確認",
                            prompt: "/context",
                            expected: "効率的な処理によりコンテキスト消費が抑えられている"
                        }
                    ],
                    checkpoints: [
                        "必要な部分のみを抽出して処理できた",
                        "要約を活用して入力トークンを削減できた",
                        "ファイル書き出しでコンテキストを解放できた"
                    ],
                    files: {
                        created: ["reports/analysis.md"]
                    }
                }
            }
        },
        {
            id: "03_02",
            time: "30分",
            time_en: "30 min",
            number: "03_02",
            title: "継続学習パターン",
            title_en: "Continuous Learning Patterns",
            description: "セッション間で学習を蓄積。CLAUDE.mdとSkillsを育てる。",
            description_en: "Accumulate learning across sessions. Grow CLAUDE.md and Skills.",
            icon: "refresh-cw",
            tags: ["継続学習", "蓄積", "改善"],
            tags_en: ["Continuous Learning", "Accumulation", "Improvement"],
            content: {
                summary: "Claude Codeのセッションは独立していますが、CLAUDE.mdとSkillsを使えば学習を蓄積できます。プロジェクト固有のルール、効果的なプロンプトパターン、失敗から学んだ教訓を永続化し、チーム全体で共有しましょう。",
                summary_en: "Claude Code sessions are independent, but learning can accumulate through CLAUDE.md and Skills. Persist project-specific rules, effective prompt patterns, and lessons from failures, then share across the team.",
                keyPoints: [
                    "/learn コマンドで会話から自動的にSkillを生成",
                    "CLAUDE.md に「やってはいけないこと」を記録",
                    "成功パターンは即座にSkill化",
                    "定期的（週1回など）にルールを見直し・整理",
                    "チームでCLAUDE.mdとSkillsをバージョン管理"
                ],
                keyPoints_en: [
                    "Auto-generate Skills from conversation with /learn command",
                    "Record 'things not to do' in CLAUDE.md",
                    "Immediately convert success patterns to Skills",
                    "Regularly review and organize rules (e.g., weekly)",
                    "Version control CLAUDE.md and Skills with team"
                ],
                learningCycle: {
                    title: "継続学習サイクル",
                    steps: [
                        {
                            step: "1. 発見",
                            description: "効果的なプロンプトや、避けるべきパターンを発見",
                            example: "「このプロジェクトではPythonよりTypeScriptの方がうまくいく」"
                        },
                        {
                            step: "2. 記録",
                            description: "発見をCLAUDE.mdまたはSkillとして記録",
                            example: "CLAUDE.mdに「# 言語選択\\nTypeScriptを優先すること」を追加"
                        },
                        {
                            step: "3. 検証",
                            description: "次のセッションでルールが適用されるか確認",
                            example: "新しいセッションでTypeScriptが優先されることを確認"
                        },
                        {
                            step: "4. 改善",
                            description: "ルールを洗練し、不要なものは削除",
                            example: "例外ケースを追記、または過度に制限的なルールを緩和"
                        }
                    ]
                },
                recordingPatterns: [
                    {
                        type: "CLAUDE.md に記録するもの",
                        items: [
                            "プロジェクト固有の命名規則",
                            "使用禁止のライブラリ・パターン",
                            "必須のコーディングスタイル",
                            "テスト要件・カバレッジ目標",
                            "特定のファイル/フォルダへの制限"
                        ],
                        example: `# プロジェクトルール

## 命名規則
- コンポーネント: PascalCase
- 関数: camelCase
- 定数: SCREAMING_SNAKE_CASE

## 禁止事項
- moment.js は使用禁止（date-fnsを使う）
- any型は禁止

## テスト要件
- 新機能には必ずテストを追加
- カバレッジ80%以上を維持`
                    },
                    {
                        type: "Skill に記録するもの",
                        items: [
                            "繰り返し使うワークフロー",
                            "レビュー観点のチェックリスト",
                            "ドキュメント生成テンプレート",
                            "特定タスクの手順書"
                        ],
                        example: `---
name: deploy-checklist
description: デプロイ前チェックリスト
user-invocable: true
---

# デプロイ前チェックリスト

1. [ ] 全テストがパス
2. [ ] lint エラーなし
3. [ ] 環境変数の確認
4. [ ] マイグレーション確認
5. [ ] ロールバック手順の確認`
                    }
                ],
                learnCommand: {
                    title: "/learn コマンドの活用",
                    description: "会話中に効果的なパターンを見つけたら、/learn で自動的にSkill化できます。",
                    usage: [
                        { step: "1", action: "効果的なワークフローを実行" },
                        { step: "2", action: "/learn と入力" },
                        { step: "3", action: "Claudeが会話を分析してSkillを提案" },
                        { step: "4", action: "承認すると .claude/skills/ に保存" }
                    ]
                },
                teamSharing: {
                    title: "チームでの共有",
                    description: "CLAUDE.mdとSkillsをバージョン管理に含め、チーム全体で共有します。",
                    benefits: [
                        "新メンバーが即座にベストプラクティスを適用",
                        "チーム全体の品質基準を統一",
                        "学習がチーム資産として蓄積"
                    ],
                    gitignore: `# .gitignore の例
# 個人設定は除外、チーム共有は含める
.claude/settings.json  # 個人設定は除外
!.claude/skills/       # Skillsは共有
!CLAUDE.md             # プロジェクトルールは共有`
                },
                handson: {
                    title: "実践: 学習サイクルを回す",
                    goal: "効果的なパターンを発見し、Skill化して永続化する",
                    prerequisites: ["いくつかのハンズオンを完了していること"],
                    steps: [
                        {
                            step: 1,
                            action: "効果的だったパターンを振り返る",
                            prompt: "これまでのセッションで効果的だったプロンプトパターンを5つリストアップして。各パターンについて、なぜ効果的だったかも説明して",
                            expected: "効果的なパターンとその理由がリストアップされる"
                        },
                        {
                            step: 2,
                            action: "/learnでSkill化を試す",
                            prompt: "/learn",
                            expected: "Claudeが会話を分析してSkillを提案する"
                        },
                        {
                            step: 3,
                            action: "手動でSkillを作成",
                            prompt: ".claude/skills/my-workflow.md を作成して。内容は、効果的だったパターンをまとめたもので、次回から自動適用されるように",
                            expected: "カスタムSkillファイルが作成される"
                        },
                        {
                            step: 4,
                            action: "CLAUDE.mdにルールを追加",
                            prompt: "CLAUDE.md に「このプロジェクトで学んだ教訓」セクションを追加して",
                            expected: "プロジェクトルールが更新される"
                        },
                        {
                            step: 5,
                            action: "新しいセッションで確認",
                            prompt: "（新しいセッションを開始して、作成したSkillとCLAUDE.mdが読み込まれることを確認）",
                            expected: "次回セッションから学習内容が反映される"
                        }
                    ],
                    checkpoints: [
                        "効果的なパターンを言語化できた",
                        "Skillファイルとして永続化できた",
                        "CLAUDE.mdにルールを追加できた"
                    ],
                    files: {
                        created: [".claude/skills/my-workflow.md"],
                        modified: ["CLAUDE.md"]
                    }
                }
            }
        },
        {
            id: "03_03",
            time: "30分",
            time_en: "30 min",
            number: "03_03",
            title: "非技術者向け - コードを書かない使い方",
            title_en: "For Non-Developers - Using Without Code",
            description: "プログラミング知識なしでClaude Codeを活用。文書作成、分析、整理に。",
            description_en: "Use Claude Code without programming knowledge. For document creation, analysis, organization.",
            icon: "file-edit",
            tags: ["非技術者", "文書", "分析"],
            tags_en: ["Non-Developer", "Documents", "Analysis"],
            content: {
                summary: "Claude Codeはコーディングツールではなく「ローカルアシスタント」です。プログラミング知識がなくても、ファイル整理、レポート作成、データ分析、議事録処理など、日常業務の多くをAIに任せることができます。専門用語は不要、自然な日本語で依頼するだけです。",
                summary_en: "Claude Code is not just a coding tool but a 'local assistant.' Even without programming knowledge, you can delegate file organization, report creation, data analysis, meeting notes processing, and more to AI. No jargon needed - just request in natural language.",
                keyPoints: [
                    "「〜して」という自然な日本語で依頼できる",
                    "ファイル操作・整理を自動化",
                    "CSVやExcelのデータを分析・グラフ化",
                    "議事録から次のアクションを自動抽出",
                    "複数ファイルの一括処理も可能"
                ],
                keyPoints_en: [
                    "Request with natural language like 'please do...'",
                    "Automate file operations and organization",
                    "Analyze and chart CSV/Excel data",
                    "Auto-extract action items from meeting notes",
                    "Batch process multiple files"
                ],
                mindset: {
                    title: "非技術者向けマインドセット",
                    points: [
                        "専門用語を知らなくても大丈夫。やりたいことを日本語で伝えれば、Claudeが方法を考えます",
                        "「どうやって」ではなく「何をしたいか」を伝えましょう",
                        "うまくいかなければ言い換えて再度依頼すればOK",
                        "途中経過が理解できなくても、最終結果を確認すれば十分"
                    ]
                },
                useCaseCategories: [
                    {
                        category: "ファイル操作・整理",
                        examples: [
                            { task: "ファイルの一括リネーム", prompt: "このフォルダのファイル名を「日付_タイトル」形式に変更して" },
                            { task: "重複ファイルの検出", prompt: "このフォルダに重複しているファイルがあれば教えて" },
                            { task: "フォルダ整理", prompt: "ダウンロードフォルダを種類別（画像、PDF、音楽）に整理して" },
                            { task: "ファイル検索", prompt: "先週作成したExcelファイルを全部リストアップして" }
                        ]
                    },
                    {
                        category: "文書作成・編集",
                        examples: [
                            { task: "報告書作成", prompt: "このデータをもとに週次報告書を作成して" },
                            { task: "メール下書き", prompt: "この内容を丁寧なビジネスメールにして" },
                            { task: "議事録整形", prompt: "この走り書きメモを正式な議事録にまとめて" },
                            { task: "プレゼン骨子", prompt: "この企画書の内容をスライド用の箇条書きにして" }
                        ]
                    },
                    {
                        category: "データ分析・可視化",
                        examples: [
                            { task: "CSV分析", prompt: "このCSVファイルの売上推移を分析して、グラフも作って" },
                            { task: "アンケート集計", prompt: "このアンケート結果を集計して、傾向を教えて" },
                            { task: "比較表作成", prompt: "これらの製品を比較表にまとめて" },
                            { task: "統計サマリー", prompt: "このデータの平均、最大、最小を教えて" }
                        ]
                    },
                    {
                        category: "情報抽出・変換",
                        examples: [
                            { task: "アクション抽出", prompt: "この議事録から「誰が・いつまでに・何をする」を抽出して" },
                            { task: "翻訳", prompt: "この英語ドキュメントを日本語に翻訳して" },
                            { task: "要約", prompt: "この長いレポートを3行で要約して" },
                            { task: "形式変換", prompt: "このWordファイルをMarkdownに変換して" }
                        ]
                    }
                ],
                promptTemplates: [
                    {
                        name: "シンプル依頼",
                        template: "〜して",
                        example: "このフォルダのファイル一覧を見せて"
                    },
                    {
                        name: "形式指定",
                        template: "〜を○○形式で作って",
                        example: "この売上データを表形式でまとめて"
                    },
                    {
                        name: "条件付き",
                        template: "〜のうち、○○なものだけ〜して",
                        example: "このフォルダのうち、PDFファイルだけを別フォルダに移動して"
                    },
                    {
                        name: "複数処理",
                        template: "まず〜して、次に〜して",
                        example: "まずこのCSVを読んで、次に月別にグラフを作って"
                    }
                ],
                handson: {
                    title: "実践: コードを書かずにデータ分析",
                    goal: "プログラミング知識なしで、CSVデータの分析からレポート作成まで行う",
                    prerequisites: ["data/sales_2025.csv が存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "データの中身を確認",
                            prompt: "data/sales_2025.csv の中身を見せて。何のデータか説明して",
                            expected: "データの内容と各列の意味が説明される"
                        },
                        {
                            step: 2,
                            action: "簡単な集計を依頼",
                            prompt: "このデータの合計金額を教えて",
                            expected: "売上合計が計算されて表示される"
                        },
                        {
                            step: 3,
                            action: "グラフ化を依頼",
                            prompt: "月別の売上をグラフにして、reports/monthly_chart.png として保存して",
                            expected: "グラフ画像が生成・保存される"
                        },
                        {
                            step: 4,
                            action: "レポート作成を依頼",
                            prompt: "ここまでの分析結果を、上司に報告するレポートとしてまとめて。専門用語は使わないで",
                            expected: "ビジネス向けのわかりやすいレポートが作成される"
                        },
                        {
                            step: 5,
                            action: "メール形式で出力",
                            prompt: "このレポートをメール本文として送れる形に整えて",
                            expected: "メール形式に整形されて出力される"
                        }
                    ],
                    checkpoints: [
                        "プログラミング用語を使わずに依頼できた",
                        "データ分析からグラフ作成まで実行できた",
                        "ビジネス向けレポートを生成できた"
                    ],
                    files: {
                        created: ["reports/monthly_chart.png", "reports/sales_report.md"]
                    }
                }
            }
        },
        {
            id: "03_04",
            time: "40分",
            time_en: "40 min",
            number: "03_04",
            title: "50の非コーディング活用例",
            title_en: "50 Non-Coding Use Cases",
            description: "実際に使える50のユースケース。日常業務から創作活動まで。",
            description_en: "50 practical use cases from daily work to creative activities.",
            icon: "list",
            tags: ["ユースケース", "活用例", "実践"],
            tags_en: ["Use Cases", "Examples", "Practical"],
            content: {
                summary: "Claude Codeの活用範囲はコーディングだけではありません。日常業務、創作活動、学習、調査など、あらゆる場面で活用できます。ここでは実際に使える50のユースケースを10カテゴリに分けて紹介します。",
                summary_en: "Claude Code's capabilities extend far beyond coding. It can be utilized in daily work, creative activities, learning, research, and many other scenarios. Here we present 50 practical use cases organized into 10 categories.",
                keyPoints: [
                    "資料作成: プレゼン、レポート、提案書、マニュアル",
                    "情報整理: ファイル、ブックマーク、メモ、連絡先",
                    "分析: 売上、アンケート、ログ、市場調査",
                    "創作: 記事、小説、脚本、企画",
                    "学習: 要約、翻訳、解説、問題作成"
                ],
                keyPoints_en: [
                    "Document Creation: Presentations, reports, proposals, manuals",
                    "Information Organization: Files, bookmarks, notes, contacts",
                    "Analysis: Sales, surveys, logs, market research",
                    "Creative Work: Articles, novels, scripts, planning",
                    "Learning: Summaries, translations, explanations, quizzes"
                ],
                categories: [
                    {
                        name: "📊 データ分析・レポート",
                        examples: [
                            "売上CSVを分析してグラフ付きレポートを作成",
                            "アンケート結果を集計してクロス分析",
                            "ログファイルからエラー傾向を抽出",
                            "競合製品の価格表を比較分析",
                            "Webアクセスログからユーザー行動を分析"
                        ]
                    },
                    {
                        name: "📝 文書作成・編集",
                        examples: [
                            "議事録から次のアクションを抽出してToDo化",
                            "走り書きメモを正式なドキュメントに整形",
                            "プレゼン資料の骨子を箇条書きで作成",
                            "製品マニュアルのドラフトを作成",
                            "FAQ集を質問・回答形式で整理"
                        ]
                    },
                    {
                        name: "📧 コミュニケーション",
                        examples: [
                            "報告書をメール用に3行で要約",
                            "クレーム対応メールの丁寧な返信文を作成",
                            "英語メールを日本語に翻訳して返信案を作成",
                            "社内通知のお知らせ文を作成",
                            "複数の連絡先をBCCリストに整形"
                        ]
                    },
                    {
                        name: "📁 ファイル・フォルダ管理",
                        examples: [
                            "散らばったファイルを種類別にフォルダ分け",
                            "ファイル名を「日付_タイトル」形式に一括リネーム",
                            "重複ファイルを検出してリストアップ",
                            "1ヶ月以上更新のないファイルをアーカイブ",
                            "スクリーンショットを日付別フォルダに整理"
                        ]
                    },
                    {
                        name: "🔍 調査・リサーチ",
                        examples: [
                            "競合サービスの機能比較表を作成",
                            "業界レポートから重要ポイントを抽出",
                            "特許文書から技術要素をリストアップ",
                            "法改正のポイントをQ&A形式でまとめ",
                            "論文のアブストラクトを平易な日本語で解説"
                        ]
                    },
                    {
                        name: "📚 学習・教育",
                        examples: [
                            "専門書の内容を初心者向けに要約",
                            "英語ドキュメントを日本語に翻訳",
                            "学習内容から確認テストの問題を作成",
                            "難しい概念をたとえ話で説明",
                            "勉強ノートをフラッシュカード形式に変換"
                        ]
                    },
                    {
                        name: "✍️ 創作・コンテンツ",
                        examples: [
                            "ブログ記事のアウトラインを作成",
                            "SNS投稿用にキャッチーな文章を作成",
                            "製品紹介のキャッチコピー案を10個作成",
                            "社内報の記事ネタをブレインストーミング",
                            "イベント告知文のドラフトを作成"
                        ]
                    },
                    {
                        name: "📅 スケジュール・タスク管理",
                        examples: [
                            "複数の予定を時系列で整理",
                            "プロジェクトのマイルストーンをガントチャート風に",
                            "会議の決定事項から担当者別タスクリストを作成",
                            "来週の予定を優先度順に並べ替え",
                            "定期タスクのリマインダーリストを作成"
                        ]
                    },
                    {
                        name: "🔄 形式変換・整形",
                        examples: [
                            "ExcelデータをMarkdownテーブルに変換",
                            "名刺情報をCSV形式に整形",
                            "JSONデータを見やすい表形式に変換",
                            "複数のテキストファイルを1つに結合",
                            "HTMLをプレーンテキストに変換"
                        ]
                    },
                    {
                        name: "🎯 その他の便利活用",
                        examples: [
                            "領収書の内容をまとめて経費精算表を作成",
                            "商品レビューから評価ポイントを抽出",
                            "契約書の重要条項をハイライト",
                            "自己紹介文を場面に合わせて複数パターン作成",
                            "引っ越しチェックリストを作成"
                        ]
                    }
                ],
                handson: {
                    title: "実践: 3つのユースケースを試す",
                    goal: "実際に非コーディング活用を体験し、日常業務での活用イメージを掴む",
                    prerequisites: ["任意のフォルダで作業可能"],
                    steps: [
                        {
                            step: 1,
                            action: "ファイル整理を試す",
                            prompt: "このフォルダにあるファイルを、拡張子別にサブフォルダに整理して。まず現状を見せてから、整理計画を提案して",
                            expected: "ファイル一覧が表示され、整理計画が提案される"
                        },
                        {
                            step: 2,
                            action: "議事録処理を試す",
                            prompt: "以下の議事録メモからアクションアイテムを抽出して、担当者・期限・タスク内容の表形式でまとめて:\n\n---\n今日の会議で決まったこと\n・田中さんが来週までにデザイン案を出す\n・佐藤さんは見積もりを金曜日までに\n・鈴木さんがテスト環境を今週中に準備\n・次回会議は来月1日の10時から\n---",
                            expected: "担当者・期限・タスク内容の表が生成される"
                        },
                        {
                            step: 3,
                            action: "レポート作成を試す",
                            prompt: "以下のデータから、上司向けの簡潔な報告書（A4半分程度）を作成して:\n\n今月の成果:\n- 新規顧客: 15社\n- 売上: 1,200万円（目標比105%）\n- クレーム: 2件（先月比-3件）\n- 新サービス: 来月リリース予定で順調",
                            expected: "ビジネス向けの整形された報告書が生成される"
                        }
                    ],
                    checkpoints: [
                        "ファイル整理の自動化を体験できた",
                        "議事録からの情報抽出を体験できた",
                        "自然な日本語でレポート作成を依頼できた"
                    ]
                }
            }
        },
        {
            id: "03_05",
            time: "45分",
            time_en: "45 min",
            number: "03_05",
            title: "Writer/Reviewerパターン",
            title_en: "Writer/Reviewer Pattern",
            description: "並列セッションで実装とレビューを分離。品質と速度を両立する高度なワークフロー。",
            description_en: "Separate implementation and review across parallel sessions. Advanced workflow balancing quality and speed.",
            icon: "git-fork",
            tags: ["並列", "品質", "レビュー", "上級"],
            tags_en: ["Parallel", "Quality", "Review", "Advanced"],
            content: {
                summary: "Writer/Reviewerパターンは、1つのセッションで実装（Writer）し、別のセッションでレビュー（Reviewer）する手法です。新鮮なコンテキストでレビューすることで、実装者のバイアスを排除し、品質を大幅に向上させます。",
                summary_en: "Writer/Reviewer pattern implements in one session (Writer) and reviews in another (Reviewer). Fresh context for review eliminates implementer bias, significantly improving quality.",
                keyPoints: [
                    "Writerセッション: 実装に集中、コードを書く",
                    "Reviewerセッション: 新鮮な目でレビュー、バイアスなし",
                    "並列実行で時間効率も向上",
                    "テスト作成にも応用可能（実装者 vs テスト作成者）"
                ],
                keyPoints_en: [
                    "Writer session: Focus on implementation, write code",
                    "Reviewer session: Fresh perspective review, no bias",
                    "Parallel execution improves time efficiency",
                    "Also applicable to test creation (implementer vs test creator)"
                ],
                workflow: {
                    title: "Writer/Reviewerワークフロー",
                    steps: [
                        { role: "Writer", action: "機能を実装する", session: "セッションA" },
                        { role: "Reviewer", action: "実装をレビューする（別セッション）", session: "セッションB" },
                        { role: "Writer", action: "レビューフィードバックを反映", session: "セッションA" },
                        { role: "Reviewer", action: "修正を確認", session: "セッションB" }
                    ]
                },
                variants: [
                    {
                        name: "テスト分離パターン",
                        description: "Writerがテストを書き、Reviewerがコードを書く（TDD逆転）",
                        useCase: "テストの網羅性を高めたい場合"
                    },
                    {
                        name: "ドキュメント分離パターン",
                        description: "Writerがコードを書き、Reviewerがドキュメントを書く",
                        useCase: "ドキュメントの客観性を確保したい場合"
                    }
                ],
                handson: {
                    title: "Writer/Reviewerパターンを実践する",
                    goal: "2つのセッションを使って実装とレビューを分離する",
                    prerequisites: ["複数のターミナルタブまたはウィンドウを開ける環境"],
                    steps: [
                        {
                            step: 1,
                            action: "Writerセッションで実装",
                            prompt: "簡単なユーティリティ関数（例：日付フォーマット関数）を実装して",
                            expected: "関数が実装される"
                        },
                        {
                            step: 2,
                            action: "別タブでReviewerセッションを開始",
                            prompt: "/clear して新しいセッションを開始。@src/utils.ts のdateFormat関数をレビューして。セキュリティ、エッジケース、パフォーマンスの観点で",
                            expected: "新鮮な視点でレビューが行われる"
                        },
                        {
                            step: 3,
                            action: "Writerセッションでフィードバック反映",
                            prompt: "レビューで指摘された点を修正して",
                            expected: "修正が反映される"
                        }
                    ],
                    checkpoints: [
                        "Reviewerセッションが実装の文脈に影響されていない",
                        "新鮮な視点で問題点が発見された"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    patterns: [
                        { name: "3セッション分離", description: "実装・テスト・レビューを3つのセッションで完全分離", example: "大規模機能開発時に有効" },
                        { name: "非同期レビュー", description: "Writerが次の機能に進む間にReviewerがレビュー", example: "開発速度を落とさずに品質確保" }
                    ],
                    realWorldExamples: [
                        { scenario: "PR作成前の事前レビュー", solution: "Reviewerセッションでセルフレビューしてからコミット", tips: "人間レビューの負荷を軽減" }
                    ],
                    pitfalls: ["セッション間でファイルの同期が必要", "同じファイルを同時編集しないよう注意"]
                },
                nextSteps: {
                    recommended: ["03_06", "03_07"],
                    optional: ["02_08"],
                    reason: "並列化戦略をさらに深めるために"
                }
            }
        },
        {
            id: "03_06",
            time: "45分",
            time_en: "45 min",
            number: "03_06",
            title: "Fan-outパターン（バッチ処理）",
            title_en: "Fan-out Pattern (Batch Processing)",
            description: "複数ファイルへの一括処理。ヘッドレスモードで大規模マイグレーションを自動化。",
            description_en: "Batch processing multiple files. Automate large-scale migrations with headless mode.",
            icon: "layers",
            tags: ["バッチ", "ヘッドレス", "マイグレーション", "上級"],
            tags_en: ["Batch", "Headless", "Migration", "Advanced"],
            content: {
                summary: "Fan-outパターンは、多数のファイルに対して同じ処理を並列で適用する手法です。ヘッドレスモード（claude -p）を使い、シェルスクリプトやCIパイプラインから一括実行します。大規模なコードベースのマイグレーション、リファクタリング、フォーマット統一などに威力を発揮します。",
                summary_en: "The Fan-out pattern applies the same process to many files in parallel. Using headless mode (claude -p), execute batch processing from shell scripts or CI pipelines. Powerful for large-scale codebase migrations, refactoring, and format standardization.",
                keyPoints: [
                    "claude -p \"prompt\" でヘッドレス実行",
                    "forループで複数ファイルに適用",
                    "--allowedTools で権限を制限",
                    "--output-format json で結果を構造化"
                ],
                keyPoints_en: [
                    "Headless execution with claude -p \"prompt\"",
                    "Apply to multiple files with for loop",
                    "Restrict permissions with --allowedTools",
                    "Structure results with --output-format json"
                ],
                code: `# Fan-outパターンの基本形
for file in $(find src -name "*.ts"); do
  claude -p "Migrate $file from CommonJS to ES modules. Return OK or FAIL." \\
    --allowedTools "Edit,Bash(npm run lint)" \\
    --output-format json
done`,
                useCases: [
                    { name: "大規模マイグレーション", name_en: "Large-scale Migration", description: "2000ファイルのモジュール形式変更", description_en: "Module format conversion for 2000 files", example: "CommonJS → ES Modules", example_en: "CommonJS → ES Modules" },
                    { name: "コードフォーマット統一", name_en: "Code Format Standardization", description: "全ファイルにフォーマットルールを適用", description_en: "Apply formatting rules to all files", example: "Prettier設定の一括適用", example_en: "Batch Prettier configuration" },
                    { name: "ドキュメント自動生成", name_en: "Auto Documentation", description: "各ファイルにJSDocを追加", description_en: "Add JSDoc to each file", example: "型定義からドキュメント生成", example_en: "Generate docs from type definitions" },
                    { name: "セキュリティ監査", name_en: "Security Audit", description: "全ファイルの脆弱性チェック", description_en: "Vulnerability check for all files", example: "SQLインジェクションパターンの検出", example_en: "SQL injection pattern detection" }
                ],
                handson: {
                    title: "ヘッドレスモードでバッチ処理を実行",
                    title_en: "Execute Batch Processing in Headless Mode",
                    goal: "複数のファイルに対して一括でコメントを追加する",
                    goal_en: "Add comments to multiple files at once",
                    prerequisites: ["ターミナルでclaude -pが実行可能"],
                    prerequisites_en: ["claude -p executable in terminal"],
                    steps: [
                        {
                            step: 1,
                            action: "対象ファイルをリストアップ",
                            action_en: "List target files",
                            prompt: "scripts/フォルダ内の.pyファイルを全てリストアップして",
                            prompt_en: "List all .py files in the scripts/ folder",
                            expected: "対象ファイルの一覧が表示される",
                            expected_en: "List of target files is displayed"
                        },
                        {
                            step: 2,
                            action: "1ファイルで動作確認",
                            action_en: "Verify with one file",
                            prompt: "claude -p \"Add a docstring to the main function in scripts/sample.py\"",
                            prompt_en: "claude -p \"Add a docstring to the main function in scripts/sample.py\"",
                            expected: "docstringが追加される",
                            expected_en: "Docstring is added"
                        },
                        {
                            step: 3,
                            action: "バッチ処理スクリプトを作成",
                            action_en: "Create batch processing script",
                            prompt: "以下のシェルスクリプトを作成して：全ての.pyファイルにdocstringを追加するバッチ処理",
                            prompt_en: "Create the following shell script: batch processing to add docstrings to all .py files",
                            expected: "バッチ処理スクリプトが作成される",
                            expected_en: "Batch processing script is created"
                        }
                    ],
                    checkpoints: [
                        "ヘッドレスモードの基本構文を理解した",
                        "--allowedToolsで権限を制限できる",
                        "ループで複数ファイルを処理できる"
                    ],
                    checkpoints_en: [
                        "Understood headless mode basic syntax",
                        "Can restrict permissions with --allowedTools",
                        "Can process multiple files with loops"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    title_en: "Advanced Applications",
                    patterns: [
                        { name: "並列実行", name_en: "Parallel Execution", description: "xargsやGNU parallelで並列処理", description_en: "Parallel processing with xargs or GNU parallel", example: "find . -name '*.py' | xargs -P 4 -I {} claude -p '...'" },
                        { name: "エラーハンドリング", name_en: "Error Handling", description: "失敗したファイルをログに記録して後で再処理", description_en: "Log failed files for later reprocessing", example: "|| echo $file >> failed.txt" }
                    ],
                    realWorldExamples: [
                        { scenario: "レガシーコードのモダナイズ", scenario_en: "Modernizing Legacy Code", solution: "段階的にファイルを変換、テストで検証", solution_en: "Convert files incrementally, verify with tests", tips: "まず10ファイルでテスト、問題なければ全体に適用", tips_en: "Test with 10 files first, apply to all if no issues" }
                    ],
                    pitfalls: ["一度に大量のファイルを処理するとAPI制限に達する可能性", "必ず少数でテストしてから全体実行"],
                    pitfalls_en: ["Processing too many files at once may hit API limits", "Always test with a few files before full execution"]
                },
                nextSteps: {
                    recommended: ["03_08", "03_07"],
                    optional: ["02_08"],
                    reason: "CI/CD統合でさらに自動化を進めるために",
                    reason_en: "To further advance automation with CI/CD integration"
                }
            }
        },
        {
            id: "03_07",
            time: "50分",
            time_en: "50 min",
            number: "03_07",
            title: "Subagents活用パターン",
            title_en: "Advanced Subagent Patterns",
            description: "調査委譲、専門エージェント設計。コンテキストを汚さずに複雑なタスクを分割。",
            description_en: "Research delegation, specialized agent design. Split complex tasks without polluting context.",
            icon: "users",
            tags: ["Subagents", "委譲", "専門化", "上級"],
            tags_en: ["Subagents", "Delegation", "Specialization", "Advanced"],
            content: {
                summary: "Subagentsは、特定のタスクを専門のエージェントに委譲する仕組みです。メインセッションのコンテキストを汚さずに、大規模な探索や専門的なレビューを実行できます。セキュリティレビュー、アーキテクチャ分析、コード品質チェックなど、専門性の高いタスクに最適です。",
                summary_en: "Subagents are a mechanism to delegate specific tasks to specialized agents. Execute large-scale exploration and specialized reviews without polluting the main session context. Ideal for highly specialized tasks like security reviews, architecture analysis, and code quality checks.",
                keyPoints: [
                    "サブエージェントは独立したコンテキストで動作",
                    "結果のみがメインセッションに返される（コンテキスト節約）",
                    "専門性を持たせることで精度向上",
                    "並列実行で時間短縮"
                ],
                keyPoints_en: [
                    "Subagents operate in independent context",
                    "Only results are returned to main session (saves context)",
                    "Specialization improves accuracy",
                    "Parallel execution reduces time"
                ],
                agentDesign: {
                    title: "効果的なサブエージェント設計",
                    title_en: "Effective Subagent Design",
                    principles: [
                        "単一責任: 1つのサブエージェントに1つの専門分野",
                        "最小権限: 必要なツールのみを許可",
                        "明確な出力: 期待する出力形式を定義",
                        "適切なモデル: 軽量タスクにはhaiku、複雑なタスクにはopus"
                    ],
                    principles_en: [
                        "Single Responsibility: One specialty per subagent",
                        "Least Privilege: Only allow necessary tools",
                        "Clear Output: Define expected output format",
                        "Appropriate Model: haiku for light tasks, opus for complex ones"
                    ]
                },
                templates: [
                    {
                        name: "security-reviewer",
                        description: "セキュリティ脆弱性を検出",
                        description_en: "Detect security vulnerabilities",
                        config: `---
name: security-reviewer
description: コードのセキュリティ脆弱性を検出
tools: [Read, Grep, Glob]
model: opus
---
以下の観点でコードをレビュー:
- SQLインジェクション
- XSS脆弱性
- 認証・認可の不備
- 機密情報のハードコード`,
                        config_en: `---
name: security-reviewer
description: Detect code security vulnerabilities
tools: [Read, Grep, Glob]
model: opus
---
Review code for:
- SQL injection
- XSS vulnerabilities
- Authentication/authorization flaws
- Hardcoded secrets`
                    },
                    {
                        name: "architecture-analyzer",
                        description: "アーキテクチャの問題を分析",
                        description_en: "Analyze architecture issues",
                        config: `---
name: architecture-analyzer
description: アーキテクチャの問題点を分析
tools: [Read, Grep, Glob]
model: sonnet
---
以下の観点で分析:
- 循環依存
- レイヤー違反
- 責務の分離`,
                        config_en: `---
name: architecture-analyzer
description: Analyze architecture issues
tools: [Read, Grep, Glob]
model: sonnet
---
Analyze for:
- Circular dependencies
- Layer violations
- Separation of concerns`
                    },
                    {
                        name: "test-generator",
                        description: "テストケースを自動生成",
                        description_en: "Auto-generate test cases",
                        config: `---
name: test-generator
description: 関数からテストケースを生成
tools: [Read, Write, Bash]
model: sonnet
---
以下のパターンでテストを生成:
- 正常系
- 境界値
- 異常系`,
                        config_en: `---
name: test-generator
description: Generate test cases from functions
tools: [Read, Write, Bash]
model: sonnet
---
Generate tests for:
- Happy path
- Boundary values
- Error cases`
                    }
                ],
                handson: {
                    title: "専門サブエージェントを設計・活用する",
                    title_en: "Design and Use Specialized Subagents",
                    goal: "セキュリティレビュー用のサブエージェントを作成し、実際にレビューを実行",
                    goal_en: "Create a security review subagent and execute an actual review",
                    prerequisites: [".claude/agents/フォルダが作成可能"],
                    prerequisites_en: [".claude/agents/ folder can be created"],
                    steps: [
                        {
                            step: 1,
                            action: "サブエージェントを定義",
                            action_en: "Define subagent",
                            prompt: ".claude/agents/security-reviewer.md を作成して。内容はセキュリティ脆弱性を検出する専門エージェント。",
                            prompt_en: "Create .claude/agents/security-reviewer.md as a specialized agent for detecting security vulnerabilities.",
                            expected: "サブエージェント定義ファイルが作成される",
                            expected_en: "Subagent definition file is created"
                        },
                        {
                            step: 2,
                            action: "サブエージェントを呼び出し",
                            action_en: "Invoke subagent",
                            prompt: "サブエージェント security-reviewer を使って、src/フォルダのコードをセキュリティレビューして",
                            prompt_en: "Use the security-reviewer subagent to perform a security review of the src/ folder code",
                            expected: "サブエージェントが起動し、レビュー結果が返される",
                            expected_en: "Subagent launches and returns review results"
                        },
                        {
                            step: 3,
                            action: "結果を確認",
                            action_en: "Check results",
                            prompt: "レビュー結果の重要な指摘事項をまとめて",
                            prompt_en: "Summarize the important findings from the review results",
                            expected: "メインセッションのコンテキストを使わずにレビュー結果が得られた",
                            expected_en: "Review results obtained without using main session context"
                        }
                    ],
                    checkpoints: [
                        "サブエージェントがメインコンテキストを消費していない",
                        "専門的なレビューが実行された",
                        "結果がサマリとして返された"
                    ],
                    checkpoints_en: [
                        "Subagent did not consume main context",
                        "Specialized review was executed",
                        "Results returned as summary"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    title_en: "Advanced Applications",
                    patterns: [
                        { name: "Planner-Executor分離", name_en: "Planner-Executor Separation", description: "計画を立てるエージェントと実行するエージェントを分離", description_en: "Separate planning agent from executing agent", example: "大規模リファクタリングの計画と実行", example_en: "Planning and execution of large-scale refactoring" },
                        { name: "レビューチェーン", name_en: "Review Chain", description: "複数の専門エージェントが順番にレビュー", description_en: "Multiple specialized agents review in sequence", example: "セキュリティ→パフォーマンス→可読性の順でレビュー", example_en: "Review in order: security → performance → readability" }
                    ],
                    realWorldExamples: [
                        { scenario: "PRレビュー自動化", scenario_en: "Automated PR Review", solution: "複数のサブエージェントで多角的にレビュー", solution_en: "Multi-faceted review with multiple subagents", tips: "重要度でエージェントを選択", tips_en: "Select agents based on priority" }
                    ],
                    pitfalls: ["サブエージェントが多すぎるとオーバーヘッドになる", "適切な粒度でタスクを分割"],
                    pitfalls_en: ["Too many subagents creates overhead", "Split tasks with appropriate granularity"]
                },
                nextSteps: {
                    recommended: ["02_03", "03_05"],
                    optional: ["03_08"],
                    reason: "サブエージェントの基本を深く理解するために",
                    reason_en: "To deeply understand subagent fundamentals"
                }
            }
        },
        {
            id: "03_08",
            time: "50分",
            time_en: "50 min",
            number: "03_08",
            title: "Headless CI/CD統合",
            title_en: "Headless CI/CD Integration",
            description: "GitHub Actionsとの統合。自動テスト、コードレビュー、デプロイパイプラインの構築。",
            description_en: "Integration with GitHub Actions. Build automated testing, code review, and deployment pipelines.",
            icon: "terminal",
            tags: ["CI/CD", "GitHub Actions", "自動化", "上級"],
            tags_en: ["CI/CD", "GitHub Actions", "Automation", "Advanced"],
            content: {
                summary: "Claude Codeはヘッドレスモード（claude -p）でCI/CDパイプラインに統合できます。PRごとの自動コードレビュー、テスト生成、ドキュメント更新など、開発ワークフローを大幅に自動化できます。GitHub Actionsとの連携で、人間の介入なしに品質を担保します。",
                summary_en: "Claude Code can be integrated into CI/CD pipelines using headless mode (claude -p). Significantly automate development workflows including automatic code review per PR, test generation, and documentation updates. Integration with GitHub Actions ensures quality without human intervention.",
                keyPoints: [
                    "claude -p でCI/CDパイプラインから実行",
                    "GitHub Actionsワークフローに組み込み",
                    "PRごとに自動レビュー・テスト生成",
                    "環境変数でAPIキーを安全に管理"
                ],
                keyPoints_en: [
                    "Execute from CI/CD pipelines with claude -p",
                    "Embed in GitHub Actions workflows",
                    "Automatic review and test generation per PR",
                    "Safely manage API keys with environment variables"
                ],
                githubActionsExample: {
                    title: "GitHub Actions設定例",
                    title_en: "GitHub Actions Configuration Example",
                    code: `name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code
      - name: Review PR
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          git diff origin/main...HEAD > changes.diff
          claude -p "Review the following diff for security, performance, and code quality issues. Output in markdown." < changes.diff > review.md
      - name: Post Review Comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('review.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: review
            });`
                },
                useCases: [
                    { name: "自動コードレビュー", name_en: "Automated Code Review", description: "PRごとにセキュリティ・品質チェック", description_en: "Security and quality check per PR", trigger: "pull_request" },
                    { name: "テスト自動生成", name_en: "Auto Test Generation", description: "新しいコードに対してテストを自動生成", description_en: "Automatically generate tests for new code", trigger: "push" },
                    { name: "ドキュメント更新", name_en: "Documentation Update", description: "APIの変更に合わせてドキュメントを自動更新", description_en: "Auto-update docs with API changes", trigger: "push to main" },
                    { name: "依存関係監査", name_en: "Dependency Audit", description: "依存関係の脆弱性をチェック", description_en: "Check dependencies for vulnerabilities", trigger: "schedule (weekly)" }
                ],
                handson: {
                    title: "GitHub Actionsでの自動レビューを設定",
                    title_en: "Set Up Automated Review with GitHub Actions",
                    goal: "PRに対して自動でコードレビューを実行するワークフローを作成",
                    goal_en: "Create a workflow that automatically runs code review on PRs",
                    prerequisites: ["GitHubリポジトリがある", "ANTHROPIC_API_KEYをSecretsに設定済み"],
                    prerequisites_en: ["Have a GitHub repository", "ANTHROPIC_API_KEY configured in Secrets"],
                    steps: [
                        {
                            step: 1,
                            action: "ワークフローファイルを作成",
                            action_en: "Create workflow file",
                            prompt: ".github/workflows/claude-review.yml を作成して。PRに対してClaude Codeでレビューを実行する内容で",
                            prompt_en: "Create .github/workflows/claude-review.yml to run Claude Code review on PRs",
                            expected: "GitHub Actionsワークフローファイルが作成される",
                            expected_en: "GitHub Actions workflow file is created"
                        },
                        {
                            step: 2,
                            action: "ローカルでテスト",
                            action_en: "Test locally",
                            prompt: "ワークフローの核となるclaude -pコマンドをローカルでテスト実行して",
                            prompt_en: "Test run the core claude -p command locally",
                            expected: "コマンドが正しく動作することを確認",
                            expected_en: "Confirm the command works correctly"
                        },
                        {
                            step: 3,
                            action: "PRを作成してテスト",
                            action_en: "Create PR and test",
                            prompt: "テスト用のPRを作成して、ワークフローが実行されることを確認する手順を説明して",
                            prompt_en: "Create a test PR and explain the steps to verify the workflow runs",
                            expected: "テスト手順が説明される",
                            expected_en: "Test procedure is explained"
                        }
                    ],
                    checkpoints: [
                        "ワークフローファイルの構造を理解した",
                        "Secretsでの環境変数管理を理解した",
                        "claude -pの出力をGitHubコメントに投稿する方法を理解した"
                    ],
                    checkpoints_en: [
                        "Understood workflow file structure",
                        "Understood environment variable management with Secrets",
                        "Understood how to post claude -p output as GitHub comments"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    title_en: "Advanced Applications",
                    patterns: [
                        { name: "条件付きレビュー", name_en: "Conditional Review", description: "変更ファイルに応じてレビュー内容を変更", description_en: "Change review content based on modified files", example: "セキュリティ関連ファイルのみ詳細レビュー", example_en: "Detailed review only for security-related files" },
                        { name: "ステージング環境テスト", name_en: "Staging Environment Tests", description: "デプロイ後に自動でE2Eテスト", description_en: "Auto E2E testing after deployment", example: "claude -pでテストシナリオを生成・実行", example_en: "Generate and execute test scenarios with claude -p" }
                    ],
                    realWorldExamples: [
                        { scenario: "週次依存関係監査", scenario_en: "Weekly Dependency Audit", solution: "スケジュール実行で依存関係の脆弱性をチェック", solution_en: "Check dependency vulnerabilities on schedule", tips: "結果をSlackに通知", tips_en: "Notify results to Slack" }
                    ],
                    pitfalls: ["APIキーの漏洩に注意（必ずSecretsを使用）", "実行時間とAPI使用量のモニタリング"],
                    pitfalls_en: ["Beware of API key leaks (always use Secrets)", "Monitor execution time and API usage"]
                },
                nextSteps: {
                    recommended: ["03_06", "02_05"],
                    optional: ["02_02"],
                    reason: "自動化をさらに発展させるために",
                    reason_en: "To further advance automation"
                }
            }
        },
        {
            id: "03_09",
            time: "55分",
            time_en: "55 min",
            number: "03_09",
            title: "Agent Teams - 複数エージェントの協働",
            title_en: "Agent Teams - Multi-Agent Collaboration",
            description: "複数のClaude Codeセッションがチームとして協働し、1セッションがリーダーとしてタスクを統合する。",
            description_en: "Multiple Claude Code sessions collaborate as a team, with one session leading and integrating tasks.",
            icon: "users",
            tags: ["Agent Teams", "並列", "実験的"],
            tags_en: ["Agent Teams", "Parallel", "Experimental"],
            content: {
                summary: "Agent TeamsはOpus 4.6と同時期に導入され、Opus 4.7（2026/4）の登場以降は本機能の主戦力モデルとなった。複数のClaude Codeセッションがチームとして協働し、1セッションがチームリーダーとしてタスクの割り振り・結果の統合を行い、他のメンバーは独立したコンテキストウィンドウで専門作業を行う。リードエージェントがスタイル・セキュリティ・パフォーマンスのレビュー用サブエージェントをオーケストレーションするパターンが典型的で、2026年4月にはこのオーケストレーションをクラウドで自動化する /ultrareview コマンドも追加された。トークン消費は3倍になるが、専門家による特化レビューの品質はジェネラリスト単体を上回る。",
                summary_en: "Agent Teams was introduced alongside Opus 4.6, and Opus 4.7 (2026/4) became the main driver afterward. Multiple Claude Code sessions collaborate as a team, with one leader orchestrating task delegation and result integration while members work independently with their own context windows. April 2026 also added /ultrareview, which automates this orchestration in the cloud. Token consumption triples but specialized review quality exceeds a single generalist.",
                keyPoints: [
                    "1セッションがリーダー、他がメンバーとして協働",
                    "各メンバーは独立したコンテキストウィンドウで作業",
                    "典型パターン: リーダーがスタイル/セキュリティ/パフォーマンスの各専門エージェントに委譲",
                    "トークン消費は約3倍だが、品質は単体を上回る",
                    "Opus 5 / Fable 5 で最も効果的（xhigh effort + 1Mコンテキストが活きる）",
                    "/ultrareviewでクラウドベースの並列レビューを最小コストで自動化"
                ],
                keyPoints_en: [
                    "One session leads, others collaborate as members",
                    "Each member works with independent context window",
                    "Typical: Leader delegates to style/security/performance specialist agents",
                    "~3x token consumption but quality exceeds single agent",
                    "Most effective with Opus 5 / Fable 5 (xhigh effort + 1M context shines)",
                    "/ultrareview automates cloud-based parallel reviews at minimal cost"
                ],
                handson: {
                    title: "マルチエージェント構成を試す",
                    title_en: "Try Multi-Agent Configuration",
                    goal: "サブエージェントを活用して並列レビューを実行する",
                    goal_en: "Use subagents to execute parallel reviews",
                    prerequisites: ["プロジェクトにレビュー対象のコードがある"],
                    prerequisites_en: ["Project has code to review"],
                    steps: [
                        {
                            step: 1,
                            action: "並列レビューを依頼",
                            action_en: "Request parallel review",
                            prompt: "src/ のコードを3つの観点で並列レビューして: (1)コードスタイル (2)セキュリティ (3)パフォーマンス。それぞれサブエージェントに委譲して、結果を統合して。",
                            prompt_en: "Review src/ code from 3 perspectives in parallel: (1)Code style (2)Security (3)Performance. Delegate each to a subagent and consolidate results.",
                            expected: "3つのサブエージェントが並列で起動し、それぞれの観点でレビューを行う",
                            expected_en: "3 subagents launch in parallel, each reviewing from their perspective"
                        }
                    ],
                    checkpoints: [
                        "並列サブエージェントが起動した",
                        "各専門観点からのレビューが統合された"
                    ],
                    checkpoints_en: [
                        "Parallel subagents were launched",
                        "Reviews from each specialist perspective were consolidated"
                    ]
                }
            }
        },
        {
            id: "03_10",
            time: "60分",
            time_en: "60 min",
            number: "03_10",
            title: "Agent SDK - 独自エージェント構築",
            title_en: "Agent SDK - Build Custom Agents",
            description: "Claude Agent SDK（Python/TypeScript）でClaude Codeの基盤を活用した独自エージェントを構築する。",
            description_en: "Build custom agents leveraging Claude Code's foundation with Claude Agent SDK (Python/TypeScript).",
            icon: "package",
            tags: ["Agent SDK", "Python", "TypeScript"],
            tags_en: ["Agent SDK", "Python", "TypeScript"],
            content: {
                summary: "Claude Agent SDKは、Claude Codeを動かしている基盤をライブラリとして外部公開したもの。2026年5月時点で月次マイナーリリースが続いており、Adaptive Thinking・1h prompt caching・Batch API 300k出力など、最新APIフィーチャーへSDK経由で先行アクセスできる。サブエージェントは独自のコンテキストウィンドウ、カスタムシステムプロンプト、ツールアクセス権、独立した権限を持つ。.claude/agents/ にカスタムエージェント定義を配置できる。",
                summary_en: "Claude Agent SDK publicly exposes the foundation powering Claude Code as a library. As of May 2026, monthly minor releases continue, exposing the latest API features (Adaptive Thinking, 1h prompt caching, Batch API 300k output) ahead of other clients. Subagents have their own context window, custom system prompt, tool access, and independent permissions. Custom agent definitions can be placed in .claude/agents/.",
                keyPoints: [
                    "Python SDK: pip install claude-agent-sdk（最新版を pip install -U で取得）",
                    "TypeScript SDK: npm install @anthropic-ai/claude-agent-sdk（最新版を npm install --save@latest で取得）",
                    "サブエージェント: 独自のコンテキストウィンドウとシステムプロンプト",
                    ".claude/agents/ にカスタムエージェント定義を配置可能",
                    "context: fork でSkill内タスクをサブエージェントに委譲",
                    "並列実行とコンテキスト分離が主な利点",
                    "Adaptive Thinking と 1h prompt caching は SDK の最新ヘッダで有効化"
                ],
                keyPoints_en: [
                    "Python SDK: pip install claude-agent-sdk (use -U for latest)",
                    "TypeScript SDK: npm install @anthropic-ai/claude-agent-sdk (latest)",
                    "Subagents: Own context window and system prompt",
                    "Custom agent definitions in .claude/agents/",
                    "context: fork to delegate skill tasks to subagents",
                    "Parallel execution and context isolation are main benefits",
                    "Adaptive Thinking and 1h prompt caching enabled via latest SDK headers"
                ],
                handson: {
                    title: "カスタムサブエージェントを作成する",
                    title_en: "Create a Custom Subagent",
                    goal: ".claude/agents/ にカスタムエージェント定義を作成して使う",
                    goal_en: "Create and use a custom agent definition in .claude/agents/",
                    prerequisites: ["プロジェクトフォルダがある"],
                    prerequisites_en: ["Have a project folder"],
                    steps: [
                        {
                            step: 1,
                            action: "カスタムエージェント定義を作成",
                            action_en: "Create custom agent definition",
                            prompt: ".claude/agents/code-reviewer.md を作成して。内容は「このエージェントはTypeScriptコードのレビューに特化し、型安全性・エラーハンドリング・パフォーマンスの3点を必ずチェックする」というシステムプロンプト。",
                            prompt_en: "Create .claude/agents/code-reviewer.md with system prompt: 'This agent specializes in TypeScript code review, always checking type safety, error handling, and performance.'",
                            expected: ".claude/agents/code-reviewer.md が作成される",
                            expected_en: ".claude/agents/code-reviewer.md is created"
                        },
                        {
                            step: 2,
                            action: "作成したエージェントをサブエージェントとして呼び出す",
                            action_en: "Call the created agent as a subagent",
                            prompt: "code-reviewerエージェントを使って src/index.ts をレビューして",
                            prompt_en: "Use the code-reviewer agent to review src/index.ts",
                            expected: "カスタムエージェントの指示に基づいた3観点レビューが行われる",
                            expected_en: "3-perspective review based on custom agent instructions is performed"
                        }
                    ],
                    checkpoints: [
                        ".claude/agents/にエージェント定義を作成できた",
                        "カスタムエージェントが意図した観点でレビューを行った"
                    ],
                    checkpoints_en: [
                        "Agent definition created in .claude/agents/",
                        "Custom agent reviewed from intended perspectives"
                    ]
                }
            }
        },
        {
            id: "03_11",
            time: "30分",
            time_en: "30 min",
            number: "03_11",
            title: "コミュニティスキルとエコシステム",
            title_en: "Community Skills and Ecosystem",
            description: "anthropics/skillsリポジトリと外部スキルマーケットプレイスから、実用スキルを探して導入する。",
            description_en: "Find and install practical skills from anthropics/skills repository and external skill marketplaces.",
            icon: "globe",
            tags: ["コミュニティ", "スキル", "エコシステム"],
            tags_en: ["Community", "Skills", "Ecosystem"],
            content: {
                summary: "Claude Code Skills エコシステムは2026年に急成長し、公式のanthropics/skillsリポジトリには1,200以上のスキルが公開されている。Claude Code Templates（aitmpl.com）、SkillsMP（skillsmp.com）、Awesome Claude Agents（GitHub）など外部マーケットプレイスも充実。ただし非公式スキルは必ずSKILL.mdの中身を確認し、権限と環境を分離したうえで導入すること。",
                summary_en: "The Claude Code Skills ecosystem grew rapidly in 2026, with 1,200+ skills in the official anthropics/skills repository. External marketplaces like Claude Code Templates (aitmpl.com), SkillsMP (skillsmp.com), and Awesome Claude Agents (GitHub) are also available. Always verify SKILL.md contents and isolate permissions before installing unofficial skills.",
                keyPoints: [
                    "公式: github.com/anthropics/skills に1,200以上のスキル",
                    "Claude Code Templates: npx claude-code-templates@latest で導入",
                    "SkillsMP: skillsmp.com でカテゴリ別にスキル検索",
                    "Awesome Claude Agents: サブエージェント群の厳選リスト",
                    "導入前に必ずSKILL.md・付随スクリプトを目視確認",
                    "本番環境ではなく検証環境で先にテストする",
                    "ホットリロード対応: スキル変更が即座に反映"
                ],
                keyPoints_en: [
                    "Official: 1,200+ skills at github.com/anthropics/skills",
                    "Claude Code Templates: Install via npx claude-code-templates@latest",
                    "SkillsMP: Search skills by category at skillsmp.com",
                    "Awesome Claude Agents: Curated list of subagent collections",
                    "Always visually verify SKILL.md and scripts before installing",
                    "Test in validation environment, not production",
                    "Hot reload: Skill changes take effect immediately"
                ],
                handson: {
                    title: "外部スキルを探して導入する",
                    title_en: "Find and Install External Skills",
                    goal: "コミュニティのスキルを検証環境に導入して試す",
                    goal_en: "Install community skills in a validation environment and test them",
                    prerequisites: ["Claude Codeが利用可能", "検証用プロジェクトフォルダがある"],
                    prerequisites_en: ["Claude Code is available", "Have a validation project folder"],
                    steps: [
                        {
                            step: 1,
                            action: "公式スキルリポジトリを確認",
                            action_en: "Check official skills repository",
                            prompt: "github.com/anthropics/skills のREADMEを読んで、利用可能なスキルのカテゴリを教えて",
                            prompt_en: "Read the README at github.com/anthropics/skills and tell me available skill categories",
                            expected: "スキルカテゴリの一覧が表示される",
                            expected_en: "List of skill categories is displayed"
                        },
                        {
                            step: 2,
                            action: "スキルを.claude/skills/に配置",
                            action_en: "Place skill in .claude/skills/",
                            prompt: "選んだスキルのSKILL.mdを .claude/skills/test-skill/ にコピーして配置して。中身を確認してから有効化して。",
                            prompt_en: "Copy the chosen skill's SKILL.md to .claude/skills/test-skill/. Verify contents before activating.",
                            expected: "スキルが配置され、次のプロンプトから利用可能になる",
                            expected_en: "Skill is placed and available from next prompt"
                        }
                    ],
                    checkpoints: [
                        "スキルの中身を確認してから導入した",
                        "スキルが正常に動作することを検証環境で確認した"
                    ],
                    checkpoints_en: [
                        "Verified skill contents before installation",
                        "Confirmed skill works correctly in validation environment"
                    ]
                }
            }
        },
        {
            id: "03_12",
            time: "60分",
            time_en: "60 min",
            number: "03_12",
            title: "CI/CD高度活用 - Docker隔離とバッチ処理",
            title_en: "Advanced CI/CD - Docker Isolation and Batch Processing",
            description: "Dockerコンテナ内でのheadless実行、--dangerously-skip-permissionsの安全な運用、バッチAPI活用。",
            description_en: "Headless execution in Docker containers, safe --dangerously-skip-permissions usage, Batch API utilization.",
            icon: "box",
            tags: ["CI/CD", "Docker", "ヘッドレス"],
            tags_en: ["CI/CD", "Docker", "Headless"],
            content: {
                summary: "claude -p（非インタラクティブモード）に --dangerously-skip-permissions を組み合わせると完全自動実行が可能になる。ただしDockerコンテナ内での実行が強く推奨され、コンテナによる二重隔離で攻撃面を99%削減できる。--output-format stream-json と併用すればCI/CDパイプラインへの統合も容易。Anthropic自身が2026年2月のブログで、並列Claudeによるコンパイラ構築にこのモードを使った事例を公開している。",
                summary_en: "Combining claude -p (non-interactive mode) with --dangerously-skip-permissions enables fully automated execution. Docker container execution is strongly recommended, reducing attack surface by 99%. Combined with --output-format stream-json for easy CI/CD pipeline integration. Anthropic published a case study of using this mode for parallel compiler building in February 2026.",
                keyPoints: [
                    "claude -p 'prompt' で非インタラクティブ実行",
                    "--dangerously-skip-permissions はDockerコンテナ内でのみ推奨",
                    "--output-format stream-json でCI/CDパイプラインに統合",
                    "Batch APIで50%のコスト削減（非リアルタイム処理向け）",
                    "GitHub Actionsとの連携: PRコメントに結果を自動投稿",
                    "並列実行: 複数のclaude -pを同時に走らせてスループット向上"
                ],
                keyPoints_en: [
                    "claude -p 'prompt' for non-interactive execution",
                    "--dangerously-skip-permissions only recommended inside Docker",
                    "--output-format stream-json for CI/CD pipeline integration",
                    "Batch API for 50% cost reduction (non-realtime processing)",
                    "GitHub Actions integration: Auto-post results as PR comments",
                    "Parallel execution: Run multiple claude -p simultaneously for throughput"
                ],
                handson: {
                    title: "ヘッドレスモードでバッチ処理",
                    title_en: "Batch Processing in Headless Mode",
                    goal: "claude -p を使った非インタラクティブ実行を体験する",
                    goal_en: "Experience non-interactive execution with claude -p",
                    prerequisites: ["Claude Codeがインストール済み", "テスト用プロジェクトがある"],
                    prerequisites_en: ["Claude Code is installed", "Have a test project"],
                    steps: [
                        {
                            step: 1,
                            action: "ヘッドレスモードでプロジェクト分析を実行",
                            action_en: "Run project analysis in headless mode",
                            prompt: "claude -p 'このプロジェクトのpackage.jsonを読んで、依存関係の概要を3行で要約して' --output-format text",
                            prompt_en: "claude -p 'Read package.json and summarize dependencies in 3 lines' --output-format text",
                            expected: "対話なしで結果がターミナルに出力される",
                            expected_en: "Results output to terminal without interaction"
                        },
                        {
                            step: 2,
                            action: "JSON出力でパイプラインに統合",
                            action_en: "Integrate with pipeline via JSON output",
                            prompt: "claude -p 'src/のファイル数とコード行数を集計して' --output-format stream-json | tail -1",
                            prompt_en: "claude -p 'Count files and lines of code in src/' --output-format stream-json | tail -1",
                            expected: "JSON形式で結果が出力され、jq等で加工可能",
                            expected_en: "Results in JSON format, processable with jq etc."
                        }
                    ],
                    checkpoints: [
                        "claude -pで対話なし実行ができた",
                        "JSON出力がパイプライン連携に使えることを確認した"
                    ],
                    checkpoints_en: [
                        "Successfully ran non-interactive execution with claude -p",
                        "Confirmed JSON output is usable for pipeline integration"
                    ]
                }
            }
        },
        {
            id: "03_13",
            time: "40分",
            time_en: "40 min",
            number: "03_13",
            title: "Skill合成 - 別Skill/Subagentを呼ぶ",
            title_en: "Skill Composition - Calling other Skills / Subagents",
            description: "1Skillに詰め込むのではなく、責務を分けた小さなSkillを連鎖・Subagent委譲で組み合わせるパターン。",
            description_en: "Pattern of chaining small focused Skills and delegating to Subagents instead of stuffing one large Skill.",
            icon: "layers",
            tags: ["Skills", "Subagents", "合成", "再利用"],
            tags_en: ["Skills", "Subagents", "Composition", "Reuse"],
            content: {
                summary: "巨大な単一Skillはdescription肥大化でロード判定が荒くなり、本文も読み切れず精度が落ちる。責務を1Skill=1動詞で分け、SKILL.mdから別Skillへの参照（@-import）や、TaskツールでのSubagent委譲を組み込む。これで個々のSkillは検証可能なサイズに保ち、合成で複雑なフローを実現できる。",
                summary_en: "A giant single Skill makes load detection coarse and inflates context. Split responsibilities as one-Skill-one-verb, then chain via @-imports or delegate to Subagents from inside SKILL.md. Each Skill stays verifiable; composition handles the complex flow.",
                keyPoints: [
                    "1Skill=1責務を守り、description は短く具体的に書く",
                    "SKILL.md 本文に @../path/to/other-skill/SKILL.md と書くとClaudeが必要時に補助Skillを読み込む",
                    "重い解析や別ドメインはTaskツールでSubagent化 → 結果だけ親に戻す（context汚染を防ぐ）",
                    "戻り値は機械可読な構造（JSON/Markdown表）で返す約束をSkill側に明記",
                    "命名はプレフィックス化（review-*, refactor-*, audit-*）で関連Skillをグルーピング",
                    "失敗時のフォールバックをSkillに書き、Claudeに代替手段の判断材料を渡す"
                ],
                keyPoints_en: [
                    "Keep one Skill to one responsibility; make description short and specific",
                    "Use @../path/to/other-skill/SKILL.md inside the body to chain-load helper Skills",
                    "Delegate heavy analysis to Subagents via Task; return only the result to keep context clean",
                    "Specify a machine-readable return format (JSON / Markdown table) in the Skill",
                    "Use name prefixes (review-*, refactor-*) to group related Skills",
                    "Document fallback behavior so Claude can decide the next move on failure"
                ],
                code: "---\nname: review-pr\ndescription: PRのコードレビュー。診断はサブSkillに委譲し、結果を統合する。\n---\n\n# 役割\n変更diffを受け取り、3観点で監査して総合レポートを出す。\n\n# 手順\n1. セキュリティ観点は @../audit-security/SKILL.md を参照\n2. パフォーマンス観点は @../audit-perf/SKILL.md を参照\n3. スタイル観点は @../audit-style/SKILL.md を参照\n4. 各観点の結果（JSON）を統合し、重大度順に並べてMarkdownで返す\n\n# 重い解析の委譲\n変更ファイルが20本を超えるときは、Taskツールでファイル別にSubagentを並列起動し、それぞれの結果のみを集約する。",
                commands: [
                    { cmd: "/skill review-pr", desc: "合成Skillを呼び出し、内部で監査Skillを連鎖", desc_en: "Invoke composite Skill chaining audit sub-skills" }
                ],
                handson: {
                    title: "実践: 監査Skillを3本に分けて統合Skillから呼ぶ",
                    title_en: "Practice: Split audit into 3 sub-skills and orchestrate from one composite Skill",
                    goal: "巨大な1Skillではなく、観点別の小Skill群と統合Skillで構成し直す",
                    goal_en: "Recompose a monolithic Skill into focused sub-skills coordinated by a composite Skill",
                    prerequisites: ["既存の review 系Skillが1本ある、または新規に作成する"],
                    prerequisites_en: ["You have an existing review Skill (or create one)"],
                    steps: [
                        { step: 1, action: "観点別Skillを3本に分割", action_en: "Split into 3 audit sub-skills",
                          prompt: "現在の review.md を、audit-security / audit-perf / audit-style の3つのSkillに分割して。各Skillはその観点だけに集中し、共通の出力形式（severity / file:line / finding）に従わせて。",
                          prompt_en: "Split current review.md into 3 sub-skills (audit-security / audit-perf / audit-style). Each focuses on its angle and follows the same output schema.",
                          expected: "3つのSKILL.mdが作成され、それぞれ責務が明確",
                          expected_en: "Three SKILL.md files are created with clear responsibilities" },
                        { step: 2, action: "統合Skillから @-import で連鎖", action_en: "Compose via @-imports",
                          prompt: "review-pr.md を新規作成し、本文中に @audit-security/SKILL.md / @audit-perf/SKILL.md / @audit-style/SKILL.md を順に参照する手順を書いて。各観点の結果をJSONで受け取り、統合してMarkdownテーブルで返すように指示する。",
                          prompt_en: "Create review-pr.md and instruct it to reference the three sub-skills, gather JSON results, and emit a unified Markdown table.",
                          expected: "review-pr が3 Skillを連鎖呼び出しする構成になる",
                          expected_en: "review-pr now chains the 3 sub-skills" },
                        { step: 3, action: "ファイル数が多い場合はSubagentに委譲", action_en: "Delegate to Subagents when files are many",
                          prompt: "diffに含まれるファイルが20本を超えるときは、Taskツールでファイル別にSubagentを並列起動し、各Subagentの結果のみを統合するロジックを review-pr に追記して。",
                          prompt_en: "Add logic to spawn Subagents per file via Task when the diff exceeds 20 files, and aggregate only the results.",
                          expected: "大規模PRでもメインの会話が肥大化しないフローになる",
                          expected_en: "Main session stays small even for large PRs" },
                        { step: 4, action: "サンプルPRで動作確認", action_en: "Verify on a sample PR",
                          prompt: "git diff main..HEAD を入力にして /skill review-pr を実行し、3観点の指摘が統合されたMarkdownが返ってくるか確認して。",
                          prompt_en: "Run /skill review-pr against git diff main..HEAD and verify the unified Markdown output.",
                          expected: "severity順のレポートが1枚で得られる",
                          expected_en: "A single severity-ordered report is produced" }
                    ],
                    checkpoints: [
                        "1Skillあたりの行数が短くなり、description も具体的になった",
                        "@-import で別Skillを参照する書き方を理解した",
                        "Taskツールで重い処理をSubagent化する判断ができた",
                        "出力形式を統一して呼び出し元で結合できる設計にした"
                    ],
                    checkpoints_en: [
                        "Each Skill is now shorter with a specific description",
                        "Understood how to reference other Skills via @-import",
                        "Decided when to offload heavy work to a Subagent via Task",
                        "Designed a unified output schema for clean composition"
                    ]
                }
            }
        },
        {
            id: "03_14",
            time: "50分",
            time_en: "50 min",
            number: "03_14",
            title: "Hook起点パイプライン - 別コンテキストでAI起動",
            title_en: "Hook-triggered Pipelines - Spawn AI in a fresh context",
            description: "PostToolUse / Stop Hook から claude -p を非対話起動し、独立コンテキストで監査・要約・自動修正を段付け実行する。",
            description_en: "Spawn claude -p from PostToolUse / Stop hooks to run audits, summaries, and auto-fixes in independent contexts.",
            icon: "git-branch",
            tags: ["Hooks", "ヘッドレス", "パイプライン", "自動化"],
            tags_en: ["Hooks", "Headless", "Pipeline", "Automation"],
            content: {
                summary: "Hookは単なるshellでも、AIパイプラインの起動点として使うと真価が出る。PostToolUseで claude -p を非対話起動すると、メインの会話を止めずに別コンテキストで監査エージェントや要約エージェントを走らせられる。結果は exit-code とJSONファイルで親に返し、Stop hookでMCP-sqliteなどへ蓄積。段付け実行で軽い検証→詳細レビュー→長文戦略の3段階を組むと、コストも品質も最適化できる。",
                summary_en: "Hooks become powerful when used as launch points for AI pipelines. Spawning claude -p from PostToolUse runs audit/summary agents in a separate context without bloating the main session. Pass results back via exit-code and a JSON file; Stop hook persists to MCP-sqlite. Tiered execution (haiku then sonnet then opus) optimizes cost and quality.",
                keyPoints: [
                    "PostToolUse で claude -p \"...\" --output-format json --output-file <path> を非対話起動",
                    "別コンテキストなのでメインの会話を肥大化させない（成果物だけが残る）",
                    "exit-code を hook が拾って、後続ツール呼び出しをブロック/通すか判定",
                    "段付け: 1段目=軽い検証(haiku) / 2段目=詳細レビュー(sonnet) / 3段目=長文戦略(opus)。失敗で次段停止",
                    "SessionEnd hookで daily-summary を走らせ MCP-sqlite に蓄積（cron不要の自然なジョブ化）",
                    "--dangerously-skip-permissions は Docker 内のみ。ホスト直叩きは避ける"
                ],
                keyPoints_en: [
                    "PostToolUse fires claude -p \"...\" --output-format json --output-file <path>",
                    "Independent context keeps the main session small; only artifacts persist",
                    "Hook reads exit-code to decide whether to allow or block the next tool call",
                    "Tiered: stage 1 light check (haiku), stage 2 review (sonnet), stage 3 strategy (opus); stop chain on failure",
                    "SessionEnd hook runs daily-summary and writes to MCP-sqlite (no cron needed)",
                    "--dangerously-skip-permissions only inside Docker; never on bare host"
                ],
                code: "#!/usr/bin/env bash\n# .claude/hooks/post-edit-audit.sh\n# 編集後に軽量モデルで監査し、重い問題があれば次段へエスカレート\nset -euo pipefail\nDIFF=$(git diff --cached || true)\n[ -z \"$DIFF\" ] && exit 0\n\n# 1段目: Haiku で高速プレチェック\nclaude -p \"次のdiffに明白なバグやsecretの混入があるか判定。JSON {risk:high|low} で返す: $DIFF\" \\\n  --model claude-haiku-4-5 --output-format json --output-file /tmp/pre.json\n\nRISK=$(jq -r .risk /tmp/pre.json)\n[ \"$RISK\" != \"high\" ] && exit 0\n\n# 2段目: Sonnet で詳細レビュー\nclaude -p \"diffを詳細レビューしJSONで指摘リストを返す: $DIFF\" \\\n  --model claude-sonnet-4-6 --output-format json --output-file /tmp/review.json\n\n# 3段目: 修正案を提示して人間レビューへ\njq . /tmp/review.json >&2\nexit 2  # PostToolUse でブロックしてユーザーに確認させる",
                commands: [
                    { cmd: "claude -p '...'", desc: "ヘッドレス起動。別コンテキストで一回限りの推論を実行", desc_en: "Headless run; one-shot inference in fresh context" },
                    { cmd: "claude -p '...' --output-format json", desc: "結果を機械可読JSONで受ける", desc_en: "Receive output as machine-readable JSON" },
                    { cmd: "claude -p '...' --model claude-haiku-4-5", desc: "段付けの1段目に軽量モデルを指定", desc_en: "Use a lightweight model for the first stage" }
                ],
                handson: {
                    title: "実践: PostToolUse から3段ヘッドレス監査を組む",
                    title_en: "Practice: Build a 3-stage headless audit from PostToolUse",
                    goal: "Hookから claude -p を起動して、メインの会話を肥大化させずに段付け監査を回す",
                    goal_en: "Run a tiered audit pipeline launched from a Hook, keeping the main session lean",
                    prerequisites: [
                        ".claude/hooks/ にスクリプトを書ける環境",
                        "jq がインストールされている"
                    ],
                    prerequisites_en: [
                        "Ability to add scripts under .claude/hooks/",
                        "jq installed"
                    ],
                    steps: [
                        { step: 1, action: "PostToolUse hookを登録", action_en: "Register a PostToolUse hook",
                          prompt: ".claude/settings.json に PostToolUse: \".claude/hooks/post-edit-audit.sh\" を追加し、Edit/Write後に発火するように設定して。",
                          prompt_en: "Add PostToolUse: \".claude/hooks/post-edit-audit.sh\" to .claude/settings.json so it fires after Edit/Write.",
                          expected: "編集ごとにスクリプトが呼ばれる状態",
                          expected_en: "Script runs after every edit" },
                        { step: 2, action: "1段目: haiku で高速プレチェック", action_en: "Stage 1: fast precheck with haiku",
                          prompt: "post-edit-audit.sh に、git diff を入力として claude -p --model claude-haiku-4-5 を呼び、risk:high/low を JSON で返させる処理を書いて。低リスクなら exit 0 で終了。",
                          prompt_en: "In post-edit-audit.sh, call claude -p with haiku on git diff and return risk:high/low. Exit 0 on low risk.",
                          expected: "low判定の編集はメインを止めずに通過",
                          expected_en: "Low-risk edits pass through without blocking" },
                        { step: 3, action: "2段目: sonnet で詳細レビュー", action_en: "Stage 2: detailed review with sonnet",
                          prompt: "high判定だった場合のみ、claude -p --model claude-sonnet-4-6 で詳細レビューを行い、JSON配列で指摘を出力させて。",
                          prompt_en: "Only on high risk, run claude -p with sonnet for a detailed review returning a JSON findings array.",
                          expected: "重要な編集だけが詳細レビューに進む",
                          expected_en: "Only impactful edits trigger detailed review" },
                        { step: 4, action: "exit 2 でブロックし確認を促す", action_en: "Block with exit 2 for human confirmation",
                          prompt: "重大指摘が1件以上あれば exit 2 を返し、ユーザーに対応を促す挙動にして。それ以外は exit 0 で通過。",
                          prompt_en: "Return exit 2 if any high-severity findings; otherwise exit 0.",
                          expected: "重大時のみメインで対話が割り込み、軽微なら自動で通る",
                          expected_en: "Only severe cases interrupt the main conversation" },
                        { step: 5, action: "SessionEnd hookで日次サマリ", action_en: "Daily summary via SessionEnd hook",
                          prompt: "SessionEnd hookを追加し、その日のレビュー結果（/tmp/review.json）を MCP-sqlite に insert する処理を書いて。",
                          prompt_en: "Add a SessionEnd hook that inserts the day's review.json into MCP-sqlite.",
                          expected: "毎セッションの結果が蓄積され、daily-summaryを後で参照できる",
                          expected_en: "Each session's results accumulate and can be reviewed later" }
                    ],
                    checkpoints: [
                        "Hookから claude -p を起動し、結果が exit-code と JSON で親に返る",
                        "メインの会話に監査ログが混ざらず、肥大化しない",
                        "段付けで軽い→重いモデルへエスカレートする実装ができた",
                        "Stop/SessionEnd hook で成果物がDBに蓄積される運用にできた"
                    ],
                    checkpoints_en: [
                        "Hook launches claude -p and receives result via exit-code and JSON",
                        "Audit logs no longer pollute the main conversation",
                        "Tiered escalation from light to heavy models is implemented",
                        "Stop/SessionEnd hook persists artifacts to a DB"
                    ]
                }
            }
        },
                {
            id: "03_15",
            time: "50分",
            time_en: "50 min",
            number: "03_15",
            title: "Dynamic Workflows - 決定的マルチエージェント合成",
            title_en: "Dynamic Workflows - Deterministic Multi-Agent Composition",
            description: "agent() / parallel() / pipeline() のスクリプトで数十エージェントを決定的にオーケストレーション（v2.1.154）。",
            description_en: "Orchestrate dozens of agents deterministically with agent() / parallel() / pipeline() scripts (v2.1.154).",
            icon: "git-branch",
            tags: ["Workflows", "オーケストレーション", "並列", "v2.1.154"],
            tags_en: ["Workflows", "Orchestration", "Parallel", "v2.1.154"],
            content: {
                summary: "Dynamic Workflows（v2.1.154）は、モデル任せだったマルチエージェントの制御フローをJavaScriptで決定的に書ける仕組み。agent(prompt, {schema}) でサブエージェントを起動して構造化された戻り値を受け取り、parallel() で同時実行、pipeline() でアイテムごとの多段処理を流す。ループ・条件分岐・集計はただのJSなので、「見つかるまで探す」「全件を検証してから集約」のような制御をプロンプトではなくコードで保証できる。ネストは5階層まで、isolation: 'worktree' でファイル変更を隔離、トークン予算で全体の上限も切れる。fan-out→synthesize、敵対的検証、loop-until-doneなどの合成パターンが定石。",
                summary_en: "Dynamic Workflows (v2.1.154) lets you write multi-agent control flow deterministically in JavaScript instead of trusting the model. agent(prompt, {schema}) launches a subagent with a validated structured return; parallel() runs concurrently; pipeline() streams items through stages. Loops, branching, aggregation are plain JS, so guarantees like search-until-found or verify-all-then-aggregate live in code, not prompts. Nesting goes 5 levels deep, isolation: 'worktree' sandboxes file edits, and token budgets cap the run. Canonical compositions: fan-out and synthesize, adversarial verification, loop-until-done.",
                keyPoints: [
                    "agent(prompt, {schema}) - JSON Schemaで戻り値を強制。パース不要で検証済みオブジェクトが返る",
                    "parallel([...]) は全完了を待つバリア / pipeline(items, stage1, stage2) はアイテム単位で流す（待ち時間最小）",
                    "制御フローはJS。while(件数<10){...} のような保証をプロンプトでなくコードに書く",
                    "isolation: 'worktree' で並列エージェントのファイル編集が衝突しない",
                    "サブエージェントは5階層までネスト可能（v2.1.172）。トークン予算で全体上限を管理",
                    "/workflows で実行中ワークフローの進行をツリー表示で監視"
                ],
                keyPoints_en: [
                    "agent(prompt, {schema}) enforces a JSON-Schema return; you get a validated object",
                    "parallel([...]) is a barrier; pipeline(items, stages...) streams items with minimal idle time",
                    "Control flow is JS: write guarantees like while(count<10) in code, not prompts",
                    "isolation: 'worktree' prevents parallel agents from clobbering each other's edits",
                    "Subagents nest up to 5 levels (v2.1.172); token budgets cap the whole run",
                    "/workflows shows live progress of running workflows as a tree"
                ],
                code: "// 敵対的検証つきバグ探索: 見つける→3人の懐疑者で反証→生き残りだけ採用\nconst found = await parallel(FINDERS.map(f => () =>\n  agent(f.prompt, { schema: BUGS_SCHEMA })));\nconst bugs = found.filter(Boolean).flatMap(r => r.bugs);\n\nconst confirmed = [];\nfor (const bug of bugs) {\n  const votes = await parallel([1,2,3].map(() => () =>\n    agent(`反証を試みて: ${bug.desc}。不確実なら refuted=true`, { schema: VERDICT })));\n  if (votes.filter(v => v && !v.refuted).length >= 2) confirmed.push(bug);\n}\nreturn confirmed;",
                commands: [
                    { cmd: "/workflows", desc: "実行中のワークフローと進行ツリーを表示", desc_en: "Show running workflows and progress tree" },
                    { cmd: "ultracode を含めて依頼", desc: "ワークフロー前提のオーケストレーションを明示的に許可", desc_en: "Explicitly opt in to workflow orchestration" }
                ],
                handson: {
                    title: "実践: fan-out→敵対的検証→統合のワークフローを書く",
                    title_en: "Practice: Write a fan-out, adversarial-verify, synthesize workflow",
                    goal: "プロンプト任せでは保証できない「全観点を回って検証済みのものだけ集める」をコードで実現する",
                    goal_en: "Achieve verify-everything-then-collect guarantees in code instead of prompts",
                    prerequisites: ["v2.1.154以降のClaude Code", "レビュー対象のプロジェクト"],
                    prerequisites_en: ["Claude Code v2.1.154+", "A project to review"],
                    steps: [
                        { step: 1, action: "観点リストを決めてfan-outを書く", action_en: "Define dimensions and write the fan-out",
                          prompt: "ultracode このプロジェクトをセキュリティ/性能/可読性の3観点でレビューするワークフローを書いて実行して。各観点は agent() に schema 付きで委譲し、結果を構造化して受け取って。",
                          prompt_en: "ultracode Write and run a workflow reviewing this project across security/perf/readability. Delegate each via agent() with a schema.",
                          expected: "3エージェントが並列で走り、構造化された指摘リストが返る",
                          expected_en: "3 agents run in parallel returning structured findings" },
                        { step: 2, action: "敵対的検証ステージを足す", action_en: "Add an adversarial verification stage",
                          prompt: "各指摘に対して3体の懐疑者エージェントを並列起動し、「反証せよ」と指示。2票以上生き残った指摘だけを confirmed に残すロジックを追加して。",
                          prompt_en: "For each finding, spawn 3 skeptic agents prompted to refute. Keep only findings surviving 2+ votes.",
                          expected: "もっともらしいだけの指摘が落ち、確度の高いものだけ残る",
                          expected_en: "Plausible-but-wrong findings get killed; high-confidence ones survive" },
                        { step: 3, action: "/workflows で進行を観察", action_en: "Watch progress with /workflows",
                          prompt: "/workflows",
                          prompt_en: "/workflows",
                          expected: "フェーズごとのエージェントツリーと進行状況が見える",
                          expected_en: "Per-phase agent tree and progress are visible" },
                        { step: 4, action: "pipeline化して待ち時間を削る", action_en: "Convert to pipeline to cut idle time",
                          prompt: "観点ごとに「レビュー完了したものから順に検証へ進む」pipeline構成に書き換えて、バリア待ちをなくして。",
                          prompt_en: "Rewrite as a pipeline so each dimension flows into verification as soon as it finishes.",
                          expected: "遅い観点を待たずに速い観点の検証が始まり、全体時間が縮む",
                          expected_en: "Fast dimensions verify while slow ones still review; wall-clock shrinks" }
                    ],
                    checkpoints: [
                        "agent() + schema で構造化された戻り値を受け取れた",
                        "parallel と pipeline の使い分け（バリアの要否）を判断できた",
                        "敵対的検証で指摘の確度を上げる構成を書けた",
                        "/workflows で進行を監視できた"
                    ],
                    checkpoints_en: [
                        "Received schema-validated structured returns from agent()",
                        "Chose between parallel and pipeline based on barrier needs",
                        "Built adversarial verification to raise finding confidence",
                        "Monitored progress via /workflows"
                    ]
                }
            }
        },
                {
            id: "03_16",
            time: "45分",
            time_en: "45 min",
            number: "03_16",
            title: "長時間自律実行 - /goal・/loop・overnight運用",
            title_en: "Long Autonomous Runs - /goal, /loop, Overnight Operation",
            description: "完了条件駆動の /goal、定期実行の /loop、クラウド常駐の /schedule。夜間放置で壊れる箇所と対策。",
            description_en: "Goal-driven /goal, interval /loop, cloud-resident /schedule - plus what breaks overnight and how to fix it.",
            icon: "clock",
            tags: ["自律実行", "/goal", "/loop", "overnight"],
            tags_en: ["Autonomy", "/goal", "/loop", "Overnight"],
            content: {
                summary: "長時間の自律実行は3つの道具を使い分ける。/goal <条件> は完了条件を満たすまでマルチターンで自走する（テスト全通過、カバレッジ80%など検証可能な条件が効く）。/loop <間隔> <プロンプト> は定期実行で、ローカルでは最長3日。/schedule はクラウド側のcronでラップトップを閉じても続く。実運用報告で壊れやすいのは (1)コンテキスト超過で当初の指示を忘れる (2)途中失敗で進捗が消える (3)出力ログ肥大。対策は STATUS.md へのチェックポイント書き出し、大タスクのセッション分割、CLAUDE.md に「進捗は必ずファイルに書く」「ログは要約だけ」の規律を明記すること。Ralphパターン（自分の出力を次の入力に食わせる自己改善ループ）も /loop で安全に組める。",
                summary_en: "Three tools for long autonomy: /goal <condition> self-drives multi-turn until a verifiable condition passes (all tests green, coverage 80%). /loop <interval> <prompt> runs on a schedule, up to 3 days locally. /schedule lives in the cloud and survives a closed laptop. Field reports show three failure modes: forgetting the original brief after context overflow, losing progress on mid-run failures, and log bloat. Fixes: checkpoint progress to STATUS.md, split large tasks across sessions, and write the discipline into CLAUDE.md (always persist progress to files; summarize logs). The Ralph pattern - feeding your own output back as the next input - composes safely on /loop.",
                keyPoints: [
                    "/goal は検証可能な完了条件とセットで。曖昧な条件は永遠に終わらないか早期に誤終了する",
                    "/loop はローカル最長3日。間隔は対象の変化速度に合わせる（CI監視=数分、日次整理=1日）",
                    "/schedule はクラウド実行。PC電源と無関係に回り続ける定期ジョブに",
                    "overnight前に STATUS.md チェックポイント方式を CLAUDE.md に明記（進捗をファイルに書かせる）",
                    "失敗時リトライは上限を切る。無限リトライはトークンを溶かすだけ",
                    "朝イチは成果物より先に STATUS.md と git log を見る。何が起きたかの監査から入る"
                ],
                keyPoints_en: [
                    "Pair /goal with verifiable conditions; vague ones never finish or finish wrong",
                    "/loop runs up to 3 days locally; match interval to how fast the target changes",
                    "/schedule executes in the cloud, independent of your laptop's power state",
                    "Before overnight runs, mandate STATUS.md checkpointing in CLAUDE.md",
                    "Cap retries; infinite retry loops just burn tokens",
                    "Next morning: audit STATUS.md and git log before looking at artifacts"
                ],
                code: "# 完了条件駆動: テストが全部通るまで自走\n/goal 全テストがパスし、lintエラーが0になるまで修正を続ける\n\n# 定期実行: 5分おきにCIを監視して落ちたら自動修正\n/loop 5m CIの最新ランを確認し、失敗していたら原因を直してpushする\n\n# CLAUDE.md に書く overnight 規律（抜粋）\n# - 30分ごと、またはタスク完了ごとに STATUS.md に進捗を追記する\n# - 失敗したタスクは2回までリトライし、3回目はスキップして記録する\n# - コマンド出力は要約だけを残し、生ログは logs/ に書く",
                commands: [
                    { cmd: "/goal <完了条件>", desc: "条件を満たすまでマルチターン自走", desc_en: "Self-drive until condition passes" },
                    { cmd: "/loop 5m <プロンプト>", desc: "間隔指定で繰り返し実行（ローカル最長3日）", desc_en: "Repeat at interval (3 days max locally)" },
                    { cmd: "/schedule", desc: "クラウドcronとして定期エージェントを登録", desc_en: "Register a cloud-cron agent" },
                    { cmd: "claude agents", desc: "走っている全エージェントを一覧監視", desc_en: "Monitor all running agents" }
                ],
                handson: {
                    title: "実践: /goal で検証駆動の自走を組み、overnight規律を仕込む",
                    title_en: "Practice: Verification-driven /goal plus overnight discipline",
                    goal: "放置しても安全に進む自律実行を、検証条件とチェックポイントで設計する",
                    goal_en: "Design autonomy that progresses safely unattended via conditions and checkpoints",
                    prerequisites: ["テストスイートのあるプロジェクト"],
                    prerequisites_en: ["A project with a test suite"],
                    steps: [
                        { step: 1, action: "検証可能な条件で /goal を起動", action_en: "Launch /goal with a verifiable condition",
                          prompt: "/goal npm test が全件パスし、npm run lint がエラー0になるまで、失敗箇所を1つずつ修正し続ける",
                          prompt_en: "/goal keep fixing failures until npm test fully passes and npm run lint shows zero errors",
                          expected: "テスト実行→失敗特定→修正→再実行のループが自走する",
                          expected_en: "The run-fail-fix-rerun loop self-drives" },
                        { step: 2, action: "STATUS.md 規律を CLAUDE.md に追記", action_en: "Add STATUS.md discipline to CLAUDE.md",
                          prompt: "CLAUDE.md に「タスク完了ごとに STATUS.md へ 日時/完了内容/次の予定 を追記する」「リトライは2回まで、3回目はスキップして理由を記録」という規律を追加して",
                          prompt_en: "Add to CLAUDE.md: append timestamp/done/next to STATUS.md per task; max 2 retries then skip with reason",
                          expected: "以後の自律実行が進捗をファイルに残すようになる",
                          expected_en: "Future autonomous runs persist progress to files" },
                        { step: 3, action: "/loop で監視ジョブを組む", action_en: "Build a watch job with /loop",
                          prompt: "/loop 10m STATUS.md を確認し、30分以上更新がなければ現在のタスク状況を調査して STATUS.md に追記する",
                          prompt_en: "/loop 10m check STATUS.md; if stale for 30+ min, investigate and append current state",
                          expected: "自律実行のウォッチドッグが回り、ハング検知が自動化される",
                          expected_en: "A watchdog detects hangs automatically" },
                        { step: 4, action: "朝の監査手順を確認", action_en: "Verify the morning audit flow",
                          prompt: "STATUS.md と git log --oneline -20 を見て、昨夜の実行サマリを3行で報告して",
                          prompt_en: "Read STATUS.md and git log -20, then report last night's run in 3 lines",
                          expected: "何が完了し何がスキップされたかが成果物を見る前に分かる",
                          expected_en: "You know what finished and what was skipped before opening artifacts" }
                    ],
                    checkpoints: [
                        "/goal に検証可能な完了条件を書けた",
                        "STATUS.md チェックポイント規律を CLAUDE.md に組み込んだ",
                        "/loop でウォッチドッグを構成できた",
                        "朝の監査（STATUS.md → git log → 成果物）の順序が身についた"
                    ],
                    checkpoints_en: [
                        "Wrote a verifiable completion condition for /goal",
                        "Embedded STATUS.md checkpointing into CLAUDE.md",
                        "Configured a watchdog with /loop",
                        "Internalized the morning audit order: STATUS.md, git log, artifacts"
                    ]
                }
            }
        },
                {
            id: "03_17",
            time: "40分",
            time_en: "40 min",
            number: "03_17",
            title: "サンドボックスと企業ガバナンス",
            title_en: "Sandboxing and Enterprise Governance",
            description: "OSレベル隔離（Seatbelt/seccomp）で権限プロンプト84%削減。managed settingsによる企業ロックダウンまで。",
            description_en: "OS-level isolation (Seatbelt/seccomp) cuts permission prompts by 84%. Through to managed-settings enterprise lockdown.",
            icon: "lock",
            tags: ["セキュリティ", "サンドボックス", "権限", "企業導入"],
            tags_en: ["Security", "Sandbox", "Permissions", "Enterprise"],
            content: {
                summary: "権限プロンプトの連打は安全性を上げない。クリック疲れで全部許可するようになるだけだ。Anthropicの解はOSレベルのサンドボックス（macOS=Seatbelt、Linux=seccomp/bubblewrap）で、ファイルシステムとネットワークをカーネルで隔離した上で内側の操作を自由にする。社内実測で権限プロンプトが84%減り、かつ実効的な安全性は上がった。企業導入では3層で考える。(1)managed settings（IT管理者がデバイスに配布、ユーザー上書き不可）(2)permissions（allow/deny/askのルール）(3)OSサンドボックス。allowManagedPermissionRulesOnly を有効にすると開発者の自己承認を全面禁止でき、監査要件の厳しい環境にも載せられる。",
                summary_en: "Permission-prompt fatigue does not improve safety - users just click allow on everything. Anthropic's answer is OS-level sandboxing (Seatbelt on macOS, seccomp/bubblewrap on Linux): isolate filesystem and network at the kernel, then let everything inside run free. Internal measurement: 84% fewer prompts with better effective safety. For enterprise, think in three layers: managed settings (IT-deployed, user-immutable), permission rules (allow/deny/ask), and the OS sandbox. allowManagedPermissionRulesOnly bans developer self-approval entirely, fitting strict audit regimes.",
                keyPoints: [
                    "/sandbox でOSレベル隔離を有効化。FSとネットワークの境界をカーネルで強制",
                    "隔離の内側は自動許可にできるため、権限プロンプトが激減（社内実測84%減）",
                    "プロンプト疲れこそ最大のリスク。確認回数を減らして1回の確認の質を上げる",
                    "managed settings は IT管理者がデバイス配布し、ユーザーが上書きできない最上位レイヤ",
                    "allowManagedPermissionRulesOnly で開発者の自己承認（ローカルallowルール追加）を禁止",
                    "deny は allow より常に優先。網羅は deny + サンドボックス、利便は allow で組む"
                ],
                keyPoints_en: [
                    "/sandbox enables OS-level isolation; kernel enforces FS and network boundaries",
                    "Inside the sandbox you can auto-allow, slashing prompts (84% internally)",
                    "Prompt fatigue is the real risk: fewer asks, higher-quality decisions",
                    "Managed settings are IT-deployed and user-immutable - the top layer",
                    "allowManagedPermissionRulesOnly bans developers from self-approving via local allow rules",
                    "deny always beats allow; coverage via deny + sandbox, convenience via allow"
                ],
                code: "// /Library/Application Support/ClaudeCode/managed-settings.json（macOS, IT配布）\n{\n  \"permissions\": {\n    \"deny\": [\n      \"Bash(curl *)\",\n      \"Read(**/.env*)\",\n      \"Read(**/credentials*)\"\n    ],\n    \"allow\": [\n      \"Bash(npm run build:*)\",\n      \"Bash(npm run test:*)\"\n    ]\n  },\n  \"allowManagedPermissionRulesOnly\": true,\n  \"sandbox\": { \"enabled\": true }\n}",
                commands: [
                    { cmd: "/sandbox", desc: "OSレベルサンドボックスの有効化・状態確認", desc_en: "Enable / inspect OS-level sandbox" },
                    { cmd: "/permissions", desc: "allow/deny/askルールの確認と編集", desc_en: "View and edit allow/deny/ask rules" }
                ],
                handson: {
                    title: "実践: 3層防御を構成して権限プロンプトを測る",
                    title_en: "Practice: Build the 3-layer defense and measure prompt reduction",
                    goal: "サンドボックス＋permissionsの構成で、安全性を保ったまま確認回数を減らす",
                    goal_en: "Cut confirmation count while keeping safety via sandbox + permissions",
                    prerequisites: ["macOS または Linux 環境"],
                    prerequisites_en: ["macOS or Linux environment"],
                    steps: [
                        { step: 1, action: "現在の権限ルールを棚卸し", action_en: "Inventory current permission rules",
                          prompt: "/permissions",
                          prompt_en: "/permissions",
                          expected: "現在のallow/deny/askルール一覧が表示される",
                          expected_en: "Current allow/deny/ask rules are listed" },
                        { step: 2, action: "サンドボックスを有効化", action_en: "Enable the sandbox",
                          prompt: "/sandbox を有効にして、ファイルシステムとネットワークの隔離境界がどう設定されたか説明して",
                          prompt_en: "Enable /sandbox and explain the resulting FS/network boundaries",
                          expected: "プロジェクト外への書き込みと未許可ネットワークがカーネルで遮断される",
                          expected_en: "Out-of-project writes and unapproved network are kernel-blocked" },
                        { step: 3, action: "denyルールで機密を守る", action_en: "Protect secrets with deny rules",
                          prompt: ".env や credentials を含むファイルの読み取りを deny するルールを settings.json に追加して",
                          prompt_en: "Add deny rules for reading .env and credentials files to settings.json",
                          expected: "サンドボックス内でも機密ファイルだけは読めない多層構成になる",
                          expected_en: "Secrets stay unreadable even inside the sandbox" },
                        { step: 4, action: "ビルド/テストをallowして体感比較", action_en: "Allow build/test and compare the feel",
                          prompt: "npm run build:* と npm run test:* を事前許可に追加し、普段の作業を30分やって権限プロンプトの回数を以前と比べて",
                          prompt_en: "Pre-allow npm run build:*/test:*, work for 30 minutes, compare prompt counts",
                          expected: "確認はリスクの高い操作だけに絞られ、作業が止まらなくなる",
                          expected_en: "Prompts narrow to genuinely risky actions; flow stops breaking" }
                    ],
                    checkpoints: [
                        "サンドボックスの隔離境界（FS/ネットワーク）を説明できる",
                        "deny > allow の優先順位を理解した",
                        "機密ファイルへの deny を構成した",
                        "managed settings と allowManagedPermissionRulesOnly の企業向け用途を説明できる"
                    ],
                    checkpoints_en: [
                        "Can explain the sandbox boundaries (FS / network)",
                        "Understand deny-over-allow precedence",
                        "Configured deny rules for secret files",
                        "Can explain managed settings and allowManagedPermissionRulesOnly for enterprises"
                    ]
                }
            }
        },
                {
            id: "03_18",
            time: "40分",
            time_en: "40 min",
            number: "03_18",
            title: "検証ハーネスのドメイン別設計",
            title_en: "Domain-Specific Verification Harnesses",
            description: "frontend=ブラウザ実機 / backend=bash / mobile=シミュレータ。Boris流「検証手段を与える」を体系化する。",
            description_en: "Frontend=real browser, backend=bash, mobile=simulator. Systematizing Boris's give-Claude-verification principle.",
            icon: "check-circle",
            tags: ["検証", "TDD", "品質", "ハーネス"],
            tags_en: ["Verification", "TDD", "Quality", "Harness"],
            content: {
                summary: "Claude Code開発者Boris Chernyが全Tipsで最重要とするのが「Claudeに自分の成果を検証する手段を与える」こと。フィードバックループがあると成果物の品質は2〜3倍になる。鍵はドメイン別にハーネスを変えることだ。frontendはChrome連携でブラウザを実際に開いてUIを確認させる。backendはbashでテストスイートとcurlを叩かせる。mobileはシミュレータを起動させる。さらにred/green TDD（先に失敗するテストを書かせ、それを通す実装をさせる）はエージェントの出力を簡潔かつ確実にする最強の制約になる。仕上げは検証→簡素化→出荷を1コマンドにした複合Skill（/go）や、code-simplifier→verify-appの二段Subagentで自動化する。",
                summary_en: "Boris Cherny ranks giving Claude the means to verify its own work as the single most important tip - feedback loops make deliverables 2-3x better. The key is domain-specific harnesses: frontend gets a real browser via Chrome integration; backend gets bash for test suites and curl; mobile gets the simulator. Red/green TDD - write a failing test first, then implement to pass - is the strongest constraint for concise, correct agent output. Finish by automating verify-simplify-ship as one composite Skill (/go) or a two-stage code-simplifier then verify-app subagent chain.",
                keyPoints: [
                    "検証手段の有無が品質を2〜3倍変える。ハーネス設計はプロンプト改善より効く",
                    "frontend: Chrome連携で実ブラウザを開かせ、表示崩れ・動作をスクリーンショットで確認",
                    "backend: テストスイート＋curlで応答コード・スキーマまで検証させる",
                    "mobile: シミュレータ起動までやらせる。ビルドが通る≠動く",
                    "red/green TDD: 先に失敗するテストを書かせると、実装が簡潔で確実になる",
                    "検証→簡素化→出荷を複合Skill化（/go）し、毎回同じ品質ゲートを通す"
                ],
                keyPoints_en: [
                    "Verification presence changes quality 2-3x; harness design beats prompt tuning",
                    "Frontend: open a real browser via Chrome integration, verify with screenshots",
                    "Backend: drive test suites and curl, checking status codes and schemas",
                    "Mobile: boot the simulator - compiling is not the same as working",
                    "Red/green TDD: a failing test first makes implementations concise and correct",
                    "Bundle verify-simplify-ship into one composite Skill (/go) as a repeatable gate"
                ],
                code: "---\nname: go\ndescription: 検証→簡素化→出荷の品質ゲートを一括実行\n---\n\n# 手順\n1. ドメインを判定（frontend / backend / mobile）\n2. ドメイン別の検証を実行:\n   - frontend: 開発サーバを起動し、ブラウザで主要画面を開いてスクリーンショット確認\n   - backend: テストスイート実行 + 主要エンドポイントを curl で叩いて応答検証\n   - mobile: シミュレータでビルド・起動確認\n3. 検証が通ったら code-simplifier Subagent で冗長コードを削る\n4. 再度検証（簡素化で壊していないか）\n5. コミットメッセージを生成して報告",
                commands: [
                    { cmd: "/go", desc: "検証→簡素化→出荷の複合Skillを実行（自作）", desc_en: "Run the verify-simplify-ship composite Skill (custom)" }
                ],
                handson: {
                    title: "実践: red/green TDD + ドメイン別検証を組み込む",
                    title_en: "Practice: Wire in red/green TDD plus domain verification",
                    goal: "「書きっぱなし」を構造的に不可能にするハーネスを自分のプロジェクトに組む",
                    goal_en: "Make write-and-forget structurally impossible in your project",
                    prerequisites: ["テスト実行できるプロジェクト（言語不問）"],
                    prerequisites_en: ["Any project where tests can run"],
                    steps: [
                        { step: 1, action: "red: 失敗するテストを先に書かせる", action_en: "Red: write the failing test first",
                          prompt: "これから実装する機能（例: 入力値の正規化関数）のテストを先に書いて実行し、失敗することを確認して。実装はまだ書かないで。",
                          prompt_en: "Write tests for the upcoming feature first, run them, confirm they fail. Do not implement yet.",
                          expected: "テストが追加され、実行して赤（失敗）であることが確認される",
                          expected_en: "Tests are added and confirmed red" },
                        { step: 2, action: "green: テストを通す最小実装", action_en: "Green: minimal implementation to pass",
                          prompt: "さっきのテストを通す最小限の実装をして。テストにない機能は足さないで。",
                          prompt_en: "Implement the minimum to pass those tests. Add nothing the tests don't require.",
                          expected: "実装後にテストが緑になり、余計なコードがないことを確認できる",
                          expected_en: "Tests go green with no extraneous code" },
                        { step: 3, action: "ドメイン別検証を追加", action_en: "Add domain-specific verification",
                          prompt: "このプロジェクトのドメイン（frontend/backend/CLI）に合わせて、テスト以外の実機検証手順を提案して実行して。Webなら実際に画面を開いて確認、APIなら curl で応答を検証して。",
                          prompt_en: "Propose and run a non-test verification for this project's domain - open the page for web, curl the API for backend.",
                          expected: "ユニットテストでは拾えない見た目・実応答レベルの確認が走る",
                          expected_en: "Visual / live-response checks beyond unit tests are executed" },
                        { step: 4, action: "/go 複合Skillにまとめる", action_en: "Bundle into a /go composite Skill",
                          prompt: "ここまでの検証フロー（テスト→ドメイン検証→簡素化→再検証）を .claude/skills/go/SKILL.md にまとめて、以後 /go の一発で品質ゲートが回るようにして。",
                          prompt_en: "Capture this flow (tests, domain check, simplify, re-verify) in .claude/skills/go/SKILL.md so /go runs the whole gate.",
                          expected: "毎回の仕上げが /go 一発で再現可能になる",
                          expected_en: "The full quality gate reruns with a single /go" }
                    ],
                    checkpoints: [
                        "red→green の順序を守ったTDDフローを回せた",
                        "自分のプロジェクトのドメインに合う実機検証を選べた",
                        "テストだけでは拾えない不具合の種類を説明できる",
                        "検証フローを複合Skill化して再現可能にした"
                    ],
                    checkpoints_en: [
                        "Ran TDD in strict red-then-green order",
                        "Chose the right live verification for your domain",
                        "Can explain what bugs tests alone cannot catch",
                        "Made the verification flow reusable as a composite Skill"
                    ]
                }
            }
        },
        {
            "id": "03_19",
            "time": "45分",
            "time_en": "45 min",
            "number": "03_19",
            "title": "パラメータ単位の権限と自律実行ガード",
            "title_en": "Parameter-Level Permissions and Autonomy Guards",
            "description": "Tool(param:value)権限、auto modeの破壊的gitブロック、acceptEdits保護パス、sandbox.credentialsで自律実行を安全に縛る。",
            "description_en": "Constrain autonomy safely: Tool(param:value) permissions, auto-mode git blocking, acceptEdits protected paths, sandbox.credentials.",
            "icon": "lock",
            "tags": [
                "権限",
                "auto mode",
                "サンドボックス",
                "安全"
            ],
            "tags_en": [
                "Permissions",
                "Auto mode",
                "Sandbox",
                "Safety"
            ],
            "content": {
                "summary": "2026年6月、自律実行を安全に縛る新しいガードが相次いで入った。権限ルールはパラメータ値で絞れるようになり（Tool(param:value)、v2.1.178）、たとえば Agent(model:opus) でOpusサブエージェントの起動だけを拒否できる。auto modeは破壊的なgit操作（reset --hard / checkout -- . / clean -fd / stash drop）を自動でブロックし、エージェント以外のコミットへのamendを拒否、terraform/pulumi/cdk destroyはスタック名の明示を要求する（v2.1.183）。acceptEditsでも、シェル起動ファイルや .npmrc などコード実行につながるファイルへの書き込みは確認を挟む（v2.1.160）。sandbox.credentials は認証情報ファイルや秘密環境変数の読取を遮断する（v2.1.187）。これらは長時間自律実行（03_16）の安全設計を補完する。",
                "summary_en": "June 2026 added several guards to constrain autonomy safely. Permission rules now filter by parameter value (Tool(param:value), v2.1.178) - e.g. Agent(model:opus) denies launching Opus subagents only. Auto mode auto-blocks destructive git (reset --hard / checkout -- . / clean -fd / stash drop), refuses amending non-agent commits, and requires explicit stack names for terraform/pulumi/cdk destroy (v2.1.183). Even acceptEdits prompts before writing execution-bearing files like shell init files or .npmrc (v2.1.160). sandbox.credentials blocks reading credential files and secret env vars (v2.1.187). Together they complete the safety design for long autonomous runs (03_16).",
                "keyPoints": [
                    "Tool(param:value) でパラメータ値ごとに権限を制御。例 Agent(model:opus) でOpusサブエージェント起動を拒否。*対応、allowは従来構文維持（v2.1.178）",
                    "auto modeは破壊的gitを自動ブロック: reset --hard / checkout -- . / clean -fd / stash drop。非エージェントのコミットへのamend拒否（v2.1.183）",
                    "terraform/pulumi/cdk destroy はスタック名の明示を要求。サブエージェント起動前にclassifierが評価（v2.1.183）",
                    "acceptEditsでもコード実行につながるファイル（.zshenv等シェル起動ファイル、~/.config/git/、.npmrc/.bazelrc/.pre-commit-config.yaml）は書き込み前に確認（v2.1.160）",
                    "sandbox.credentials で認証情報ファイル・秘密環境変数の読取をブロック（v2.1.187）。リモートMCPは5分でアイドルタイムアウト（v2.1.187）",
                    "deny は allow より常に優先。長時間自律実行のガードとして deny + サンドボックス + auto modeブロックを重ねる"
                ],
                "keyPoints_en": [
                    "Tool(param:value) controls permissions per parameter; Agent(model:opus) denies Opus subagents. * supported; allow keeps legacy syntax (v2.1.178)",
                    "Auto mode blocks destructive git: reset --hard / checkout -- . / clean -fd / stash drop; refuses amending non-agent commits (v2.1.183)",
                    "terraform/pulumi/cdk destroy require an explicit stack name; a classifier evaluates before subagent launch (v2.1.183)",
                    "acceptEdits still prompts before execution-bearing files (.zshenv, ~/.config/git/, .npmrc/.bazelrc/.pre-commit-config.yaml) (v2.1.160)",
                    "sandbox.credentials blocks reading credential files and secret env vars (v2.1.187); remote MCP idles out at 5 min (v2.1.187)",
                    "deny always beats allow; layer deny + sandbox + auto-mode blocking as guards for long autonomous runs"
                ],
                "code": "// .claude/settings.json\n{\n  \"permissions\": {\n    \"deny\": [\n      \"Agent(model:opus)\",\n      \"Read(**/.env*)\",\n      \"Bash(git push --force*)\"\n    ]\n  },\n  \"sandbox\": { \"enabled\": true, \"credentials\": false }\n}",
                "commands": [
                    {
                        "cmd": "/permissions",
                        "desc": "allow/deny/askルールの確認と編集",
                        "desc_en": "View and edit allow/deny/ask rules"
                    },
                    {
                        "cmd": "/sandbox",
                        "desc": "OSレベルサンドボックスの有効化・状態確認",
                        "desc_en": "Enable / inspect the OS sandbox"
                    }
                ],
                "handson": {
                    "title": "実践: パラメータ権限と自律ガードを重ねる",
                    "title_en": "Practice: Layer parameter permissions and autonomy guards",
                    "goal": "自律実行が壊せる範囲をパラメータ権限とブロックで縛り、安全に放置できる構成にする",
                    "goal_en": "Bound what autonomy can break via parameter permissions and blocks for safe unattended runs",
                    "prerequisites": [
                        "v2.1.178以降のClaude Code",
                        "gitリポジトリ"
                    ],
                    "prerequisites_en": [
                        "Claude Code v2.1.178+",
                        "A git repository"
                    ],
                    "steps": [
                        {
                            "step": 1,
                            "action": "パラメータ権限でOpus起動を拒否",
                            "action_en": "Deny Opus subagents via parameter permission",
                            "prompt": "settings.json の permissions.deny に Agent(model:opus) を追加して。その後、Opusサブエージェントを起動しようとして拒否されることを確認して。",
                            "prompt_en": "Add Agent(model:opus) to permissions.deny, then try to launch an Opus subagent and confirm it is denied.",
                            "expected": "Opusサブエージェントの起動だけが拒否される",
                            "expected_en": "Only Opus subagent launches are denied"
                        },
                        {
                            "step": 2,
                            "action": "auto modeの破壊的gitブロックを観察",
                            "action_en": "Observe auto-mode git blocking",
                            "prompt": "auto modeを有効にして、git reset --hard と git clean -fd を実行しようとして、自動ブロックされることを確認して。",
                            "prompt_en": "Enable auto mode, then attempt git reset --hard and git clean -fd and confirm they are auto-blocked.",
                            "expected": "破壊的gitが実行前に遮断される",
                            "expected_en": "Destructive git is blocked before running"
                        },
                        {
                            "step": 3,
                            "action": "sandbox.credentialsで機密遮断",
                            "action_en": "Block secrets with sandbox.credentials",
                            "prompt": "sandbox.credentials を有効化して、サンドボックス内コマンドから .env や秘密環境変数が読めないことを確認して。",
                            "prompt_en": "Enable sandbox.credentials and confirm sandboxed commands cannot read .env or secret env vars.",
                            "expected": "サンドボックス内でも機密の読取が遮断される",
                            "expected_en": "Secrets stay unreadable even inside the sandbox"
                        },
                        {
                            "step": 4,
                            "action": "acceptEditsの保護パスを確認",
                            "action_en": "Verify acceptEdits protected paths",
                            "prompt": "acceptEditsモードで .npmrc への書き込みを試み、自動承認されず確認プロンプトが出ることを確認して。",
                            "prompt_en": "In acceptEdits mode, try writing to .npmrc and confirm it prompts instead of auto-approving.",
                            "expected": "コード実行につながるファイルは確認が挟まる",
                            "expected_en": "Execution-bearing files trigger a prompt"
                        },
                        {
                            "step": 5,
                            "action": "自律実行のガードに組み込む",
                            "action_en": "Wire into the autonomy guard",
                            "prompt": "ここまでの設定を /goal などの長時間自律実行のガードとして1つのsettings.jsonにまとめ、夜間実行で壊れない構成にして。",
                            "prompt_en": "Consolidate these settings into one settings.json as guards for /goal-style long runs so overnight runs cannot break things.",
                            "expected": "deny+サンドボックス+auto modeブロックが重なった安全な自律設定になる",
                            "expected_en": "A layered deny + sandbox + auto-mode-block safe autonomy config"
                        }
                    ],
                    "checkpoints": [
                        "Tool(param:value) でサブエージェントのモデルを制限できた",
                        "auto modeが破壊的gitを自動ブロックすることを確認した",
                        "sandbox.credentials で機密の読取を遮断できた",
                        "acceptEditsの保護パスで確認が挟まることを確認した",
                        "長時間自律実行のガードとして重ねて構成できた"
                    ],
                    "checkpoints_en": [
                        "Restricted subagent model via Tool(param:value)",
                        "Confirmed auto mode blocks destructive git",
                        "Blocked secret reads with sandbox.credentials",
                        "Saw acceptEdits prompt on protected paths",
                        "Layered them as guards for long autonomous runs"
                    ]
                }
            }
        }
    ]
};

const HANDSON = {
    nonDev: [
        {
            id: 1,
            number: 1,
            title: "月次売上レポート作成",
            title_en: "Monthly Sales Report Creation",
            description: "売上データ（CSV）を分析し、月別・地域別の集計レポートを自動生成。データ分析の基本を学ぶ。",
            description_en: "Analyze sales data (CSV) and auto-generate monthly/regional reports. Learn data analysis basics.",
            folder: "1_sales_data_analytics",
            badge: "データ分析",
            badge_en: "Data Analysis",
            skills: ["CSV読み込み", "集計", "レポート出力"],
            skills_en: ["CSV Loading", "Aggregation", "Report Output"],
            // 関連チュートリアル
            relatedTutorials: [
                { id: "00_01", title: "Claude Codeとは何か", title_en: "What is Claude Code", reason: "エージェントの基本動作を理解", reason_en: "Understand basic agent behavior" },
                { id: "00_02", title: "エージェントという概念", title_en: "The Concept of Agents", reason: "自律的な分析の仕組みを理解", reason_en: "Understand autonomous analysis mechanism" },
                { id: "00_03", title: "コンテキストウィンドウ", title_en: "Context Window", reason: "大きなCSVを扱う際の注意点", reason_en: "Cautions when handling large CSV" }
            ],
            details: {
                goal: "売上CSVデータを分析し、月別・地域別の売上レポートをMarkdownで自動生成する",
                goal_en: "Analyze sales CSV data and auto-generate monthly/regional sales reports in Markdown",
                estimatedTime: "15-20分",
                estimatedTime_en: "15-20 min",
                difficulty: "初級",
                difficulty_en: "Beginner",
                // 準備セクション
                preparation: {
                    description: "ハンズオンを始める前に、以下のフォルダ構造とファイルを作成してください。",
                    description_en: "Create the following folder structure and files before starting the hands-on.",
                    folderStructure: `handson-1-sales/
├── data/
│   └── sales_2025.csv
└── reports/
    └── (ここにレポートが生成される)`,
                    folderStructure_en: `handson-1-sales/
├── data/
│   └── sales_2025.csv
└── reports/
    └── (reports will be generated here)`,
                    files: [
                        {
                            path: "data/sales_2025.csv",
                            description: "売上データCSV（以下の内容をコピーして作成）",
                            description_en: "Sales data CSV (copy the content below to create)",
                            content: `date,order_id,product,category,region,amount,quantity
2025-01-05,ORD001,ノートPC,電子機器,東京,128000,1
2025-01-08,ORD002,マウス,周辺機器,大阪,3500,2
2025-01-12,ORD003,キーボード,周辺機器,東京,12000,1
2025-01-15,ORD004,モニター,電子機器,福岡,45000,1
2025-01-20,ORD005,USBケーブル,周辺機器,大阪,800,5
2025-02-03,ORD006,ノートPC,電子機器,東京,135000,1
2025-02-10,ORD007,タブレット,電子機器,名古屋,68000,1
2025-02-15,ORD008,マウス,周辺機器,福岡,3200,3
2025-02-22,ORD009,ヘッドセット,周辺機器,東京,15000,1
2025-02-28,ORD010,SSD,電子機器,大阪,22000,2
2025-03-05,ORD011,ノートPC,電子機器,名古屋,142000,1
2025-03-12,ORD012,モニター,電子機器,東京,52000,1
2025-03-18,ORD013,キーボード,周辺機器,福岡,8500,2
2025-03-25,ORD014,Webカメラ,周辺機器,大阪,9800,1
2025-03-30,ORD015,外付けHDD,電子機器,東京,18000,1`
                        }
                    ],
                    setupSteps: [
                        "任意の場所に `handson-1-sales` フォルダを作成",
                        "その中に `data` フォルダと `reports` フォルダを作成",
                        "上記のCSV内容をコピーして `data/sales_2025.csv` として保存",
                        "VSCodeで `handson-1-sales` フォルダを開く",
                        "Claude Code拡張を起動"
                    ],
                    setupSteps_en: [
                        "Create `handson-1-sales` folder in any location",
                        "Create `data` folder and `reports` folder inside",
                        "Copy the CSV content above and save as `data/sales_2025.csv`",
                        "Open `handson-1-sales` folder in VSCode",
                        "Launch Claude Code extension"
                    ]
                },
                // 実行ステップ
                steps: [
                    {
                        step: 1,
                        title: "プロジェクト初期化",
                        title_en: "Project Initialization",
                        description: "Claude Codeにこのプロジェクトを認識させます",
                        description_en: "Have Claude Code recognize this project",
                        prompt: "/init",
                        prompt_en: "/init",
                        expected: "CLAUDE.mdファイルが生成され、プロジェクトの概要が記載される",
                        expected_en: "CLAUDE.md file is generated with project overview",
                        tips: "CLAUDE.mdはプロジェクトの「記憶」として機能します",
                        tips_en: "CLAUDE.md functions as the project's 'memory'"
                    },
                    {
                        step: 2,
                        title: "データ構造の確認",
                        title_en: "Check Data Structure",
                        description: "CSVファイルの内容と構造を確認します",
                        description_en: "Check the CSV file contents and structure",
                        prompt: "data/sales_2025.csv の先頭10行を表示して、各カラムの意味を説明して",
                        prompt_en: "Show the first 10 rows of data/sales_2025.csv and explain what each column means",
                        expected: "Claudeがファイルを読み込み、date, order_id, product, category, region, amount, quantityの各カラムを説明",
                        expected_en: "Claude reads the file and explains date, order_id, product, category, region, amount, quantity columns",
                        tips: "Claudeは自律的にファイルを読み込む（Read Tool）",
                        tips_en: "Claude autonomously reads files (Read Tool)"
                    },
                    {
                        step: 3,
                        title: "月別売上集計",
                        title_en: "Monthly Sales Aggregation",
                        description: "月ごとの売上合計を計算させます",
                        description_en: "Calculate sales totals by month",
                        prompt: "data/sales_2025.csv を月別に集計して、各月の売上合計を表形式で表示して",
                        prompt_en: "Aggregate data/sales_2025.csv by month and display monthly sales totals in table format",
                        expected: "1月: 189,300円、2月: 243,200円、3月: 230,300円 のような集計結果が表形式で表示される",
                        expected_en: "Aggregated results like Jan: ¥189,300, Feb: ¥243,200, Mar: ¥230,300 displayed in table format",
                        tips: "Claudeは必要に応じてPythonスクリプトを作成・実行する",
                        tips_en: "Claude creates and runs Python scripts as needed"
                    },
                    {
                        step: 4,
                        title: "地域別分析",
                        title_en: "Regional Analysis",
                        description: "地域ごとの売上を分析します",
                        description_en: "Analyze sales by region",
                        prompt: "地域別の売上も集計して、どの地域が最も売上が高いか分析して",
                        prompt_en: "Also aggregate sales by region and analyze which region has the highest sales",
                        expected: "東京、大阪、名古屋、福岡の売上比較と、東京が最も高いという分析結果",
                        expected_en: "Sales comparison of Tokyo, Osaka, Nagoya, Fukuoka with analysis showing Tokyo is highest",
                        tips: "前の会話の文脈を維持して追加分析を行う",
                        tips_en: "Additional analysis while maintaining previous conversation context"
                    },
                    {
                        step: 5,
                        title: "レポート生成",
                        title_en: "Report Generation",
                        description: "分析結果をMarkdownレポートとして出力します",
                        description_en: "Output analysis results as Markdown report",
                        prompt: "ここまでの分析結果を reports/sales_report.md としてMarkdownレポートにまとめて。冒頭に3行の要約を入れて",
                        prompt_en: "Compile the analysis results so far into a Markdown report as reports/sales_report.md. Include a 3-line summary at the beginning",
                        expected: "reports/sales_report.md が生成され、要約・月別集計・地域別分析・考察が記載される",
                        expected_en: "reports/sales_report.md is generated with summary, monthly aggregation, regional analysis, and insights",
                        tips: "ファイル出力にはWrite Toolが使用される",
                        tips_en: "Write Tool is used for file output"
                    }
                ],
                // 成果物
                outputs: [
                    { file: "CLAUDE.md", description: "プロジェクト設定ファイル", description_en: "Project configuration file" },
                    { file: "reports/sales_report.md", description: "生成された売上レポート", description_en: "Generated sales report" }
                ],
                // 完了チェックリスト
                checkpoints: [
                    "CSVデータが正しく読み込まれた",
                    "月別の売上合計が表示された",
                    "地域別の売上比較ができた",
                    "Markdownレポートが生成された"
                ],
                checkpoints_en: [
                    "CSV data was read correctly",
                    "Monthly sales totals were displayed",
                    "Regional sales comparison was done",
                    "Markdown report was generated"
                ],
                // 学びのポイント
                learningPoints: [
                    "Claude Codeは「エージェント」としてファイルを自律的に読み込む",
                    "複数のステップを会話形式で進められる",
                    "分析からレポート生成まで一連の流れを自動化できる"
                ],
                learningPoints_en: [
                    "Claude Code autonomously reads files as an 'agent'",
                    "Multiple steps can be progressed conversationally",
                    "The entire flow from analysis to report generation can be automated"
                ]
            }
        },
        {
            id: 2,
            number: 2,
            title: "ドキュメント整理・リネーム",
            title_en: "Document Organization & Renaming",
            description: "散らばったファイルを自動で整理・リネーム。命名規則に従った一括処理を体験。",
            description_en: "Automatically organize and rename scattered files. Experience batch processing with naming conventions.",
            folder: "2_document_organization",
            badge: "ファイル操作",
            badge_en: "File Operations",
            skills: ["Glob検索", "リネーム", "フォルダ整理"],
            skills_en: ["Glob Search", "Renaming", "Folder Organization"],
            relatedTutorials: [
                { id: "00_01", title: "Claude Codeとは何か", title_en: "What is Claude Code", reason: "ファイル操作ツールの理解", reason_en: "Understanding file operation tools" },
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "計画を立ててから実行", reason_en: "Plan before execution" }
            ],
            details: {
                goal: "命名規則に従ってファイルを一括リネーム・整理する",
                goal_en: "Batch rename and organize files following naming conventions",
                estimatedTime: "10-15分",
                estimatedTime_en: "10-15 min",
                difficulty: "初級",
                difficulty_en: "Beginner",
                preparation: {
                    description: "以下のフォルダ構造と散らばったファイルを作成してください。",
                    description_en: "Create the following folder structure with scattered files.",
                    folderStructure: `handson-2-organize/
├── 議事録0115.txt
├── report_q1.docx
├── 企画書（修正版）.pdf
├── meeting_20250120.txt
├── sales_data.xlsx
└── organized/
    └── (ここに整理される)`,
                    folderStructure_en: `handson-2-organize/
├── minutes_0115.txt
├── report_q1.docx
├── proposal_revised.pdf
├── meeting_20250120.txt
├── sales_data.xlsx
└── organized/
    └── (files will be organized here)`,
                    files: [
                        {
                            path: "議事録0115.txt",
                            description: "日本語ファイル名の議事録",
                            description_en: "Meeting minutes with Japanese filename",
                            content: `プロジェクトA 定例会議
日時: 2025年1月15日 14:00-15:00
参加者: 田中、佐藤、鈴木

議題:
1. 進捗報告
2. 次週の予定

決定事項:
- 来週までにプロトタイプ完成
- テスト環境の準備`
                        },
                        {
                            path: "report_q1.docx",
                            description: "Q1レポート（空でOK）",
                            description_en: "Q1 report (empty is OK)",
                            content: "(Word文書として作成、中身は空でも可)"
                        },
                        {
                            path: "企画書（修正版）.pdf",
                            description: "日本語名のPDF（空でOK）",
                            description_en: "PDF with Japanese name (empty is OK)",
                            content: "(PDFとして作成、中身は空でも可)"
                        },
                        {
                            path: "meeting_20250120.txt",
                            description: "英語ファイル名の議事録",
                            description_en: "Meeting minutes with English filename",
                            content: `Weekly Team Meeting
Date: 2025-01-20
Attendees: Team A

Topics discussed:
- Sprint planning
- Bug fixes

Action items:
- Fix critical bug by Friday`
                        }
                    ],
                    setupSteps: [
                        "`handson-2-organize` フォルダを作成",
                        "上記のファイルを作成（.docxと.pdfは空ファイルでOK）",
                        "`organized` サブフォルダを作成",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-2-organize` folder",
                        "Create the files above (.docx and .pdf can be empty)",
                        "Create `organized` subfolder",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "現状把握",
                        title_en: "Assess Current State",
                        description: "フォルダ内のファイル一覧を確認します",
                        description_en: "Check the list of files in the folder",
                        prompt: "このフォルダ内のすべてのファイルを一覧にして、ファイル名の命名パターンを分析して",
                        prompt_en: "List all files in this folder and analyze the naming patterns",
                        expected: "ファイル一覧と「日本語名」「英語名」「日付形式の違い」などのパターンが報告される",
                        expected_en: "File list with patterns like 'Japanese names', 'English names', 'date format differences' are reported",
                        tips: "Glob Toolでファイル検索が行われる",
                        tips_en: "Glob Tool is used for file search"
                    },
                    {
                        step: 2,
                        title: "リネーム計画の作成",
                        title_en: "Create Rename Plan",
                        description: "命名規則に基づいたリネーム計画を立てます",
                        description_en: "Create a rename plan based on naming conventions",
                        prompt: "ファイル名を「YYYY-MM-DD_カテゴリ_タイトル.拡張子」の形式に統一するリネーム計画を立てて。まだ実行しないで",
                        prompt_en: "Create a plan to standardize filenames to 'YYYY-MM-DD_category_title.ext' format. Don't execute yet",
                        expected: "各ファイルの「現在の名前 → 新しい名前」の対応表が提示される",
                        expected_en: "Mapping table of 'current name → new name' for each file is presented",
                        tips: "「まだ実行しないで」で計画のみを確認できる",
                        tips_en: "'Don't execute yet' lets you review the plan first"
                    },
                    {
                        step: 3,
                        title: "計画の確認と実行",
                        title_en: "Confirm and Execute Plan",
                        description: "計画を確認してからリネームを実行します",
                        description_en: "Execute the rename after confirming the plan",
                        prompt: "計画に問題なければ、リネームを実行して",
                        prompt_en: "If the plan looks good, execute the rename",
                        expected: "ファイルが新しい名前にリネームされる",
                        expected_en: "Files are renamed to new names",
                        tips: "Bash Toolでmvコマンドが実行される",
                        tips_en: "mv command is executed via Bash Tool"
                    },
                    {
                        step: 4,
                        title: "整理の確認",
                        title_en: "Verify Organization",
                        description: "リネーム結果を確認します",
                        description_en: "Verify the rename results",
                        prompt: "リネーム結果を一覧表示して、正しくリネームされたか確認して",
                        prompt_en: "Display the rename results and verify correct renaming",
                        expected: "統一された命名規則でファイルが一覧表示される",
                        expected_en: "Files are listed with unified naming convention",
                        tips: "結果を確認することで品質を担保",
                        tips_en: "Verify results to ensure quality"
                    }
                ],
                outputs: [
                    { file: "2025-01-15_議事録_プロジェクトA.txt", description: "リネームされた議事録", description_en: "Renamed meeting minutes" },
                    { file: "2025-01-20_議事録_WeeklyMeeting.txt", description: "リネームされた議事録", description_en: "Renamed meeting minutes" }
                ],
                checkpoints: [
                    "ファイル一覧が正しく取得できた",
                    "リネーム計画が提示された",
                    "命名規則に従ってリネームされた",
                    "すべてのファイルが正しく処理された"
                ],
                checkpoints_en: [
                    "File list was correctly obtained",
                    "Rename plan was presented",
                    "Renamed according to naming conventions",
                    "All files were processed correctly"
                ],
                learningPoints: [
                    "「計画→確認→実行」のフローで安全に操作できる",
                    "Glob/Bashツールでファイル操作を自動化",
                    "「まだ実行しないで」で事前確認が可能"
                ],
                learningPoints_en: [
                    "Safely operate with 'plan→confirm→execute' flow",
                    "Automate file operations with Glob/Bash tools",
                    "'Don't execute yet' enables prior confirmation"
                ]
            }
        },
        {
            id: 3,
            number: 3,
            title: "仕様からドキュメント生成",
            title_en: "Generate Documentation from Specs",
            description: "API仕様（YAML）や設定ファイル（JSON）からドキュメントを自動生成。",
            description_en: "Auto-generate documentation from API specs (YAML) and config files (JSON).",
            folder: "3_spec_to_docs",
            badge: "ドキュメント",
            badge_en: "Documentation",
            skills: ["YAML解析", "Markdown生成", "テンプレート"],
            skills_en: ["YAML Parsing", "Markdown Generation", "Templates"],
            relatedTutorials: [
                { id: "00_01", title: "Claude Codeとは何か", title_en: "What is Claude Code", reason: "ファイル読み込みの基本", reason_en: "Basics of file reading" },
                { id: "01_01", title: "CLAUDE.md - プロジェクトの記憶", title_en: "CLAUDE.md - Project Memory", reason: "ドキュメントテンプレートの設定", reason_en: "Document template configuration" }
            ],
            details: {
                goal: "YAML/JSON仕様ファイルからMarkdownドキュメントを自動生成する",
                goal_en: "Auto-generate Markdown documentation from YAML/JSON specification files",
                estimatedTime: "15-20分",
                estimatedTime_en: "15-20 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "以下のAPI仕様ファイルを作成してください。",
                    description_en: "Create the following API specification files.",
                    folderStructure: `handson-3-docs/
├── api_spec.yaml
├── config_sample.json
└── docs/
    └── (ここにドキュメントが生成される)`,
                    folderStructure_en: `handson-3-docs/
├── api_spec.yaml
├── config_sample.json
└── docs/
    └── (documentation will be generated here)`,
                    files: [
                        {
                            path: "api_spec.yaml",
                            description: "OpenAPI形式のAPI仕様",
                            description_en: "API specification in OpenAPI format",
                            content: `openapi: 3.0.0
info:
  title: タスク管理API
  version: 1.0.0
  description: シンプルなタスク管理システムのREST API

paths:
  /tasks:
    get:
      summary: タスク一覧取得
      description: 登録されているすべてのタスクを取得します
      parameters:
        - name: status
          in: query
          description: フィルタするステータス
          schema:
            type: string
            enum: [pending, done]
      responses:
        '200':
          description: タスク一覧
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Task'
    post:
      summary: タスク作成
      description: 新しいタスクを作成します
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [title]
              properties:
                title:
                  type: string
                  description: タスクのタイトル
                description:
                  type: string
                  description: タスクの詳細説明
      responses:
        '201':
          description: 作成されたタスク

  /tasks/{id}:
    get:
      summary: タスク詳細取得
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: タスク詳細
    delete:
      summary: タスク削除
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: 削除成功

components:
  schemas:
    Task:
      type: object
      properties:
        id:
          type: integer
          description: タスクID
        title:
          type: string
          description: タイトル
        status:
          type: string
          enum: [pending, done]
          description: ステータス
        created_at:
          type: string
          format: date-time
          description: 作成日時`
                        },
                        {
                            path: "config_sample.json",
                            description: "アプリケーション設定ファイル",
                            description_en: "Application configuration file",
                            content: `{
  "app": {
    "name": "TaskManager",
    "version": "1.0.0",
    "debug": false
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "taskdb",
    "pool_size": 10
  },
  "api": {
    "rate_limit": 100,
    "timeout_seconds": 30,
    "cors_origins": ["http://localhost:3000"]
  },
  "logging": {
    "level": "INFO",
    "format": "json",
    "output": "stdout"
  }
}`
                        }
                    ],
                    setupSteps: [
                        "`handson-3-docs` フォルダを作成",
                        "`api_spec.yaml` を作成（上記内容をコピー）",
                        "`config_sample.json` を作成（上記内容をコピー）",
                        "`docs` サブフォルダを作成",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-3-docs` folder",
                        "Create `api_spec.yaml` (copy content above)",
                        "Create `config_sample.json` (copy content above)",
                        "Create `docs` subfolder",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "API仕様の理解",
                        title_en: "Understand API Specification",
                        description: "YAML仕様を読み込んで概要を把握します",
                        description_en: "Read the YAML spec to understand the overview",
                        prompt: "@api_spec.yaml を読んで、このAPIの概要を説明して。エンドポイント数、主な機能を教えて",
                        prompt_en: "Read @api_spec.yaml and explain this API's overview. Tell me the number of endpoints and main features",
                        expected: "4つのエンドポイント（GET/POST /tasks, GET/DELETE /tasks/{id}）とタスク管理機能の説明",
                        expected_en: "Explanation of 4 endpoints (GET/POST /tasks, GET/DELETE /tasks/{id}) and task management features",
                        tips: "@記法でファイルを直接参照できる",
                        tips_en: "You can directly reference files with @ notation"
                    },
                    {
                        step: 2,
                        title: "APIドキュメント生成",
                        title_en: "Generate API Documentation",
                        description: "仕様からMarkdownドキュメントを生成します",
                        description_en: "Generate Markdown documentation from the specification",
                        prompt: "このAPI仕様から docs/api.md としてMarkdownドキュメントを生成して。各エンドポイントの説明、パラメータ、リクエスト/レスポンス例を含めて",
                        prompt_en: "Generate Markdown documentation as docs/api.md from this API spec. Include endpoint descriptions, parameters, and request/response examples",
                        expected: "整形されたAPIドキュメントが docs/api.md に生成される",
                        expected_en: "Formatted API documentation is generated at docs/api.md",
                        tips: "Claude Codeはファイル構造を理解してドキュメント化",
                        tips_en: "Claude Code understands file structure and creates documentation"
                    },
                    {
                        step: 3,
                        title: "設定ドキュメント生成",
                        title_en: "Generate Config Documentation",
                        description: "JSON設定ファイルのドキュメントを生成します",
                        description_en: "Generate documentation for the JSON config file",
                        prompt: "@config_sample.json の各設定項目の説明ドキュメントを docs/config.md として生成して。各項目の意味、デフォルト値、許容値を記載して",
                        prompt_en: "Generate documentation for each setting in @config_sample.json as docs/config.md. Include meaning, default values, and allowed values for each item",
                        expected: "設定項目の説明ドキュメントが生成される",
                        expected_en: "Configuration item documentation is generated",
                        tips: "JSONの構造を解析してドキュメント化",
                        tips_en: "Parses JSON structure into documentation"
                    },
                    {
                        step: 4,
                        title: "目次ページ作成",
                        title_en: "Create Table of Contents",
                        description: "ドキュメントの目次ページを作成します",
                        description_en: "Create a table of contents page for documentation",
                        prompt: "docs/README.md として、api.md と config.md へのリンクを含む目次ページを作成して",
                        prompt_en: "Create a table of contents page as docs/README.md with links to api.md and config.md",
                        expected: "リンク付きの目次ページが生成される",
                        expected_en: "Table of contents page with links is generated",
                        tips: "関連ファイルを束ねる目次を作成",
                        tips_en: "Create an index that bundles related files"
                    }
                ],
                outputs: [
                    { file: "docs/api.md", description: "APIドキュメント", description_en: "API documentation" },
                    { file: "docs/config.md", description: "設定ドキュメント", description_en: "Configuration documentation" },
                    { file: "docs/README.md", description: "目次ページ", description_en: "Table of contents page" }
                ],
                checkpoints: [
                    "YAML仕様が正しく解析された",
                    "APIドキュメントにすべてのエンドポイントが記載",
                    "設定ドキュメントにすべての項目が記載",
                    "目次から各ドキュメントにアクセスできる"
                ],
                checkpoints_en: [
                    "YAML spec was correctly parsed",
                    "API documentation includes all endpoints",
                    "Config documentation includes all items",
                    "Can access each document from table of contents"
                ],
                learningPoints: [
                    "@記法でファイルを直接参照できる",
                    "構造化データからドキュメントを自動生成",
                    "複数ファイルを連携させたドキュメント作成"
                ],
                learningPoints_en: [
                    "Can directly reference files with @ notation",
                    "Auto-generate documentation from structured data",
                    "Create documentation with multiple file coordination"
                ]
            }
        },
        {
            id: 4,
            number: 4,
            title: "議事録の要約・タスク抽出",
            title_en: "Meeting Minutes Summary & Task Extraction",
            description: "議事録テキストを分析し、要約と次のアクションを自動抽出。",
            description_en: "Analyze meeting notes text and auto-extract summary and action items.",
            folder: "4_meeting_notes_analytics",
            badge: "テキスト分析",
            badge_en: "Text Analysis",
            skills: ["テキスト解析", "要約", "タスク抽出"],
            skills_en: ["Text Parsing", "Summarization", "Task Extraction"],
            relatedTutorials: [
                { id: "00_02", title: "エージェントという概念", title_en: "The Concept of Agents", reason: "自律的な分析の理解", reason_en: "Understanding autonomous analysis" },
                { id: "03_03", title: "非技術者向けの使い方", title_en: "Usage for Non-Developers", reason: "自然言語での依頼方法", reason_en: "How to make requests in natural language" }
            ],
            details: {
                goal: "議事録テキストから構造化された要約とタスクリストを抽出する",
                goal_en: "Extract structured summary and task list from meeting notes text",
                estimatedTime: "10-15分",
                estimatedTime_en: "10-15 min",
                difficulty: "初級",
                difficulty_en: "Beginner",
                preparation: {
                    description: "以下の議事録テキストを作成してください。",
                    description_en: "Create the following meeting notes text.",
                    folderStructure: `handson-4-meeting/
├── meeting_notes.txt
└── summary/
    └── (ここに要約が生成される)`,
                    folderStructure_en: `handson-4-meeting/
├── meeting_notes.txt
└── summary/
    └── (summary will be generated here)`,
                    files: [
                        {
                            path: "meeting_notes.txt",
                            description: "サンプル議事録",
                            description_en: "Sample meeting notes",
                            content: `プロジェクトX 週次定例会議

日時: 2025年1月20日（月）14:00-15:30
場所: 会議室A（オンライン併用）
参加者: 田中（PM）、佐藤（開発リーダー）、鈴木（デザイナー）、高橋（QA）

■ 前回アクションの確認
- 田中: 要件定義書のレビュー完了 → 完了
- 佐藤: プロトタイプの修正 → 一部残り
- 鈴木: UI改善案の提出 → 完了

■ 今週の進捗報告
【開発チーム（佐藤）】
- ログイン機能の実装完了
- API連携部分で想定外の問題が発生
  - 外部APIのレスポンス形式が変更されていた
  - 対応に2日程度必要

【デザイン（鈴木）】
- ダッシュボード画面のデザイン完了
- ユーザーテスト用のプロトタイプ準備中

【QA（高橋）】
- テスト計画書のドラフト作成完了
- 来週からテスト環境の構築開始予定

■ 議論・決定事項
1. リリース日程について
   - 当初2月末予定だったが、API問題を考慮して1週間延期
   - 新リリース日: 3月7日（金）

2. 追加機能について
   - 顧客から多要素認証の要望あり
   - 優先度を検討し、フェーズ2で対応することに決定

3. 予算について
   - テスト環境のクラウド費用追加承認
   - 月額5万円の追加予算を確保

■ 次回までのアクション
- 田中: ステークホルダーへリリース延期の連絡（1/22まで）
- 佐藤: API問題の修正と報告（1/24まで）
- 鈴木: ダッシュボードのユーザーテスト実施（1/26まで）
- 高橋: テスト環境構築開始（1/23から）

■ 次回会議
日時: 2025年1月27日（月）14:00-
議題: スプリント2のプランニング`
                        }
                    ],
                    setupSteps: [
                        "`handson-4-meeting` フォルダを作成",
                        "`meeting_notes.txt` を作成（上記内容をコピー）",
                        "`summary` サブフォルダを作成",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-4-meeting` folder",
                        "Create `meeting_notes.txt` (copy content above)",
                        "Create `summary` subfolder",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "議事録の読み込み",
                        title_en: "Load Meeting Notes",
                        description: "議事録の内容を確認します",
                        description_en: "Check the meeting notes content",
                        prompt: "@meeting_notes.txt を読んで、この会議の概要を3行で説明して",
                        prompt_en: "Read @meeting_notes.txt and explain this meeting's overview in 3 lines",
                        expected: "プロジェクトX定例会議、リリース延期決定、各メンバーのアクション設定 などの要約",
                        expected_en: "Summary including Project X regular meeting, release delay decision, action assignments for each member",
                        tips: "まず全体像を把握してから詳細へ",
                        tips_en: "Grasp the big picture first, then go into details"
                    },
                    {
                        step: 2,
                        title: "構造化された要約作成",
                        title_en: "Create Structured Summary",
                        description: "議事録を構造化して要約します",
                        description_en: "Structure and summarize the meeting notes",
                        prompt: "この議事録を以下の形式で要約して：\\n- 基本情報（日時・参加者）\\n- 主な決定事項\\n- 重要な変更点\\n- リスク・課題",
                        prompt_en: "Summarize these meeting notes in the following format:\\n- Basic info (date/attendees)\\n- Key decisions\\n- Important changes\\n- Risks/issues",
                        expected: "構造化された要約が表示される（リリース延期、API問題、予算追加などがまとまる）",
                        expected_en: "Structured summary is displayed (release delay, API issues, additional budget are summarized)",
                        tips: "フォーマットを指定すると構造化される",
                        tips_en: "Specifying format structures the output"
                    },
                    {
                        step: 3,
                        title: "タスクリスト抽出",
                        title_en: "Extract Task List",
                        description: "具体的なタスクを抽出します",
                        description_en: "Extract specific tasks",
                        prompt: "議事録から「誰が」「何を」「いつまでに」行うかを表形式でタスクリストとして抽出して",
                        prompt_en: "Extract a task list in table format showing 'who' does 'what' by 'when' from the meeting notes",
                        expected: "| 担当者 | タスク | 期限 | の表形式でタスク一覧",
                        expected_en: "Task list in table format: | Assignee | Task | Deadline |",
                        tips: "表形式を指定すると見やすく整理される",
                        tips_en: "Specifying table format organizes output clearly"
                    },
                    {
                        step: 4,
                        title: "ファイル出力",
                        title_en: "Output to File",
                        description: "要約とタスクをファイルに保存します",
                        description_en: "Save summary and tasks to a file",
                        prompt: "ここまでの要約とタスクリストを summary/meeting_summary.md として保存して",
                        prompt_en: "Save the summary and task list so far as summary/meeting_summary.md",
                        expected: "Markdownファイルが生成される",
                        expected_en: "Markdown file is generated",
                        tips: "結果をファイルに保存して共有可能に",
                        tips_en: "Save results to file for sharing"
                    }
                ],
                outputs: [
                    { file: "summary/meeting_summary.md", description: "議事録要約とタスクリスト", description_en: "Meeting summary and task list" }
                ],
                checkpoints: [
                    "議事録が正しく読み込まれた",
                    "構造化された要約が作成された",
                    "すべてのタスクが抽出された（4件）",
                    "期限が正しく記載されている"
                ],
                checkpoints_en: [
                    "Meeting notes were correctly read",
                    "Structured summary was created",
                    "All tasks were extracted (4 items)",
                    "Deadlines are correctly listed"
                ],
                learningPoints: [
                    "自然言語のテキストから情報を抽出",
                    "フォーマット指定で構造化出力",
                    "非定型データから定型フォーマットへの変換"
                ],
                learningPoints_en: [
                    "Extract information from natural language text",
                    "Structured output by specifying format",
                    "Convert unstructured data to structured format"
                ]
            }
        }
    ],
    dev: [
        {
            id: 5,
            number: 5,
            title: "REST APIスタブ開発",
            title_en: "REST API Stub Development",
            description: "API仕様からFlaskスタブサーバーを自動生成。テスト駆動で開発。",
            description_en: "Auto-generate Flask stub server from API spec. Test-driven development.",
            folder: "5_rest_api_stub_development",
            badge: "バックエンド",
            badge_en: "Backend",
            skills: ["Flask", "OpenAPI", "テスト"],
            skills_en: ["Flask", "OpenAPI", "Testing"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", title_en: "Provide Verification Methods", reason: "テスト駆動開発の考え方", reason_en: "Test-driven development concept" },
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "計画を立てて実装", reason_en: "Plan before implementation" },
                { id: "02_01", title: "Skills", title_en: "Skills", reason: "再利用可能なパターン", reason_en: "Reusable patterns" }
            ],
            details: {
                goal: "OpenAPI仕様からFlaskスタブサーバーを生成し、テストを通す",
                goal_en: "Generate Flask stub server from OpenAPI spec and pass tests",
                estimatedTime: "25-30分",
                estimatedTime_en: "25-30 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "Python環境とFlaskをセットアップしてください。",
                    description_en: "Set up Python environment and Flask.",
                    folderStructure: `handson-5-api/
├── api_spec.yaml
├── app/
│   └── (ここにFlaskアプリが生成される)
├── tests/
│   └── (ここにテストが生成される)
└── requirements.txt`,
                    folderStructure_en: `handson-5-api/
├── api_spec.yaml
├── app/
│   └── (Flask app will be generated here)
├── tests/
│   └── (tests will be generated here)
└── requirements.txt`,
                    files: [
                        {
                            path: "api_spec.yaml",
                            description: "OpenAPI仕様（ハンズオン3と同じ）",
                            description_en: "OpenAPI spec (same as hands-on 3)",
                            content: `openapi: 3.0.0
info:
  title: タスク管理API
  version: 1.0.0

paths:
  /tasks:
    get:
      summary: タスク一覧取得
      responses:
        '200':
          description: タスク一覧
    post:
      summary: タスク作成
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [title]
              properties:
                title:
                  type: string
      responses:
        '201':
          description: 作成成功

  /tasks/{id}:
    get:
      summary: タスク詳細取得
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: タスク詳細
        '404':
          description: 見つからない
    delete:
      summary: タスク削除
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: 削除成功`
                        },
                        {
                            path: "requirements.txt",
                            description: "Pythonパッケージ依存",
                            description_en: "Python package dependencies",
                            content: `flask>=2.0.0
pytest>=7.0.0
requests>=2.28.0`
                        }
                    ],
                    setupSteps: [
                        "`handson-5-api` フォルダを作成",
                        "`api_spec.yaml` と `requirements.txt` を作成",
                        "`app` と `tests` サブフォルダを作成",
                        "仮想環境を作成: `python -m venv venv`",
                        "仮想環境を有効化: `source venv/bin/activate`（Mac/Linux）または `.\\venv\\Scripts\\activate`（Windows）",
                        "依存をインストール: `pip install -r requirements.txt`",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-5-api` folder",
                        "Create `api_spec.yaml` and `requirements.txt`",
                        "Create `app` and `tests` subfolders",
                        "Create virtual environment: `python -m venv venv`",
                        "Activate virtual environment: `source venv/bin/activate` (Mac/Linux) or `.\\venv\\Scripts\\activate` (Windows)",
                        "Install dependencies: `pip install -r requirements.txt`",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "API仕様の確認",
                        title_en: "Check API Specification",
                        description: "実装すべきエンドポイントを確認します",
                        description_en: "Check the endpoints to implement",
                        prompt: "@api_spec.yaml を読んで、実装すべきエンドポイントとそれぞれのリクエスト/レスポンスをリストアップして",
                        prompt_en: "Read @api_spec.yaml and list the endpoints to implement with their request/response details",
                        expected: "4つのエンドポイント（GET/POST /tasks, GET/DELETE /tasks/{id}）の詳細",
                        expected_en: "Details of 4 endpoints (GET/POST /tasks, GET/DELETE /tasks/{id})",
                        tips: "仕様を理解してから実装を開始",
                        tips_en: "Understand the spec before starting implementation"
                    },
                    {
                        step: 2,
                        title: "実装計画の作成",
                        title_en: "Create Implementation Plan",
                        description: "Planモードで実装計画を立てます",
                        description_en: "Create implementation plan in Plan mode",
                        prompt: "/plan\\nこのAPI仕様を実装するFlaskアプリを app/main.py に作成したい。インメモリでデータを保持し、テストも tests/test_api.py に作成して。計画を立てて",
                        prompt_en: "/plan\\nI want to create a Flask app in app/main.py that implements this API spec. Keep data in-memory and create tests in tests/test_api.py. Create the plan",
                        expected: "ファイル構成、実装順序、テスト方針の計画が提示される",
                        expected_en: "Plan is presented including file structure, implementation order, and test strategy",
                        tips: "/plan で計画モードに入り、実装前に確認",
                        tips_en: "Enter plan mode with /plan and confirm before implementation"
                    },
                    {
                        step: 3,
                        title: "Flaskアプリの実装",
                        title_en: "Implement Flask App",
                        description: "計画に基づいてFlaskアプリを実装します",
                        description_en: "Implement the Flask app based on the plan",
                        prompt: "計画に従って app/main.py を実装して",
                        prompt_en: "Implement app/main.py according to the plan",
                        expected: "Flaskアプリが生成され、4つのエンドポイントが実装される",
                        expected_en: "Flask app is generated with 4 endpoints implemented",
                        tips: "Claude Codeがコードを生成・ファイル作成",
                        tips_en: "Claude Code generates code and creates files"
                    },
                    {
                        step: 4,
                        title: "テストの実装",
                        title_en: "Implement Tests",
                        description: "APIテストを実装します",
                        description_en: "Implement API tests",
                        prompt: "tests/test_api.py にAPIのテストを実装して。各エンドポイントの正常系と異常系をテスト",
                        prompt_en: "Implement API tests in tests/test_api.py. Test happy path and error cases for each endpoint",
                        expected: "pytestで実行可能なテストファイルが生成される",
                        expected_en: "Test file executable with pytest is generated",
                        tips: "検証可能なテストを用意",
                        tips_en: "Prepare verifiable tests"
                    },
                    {
                        step: 5,
                        title: "テスト実行と確認",
                        title_en: "Run Tests and Verify",
                        description: "テストを実行して動作を確認します",
                        description_en: "Run tests and verify behavior",
                        prompt: "pytest tests/test_api.py -v を実行して、すべてのテストがパスすることを確認して",
                        prompt_en: "Run pytest tests/test_api.py -v and verify all tests pass",
                        expected: "テストが実行され、すべてパスする（または失敗があれば修正）",
                        expected_en: "Tests run and all pass (or fix if any fail)",
                        tips: "テストで品質を担保",
                        tips_en: "Ensure quality with tests"
                    }
                ],
                outputs: [
                    { file: "app/main.py", description: "Flaskアプリケーション", description_en: "Flask application" },
                    { file: "tests/test_api.py", description: "APIテスト", description_en: "API tests" }
                ],
                checkpoints: [
                    "4つのエンドポイントが実装された",
                    "GET /tasks がタスク一覧を返す",
                    "POST /tasks でタスクを作成できる",
                    "すべてのテストがパスする"
                ],
                checkpoints_en: [
                    "4 endpoints are implemented",
                    "GET /tasks returns task list",
                    "POST /tasks can create tasks",
                    "All tests pass"
                ],
                learningPoints: [
                    "/plan で事前に計画を立てる重要性",
                    "テスト駆動での開発フロー",
                    "仕様からコードへの自動変換"
                ],
                learningPoints_en: [
                    "Importance of planning ahead with /plan",
                    "Test-driven development flow",
                    "Automatic code generation from specification"
                ]
            }
        },
        {
            id: 6,
            number: 6,
            title: "静的Webフロント開発",
            title_en: "Static Web Frontend Development",
            description: "HTML/CSS/JSで静的Webページを開発。レスポンシブデザインを実装。",
            description_en: "Develop static web pages with HTML/CSS/JS. Implement responsive design.",
            folder: "6_web_frontend_mini",
            badge: "フロントエンド",
            badge_en: "Frontend",
            skills: ["HTML/CSS", "JavaScript", "レスポンシブ"],
            skills_en: ["HTML/CSS", "JavaScript", "Responsive"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", title_en: "Provide Verification Methods", reason: "ブラウザでの確認方法", reason_en: "How to verify in browser" },
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "段階的な開発フロー", reason_en: "Incremental development flow" }
            ],
            details: {
                goal: "機能仕様書に従ってレスポンシブな静的Webページを開発する",
                goal_en: "Develop a responsive static web page according to feature spec",
                estimatedTime: "20-25分",
                estimatedTime_en: "20-25 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "以下の機能仕様書を作成してください。",
                    description_en: "Create the following feature specification.",
                    folderStructure: `handson-6-web/
├── FEATURE_SPEC.md
├── index.html (生成される)
├── css/
│   └── style.css (生成される)
└── js/
    └── app.js (生成される)`,
                    folderStructure_en: `handson-6-web/
├── FEATURE_SPEC.md
├── index.html (will be generated)
├── css/
│   └── style.css (will be generated)
└── js/
    └── app.js (will be generated)`,
                    files: [
                        {
                            path: "FEATURE_SPEC.md",
                            description: "機能仕様書",
                            description_en: "Feature specification",
                            content: `# タスク管理アプリ 機能仕様書

## 概要
シンプルなタスク管理Webアプリケーション

## 機能要件

### 1. タスク追加機能
- テキスト入力フィールドと追加ボタン
- Enterキーでも追加可能
- 空のタスクは追加不可（バリデーション）

### 2. タスク一覧表示
- 追加されたタスクをリスト表示
- 各タスクに完了チェックボックス
- 完了したタスクは取り消し線で表示

### 3. タスク削除機能
- 各タスクに削除ボタン
- クリックで即時削除

### 4. フィルター機能
- 「すべて」「未完了」「完了」で絞り込み
- 現在のフィルターがわかるようにハイライト

## デザイン要件

### レスポンシブ対応
- モバイル: 幅320px以上
- タブレット: 幅768px以上
- デスクトップ: 幅1024px以上

### カラー
- プライマリ: #4F46E5（インディゴ）
- 背景: #F9FAFB
- テキスト: #111827

### タイポグラフィ
- フォント: system-ui, sans-serif
- 見出し: 24px, 太字
- 本文: 16px

## 技術仕様
- HTML5 + CSS3 + Vanilla JavaScript
- 外部ライブラリ不使用
- ローカルストレージでデータ永続化`
                        }
                    ],
                    setupSteps: [
                        "`handson-6-web` フォルダを作成",
                        "`FEATURE_SPEC.md` を作成（上記内容をコピー）",
                        "`css` と `js` サブフォルダを作成",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-6-web` folder",
                        "Create `FEATURE_SPEC.md` (copy content above)",
                        "Create `css` and `js` subfolders",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "仕様の確認",
                        title_en: "Check Specification",
                        description: "実装すべき機能を確認します",
                        description_en: "Check the features to implement",
                        prompt: "@FEATURE_SPEC.md を読んで、実装すべき機能をチェックリスト形式でまとめて",
                        prompt_en: "Read @FEATURE_SPEC.md and summarize the features to implement in checklist format",
                        expected: "タスク追加、一覧表示、削除、フィルターの4機能 + デザイン要件がリスト化",
                        expected_en: "4 features (add, list, delete, filter tasks) + design requirements listed",
                        tips: "仕様を明確にしてから実装開始",
                        tips_en: "Clarify spec before starting implementation"
                    },
                    {
                        step: 2,
                        title: "HTML作成",
                        title_en: "Create HTML",
                        description: "基本構造のHTMLを作成します",
                        description_en: "Create the basic HTML structure",
                        prompt: "仕様に従って index.html を作成して。セマンティックなHTMLで、css/style.css と js/app.js を読み込むように",
                        prompt_en: "Create index.html according to the spec. Use semantic HTML and load css/style.css and js/app.js",
                        expected: "入力フォーム、タスクリスト、フィルターボタンを含むHTMLが生成",
                        expected_en: "HTML with input form, task list, and filter buttons is generated",
                        tips: "構造を先に作り、スタイルは後から",
                        tips_en: "Build structure first, then add styles"
                    },
                    {
                        step: 3,
                        title: "CSS作成",
                        title_en: "Create CSS",
                        description: "レスポンシブデザインのCSSを作成します",
                        description_en: "Create responsive CSS design",
                        prompt: "css/style.css を作成して。仕様書のカラーとタイポグラフィに従い、モバイル・タブレット・デスクトップ対応のレスポンシブデザインで",
                        prompt_en: "Create css/style.css. Follow the spec's colors and typography with responsive design for mobile, tablet, and desktop",
                        expected: "メディアクエリを含むレスポンシブCSSが生成",
                        expected_en: "Responsive CSS with media queries is generated",
                        tips: "モバイルファーストで記述",
                        tips_en: "Write mobile-first"
                    },
                    {
                        step: 4,
                        title: "JavaScript作成",
                        title_en: "Create JavaScript",
                        description: "インタラクティブな機能を実装します",
                        description_en: "Implement interactive functionality",
                        prompt: "js/app.js を作成して。タスクの追加・完了・削除・フィルター機能を実装。ローカルストレージでデータ永続化",
                        prompt_en: "Create js/app.js. Implement task add, complete, delete, and filter functions. Persist data with localStorage",
                        expected: "すべての機能が実装されたJavaScriptが生成",
                        expected_en: "JavaScript with all features implemented is generated",
                        tips: "ローカルストレージで永続化",
                        tips_en: "Persist with localStorage"
                    },
                    {
                        step: 5,
                        title: "動作確認",
                        title_en: "Verify Behavior",
                        description: "ブラウザで動作を確認します",
                        description_en: "Verify behavior in browser",
                        prompt: "index.html をブラウザで開いて動作確認する方法を教えて。また、仕様書の機能がすべて実装されているかチェックして",
                        prompt_en: "Tell me how to open index.html in a browser and verify. Also check if all spec features are implemented",
                        expected: "確認手順と実装チェックリストが提示される",
                        expected_en: "Verification steps and implementation checklist are presented",
                        tips: "Live Serverなどで確認可能",
                        tips_en: "Can verify with Live Server etc."
                    }
                ],
                outputs: [
                    { file: "index.html", description: "HTMLファイル", description_en: "HTML file" },
                    { file: "css/style.css", description: "スタイルシート", description_en: "Stylesheet" },
                    { file: "js/app.js", description: "JavaScript", description_en: "JavaScript" }
                ],
                checkpoints: [
                    "タスクを追加できる",
                    "タスクを完了にできる",
                    "タスクを削除できる",
                    "フィルターが動作する",
                    "レスポンシブデザインが適用されている",
                    "ローカルストレージでデータが保持される"
                ],
                checkpoints_en: [
                    "Can add tasks",
                    "Can complete tasks",
                    "Can delete tasks",
                    "Filter works",
                    "Responsive design is applied",
                    "Data is persisted in localStorage"
                ],
                learningPoints: [
                    "仕様書からの実装フロー",
                    "HTML/CSS/JSの段階的な開発",
                    "レスポンシブデザインの実装"
                ],
                learningPoints_en: [
                    "Implementation flow from specification",
                    "Incremental HTML/CSS/JS development",
                    "Responsive design implementation"
                ]
            }
        },
        {
            id: 7,
            number: 7,
            title: "CLIツール開発",
            title_en: "CLI Tool Development",
            description: "Pythonでタスク管理CLIツールを開発。argparseとファイルI/Oを学ぶ。",
            description_en: "Develop a task management CLI tool in Python. Learn argparse and file I/O.",
            folder: "7_cli_tool_development",
            badge: "CLI開発",
            badge_en: "CLI Development",
            skills: ["Python", "argparse", "ファイルI/O"],
            skills_en: ["Python", "argparse", "File I/O"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", title_en: "Provide Verification Methods", reason: "CLIテストの方法", reason_en: "How to test CLI" },
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "段階的な開発", reason_en: "Incremental development" },
                { id: "02_02", title: "Hooks", title_en: "Hooks", reason: "CLIとの連携", reason_en: "Integration with CLI" }
            ],
            details: {
                goal: "argparseを使ったタスク管理CLIツールを開発する",
                goal_en: "Develop a task management CLI tool using argparse",
                estimatedTime: "20-25分",
                estimatedTime_en: "20-25 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "Python環境とCLI仕様書を用意してください。",
                    description_en: "Prepare Python environment and CLI specification.",
                    folderStructure: `handson-7-cli/
├── CLI_SPEC.md
├── taskman.py (生成される)
└── tasks.json (生成される)`,
                    folderStructure_en: `handson-7-cli/
├── CLI_SPEC.md
├── taskman.py (will be generated)
└── tasks.json (will be generated)`,
                    files: [
                        {
                            path: "CLI_SPEC.md",
                            description: "CLI仕様書",
                            description_en: "CLI specification",
                            content: `# taskman CLI 仕様書

## 概要
コマンドラインでタスクを管理するシンプルなツール

## コマンド一覧

### タスク追加
\`\`\`bash
taskman add "タスクのタイトル"
\`\`\`
- 新しいタスクを追加
- IDは自動採番（1から連番）

### タスク一覧
\`\`\`bash
taskman list
taskman list --status pending
taskman list --status done
\`\`\`
- すべてのタスクまたはステータスでフィルタ
- 表示形式: [ID] [STATUS] タイトル

### タスク完了
\`\`\`bash
taskman done <id>
\`\`\`
- 指定IDのタスクを完了にする

### タスク削除
\`\`\`bash
taskman remove <id>
\`\`\`
- 指定IDのタスクを削除

## データ保存
- tasks.json にJSON形式で保存
- 形式:
\`\`\`json
{
  "tasks": [
    {"id": 1, "title": "タスク1", "status": "pending"},
    {"id": 2, "title": "タスク2", "status": "done"}
  ],
  "next_id": 3
}
\`\`\`

## エラー処理
- 存在しないIDを指定した場合はエラーメッセージを表示
- ファイルが存在しない場合は新規作成`
                        }
                    ],
                    setupSteps: [
                        "`handson-7-cli` フォルダを作成",
                        "`CLI_SPEC.md` を作成（上記内容をコピー）",
                        "Python 3.8以上がインストールされていることを確認",
                        "VSCodeでフォルダを開く"
                    ],
                    setupSteps_en: [
                        "Create `handson-7-cli` folder",
                        "Create `CLI_SPEC.md` (copy content above)",
                        "Verify Python 3.8 or higher is installed",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "仕様確認",
                        title_en: "Check Specification",
                        description: "実装すべきコマンドを確認します",
                        description_en: "Check the commands to implement",
                        prompt: "@CLI_SPEC.md を読んで、実装すべきコマンドとその引数・オプションをまとめて",
                        prompt_en: "Read @CLI_SPEC.md and summarize the commands and their arguments/options to implement",
                        expected: "add, list, done, remove の4コマンドと各オプションが整理される",
                        expected_en: "4 commands (add, list, done, remove) and their options are organized",
                        tips: "仕様を明確にしてから実装",
                        tips_en: "Clarify spec before implementation"
                    },
                    {
                        step: 2,
                        title: "基本構造の実装",
                        title_en: "Implement Basic Structure",
                        description: "argparseでコマンドライン引数を処理する基本構造を作成",
                        description_en: "Create basic structure for handling command line arguments with argparse",
                        prompt: "CLI_SPEC.md に従って taskman.py の基本構造を作成して。argparseでadd, list, done, removeのサブコマンドを定義",
                        prompt_en: "Create basic structure of taskman.py according to CLI_SPEC.md. Define add, list, done, remove subcommands with argparse",
                        expected: "argparseのサブパーサー構造が実装される",
                        expected_en: "argparse subparser structure is implemented",
                        tips: "まず骨組みを作ってから詳細を実装",
                        tips_en: "Build skeleton first, then implement details"
                    },
                    {
                        step: 3,
                        title: "データ永続化の実装",
                        title_en: "Implement Data Persistence",
                        description: "JSONファイルでタスクを保存・読み込みする機能を実装",
                        description_en: "Implement save/load functionality with JSON file",
                        prompt: "tasks.json にタスクを保存・読み込みする関数を追加して。ファイルがない場合は新規作成",
                        prompt_en: "Add functions to save/load tasks to tasks.json. Create new file if it doesn't exist",
                        expected: "load_tasks(), save_tasks() 関数が実装される",
                        expected_en: "load_tasks(), save_tasks() functions are implemented",
                        tips: "try-except でファイル不在を処理",
                        tips_en: "Handle missing file with try-except"
                    },
                    {
                        step: 4,
                        title: "コマンド実装",
                        title_en: "Implement Commands",
                        description: "各コマンドの処理を実装",
                        description_en: "Implement processing for each command",
                        prompt: "add, list, done, remove の各コマンドの処理を実装して。エラー処理も含めて",
                        prompt_en: "Implement processing for add, list, done, remove commands. Include error handling",
                        expected: "すべてのコマンドが実装される",
                        expected_en: "All commands are implemented",
                        tips: "エラーメッセージも仕様通りに",
                        tips_en: "Error messages also as per spec"
                    },
                    {
                        step: 5,
                        title: "動作テスト",
                        title_en: "Test Behavior",
                        description: "CLIツールの動作を確認します",
                        description_en: "Verify CLI tool behavior",
                        prompt: "以下のコマンドを順に実行して動作確認して：\\n1. python taskman.py add \"テストタスク\"\\n2. python taskman.py list\\n3. python taskman.py done 1\\n4. python taskman.py list",
                        prompt_en: "Run these commands in order to verify:\\n1. python taskman.py add \"Test task\"\\n2. python taskman.py list\\n3. python taskman.py done 1\\n4. python taskman.py list",
                        expected: "各コマンドが正しく動作し、tasks.jsonにデータが保存される",
                        expected_en: "Each command works correctly and data is saved to tasks.json",
                        tips: "実際に実行して検証",
                        tips_en: "Verify by actually running"
                    }
                ],
                outputs: [
                    { file: "taskman.py", description: "CLIツール本体", description_en: "CLI tool main file" },
                    { file: "tasks.json", description: "タスクデータ", description_en: "Task data" }
                ],
                checkpoints: [
                    "add コマンドでタスクを追加できる",
                    "list コマンドでタスク一覧が表示される",
                    "done コマンドでタスクを完了にできる",
                    "remove コマンドでタスクを削除できる",
                    "tasks.json にデータが保存される",
                    "存在しないIDでエラーが表示される"
                ],
                checkpoints_en: [
                    "Can add tasks with add command",
                    "Task list is displayed with list command",
                    "Can complete tasks with done command",
                    "Can delete tasks with remove command",
                    "Data is saved to tasks.json",
                    "Error is displayed for non-existent ID"
                ],
                learningPoints: [
                    "argparseによるCLI引数処理",
                    "JSONファイルでのデータ永続化",
                    "エラーハンドリングの実装"
                ],
                learningPoints_en: [
                    "CLI argument handling with argparse",
                    "Data persistence with JSON files",
                    "Error handling implementation"
                ]
            }
        },
        {
            id: 8,
            number: 8,
            title: "デバッグ・トラブルシューティング",
            title_en: "Debugging & Troubleshooting",
            description: "エラーログから原因を特定し、修正、再発防止策まで。実践的なデバッグスキルを習得。",
            description_en: "Identify causes from error logs, fix issues, and prevent recurrence. Acquire practical debugging skills.",
            folder: "8_debugging",
            badge: "デバッグ",
            badge_en: "Debugging",
            skills: ["ログ分析", "原因特定", "修正", "検証"],
            skills_en: ["Log Analysis", "Root Cause Analysis", "Bug Fixing", "Verification"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", title_en: "Provide Verification Methods", reason: "検証方法の重要性", reason_en: "Importance of verification methods" },
                { id: "01_06", title: "よくある失敗パターン", title_en: "Common Failure Patterns", reason: "失敗から学ぶ", reason_en: "Learning from failures" },
                { id: "02_03", title: "Subagents", title_en: "Subagents", reason: "調査の委譲", reason_en: "Delegating investigation" }
            ],
            details: {
                goal: "意図的に埋め込まれたバグを発見・修正し、テストで検証する",
                goal_en: "Discover and fix intentionally embedded bugs, verify with tests",
                estimatedTime: "20-30分",
                estimatedTime_en: "20-30 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "バグを含むコードを用意してください。",
                    description_en: "Prepare code with bugs.",
                    folderStructure: `handson-8-debugging/
├── src/
│   └── calculator.py (バグあり)
├── tests/
│   └── test_calculator.py`,
                    folderStructure_en: `handson-8-debugging/
├── src/
│   └── calculator.py (with bugs)
├── tests/
│   └── test_calculator.py
└── error.log`,
                    files: [
                        {
                            path: "src/calculator.py",
                            description: "バグを含む計算機モジュール",
                            description_en: "Calculator module with bugs",
                            content: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    # バグ: ゼロ除算チェックなし
    return a / b

def calculate_average(numbers):
    # バグ: 空リストでエラー
    total = sum(numbers)
    return total / len(numbers)

def parse_number(text):
    # バグ: 例外処理なし
    return int(text)`
                        },
                        {
                            path: "error.log",
                            description: "エラーログ",
                            description_en: "Error log",
                            content: `[2025-01-15 10:23:45] ERROR: ZeroDivisionError in divide()
[2025-01-15 10:24:12] ERROR: ZeroDivisionError in calculate_average() - empty list
[2025-01-15 10:25:33] ERROR: ValueError in parse_number() - invalid literal`
                        }
                    ],
                    setupSteps_en: [
                        "Create `handson-8-debugging` folder",
                        "Create `src/calculator.py` with bugs (copy content above)",
                        "Create `error.log` (copy content above)",
                        "Open folder in VSCode"
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "エラーログ分析",
                        title_en: "Analyze Error Log",
                        description: "エラーログから問題を特定します",
                        description_en: "Identify problems from error log",
                        prompt: "@error.log を読んで、発生しているエラーを一覧にして。各エラーの原因と発生箇所を推測して",
                        prompt_en: "Read @error.log and list the errors. Guess the cause and location of each error",
                        expected: "3つのエラー（ZeroDivisionError x2、ValueError x1）が特定される",
                        expected_en: "3 errors are identified (ZeroDivisionError x2, ValueError x1)",
                        tips: "ログから症状を把握",
                        tips_en: "Understand symptoms from logs"
                    },
                    {
                        step: 2,
                        title: "コード調査",
                        title_en: "Investigate Code",
                        description: "エラーの根本原因を調査します",
                        description_en: "Investigate the root cause of errors",
                        prompt: "@src/calculator.py を読んで、ログで報告されたエラーの根本原因を特定して。各関数の問題点を説明して",
                        prompt_en: "Read @src/calculator.py and identify root causes of errors reported in logs. Explain issues in each function",
                        expected: "3つの関数の問題点が特定される",
                        expected_en: "Issues in 3 functions are identified",
                        tips: "コードと症状を照合",
                        tips_en: "Match code with symptoms"
                    },
                    {
                        step: 3,
                        title: "修正実装",
                        title_en: "Implement Fixes",
                        description: "特定した問題を修正します",
                        description_en: "Fix the identified problems",
                        prompt: "calculator.py の3つのバグを修正して。適切な例外処理を追加して",
                        prompt_en: "Fix the 3 bugs in calculator.py. Add appropriate exception handling",
                        expected: "ゼロ除算チェック、空リストチェック、ValueError処理が追加される",
                        expected_en: "Zero division check, empty list check, ValueError handling are added",
                        tips: "根本原因に対処",
                        tips_en: "Address the root cause"
                    },
                    {
                        step: 4,
                        title: "テスト作成・実行",
                        title_en: "Create and Run Tests",
                        description: "修正を検証するテストを作成します",
                        description_en: "Create tests to verify the fixes",
                        prompt: "修正した関数のテストを tests/test_calculator.py に作成して。正常系とエラー系の両方をテスト。その後テストを実行して",
                        prompt_en: "Create tests for fixed functions in tests/test_calculator.py. Test both happy path and error cases. Then run tests",
                        expected: "テストが作成され、すべてパスする",
                        expected_en: "Tests are created and all pass",
                        tips: "エッジケースを網羅",
                        tips_en: "Cover edge cases"
                    },
                    {
                        step: 5,
                        title: "再発防止策",
                        title_en: "Prevention Measures",
                        description: "今後の再発を防ぐ対策を検討します",
                        description_en: "Consider measures to prevent recurrence",
                        prompt: "今回のバグの再発を防ぐためのCLAUDE.mdルールを提案して",
                        prompt_en: "Propose CLAUDE.md rules to prevent recurrence of these bugs",
                        expected: "型チェック、例外処理、テストカバレッジに関するルールが提案される",
                        expected_en: "Rules for type checking, exception handling, and test coverage are proposed",
                        tips: "ルール化で再発防止",
                        tips_en: "Prevent recurrence through rules"
                    }
                ],
                outputs: [
                    { file: "src/calculator.py", description: "修正済みコード", description_en: "Fixed code" },
                    { file: "tests/test_calculator.py", description: "テストコード", description_en: "Test code" },
                    { file: "CLAUDE.md", description: "再発防止ルール", description_en: "Prevention rules" }
                ],
                checkpoints: [
                    "エラーログから問題を正確に特定できた",
                    "根本原因を特定できた",
                    "適切な修正が実装された",
                    "テストがすべてパスした",
                    "再発防止策が文書化された"
                ],
                checkpoints_en: [
                    "Accurately identified problems from error log",
                    "Identified root cause",
                    "Appropriate fixes were implemented",
                    "All tests passed",
                    "Prevention measures were documented"
                ],
                learningPoints: [
                    "ログからの問題特定",
                    "根本原因分析（RCA）",
                    "防御的プログラミング",
                    "テスト駆動の修正"
                ],
                learningPoints_en: [
                    "Problem identification from logs",
                    "Root Cause Analysis (RCA)",
                    "Defensive programming",
                    "Test-driven fixing"
                ]
            }
        },
        {
            id: 9,
            number: 9,
            title: "リファクタリング",
            title_en: "Refactoring",
            description: "既存コードの品質改善。可読性、保守性、パフォーマンスを向上させる。",
            description_en: "Improve existing code quality. Enhance readability, maintainability, and performance.",
            folder: "9_refactoring",
            badge: "リファクタ",
            badge_en: "Refactor",
            skills: ["設計パターン", "コード整理", "テスト保護"],
            skills_en: ["Design Patterns", "Code Organization", "Test Protection"],
            relatedTutorials: [
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "計画的なリファクタ", reason_en: "Planned refactoring" },
                { id: "02_01", title: "Skills", title_en: "Skills", reason: "リファクタパターンの定義", reason_en: "Define refactoring patterns" },
                { id: "03_05", title: "Writer/Reviewerパターン", title_en: "Writer/Reviewer Pattern", reason: "品質確認", reason_en: "Quality verification" }
            ],
            details: {
                goal: "スパゲッティコードをクリーンなコードにリファクタリングする",
                goal_en: "Refactor spaghetti code into clean code",
                estimatedTime: "25-35分",
                estimatedTime_en: "25-35 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "リファクタリング対象のコードを用意してください。",
                    description_en: "Prepare the code to refactor.",
                    folderStructure: `handson-9-refactoring/
├── src/
│   └── order_processor.py (リファクタ対象)
└── tests/
    └── test_order_processor.py`,
                    folderStructure_en: `handson-9-refactoring/
├── src/
│   └── order_processor.py (refactor target)
└── tests/
    └── test_order_processor.py`,
                    files: [
                        {
                            path: "src/order_processor.py",
                            description: "リファクタリング対象のコード",
                            description_en: "Code to refactor",
                            content: `# 問題: 1つの関数に複数の責務、マジックナンバー、重複コード
def process_order(order):
    # 割引計算
    total = 0
    for item in order['items']:
        total += item['price'] * item['quantity']

    if order['customer_type'] == 'gold':
        total = total * 0.8  # 20%割引
    elif order['customer_type'] == 'silver':
        total = total * 0.9  # 10%割引

    # 税金計算
    if order['region'] == 'JP':
        total = total * 1.1  # 10%税
    elif order['region'] == 'US':
        total = total * 1.08  # 8%税

    # 送料計算
    if total < 5000:
        shipping = 500
    elif total < 10000:
        shipping = 300
    else:
        shipping = 0

    total = total + shipping

    # メール送信（ハードコード）
    print(f"Order confirmed: {total}")

    return total`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "コード分析",
                        title_en: "Analyze Code",
                        description: "リファクタリングすべき問題点を特定します",
                        description_en: "Identify issues that need refactoring",
                        prompt: "@src/order_processor.py を分析して、リファクタリングすべき問題点をリストアップして。各問題の影響度も評価して",
                        prompt_en: "Analyze @src/order_processor.py and list issues to refactor. Evaluate the impact of each issue",
                        expected: "単一責任原則違反、マジックナンバー、重複コード等の問題が特定される",
                        expected_en: "Issues like single responsibility violation, magic numbers, duplicate code are identified",
                        tips: "まず全体像を把握",
                        tips_en: "Understand the big picture first"
                    },
                    {
                        step: 2,
                        title: "テスト作成（セーフティネット）",
                        title_en: "Create Tests (Safety Net)",
                        description: "リファクタリング前にテストを作成します",
                        description_en: "Create tests before refactoring",
                        prompt: "リファクタリング前に、現在の動作を保証するテストを tests/test_order_processor.py に作成して",
                        prompt_en: "Create tests to guarantee current behavior in tests/test_order_processor.py before refactoring",
                        expected: "現在の動作を検証するテストが作成される",
                        expected_en: "Tests verifying current behavior are created",
                        tips: "リファクタ前にテストで保護",
                        tips_en: "Protect with tests before refactoring"
                    },
                    {
                        step: 3,
                        title: "リファクタリング計画",
                        title_en: "Refactoring Plan",
                        description: "段階的なリファクタリング計画を立てます",
                        description_en: "Create an incremental refactoring plan",
                        prompt: "/plan 特定した問題を解決するリファクタリング計画を立てて。1. 定数抽出 2. 関数分割 3. クラス化 の順で",
                        prompt_en: "/plan Create a refactoring plan to solve identified issues. In order: 1. Extract constants 2. Split functions 3. Create classes",
                        expected: "段階的なリファクタリング計画が提示される",
                        expected_en: "Incremental refactoring plan is presented",
                        tips: "小さなステップで進める",
                        tips_en: "Progress in small steps"
                    },
                    {
                        step: 4,
                        title: "リファクタリング実行",
                        title_en: "Execute Refactoring",
                        description: "計画に従ってリファクタリングします",
                        description_en: "Refactor according to the plan",
                        prompt: "計画に従ってリファクタリングを実行して。各ステップ後にテストを実行して動作確認",
                        prompt_en: "Execute refactoring according to the plan. Run tests after each step to verify behavior",
                        expected: "クリーンなコードに変換される",
                        expected_en: "Code is converted to clean code",
                        tips: "テストで動作を確認しながら",
                        tips_en: "Verify behavior with tests as you go"
                    },
                    {
                        step: 5,
                        title: "最終確認",
                        title_en: "Final Review",
                        description: "リファクタリング結果を確認します",
                        description_en: "Review refactoring results",
                        prompt: "リファクタリング後のコードをレビューして。改善点と残課題をまとめて",
                        prompt_en: "Review the refactored code. Summarize improvements and remaining issues",
                        expected: "改善点が確認され、コード品質が向上している",
                        expected_en: "Improvements are confirmed and code quality is improved",
                        tips: "Before/Afterを比較",
                        tips_en: "Compare before/after"
                    }
                ],
                outputs: [
                    { file: "src/order_processor.py", description: "リファクタリング済みコード", description_en: "Refactored code" },
                    { file: "tests/test_order_processor.py", description: "テストコード", description_en: "Test code" }
                ],
                checkpoints: [
                    "問題点が正確に特定された",
                    "テストが作成された（セーフティネット）",
                    "マジックナンバーが定数化された",
                    "関数が単一責任に分割された",
                    "テストがすべてパスした"
                ],
                checkpoints_en: [
                    "Issues were accurately identified",
                    "Tests were created (safety net)",
                    "Magic numbers were converted to constants",
                    "Functions were split to single responsibility",
                    "All tests passed"
                ],
                learningPoints: [
                    "コードの問題点の特定方法",
                    "テストによる保護の重要性",
                    "段階的なリファクタリング",
                    "クリーンコードの原則"
                ],
                learningPoints_en: [
                    "How to identify code issues",
                    "Importance of test protection",
                    "Incremental refactoring",
                    "Clean code principles"
                ]
            }
        },
        {
            id: 10,
            number: 10,
            title: "テスト設計・TDD",
            title_en: "Test Design & TDD",
            description: "テストファーストで開発。ユニットテスト、統合テストの設計と実装。",
            description_en: "Test-first development. Design and implement unit tests and integration tests.",
            folder: "10_tdd",
            badge: "TDD",
            badge_en: "TDD",
            skills: ["テスト設計", "Red-Green-Refactor", "モック"],
            skills_en: ["Test Design", "Red-Green-Refactor", "Mocking"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", title_en: "Provide Verification Methods", reason: "検証の基本", reason_en: "Basics of verification" },
                { id: "02_01", title: "Skills", title_en: "Skills", reason: "TDDワークフローの定義", reason_en: "Define TDD workflow" },
                { id: "03_05", title: "Writer/Reviewerパターン", title_en: "Writer/Reviewer Pattern", reason: "テストと実装の分離", reason_en: "Separate tests and implementation" }
            ],
            details: {
                goal: "TDDのRed-Green-Refactorサイクルを実践する",
                goal_en: "Practice the TDD Red-Green-Refactor cycle",
                estimatedTime: "25-30分",
                estimatedTime_en: "25-30 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "TDD対象の仕様書を用意してください。",
                    description_en: "Prepare the specification for TDD.",
                    folderStructure: `handson-10-tdd/
├── SPEC.md
├── src/
│   └── user_validator.py (TDDで作成)
└── tests/
    └── test_user_validator.py (先に作成)`,
                    folderStructure_en: `handson-10-tdd/
├── SPEC.md
├── src/
│   └── user_validator.py (created with TDD)
└── tests/
    └── test_user_validator.py (created first)`,
                    files: [
                        {
                            path: "SPEC.md",
                            description: "実装仕様書",
                            description_en: "Implementation specification",
                            content: `# UserValidator 仕様書

## 概要
ユーザー入力を検証するモジュール

## 検証ルール

### メールアドレス (validate_email)
- @を含む
- ドメイン部分にドットを含む
- 空文字はNG

### パスワード (validate_password)
- 8文字以上
- 大文字、小文字、数字を各1つ以上含む

### ユーザー名 (validate_username)
- 3〜20文字
- 英数字とアンダースコアのみ
- 先頭は英字

## 戻り値
- 有効: True
- 無効: False`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "仕様理解",
                        title_en: "Understand Specification",
                        description: "仕様書からテストケースを洗い出します",
                        description_en: "Extract test cases from the specification",
                        prompt: "@SPEC.md を読んで、各関数のテストケースを洗い出して。正常系、境界値、異常系を含めて",
                        expected: "各関数につき5〜10のテストケースがリストアップされる",
                        expected_en: "5-10 test cases are listed for each function",
                        tips: "テストケースを網羅的に",
                        tips_en: "Be comprehensive with test cases"
                    },
                    {
                        step: 2,
                        title: "テスト作成（RED）",
                        title_en: "Write Tests (RED)",
                        description: "まずテストを作成します（実装前なので失敗する）",
                        description_en: "Create tests first (they will fail since no implementation exists)",
                        prompt: "tests/test_user_validator.py を作成して、先ほど洗い出したテストケースを実装して。src/user_validator.pyはまだ作成しないで",
                        expected: "テストファイルが作成される（実行すると失敗する）",
                        expected_en: "Test file is created (running tests will fail)",
                        tips: "RED: まず失敗するテスト",
                        tips_en: "RED: Start with failing tests"
                    },
                    {
                        step: 3,
                        title: "最小実装（GREEN）",
                        title_en: "Minimal Implementation (GREEN)",
                        description: "テストをパスする最小限の実装を作成します",
                        description_en: "Create minimal implementation to pass the tests",
                        prompt: "src/user_validator.py を作成して、テストがパスする最小限の実装を書いて。テストを実行して確認して",
                        expected: "すべてのテストがパスする",
                        expected_en: "All tests pass",
                        tips: "GREEN: テストをパスさせる",
                        tips_en: "GREEN: Make tests pass"
                    },
                    {
                        step: 4,
                        title: "リファクタリング（REFACTOR）",
                        title_en: "Refactoring (REFACTOR)",
                        description: "コードを整理します",
                        description_en: "Clean up the code",
                        prompt: "テストがパスしたまま、コードをリファクタリングして。重複を排除し、可読性を向上させて",
                        expected: "コードが整理され、テストは引き続きパスする",
                        expected_en: "Code is cleaned up and tests continue to pass",
                        tips: "REFACTOR: 品質向上",
                        tips_en: "REFACTOR: Improve quality"
                    },
                    {
                        step: 5,
                        title: "追加テスト",
                        title_en: "Additional Tests",
                        description: "エッジケースのテストを追加します",
                        description_en: "Add tests for edge cases",
                        prompt: "漏れているエッジケースがあれば追加テストを書いて、実装も修正して",
                        expected: "カバレッジが向上する",
                        expected_en: "Coverage improves",
                        tips: "カバレッジを意識",
                        tips_en: "Be mindful of coverage"
                    }
                ],
                outputs: [
                    { file: "src/user_validator.py", description: "TDDで作成したコード", description_en: "Code created with TDD" },
                    { file: "tests/test_user_validator.py", description: "テストコード", description_en: "Test code" }
                ],
                checkpoints: [
                    "仕様からテストケースを導出できた",
                    "テストが先に作成された（RED）",
                    "最小限の実装でテストがパスした（GREEN）",
                    "リファクタリングでコードが改善された",
                    "すべてのテストがパスしている"
                ],
                checkpoints_en: [
                    "Derived test cases from specification",
                    "Tests were created first (RED)",
                    "Minimum implementation passed tests (GREEN)",
                    "Code improved with refactoring",
                    "All tests are passing"
                ],
                learningPoints: [
                    "TDDのRed-Green-Refactorサイクル",
                    "テストケースの網羅的な設計",
                    "最小限の実装の考え方",
                    "テストを壊さないリファクタリング"
                ],
                learningPoints_en: [
                    "TDD Red-Green-Refactor cycle",
                    "Comprehensive test case design",
                    "Minimum implementation approach",
                    "Refactoring without breaking tests"
                ]
            }
        },
        {
            id: 11,
            number: 11,
            title: "コードレビュー実践",
            title_en: "Practical Code Review",
            description: "セキュリティ、パフォーマンス、可読性の3観点で実践的なレビュー。",
            description_en: "Practical review from 3 perspectives: security, performance, and readability.",
            folder: "11_code_review",
            badge: "レビュー",
            badge_en: "Review",
            skills: ["セキュリティ", "パフォーマンス", "可読性"],
            skills_en: ["Security", "Performance", "Readability"],
            relatedTutorials: [
                { id: "02_01", title: "Skills", title_en: "Skills", reason: "レビュースキルの定義", reason_en: "Define review skills" },
                { id: "02_03", title: "Subagents", title_en: "Subagents", reason: "レビューの委譲", reason_en: "Delegate review" },
                { id: "03_05", title: "Writer/Reviewerパターン", title_en: "Writer/Reviewer Pattern", reason: "レビューの分離", reason_en: "Separate review" }
            ],
            details: {
                goal: "問題のあるコードをレビューし、改善提案と修正を行う",
                goal_en: "Review problematic code and make improvement suggestions and fixes",
                estimatedTime: "20-25分",
                estimatedTime_en: "20-25 min",
                difficulty: "中級",
                difficulty_en: "Intermediate",
                preparation: {
                    description: "レビュー対象のコードを用意してください。",
                    description_en: "Prepare the code to review.",
                    folderStructure: `handson-11-review/
├── src/
│   └── user_api.py (レビュー対象)
└── REVIEW_REPORT.md (生成される)`,
                    folderStructure_en: `handson-11-review/
├── src/
│   └── user_api.py (review target)
└── REVIEW_REPORT.md (will be generated)`,
                    files: [
                        {
                            path: "src/user_api.py",
                            description: "レビュー対象のAPIコード",
                            content: `import sqlite3
import json

def get_user(user_id):
    # セキュリティ問題: SQLインジェクション脆弱性
    conn = sqlite3.connect('users.db')
    cursor = conn.execute(f"SELECT * FROM users WHERE id = {user_id}")
    user = cursor.fetchone()
    conn.close()
    return user

def search_users(query):
    # パフォーマンス問題: N+1クエリ
    conn = sqlite3.connect('users.db')
    users = conn.execute("SELECT id FROM users").fetchall()
    results = []
    for user in users:
        detail = conn.execute(f"SELECT * FROM users WHERE id = {user[0]}").fetchone()
        if query.lower() in str(detail).lower():
            results.append(detail)
    conn.close()
    return results

def update_user(user_id, data):
    # 可読性問題: ネストが深い、エラー処理なし
    conn = sqlite3.connect('users.db')
    if data:
        if 'name' in data:
            if len(data['name']) > 0:
                conn.execute(f"UPDATE users SET name = '{data['name']}' WHERE id = {user_id}")
        if 'email' in data:
            if '@' in data['email']:
                conn.execute(f"UPDATE users SET email = '{data['email']}' WHERE id = {user_id}")
    conn.commit()
    conn.close()
    return True

PASSWORD = "admin123"  # セキュリティ問題: ハードコードされた認証情報`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "セキュリティレビュー",
                        title_en: "Security Review",
                        description: "セキュリティ脆弱性を検出します",
                        description_en: "Detect security vulnerabilities",
                        prompt: "@src/user_api.py をセキュリティの観点でレビューして。SQLインジェクション、認証情報のハードコード、その他の脆弱性を特定して",
                        expected: "SQLインジェクション3箇所、ハードコードされた認証情報が検出される",
                        expected_en: "3 SQL injections and hardcoded credentials are detected",
                        tips: "OWASP Top 10を意識",
                        tips_en: "Keep OWASP Top 10 in mind"
                    },
                    {
                        step: 2,
                        title: "パフォーマンスレビュー",
                        title_en: "Performance Review",
                        description: "パフォーマンス問題を検出します",
                        description_en: "Detect performance issues",
                        prompt: "パフォーマンスの観点でレビューして。N+1クエリ、不要な処理、最適化の余地を特定して",
                        expected: "N+1クエリ問題が検出される",
                        expected_en: "N+1 query problem is detected",
                        tips: "DBアクセスパターンを確認",
                        tips_en: "Check DB access patterns"
                    },
                    {
                        step: 3,
                        title: "可読性レビュー",
                        title_en: "Readability Review",
                        description: "可読性の問題を検出します",
                        description_en: "Detect readability issues",
                        prompt: "可読性の観点でレビューして。ネストの深さ、関数の責務、命名の問題を特定して",
                        expected: "深いネスト、責務の混在が検出される",
                        expected_en: "Deep nesting and mixed responsibilities are detected",
                        tips: "クリーンコードの原則",
                        tips_en: "Clean Code principles"
                    },
                    {
                        step: 4,
                        title: "レビューレポート作成",
                        title_en: "Create Review Report",
                        description: "レビュー結果をレポートにまとめます",
                        description_en: "Summarize review results in a report",
                        prompt: "レビュー結果を REVIEW_REPORT.md にまとめて。各問題に 🔴Critical / 🟡Suggestion / 💭Question のラベルを付けて",
                        expected: "構造化されたレビューレポートが生成される",
                        expected_en: "A structured review report is generated",
                        tips: "重要度でラベル付け",
                        tips_en: "Label by severity"
                    },
                    {
                        step: 5,
                        title: "修正実装",
                        title_en: "Implement Fixes",
                        description: "Criticalな問題を修正します",
                        description_en: "Fix Critical issues",
                        prompt: "🔴Criticalとラベル付けした問題を修正して。パラメータ化クエリ、認証情報の外部化、ネストの解消を実装",
                        expected: "セキュリティ問題が修正される",
                        expected_en: "Security issues are fixed",
                        tips: "Criticalを優先",
                        tips_en: "Prioritize Critical"
                    }
                ],
                outputs: [
                    { file: "REVIEW_REPORT.md", description: "レビューレポート", description_en: "Review report" },
                    { file: "src/user_api.py", description: "修正済みコード", description_en: "Fixed code" }
                ],
                checkpoints: [
                    "SQLインジェクション脆弱性を検出できた",
                    "N+1クエリ問題を検出できた",
                    "可読性の問題を検出できた",
                    "レビューレポートが構造化されている",
                    "Criticalな問題が修正された"
                ],
                checkpoints_en: [
                    "Detected SQL injection vulnerability",
                    "Detected N+1 query issue",
                    "Detected readability issues",
                    "Review report is structured",
                    "Critical issues were fixed"
                ],
                learningPoints: [
                    "セキュリティ観点のレビュー",
                    "パフォーマンス観点のレビュー",
                    "可読性観点のレビュー",
                    "レビューレポートの書き方"
                ],
                learningPoints_en: [
                    "Security perspective review",
                    "Performance perspective review",
                    "Readability perspective review",
                    "How to write review reports"
                ]
            }
        },
        {
            id: 12,
            number: 12,
            title: "セキュリティ監査",
            title_en: "Security Audit",
            description: "脆弱性の検出、認証・認可の確認、機密情報の取り扱いチェック。",
            description_en: "Detect vulnerabilities, verify authentication/authorization, check secret handling.",
            folder: "12_security_audit",
            badge: "セキュリティ",
            badge_en: "Security",
            skills: ["脆弱性検出", "認証・認可", "機密情報管理"],
            skills_en: ["Vulnerability Detection", "Auth/Authorization", "Secret Management"],
            relatedTutorials: [
                { id: "02_02", title: "Hooks", title_en: "Hooks", reason: "セキュリティチェックの自動化", reason_en: "Automate security checks" },
                { id: "02_03", title: "Subagents", title_en: "Subagents", reason: "セキュリティレビューの委譲", reason_en: "Delegate security review" },
                { id: "03_07", title: "Subagents活用パターン", title_en: "Advanced Subagent Patterns", reason: "専門エージェントの活用", reason_en: "Use specialized agents" }
            ],
            details: {
                goal: "Webアプリケーションのセキュリティ監査を実施する",
                goal_en: "Conduct security audit of a web application",
                estimatedTime: "30-40分",
                estimatedTime_en: "30-40 min",
                difficulty: "上級",
                difficulty_en: "Advanced",
                preparation: {
                    description: "セキュリティ監査対象のコードを用意してください。",
                    description_en: "Prepare the code for security audit.",
                    folderStructure: `handson-12-security/
├── src/
│   ├── auth.py
│   ├── api.py
│   └── config.py
├── .env.example
└── SECURITY_REPORT.md (生成される)`,
                    folderStructure_en: `handson-12-security/
├── src/
│   ├── auth.py
│   ├── api.py
│   └── config.py
├── .env.example
└── SECURITY_REPORT.md (will be generated)`,
                    files: [
                        {
                            path: "src/auth.py",
                            description: "認証モジュール",
                            content: `import hashlib

def hash_password(password):
    # 脆弱性: MD5は非推奨、ソルトなし
    return hashlib.md5(password.encode()).hexdigest()

def verify_password(password, hashed):
    return hash_password(password) == hashed

def create_token(user_id):
    # 脆弱性: 予測可能なトークン
    import time
    return f"token_{user_id}_{int(time.time())}"

def validate_token(token):
    # 脆弱性: トークン検証が不十分
    return token.startswith("token_")`
                        },
                        {
                            path: "src/config.py",
                            description: "設定ファイル",
                            content: `# 脆弱性: 機密情報のハードコード
DATABASE_URL = "postgresql://admin:password123@localhost/myapp"
API_SECRET = "super_secret_key_12345"
DEBUG = True  # 本番でもTrueになっている

ALLOWED_HOSTS = ["*"]  # 脆弱性: ワイルドカード`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "機密情報スキャン",
                        title_en: "Secret Scanning",
                        description: "ハードコードされた機密情報を検出します",
                        description_en: "Detect hardcoded secrets",
                        prompt: "プロジェクト全体をスキャンして、ハードコードされた機密情報（パスワード、APIキー、トークン）を検出して",
                        expected: "config.py内の機密情報が検出される",
                        expected_en: "Secrets in config.py are detected",
                        tips: "grep で secrets, password, key を検索",
                        tips_en: "Search for secrets, password, key with grep"
                    },
                    {
                        step: 2,
                        title: "認証・認可監査",
                        title_en: "Auth/Authorization Audit",
                        description: "認証・認可の実装を監査します",
                        description_en: "Audit authentication and authorization implementation",
                        prompt: "@src/auth.py を監査して。パスワードハッシュ、トークン生成、検証の脆弱性を特定して",
                        expected: "MD5使用、ソルトなし、予測可能なトークンが検出される",
                        expected_en: "MD5 usage, no salt, predictable tokens are detected",
                        tips: "OWASP認証ガイドラインを参照",
                        tips_en: "Refer to OWASP authentication guidelines"
                    },
                    {
                        step: 3,
                        title: "設定セキュリティ",
                        title_en: "Configuration Security",
                        description: "設定ファイルのセキュリティを確認します",
                        description_en: "Verify security of configuration files",
                        prompt: "@src/config.py の設定を監査して。本番環境で問題となる設定を特定して",
                        expected: "DEBUG=True、ALLOWED_HOSTS=*が検出される",
                        expected_en: "DEBUG=True, ALLOWED_HOSTS=* are detected",
                        tips: "本番/開発の設定分離を確認",
                        tips_en: "Check separation of prod/dev configs"
                    },
                    {
                        step: 4,
                        title: "セキュリティレポート作成",
                        title_en: "Create Security Report",
                        description: "監査結果をレポートにまとめます",
                        description_en: "Summarize audit results in a report",
                        prompt: "監査結果を SECURITY_REPORT.md にまとめて。各脆弱性のリスクレベル（Critical/High/Medium/Low）と修正方法を記載して",
                        expected: "構造化されたセキュリティレポートが生成される",
                        expected_en: "A structured security report is generated",
                        tips: "CVSSスコアを参考に",
                        tips_en: "Reference CVSS scores"
                    },
                    {
                        step: 5,
                        title: "修正実装",
                        title_en: "Implement Fixes",
                        description: "Critical/High脆弱性を修正します",
                        description_en: "Fix Critical/High vulnerabilities",
                        prompt: "Critical/High脆弱性を修正して。bcryptへの移行、環境変数の使用、安全なトークン生成を実装して",
                        expected: "主要な脆弱性が修正される",
                        expected_en: "Major vulnerabilities are fixed",
                        tips: "段階的に修正",
                        tips_en: "Fix incrementally"
                    }
                ],
                outputs: [
                    { file: "SECURITY_REPORT.md", description: "セキュリティ監査レポート", description_en: "Security audit report" },
                    { file: "src/auth.py", description: "修正済み認証モジュール", description_en: "Fixed auth module" },
                    { file: ".env.example", description: "環境変数テンプレート", description_en: "Environment variable template" }
                ],
                checkpoints: [
                    "ハードコードされた機密情報を検出できた",
                    "認証の脆弱性を検出できた",
                    "設定の問題を検出できた",
                    "リスクレベル付きレポートが作成された",
                    "Critical脆弱性が修正された"
                ],
                checkpoints_en: [
                    "Detected hardcoded secrets",
                    "Detected authentication vulnerabilities",
                    "Detected configuration issues",
                    "Report with risk levels was created",
                    "Critical vulnerabilities were fixed"
                ],
                learningPoints: [
                    "機密情報のスキャン手法",
                    "認証・認可の監査ポイント",
                    "設定セキュリティの確認",
                    "セキュリティレポートの書き方"
                ],
                learningPoints_en: [
                    "Secret scanning techniques",
                    "Auth/authorization audit points",
                    "Configuration security check",
                    "How to write security reports"
                ]
            }
        },
        {
            id: 13,
            number: 13,
            title: "フルスタック開発ワークフロー",
            title_en: "Fullstack Development Workflow",
            description: "API設計→実装→テスト→ドキュメント→デプロイ準備の一連の流れを体験。",
            description_en: "Experience the full flow: API design → implementation → testing → documentation → deploy preparation.",
            folder: "13_fullstack_workflow",
            badge: "統合",
            badge_en: "Integration",
            skills: ["API設計", "実装", "テスト", "ドキュメント", "デプロイ"],
            skills_en: ["API Design", "Implementation", "Testing", "Documentation", "Deployment"],
            relatedTutorials: [
                { id: "01_05", title: "探索→計画→実装→コミット", title_en: "Explore→Plan→Implement→Commit", reason: "ワークフローの基本", reason_en: "Workflow basics" },
                { id: "02_01", title: "Skills", title_en: "Skills", reason: "ワークフローの自動化", reason_en: "Workflow automation" },
                { id: "03_06", title: "Fan-outパターン", title_en: "Fan-out Pattern", reason: "バッチ処理", reason_en: "Batch processing" },
                { id: "03_08", title: "Headless CI/CD", title_en: "Headless CI/CD", reason: "自動化", reason_en: "Automation" }
            ],
            details: {
                goal: "タスク管理APIをゼロから設計・実装・テスト・ドキュメント化・デプロイ準備まで行う",
                goal_en: "Design, implement, test, document, and prepare for deployment of a task management API from scratch",
                estimatedTime: "60-90分",
                estimatedTime_en: "60-90 min",
                difficulty: "上級",
                difficulty_en: "Advanced",
                preparation: {
                    description: "新しいプロジェクトフォルダを作成してください。",
                    description_en: "Create a new project folder.",
                    folderStructure: `handson-13-fullstack/
├── api/
│   ├── main.py
│   └── models.py
├── tests/
│   └── test_api.py
├── docs/
│   └── API.md
├── .github/
│   └── workflows/
│       └── ci.yml
├── requirements.txt
├── Dockerfile
└── CLAUDE.md`,
                    files: [
                        {
                            path: "requirements.txt",
                            description: "依存関係",
                            content: `flask==3.0.0
pytest==7.4.0
pytest-cov==4.1.0`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "API設計",
                        title_en: "API Design",
                        description: "REST APIを設計します",
                        description_en: "Design the REST API",
                        prompt: "/plan タスク管理REST APIを設計して。CRUD操作、フィルタリング、ページネーションを含めて。OpenAPI形式で設計案を作成して",
                        expected: "OpenAPI形式のAPI設計案が作成される",
                        expected_en: "API design in OpenAPI format is created",
                        tips: "RESTful設計原則に従う",
                        tips_en: "Follow RESTful design principles"
                    },
                    {
                        step: 2,
                        title: "モデル実装",
                        title_en: "Model Implementation",
                        description: "データモデルを実装します",
                        description_en: "Implement data models",
                        prompt: "設計に基づいて api/models.py を作成して。Task モデルと In-memory ストレージを実装して",
                        expected: "Taskモデルとストレージが実装される",
                        expected_en: "Task model and storage are implemented",
                        tips: "シンプルなモデルから開始",
                        tips_en: "Start with simple models"
                    },
                    {
                        step: 3,
                        title: "API実装",
                        title_en: "API Implementation",
                        description: "REST APIを実装します",
                        description_en: "Implement REST API",
                        prompt: "api/main.py にFlaskでREST APIを実装して。CRUD操作、エラーハンドリング、入力バリデーションを含めて",
                        expected: "完全なREST APIが実装される",
                        expected_en: "Complete REST API is implemented",
                        tips: "ステータスコードを適切に",
                        tips_en: "Use appropriate status codes"
                    },
                    {
                        step: 4,
                        title: "テスト作成・実行",
                        title_en: "Create & Run Tests",
                        description: "APIテストを作成・実行します",
                        description_en: "Create and run API tests",
                        prompt: "tests/test_api.py を作成して、全エンドポイントのテストを実装して。正常系、異常系、エッジケースを含めて。テストを実行して結果を確認して",
                        expected: "テストが作成され、すべてパスする",
                        expected_en: "Tests are created and all pass",
                        tips: "カバレッジ80%以上を目指す",
                        tips_en: "Aim for 80%+ coverage"
                    },
                    {
                        step: 5,
                        title: "ドキュメント生成",
                        title_en: "Generate Documentation",
                        description: "APIドキュメントを生成します",
                        description_en: "Generate API documentation",
                        prompt: "docs/API.md を作成して、全エンドポイントのドキュメントを生成して。リクエスト/レスポンス例、エラーコードを含めて",
                        expected: "完全なAPIドキュメントが生成される",
                        expected_en: "Complete API documentation is generated",
                        tips: "実行可能な例を含める",
                        tips_en: "Include executable examples"
                    },
                    {
                        step: 6,
                        title: "Docker化",
                        title_en: "Dockerization",
                        description: "Docker設定を作成します",
                        description_en: "Create Docker configuration",
                        prompt: "Dockerfile と docker-compose.yml を作成して。本番環境向けの設定で",
                        expected: "Docker設定が作成される",
                        expected_en: "Docker configuration is created",
                        tips: "マルチステージビルドを検討",
                        tips_en: "Consider multi-stage builds"
                    },
                    {
                        step: 7,
                        title: "CI/CD設定",
                        title_en: "CI/CD Configuration",
                        description: "GitHub Actions設定を作成します",
                        description_en: "Create GitHub Actions configuration",
                        prompt: ".github/workflows/ci.yml を作成して。テスト実行、カバレッジレポート、Dockerイメージビルドを含めて",
                        expected: "CI/CDパイプラインが設定される",
                        expected_en: "CI/CD pipeline is configured",
                        tips: "キャッシュを活用",
                        tips_en: "Leverage caching"
                    }
                ],
                outputs: [
                    { file: "api/main.py", description: "REST API実装", description_en: "REST API implementation" },
                    { file: "api/models.py", description: "データモデル", description_en: "Data models" },
                    { file: "tests/test_api.py", description: "テストスイート", description_en: "Test suite" },
                    { file: "docs/API.md", description: "APIドキュメント", description_en: "API documentation" },
                    { file: "Dockerfile", description: "Docker設定", description_en: "Docker configuration" },
                    { file: ".github/workflows/ci.yml", description: "CI/CD設定", description_en: "CI/CD configuration" }
                ],
                checkpoints: [
                    "API設計がRESTful原則に従っている",
                    "CRUD操作がすべて実装されている",
                    "テストカバレッジが80%以上",
                    "ドキュメントが完備されている",
                    "Dockerでビルドできる",
                    "CI/CDパイプラインが設定されている"
                ],
                checkpoints_en: [
                    "API design follows RESTful principles",
                    "All CRUD operations are implemented",
                    "Test coverage is 80% or higher",
                    "Documentation is complete",
                    "Can build with Docker",
                    "CI/CD pipeline is configured"
                ],
                learningPoints: [
                    "フルスタック開発の流れ",
                    "REST API設計のベストプラクティス",
                    "TDDによる品質担保",
                    "ドキュメント自動生成",
                    "Docker化とCI/CD"
                ],
                learningPoints_en: [
                    "Fullstack development flow",
                    "REST API design best practices",
                    "Quality assurance with TDD",
                    "Automatic documentation generation",
                    "Dockerization and CI/CD"
                ]
            }
        }
    ]
};

const BEST_PRACTICES = [
    {
        number: 1,
        title: "検証方法を提供",
        title_en: "Provide Verification Methods",
        description: "テスト、スクリーンショット、期待出力を示し、Claudeが自己検証できるようにする。これが最もレバレッジの高い一手。",
        description_en: "Provide tests, screenshots, expected outputs so Claude can self-verify. This is the highest leverage move.",
        example: {
            bad: "メール検証関数を実装して",
            bad_en: "Implement an email validation function",
            good: "validateEmail関数を書いて。test@example.comは真、invalidは偽を返す。実装後テストを実行して",
            good_en: "Write validateEmail function. test@example.com returns true, invalid returns false. Run tests after implementation"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#1-provide-ways-to-verify"
    },
    {
        number: 2,
        title: "探索→計画→実装の分離",
        title_en: "Separate Explore → Plan → Implement",
        description: "Planモードで計画を立ててから実装。いきなりコードを書かせない。",
        description_en: "Plan in Plan mode before implementing. Don't have it write code immediately.",
        example: {
            bad: "この機能を実装して",
            bad_en: "Implement this feature",
            good: "/plan でまず計画を確認してから実装",
            good_en: "First confirm the plan with /plan, then implement"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#2-be-specific-explore-then-plan-then-code"
    },
    {
        number: 3,
        title: "具体的コンテキスト提供",
        title_en: "Provide Specific Context",
        description: "@参照、画像、URLを使って曖昧さを排除。具体的なゴールを明示する。",
        description_en: "Eliminate ambiguity using @ references, images, URLs. State specific goals.",
        example: {
            bad: "あのファイルを修正して",
            bad_en: "Fix that file",
            good: "@src/utils.ts の validateEmail関数を修正して",
            good_en: "Fix the validateEmail function in @src/utils.ts"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#3-give-claude-the-context-it-needs"
    },
    {
        number: 4,
        title: "環境設定（CLAUDE.md）",
        title_en: "Environment Setup (CLAUDE.md)",
        description: "プロジェクト固有のルール、禁止事項、コーディング規約をCLAUDE.mdに記載。",
        description_en: "Document project-specific rules, prohibitions, coding conventions in CLAUDE.md.",
        example: {
            bad: "（ルールなしで毎回説明）",
            bad_en: "(Explain rules each time without documentation)",
            good: "CLAUDE.mdに規約を記載し、/init で生成",
            good_en: "Document conventions in CLAUDE.md, generate with /init"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#4-set-up-your-environment"
    },
    {
        number: 5,
        title: "会話スキル",
        title_en: "Conversation Skills",
        description: "先輩エンジニアに聞くような自然な質問をする。曖昧な指示は避ける。",
        description_en: "Ask natural questions like you would to a senior engineer. Avoid vague instructions.",
        example: {
            bad: "動かないから直して",
            bad_en: "It doesn't work, fix it",
            good: "ログイン時に500エラーが出る。auth.tsの42行目が原因だと思う。確認して",
            good_en: "Getting 500 error on login. I think line 42 in auth.ts is the cause. Please verify"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#5-use-your-conversation-skills"
    },
    {
        number: 6,
        title: "セッション管理",
        title_en: "Session Management",
        description: "Esc、/rewind、/clearで軌道修正。Context Rotを防ぐ。",
        description_en: "Course correct with Esc, /rewind, /clear. Prevent Context Rot.",
        example: {
            bad: "（エラーを繰り返し修正させる）",
            bad_en: "(Keep asking to fix errors repeatedly)",
            good: "2回失敗したら /clear して新しいアプローチで再開",
            good_en: "After 2 failures, /clear and restart with a new approach"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#6-manage-your-sessions"
    },
    {
        number: 7,
        title: "自動化・生産性向上",
        title_en: "Automation & Productivity",
        description: "ヘッドレスモード、並列セッション、Skills、Hooksで自動化を推進。",
        description_en: "Promote automation with headless mode, parallel sessions, Skills, Hooks.",
        example: {
            bad: "（毎回手動で同じ作業）",
            bad_en: "(Do the same work manually each time)",
            good: "繰り返しの作業はSkill化、Hookで自動化",
            good_en: "Turn repetitive work into Skills, automate with Hooks"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#7-automate-and-accelerate"
    }
];

// Boris Cherny氏のClaude Code TIPS（22個）
// 出典: Claude Code チーム由来、Boris本人がXで公開
const BORIS_TIPS = [
    { number: 1, category: "セッション運用", category_en: "Session Management", title: "ターミナルで5セッション並列実行", title_en: "Run 5 sessions in parallel in terminal", description: "タブに1〜5の番号を振り、システム通知で入力待ちを把握する。1つが処理中の間に別タブで次の指示。シングルスレッドで待つのはもったいない。", description_en: "Number tabs 1-5 and use system notifications to track waiting sessions. Give next instruction in another tab while one is processing. Waiting single-threaded is wasteful." },
    { number: 2, category: "セッション運用", category_en: "Session Management", title: "Web/モバイルでさらに5〜10セッション追加", title_en: "Add 5-10 more sessions on Web/mobile", description: "claude.ai/code 上でもセッションを並列で走らせている。朝はスマホからセッションを数個立ち上げることも。ただし10〜20%は想定外で放棄される。", description_en: "Run parallel sessions on claude.ai/code too. Sometimes start a few sessions from phone in the morning. However, 10-20% are abandoned unexpectedly." },
    { number: 3, category: "セッション運用", category_en: "Session Management", title: "セッションごとに独立したgit checkoutを使う", title_en: "Use independent git checkout per session", description: "ブランチやworktreeではなく、セッションごとに独自のcheckoutを用意する。これで複数セッションが同時に同じファイルを触っても衝突しない。", description_en: "Instead of branches or worktrees, prepare a unique checkout per session. This prevents conflicts when multiple sessions touch the same file simultaneously." },
    { number: 4, category: "セッション運用", category_en: "Session Management", title: "&コマンドでローカル→Webへセッション引き継ぎ", title_en: "Transfer local→Web sessions with & command", description: "ローカルのセッションを&でWeb版に引き渡し、--teleportで戻すことも可能。デスクとモバイルの行き来に便利。", description_en: "Hand off local session to web version with &, return with --teleport. Convenient for switching between desk and mobile." },
    { number: 5, category: "モデル・設定", category_en: "Model & Settings", title: "Opus 4.6を全てのコーディングに使う", title_en: "Use Opus 4.6 for all coding", description: "Sonnetより大きくて遅いが、ステアリングが少なく済みツール使用も上手い。結果的にSonnetより速く終わることが多い。「スマートなモデルへの先行投資が後の修正コストを削減する」。", description_en: "Bigger and slower than Sonnet, but needs less steering and better at tool use. Often finishes faster than Sonnet. 'Investing in smarter models upfront reduces correction costs later.'" },
    { number: 6, category: "モデル・設定", category_en: "Model & Settings", title: "CLAUDE.mdをチームでgit管理する", title_en: "Git-manage CLAUDE.md as a team", description: "各チームがリポジトリにCLAUDE.mdをチェックイン。Claudeがやらかしたミスをその都度追記して改善サイクルを回す。現在のサイズは約2.5kトークン。", description_en: "Each team checks in CLAUDE.md to repo. Add Claude's mistakes each time to run improvement cycles. Current size is about 2.5K tokens." },
    { number: 7, category: "モデル・設定", category_en: "Model & Settings", title: "PRレビュー時に@.claudeでCLAUDE.mdを更新", title_en: "Update CLAUDE.md with @.claude during PR review", description: "コードレビュー中に同僚のPRに@.claudeタグを付けて、学びをCLAUDE.mdに反映させる。GitHub Actionと連携。", description_en: "Tag colleague's PRs with @.claude during code review to reflect learnings in CLAUDE.md. Integrates with GitHub Actions." },
    { number: 8, category: "ワークフロー", category_en: "Workflow", title: "Plan Modeを最初に使う（Shift+Tab 2回）", title_en: "Use Plan Mode first (Shift+Tab twice)", description: "いきなりコードを書かせない。まずPlan Modeで計画を反復し、納得したらauto-accept editsモードに切り替えて一発実装。良い計画が一番大事。", description_en: "Don't have it write code immediately. Iterate on plan in Plan Mode first, then switch to auto-accept edits mode for one-shot implementation. A good plan is most important." },
    { number: 9, category: "ワークフロー", category_en: "Workflow", title: "スラッシュコマンドで繰り返し作業を自動化", title_en: "Automate repetitive work with slash commands", description: ".claude/commands/にgitでチェックインして共有。/commit-push-prは1日に何十回も使う。インラインbashでgit status等のコンテキストを事前計算。", description_en: "Check in to .claude/commands/ with git to share. Use /commit-push-pr dozens of times a day. Pre-compute context like git status with inline bash." },
    { number: 10, category: "ワークフロー", category_en: "Workflow", title: "サブエージェントで定型ワークフローを自動化", title_en: "Automate standard workflows with subagents", description: "code-simplifier（コード簡素化）、verify-app（E2Eテスト）、build-validator（ビルド検証）など。「よくあるPRの大半のワークフローを自動化するもの」として活用。", description_en: "code-simplifier (code simplification), verify-app (E2E tests), build-validator (build validation), etc. Use as 'things that automate most common PR workflows.'" },
    { number: 11, category: "ワークフロー", category_en: "Workflow", title: "PostToolUseフックでコードフォーマットを自動修正", title_en: "Auto-fix code formatting with PostToolUse hook", description: "Claudeのコードは「だいたい」整形されているが、最後の10%にムラがある。PostToolUseフックで`bun run format || true`を実行し、CI失敗を未然に防止。", description_en: "Claude's code is 'mostly' formatted, but the last 10% is inconsistent. Run `bun run format || true` in PostToolUse hook to prevent CI failures." },
    { number: 12, category: "ワークフロー", category_en: "Workflow", title: "/permissionsで権限を安全に管理する", title_en: "Manage permissions safely with /permissions", description: "--dangerously-skip-permissionsはほぼ使わない。/permissionsで`bun run build:*`や`bun run test:*`など安全なコマンドだけ事前許可する。設定はチーム資産として共有。", description_en: "Rarely use --dangerously-skip-permissions. Pre-allow only safe commands like `bun run build:*` and `bun run test:*` with /permissions. Share settings as team assets." },
    { number: 13, category: "外部連携", category_en: "External Integration", title: "MCPでSlack・BigQuery・Sentryなど外部ツール連携", title_en: "Integrate external tools like Slack/BigQuery/Sentry with MCP", description: ".mcp.jsonで設定を共有。Claude Codeが単なるコードエディタからワークフローハブに変わる。", description_en: "Share settings in .mcp.json. Claude Code transforms from just a code editor to a workflow hub." },
    { number: 14, category: "外部連携", category_en: "External Integration", title: "Chrome拡張でブラウザテストを自動化", title_en: "Automate browser testing with Chrome extension", description: "claude.ai/codeへの変更は全て、Chrome拡張経由でブラウザを開いてUIをテストし、動作とUXが良くなるまで反復させる。", description_en: "All changes to claude.ai/code open browser via Chrome extension to test UI, iterating until behavior and UX improve." },
    { number: 15, category: "品質・検証", category_en: "Quality & Verification", title: "検証ループが最重要（品質2〜3倍）", title_en: "Verification loop is most important (2-3x quality)", description: "「Claudeに検証手段を与えること」が全TIPSの中で一番大事。bashコマンド実行、テストスイート、ブラウザテスト、シミュレータなど。フィードバックループがあると成果物の品質が2〜3倍になる。", description_en: "'Giving Claude verification means' is the most important of all tips. Bash command execution, test suites, browser tests, simulators. Feedback loops improve deliverable quality 2-3x." },
    { number: 16, category: "品質・検証", category_en: "Quality & Verification", title: "長時間タスクは検証付きで放置する", title_en: "Leave long tasks running with verification", description: "バックグラウンドエージェント、Stopフック、プラグインを組み合わせて、完了時に自動検証させる。長時間タスクに限り、サンドボックス内で--dangerously-skip-permissionsを使うこともある。", description_en: "Combine background agents, Stop hooks, plugins to auto-verify on completion. For long tasks only, sometimes use --dangerously-skip-permissions in sandbox." },
    { number: 17, category: "チーム運用", category_en: "Team Operations", title: "259 PR/30日、46/47日連続アクティブ", title_en: "259 PRs in 30 days, active 46/47 consecutive days", description: "Boris本人の実績。497コミット、4万行追加・3.8万行削除。Claude Codeを開発プロセスの中核に据えた結果の数字。", description_en: "Boris's own record. 497 commits, 40K lines added, 38K lines deleted. Numbers from putting Claude Code at the core of development process." },
    { number: 18, category: "チーム運用", category_en: "Team Operations", title: "チーム全員がCLAUDE.mdに週次で貢献する", title_en: "Entire team contributes to CLAUDE.md weekly", description: "個人のメモではなくチームの集合知にする。スタイル規約、デザインガイドライン、PRテンプレートもここに集約。", description_en: "Make it team's collective knowledge, not personal notes. Consolidate style conventions, design guidelines, PR templates here." },
    { number: 19, category: "チーム運用", category_en: "Team Operations", title: "PRレビューで発見した学びを即座にドキュメント化", title_en: "Immediately document learnings from PR reviews", description: "「このパターンでClaude失敗した」という知見をPRの一部としてCLAUDE.mdに追記。知識が流れない仕組み。", description_en: "Add insights like 'Claude failed with this pattern' to CLAUDE.md as part of PR. System that prevents knowledge loss." },
    { number: 20, category: "応用", category_en: "Advanced", title: "Ralph Wiggumプラグインで自律長時間セッション", title_en: "Autonomous long sessions with Ralph Wiggum plugin", description: "入力待ちでブロックせずに自律的にタスクを続行するプラグイン。夜間バッチ的な使い方に向く。", description_en: "Plugin that continues tasks autonomously without blocking on input. Good for overnight batch-style usage." },
    { number: 21, category: "応用", category_en: "Advanced", title: "10〜20%の放棄を前提に多めにセッションを立てる", title_en: "Start extra sessions assuming 10-20% abandonment", description: "全セッションが成功するわけではない。想定外で放棄されるセッションを織り込んで、多めに走らせるのが現実的な運用。", description_en: "Not all sessions succeed. Realistic operation is running extra, factoring in sessions abandoned unexpectedly." },
    { number: 22, category: "応用", category_en: "Advanced", title: "「正しい唯一の方法はない」を前提にする", title_en: "Assume 'there is no single right way'", description: "Boris本人が繰り返し強調するポイント。Claude Codeは意図的に「好きなように使え、カスタマイズしろ、ハックしろ」という設計思想で作られている。自分のスタイルに合うものを実験して見つけるのが一番。", description_en: "Point Boris repeatedly emphasizes. Claude Code is intentionally designed with philosophy of 'use it your way, customize it, hack it.' Best to experiment and find what fits your style." }
];

// Safie記事「Claudeプロンプト10のベストプラクティス」
// 出典: https://engineers.safie.link/entry/claude-prompt-ten-best-practice
const PROMPT_TIPS = [
    {
        number: 1,
        title: "契約書のようにプロンプトを書く",
        title_en: "Write prompts like contracts",
        description: "フォーマット、スタイル、長さ、ターゲット読者を明確に指定する。曖昧さを残さない。",
        description_en: "Clearly specify format, style, length, target audience. Leave no ambiguity.",
        example: {
            bad: "React Hooksについての記事を書いて",
            bad_en: "Write an article about React Hooks",
            good: "React Hooksについて、初心者向けに500〜800字で解説記事を書いて。見出しは3つ以内、コード例を含めて",
            good_en: "Write an article about React Hooks for beginners in 500-800 characters. Max 3 headings, include code examples"
        },
        category: "明確性",
        category_en: "Clarity"
    },
    {
        number: 2,
        title: "「なぜ」やるのか背景を伝える",
        title_en: "Communicate the 'why' and background",
        description: "タスクの用途を一言添えることで、出力の深さを適切に調整させる。",
        description_en: "Adding context about the task's purpose helps adjust output depth appropriately.",
        example: {
            bad: "この四半期レポートの要点をまとめて",
            bad_en: "Summarize the key points of this quarterly report",
            good: "この四半期レポートを経営層向けの報告資料として要約して。重要な数値と提言を強調してください",
            good_en: "Summarize this quarterly report as a presentation for executives. Emphasize key numbers and recommendations"
        },
        category: "コンテキスト",
        category_en: "Context"
    },
    {
        number: 3,
        title: "「例」こそが正義（Few-Shot）",
        title_en: "Examples are everything (Few-Shot)",
        description: "サンプルを提供すれば、Claudeはその構造を忠実に再現する。期待する出力形式を例で示す。",
        description_en: "If you provide samples, Claude faithfully reproduces that structure. Show expected output format with examples.",
        example: {
            bad: "商品説明を書いて",
            bad_en: "Write a product description",
            good: "以下のフォーマットで商品説明を書いて：\\n【商品名】\\n【特徴】箇条書き3点\\n【価格】\\n---\\n例：\\n【商品名】ワイヤレスイヤホン X1\\n【特徴】・ノイズキャンセリング・8時間再生・防水IPX4\\n【価格】9,800円",
            good_en: "Write product description in this format:\\n[Product Name]\\n[Features] 3 bullet points\\n[Price]\\n---\\nExample:\\n[Product Name] Wireless Earbuds X1\\n[Features] Noise canceling, 8hr battery, IPX4 waterproof\\n[Price] $98"
        },
        category: "構造化",
        category_en: "Structure"
    },
    {
        number: 4,
        title: "大きなプロジェクトは「小分け」に",
        title_en: "Break big projects into smaller pieces",
        description: "一気に完了させず、ステップごとに進めるよう強制する。複雑なタスクは分割。",
        description_en: "Force step-by-step progress instead of completing all at once. Split complex tasks.",
        example: {
            bad: "ECサイトの商品管理、カート、決済機能を実装して",
            bad_en: "Implement product management, cart, and payment features for e-commerce site",
            good: "まず商品管理機能の設計案を提示して。承認後に実装を開始します",
            good_en: "First present the design for product management. Start implementation after approval"
        },
        category: "分割統治",
        category_en: "Divide & Conquer"
    },
    {
        number: 5,
        title: "Agentワークフローの宣言",
        title_en: "Declare Agent workflow",
        description: "長い対話での文脈喪失を防ぐため、進捗まとめ、ToDoリスト、設計決定の記録を指示する。",
        description_en: "To prevent context loss in long conversations, instruct progress summaries, todo lists, design decision recording.",
        example: {
            bad: "（文脈管理を明記しない）",
            bad_en: "(Don't specify context management)",
            good: "各ステップ完了時に進捗をまとめ、未解決の課題をリストアップしてください",
            good_en: "Summarize progress at each step completion and list unresolved issues"
        },
        category: "状態管理",
        category_en: "State Management"
    },
    {
        number: 6,
        title: "提案ではなく「行動」させる",
        title_en: "Make it act, not just suggest",
        description: "アドバイスだけでなく、具体的な実行を明確に要求する。「Do It」と伝える。",
        description_en: "Clearly request concrete execution, not just advice. Tell it to 'Do It'.",
        example: {
            bad: "このコード、どこか改善できる？",
            bad_en: "Can this code be improved anywhere?",
            good: "このコードを直接リファクタリングして、改善後のコードを出力して",
            good_en: "Directly refactor this code and output the improved code"
        },
        category: "実行指示",
        category_en: "Execution"
    },
    {
        number: 7,
        title: "肯定形で書く（否定形を避ける）",
        title_en: "Write affirmatively (avoid negatives)",
        description: "「〜しないで」より「〜して」のほうがAIは遵守しやすい。",
        description_en: "AI follows 'do X' better than 'don't do Y'.",
        example: {
            bad: "Markdownを使わないで、長くしないで",
            bad_en: "Don't use Markdown, don't make it long",
            good: "短い段落で、プレーンテキスト形式で回答してください",
            good_en: "Reply in short paragraphs, plain text format"
        },
        category: "表現",
        category_en: "Expression"
    },
    {
        number: 8,
        title: "XMLタグで挙動を制御",
        title_en: "Control behavior with XML tags",
        description: "軽量なXMLタグで、AIのデフォルト振る舞いを設定できる。",
        description_en: "Set AI's default behavior with lightweight XML tags.",
        example: {
            bad: "積極的に提案してほしい（曖昧）",
            bad_en: "I want proactive suggestions (vague)",
            good: "<behavior><mode>proactive</mode><verbosity>concise</verbosity></behavior>",
            good_en: "<behavior><mode>proactive</mode><verbosity>concise</verbosity></behavior>"
        },
        category: "構造化",
        category_en: "Structure"
    },
    {
        number: 9,
        title: "ツール利用を強要しすぎない",
        title_en: "Don't force tool usage too much",
        description: "「絶対に」「必ず」と強く強制すると過剰反応する。穏やかに誘導する。",
        description_en: "Strong commands like 'always' or 'must' cause overreaction. Guide gently.",
        example: {
            bad: "必ず検索ツールを使え！！",
            bad_en: "You MUST use the search tool!!",
            good: "リアルタイム情報が必要な場合は検索ツールの使用を推奨します",
            good_en: "If real-time information is needed, using the search tool is recommended"
        },
        category: "誘導",
        category_en: "Guidance"
    },
    {
        number: 10,
        title: "「Think」という言葉を避ける",
        title_en: "Avoid the word 'Think'",
        description: "特定モデルで「Think」に敏感な傾向がある。代替表現を使用する。",
        description_en: "Some models tend to be sensitive to 'Think'. Use alternative expressions.",
        example: {
            bad: "Think about the best approach",
            bad_en: "Think about the best approach",
            good: "Consider the best approach / Evaluate each option",
            good_en: "Consider the best approach / Evaluate each option"
        },
        category: "表現",
        category_en: "Expression"
    }
];

// トラブルシューティングガイド
const TROUBLESHOOTING = [
    {
        id: 1,
        symptom: "Claudeが同じ間違いを繰り返す",
        symptom_en: "Claude keeps making the same mistakes",
        cause: "Context Rot（コンテキスト腐敗）",
        cause_en: "Context Rot",
        description: "長いセッションで古い情報や誤った推論が蓄積し、判断力が低下している状態",
        description_en: "Old information and incorrect reasoning accumulate in long sessions, degrading judgment",
        solutions: [
            { action: "/clear でコンテキストをリセット", action_en: "Reset context with /clear", priority: "高", priority_en: "High" },
            { action: "/compact で圧縮してから再開", action_en: "Compress with /compact and resume", priority: "中", priority_en: "Med" },
            { action: "新しいセッションを開始", action_en: "Start a new session", priority: "高", priority_en: "High" }
        ],
        prevention: "2回失敗したら/clearを検討する習慣をつける",
        prevention_en: "Make a habit of considering /clear after 2 failures",
        relatedTutorial: "01_03"
    },
    {
        id: 2,
        symptom: "ファイルが見つからないエラー",
        symptom_en: "File not found error",
        cause: "パス指定の問題またはプロジェクト認識不足",
        cause_en: "Path specification issue or insufficient project recognition",
        description: "Claude Codeがファイルパスを正しく解決できていない",
        description_en: "Claude Code cannot resolve file paths correctly",
        solutions: [
            { action: "@参照で正確なパスを指定", action_en: "Specify exact path with @ reference", priority: "高", priority_en: "High" },
            { action: "/init でプロジェクトを認識させる", action_en: "Use /init to recognize project", priority: "高", priority_en: "High" },
            { action: "相対パスではなく絶対パスを使用", action_en: "Use absolute paths instead of relative", priority: "中", priority_en: "Med" }
        ],
        prevention: "作業開始時に/initを実行する",
        prevention_en: "Run /init at the start of work",
        relatedTutorial: "00_05"
    },
    {
        id: 3,
        symptom: "期待と異なるコードが生成される",
        symptom_en: "Generated code differs from expectations",
        cause: "指示が曖昧または検証手段が不足",
        cause_en: "Instructions are vague or verification methods are lacking",
        description: "ゴールや制約が明確に伝わっていない",
        description_en: "Goals and constraints are not clearly communicated",
        solutions: [
            { action: "具体的な入力→期待出力を示す", action_en: "Show specific input → expected output", priority: "高", priority_en: "High" },
            { action: "テストケースを提供して自己検証させる", action_en: "Provide test cases for self-verification", priority: "高", priority_en: "High" },
            { action: "既存のパターンを@参照で示す", action_en: "Show existing patterns with @ reference", priority: "中", priority_en: "Med" }
        ],
        prevention: "検証方法を必ず提供する習慣をつける",
        prevention_en: "Make a habit of always providing verification methods",
        relatedTutorial: "01_02"
    },
    {
        id: 4,
        symptom: "処理が遅くなった・応答が劣化した",
        symptom_en: "Processing slowed down / Response quality degraded",
        cause: "コンテキストウィンドウの圧迫",
        cause_en: "Context window pressure",
        description: "大量のファイル読み込みや長い会話でコンテキストが埋まっている",
        description_en: "Context is filled with many file loads or long conversations",
        solutions: [
            { action: "/context で使用量を確認", action_en: "Check usage with /context", priority: "高", priority_en: "High" },
            { action: "/compact で圧縮", action_en: "Compress with /compact", priority: "高", priority_en: "High" },
            { action: "サブエージェントに調査を委譲", action_en: "Delegate research to subagent", priority: "中", priority_en: "Med" }
        ],
        prevention: "定期的に/contextを確認し、60%超で対策を検討",
        prevention_en: "Check /context regularly, consider action above 60%",
        relatedTutorial: "00_03"
    },
    {
        id: 5,
        symptom: "計画なしにいきなり実装を始める",
        symptom_en: "Implementation starts without planning",
        cause: "Planモードを使っていない",
        cause_en: "Plan mode is not being used",
        description: "間違った問題を解くリスクがある",
        description_en: "Risk of solving the wrong problem",
        solutions: [
            { action: "/plan でPlanモードを開始", action_en: "Start Plan mode with /plan", priority: "高", priority_en: "High" },
            { action: "Shift+Tab 2回でPlanモードに切り替え", action_en: "Press Shift+Tab twice to switch to Plan mode", priority: "高", priority_en: "High" },
            { action: "計画を承認してから実装に進む", action_en: "Approve the plan before implementing", priority: "高", priority_en: "High" }
        ],
        prevention: "複雑なタスクでは必ずPlanモードから始める",
        prevention_en: "Always start complex tasks in Plan mode",
        relatedTutorial: "01_05"
    },
    {
        id: 6,
        symptom: "CLAUDE.mdのルールが無視される",
        symptom_en: "CLAUDE.md rules are being ignored",
        cause: "CLAUDE.mdが長すぎてノイズに埋没",
        cause_en: "CLAUDE.md is too long and buried in noise",
        description: "重要なルールが他の情報に埋もれている",
        description_en: "Important rules are buried among other information",
        solutions: [
            { action: "CLAUDE.mdを簡潔に整理", action_en: "Organize CLAUDE.md concisely", priority: "高", priority_en: "High" },
            { action: "重要なルールにIMPORTANT:を付与", action_en: "Add IMPORTANT: prefix to critical rules", priority: "中", priority_en: "Med" },
            { action: "詳細はSkillに分離", action_en: "Move details to Skills", priority: "中", priority_en: "Med" }
        ],
        prevention: "CLAUDE.mdは2.5Kトークン以下を目安に維持",
        prevention_en: "Keep CLAUDE.md under 2.5K tokens as a guideline",
        relatedTutorial: "01_01"
    },
    {
        id: 7,
        symptom: "大量のファイルを読み込んでしまう",
        symptom_en: "Loading too many files",
        cause: "無限探索パターン",
        cause_en: "Infinite exploration pattern",
        description: "スコープを限定せずに探索を指示している",
        description_en: "Exploration is directed without limiting scope",
        solutions: [
            { action: "探索範囲を明確に限定", action_en: "Clearly limit exploration scope", priority: "高", priority_en: "High" },
            { action: "サブエージェントに探索を委譲", action_en: "Delegate exploration to subagent", priority: "高", priority_en: "High" },
            { action: "Grepで対象を絞ってから読み込み", action_en: "Narrow targets with Grep before loading", priority: "中", priority_en: "Med" }
        ],
        prevention: "「〜を探索して」より「src/auth/内で〜を探して」と具体的に",
        prevention_en: "Be specific: 'Find X in src/auth/' instead of 'Explore X'",
        relatedTutorial: "02_03"
    },
    {
        id: 8,
        symptom: "テストが失敗する・エッジケースが漏れる",
        symptom_en: "Tests fail / Edge cases are missed",
        cause: "検証ループの不足",
        cause_en: "Insufficient verification loop",
        description: "Claudeに自己検証の手段を与えていない",
        description_en: "Claude is not given means for self-verification",
        solutions: [
            { action: "テストを実行させて結果を確認させる", action_en: "Have tests run and verify results", priority: "高", priority_en: "High" },
            { action: "期待出力を明示する", action_en: "Specify expected output explicitly", priority: "高", priority_en: "High" },
            { action: "境界値・異常系のテストケースを提供", action_en: "Provide boundary and error test cases", priority: "中", priority_en: "Med" }
        ],
        prevention: "「実装後テストを実行して」を依頼に含める",
        prevention_en: "Include 'run tests after implementation' in requests",
        relatedTutorial: "01_02"
    },
    {
        id: 9,
        symptom: "複数タスクが混在してカオスになる",
        symptom_en: "Multiple tasks mixed causing chaos",
        cause: "キッチンシンク問題",
        cause_en: "Kitchen sink problem",
        description: "無関係なタスクが同一セッションに混在",
        description_en: "Unrelated tasks mixed in the same session",
        solutions: [
            { action: "/clear でリセットしてから新タスク", action_en: "Reset with /clear before new task", priority: "高", priority_en: "High" },
            { action: "タスクごとにセッションを分ける", action_en: "Separate sessions per task", priority: "高", priority_en: "High" },
            { action: "複数タブで並列セッション", action_en: "Parallel sessions in multiple tabs", priority: "中", priority_en: "Med" }
        ],
        prevention: "タスクの切れ目で/clearを習慣化",
        prevention_en: "Make a habit of /clear at task boundaries",
        relatedTutorial: "01_06"
    },
    {
        id: 10,
        symptom: "Hooksが動作しない",
        symptom_en: "Hooks are not working",
        cause: "設定ファイルの構文エラーまたはパスの問題",
        cause_en: "Config file syntax error or path issue",
        description: ".claude.jsonの設定が正しくない",
        description_en: ".claude.json configuration is incorrect",
        solutions: [
            { action: "JSONの構文をバリデート", action_en: "Validate JSON syntax", priority: "高", priority_en: "High" },
            { action: "パターンマッチングを確認（*.pyなど）", action_en: "Check pattern matching (e.g., *.py)", priority: "中", priority_en: "Med" },
            { action: "コマンドが実行可能か単体テスト", action_en: "Unit test if command is executable", priority: "中", priority_en: "Med" }
        ],
        prevention: "設定変更後は簡単なテストで動作確認",
        prevention_en: "Verify with simple test after config changes",
        relatedTutorial: "02_02"
    },
    {
        id: 11,
        symptom: "Skillsが自動で読み込まれない",
        symptom_en: "Skills are not loaded automatically",
        cause: "descriptionがタスクと一致しない",
        cause_en: "Description doesn't match the task",
        description: "Claudeがdescriptionを見てSkillを読み込むか判断している",
        description_en: "Claude decides whether to load Skill by checking description",
        solutions: [
            { action: "descriptionをより具体的に記載", action_en: "Write more specific description", priority: "高", priority_en: "High" },
            { action: "globsパターンを設定してファイルタイプで自動読み込み", action_en: "Set globs pattern for auto-load by file type", priority: "中", priority_en: "Med" },
            { action: "/skill-name で明示的に呼び出し", action_en: "Call explicitly with /skill-name", priority: "中", priority_en: "Med" }
        ],
        prevention: "descriptionに「いつ使うか」を明記",
        prevention_en: "Specify 'when to use' in description",
        relatedTutorial: "02_01"
    },
    {
        id: 12,
        symptom: "MCPツールが見つからない・動作しない",
        symptom_en: "MCP tools not found / not working",
        cause: "MCP設定の問題",
        cause_en: "MCP configuration issue",
        description: ".mcp.jsonの設定やサーバー起動に問題がある",
        description_en: "Problem with .mcp.json settings or server startup",
        solutions: [
            { action: "MCPサーバーが起動しているか確認", action_en: "Check if MCP server is running", priority: "高", priority_en: "High" },
            { action: ".mcp.jsonのパスと設定を確認", action_en: "Verify .mcp.json path and settings", priority: "高", priority_en: "High" },
            { action: "不要なMCPを無効化してコンテキスト節約", action_en: "Disable unused MCPs to save context", priority: "中", priority_en: "Med" }
        ],
        prevention: "同時有効化するMCPは10個以下に制限",
        prevention_en: "Limit simultaneously enabled MCPs to 10 or less",
        relatedTutorial: "02_05"
    },
    {
        id: 13,
        symptom: "セキュリティ関連のエラーが発生",
        symptom_en: "Security-related errors occur",
        cause: "権限の問題または危険な操作のブロック",
        cause_en: "Permission issue or dangerous operation blocked",
        description: "Claude Codeのセキュリティ機能が動作している",
        description_en: "Claude Code security features are active",
        solutions: [
            { action: "/permissions で安全なコマンドを許可", action_en: "Allow safe commands with /permissions", priority: "高", priority_en: "High" },
            { action: "/sandbox で安全な実行環境を確保", action_en: "Ensure safe environment with /sandbox", priority: "中", priority_en: "Med" },
            { action: "必要に応じてHooksで危険な操作をブロック", action_en: "Block dangerous operations with Hooks if needed", priority: "中", priority_en: "Med" }
        ],
        prevention: "--dangerously-skip-permissionsは極力使わない",
        prevention_en: "Avoid using --dangerously-skip-permissions",
        relatedTutorial: "02_02"
    },
    {
        id: 14,
        symptom: "並列セッションで競合が発生",
        symptom_en: "Conflicts in parallel sessions",
        cause: "同じファイルを複数セッションが編集",
        cause_en: "Multiple sessions editing the same file",
        description: "ファイルの同時編集による衝突",
        description_en: "Collision due to simultaneous file editing",
        solutions: [
            { action: "セッションごとに独立したcheckoutを使用", action_en: "Use independent checkout per session", priority: "高", priority_en: "High" },
            { action: "Git worktreesで分離", action_en: "Separate with Git worktrees", priority: "中", priority_en: "Med" },
            { action: "編集対象ファイルを事前に分担", action_en: "Assign target files in advance", priority: "中", priority_en: "Med" }
        ],
        prevention: "並列セッションでは作業範囲を明確に分離",
        prevention_en: "Clearly separate work scope in parallel sessions",
        relatedTutorial: "02_08"
    },
    {
        id: 15,
        symptom: "ヘッドレスモードで期待通りに動作しない",
        symptom_en: "Headless mode doesn't work as expected",
        cause: "インタラクティブな確認が必要な状態",
        cause_en: "Interactive confirmation is required",
        description: "claude -p では対話的な確認ができない",
        description_en: "claude -p cannot do interactive confirmation",
        solutions: [
            { action: "--allowedTools で必要な権限を事前許可", action_en: "Pre-allow required permissions with --allowedTools", priority: "高", priority_en: "High" },
            { action: "プロンプトをより具体的に", action_en: "Make prompts more specific", priority: "中", priority_en: "Med" },
            { action: "--output-format json で結果を構造化", action_en: "Structure results with --output-format json", priority: "中", priority_en: "Med" }
        ],
        prevention: "ヘッドレス実行前にインタラクティブでテスト",
        prevention_en: "Test interactively before headless execution",
        relatedTutorial: "03_06"
    }
];

// よくある質問（FAQ）
const FAQ = [
    {
        id: 1,
        category: "基本",
        category_en: "Basics",
        question: "Claude CodeとChatGPTの違いは何ですか？",
        question_en: "What's the difference between Claude Code and ChatGPT?",
        answer: "Claude Codeはローカルで動作する「エージェント型」のツールです。ファイルを直接読み書きし、コマンドを実行し、問題を自律的に解決します。一方、ChatGPTは主にチャット形式でのQ&Aに特化しています。Claude Codeは「ローカルで動く自律的なプログラマー」と考えてください。",
        answer_en: "Claude Code is an 'agent-type' tool that runs locally. It directly reads and writes files, executes commands, and solves problems autonomously. ChatGPT, on the other hand, specializes mainly in chat-format Q&A. Think of Claude Code as 'an autonomous programmer running locally'.",
        relatedTutorial: "00_01"
    },
    {
        id: 2,
        category: "基本",
        category_en: "Basics",
        question: "プログラミング経験がなくても使えますか？",
        question_en: "Can I use it without programming experience?",
        answer: "はい、使えます。ファイル整理、データ分析、レポート作成、議事録処理など、コードを書かなくても多くのタスクに活用できます。自然な日本語で「〜して」と依頼するだけです。",
        answer_en: "Yes, you can. You can use it for many tasks without writing code - file organization, data analysis, report generation, meeting notes processing, etc. Just ask in natural language.",
        relatedTutorial: "03_03"
    },
    {
        id: 3,
        category: "設定",
        category_en: "Configuration",
        question: "CLAUDE.mdには何を書けばいいですか？",
        question_en: "What should I write in CLAUDE.md?",
        answer: "プロジェクト固有のルール、コーディング規約、禁止事項、テスト方法など、Claudeがコードから推測できない情報を書きます。ただし、長すぎると無視されるので、2.5Kトークン以下を目安に簡潔に保ちましょう。言語標準や自明なルールは書く必要がありません。",
        answer_en: "Write project-specific rules, coding conventions, prohibitions, test methods - information Claude can't infer from code. Keep it concise (under 2.5K tokens) as too long gets ignored. No need to write language standards or obvious rules.",
        relatedTutorial: "01_01"
    },
    {
        id: 4,
        category: "設定",
        category_en: "Configuration",
        question: "CLAUDE.mdとSkillsの違いは何ですか？",
        question_en: "What's the difference between CLAUDE.md and Skills?",
        answer: "CLAUDE.mdは毎回自動で読み込まれる「常に適用されるルール」、Skillsは必要なときだけ読み込まれる「状況に応じた知識」です。CLAUDE.mdには共通ルールを、Skillsには特定のワークフロー（コードレビュー、TDDなど）を記載します。",
        answer_en: "CLAUDE.md is 'always-applied rules' loaded automatically each time. Skills are 'contextual knowledge' loaded only when needed. Put common rules in CLAUDE.md, and specific workflows (code review, TDD, etc.) in Skills.",
        relatedTutorial: "02_01"
    },
    {
        id: 5,
        category: "操作",
        category_en: "Operations",
        question: "コンテキストウィンドウとは何ですか？なぜ重要ですか？",
        question_en: "What is the context window? Why is it important?",
        answer: "コンテキストウィンドウは「AIの短期記憶」です。会話、読んだファイル、実行結果がすべてここに蓄積されます。埋まりすぎると性能が劣化（Context Rot）するため、/compactや/clearで管理することが重要です。",
        answer_en: "The context window is 'AI's short-term memory'. Conversations, read files, and execution results all accumulate here. Performance degrades when full (Context Rot), so managing with /compact or /clear is important.",
        relatedTutorial: "00_03"
    },
    {
        id: 6,
        category: "操作",
        category_en: "Operations",
        question: "/planと通常モードの違いは何ですか？",
        question_en: "What's the difference between /plan and normal mode?",
        answer: "Planモードでは、Claudeはファイルを変更せずに探索と計画のみを行います。計画を確認・承認してから実装に進めるため、「間違った問題を解く」リスクを減らせます。複雑なタスクでは必ずPlanモードから始めることをお勧めします。",
        answer_en: "In Plan mode, Claude only explores and plans without modifying files. You can review and approve the plan before implementation, reducing the risk of 'solving the wrong problem'. For complex tasks, always start with Plan mode.",
        relatedTutorial: "01_05"
    },
    {
        id: 7,
        category: "操作",
        category_en: "Operations",
        question: "/clearと/compactの違いは何ですか？",
        question_en: "What's the difference between /clear and /compact?",
        answer: "/clearはコンテキストを完全にリセットします。/compactは要約して圧縮するため、重要な情報は維持されます。タスクの切り替え時は/clear、同じタスクを継続する場合は/compactが適切です。",
        answer_en: "/clear completely resets the context. /compact summarizes and compresses, preserving important information. Use /clear when switching tasks, /compact when continuing the same task.",
        relatedTutorial: "01_03"
    },
    {
        id: 8,
        category: "ベストプラクティス",
        category_en: "Best Practices",
        question: "最も重要なベストプラクティスは何ですか？",
        question_en: "What is the most important best practice?",
        answer: "「検証方法を提供すること」です。テスト、期待出力、スクリーンショットなど、Claudeが自分で結果を確認できる手段を与えると、品質が2〜3倍向上します。「〜を実装して」ではなく「〜を実装して、テストを実行して確認して」と依頼しましょう。",
        answer_en: "'Providing verification methods'. Tests, expected outputs, screenshots - giving Claude ways to verify results improves quality 2-3x. Don't say 'implement X', say 'implement X, run tests and verify'.",
        relatedTutorial: "01_02"
    },
    {
        id: 9,
        category: "ベストプラクティス",
        category_en: "Best Practices",
        question: "効果的なプロンプトの書き方は？",
        question_en: "How to write effective prompts?",
        answer: "1) 具体的なゴールを明示 2) 検証方法を提供 3) @参照でファイルを指定 4) 既存のパターンを示す。曖昧な「うまく動くようにして」ではなく、「validateEmail関数を実装して、test@example.comは真、invalidは偽を返す。テスト実行後に確認して」のように具体的に。",
        answer_en: "1) State specific goals 2) Provide verification methods 3) Specify files with @ reference 4) Show existing patterns. Instead of vague 'make it work', be specific: 'Implement validateEmail function, test@example.com returns true, invalid returns false. Run tests to verify.'",
        relatedTutorial: "01_02"
    },
    {
        id: 10,
        category: "ベストプラクティス",
        category_en: "Best Practices",
        question: "失敗したときはどうすればいいですか？",
        question_en: "What should I do when it fails?",
        answer: "1回目の失敗は修正を依頼、2回目の失敗後は/clearしてアプローチを変えた新しいプロンプトで再開することをお勧めします。失敗したコンテキストで続けると、さらに悪化することがあります。",
        answer_en: "First failure: request correction. After second failure: /clear and restart with a different approach. Continuing in a failed context often makes things worse.",
        relatedTutorial: "01_06"
    },
    {
        id: 11,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "Hooksとは何ですか？どう使いますか？",
        question_en: "What are Hooks? How do I use them?",
        answer: "Hooksはイベント駆動の自動化機能です。ファイル保存時の自動フォーマット、機密ファイルへの書き込みブロック、テスト自動実行などに使います。.claude.jsonで設定し、PreToolUse（実行前）やPostToolUse（実行後）のタイミングでスクリプトを実行できます。",
        answer_en: "Hooks are event-driven automation features. Use for auto-formatting on file save, blocking writes to sensitive files, auto-running tests. Configure in .claude.json, execute scripts at PreToolUse (before) or PostToolUse (after) timing.",
        relatedTutorial: "02_02"
    },
    {
        id: 12,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "Subagentsとは何ですか？いつ使いますか？",
        question_en: "What are Subagents? When should I use them?",
        answer: "Subagentsは特定タスクを専門のエージェントに委譲する仕組みです。メインセッションのコンテキストを汚さずに、大規模な探索やセキュリティレビューなどを実行できます。調査タスクや専門的なレビューに最適です。",
        answer_en: "Subagents delegate specific tasks to specialized agents. Execute large-scale exploration or security reviews without polluting the main session's context. Ideal for research tasks and specialized reviews.",
        relatedTutorial: "02_03"
    },
    {
        id: 13,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "MCPとは何ですか？",
        question_en: "What is MCP?",
        answer: "MCP（Model Context Protocol）は外部ツールやデータソースとの統合プロトコルです。GitHub、Slack、データベース、Figmaなどと連携できます。CLIツール（gh、awsなど）よりもコンテキスト効率が良い場合があります。",
        answer_en: "MCP (Model Context Protocol) is an integration protocol for external tools and data sources. Connect with GitHub, Slack, databases, Figma, etc. Sometimes more context-efficient than CLI tools (gh, aws, etc.).",
        relatedTutorial: "02_05"
    },
    {
        id: 14,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "並列セッションはどう活用しますか？",
        question_en: "How do I utilize parallel sessions?",
        answer: "複数のターミナルタブでClaude Codeを実行し、異なるタスクを並列処理できます。Writer/Reviewerパターン（実装とレビューの分離）や、調査と実装の並列化に有効です。ただし、同じファイルを同時編集しないよう注意が必要です。",
        answer_en: "Run Claude Code in multiple terminal tabs to process different tasks in parallel. Useful for Writer/Reviewer pattern (separating implementation and review) or parallelizing research and implementation. Be careful not to edit the same file simultaneously.",
        relatedTutorial: "03_05"
    },
    {
        id: 15,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "ヘッドレスモードとは何ですか？",
        question_en: "What is headless mode?",
        answer: "claude -p \"プロンプト\" でインタラクティブなセッションなしに実行するモードです。CI/CDパイプライン、バッチ処理、自動化スクリプトに組み込めます。--output-format jsonで結果を構造化できます。",
        answer_en: "A mode that runs without interactive session using claude -p \"prompt\". Can be integrated into CI/CD pipelines, batch processing, automation scripts. Use --output-format json to structure results.",
        relatedTutorial: "03_06"
    },
    {
        id: 16,
        category: "トラブル",
        category_en: "Troubleshooting",
        question: "Claudeが期待通りに動かないときは？",
        question_en: "What to do when Claude doesn't work as expected?",
        answer: "1) プロンプトを具体的にする 2) 検証方法を提供する 3) /clearしてやり直す 4) CLAUDE.mdにルールを追加する、の順で試してください。2回失敗したら、アプローチを変えた新しいセッションで再開することをお勧めします。",
        answer_en: "Try in this order: 1) Make prompts more specific 2) Provide verification methods 3) /clear and retry 4) Add rules to CLAUDE.md. After 2 failures, restart with a different approach in a new session.",
        relatedTutorial: "01_06"
    },
    {
        id: 17,
        category: "トラブル",
        category_en: "Troubleshooting",
        question: "コンテキストがすぐ埋まってしまいます",
        question_en: "Context fills up too quickly",
        answer: "1) 結果をファイルに書き出す（Write戦略） 2) サブエージェントに探索を委譲 3) /compactで定期的に圧縮 4) 不要になったら/clear。大きなファイルを読む場合は、必要な部分だけ@参照で指定しましょう。",
        answer_en: "1) Write results to files (Write strategy) 2) Delegate exploration to subagents 3) Compress regularly with /compact 4) /clear when no longer needed. For large files, specify only needed parts with @ reference.",
        relatedTutorial: "01_04"
    },
    {
        id: 18,
        category: "料金・制限",
        category_en: "Pricing & Limits",
        question: "API使用量を節約するには？",
        question_en: "How to save API usage?",
        answer: "1) Haikuを軽量タスクに使用 2) サブエージェントで探索を分離 3) /compactでコンテキストを圧縮 4) CLAUDE.mdを簡潔に保つ 5) MCPでCLIコマンドを代替。特に大規模な探索はサブエージェントに委譲すると効率的です。",
        answer_en: "1) Use Haiku for light tasks 2) Separate exploration with subagents 3) Compress context with /compact 4) Keep CLAUDE.md concise 5) Replace CLI commands with MCP. Especially efficient to delegate large explorations to subagents.",
        relatedTutorial: "03_01"
    },
    {
        id: 19,
        category: "チーム",
        category_en: "Team",
        question: "チームでCLAUDE.mdを共有するには？",
        question_en: "How to share CLAUDE.md with the team?",
        answer: "CLAUDE.mdをGitリポジトリにコミットして共有します。チームメンバーが週次で貢献し、失敗パターンや学びを追記していくと、チームの集合知として価値が高まります。PRレビュー時に@.claudeタグで更新を促すこともできます。",
        answer_en: "Commit CLAUDE.md to Git repository to share. Team members contribute weekly, adding failure patterns and learnings, increasing value as collective team knowledge. Prompt updates with @.claude tag during PR reviews.",
        relatedTutorial: "01_01"
    },
    {
        id: 20,
        category: "チーム",
        category_en: "Team",
        question: "Skillsやコマンドをチームで共有するには？",
        question_en: "How to share Skills and commands with the team?",
        answer: ".claude/フォルダをGitリポジトリにコミットして共有します。skills/、commands/、agents/をバージョン管理することで、チーム全体で同じワークフローを使えます。",
        answer_en: "Commit the .claude/ folder to Git repository to share. Version control skills/, commands/, agents/ so the entire team uses the same workflows.",
        relatedTutorial: "02_01"
    },
    // === 第2回研修 Q&A（2026-02-06追加） ===
    {
        id: 21,
        category: "料金・制限",
        category_en: "Pricing & Limits",
        question: "無償版でも研修は受講できますか？",
        question_en: "Can I take the training with the free version?",
        answer: "はい、無償版でも研修は受講可能です。ただし、メッセージ送信回数の制限、レスポンス速度の低下、一部最新機能が利用できない可能性があります。実務で継続的に使用する場合はPro版の利用を推奨します。",
        answer_en: "Yes, you can take the training with the free version. However, there are message limits, potentially slower response times, and some latest features may be unavailable. Pro version is recommended for continuous business use.",
        relatedTutorial: "00_01"
    },
    {
        id: 22,
        category: "操作",
        category_en: "Operations",
        question: "CLIで直接入力する場合とVSCodeタブから入力する場合の違いは？",
        question_en: "What's the difference between CLI input and VSCode tab input?",
        answer: "VSCodeタブ（拡張機能）からの入力には複数のメリットがあります。コード差分や編集内容がGUI上で確認しやすい、複数ファイルの編集を一括で確認・適用できる、コード補完やシンタックスハイライトと連携、変更前後の比較が視覚的に可能、チャット履歴がGUI上で管理しやすいなど。CLI版は軽量で高速ですが、複雑な編集やレビューにはVSCode版が便利です。",
        answer_en: "VSCode tab (extension) input has multiple benefits: easier to see code diffs and edits in GUI, batch review/apply multi-file edits, integration with code completion and syntax highlighting, visual before/after comparison, easier chat history management. CLI is lightweight and fast, but VSCode is better for complex edits and reviews.",
        relatedTutorial: "00_01"
    },
    {
        id: 23,
        category: "操作",
        category_en: "Operations",
        question: "2回実行してブラッシュアップしても問題ないですか？",
        question_en: "Is it okay to run twice and refine the result?",
        answer: "まったく問題ありません。むしろ推奨される使い方です。Claude Codeは対話を重ねることで、より正確な要件理解、より品質の高い成果物、より適切な実装が得られます。初回の結果に満足できなければ、何度でも改善を依頼してください。",
        answer_en: "No problem at all. This is actually the recommended approach. Through continued dialogue, Claude Code achieves better requirement understanding, higher quality deliverables, and more appropriate implementation. Request improvements as many times as needed.",
        relatedTutorial: "01_02"
    },
    {
        id: 24,
        category: "設定",
        category_en: "Configuration",
        question: "生成されるCLAUDE.mdは全員同じ内容になりますか？",
        question_en: "Will the generated CLAUDE.md be the same for everyone?",
        answer: "いいえ、全員が異なる内容になる可能性が高いです。CLAUDE.mdはClaudeとの対話内容（プロンプトの違い）、プロジェクトの状態やファイル構成、生成時のモデルの確率的な振る舞いによって変化します。同じプロンプトでも、細かい表現やセクションの順序が異なることがあります。これは正常な動作です。",
        answer_en: "No, content will likely differ for everyone. CLAUDE.md varies based on dialogue content (prompt differences), project state and file structure, and model's probabilistic behavior. Even with the same prompt, expressions and section order may differ. This is normal behavior.",
        relatedTutorial: "01_01"
    },
    {
        id: 25,
        category: "操作",
        category_en: "Operations",
        question: "コンテキスト使用率はどうやって確認しますか？",
        question_en: "How do I check context usage?",
        answer: "コンテキスト使用率は /context コマンドで確認できます。実行すると、現在のコンテキスト使用量がパーセンテージで表示されます（例：22.6%）。一部のバージョンでエラーが発生する場合は、Claude Codeを最新バージョンにアップデートしてください（npm install -g @anthropic-ai/claude-code@latest）。",
        answer_en: "Check context usage with the /context command. It displays current context usage as a percentage (e.g., 22.6%). If you get errors on some versions, update Claude Code to the latest version (npm install -g @anthropic-ai/claude-code@latest).",
        relatedTutorial: "00_03"
    },
    {
        id: 26,
        category: "操作",
        category_en: "Operations",
        question: "ターミナルのClaude Codeで過去のやり取りを表示する方法は？",
        question_en: "How to view past conversations in terminal Claude Code?",
        answer: "3つの方法があります。1) claude history で履歴を表示 2) claude --session <session-id> でセッションIDを指定して再開 3) cat ~/.claude/sessions/<session-id>/transcript.json でログファイルを確認。セッションは自動的に保存されるため、次回起動時に前回の続きから再開することも可能です。",
        answer_en: "Three methods: 1) claude history to show history 2) claude --session <session-id> to resume specific session 3) cat ~/.claude/sessions/<session-id>/transcript.json to check log files. Sessions are saved automatically, so you can resume from where you left off.",
        relatedTutorial: "01_03"
    },
    {
        id: 27,
        category: "操作",
        category_en: "Operations",
        question: "Claudeが作業中に会話を入れても大丈夫ですか？複数起動は可能ですか？",
        question_en: "Can I chat while Claude is working? Can I run multiple instances?",
        answer: "はい、どちらも可能です。作業中でも会話を入れることができ、Claudeは割り込みを検知して適切に対応します。複数のClaudeセッションを並行で立ち上げることも可能で、各セッションは独立したコンテキストを持ちます。ただし、同一ファイルを複数セッションで編集する場合は競合に注意してください。",
        answer_en: "Yes to both. You can chat during work - Claude detects interruptions and responds appropriately. You can also run multiple Claude sessions in parallel, each with independent context. Be careful of conflicts when editing the same file from multiple sessions.",
        relatedTutorial: "03_05"
    },
    {
        id: 28,
        category: "設定",
        category_en: "Configuration",
        question: "別のフォルダでCLAUDE.mdを作成した場合、情報は自動共有されますか？",
        question_en: "If I create CLAUDE.md in another folder, is information automatically shared?",
        answer: "いいえ、自動的には共有されません。各CLAUDE.mdはそのファイルが置かれたディレクトリ配下にのみ適用され、異なるフォルダのCLAUDE.mdは互いに独立しています。ただし、グローバルCLAUDE.md（~/.claude/CLAUDE.md）は全プロジェクトで共有されます。プロジェクト固有の設定はプロジェクト内のCLAUDE.mdに記述してください。",
        answer_en: "No, they are not automatically shared. Each CLAUDE.md applies only to its directory and subdirectories - different folder CLAUDE.mds are independent. However, global CLAUDE.md (~/.claude/CLAUDE.md) is shared across all projects. Write project-specific settings in the project's CLAUDE.md.",
        relatedTutorial: "01_01"
    },
    {
        id: 29,
        category: "設定",
        category_en: "Configuration",
        question: "対話次第でグローバルルールが予期せず追記されることはありますか？",
        question_en: "Can global rules be unexpectedly added through dialogue?",
        answer: "いいえ、Claude Codeが自動的にCLAUDE.mdを編集することは基本的にありません。編集が発生するのは、ユーザーが明示的に「CLAUDE.mdに追記して」「このルールを記憶して」と指示した場合のみです。重要な変更の前にはClaudeが確認を求め、ファイル編集の際は差分が表示されます。予期せぬ追記を防ぐため、重要なCLAUDE.mdはバージョン管理（Git）で管理することを推奨します。",
        answer_en: "No, Claude Code basically doesn't automatically edit CLAUDE.md. Edits only occur when users explicitly instruct 'add to CLAUDE.md' or 'remember this rule'. Claude asks for confirmation before important changes and shows diffs for file edits. Version control (Git) is recommended to prevent unexpected additions.",
        relatedTutorial: "01_01"
    },
    {
        id: 30,
        category: "チーム",
        category_en: "Team",
        question: "チーム配布時、CLAUDE.mdに書くべきかカスタムコマンドに書くべきか？",
        question_en: "For team distribution, should I write in CLAUDE.md or custom commands?",
        answer: "用途に応じて使い分けます。CLAUDE.mdには、プロジェクト全体に適用されるコーディング規約、アーキテクチャの原則、禁止事項やセキュリティルールなど、チーム全員が常に守るべきルールを記載。カスタムコマンド（Skill）には、特定のタスク専用の詳細手順、繰り返し実行する定型作業、テンプレートを使った生成処理などを記載します。CLAUDE.mdは簡潔に保ち（200-300行程度）、詳細な手順はSkillに分離すると保守性と再利用性が向上します。",
        answer_en: "Use based on purpose. CLAUDE.md: project-wide coding conventions, architecture principles, security rules - rules everyone must follow. Custom commands (Skills): task-specific detailed procedures, repetitive workflows, template-based generation. Keep CLAUDE.md concise (200-300 lines) and separate detailed procedures into Skills for better maintainability and reusability.",
        relatedTutorial: "02_01"
    },
    {
        id: 31,
        category: "操作",
        category_en: "Operations",
        question: "前回のセッションの続きから始めることは可能ですか？",
        question_en: "Can I continue from the previous session?",
        answer: "はい、可能です。CLI版ではセッションは自動的に保存され、次回起動時に前回の続きから再開できます。明示的にセッションを指定する場合は claude --session <session-id> を使用します。VSCode拡張機能の場合はチャット履歴が自動保存されます。注意点として、コンテキストウィンドウには上限があるため長時間のセッションは自動的に圧縮されます。重要な情報はCLAUDE.mdやドキュメントに記録することを推奨します。",
        answer_en: "Yes. In CLI, sessions are automatically saved and you can resume from where you left off. Use claude --session <session-id> to specify a session explicitly. VSCode extension auto-saves chat history. Note: context window has limits, so long sessions are automatically compressed. Record important information in CLAUDE.md or documents.",
        relatedTutorial: "01_03"
    },
    {
        id: 32,
        category: "設定",
        category_en: "Configuration",
        question: "グローバルCLAUDE.mdとプロジェクトCLAUDE.mdで相反する指示がある場合、どちらが優先されますか？",
        question_en: "Which takes priority when global and project CLAUDE.md have conflicting instructions?",
        answer: "プロジェクトのCLAUDE.mdが優先されます。優先順位は、1) プロジェクト内のCLAUDE.md（最優先）、2) グローバルCLAUDE.md（~/.claude/CLAUDE.md）、3) デフォルトのシステムルール、の順です。プロジェクトのCLAUDE.mdで例外を定義することも可能です。相反する指示は混乱を招くため、明示的に「例外」として記述し、グローバルには汎用的なルール、プロジェクトには固有のルールを記述することを推奨します。",
        answer_en: "Project CLAUDE.md takes priority. Order: 1) Project CLAUDE.md (highest), 2) Global CLAUDE.md (~/.claude/CLAUDE.md), 3) Default system rules. You can define exceptions in project CLAUDE.md. Conflicting instructions cause confusion, so explicitly write as 'exceptions'. Recommended: generic rules in global, specific rules in project.",
        relatedTutorial: "01_01"
    },
    {
        id: 33,
        category: "設定",
        category_en: "Configuration",
        question: "CLAUDE.mdの行数制限がある中、ファイル参照で分割すると精度は維持されますか？",
        question_en: "With CLAUDE.md line limits, does splitting with file references maintain accuracy?",
        answer: "はい、ファイル参照による分割は精度維持に効果があります。CLAUDE.mdは常にコンテキストに読み込まれますが、参照ファイルは必要に応じて読み込まれるため、コンテキストの節約になります。保守性向上（専門分野ごとにファイルを分けて更新・管理が容易に）、再利用性（共通ルールを複数プロジェクトで参照可能）のメリットもあります。CLAUDE.md自体は200-300行に収め、参照ファイルも1ファイル500行以内を推奨します。つまり、ファイル参照は人間の見通しだけでなく、Claudeのコンテキスト効率化にも貢献します。",
        answer_en: "Yes, splitting with file references effectively maintains accuracy. CLAUDE.md is always loaded into context, but referenced files are loaded as needed, saving context. Benefits: maintainability (easier to update/manage separate files by domain), reusability (share common rules across projects). Keep CLAUDE.md at 200-300 lines, referenced files under 500 lines each. File references benefit both human readability and Claude's context efficiency.",
        relatedTutorial: "01_01"
    },
    {
        id: 34,
        category: "高度な機能",
        category_en: "Advanced Features",
        question: "Everything Claude Codeとは何ですか？",
        question_en: "What is Everything Claude Code?",
        answer: "Everything Claude Code（github.com/affaan-m/everything-claude-code）はAnthropicハッカソン優勝者が作成したClaude Code用の設定テンプレートです。10ヶ月以上の実践から生まれた、Agents、Skills、Commands、Hooksなどを含む包括的な設定テンプレート集です。導入は /plugin marketplace add affaan-m/everything-claude-code で可能（要：Claude Code CLI v2.1.0以上）。一部のSkillsから試して、チームに合うものを選定し、既存のCLAUDE.mdと競合しないか確認しながら段階的に導入することを推奨します。",
        answer_en: "Everything Claude Code (github.com/affaan-m/everything-claude-code) is a configuration template for Claude Code created by Anthropic hackathon winners. A comprehensive template collection including Agents, Skills, Commands, Hooks, born from 10+ months of practice. Install with /plugin marketplace add affaan-m/everything-claude-code (requires Claude Code CLI v2.1.0+). Recommend gradually adopting: try some Skills first, check for conflicts with existing CLAUDE.md.",
        relatedTutorial: "02_01"
    },
    {
        id: 35,
        category: "チーム",
        category_en: "Team",
        question: "複数のプロジェクトを同時進行する場合のベストプラクティスは？",
        question_en: "Best practices for working on multiple projects simultaneously?",
        answer: "複数のVSCodeウィンドウで作業しましょう。code /path/to/project-a と code -n /path/to/project-b で別ウィンドウを開けます。各ウィンドウでClaude Codeセッションが独立して動作し、CLAUDE.mdも個別に読み込まれます。共通ルールは参照形式で管理すると効率的です。グローバル（~/.claude/CLAUDE.md）と共有ルール（~/shared-claude-config/rules/）を作成し、各プロジェクトのCLAUDE.mdから参照+固有ルールを追加する構成が推奨です。",
        answer_en: "Work with multiple VSCode windows. Use code /path/to/project-a and code -n /path/to/project-b to open separate windows. Each window runs independent Claude Code sessions with separately loaded CLAUDE.md. Manage common rules with references efficiently. Recommended: create global (~/.claude/CLAUDE.md) and shared rules (~/shared-claude-config/rules/), then reference from each project's CLAUDE.md + add project-specific rules.",
        relatedTutorial: "03_05"
    },
    {
        id: 36,
        category: "操作",
        category_en: "Operations",
        question: "Claudeのバージョンアップは追従すべきですか？",
        question_en: "Should I follow Claude version updates?",
        answer: "まずはバックアップを取ってから更新しましょう（cp -r ~/.claude ~/.claude.backup && npm update -g @anthropic-ai/claude-code）。重要度の低いプロジェクトで先に動作確認し、問題なければ本番プロジェクトに適用します。安心してよい理由：Claude APIは後方互換性を重視、CLAUDE.mdで明示的にルールを記述していれば影響は最小限、Gitで管理していれば問題があっても戻せる、バグ修正やセキュリティパッチの恩恵を受けられる。更新頻度の目安：パッチ（0.0.x）は気にせず更新、マイナー（0.x.0）はリリースノート確認後、メジャー（x.0.0）はテスト後に慎重に。",
        answer_en: "First backup then update (cp -r ~/.claude ~/.claude.backup && npm update -g @anthropic-ai/claude-code). Test on less important projects first, then apply to production if no issues. Reasons to feel safe: Claude API prioritizes backward compatibility, explicit rules in CLAUDE.md minimize impact, Git lets you rollback, you get bug fixes and security patches. Update frequency: patch (0.0.x) freely, minor (0.x.0) after checking release notes, major (x.0.0) carefully after testing.",
        relatedTutorial: "00_01"
    },
    {
        id: 37,
        category: "ベストプラクティス",
        category_en: "Best Practices",
        question: "生成物が多すぎてチェックに時間がかかる場合はどうすべき？",
        question_en: "What to do when generated output is too much to check?",
        answer: "これは「人間ボトルネック問題」とも言うべき課題です。まず指示を具体的に絞りましょう（×「ユーザー管理機能を作って」→ ◯「src/api/user.ts のみ、ユーザー登録機能を作成。既存のauth.tsは変更しない」）。CLAUDE.mdで生成量を制限（一度に変更するファイルは最大3つまで、変更が複数ファイルにまたがる場合は事前に計画を提示、テストコードは明示的に指示された場合のみ生成）。さらにPlan Modeで事前に計画を確認し、大きすぎる場合は分割を指示。diff表示を活用して変更箇所だけを集中的にレビュー。生成量のコントロールがAIツール活用の鍵です。",
        answer_en: "This is the 'human bottleneck problem'. First, narrow instructions (Bad: 'Create user management feature' → Good: 'Create user registration in src/api/user.ts only. Don't modify existing auth.ts'). Limit generation in CLAUDE.md (max 3 files per change, present plan for multi-file changes, generate test code only when explicitly requested). Use Plan Mode to review plans first, request splits if too large. Use diff display to focus review on changes. Controlling generation amount is key to AI tool utilization.",
        relatedTutorial: "01_05"
    },
    {
        id: 38,
        category: "設定",
        category_en: "Configuration",
        question: "CLAUDE.mdの継承ルールを教えてください（サブディレクトリの場合）",
        question_en: "Explain CLAUDE.md inheritance rules (for subdirectories)",
        answer: "Claude Codeは実行ディレクトリから親に向かってCLAUDE.mdを探し、見つかったすべてを適用します。例：~/.claude/CLAUDE.md → /main_pj/CLAUDE.md → /main_pj/suba_pj/CLAUDE.md。suba_pj配下では、main_pj/CLAUDE.mdとsuba_pj/CLAUDE.mdの両方が適用されます。並列ディレクトリ（subb_pj）のCLAUDE.mdは適用されません。優先順位はサブプロジェクト > プロジェクトルート > グローバル。確認方法：cd /main_pj/suba_pj && claude で「現在読み込まれているCLAUDE.mdファイルを教えてください」と質問。",
        answer_en: "Claude Code searches for CLAUDE.md from execution directory upward to parent, applying all found. Example: ~/.claude/CLAUDE.md → /main_pj/CLAUDE.md → /main_pj/suba_pj/CLAUDE.md. In suba_pj, both main_pj/CLAUDE.md and suba_pj/CLAUDE.md apply. Parallel directory (subb_pj) CLAUDE.md doesn't apply. Priority: subproject > project root > global. To verify: cd /main_pj/suba_pj && claude then ask 'What CLAUDE.md files are currently loaded?'",
        relatedTutorial: "01_01"
    },
    {
        id: 39,
        category: "ベストプラクティス",
        category_en: "Best Practices",
        question: "ルールを徹底させる方法と考慮漏れを減らす方法は？",
        question_en: "How to enforce rules strictly and reduce oversight?",
        answer: "【ルールの徹底】ルールを具体的かつ強制的に書きます。[CRITICAL]違反厳禁として禁止事項を明示、コード生成前のチェックリスト（変更対象ファイルは3つ以内か？など）を記載。優先度を[CRITICAL]、[IMPORTANT]、[RECOMMENDED]で明示し、ルール違反が起きたら失敗例をCLAUDE.mdに追記してフィードバックループを回します。【考慮漏れの削減】質問テンプレートをCLAUDE.mdに記載（エッジケース、影響範囲、セキュリティ、テスト）。バグ修正時のチェックリスト（根本原因を特定したか？同じパターンが他にもないか？）。Plan Modeで段階的に深堀り、実装後に別セッションでAIにレビューさせる手法も有効です。",
        answer_en: "【Enforcing rules】Write rules specifically and mandatorily. Mark prohibitions as [CRITICAL] violations forbidden, include pre-code generation checklist (max 3 files to change? etc.). Mark priorities as [CRITICAL], [IMPORTANT], [RECOMMENDED]. Add failure examples to CLAUDE.md when violations occur for feedback loop. 【Reducing oversight】Add question templates to CLAUDE.md (edge cases, impact scope, security, tests). Bug fix checklist (identified root cause? same pattern elsewhere?). Dig deeper in stages with Plan Mode, have AI review in separate session after implementation.",
        relatedTutorial: "01_02"
    }
];

// ベストプラクティスチェックリスト
const CHECKLIST = {
    beforeSession: {
        title: "セッション開始前",
        title_en: "Before Session",
        description: "作業を始める前に確認すべき項目",
        description_en: "Items to check before starting work",
        items: [
            { id: "bs1", text: "CLAUDE.mdは最新か？必要なルールが記載されているか？", text_en: "Is CLAUDE.md up to date? Are necessary rules documented?", priority: "高", relatedTutorial: "01_01" },
            { id: "bs2", text: "ゴールは具体的に定義されているか？", text_en: "Is the goal specifically defined?", priority: "高", relatedTutorial: "01_02" },
            { id: "bs3", text: "検証方法（テスト、期待出力）は準備できているか？", text_en: "Are verification methods (tests, expected output) prepared?", priority: "高", relatedTutorial: "01_02" },
            { id: "bs4", text: "参照すべきファイルやパターンは明確か？", text_en: "Are files and patterns to reference clear?", priority: "中", relatedTutorial: "00_05" },
            { id: "bs5", text: "複雑なタスクの場合、/planで始めるか？", text_en: "For complex tasks, start with /plan?", priority: "中", relatedTutorial: "01_05" }
        ]
    },
    duringSession: {
        title: "セッション中",
        title_en: "During Session",
        description: "作業中に意識すべき項目",
        description_en: "Items to be aware of during work",
        items: [
            { id: "ds1", text: "検証手段をClaudeに提供しているか？", text_en: "Are you providing verification means to Claude?", priority: "高", relatedTutorial: "01_02" },
            { id: "ds2", text: "計画を確認してから実装に進んでいるか？", text_en: "Are you confirming the plan before implementing?", priority: "高", relatedTutorial: "01_05" },
            { id: "ds3", text: "コンテキスト使用量を確認しているか？（/context）", text_en: "Are you checking context usage? (/context)", priority: "中", relatedTutorial: "00_03" },
            { id: "ds4", text: "2回失敗したら/clearを検討しているか？", text_en: "Are you considering /clear after 2 failures?", priority: "高", relatedTutorial: "01_06" },
            { id: "ds5", text: "結果をファイルに書き出してコンテキストを節約しているか？", text_en: "Are you writing results to files to save context?", priority: "中", relatedTutorial: "01_04" },
            { id: "ds6", text: "大規模探索はサブエージェントに委譲しているか？", text_en: "Are you delegating large explorations to subagents?", priority: "中", relatedTutorial: "02_03" }
        ]
    },
    afterSession: {
        title: "セッション終了後",
        title_en: "After Session",
        description: "作業完了後に行うべき項目",
        description_en: "Items to do after completing work",
        items: [
            { id: "as1", text: "成果物は検証済みか？テストはパスしているか？", text_en: "Are deliverables verified? Do tests pass?", priority: "高", relatedTutorial: "01_02" },
            { id: "as2", text: "学んだパターンをSkill化したか？（/learn）", text_en: "Have you turned learned patterns into Skills? (/learn)", priority: "中", relatedTutorial: "03_02" },
            { id: "as3", text: "失敗パターンをCLAUDE.mdに追記したか？", text_en: "Have you added failure patterns to CLAUDE.md?", priority: "中", relatedTutorial: "01_01" },
            { id: "as4", text: "繰り返しの作業はHooks/Skillsで自動化を検討したか？", text_en: "Have you considered automating repetitive work with Hooks/Skills?", priority: "低", relatedTutorial: "02_02" },
            { id: "as5", text: "チームで共有すべき知見はあるか？", text_en: "Are there insights to share with the team?", priority: "低", relatedTutorial: "01_01" }
        ]
    },
    qualityGates: {
        title: "品質ゲート",
        title_en: "Quality Gates",
        description: "リリース前に確認すべき品質基準",
        description_en: "Quality criteria to check before release",
        items: [
            { id: "qg1", text: "すべてのテストがパスしているか？", text_en: "Do all tests pass?", priority: "高", relatedTutorial: "01_02" },
            { id: "qg2", text: "セキュリティレビューは完了しているか？", text_en: "Is security review complete?", priority: "高", relatedTutorial: "11" },
            { id: "qg3", text: "ドキュメントは更新されているか？", text_en: "Is documentation updated?", priority: "中", relatedTutorial: "02_01" },
            { id: "qg4", text: "コードレビューは完了しているか？", text_en: "Is code review complete?", priority: "高", relatedTutorial: "11" },
            { id: "qg5", text: "パフォーマンスに問題はないか？", text_en: "Are there any performance issues?", priority: "中", relatedTutorial: "11" }
        ]
    }
};

// Export for use in app.js
// ハンズオン用ダミーデータのダウンロードパスマッピング
const HANDSON_DOWNLOADS = {
    1: {
        label: "売上データCSV",
        label_en: "Sales Data CSV",
        files: [
            { name: "sales_2025.csv", path: "assets/handson/01-sales/sales_2025.csv" }
        ]
    },
    2: {
        label: "整理対象ドキュメント4件",
        label_en: "4 Documents to Organize",
        files: [
            { name: "議事録0115.txt", path: "assets/handson/02-document/議事録0115.txt" },
            { name: "meeting_20250120.txt", path: "assets/handson/02-document/meeting_20250120.txt" },
            { name: "report_q1.txt", path: "assets/handson/02-document/report_q1.txt" },
            { name: "企画書（修正版）.txt", path: "assets/handson/02-document/企画書（修正版）.txt" }
        ]
    },
    3: {
        label: "API仕様書 + 設定サンプル",
        label_en: "API Spec + Config Sample",
        files: [
            { name: "api_spec.yaml", path: "assets/handson/03-spec/api_spec.yaml" },
            { name: "config_sample.json", path: "assets/handson/03-spec/config_sample.json" }
        ]
    },
    4: {
        label: "議事録テキスト",
        label_en: "Meeting Notes",
        files: [
            { name: "meeting_notes.txt", path: "assets/handson/04-meeting/meeting_notes.txt" }
        ]
    },
    5: {
        label: "API仕様 + requirements.txt",
        label_en: "API Spec + requirements.txt",
        files: [
            { name: "api_spec.yaml", path: "assets/handson/05-api/api_spec.yaml" },
            { name: "requirements.txt", path: "assets/handson/05-api/requirements.txt" }
        ]
    },
    6: {
        label: "機能仕様書",
        label_en: "Feature Spec",
        files: [
            { name: "FEATURE_SPEC.md", path: "assets/handson/06-feature/FEATURE_SPEC.md" }
        ]
    },
    7: {
        label: "CLI仕様書",
        label_en: "CLI Spec",
        files: [
            { name: "CLI_SPEC.md", path: "assets/handson/07-cli/CLI_SPEC.md" }
        ]
    },
    8: {
        label: "バグ入りコード + エラーログ",
        label_en: "Buggy Code + Error Log",
        files: [
            { name: "calculator.py", path: "assets/handson/08-debug/calculator.py" },
            { name: "error.log", path: "assets/handson/08-debug/error.log" }
        ]
    },
    9: {
        label: "リファクタリング対象コード",
        label_en: "Code to Refactor",
        files: [
            { name: "order_processor.py", path: "assets/handson/09-refactor/order_processor.py" }
        ]
    },
    10: {
        label: "テスト仕様書",
        label_en: "Test Spec",
        files: [
            { name: "SPEC.md", path: "assets/handson/10-tdd/SPEC.md" }
        ]
    },
    11: {
        label: "レビュー対象コード",
        label_en: "Code to Review",
        files: [
            { name: "user_api.py", path: "assets/handson/11-review/user_api.py" }
        ]
    },
    12: {
        label: "脆弱性のあるコード2件",
        label_en: "Vulnerable Code (2 files)",
        files: [
            { name: "auth.py", path: "assets/handson/12-security/auth.py" },
            { name: "config.py", path: "assets/handson/12-security/config.py" }
        ]
    },
    13: {
        label: "requirements.txt",
        label_en: "requirements.txt",
        files: [
            { name: "requirements.txt", path: "assets/handson/13-fullstack/requirements.txt" }
        ]
    }
};

// ===================================
// 開発一貫トラック（テーマ別パイプライン）
// 並列＋逐次、コンテキスト分離を1テーマで通す。
// 企業名はすべて架空（実在組織と無関係）。
// ===================================
const PROJECT_TRACKS = [
    {
        id: "alpha",
        number: "T1",
        title: "案件健全性ダッシュボード",
        title_en: "Project Health Dashboard",
        tagline: "ヒアリング議事録から埋もれたリスクを構造化し、一覧化する",
        tagline_en: "Surface buried project risks from interview transcripts",
        domain: "PMO / プロジェクト管理",
        domain_en: "PMO / Project Management",
        deliverable: "リスク可視化Webアプリ（API + ダッシュボード + SQLite）",
        deliverable_en: "Risk dashboard web app (API + UI + SQLite)",
        difficulty: "中級",
        difficulty_en: "Intermediate",
        estimatedTime: "180-240分",
        estimatedTime_en: "180-240 min",
        scenario: "松風製薬（架空）の基幹システム刷新。複数の関係者ヒアリングを重ねたが、議事録が個人のメモに散らばりリスクが埋もれている。3本の議事録を読み込み、深刻度と分類でリスクを構造化してダッシュボードに並べる。",
        scenario_en: "Matsukaze Pharma (fictional) core-system renewal. Interview notes are scattered and risks are buried. Read 3 transcripts, structure risks by severity and category, and lay them out on a dashboard.",
        pipeline: [
            { phase: "議事録の並列抽出", phase_en: "Parallel transcript extraction", mode: "parallel", detail: "議事録3本をサブエージェント3つで同時に読み、課題・決定・宿題を抜き出す", detail_en: "Read 3 transcripts with 3 subagents in parallel, pulling out issues, decisions, action items", context: "各エージェントは担当の1議事録だけを文脈に持つ", context_en: "Each agent holds only its one transcript in context" },
            { phase: "リスク分類", phase_en: "Risk classification", mode: "sequential", detail: "抽出結果を深刻度（重大/中/軽）×分類（スケジュール/スコープ/品質/コスト/体制）に判定", detail_en: "Classify extracted items by severity (high/mid/low) and category", context: "分類スキルのみを読み込み、抽出時の長い文脈は持ち込まない", context_en: "Load only the classifier skill; drop the long extraction context" },
            { phase: "DB正規化とシード", phase_en: "DB normalization & seed", mode: "sequential", detail: "判定済みリスクをスキーマへ正規化しSQLiteへ投入", detail_en: "Normalize classified risks into a schema and seed SQLite", context: "スキーマ定義とシード処理だけを対象にする", context_en: "Scope to schema and seeding only" },
            { phase: "ダッシュボード実装", phase_en: "Dashboard implementation", mode: "sequential", detail: "一覧とドリルダウンを実装し、Writer/Reviewerで品質を確認", detail_en: "Build list + drill-down, verify with Writer/Reviewer", context: "実装役とレビュー役を別セッションに分ける", context_en: "Split implementer and reviewer into separate sessions" }
        ],
        tutorials: [
            { id: "01_01", title: "CLAUDE.md", title_en: "CLAUDE.md", why: "リスクの語彙と分類基準をプロジェクト規約として固定する", why_en: "Fix risk vocabulary and criteria as project rules" },
            { id: "02_01", title: "Skills", title_en: "Skills", why: "分類ロジックを再利用可能なスキルにする", why_en: "Make classification a reusable skill" },
            { id: "02_03", title: "Subagents", title_en: "Subagents", why: "議事録ごとに抽出を委譲する", why_en: "Delegate extraction per transcript" },
            { id: "02_08", title: "並列化戦略", title_en: "Parallelization", why: "3本を同時に処理する", why_en: "Process 3 transcripts at once" },
            { id: "03_05", title: "Writer/Reviewerパターン", title_en: "Writer/Reviewer Pattern", why: "実装とレビューを分けて品質を上げる", why_en: "Separate build and review for quality" }
        ],
        acceptance: [
            "議事録3本から12件以上のリスクを抽出できている",
            "各リスクに深刻度と分類が付いている",
            "一覧を深刻度でソートできる",
            "詳細で根拠の議事録箇所をたどれる",
            "READMEだけで起動・投入を再現できる"
        ],
        acceptance_en: [
            "12+ risks extracted from 3 transcripts",
            "Every risk has severity and category",
            "List can be sorted by severity",
            "Detail traces back to the source transcript",
            "README alone reproduces setup and seeding"
        ],
        compare: [
            { axis: "抽出網羅性", axis_en: "Extraction coverage", hint: "見落としたリスクの数で比べる", hint_en: "Compare by number of missed risks" },
            { axis: "分類の妥当性", axis_en: "Classification validity", hint: "深刻度のブレを確認する", hint_en: "Check severity consistency" },
            { axis: "UIの可読性", axis_en: "UI readability", hint: "初見で件数と深刻度が掴めるか", hint_en: "Grasp count and severity at a glance" },
            { axis: "根拠の追跡性", axis_en: "Traceability", hint: "結論から議事録に戻れるか", hint_en: "Can you trace back to the source" }
        ]
    },
    {
        id: "beta",
        number: "T2",
        title: "議事録ToDo自動抽出",
        title_en: "Meeting ToDo Extractor",
        tagline: "散らばる会議メモから担当・期限つきタスク台帳を生成する",
        tagline_en: "Turn scattered meeting notes into an owned, dated task ledger",
        domain: "コンサル / 会議運営",
        domain_en: "Consulting / Meeting Ops",
        deliverable: "タスク台帳生成CLI + 担当者別Markdownビュー",
        deliverable_en: "Task-ledger CLI + per-owner Markdown view",
        difficulty: "中級",
        difficulty_en: "Intermediate",
        estimatedTime: "150-200分",
        estimatedTime_en: "150-200 min",
        scenario: "青葉コンサルティング（架空）では会議メモが個人ノートに散り、ToDoが消える。3本の会議メモを入力に、担当者・期限・優先度つきの台帳を自動生成し、再実行しても結果がぶれないようにする。",
        scenario_en: "Aoba Consulting (fictional): meeting notes scatter and todos vanish. From 3 notes, auto-generate a ledger with owner, due date, priority, idempotent on rerun.",
        pipeline: [
            { phase: "メモの並列抽出", phase_en: "Parallel note extraction", mode: "parallel", detail: "会議メモ3本からToDo候補をサブエージェント3つで同時抽出", detail_en: "Extract todo candidates from 3 notes with 3 subagents at once", context: "メモ単位でコンテキストを分ける", context_en: "Isolate context per note" },
            { phase: "名寄せと重複排除", phase_en: "Dedup & merge", mode: "sequential", detail: "同一タスクを統合し表記ゆれを揃える", detail_en: "Merge duplicate tasks and normalize wording", context: "抽出済みリストだけを対象にする", context_en: "Scope to the extracted list only" },
            { phase: "担当・期限・優先度の付与", phase_en: "Assign owner/due/priority", mode: "sequential", detail: "文脈から担当者と期限、優先度を推定し台帳スキーマへ", detail_en: "Infer owner, due, priority and map to the ledger schema", context: "推定ルールと台帳定義のみ", context_en: "Only inference rules and ledger schema" },
            { phase: "台帳とビュー生成", phase_en: "Ledger & view output", mode: "sequential", detail: "Markdown台帳と担当者別ビューを生成、Stopフックで件数を要約", detail_en: "Emit Markdown ledger + per-owner view; Stop hook summarizes counts", context: "出力整形に限定する", context_en: "Limit to output formatting" }
        ],
        tutorials: [
            { id: "01_01", title: "CLAUDE.md", title_en: "CLAUDE.md", why: "台帳のスキーマと優先度基準を固定する", why_en: "Fix ledger schema and priority rules" },
            { id: "02_01", title: "Skills", title_en: "Skills", why: "ToDo抽出のルールをスキル化する", why_en: "Make extraction rules a skill" },
            { id: "02_03", title: "Subagents", title_en: "Subagents", why: "メモごとに抽出を委譲する", why_en: "Delegate extraction per note" },
            { id: "02_02", title: "Hooks", title_en: "Hooks", why: "実行後に件数サマリを自動出力する", why_en: "Auto-summarize counts after run" },
            { id: "02_08", title: "並列化戦略", title_en: "Parallelization", why: "3本を同時に処理する", why_en: "Process 3 notes at once" }
        ],
        acceptance: [
            "メモ3本からToDoを抽出できている",
            "重複タスクが統合されている",
            "担当・期限・優先度が付いている",
            "担当者別ビューが出力される",
            "同じ入力で再実行しても結果が変わらない"
        ],
        acceptance_en: [
            "Todos extracted from 3 notes",
            "Duplicate tasks merged",
            "Owner, due, priority assigned",
            "Per-owner view is produced",
            "Rerun on same input is idempotent"
        ],
        compare: [
            { axis: "抽出漏れ", axis_en: "Missed items", hint: "拾えなかったToDoの数", hint_en: "Number of missed todos" },
            { axis: "重複統合精度", axis_en: "Merge accuracy", hint: "別タスクを誤統合していないか", hint_en: "No wrong merges" },
            { axis: "期限推定", axis_en: "Due inference", hint: "明示なしの期限の妥当性", hint_en: "Reasonable when not stated" },
            { axis: "冪等性", axis_en: "Idempotency", hint: "再実行で差分が出ないか", hint_en: "No diff on rerun" }
        ]
    },
    {
        id: "gamma",
        number: "T3",
        title: "提案QAビルダー",
        title_en: "Proposal Q&A Builder",
        tagline: "RFPとヒアリングから根拠つき想定問答集を組み立てる",
        tagline_en: "Build a sourced Q&A set from an RFP and hearing notes",
        domain: "営業 / 提案",
        domain_en: "Sales / Proposals",
        deliverable: "想定問答集（カテゴリ別の静的ページまたはMarkdown）",
        deliverable_en: "Q&A set (categorized static page or Markdown)",
        difficulty: "中級",
        difficulty_en: "Intermediate",
        estimatedTime: "150-200分",
        estimatedTime_en: "150-200 min",
        scenario: "霞ヶ関ソリューションズ（架空）の提案で、審査委員からの想定質問に根拠つきで答えたい。RFP抜粋と顧客ヒアリングメモから、出典つきのQA集をカテゴリ別に生成する。",
        scenario_en: "Kasumigaseki Solutions (fictional): prepare sourced answers to likely review-panel questions. From an RFP excerpt and hearing notes, generate a categorized Q&A set with citations.",
        pipeline: [
            { phase: "資料の並列要約", phase_en: "Parallel summarization", mode: "parallel", detail: "RFP抜粋とヒアリングメモを別エージェントで同時に要約", detail_en: "Summarize RFP excerpt and hearing notes with separate agents in parallel", context: "資料種別ごとにコンテキストを分ける", context_en: "Isolate context per document type" },
            { phase: "論点と想定質問の生成", phase_en: "Issues & questions", mode: "sequential", detail: "論点を抽出し、審査側の想定質問を起こす", detail_en: "Extract issues and draft likely panel questions", context: "要約結果だけを対象にする", context_en: "Scope to the summaries only" },
            { phase: "回答と根拠の付与", phase_en: "Answers & citations", mode: "sequential", detail: "各質問に回答案と出典（RFP/ヒアリングの該当箇所）を付ける", detail_en: "Attach answer drafts and citations for each question", context: "質問リストと原資料のみ", context_en: "Only the question list and source docs" },
            { phase: "整形と一貫性チェック", phase_en: "Format & consistency", mode: "sequential", detail: "カテゴリ別に整形し、Reviewerで回答の矛盾を洗う", detail_en: "Categorize and review for contradictions", context: "整形とレビューを別役に分ける", context_en: "Split format and review roles" }
        ],
        tutorials: [
            { id: "01_01", title: "CLAUDE.md", title_en: "CLAUDE.md", why: "回答トーンと出典の付け方を規約化する", why_en: "Standardize tone and citation style" },
            { id: "02_01", title: "Skills", title_en: "Skills", why: "QA生成の型をスキルにする", why_en: "Make Q&A generation a skill" },
            { id: "02_03", title: "Subagents", title_en: "Subagents", why: "資料種別ごとに要約を委譲する", why_en: "Delegate summarization per doc type" },
            { id: "03_05", title: "Writer/Reviewerパターン", title_en: "Writer/Reviewer Pattern", why: "回答の一貫性を別役で確認する", why_en: "Check answer consistency separately" },
            { id: "02_08", title: "並列化戦略", title_en: "Parallelization", why: "資料を同時に処理する", why_en: "Process documents at once" }
        ],
        acceptance: [
            "想定QAが20問以上ある",
            "各回答に出典が付いている",
            "カテゴリで分類されている",
            "回答どうしに矛盾がない",
            "目的の質問を探しやすい体裁になっている"
        ],
        acceptance_en: [
            "20+ Q&A entries",
            "Every answer has a citation",
            "Entries are categorized",
            "Answers are mutually consistent",
            "Layout makes target questions easy to find"
        ],
        compare: [
            { axis: "質問の網羅性", axis_en: "Question coverage", hint: "想定漏れの観点数", hint_en: "Number of missed angles" },
            { axis: "回答の具体性", axis_en: "Answer specificity", hint: "一般論で逃げていないか", hint_en: "No vague generalities" },
            { axis: "出典の妥当性", axis_en: "Citation validity", hint: "根拠が実際の記述に対応するか", hint_en: "Citations match the text" },
            { axis: "一貫性", axis_en: "Consistency", hint: "数値や前提の食い違い", hint_en: "No conflicting figures or premises" }
        ]
    },
    {
        id: "delta",
        number: "T4",
        title: "コンプライアンス監査自動化",
        title_en: "Compliance Audit Automation",
        tagline: "規程と判例に照らして成果物の違反を検出し、監査レポートにする",
        tagline_en: "Check deliverables against rules and precedents, output an audit report",
        domain: "監査 / 内部統制",
        domain_en: "Audit / Internal Control",
        deliverable: "監査レポート生成システム（指摘・根拠条文・是正案）",
        deliverable_en: "Audit-report generator (findings, cited rules, remediation)",
        difficulty: "上級",
        difficulty_en: "Advanced",
        estimatedTime: "200-260分",
        estimatedTime_en: "200-260 min",
        scenario: "白河信用組合（架空）の内部監査で、社内規程と提出成果物の突き合わせが属人化している。規程と過去判例を読み込み、成果物の違反箇所を根拠つきで検出して監査レポートを生成する。",
        scenario_en: "Shirakawa Credit Union (fictional): rule-vs-deliverable checking is person-dependent. Ingest rules and precedents, detect violations with evidence, generate an audit report.",
        pipeline: [
            { phase: "規程と判例の取り込み", phase_en: "Ingest rules & precedents", mode: "sequential", detail: "規程と判例をMCP(filesystem)で読み込みインデックス化する", detail_en: "Load rules and precedents via filesystem MCP and index them", context: "参照データの取り込みに限定する", context_en: "Scope to reference ingestion" },
            { phase: "章ごとの並列監査", phase_en: "Per-section parallel audit", mode: "parallel", detail: "成果物を章単位で分け、監査サブエージェントを並列起動する", detail_en: "Split the deliverable by section, run audit subagents in parallel", context: "1エージェントは担当章＋規程インデックスだけ", context_en: "Each agent holds only its section + rule index" },
            { phase: "違反候補の集約と判例突合", phase_en: "Aggregate & match precedents", mode: "sequential", detail: "重大度で集約し、過去判例と突き合わせる", detail_en: "Aggregate by severity and match against precedents", context: "違反候補と判例集のみ", context_en: "Only candidate findings and precedents" },
            { phase: "監査レポート生成", phase_en: "Audit report generation", mode: "sequential", detail: "指摘・根拠条文・是正案を整形、PostToolUseフックで体裁を検証", detail_en: "Format findings/cited-rules/remediation; PostToolUse hook validates layout", context: "レポート整形に限定する", context_en: "Limit to report formatting" }
        ],
        tutorials: [
            { id: "01_01", title: "CLAUDE.md", title_en: "CLAUDE.md", why: "重大度の定義とレポート様式を固定する", why_en: "Fix severity definitions and report format" },
            { id: "02_01", title: "Skills", title_en: "Skills", why: "規程照合の判定をスキル化する", why_en: "Make rule-matching a skill" },
            { id: "02_03", title: "Subagents", title_en: "Subagents", why: "章ごとに監査を委譲する", why_en: "Delegate audit per section" },
            { id: "02_05", title: "MCP", title_en: "MCP", why: "規程・判例をローカルから読み込む", why_en: "Read rules and precedents locally" },
            { id: "02_02", title: "Hooks", title_en: "Hooks", why: "レポートの体裁を自動検証する", why_en: "Auto-validate report layout" }
        ],
        acceptance: [
            "規程の全項目を成果物と照合できている",
            "違反に根拠条文が紐づいている",
            "重大度が判定されている",
            "是正案が具体的に示されている",
            "同じ入力で再現できる"
        ],
        acceptance_en: [
            "All rule items checked against the deliverable",
            "Each finding links to a cited rule",
            "Severity is judged",
            "Concrete remediation is shown",
            "Reproducible on the same input"
        ],
        compare: [
            { axis: "検出網羅性", axis_en: "Detection coverage", hint: "見逃した違反の数", hint_en: "Number of missed violations" },
            { axis: "誤検知率", axis_en: "False positives", hint: "問題ない箇所を挙げていないか", hint_en: "No flagging of clean parts" },
            { axis: "根拠の正確性", axis_en: "Evidence accuracy", hint: "引いた条文が指摘に対応するか", hint_en: "Cited rule matches the finding" },
            { axis: "是正案の実用性", axis_en: "Remediation usefulness", hint: "そのまま着手できるか", hint_en: "Actionable as written" }
        ]
    },
    {
        id: "orchestra",
        number: "T5",
        title: "上級オーケストレーション統合",
        title_en: "Advanced Orchestration",
        tagline: "4テーマを並列・逐次・コンテキスト分離・自動化で一本のパイプラインに束ねる",
        tagline_en: "Bind 4 themes into one pipeline: parallel, sequential, isolated, automated",
        domain: "横断 / 並列パイプライン",
        domain_en: "Cross-cutting / Parallel Pipeline",
        deliverable: "複数テーマを束ねた自動処理パイプライン（cron運用込み）",
        deliverable_en: "Multi-theme automated pipeline (with cron operation)",
        difficulty: "上級",
        difficulty_en: "Advanced",
        estimatedTime: "240-300分",
        estimatedTime_en: "240-300 min",
        scenario: "T1〜T4の処理を1プロジェクトに統合する。入力投入から成果物まで、並列フェーズと逐次フェーズを混在させ、テーマごとにコンテキストを切り、フックとcronで自動で回す。1テーマが失敗しても他に波及しないことを確かめる。",
        scenario_en: "Integrate T1-T4 into one project. Mix parallel and sequential phases, isolate context per theme, automate with hooks and cron, and verify one failing theme does not cascade.",
        pipeline: [
            { phase: "4テーマの並列抽出", phase_en: "4-theme parallel extraction", mode: "parallel", detail: "T1〜T4の抽出フェーズをTaskツールで4エージェント同時起動", detail_en: "Launch T1-T4 extraction phases as 4 agents via the Task tool", context: "テーマごとに独立したコンテキスト。互いの中間結果を見せない", context_en: "Independent context per theme; no shared intermediates" },
            { phase: "中間成果の集約", phase_en: "Aggregate intermediates", mode: "sequential", detail: "オーケストレータが各テーマの中間成果を回収し正規化する", detail_en: "Orchestrator collects and normalizes per-theme intermediates", context: "集約ロジックのみ。抽出時の長文脈は捨てる", context_en: "Only aggregation logic; drop long extraction context" },
            { phase: "分類・突合の並列処理", phase_en: "Parallel classify/match", mode: "parallel", detail: "集約結果を分類フェーズと突合フェーズで再度並列処理", detail_en: "Re-parallelize the aggregate across classify and match phases", context: "フェーズ間で結果を共有しない", context_en: "No cross-phase result sharing" },
            { phase: "永続化と自動運用", phase_en: "Persist & automate", mode: "sequential", detail: "MCP(sqlite)へ保存、Stop+PostToolUseフックで検証、cron雛形で定期実行", detail_en: "Persist via sqlite MCP, verify with Stop+PostToolUse hooks, schedule via cron template", context: "永続化と運用設定に限定する", context_en: "Scope to persistence and ops config" }
        ],
        tutorials: [
            { id: "02_03", title: "Subagents", title_en: "Subagents", why: "テーマごとに処理を委譲する", why_en: "Delegate per theme" },
            { id: "02_08", title: "並列化戦略", title_en: "Parallelization", why: "4テーマを同時に走らせる", why_en: "Run 4 themes at once" },
            { id: "03_06", title: "Fan-outパターン", title_en: "Fan-out Pattern", why: "入力を分散して並列処理する", why_en: "Fan out inputs for parallel work" },
            { id: "02_02", title: "Hooks", title_en: "Hooks", why: "完了時に自動検証する", why_en: "Auto-verify on completion" },
            { id: "02_05", title: "MCP", title_en: "MCP", why: "成果をローカルDBへ永続化する", why_en: "Persist outputs to a local DB" },
            { id: "03_09", title: "Agent Teams", title_en: "Agent Teams", why: "複数エージェントの協働を設計する", why_en: "Design multi-agent collaboration" }
        ],
        acceptance: [
            "4テーマを1つのコマンド系列で実行できる",
            "並列フェーズが互いに独立したコンテキストで動く",
            "フックで成果物が自動検証される",
            "cron雛形で定期実行に載せられる",
            "1テーマの失敗が他テーマに波及しない"
        ],
        acceptance_en: [
            "All 4 themes run from one command sequence",
            "Parallel phases run in independent contexts",
            "Hooks auto-verify outputs",
            "A cron template enables scheduled runs",
            "One theme's failure does not cascade"
        ],
        compare: [
            { axis: "並列化の効き", axis_en: "Parallel speedup", hint: "逐次実行との時間差", hint_en: "Time delta vs sequential" },
            { axis: "コンテキスト分離", axis_en: "Context isolation", hint: "他テーマの文脈が混入していないか", hint_en: "No cross-theme context bleed" },
            { axis: "自動検証の堅牢性", axis_en: "Verification robustness", hint: "壊れた成果物を止められるか", hint_en: "Does it stop on broken output" },
            { axis: "障害分離", axis_en: "Fault isolation", hint: "1失敗で全体が落ちないか", hint_en: "One failure does not kill the run" }
        ]
    }
];

// トラック準備物（その場でダウンロード）
const PROJECT_DOWNLOADS = {
    alpha: {
        label: "案件健全性ダッシュボード 一式",
        label_en: "Project Health Dashboard bundle",
        zip: "assets/projects/alpha.zip",
        zipName: "track-alpha.zip",
        files: [
            { name: "README.md", path: "assets/projects/alpha/README.md" },
            { name: "CLAUDE.md", path: "assets/projects/alpha/CLAUDE.md" },
            { name: "client-brief.md", path: "assets/projects/alpha/client-brief.md" },
            { name: "transcript-01.md", path: "assets/projects/alpha/transcripts/transcript-01.md" },
            { name: "transcript-02.md", path: "assets/projects/alpha/transcripts/transcript-02.md" },
            { name: "transcript-03.md", path: "assets/projects/alpha/transcripts/transcript-03.md" },
            { name: "risk-extractor.md", path: "assets/projects/alpha/.claude/agents/risk-extractor.md" },
            { name: "SKILL.md", path: "assets/projects/alpha/.claude/skills/risk-classifier/SKILL.md" }
        ]
    },
    beta: {
        label: "議事録ToDo自動抽出 一式",
        label_en: "Meeting ToDo Extractor bundle",
        zip: "assets/projects/beta.zip",
        zipName: "track-beta.zip",
        files: [
            { name: "README.md", path: "assets/projects/beta/README.md" },
            { name: "CLAUDE.md", path: "assets/projects/beta/CLAUDE.md" },
            { name: "client-brief.md", path: "assets/projects/beta/client-brief.md" },
            { name: "meeting-01.md", path: "assets/projects/beta/notes/meeting-01.md" },
            { name: "meeting-02.md", path: "assets/projects/beta/notes/meeting-02.md" },
            { name: "meeting-03.md", path: "assets/projects/beta/notes/meeting-03.md" },
            { name: "todo-extractor.md", path: "assets/projects/beta/.claude/agents/todo-extractor.md" }
        ]
    },
    gamma: {
        label: "提案QAビルダー 一式",
        label_en: "Proposal Q&A Builder bundle",
        zip: "assets/projects/gamma.zip",
        zipName: "track-gamma.zip",
        files: [
            { name: "README.md", path: "assets/projects/gamma/README.md" },
            { name: "CLAUDE.md", path: "assets/projects/gamma/CLAUDE.md" },
            { name: "client-brief.md", path: "assets/projects/gamma/client-brief.md" },
            { name: "rfp-excerpt.md", path: "assets/projects/gamma/rfp-excerpt.md" },
            { name: "hearing.md", path: "assets/projects/gamma/hearing.md" },
            { name: "SKILL.md", path: "assets/projects/gamma/.claude/skills/qa-builder/SKILL.md" }
        ]
    },
    delta: {
        label: "コンプライアンス監査自動化 一式",
        label_en: "Compliance Audit Automation bundle",
        zip: "assets/projects/delta.zip",
        zipName: "track-delta.zip",
        files: [
            { name: "README.md", path: "assets/projects/delta/README.md" },
            { name: "CLAUDE.md", path: "assets/projects/delta/CLAUDE.md" },
            { name: "client-brief.md", path: "assets/projects/delta/client-brief.md" },
            { name: "rules.md", path: "assets/projects/delta/rules.md" },
            { name: "deliverable-sample.md", path: "assets/projects/delta/deliverable-sample.md" },
            { name: "precedents.md", path: "assets/projects/delta/precedents.md" },
            { name: "audit-checker.md", path: "assets/projects/delta/.claude/agents/audit-checker.md" }
        ]
    },
    orchestra: {
        label: "上級オーケストレーション統合 一式",
        label_en: "Advanced Orchestration bundle",
        zip: "assets/projects/orchestra.zip",
        zipName: "track-orchestra.zip",
        files: [
            { name: "README.md", path: "assets/projects/orchestra/README.md" },
            { name: "CLAUDE.md", path: "assets/projects/orchestra/CLAUDE.md" },
            { name: "ORCHESTRATION.md", path: "assets/projects/orchestra/ORCHESTRATION.md" },
            { name: "mcp.json", path: "assets/projects/orchestra/.mcp.json" },
            { name: "run-all.md", path: "assets/projects/orchestra/.claude/commands/run-all.md" },
            { name: "stop-summary.sh", path: "assets/projects/orchestra/.claude/hooks/stop-summary.sh" }
        ]
    }
};

// ===================================
// Claude 設定テンプレート（Mac/Win対応ZIP配布）
// 配置の基本: 各テンプレートに展開先の指示を記載。
// すべて assets/settings/<file>.zip。venv/node_modules 等は除外済み。
// ===================================
const SETTINGS_CATEGORIES = [
    { id: 'official',  label: '公式パック' },
    { id: 'workflow',  label: 'ワークフロー・スターター' },
    { id: 'reference', label: 'ガイド・リファレンス' },
    { id: 'skills',    label: 'Skills 集' },
    { id: 'agents',    label: 'Agents 集' },
    { id: 'design',    label: 'UI / UX デザイン' }
];

const SETTINGS_TEMPLATES = [
    // 公式パック
    { id: 'claude-config-bundle', cat: 'official', title: '推奨 .claude/ 設定一式',
      desc: '研修の前提とする .claude/ の最小構成。settings.json と代表的な agents / hooks / commands / skills のサンプルを含む。',
      placement: '展開してできる `.claude/` を プロジェクトルートに置くとそのプロジェクトのみの設定、`~/` 直下に置くと全プロジェクト共通の設定になります。',
      zip: 'claude-config-bundle.zip', size: '21 KB' },
    { id: 'claude-code-official-plugins', cat: 'official', title: 'Claude Code 公式プラグイン パック',
      desc: '`claude-code-setup` プラグイン本体。`.claude-plugin/plugin.json` と `claude-automation-recommender` 等のスキル群。',
      placement: '展開した `claude-code-setup/` フォルダを任意の場所に置き、Claude Code で `/plugins install ./claude-code-setup` のように読み込みます。',
      zip: 'claude-code-official-plugins.zip', size: '531 KB' },
    { id: 'aidriven-docs-commands', cat: 'official', title: 'AI 駆動 ドキュメント＆コマンド',
      desc: 'AI 駆動開発（要件整理〜設計〜実装〜ハッカソン）の各フェーズ別コマンドとドキュメントのテンプレート集。',
      placement: '展開後、各フェーズフォルダの `.md` を `~/.claude/commands/` または プロジェクトの `.claude/commands/` にコピーして使います。',
      zip: 'aidriven-docs-commands.zip', size: '285 KB' },
    { id: 'demo-mtg', cat: 'official', title: 'デモミーティング素材',
      desc: '商談議事録デモ用の最小素材セット。研修中の体験デモで利用。',
      placement: '任意の作業フォルダに展開して、Claude Code でデモを進めます。',
      zip: 'demo-mtg.zip', size: '8.9 KB' },
    { id: 'hallmark-ja', cat: 'official', title: 'Hallmark-JA プラグイン',
      desc: '日本語向け Hallmark プラグイン（2026-05-21 版）。',
      placement: '展開した本体を Claude Code でプラグインとして読み込み（`/plugins install <path>`）。',
      zip: 'hallmark-ja.zip', size: '1.4 MB' },

    // ワークフロー・スターター
    { id: 'cc-sdd', cat: 'workflow', title: 'cc-sdd（Spec Driven Development）',
      desc: '要件→設計→タスク→実装 のサイクルを Claude Code / Cursor / Gemini で回すための SDD ワークフロー一式。',
      placement: '展開して README に従いインストール。多くは `.claude/` 配下にコマンドとスキルを追加する形になります。',
      zip: 'cc-sdd.zip', size: '705 KB' },
    { id: 'claude-code-spec-workflow', cat: 'workflow', title: 'claude-code-spec-workflow（Pimzino）',
      desc: 'Pimzino 系の Spec Workflow（Claude Code 版）。仕様駆動でタスクを刻む。',
      placement: '展開後、README の指示に従い `.claude/commands/` に該当コマンドを配置。',
      zip: 'claude-code-spec-workflow.zip', size: '1.0 MB' },
    { id: 'claude-code-starter-kit', cat: 'workflow', title: 'Claude Code Starter Kit',
      desc: 'Cloud Native Inc. Shinji Saito 氏の Claude Code 環境ワンコマンド構築キット。',
      placement: 'README の `curl ... | bash` 手順を **内容を確認してから** 実行してください（信頼できない場合は手動配置を推奨）。',
      zip: 'claude-code-starter-kit.zip', size: '361 KB' },
    { id: 'aidlc-workflows', cat: 'workflow', title: 'AWS AI-DLC ワークフロー',
      desc: 'AWS AI-Driven Development Life Cycle の三段階適応ワークフロー。',
      placement: '展開して README の手順に従って導入。多くは `.claude/commands/` と `.claude/skills/` に追加されます。',
      zip: 'aidlc-workflows.zip', size: '6.7 MB' },
    { id: 'spec-kit', cat: 'workflow', title: 'GitHub Spec Kit',
      desc: 'GitHub 公式の仕様駆動 OSS ツールキット。',
      placement: 'リポジトリ単位で導入。README の指示に従ってインストール。',
      zip: 'spec-kit.zip', size: '2.2 MB' },

    // ガイド・リファレンス
    { id: 'claude-code-best-practice', cat: 'reference', title: 'Claude Code Best Practice（Anthropic）',
      desc: 'Anthropic 公式 Boris Cherny 氏の発言まとめと実装サンプル一式。',
      placement: '参照用。`.claude/` のサンプルがあるので必要部分だけ自分の設定にコピー。',
      zip: 'claude-code-best-practice.zip', size: '22 MB' },
    { id: 'claude-code-tips', cat: 'reference', title: 'Claude Code Tips 40+',
      desc: 'status line / voice / Gemini minion など 40 以上の Tips。',
      placement: '参照用。気に入った Tips の設定だけを自分の `~/.claude/` にコピー。',
      zip: 'claude-code-tips.zip', size: '9.3 MB' },
    { id: 'everything-claude-code', cat: 'reference', title: 'Everything Claude Code（総合カタログ）',
      desc: 'Claude Code 総合カタログ（多言語）。`ecc-universal` / `ecc-agentshield` などを含む。',
      placement: '参照用。`skills/` や `agents/` などのサブディレクトリから必要なものだけを `~/.claude/` 配下にコピー。',
      zip: 'everything-claude-code.zip', size: '25 MB' },

    // Skills 集
    { id: 'awesome-claude-skills', cat: 'skills', title: 'Awesome Claude Skills（Composio）',
      desc: 'Composio 製の Claude Skills awesome リスト＋サンプル集。',
      placement: '気に入った Skill フォルダを `~/.claude/skills/<skill-name>/` にコピー。',
      zip: 'awesome-claude-skills.zip', size: '4.7 MB' },
    { id: 'claude-skills', cat: 'skills', title: 'claude-skills（trkbt10 / Office系）',
      desc: 'trkbt10 製。slide-studio / oxen-office など Office 系プラグインの skills。',
      placement: '各 skill フォルダを `~/.claude/skills/` にコピー。',
      zip: 'claude-skills.zip', size: '387 KB' },
    { id: 'agent-skills', cat: 'skills', title: 'agent-skills（React/Next.js）',
      desc: 'React / Next.js のベストプラクティス Skills 集。',
      placement: 'プロジェクトの `.claude/skills/` か `~/.claude/skills/` にコピー。',
      zip: 'agent-skills.zip', size: '350 KB' },
    { id: 'claude-code-skill-example', cat: 'skills', title: 'Skill 最小例（plan→worktree→PR）',
      desc: 'plan → worktree → PR → cleanup の最小サンプル Skill。',
      placement: '参照用。中身を読んで自前 Skill のひな型にする。',
      zip: 'claude-code-skill-example.zip', size: '16 KB' },
    { id: 'site2skill', cat: 'skills', title: 'site2skill（ドキュサイト→Skill変換）',
      desc: '任意のドキュメントサイトを Claude Skill の ZIP に変換するツール。',
      placement: '展開して README の手順で実行。生成された Skill ZIP は `~/.claude/skills/` に展開して利用。',
      zip: 'site2skill.zip', size: '66 KB' },
    { id: 'opc-skills', cat: 'skills', title: 'opc-skills（ReScienceLab）',
      desc: 'ReScienceLab 製、ソロプレナー向けの Skills 集。',
      placement: '各 skill フォルダを `~/.claude/skills/` にコピー。',
      zip: 'opc-skills.zip', size: '14 MB' },
    { id: 'obsidian-dev-skills', cat: 'skills', title: 'Obsidian Dev Skills',
      desc: 'Obsidian プラグイン／テーマ開発のための Skills 集。',
      placement: 'Obsidian 関連の開発プロジェクトの `.claude/skills/` にコピー。',
      zip: 'obsidian-dev-skills.zip', size: '76 KB' },
    { id: 'skills', cat: 'skills', title: '逆瀬川氏（@gyakuse）個人スキル保管庫',
      desc: '個人スキル保管庫＋参考リソース。',
      placement: '気に入った Skill を `~/.claude/skills/` にコピー。',
      zip: 'skills.zip', size: '2.8 MB' },
    { id: 'pm-skills', cat: 'skills', title: 'pm-skills（PM 用 65 + 36）',
      desc: 'プロダクト・マネージャー用 65 skills と 36 ワークフロー。',
      placement: '使いたい Skill / ワークフローを `~/.claude/skills/` `~/.claude/commands/` にコピー。',
      zip: 'pm-skills.zip', size: '12 MB' },
    { id: 'miyabi-claude-plugins', cat: 'skills', title: 'miyabi-claude-plugins',
      desc: '合同会社みやびのオールインワン。25+ Agent と 22 Skill。',
      placement: 'README に従い `~/.claude/` 配下に Agent と Skill を展開。',
      zip: 'miyabi-claude-plugins.zip', size: '791 KB' },
    { id: 'notebooklm-skill', cat: 'skills', title: 'NotebookLM 連携 Skill',
      desc: 'Claude Code から Google NotebookLM に問い合わせるための Skill。',
      placement: '展開して `~/.claude/skills/notebooklm-skill/` に配置。Google 認証は README の手順に従う。',
      zip: 'notebooklm-skill.zip', size: '179 KB' },

    // Agents
    { id: 'claude-agents', cat: 'agents', title: 'Claude Agents（arian88・専門領域別）',
      desc: '専門領域別のエージェント集。code-reviewer / security-auditor 等のリッチ版。',
      placement: '各 agent の `.md` を `~/.claude/agents/` または プロジェクトの `.claude/agents/` に配置。',
      zip: 'claude-agents.zip', size: '167 KB' },
    { id: 'claude-agents-main', cat: 'agents', title: 'Claude Agents（main.zip / リリース版）',
      desc: '上記 claude-agents のリリース ZIP 版（軽量）。',
      placement: '同上。READMEを参照。',
      zip: 'claude-agents-main.zip', size: '19 KB' },

    // UI / UX デザイン
    { id: 'ui-ux-pro-max-skill', cat: 'design', title: 'UI/UX Pro Max Skill',
      desc: '57 UI Styles / 95 Palettes / 56 Font Pairings / 98 UX Guidelines のデザイン知識DB。',
      placement: '`~/.claude/skills/ui-ux-pro-max-skill/` に配置。`/skill ui-ux-pro-max` で呼び出し。',
      zip: 'ui-ux-pro-max-skill.zip', size: '1.8 MB' },
    { id: 'claude-design-skill', cat: 'design', title: 'claude-design-skill（Interface Design）',
      desc: 'dashboard / app / tool 向け Interface Design Skill（Craft / Memory / Consistency）。',
      placement: '`~/.claude/skills/` に配置。',
      zip: 'claude-design-skill.zip', size: '36 KB' },
    { id: 'claude-design-engineer', cat: 'design', title: 'claude-design-engineer',
      desc: 'Interface Design の別名／フォーク版。中身は claude-design-skill とほぼ同一。',
      placement: '`~/.claude/skills/` に配置（claude-design-skill とは重複扱い）。',
      zip: 'claude-design-engineer.zip', size: '35 KB' },
    { id: 'interface-design', cat: 'design', title: 'interface-design（オリジナル）',
      desc: 'Interface Design のオリジナル版。',
      placement: '`~/.claude/skills/` に配置。',
      zip: 'interface-design.zip', size: '35 KB' }
];

window.TUTORIALS = TUTORIALS;
window.HANDSON = HANDSON;
window.HANDSON_DOWNLOADS = HANDSON_DOWNLOADS;
window.PROJECT_TRACKS = PROJECT_TRACKS;
window.PROJECT_DOWNLOADS = PROJECT_DOWNLOADS;
window.SETTINGS_CATEGORIES = SETTINGS_CATEGORIES;
window.SETTINGS_TEMPLATES = SETTINGS_TEMPLATES;
window.BEST_PRACTICES = BEST_PRACTICES;
window.BORIS_TIPS = BORIS_TIPS;
window.PROMPT_TIPS = PROMPT_TIPS;
window.OFFICIAL_RESOURCES = OFFICIAL_RESOURCES;
window.TROUBLESHOOTING = TROUBLESHOOTING;
window.FAQ = FAQ;
window.CHECKLIST = CHECKLIST;
