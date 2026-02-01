/**
 * Claude Code Tutorial - Tutorial Data (Enhanced)
 * by EZOAI
 *
 * 詳細なハンズオン手順と公式ベストプラクティスリンク付き
 */

// 公式リソースリンク
const OFFICIAL_RESOURCES = {
    docs: {
        url: "https://code.claude.com/docs/ja/overview",
        title: "Claude Code 公式ドキュメント",
        description: "Anthropicが提供する公式ドキュメント。最新の機能とベストプラクティス。"
    },
    bestPractices: {
        url: "https://code.claude.com/docs/en/best-practices",
        title: "公式ベストプラクティス",
        description: "Anthropicが推奨する7つのベストプラクティスと失敗パターン。"
    },
    zennGuide: {
        url: "https://zenn.dev/tmasuyama1114/books/claude_code_basic",
        title: "Claude Code 完全ガイド（Zenn）",
        description: "とまだ氏による包括的な日本語ガイド。全10パート・約50チャプター。"
    },
    slides: {
        url: "https://speakerdeck.com/minorun365/claude-codebesutopurakuteisumatome",
        title: "ベストプラクティスまとめスライド",
        description: "みのるん氏による公式ベストプラクティスの図解スライド。"
    }
};

const TUTORIALS = {
    intro: [
        {
            id: "00_01",
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
                keyPoints: [
                    "ファイルを読み、コマンドを実行し、変更を加え、問題を自律的に解決",
                    "ローカルで動くため、あなたのPCのファイルやプログラムを直接操作可能",
                    "Read、Write、Edit、Bash、Glob、Grep等のツールを自律的に使い分ける",
                    "「Claude Codeという名前を忘れろ。Claude Agentだと思ってください」"
                ],
                tools: [
                    { name: "Read", desc: "ファイルを読む" },
                    { name: "Write", desc: "ファイルを書く" },
                    { name: "Edit", desc: "ファイルを編集する" },
                    { name: "Bash", desc: "コマンドを実行する" },
                    { name: "Glob", desc: "ファイルパターンで検索する" },
                    { name: "Grep", desc: "ファイル内容を検索する" }
                ],
                handson: {
                    title: "エージェントを体感する",
                    goal: "Claude Codeが「ローカルで動き、ファイルを自分で読む」ことを体験",
                    prerequisites: ["VSCodeでプロジェクトフォルダを開いている", "Claude Code拡張がインストール済み"],
                    steps: [
                        {
                            step: 1,
                            action: "Claude Codeを起動し、以下のプロンプトを入力",
                            prompt: "このフォルダの中身を教えて。READMEとdataフォルダの役割を簡潔に説明して。",
                            expected: "Claudeが Read / Glob などでフォルダを読み、ファイル構造を説明する"
                        },
                        {
                            step: 2,
                            action: "続けて以下を入力",
                            prompt: "data フォルダにあるCSVの先頭5行の内容を要約して",
                            expected: "ファイルを読んで要約する一連の動作が自律的に進む"
                        }
                    ],
                    checkpoints: [
                        "質問に答えるだけでなく、必要なファイルを自分で開いている",
                        "内容に基づいて回答している（これが「エージェント」の振る舞い）"
                    ]
                }
            }
        },
        {
            id: "00_02",
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
                keyPoints: [
                    "チャットボット: 質問→回答→待機（受動的）",
                    "エージェント: 目標→計画→実行→検証→改善（能動的）",
                    "フィードバックループを自律的に回し続ける",
                    "人間は「何を達成したいか」を伝えるだけでよい"
                ],
                comparison: {
                    chatbot: ["質問に答える", "次の質問を待つ", "完全に受け身"],
                    agent: ["目標を理解する", "計画を立てる", "実行する", "結果を検証する", "必要なら修正する"]
                },
                handson: {
                    title: "自律的な実行を体感する",
                    goal: "CSVファイルの集計を依頼し、Claudeが読み込み→分析→出力まで自律的に行う様子を確認",
                    prerequisites: ["ハンズオンフォルダにdata/sales_2025.csvがある"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のプロンプトを入力",
                            prompt: "data/sales_2025.csv を読んで、月別の売上合計を計算して表形式で表示して。",
                            expected: "Claudeがファイルを読み、Pythonスクリプトを作成・実行し、結果を表示する"
                        },
                        {
                            step: 2,
                            action: "続けて依頼",
                            prompt: "地域別の売上も追加して、どの地域が最も売上が高いか教えて。",
                            expected: "前の文脈を維持しながら追加分析を行う"
                        }
                    ],
                    checkpoints: [
                        "こちらが「どうやって」を指示しなくても、Claudeが方法を考えている",
                        "必要なコマンドを自分で実行している"
                    ]
                }
            }
        },
        {
            id: "00_03",
            number: "00_03",
            title: "なぜコンテキストウィンドウが最重要か",
            title_en: "Why Context Window is Critical",
            description: "コンテキストウィンドウは有限のリソース。効率的に使わなければ、AIの性能は急激に劣化する。",
            description_en: "Context window is a finite resource. Without efficient use, AI performance degrades rapidly.",
            icon: "database",
            tags: ["コンテキスト", "トークン", "最適化"],
            tags_en: ["Context", "Token", "Optimization"],
            content: {
                summary: "コンテキストウィンドウは「AIの短期記憶」です。この有限リソースをどう使うかが成否を分けます。Claude 3.5 Sonnetは約200Kトークン（日本語で約15万字）ですが、効率的に使わなければ性能が劣化します。",
                keyPoints: [
                    "Claude 3.5 Sonnetは約200Kトークン（日本語で約15万字）",
                    "コンテキストが埋まるとAIの性能が劣化（Context Rot）",
                    "不要な情報を送らない、必要な情報を効率的に渡すことが重要",
                    "/context コマンドで使用量を確認できる"
                ],
                handson: {
                    title: "コンテキスト使用量を確認する",
                    goal: "やり取りでコンテキストが消費されることを体感",
                    prerequisites: ["Claude Codeでセッションを開始している"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のコマンドを実行",
                            prompt: "/context",
                            expected: "現在のコンテキスト使用量が表示される（例: 5% used）"
                        },
                        {
                            step: 2,
                            action: "いくつかの質問をしてから再度確認",
                            prompt: "/context",
                            expected: "使用量が増加している"
                        }
                    ],
                    checkpoints: [
                        "やり取りのたびにコンテキストが消費されることを理解",
                        "大きなファイルを読むと一気に消費されることを確認"
                    ]
                }
            }
        },
        {
            id: "00_04",
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
                keyPoints: [
                    "npm install -g @anthropic-ai/claude-code でグローバルインストール",
                    "claude --version で動作確認",
                    "VSCode拡張「Claude Code」をインストールして連携",
                    "claude auth login でAPI認証"
                ],
                code: "# インストール\nnpm install -g @anthropic-ai/claude-code\n\n# バージョン確認\nclaude --version\n\n# 認証\nclaude auth login",
                handson: {
                    title: "インストールと動作確認",
                    goal: "Claude Codeが正しくインストールされ、動作することを確認",
                    prerequisites: ["Node.js v18以上がインストール済み"],
                    steps: [
                        {
                            step: 1,
                            action: "ターミナルで以下を実行",
                            prompt: "npm install -g @anthropic-ai/claude-code",
                            expected: "インストールが完了する"
                        },
                        {
                            step: 2,
                            action: "バージョン確認",
                            prompt: "claude --version",
                            expected: "バージョン番号が表示される（例: 1.0.x）"
                        },
                        {
                            step: 3,
                            action: "認証",
                            prompt: "claude auth login",
                            expected: "ブラウザが開き、認証フローが開始される"
                        }
                    ],
                    checkpoints: [
                        "claude コマンドが認識される",
                        "認証が成功する"
                    ]
                }
            }
        },
        {
            id: "00_05",
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
                keyPoints: [
                    "/init - CLAUDE.mdを自動生成",
                    "/plan - Planモードで計画してから実装",
                    "/compact - コンテキストを圧縮",
                    "Esc - 処理を中断",
                    "Shift+Tab - 自動補完",
                    "/clear - コンテキストをリセット"
                ],
                commands: [
                    { cmd: "/init", desc: "プロジェクト構造に基づいたCLAUDE.mdを自動生成" },
                    { cmd: "/plan", desc: "Planモードを開始。変更なしで探索・計画" },
                    { cmd: "/compact", desc: "コンテキストを要約して圧縮" },
                    { cmd: "/clear", desc: "コンテキストをリセット" },
                    { cmd: "/context", desc: "コンテキスト使用量を確認" },
                    { cmd: "/model", desc: "使用モデルを変更" }
                ],
                handson: {
                    title: "CLAUDE.mdを自動生成する",
                    goal: "/init を使ってプロジェクト固有のCLAUDE.mdを生成",
                    prerequisites: ["ハンズオンフォルダを開いている"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のコマンドを実行",
                            prompt: "/init",
                            expected: "Claudeがフォルダを探索し、CLAUDE.mdの内容を提案する"
                        },
                        {
                            step: 2,
                            action: "提案を確認し、承認する",
                            prompt: "（提案された内容を確認してEnter）",
                            expected: "CLAUDE.mdファイルが作成される"
                        },
                        {
                            step: 3,
                            action: "@参照を試す",
                            prompt: "@CLAUDE.md の内容を説明して",
                            expected: "CLAUDE.mdの内容を読んで説明する"
                        }
                    ],
                    checkpoints: [
                        "CLAUDE.mdファイルがプロジェクトルートに作成された",
                        "@参照でファイルを直接指定できることを確認"
                    ],
                    files: {
                        created: ["CLAUDE.md"],
                        location: "プロジェクトルート"
                    }
                }
            }
        },
        {
            id: "00_06",
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
                keyPoints: [
                    "ファイルの整理・リネーム",
                    "文書の要約・翻訳",
                    "データの集計・分析",
                    "レポートの自動生成",
                    "議事録からタスク抽出"
                ],
                examples: [
                    "このフォルダの中身を一覧にして",
                    "更新日順にファイルを並べて",
                    "このCSVを月別に集計して",
                    "この議事録から次のアクションを抽出して",
                    "このレポートを3行で要約して"
                ],
                handson: {
                    title: "ファイル一覧と更新日順",
                    goal: "自然な日本語でファイル操作を依頼する",
                    prerequisites: ["ハンズオンフォルダを開いている"],
                    steps: [
                        {
                            step: 1,
                            action: "以下のプロンプトを入力",
                            prompt: "このフォルダ内のすべてのファイルを一覧にして、更新日が新しい順に並べて。",
                            expected: "ファイル一覧が更新日順で表示される"
                        },
                        {
                            step: 2,
                            action: "続けて依頼",
                            prompt: "この中でCSVファイルだけを抽出して、それぞれの行数を教えて。",
                            expected: "CSVファイルと行数が表示される"
                        }
                    ],
                    checkpoints: [
                        "プログラミング用語を使わなくても操作できる",
                        "自然な日本語で依頼が通る"
                    ]
                }
            }
        }
    ],
    basic: [
        {
            id: "01_01",
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
                keyPoints: [
                    "プロジェクトルートに配置",
                    "コーディング規約、アーキテクチャ、禁止事項を記載",
                    "~/CLAUDE.md でグローバル設定も可能",
                    "/init で自動生成、その後カスタマイズ",
                    "言語標準や自明な指示は含めない（コンテキスト節約）"
                ],
                structure: [
                    "## プロジェクト概要",
                    "## 技術スタック",
                    "## コーディング規約",
                    "## 禁止事項",
                    "## テスト方法"
                ],
                code: "# CLAUDE.md\n\n## プロジェクト概要\n売上データ分析プロジェクト\n\n## 制約\n- Pythonスクリプトはscripts/に配置\n- 出力形式はCSV\n- コミット前にテスト実行必須\n\n## 禁止事項\n- 本番データの直接編集禁止",
                handson: {
                    title: "CLAUDE.mdにルールを追加する",
                    goal: "既存のCLAUDE.mdにプロジェクト固有のルールを追加",
                    prerequisites: ["00_05で/initを実行し、CLAUDE.mdが存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "現在のCLAUDE.mdを確認",
                            prompt: "@CLAUDE.md を表示して",
                            expected: "現在のCLAUDE.mdの内容が表示される"
                        },
                        {
                            step: 2,
                            action: "ルールを追加",
                            prompt: "CLAUDE.md に以下のルールを追加して：\n\n## 出力ルール\n- スクリプトは scripts/ フォルダに配置\n- 集計結果は常にCSV形式で出力\n- コメントは日本語で記載",
                            expected: "CLAUDE.mdにルールが追加される"
                        },
                        {
                            step: 3,
                            action: "ルールが適用されるか確認",
                            prompt: "data/sales_2025.csv を月別に集計するスクリプトを作成して",
                            expected: "scripts/フォルダにスクリプトが作成され、CSV形式で出力される"
                        }
                    ],
                    checkpoints: [
                        "CLAUDE.mdにルールが追加された",
                        "以降のタスクでルールが自動的に適用される"
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
                keyPoints: [
                    "具体的な入力→期待出力を示す",
                    "テストを書かせて実行させる",
                    "スクリーンショットで視覚的に検証",
                    "「根本原因に対処して」と指示する",
                    "曖昧な「うまく動くようにして」は避ける"
                ],
                quote: "テスト、スクリーンショット、期待される出力を含めて、Claudeが自己検証できるようにせよ。これが最もレバレッジの高い一手です。",
                comparison: {
                    bad: "メール検証関数を実装して",
                    good: "validateEmail関数を書いて。test@example.comは真、invalidは偽を返す。実装後テストを実行して"
                },
                handson: {
                    title: "期待出力を渡して集計を検証させる",
                    goal: "「期待される出力」を明示して依頼し、Claudeが自分で結果を検証できるようにする",
                    prerequisites: ["CLAUDE.mdがある", "data/sales_2025.csvがある"],
                    steps: [
                        {
                            step: 1,
                            action: "検証付きの依頼文を送る",
                            prompt: "data/sales_2025.csv を読んで、月別の合計金額を計算するPythonスクリプト scripts/summary_by_month.py を作成して。\n\n条件:\n- 標準入力またはファイルパスでCSVを受け取る\n- date列はYYYY-MM-DD形式で、月は先頭7文字（YYYY-MM）で集計\n- 出力は「月, 合計」のCSV形式で標準出力に出す\n\n作成したら、data/sales_2025.csv に対してスクリプトを実行し、出力された月別合計がCSVの内容と一致するか検算して確認して。",
                            expected: "スクリプト作成→実行→検証までClaudeが自律的に行う"
                        },
                        {
                            step: 2,
                            action: "不一致があれば修正を依頼",
                            prompt: "期待する集計結果と一致するように修正して",
                            expected: "修正と再実行・再検証が行われる"
                        }
                    ],
                    checkpoints: [
                        "「正解」を渡すことで、Claudeが自己検証している",
                        "不一致なら修正するループが回る"
                    ],
                    files: {
                        created: ["scripts/summary_by_month.py"]
                    }
                }
            }
        },
        {
            id: "01_03",
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
                keyPoints: [
                    "初期の誤った推論が後続の判断を歪める",
                    "無関係な情報がコンテキストを圧迫",
                    "対策: /compact、/clear、新規セッション開始",
                    "2回失敗したら /clear と再プロンプトを検討"
                ],
                symptoms: [
                    "同じ間違いを繰り返す",
                    "以前の指示を忘れる",
                    "無関係な情報を参照する",
                    "処理が遅くなる"
                ],
                handson: {
                    title: "Context Rotの症状を理解する",
                    goal: "/contextで増加を確認し、症状を理解する",
                    prerequisites: ["いくつかのタスクを実行済み"],
                    steps: [
                        {
                            step: 1,
                            action: "コンテキスト使用量を確認",
                            prompt: "/context",
                            expected: "現在の使用量が表示される"
                        },
                        {
                            step: 2,
                            action: "いくつかの質問をする",
                            prompt: "（複数の質問やファイル読み込みを行う）",
                            expected: "使用量が増加する"
                        },
                        {
                            step: 3,
                            action: "圧縮を実行",
                            prompt: "/compact",
                            expected: "コンテキストが圧縮され、使用量が減少する"
                        }
                    ],
                    checkpoints: [
                        "コンテキストが増加する仕組みを理解",
                        "/compactで圧縮できることを確認"
                    ]
                }
            }
        },
        {
            id: "01_04",
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
                keyPoints: [
                    "Write: 結果をファイルに書き出す（コンテキストから外す）",
                    "Structure: CLAUDE.mdで構造化（毎回説明しない）",
                    "Compress: /compactで圧縮（要約して継続）",
                    "Extend: Skills/Hooksで拡張（繰り返しを自動化）"
                ],
                framework: [
                    { letter: "W", name: "Write", desc: "結果をファイルに書き出してコンテキストから外す" },
                    { letter: "S", name: "Structure", desc: "CLAUDE.mdでルールを構造化" },
                    { letter: "C", name: "Compress", desc: "/compactでコンテキストを圧縮" },
                    { letter: "E", name: "Extend", desc: "Skills/Hooksで機能を拡張" }
                ],
                handson: {
                    title: "Write戦略を試す",
                    goal: "大きなCSVを要約してファイルに書き出す",
                    prerequisites: ["data/sales_2025.csvがある"],
                    steps: [
                        {
                            step: 1,
                            action: "要約をファイルに書き出す",
                            prompt: "data/sales_2025.csv の内容を分析し、以下の情報を data/summary.txt に書き出して：\n- 総レコード数\n- 期間（最初と最後の日付）\n- 合計金額\n- カテゴリ別の件数",
                            expected: "summary.txtが作成され、要約が保存される"
                        },
                        {
                            step: 2,
                            action: "ファイルを参照して作業",
                            prompt: "@data/summary.txt を参照して、この売上データの特徴を説明して",
                            expected: "元のCSV全体ではなく、要約ファイルを参照して回答"
                        }
                    ],
                    checkpoints: [
                        "ファイルに書き出すことでコンテキストを節約",
                        "@参照で必要な情報だけを読み込む"
                    ],
                    files: {
                        created: ["data/summary.txt"]
                    }
                }
            }
        },
        {
            id: "01_05",
            number: "01_05",
            title: "探索→計画→実装→コミット",
            title_en: "Explore → Plan → Implement → Commit",
            description: "Planモードで計画を立ててから実装。公式推奨のワークフロー。",
            icon: "git-branch",
            tags: ["Planモード", "ワークフロー", "計画"],
            content: {
                summary: "いきなりコードを書かない。まず探索し、計画を立て、承認を得てから実装。これが公式推奨のワークフローです。",
                keyPoints: [
                    "/plan でPlanモードを開始",
                    "Claudeがコードベースを探索し、計画を提案",
                    "ユーザーが承認したら実装フェーズへ",
                    "実装後はコミットして完了",
                    "計画段階では変更が行われない（安全）"
                ],
                workflow: [
                    { phase: "探索", desc: "関連ファイルを読み、現状を把握" },
                    { phase: "計画", desc: "変更計画を立て、ユーザーに提示" },
                    { phase: "実装", desc: "承認後、計画に従って変更を実行" },
                    { phase: "コミット", desc: "変更をGitにコミット" }
                ],
                handson: {
                    title: "Planモードで機能追加を計画する",
                    goal: "Planモードで「レポートに集計表を追加」を計画・実装",
                    prerequisites: ["scripts/summary_by_month.pyが存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "Planモードを開始",
                            prompt: "/plan",
                            expected: "Planモードに入る（プロンプトが変わる）"
                        },
                        {
                            step: 2,
                            action: "計画を依頼",
                            prompt: "売上データの月別・地域別レポートをMarkdownで出力する機能を追加したい。reports/q1_report.md として出力する。どのように実装すべきか計画して。",
                            expected: "Claudeが既存コードを探索し、実装計画を提示"
                        },
                        {
                            step: 3,
                            action: "計画を承認して実装",
                            prompt: "この計画で実装して",
                            expected: "計画に従って実装が行われる"
                        }
                    ],
                    checkpoints: [
                        "Planモードでは変更が行われないことを確認",
                        "計画を確認してから実装できる安心感"
                    ],
                    files: {
                        created: ["reports/q1_report.md"]
                    }
                }
            }
        },
        {
            id: "01_06",
            number: "01_06",
            title: "よくある失敗パターン",
            title_en: "Common Failure Patterns",
            description: "公式ドキュメントが警告する失敗パターンと、その対策を学ぶ。",
            icon: "x-circle",
            tags: ["失敗パターン", "アンチパターン", "対策"],
            content: {
                summary: "Anthropic公式が警告する失敗パターンを知り、避けることで生産性を最大化します。",
                keyPoints: [
                    "曖昧な指示を出す → 具体的なゴールと検証方法を示す",
                    "検証手段を与えない → テスト・期待出力を提供",
                    "コンテキストを肥大化させる → /compact、ファイル書き出し",
                    "計画せずに実装させる → /plan を使う"
                ],
                antiPatterns: [
                    { name: "キッチンシンク", problem: "無関係タスク混在でコンテキスト散乱", solution: "/clearでリセット" },
                    { name: "繰り返し修正", problem: "失敗アプローチで汚染", solution: "2回失敗後に/clearと再プロンプト" },
                    { name: "長すぎるCLAUDE.md", problem: "ルールがノイズに埋没", solution: "容赦なく削除またはフック化" },
                    { name: "検証なし", problem: "エッジケース未処理", solution: "常に検証手段を提供" },
                    { name: "無限探索", problem: "大量ファイル読込", solution: "スコープ限定またはサブエージェント" }
                ],
                handson: {
                    title: "失敗パターンを避ける",
                    goal: "キッチンシンクを避け、/clearのタイミングを学ぶ",
                    prerequisites: ["いくつかのタスクを実行済み"],
                    steps: [
                        {
                            step: 1,
                            action: "コンテキストを確認",
                            prompt: "/context",
                            expected: "使用量が表示される"
                        },
                        {
                            step: 2,
                            action: "新しいタスクの前に/clear",
                            prompt: "/clear",
                            expected: "コンテキストがリセットされる"
                        },
                        {
                            step: 3,
                            action: "クリーンな状態で新タスク開始",
                            prompt: "（新しいタスクを開始）",
                            expected: "クリーンなコンテキストで作業できる"
                        }
                    ],
                    checkpoints: [
                        "タスクの切れ目で/clearを使う習慣",
                        "2回失敗したら/clearを検討"
                    ]
                }
            }
        }
    ],
    intermediate: [
        {
            id: "02_01",
            number: "02_01",
            title: "Skills - ワークフローの定義",
            title_en: "Skills - Workflow Definitions",
            description: "繰り返しの作業をSkillとして定義。Claudeが必要に応じて自動で読み込む。",
            icon: "zap",
            tags: ["Skills", "ワークフロー", "自動化"],
            content: {
                summary: "Skillsは特定のワークフローを定義するマークダウンファイルです。Progressive Disclosure（必要なときだけ読み込む）により、コンテキストを効率的に使用します。Claudeはdescriptionを読んで、関連するタスクが来たときに自動でスキルの内容を読み込みます。",
                keyPoints: [
                    "~/.claude/skills/（グローバル）または .claude/skills/（プロジェクト）に配置",
                    "YAML Front Matterでname、description、globs等のメタデータを記載",
                    "Claudeがdescriptionを見て、必要と判断したら自動で本文を読み込む",
                    "globs指定で特定ファイル編集時に自動読み込み",
                    "user-invocable: true でスラッシュコマンド化（/skill-name で呼び出し）",
                    "/learn コマンドで会話から自動的にSkillを生成可能"
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
                    goal: "コードレビュー時に自動適用されるSkillを作成し、実際にレビューで使用する",
                    prerequisites: ["任意のプロジェクトフォルダをVSCodeで開いている"],
                    steps: [
                        {
                            step: 1,
                            action: "Skillフォルダを作成",
                            prompt: "このプロジェクトに .claude/skills フォルダを作成して",
                            expected: ".claude/skills フォルダが作成される"
                        },
                        {
                            step: 2,
                            action: "コードレビューSkillを作成",
                            prompt: ".claude/skills/code-review.md を作成して。内容:\n\n---\nname: code-review\ndescription: |\n  コードレビュー、PRレビューを依頼されたときに使用。\n  セキュリティ、パフォーマンス、可読性の3観点でレビューする。\nglobs:\n  - \"*.py\"\n  - \"*.js\"\n  - \"*.ts\"\n---\n\n# コードレビューチェックリスト\n\n## セキュリティ\n- [ ] 入力バリデーションがある\n- [ ] 機密情報がハードコードされていない\n- [ ] SQLインジェクション対策がある\n\n## パフォーマンス\n- [ ] 不要なループがない\n- [ ] N+1クエリがない\n- [ ] メモリリークの可能性がない\n\n## 可読性\n- [ ] 変数名が適切\n- [ ] 関数が単一責任\n- [ ] 適切なコメントがある\n\n## フィードバック形式\n🔴 Critical（必須修正）/ 🟡 Suggestion（推奨）/ 💭 Question（質問）",
                            expected: "code-review.md が作成される"
                        },
                        {
                            step: 3,
                            action: "テスト用Pythonファイルを作成",
                            prompt: "test_sample.py というファイルを作成して、意図的にいくつかの問題があるコードを書いて（例：ハードコードされたパスワード、未使用変数など）",
                            expected: "問題のあるコードが作成される"
                        },
                        {
                            step: 4,
                            action: "Skillを使ってレビュー",
                            prompt: "test_sample.py をレビューして",
                            expected: "code-review Skillが自動で読み込まれ、チェックリストに従ったレビューが行われる"
                        }
                    ],
                    checkpoints: [
                        "Skillファイルの構造（YAML Front Matter + 本文）を理解した",
                        "globs指定でファイルタイプに応じた自動読み込みを確認",
                        "Skillの内容に従ったレビューが実行された"
                    ],
                    files: {
                        created: [".claude/skills/code-review.md", "test_sample.py"]
                    }
                }
            }
        },
        {
            id: "02_02",
            number: "02_02",
            title: "Hooks - 自動化トリガー",
            title_en: "Hooks - Automation Triggers",
            description: "特定のイベントに応じて自動でスクリプトを実行。保存時フォーマット、テスト実行など。",
            icon: "anchor",
            tags: ["Hooks", "自動化", "トリガー"],
            content: {
                summary: "Hooksはイベント駆動の自動化機構です。ファイル保存時のフォーマット、機密情報の検出、テスト自動実行など、Claude Codeの操作に応じてスクリプトを自動実行できます。.claude.json（プロジェクト）または ~/.claude/settings.json（グローバル）で設定します。",
                keyPoints: [
                    "SessionStart/SessionStop: セッション開始・終了時に実行",
                    "PreToolUse: ツール実行前にチェック（ブロック可能）",
                    "PostToolUse: ツール実行後に処理",
                    "Notification: Claudeの応答を加工して表示",
                    "$EVENT: イベント種別、$FILE: 対象ファイル、$CONTENT: 内容などの変数が使用可能",
                    "終了コード0以外でツール実行をブロック"
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
                    goal: "機密ファイル編集をブロックし、Python保存時に自動フォーマットする総合的なHook設定を作成",
                    prerequisites: ["pip install black isort でフォーマッターをインストール済み"],
                    steps: [
                        {
                            step: 1,
                            action: "テスト用フォルダ構造を作成",
                            prompt: "以下のフォルダ構造を作成して：\nhooks-demo/\n├── src/\n├── secrets/\n│   └── api_keys.json\n└── .env.example",
                            expected: "フォルダ構造が作成される"
                        },
                        {
                            step: 2,
                            action: "総合的なHook設定を作成",
                            prompt: ".claude.json を作成して、以下の設定を記載：\n\n{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"*.env*\",\n        \"command\": \"echo '⛔ .envファイルの直接編集は禁止されています' && exit 1\"\n      },\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"**/secrets/**\",\n        \"command\": \"echo '⛔ secretsフォルダは編集禁止です' && exit 1\"\n      }\n    ],\n    \"PostToolUse\": [\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"*.py\",\n        \"command\": \"black $FILE && isort $FILE && echo '✅ フォーマット完了'\"\n      }\n    ],\n    \"SessionStart\": [\n      {\n        \"command\": \"echo 'Session: $(date)' >> .claude-log\"\n      }\n    ]\n  }\n}",
                            expected: ".claude.json が作成される"
                        },
                        {
                            step: 3,
                            action: "セキュリティHookをテスト（ブロック確認）",
                            prompt: "secrets/api_keys.json に何か書き込んで",
                            expected: "「secretsフォルダは編集禁止」というメッセージが表示され、書き込みがブロックされる"
                        },
                        {
                            step: 4,
                            action: "フォーマットHookをテスト",
                            prompt: "src/sample.py を作成して、以下の未フォーマットコードを書いて：\n\ndef hello(   name ):\n    print(    f'Hello, {name}!'   )\n\nif __name__=='__main__':\n    hello('World')",
                            expected: "ファイル作成後、自動でblack/isortが実行され、コードがフォーマットされる"
                        },
                        {
                            step: 5,
                            action: "フォーマット結果を確認",
                            prompt: "src/sample.py の内容を表示して",
                            expected: "適切にフォーマットされたコードが表示される"
                        }
                    ],
                    checkpoints: [
                        "PreToolUseでブロック機能が動作した（exit 1）",
                        "PostToolUseで自動フォーマットが実行された",
                        "パターンマッチング（*.py, *.env*, **/secrets/**）を理解した",
                        "$FILE変数が正しく展開された"
                    ],
                    files: {
                        created: [".claude.json", "src/sample.py", ".claude-log"]
                    }
                }
            }
        },
        {
            id: "02_03",
            number: "02_03",
            title: "Subagents - タスク委譲の仕組み",
            title_en: "Subagents - Task Delegation",
            description: "複雑なタスクを専門のサブエージェントに委譲。並列処理も可能。",
            icon: "users",
            tags: ["Subagents", "委譲", "並列処理"],
            content: {
                summary: "Subagents（サブエージェント）は、特定のタスクを専門のエージェントに委譲する仕組みです。大規模なコードベース探索、複数ファイルの同時処理、長時間タスクのバックグラウンド実行など、メインエージェントでは効率が悪い作業を分散処理できます。",
                keyPoints: [
                    "Taskツールで専門サブエージェントを起動",
                    "Explore: コードベース探索に特化（ファイル検索、パターン検出）",
                    "Plan: 実装計画の設計に特化（アーキテクチャ分析）",
                    "Bash: コマンド実行に特化（ビルド、テスト、デプロイ）",
                    "run_in_background: true で並列実行（複数タスク同時処理）",
                    "結果は親エージェントに集約されて報告"
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
                    goal: "Exploreサブエージェントを使った大規模検索と、並列実行による効率化を体験",
                    prerequisites: ["ある程度のサイズのプロジェクトフォルダがある"],
                    steps: [
                        {
                            step: 1,
                            action: "プロジェクト全体の探索を依頼",
                            prompt: "このプロジェクト全体を探索して、以下を調査して報告して：\n- プロジェクトの構造と主要なファイル\n- 使用している言語・フレームワーク\n- エントリーポイント（main関数等）\n\nExploreサブエージェントを使って詳細に調査して。",
                            expected: "Exploreサブエージェントが起動し、プロジェクト全体を探索して構造を報告"
                        },
                        {
                            step: 2,
                            action: "複数の観点で並列分析を依頼",
                            prompt: "以下の3つの分析を並列で実行して：\n1. セキュリティ観点: 機密情報のハードコード、入力バリデーション漏れを検索\n2. パフォーマンス観点: N+1クエリ、不要なループを検索\n3. コード品質観点: 未使用変数、重複コードを検索",
                            expected: "3つのサブエージェントが並列で起動し、各観点での分析結果が報告される"
                        },
                        {
                            step: 3,
                            action: "改善計画の策定を依頼",
                            prompt: "分析結果をもとに、優先度の高い改善項目のリストと実装計画を作成して。Planサブエージェントで詳細な計画を立てて。",
                            expected: "Planサブエージェントが起動し、優先度付きの改善計画が提示される"
                        },
                        {
                            step: 4,
                            action: "最優先の改善を実施",
                            prompt: "計画の中で最も優先度が高い1つを実装して",
                            expected: "改善が実装される"
                        }
                    ],
                    checkpoints: [
                        "Exploreサブエージェントがプロジェクト全体を効率的に探索した",
                        "並列実行で複数の分析が同時に行われた",
                        "Planサブエージェントで実装計画が策定された",
                        "サブエージェントの使い分け（探索 vs 計画 vs 実行）を理解した"
                    ]
                }
            }
        },
        {
            id: "02_04",
            number: "02_04",
            title: "Tasks - セッションを超えるタスク管理",
            title_en: "Tasks - Cross-Session Task Management",
            description: "長期タスクの進捗をファイルで管理。セッションをまたいで継続可能。",
            icon: "list-checks",
            tags: ["Tasks", "進捗管理", "永続化"],
            content: {
                summary: "複雑なタスクをTodoリストで管理し、セッションを超えて進捗を追跡します。",
                keyPoints: [
                    "TodoWrite で構造化されたタスクリストを作成",
                    "pending → in_progress → completed の状態遷移",
                    "複雑なタスクを小さなステップに分解",
                    "ファイルに書き出して永続化"
                ],
                handson: {
                    title: "タスクリストで「要約」「本文」を管理",
                    goal: "複数ステップのタスクをリスト化して進捗管理",
                    prerequisites: ["レポート作成タスクがある"],
                    steps: [
                        {
                            step: 1,
                            action: "タスクを分解",
                            prompt: "Q1売上レポートの作成タスクを以下のステップに分解してリスト化して：\n1. データ読み込みと検証\n2. 月別集計\n3. 地域別集計\n4. 要約の作成\n5. 本文の作成\n6. レビューと修正",
                            expected: "タスクリストが作成される"
                        },
                        {
                            step: 2,
                            action: "順番に実行",
                            prompt: "最初のタスクから順番に実行して、完了したらチェックを付けて",
                            expected: "タスクが順番に実行され、進捗が更新される"
                        }
                    ],
                    checkpoints: [
                        "タスクが小さなステップに分解されている",
                        "進捗が可視化されている"
                    ]
                }
            }
        },
        {
            id: "02_05",
            number: "02_05",
            title: "MCP - 外部サービス連携",
            title_en: "MCP - External Service Integration",
            description: "Model Context Protocolで外部サービス（Slack、GitHub、DB等）と連携。",
            icon: "plug",
            tags: ["MCP", "外部連携", "API"],
            content: {
                summary: "MCP（Model Context Protocol）は、Claudeを外部サービスやデータソースと安全に接続するための標準プロトコルです。GitHub、Slack、データベース、Webブラウザなど、様々なサービスとの連携が可能になります。MCPサーバーを設定することで、Claudeが直接外部APIにアクセスできるようになります。",
                keyPoints: [
                    "~/.claude/settings.json でMCPサーバーを設定",
                    "npx/node/pythonでMCPサーバーを起動",
                    "公式・コミュニティ提供の多数のMCPサーバーが利用可能",
                    "ファイルシステム、GitHub、Slack、データベース等と連携",
                    "セキュアな認証・スコープ制限",
                    "Claude Codeセッション内で直接外部データにアクセス"
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
                    goal: "GitHub MCPサーバーを設定し、Claude CodeからIssueを直接操作する",
                    prerequisites: [
                        "GitHubアカウントがある",
                        "Personal Access Token（PAT）を取得済み（repo, read:org スコープ）",
                        "Node.js v18以上がインストール済み"
                    ],
                    steps: [
                        {
                            step: 1,
                            action: "GitHub PATを取得（まだの場合）",
                            prompt: "GitHub Settings > Developer settings > Personal access tokens > Generate new token で、repo と read:org スコープを持つトークンを作成してください。",
                            expected: "ghp_xxxx 形式のトークンが発行される（これは安全に保管）"
                        },
                        {
                            step: 2,
                            action: "MCP設定ファイルを作成",
                            prompt: "~/.claude/settings.json を作成して、以下の内容を設定：\n\n{\n  \"mcpServers\": {\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@anthropic-ai/mcp-server-github\"],\n      \"env\": {\n        \"GITHUB_TOKEN\": \"ghp_YOUR_TOKEN_HERE\"\n      }\n    }\n  }\n}\n\n※ ghp_YOUR_TOKEN_HERE を実際のトークンに置き換え",
                            expected: "settings.json が作成される"
                        },
                        {
                            step: 3,
                            action: "Claude Codeを再起動",
                            prompt: "Claude Codeを一度終了し、再度起動してください。MCPサーバーが読み込まれます。",
                            expected: "MCPサーバーが初期化される"
                        },
                        {
                            step: 4,
                            action: "GitHubリポジトリのIssueを確認",
                            prompt: "GitHubの <owner>/<repo> リポジトリのオープンなIssueを5件表示して",
                            expected: "MCPサーバー経由でGitHub APIが呼び出され、Issue一覧が表示される"
                        },
                        {
                            step: 5,
                            action: "新しいIssueを作成（オプション）",
                            prompt: "「テスト用Issue - Claude Codeから作成」というタイトルで新しいIssueを作成して",
                            expected: "GitHubに新しいIssueが作成される"
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
            number: "02_06",
            title: "Plugins - 拡張パッケージ",
            title_en: "Plugins - Extension Packages",
            description: "コミュニティが作成した拡張機能をインストール。機能を簡単に追加。",
            icon: "package",
            tags: ["Plugins", "拡張", "コミュニティ"],
            content: {
                summary: "Pluginsは、Skills、Hooks、MCPサーバーをまとめたパッケージです。プロジェクトテンプレートのように、一度のインストールで複数の機能を追加できます。チームやコミュニティで共有することで、ベストプラクティスを標準化できます。",
                keyPoints: [
                    "claude plugin install <name> でインストール",
                    "スキル、フック、MCPをまとめて提供",
                    "manifest.json で構成を定義",
                    "ローカルまたはGitリポジトリから配布可能",
                    "チーム開発のオンボーディングを効率化"
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
            number: "02_07",
            title: "戦略的コンパクト化",
            title_en: "Strategic Compaction",
            description: "/compact の効果的な使い方。いつ、どのように圧縮するか。",
            icon: "minimize-2",
            tags: ["/compact", "圧縮", "最適化"],
            content: {
                summary: "/compactはコンテキストを要約して圧縮するコマンドです。コンテキストウィンドウは有限リソースであり、適切なタイミングで圧縮することで、長時間のセッションでも品質を維持できます。ただし、タイミングを間違えると重要な文脈を失うリスクがあります。",
                keyPoints: [
                    "70%を超えたら圧縮を検討",
                    "フェーズの切れ目（探索完了→実装開始など）で実行",
                    "重要な情報はファイルに書き出してから圧縮",
                    "圧縮後は重要な文脈を再確認",
                    "/compact <カスタム指示> で圧縮内容をカスタマイズ可能"
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
                            expected: "使用量が表示される（例: 45% used, 90K/200K tokens）"
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
            number: "02_08",
            title: "並列化戦略",
            title_en: "Parallelization Strategies",
            description: "複数のタスクを並列で実行。効率を最大化する設計。",
            icon: "git-fork",
            tags: ["並列処理", "効率化", "設計"],
            content: {
                summary: "Claude Codeは内部的にSubagentsを使って並列処理を行います。独立したタスクを特定し、並列実行することで処理時間を大幅に短縮できます。また、ヘッドレスモードで複数のCLIセッションを同時に実行することも可能です。",
                keyPoints: [
                    "依存関係のないタスクを特定して並列化",
                    "Subagentsが自動的に並列実行を判断",
                    "明示的に「並列で」と指示して強制も可能",
                    "ヘッドレスモード（-p）で複数セッション起動",
                    "結果を統合して次のステップへ"
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
        }
    ],
    advanced: [
        {
            id: "03_01",
            number: "03_01",
            title: "トークン最適化",
            title_en: "Token Optimization",
            description: "トークン消費を最小化するテクニック。コスト削減と性能向上を両立。",
            icon: "trending-down",
            tags: ["トークン", "最適化", "コスト"],
            content: {
                summary: "Claude Codeのコストはトークン消費に直結します。必要最小限のトークンで最大の効果を得ることで、コスト削減とパフォーマンス向上の両方を実現できます。WSCEフレームワーク（Write/Summarize/Compress/Extract）を使いこなしましょう。",
                keyPoints: [
                    "WSCEフレームワーク: Write → Summarize → Compress → Extract",
                    "不要なファイル読み込みを避ける（@指定で必要部分のみ）",
                    "結果はファイルに書き出してコンテキストから解放",
                    "Grepで必要な部分だけ抽出してから渡す",
                    "モデル選択: 簡単なタスクはHaiku、複雑なタスクはSonnet/Opus"
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
                    title: "タスク別モデル選択ガイド",
                    models: [
                        {
                            model: "Claude 3.5 Haiku",
                            cost: "低",
                            useCase: "単純な変換、フォーマット、簡単なリファクタリング",
                            examples: ["JSONの整形", "変数名の一括置換", "簡単なコメント追加"]
                        },
                        {
                            model: "Claude 3.5 Sonnet",
                            cost: "中",
                            useCase: "一般的なコーディング、分析、レビュー",
                            examples: ["新機能の実装", "コードレビュー", "バグ修正"]
                        },
                        {
                            model: "Claude 3 Opus",
                            cost: "高",
                            useCase: "複雑な設計、アーキテクチャ、難解な問題",
                            examples: ["システム設計", "複雑なアルゴリズム", "セキュリティ分析"]
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
            number: "03_02",
            title: "継続学習パターン",
            title_en: "Continuous Learning Patterns",
            description: "セッション間で学習を蓄積。CLAUDE.mdとSkillsを育てる。",
            icon: "refresh-cw",
            tags: ["継続学習", "蓄積", "改善"],
            content: {
                summary: "Claude Codeのセッションは独立していますが、CLAUDE.mdとSkillsを使えば学習を蓄積できます。プロジェクト固有のルール、効果的なプロンプトパターン、失敗から学んだ教訓を永続化し、チーム全体で共有しましょう。",
                keyPoints: [
                    "/learn コマンドで会話から自動的にSkillを生成",
                    "CLAUDE.md に「やってはいけないこと」を記録",
                    "成功パターンは即座にSkill化",
                    "定期的（週1回など）にルールを見直し・整理",
                    "チームでCLAUDE.mdとSkillsをバージョン管理"
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
            number: "03_03",
            title: "非技術者向け - コードを書かない使い方",
            title_en: "For Non-Developers - Using Without Code",
            description: "プログラミング知識なしでClaude Codeを活用。文書作成、分析、整理に。",
            icon: "file-edit",
            tags: ["非技術者", "文書", "分析"],
            content: {
                summary: "Claude Codeはコーディングツールではなく「ローカルアシスタント」です。プログラミング知識がなくても、ファイル整理、レポート作成、データ分析、議事録処理など、日常業務の多くをAIに任せることができます。専門用語は不要、自然な日本語で依頼するだけです。",
                keyPoints: [
                    "「〜して」という自然な日本語で依頼できる",
                    "ファイル操作・整理を自動化",
                    "CSVやExcelのデータを分析・グラフ化",
                    "議事録から次のアクションを自動抽出",
                    "複数ファイルの一括処理も可能"
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
            number: "03_04",
            title: "50の非コーディング活用例",
            title_en: "50 Non-Coding Use Cases",
            description: "実際に使える50のユースケース。日常業務から創作活動まで。",
            icon: "list",
            tags: ["ユースケース", "活用例", "実践"],
            content: {
                summary: "Claude Codeの活用範囲はコーディングだけではありません。日常業務、創作活動、学習、調査など、あらゆる場面で活用できます。ここでは実際に使える50のユースケースを10カテゴリに分けて紹介します。",
                keyPoints: [
                    "資料作成: プレゼン、レポート、提案書、マニュアル",
                    "情報整理: ファイル、ブックマーク、メモ、連絡先",
                    "分析: 売上、アンケート、ログ、市場調査",
                    "創作: 記事、小説、脚本、企画",
                    "学習: 要約、翻訳、解説、問題作成"
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
            number: "03_05",
            title: "Writer/Reviewerパターン",
            title_en: "Writer/Reviewer Pattern",
            description: "並列セッションで実装とレビューを分離。品質と速度を両立する高度なワークフロー。",
            icon: "git-fork",
            tags: ["並列", "品質", "レビュー", "上級"],
            content: {
                summary: "Writer/Reviewerパターンは、1つのセッションで実装（Writer）し、別のセッションでレビュー（Reviewer）する手法です。新鮮なコンテキストでレビューすることで、実装者のバイアスを排除し、品質を大幅に向上させます。",
                keyPoints: [
                    "Writerセッション: 実装に集中、コードを書く",
                    "Reviewerセッション: 新鮮な目でレビュー、バイアスなし",
                    "並列実行で時間効率も向上",
                    "テスト作成にも応用可能（実装者 vs テスト作成者）"
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
            number: "03_06",
            title: "Fan-outパターン（バッチ処理）",
            description: "複数ファイルへの一括処理。ヘッドレスモードで大規模マイグレーションを自動化。",
            icon: "layers",
            tags: ["バッチ", "ヘッドレス", "マイグレーション", "上級"],
            content: {
                summary: "Fan-outパターンは、多数のファイルに対して同じ処理を並列で適用する手法です。ヘッドレスモード（claude -p）を使い、シェルスクリプトやCIパイプラインから一括実行します。大規模なコードベースのマイグレーション、リファクタリング、フォーマット統一などに威力を発揮します。",
                keyPoints: [
                    "claude -p \"prompt\" でヘッドレス実行",
                    "forループで複数ファイルに適用",
                    "--allowedTools で権限を制限",
                    "--output-format json で結果を構造化"
                ],
                code: `# Fan-outパターンの基本形
for file in $(find src -name "*.ts"); do
  claude -p "Migrate $file from CommonJS to ES modules. Return OK or FAIL." \\
    --allowedTools "Edit,Bash(npm run lint)" \\
    --output-format json
done`,
                useCases: [
                    { name: "大規模マイグレーション", description: "2000ファイルのモジュール形式変更", example: "CommonJS → ES Modules" },
                    { name: "コードフォーマット統一", description: "全ファイルにフォーマットルールを適用", example: "Prettier設定の一括適用" },
                    { name: "ドキュメント自動生成", description: "各ファイルにJSDocを追加", example: "型定義からドキュメント生成" },
                    { name: "セキュリティ監査", description: "全ファイルの脆弱性チェック", example: "SQLインジェクションパターンの検出" }
                ],
                handson: {
                    title: "ヘッドレスモードでバッチ処理を実行",
                    goal: "複数のファイルに対して一括でコメントを追加する",
                    prerequisites: ["ターミナルでclaude -pが実行可能"],
                    steps: [
                        {
                            step: 1,
                            action: "対象ファイルをリストアップ",
                            prompt: "scripts/フォルダ内の.pyファイルを全てリストアップして",
                            expected: "対象ファイルの一覧が表示される"
                        },
                        {
                            step: 2,
                            action: "1ファイルで動作確認",
                            prompt: "claude -p \"Add a docstring to the main function in scripts/sample.py\"",
                            expected: "docstringが追加される"
                        },
                        {
                            step: 3,
                            action: "バッチ処理スクリプトを作成",
                            prompt: "以下のシェルスクリプトを作成して：全ての.pyファイルにdocstringを追加するバッチ処理",
                            expected: "バッチ処理スクリプトが作成される"
                        }
                    ],
                    checkpoints: [
                        "ヘッドレスモードの基本構文を理解した",
                        "--allowedToolsで権限を制限できる",
                        "ループで複数ファイルを処理できる"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    patterns: [
                        { name: "並列実行", description: "xargsやGNU parallelで並列処理", example: "find . -name '*.py' | xargs -P 4 -I {} claude -p '...'" },
                        { name: "エラーハンドリング", description: "失敗したファイルをログに記録して後で再処理", example: "|| echo $file >> failed.txt" }
                    ],
                    realWorldExamples: [
                        { scenario: "レガシーコードのモダナイズ", solution: "段階的にファイルを変換、テストで検証", tips: "まず10ファイルでテスト、問題なければ全体に適用" }
                    ],
                    pitfalls: ["一度に大量のファイルを処理するとAPI制限に達する可能性", "必ず少数でテストしてから全体実行"]
                },
                nextSteps: {
                    recommended: ["03_08", "03_07"],
                    optional: ["02_08"],
                    reason: "CI/CD統合でさらに自動化を進めるために"
                }
            }
        },
        {
            id: "03_07",
            number: "03_07",
            title: "Subagents活用パターン",
            title_en: "Advanced Subagent Patterns",
            description: "調査委譲、専門エージェント設計。コンテキストを汚さずに複雑なタスクを分割。",
            icon: "users",
            tags: ["Subagents", "委譲", "専門化", "上級"],
            content: {
                summary: "Subagentsは、特定のタスクを専門のエージェントに委譲する仕組みです。メインセッションのコンテキストを汚さずに、大規模な探索や専門的なレビューを実行できます。セキュリティレビュー、アーキテクチャ分析、コード品質チェックなど、専門性の高いタスクに最適です。",
                keyPoints: [
                    "サブエージェントは独立したコンテキストで動作",
                    "結果のみがメインセッションに返される（コンテキスト節約）",
                    "専門性を持たせることで精度向上",
                    "並列実行で時間短縮"
                ],
                agentDesign: {
                    title: "効果的なサブエージェント設計",
                    principles: [
                        "単一責任: 1つのサブエージェントに1つの専門分野",
                        "最小権限: 必要なツールのみを許可",
                        "明確な出力: 期待する出力形式を定義",
                        "適切なモデル: 軽量タスクにはhaiku、複雑なタスクにはopus"
                    ]
                },
                templates: [
                    {
                        name: "security-reviewer",
                        description: "セキュリティ脆弱性を検出",
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
- 機密情報のハードコード`
                    },
                    {
                        name: "architecture-analyzer",
                        description: "アーキテクチャの問題を分析",
                        config: `---
name: architecture-analyzer
description: アーキテクチャの問題点を分析
tools: [Read, Grep, Glob]
model: sonnet
---
以下の観点で分析:
- 循環依存
- レイヤー違反
- 責務の分離`
                    },
                    {
                        name: "test-generator",
                        description: "テストケースを自動生成",
                        config: `---
name: test-generator
description: 関数からテストケースを生成
tools: [Read, Write, Bash]
model: sonnet
---
以下のパターンでテストを生成:
- 正常系
- 境界値
- 異常系`
                    }
                ],
                handson: {
                    title: "専門サブエージェントを設計・活用する",
                    goal: "セキュリティレビュー用のサブエージェントを作成し、実際にレビューを実行",
                    prerequisites: [".claude/agents/フォルダが作成可能"],
                    steps: [
                        {
                            step: 1,
                            action: "サブエージェントを定義",
                            prompt: ".claude/agents/security-reviewer.md を作成して。内容はセキュリティ脆弱性を検出する専門エージェント。",
                            expected: "サブエージェント定義ファイルが作成される"
                        },
                        {
                            step: 2,
                            action: "サブエージェントを呼び出し",
                            prompt: "サブエージェント security-reviewer を使って、src/フォルダのコードをセキュリティレビューして",
                            expected: "サブエージェントが起動し、レビュー結果が返される"
                        },
                        {
                            step: 3,
                            action: "結果を確認",
                            prompt: "レビュー結果の重要な指摘事項をまとめて",
                            expected: "メインセッションのコンテキストを使わずにレビュー結果が得られた"
                        }
                    ],
                    checkpoints: [
                        "サブエージェントがメインコンテキストを消費していない",
                        "専門的なレビューが実行された",
                        "結果がサマリとして返された"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    patterns: [
                        { name: "Planner-Executor分離", description: "計画を立てるエージェントと実行するエージェントを分離", example: "大規模リファクタリングの計画と実行" },
                        { name: "レビューチェーン", description: "複数の専門エージェントが順番にレビュー", example: "セキュリティ→パフォーマンス→可読性の順でレビュー" }
                    ],
                    realWorldExamples: [
                        { scenario: "PRレビュー自動化", solution: "複数のサブエージェントで多角的にレビュー", tips: "重要度でエージェントを選択" }
                    ],
                    pitfalls: ["サブエージェントが多すぎるとオーバーヘッドになる", "適切な粒度でタスクを分割"]
                },
                nextSteps: {
                    recommended: ["02_03", "03_05"],
                    optional: ["03_08"],
                    reason: "サブエージェントの基本を深く理解するために"
                }
            }
        },
        {
            id: "03_08",
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
                keyPoints: [
                    "claude -p でCI/CDパイプラインから実行",
                    "GitHub Actionsワークフローに組み込み",
                    "PRごとに自動レビュー・テスト生成",
                    "環境変数でAPIキーを安全に管理"
                ],
                githubActionsExample: {
                    title: "GitHub Actions設定例",
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
                    { name: "自動コードレビュー", description: "PRごとにセキュリティ・品質チェック", trigger: "pull_request" },
                    { name: "テスト自動生成", description: "新しいコードに対してテストを自動生成", trigger: "push" },
                    { name: "ドキュメント更新", description: "APIの変更に合わせてドキュメントを自動更新", trigger: "push to main" },
                    { name: "依存関係監査", description: "依存関係の脆弱性をチェック", trigger: "schedule (weekly)" }
                ],
                handson: {
                    title: "GitHub Actionsでの自動レビューを設定",
                    goal: "PRに対して自動でコードレビューを実行するワークフローを作成",
                    prerequisites: ["GitHubリポジトリがある", "ANTHROPIC_API_KEYをSecretsに設定済み"],
                    steps: [
                        {
                            step: 1,
                            action: "ワークフローファイルを作成",
                            prompt: ".github/workflows/claude-review.yml を作成して。PRに対してClaude Codeでレビューを実行する内容で",
                            expected: "GitHub Actionsワークフローファイルが作成される"
                        },
                        {
                            step: 2,
                            action: "ローカルでテスト",
                            prompt: "ワークフローの核となるclaude -pコマンドをローカルでテスト実行して",
                            expected: "コマンドが正しく動作することを確認"
                        },
                        {
                            step: 3,
                            action: "PRを作成してテスト",
                            prompt: "テスト用のPRを作成して、ワークフローが実行されることを確認する手順を説明して",
                            expected: "テスト手順が説明される"
                        }
                    ],
                    checkpoints: [
                        "ワークフローファイルの構造を理解した",
                        "Secretsでの環境変数管理を理解した",
                        "claude -pの出力をGitHubコメントに投稿する方法を理解した"
                    ]
                },
                advanced: {
                    title: "発展・応用",
                    patterns: [
                        { name: "条件付きレビュー", description: "変更ファイルに応じてレビュー内容を変更", example: "セキュリティ関連ファイルのみ詳細レビュー" },
                        { name: "ステージング環境テスト", description: "デプロイ後に自動でE2Eテスト", example: "claude -pでテストシナリオを生成・実行" }
                    ],
                    realWorldExamples: [
                        { scenario: "週次依存関係監査", solution: "スケジュール実行で依存関係の脆弱性をチェック", tips: "結果をSlackに通知" }
                    ],
                    pitfalls: ["APIキーの漏洩に注意（必ずSecretsを使用）", "実行時間とAPI使用量のモニタリング"]
                },
                nextSteps: {
                    recommended: ["03_06", "02_05"],
                    optional: ["02_02"],
                    reason: "自動化をさらに発展させるために"
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
                { id: "00_01", title: "Claude Codeとは何か", reason: "エージェントの基本動作を理解" },
                { id: "00_02", title: "エージェントという概念", reason: "自律的な分析の仕組みを理解" },
                { id: "00_03", title: "コンテキストウィンドウ", reason: "大きなCSVを扱う際の注意点" }
            ],
            details: {
                goal: "売上CSVデータを分析し、月別・地域別の売上レポートをMarkdownで自動生成する",
                estimatedTime: "15-20分",
                difficulty: "初級",
                // 準備セクション
                preparation: {
                    description: "ハンズオンを始める前に、以下のフォルダ構造とファイルを作成してください。",
                    folderStructure: `handson-1-sales/
├── data/
│   └── sales_2025.csv
└── reports/
    └── (ここにレポートが生成される)`,
                    files: [
                        {
                            path: "data/sales_2025.csv",
                            description: "売上データCSV（以下の内容をコピーして作成）",
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
                    ]
                },
                // 実行ステップ
                steps: [
                    {
                        step: 1,
                        title: "プロジェクト初期化",
                        description: "Claude Codeにこのプロジェクトを認識させます",
                        prompt: "/init",
                        expected: "CLAUDE.mdファイルが生成され、プロジェクトの概要が記載される",
                        tips: "CLAUDE.mdはプロジェクトの「記憶」として機能します"
                    },
                    {
                        step: 2,
                        title: "データ構造の確認",
                        description: "CSVファイルの内容と構造を確認します",
                        prompt: "data/sales_2025.csv の先頭10行を表示して、各カラムの意味を説明して",
                        expected: "Claudeがファイルを読み込み、date, order_id, product, category, region, amount, quantityの各カラムを説明",
                        tips: "Claudeは自律的にファイルを読み込む（Read Tool）"
                    },
                    {
                        step: 3,
                        title: "月別売上集計",
                        description: "月ごとの売上合計を計算させます",
                        prompt: "data/sales_2025.csv を月別に集計して、各月の売上合計を表形式で表示して",
                        expected: "1月: 189,300円、2月: 243,200円、3月: 230,300円 のような集計結果が表形式で表示される",
                        tips: "Claudeは必要に応じてPythonスクリプトを作成・実行する"
                    },
                    {
                        step: 4,
                        title: "地域別分析",
                        description: "地域ごとの売上を分析します",
                        prompt: "地域別の売上も集計して、どの地域が最も売上が高いか分析して",
                        expected: "東京、大阪、名古屋、福岡の売上比較と、東京が最も高いという分析結果",
                        tips: "前の会話の文脈を維持して追加分析を行う"
                    },
                    {
                        step: 5,
                        title: "レポート生成",
                        description: "分析結果をMarkdownレポートとして出力します",
                        prompt: "ここまでの分析結果を reports/sales_report.md としてMarkdownレポートにまとめて。冒頭に3行の要約を入れて",
                        expected: "reports/sales_report.md が生成され、要約・月別集計・地域別分析・考察が記載される",
                        tips: "ファイル出力にはWrite Toolが使用される"
                    }
                ],
                // 成果物
                outputs: [
                    { file: "CLAUDE.md", description: "プロジェクト設定ファイル" },
                    { file: "reports/sales_report.md", description: "生成された売上レポート" }
                ],
                // 完了チェックリスト
                checkpoints: [
                    "CSVデータが正しく読み込まれた",
                    "月別の売上合計が表示された",
                    "地域別の売上比較ができた",
                    "Markdownレポートが生成された"
                ],
                // 学びのポイント
                learningPoints: [
                    "Claude Codeは「エージェント」としてファイルを自律的に読み込む",
                    "複数のステップを会話形式で進められる",
                    "分析からレポート生成まで一連の流れを自動化できる"
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
                { id: "00_01", title: "Claude Codeとは何か", reason: "ファイル操作ツールの理解" },
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "計画を立ててから実行" }
            ],
            details: {
                goal: "命名規則に従ってファイルを一括リネーム・整理する",
                estimatedTime: "10-15分",
                difficulty: "初級",
                preparation: {
                    description: "以下のフォルダ構造と散らばったファイルを作成してください。",
                    folderStructure: `handson-2-organize/
├── 議事録0115.txt
├── report_q1.docx
├── 企画書（修正版）.pdf
├── meeting_20250120.txt
├── sales_data.xlsx
└── organized/
    └── (ここに整理される)`,
                    files: [
                        {
                            path: "議事録0115.txt",
                            description: "日本語ファイル名の議事録",
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
                            content: "(Word文書として作成、中身は空でも可)"
                        },
                        {
                            path: "企画書（修正版）.pdf",
                            description: "日本語名のPDF（空でOK）",
                            content: "(PDFとして作成、中身は空でも可)"
                        },
                        {
                            path: "meeting_20250120.txt",
                            description: "英語ファイル名の議事録",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "現状把握",
                        description: "フォルダ内のファイル一覧を確認します",
                        prompt: "このフォルダ内のすべてのファイルを一覧にして、ファイル名の命名パターンを分析して",
                        expected: "ファイル一覧と「日本語名」「英語名」「日付形式の違い」などのパターンが報告される",
                        tips: "Glob Toolでファイル検索が行われる"
                    },
                    {
                        step: 2,
                        title: "リネーム計画の作成",
                        description: "命名規則に基づいたリネーム計画を立てます",
                        prompt: "ファイル名を「YYYY-MM-DD_カテゴリ_タイトル.拡張子」の形式に統一するリネーム計画を立てて。まだ実行しないで",
                        expected: "各ファイルの「現在の名前 → 新しい名前」の対応表が提示される",
                        tips: "「まだ実行しないで」で計画のみを確認できる"
                    },
                    {
                        step: 3,
                        title: "計画の確認と実行",
                        description: "計画を確認してからリネームを実行します",
                        prompt: "計画に問題なければ、リネームを実行して",
                        expected: "ファイルが新しい名前にリネームされる",
                        tips: "Bash Toolでmvコマンドが実行される"
                    },
                    {
                        step: 4,
                        title: "整理の確認",
                        description: "リネーム結果を確認します",
                        prompt: "リネーム結果を一覧表示して、正しくリネームされたか確認して",
                        expected: "統一された命名規則でファイルが一覧表示される",
                        tips: "結果を確認することで品質を担保"
                    }
                ],
                outputs: [
                    { file: "2025-01-15_議事録_プロジェクトA.txt", description: "リネームされた議事録" },
                    { file: "2025-01-20_議事録_WeeklyMeeting.txt", description: "リネームされた議事録" }
                ],
                checkpoints: [
                    "ファイル一覧が正しく取得できた",
                    "リネーム計画が提示された",
                    "命名規則に従ってリネームされた",
                    "すべてのファイルが正しく処理された"
                ],
                learningPoints: [
                    "「計画→確認→実行」のフローで安全に操作できる",
                    "Glob/Bashツールでファイル操作を自動化",
                    "「まだ実行しないで」で事前確認が可能"
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
                { id: "00_01", title: "Claude Codeとは何か", reason: "ファイル読み込みの基本" },
                { id: "01_01", title: "CLAUDE.md - プロジェクトの記憶", reason: "ドキュメントテンプレートの設定" }
            ],
            details: {
                goal: "YAML/JSON仕様ファイルからMarkdownドキュメントを自動生成する",
                estimatedTime: "15-20分",
                difficulty: "中級",
                preparation: {
                    description: "以下のAPI仕様ファイルを作成してください。",
                    folderStructure: `handson-3-docs/
├── api_spec.yaml
├── config_sample.json
└── docs/
    └── (ここにドキュメントが生成される)`,
                    files: [
                        {
                            path: "api_spec.yaml",
                            description: "OpenAPI形式のAPI仕様",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "API仕様の理解",
                        description: "YAML仕様を読み込んで概要を把握します",
                        prompt: "@api_spec.yaml を読んで、このAPIの概要を説明して。エンドポイント数、主な機能を教えて",
                        expected: "4つのエンドポイント（GET/POST /tasks, GET/DELETE /tasks/{id}）とタスク管理機能の説明",
                        tips: "@記法でファイルを直接参照できる"
                    },
                    {
                        step: 2,
                        title: "APIドキュメント生成",
                        description: "仕様からMarkdownドキュメントを生成します",
                        prompt: "このAPI仕様から docs/api.md としてMarkdownドキュメントを生成して。各エンドポイントの説明、パラメータ、リクエスト/レスポンス例を含めて",
                        expected: "整形されたAPIドキュメントが docs/api.md に生成される",
                        tips: "Claude Codeはファイル構造を理解してドキュメント化"
                    },
                    {
                        step: 3,
                        title: "設定ドキュメント生成",
                        description: "JSON設定ファイルのドキュメントを生成します",
                        prompt: "@config_sample.json の各設定項目の説明ドキュメントを docs/config.md として生成して。各項目の意味、デフォルト値、許容値を記載して",
                        expected: "設定項目の説明ドキュメントが生成される",
                        tips: "JSONの構造を解析してドキュメント化"
                    },
                    {
                        step: 4,
                        title: "目次ページ作成",
                        description: "ドキュメントの目次ページを作成します",
                        prompt: "docs/README.md として、api.md と config.md へのリンクを含む目次ページを作成して",
                        expected: "リンク付きの目次ページが生成される",
                        tips: "関連ファイルを束ねる目次を作成"
                    }
                ],
                outputs: [
                    { file: "docs/api.md", description: "APIドキュメント" },
                    { file: "docs/config.md", description: "設定ドキュメント" },
                    { file: "docs/README.md", description: "目次ページ" }
                ],
                checkpoints: [
                    "YAML仕様が正しく解析された",
                    "APIドキュメントにすべてのエンドポイントが記載",
                    "設定ドキュメントにすべての項目が記載",
                    "目次から各ドキュメントにアクセスできる"
                ],
                learningPoints: [
                    "@記法でファイルを直接参照できる",
                    "構造化データからドキュメントを自動生成",
                    "複数ファイルを連携させたドキュメント作成"
                ]
            }
        },
        {
            id: 4,
            number: 4,
            title: "議事録の要約・タスク抽出",
            description: "議事録テキストを分析し、要約と次のアクションを自動抽出。",
            folder: "4_meeting_notes_analytics",
            badge: "テキスト分析",
            skills: ["テキスト解析", "要約", "タスク抽出"],
            relatedTutorials: [
                { id: "00_02", title: "エージェントという概念", reason: "自律的な分析の理解" },
                { id: "03_03", title: "非技術者向けの使い方", reason: "自然言語での依頼方法" }
            ],
            details: {
                goal: "議事録テキストから構造化された要約とタスクリストを抽出する",
                estimatedTime: "10-15分",
                difficulty: "初級",
                preparation: {
                    description: "以下の議事録テキストを作成してください。",
                    folderStructure: `handson-4-meeting/
├── meeting_notes.txt
└── summary/
    └── (ここに要約が生成される)`,
                    files: [
                        {
                            path: "meeting_notes.txt",
                            description: "サンプル議事録",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "議事録の読み込み",
                        description: "議事録の内容を確認します",
                        prompt: "@meeting_notes.txt を読んで、この会議の概要を3行で説明して",
                        expected: "プロジェクトX定例会議、リリース延期決定、各メンバーのアクション設定 などの要約",
                        tips: "まず全体像を把握してから詳細へ"
                    },
                    {
                        step: 2,
                        title: "構造化された要約作成",
                        description: "議事録を構造化して要約します",
                        prompt: "この議事録を以下の形式で要約して：\\n- 基本情報（日時・参加者）\\n- 主な決定事項\\n- 重要な変更点\\n- リスク・課題",
                        expected: "構造化された要約が表示される（リリース延期、API問題、予算追加などがまとまる）",
                        tips: "フォーマットを指定すると構造化される"
                    },
                    {
                        step: 3,
                        title: "タスクリスト抽出",
                        description: "具体的なタスクを抽出します",
                        prompt: "議事録から「誰が」「何を」「いつまでに」行うかを表形式でタスクリストとして抽出して",
                        expected: "| 担当者 | タスク | 期限 | の表形式でタスク一覧",
                        tips: "表形式を指定すると見やすく整理される"
                    },
                    {
                        step: 4,
                        title: "ファイル出力",
                        description: "要約とタスクをファイルに保存します",
                        prompt: "ここまでの要約とタスクリストを summary/meeting_summary.md として保存して",
                        expected: "Markdownファイルが生成される",
                        tips: "結果をファイルに保存して共有可能に"
                    }
                ],
                outputs: [
                    { file: "summary/meeting_summary.md", description: "議事録要約とタスクリスト" }
                ],
                checkpoints: [
                    "議事録が正しく読み込まれた",
                    "構造化された要約が作成された",
                    "すべてのタスクが抽出された（4件）",
                    "期限が正しく記載されている"
                ],
                learningPoints: [
                    "自然言語のテキストから情報を抽出",
                    "フォーマット指定で構造化出力",
                    "非定型データから定型フォーマットへの変換"
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
            folder: "5_rest_api_stub_development",
            badge: "バックエンド",
            skills: ["Flask", "OpenAPI", "テスト"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", reason: "テスト駆動開発の考え方" },
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "計画を立てて実装" },
                { id: "02_01", title: "Skills", reason: "再利用可能なパターン" }
            ],
            details: {
                goal: "OpenAPI仕様からFlaskスタブサーバーを生成し、テストを通す",
                estimatedTime: "25-30分",
                difficulty: "中級",
                preparation: {
                    description: "Python環境とFlaskをセットアップしてください。",
                    folderStructure: `handson-5-api/
├── api_spec.yaml
├── app/
│   └── (ここにFlaskアプリが生成される)
├── tests/
│   └── (ここにテストが生成される)
└── requirements.txt`,
                    files: [
                        {
                            path: "api_spec.yaml",
                            description: "OpenAPI仕様（ハンズオン3と同じ）",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "API仕様の確認",
                        description: "実装すべきエンドポイントを確認します",
                        prompt: "@api_spec.yaml を読んで、実装すべきエンドポイントとそれぞれのリクエスト/レスポンスをリストアップして",
                        expected: "4つのエンドポイント（GET/POST /tasks, GET/DELETE /tasks/{id}）の詳細",
                        tips: "仕様を理解してから実装を開始"
                    },
                    {
                        step: 2,
                        title: "実装計画の作成",
                        description: "Planモードで実装計画を立てます",
                        prompt: "/plan\\nこのAPI仕様を実装するFlaskアプリを app/main.py に作成したい。インメモリでデータを保持し、テストも tests/test_api.py に作成して。計画を立てて",
                        expected: "ファイル構成、実装順序、テスト方針の計画が提示される",
                        tips: "/plan で計画モードに入り、実装前に確認"
                    },
                    {
                        step: 3,
                        title: "Flaskアプリの実装",
                        description: "計画に基づいてFlaskアプリを実装します",
                        prompt: "計画に従って app/main.py を実装して",
                        expected: "Flaskアプリが生成され、4つのエンドポイントが実装される",
                        tips: "Claude Codeがコードを生成・ファイル作成"
                    },
                    {
                        step: 4,
                        title: "テストの実装",
                        description: "APIテストを実装します",
                        prompt: "tests/test_api.py にAPIのテストを実装して。各エンドポイントの正常系と異常系をテスト",
                        expected: "pytestで実行可能なテストファイルが生成される",
                        tips: "検証可能なテストを用意"
                    },
                    {
                        step: 5,
                        title: "テスト実行と確認",
                        description: "テストを実行して動作を確認します",
                        prompt: "pytest tests/test_api.py -v を実行して、すべてのテストがパスすることを確認して",
                        expected: "テストが実行され、すべてパスする（または失敗があれば修正）",
                        tips: "テストで品質を担保"
                    }
                ],
                outputs: [
                    { file: "app/main.py", description: "Flaskアプリケーション" },
                    { file: "tests/test_api.py", description: "APIテスト" }
                ],
                checkpoints: [
                    "4つのエンドポイントが実装された",
                    "GET /tasks がタスク一覧を返す",
                    "POST /tasks でタスクを作成できる",
                    "すべてのテストがパスする"
                ],
                learningPoints: [
                    "/plan で事前に計画を立てる重要性",
                    "テスト駆動での開発フロー",
                    "仕様からコードへの自動変換"
                ]
            }
        },
        {
            id: 6,
            number: 6,
            title: "静的Webフロント開発",
            description: "HTML/CSS/JSで静的Webページを開発。レスポンシブデザインを実装。",
            folder: "6_web_frontend_mini",
            badge: "フロントエンド",
            badge_en: "Frontend",
            skills: ["HTML/CSS", "JavaScript", "レスポンシブ"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", reason: "ブラウザでの確認方法" },
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "段階的な開発フロー" }
            ],
            details: {
                goal: "機能仕様書に従ってレスポンシブな静的Webページを開発する",
                estimatedTime: "20-25分",
                difficulty: "中級",
                preparation: {
                    description: "以下の機能仕様書を作成してください。",
                    folderStructure: `handson-6-web/
├── FEATURE_SPEC.md
├── index.html (生成される)
├── css/
│   └── style.css (生成される)
└── js/
    └── app.js (生成される)`,
                    files: [
                        {
                            path: "FEATURE_SPEC.md",
                            description: "機能仕様書",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "仕様の確認",
                        description: "実装すべき機能を確認します",
                        prompt: "@FEATURE_SPEC.md を読んで、実装すべき機能をチェックリスト形式でまとめて",
                        expected: "タスク追加、一覧表示、削除、フィルターの4機能 + デザイン要件がリスト化",
                        tips: "仕様を明確にしてから実装開始"
                    },
                    {
                        step: 2,
                        title: "HTML作成",
                        description: "基本構造のHTMLを作成します",
                        prompt: "仕様に従って index.html を作成して。セマンティックなHTMLで、css/style.css と js/app.js を読み込むように",
                        expected: "入力フォーム、タスクリスト、フィルターボタンを含むHTMLが生成",
                        tips: "構造を先に作り、スタイルは後から"
                    },
                    {
                        step: 3,
                        title: "CSS作成",
                        description: "レスポンシブデザインのCSSを作成します",
                        prompt: "css/style.css を作成して。仕様書のカラーとタイポグラフィに従い、モバイル・タブレット・デスクトップ対応のレスポンシブデザインで",
                        expected: "メディアクエリを含むレスポンシブCSSが生成",
                        tips: "モバイルファーストで記述"
                    },
                    {
                        step: 4,
                        title: "JavaScript作成",
                        description: "インタラクティブな機能を実装します",
                        prompt: "js/app.js を作成して。タスクの追加・完了・削除・フィルター機能を実装。ローカルストレージでデータ永続化",
                        expected: "すべての機能が実装されたJavaScriptが生成",
                        tips: "ローカルストレージで永続化"
                    },
                    {
                        step: 5,
                        title: "動作確認",
                        description: "ブラウザで動作を確認します",
                        prompt: "index.html をブラウザで開いて動作確認する方法を教えて。また、仕様書の機能がすべて実装されているかチェックして",
                        expected: "確認手順と実装チェックリストが提示される",
                        tips: "Live Serverなどで確認可能"
                    }
                ],
                outputs: [
                    { file: "index.html", description: "HTMLファイル" },
                    { file: "css/style.css", description: "スタイルシート" },
                    { file: "js/app.js", description: "JavaScript" }
                ],
                checkpoints: [
                    "タスクを追加できる",
                    "タスクを完了にできる",
                    "タスクを削除できる",
                    "フィルターが動作する",
                    "レスポンシブデザインが適用されている",
                    "ローカルストレージでデータが保持される"
                ],
                learningPoints: [
                    "仕様書からの実装フロー",
                    "HTML/CSS/JSの段階的な開発",
                    "レスポンシブデザインの実装"
                ]
            }
        },
        {
            id: 7,
            number: 7,
            title: "CLIツール開発",
            title_en: "CLI Tool Development",
            description: "Pythonでタスク管理CLIツールを開発。argparseとファイルI/Oを学ぶ。",
            folder: "7_cli_tool_development",
            badge: "CLI開発",
            skills: ["Python", "argparse", "ファイルI/O"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", reason: "CLIテストの方法" },
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "段階的な開発" },
                { id: "02_02", title: "Hooks", reason: "CLIとの連携" }
            ],
            details: {
                goal: "argparseを使ったタスク管理CLIツールを開発する",
                estimatedTime: "20-25分",
                difficulty: "中級",
                preparation: {
                    description: "Python環境とCLI仕様書を用意してください。",
                    folderStructure: `handson-7-cli/
├── CLI_SPEC.md
├── taskman.py (生成される)
└── tasks.json (生成される)`,
                    files: [
                        {
                            path: "CLI_SPEC.md",
                            description: "CLI仕様書",
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
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "仕様確認",
                        description: "実装すべきコマンドを確認します",
                        prompt: "@CLI_SPEC.md を読んで、実装すべきコマンドとその引数・オプションをまとめて",
                        expected: "add, list, done, remove の4コマンドと各オプションが整理される",
                        tips: "仕様を明確にしてから実装"
                    },
                    {
                        step: 2,
                        title: "基本構造の実装",
                        description: "argparseでコマンドライン引数を処理する基本構造を作成",
                        prompt: "CLI_SPEC.md に従って taskman.py の基本構造を作成して。argparseでadd, list, done, removeのサブコマンドを定義",
                        expected: "argparseのサブパーサー構造が実装される",
                        tips: "まず骨組みを作ってから詳細を実装"
                    },
                    {
                        step: 3,
                        title: "データ永続化の実装",
                        description: "JSONファイルでタスクを保存・読み込みする機能を実装",
                        prompt: "tasks.json にタスクを保存・読み込みする関数を追加して。ファイルがない場合は新規作成",
                        expected: "load_tasks(), save_tasks() 関数が実装される",
                        tips: "try-except でファイル不在を処理"
                    },
                    {
                        step: 4,
                        title: "コマンド実装",
                        description: "各コマンドの処理を実装",
                        prompt: "add, list, done, remove の各コマンドの処理を実装して。エラー処理も含めて",
                        expected: "すべてのコマンドが実装される",
                        tips: "エラーメッセージも仕様通りに"
                    },
                    {
                        step: 5,
                        title: "動作テスト",
                        description: "CLIツールの動作を確認します",
                        prompt: "以下のコマンドを順に実行して動作確認して：\\n1. python taskman.py add \"テストタスク\"\\n2. python taskman.py list\\n3. python taskman.py done 1\\n4. python taskman.py list",
                        expected: "各コマンドが正しく動作し、tasks.jsonにデータが保存される",
                        tips: "実際に実行して検証"
                    }
                ],
                outputs: [
                    { file: "taskman.py", description: "CLIツール本体" },
                    { file: "tasks.json", description: "タスクデータ" }
                ],
                checkpoints: [
                    "add コマンドでタスクを追加できる",
                    "list コマンドでタスク一覧が表示される",
                    "done コマンドでタスクを完了にできる",
                    "remove コマンドでタスクを削除できる",
                    "tasks.json にデータが保存される",
                    "存在しないIDでエラーが表示される"
                ],
                learningPoints: [
                    "argparseによるCLI引数処理",
                    "JSONファイルでのデータ永続化",
                    "エラーハンドリングの実装"
                ]
            }
        },
        {
            id: 8,
            number: 8,
            title: "デバッグ・トラブルシューティング",
            title_en: "Debugging & Troubleshooting",
            description: "エラーログから原因を特定し、修正、再発防止策まで。実践的なデバッグスキルを習得。",
            folder: "8_debugging",
            badge: "デバッグ",
            badge_en: "Debugging",
            skills: ["ログ分析", "原因特定", "修正", "検証"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", reason: "検証方法の重要性" },
                { id: "01_06", title: "よくある失敗パターン", reason: "失敗から学ぶ" },
                { id: "02_03", title: "Subagents", reason: "調査の委譲" }
            ],
            details: {
                goal: "意図的に埋め込まれたバグを発見・修正し、テストで検証する",
                estimatedTime: "20-30分",
                difficulty: "中級",
                preparation: {
                    description: "バグを含むコードを用意してください。",
                    folderStructure: `handson-8-debugging/
├── src/
│   └── calculator.py (バグあり)
├── tests/
│   └── test_calculator.py
└── error.log`,
                    files: [
                        {
                            path: "src/calculator.py",
                            description: "バグを含む計算機モジュール",
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
                            content: `[2025-01-15 10:23:45] ERROR: ZeroDivisionError in divide()
[2025-01-15 10:24:12] ERROR: ZeroDivisionError in calculate_average() - empty list
[2025-01-15 10:25:33] ERROR: ValueError in parse_number() - invalid literal`
                        }
                    ]
                },
                steps: [
                    {
                        step: 1,
                        title: "エラーログ分析",
                        description: "エラーログから問題を特定します",
                        prompt: "@error.log を読んで、発生しているエラーを一覧にして。各エラーの原因と発生箇所を推測して",
                        expected: "3つのエラー（ZeroDivisionError x2、ValueError x1）が特定される",
                        tips: "ログから症状を把握"
                    },
                    {
                        step: 2,
                        title: "コード調査",
                        description: "エラーの根本原因を調査します",
                        prompt: "@src/calculator.py を読んで、ログで報告されたエラーの根本原因を特定して。各関数の問題点を説明して",
                        expected: "3つの関数の問題点が特定される",
                        tips: "コードと症状を照合"
                    },
                    {
                        step: 3,
                        title: "修正実装",
                        description: "特定した問題を修正します",
                        prompt: "calculator.py の3つのバグを修正して。適切な例外処理を追加して",
                        expected: "ゼロ除算チェック、空リストチェック、ValueError処理が追加される",
                        tips: "根本原因に対処"
                    },
                    {
                        step: 4,
                        title: "テスト作成・実行",
                        description: "修正を検証するテストを作成します",
                        prompt: "修正した関数のテストを tests/test_calculator.py に作成して。正常系とエラー系の両方をテスト。その後テストを実行して",
                        expected: "テストが作成され、すべてパスする",
                        tips: "エッジケースを網羅"
                    },
                    {
                        step: 5,
                        title: "再発防止策",
                        description: "今後の再発を防ぐ対策を検討します",
                        prompt: "今回のバグの再発を防ぐためのCLAUDE.mdルールを提案して",
                        expected: "型チェック、例外処理、テストカバレッジに関するルールが提案される",
                        tips: "ルール化で再発防止"
                    }
                ],
                outputs: [
                    { file: "src/calculator.py", description: "修正済みコード" },
                    { file: "tests/test_calculator.py", description: "テストコード" },
                    { file: "CLAUDE.md", description: "再発防止ルール" }
                ],
                checkpoints: [
                    "エラーログから問題を正確に特定できた",
                    "根本原因を特定できた",
                    "適切な修正が実装された",
                    "テストがすべてパスした",
                    "再発防止策が文書化された"
                ],
                learningPoints: [
                    "ログからの問題特定",
                    "根本原因分析（RCA）",
                    "防御的プログラミング",
                    "テスト駆動の修正"
                ]
            }
        },
        {
            id: 9,
            number: 9,
            title: "リファクタリング",
            title_en: "Refactoring",
            description: "既存コードの品質改善。可読性、保守性、パフォーマンスを向上させる。",
            folder: "9_refactoring",
            badge: "リファクタ",
            skills: ["設計パターン", "コード整理", "テスト保護"],
            relatedTutorials: [
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "計画的なリファクタ" },
                { id: "02_01", title: "Skills", reason: "リファクタパターンの定義" },
                { id: "03_05", title: "Writer/Reviewerパターン", reason: "品質確認" }
            ],
            details: {
                goal: "スパゲッティコードをクリーンなコードにリファクタリングする",
                estimatedTime: "25-35分",
                difficulty: "中級",
                preparation: {
                    description: "リファクタリング対象のコードを用意してください。",
                    folderStructure: `handson-9-refactoring/
├── src/
│   └── order_processor.py (リファクタ対象)
└── tests/
    └── test_order_processor.py`,
                    files: [
                        {
                            path: "src/order_processor.py",
                            description: "リファクタリング対象のコード",
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
                        description: "リファクタリングすべき問題点を特定します",
                        prompt: "@src/order_processor.py を分析して、リファクタリングすべき問題点をリストアップして。各問題の影響度も評価して",
                        expected: "単一責任原則違反、マジックナンバー、重複コード等の問題が特定される",
                        tips: "まず全体像を把握"
                    },
                    {
                        step: 2,
                        title: "テスト作成（セーフティネット）",
                        description: "リファクタリング前にテストを作成します",
                        prompt: "リファクタリング前に、現在の動作を保証するテストを tests/test_order_processor.py に作成して",
                        expected: "現在の動作を検証するテストが作成される",
                        tips: "リファクタ前にテストで保護"
                    },
                    {
                        step: 3,
                        title: "リファクタリング計画",
                        description: "段階的なリファクタリング計画を立てます",
                        prompt: "/plan 特定した問題を解決するリファクタリング計画を立てて。1. 定数抽出 2. 関数分割 3. クラス化 の順で",
                        expected: "段階的なリファクタリング計画が提示される",
                        tips: "小さなステップで進める"
                    },
                    {
                        step: 4,
                        title: "リファクタリング実行",
                        description: "計画に従ってリファクタリングします",
                        prompt: "計画に従ってリファクタリングを実行して。各ステップ後にテストを実行して動作確認",
                        expected: "クリーンなコードに変換される",
                        tips: "テストで動作を確認しながら"
                    },
                    {
                        step: 5,
                        title: "最終確認",
                        description: "リファクタリング結果を確認します",
                        prompt: "リファクタリング後のコードをレビューして。改善点と残課題をまとめて",
                        expected: "改善点が確認され、コード品質が向上している",
                        tips: "Before/Afterを比較"
                    }
                ],
                outputs: [
                    { file: "src/order_processor.py", description: "リファクタリング済みコード" },
                    { file: "tests/test_order_processor.py", description: "テストコード" }
                ],
                checkpoints: [
                    "問題点が正確に特定された",
                    "テストが作成された（セーフティネット）",
                    "マジックナンバーが定数化された",
                    "関数が単一責任に分割された",
                    "テストがすべてパスした"
                ],
                learningPoints: [
                    "コードの問題点の特定方法",
                    "テストによる保護の重要性",
                    "段階的なリファクタリング",
                    "クリーンコードの原則"
                ]
            }
        },
        {
            id: 10,
            number: 10,
            title: "テスト設計・TDD",
            title_en: "Test Design & TDD",
            description: "テストファーストで開発。ユニットテスト、統合テストの設計と実装。",
            folder: "10_tdd",
            badge: "TDD",
            skills: ["テスト設計", "Red-Green-Refactor", "モック"],
            relatedTutorials: [
                { id: "01_02", title: "検証の仕組みを与える", reason: "検証の基本" },
                { id: "02_01", title: "Skills", reason: "TDDワークフローの定義" },
                { id: "03_05", title: "Writer/Reviewerパターン", reason: "テストと実装の分離" }
            ],
            details: {
                goal: "TDDのRed-Green-Refactorサイクルを実践する",
                estimatedTime: "25-30分",
                difficulty: "中級",
                preparation: {
                    description: "TDD対象の仕様書を用意してください。",
                    folderStructure: `handson-10-tdd/
├── SPEC.md
├── src/
│   └── user_validator.py (TDDで作成)
└── tests/
    └── test_user_validator.py (先に作成)`,
                    files: [
                        {
                            path: "SPEC.md",
                            description: "実装仕様書",
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
                        description: "仕様書からテストケースを洗い出します",
                        prompt: "@SPEC.md を読んで、各関数のテストケースを洗い出して。正常系、境界値、異常系を含めて",
                        expected: "各関数につき5〜10のテストケースがリストアップされる",
                        tips: "テストケースを網羅的に"
                    },
                    {
                        step: 2,
                        title: "テスト作成（RED）",
                        description: "まずテストを作成します（実装前なので失敗する）",
                        prompt: "tests/test_user_validator.py を作成して、先ほど洗い出したテストケースを実装して。src/user_validator.pyはまだ作成しないで",
                        expected: "テストファイルが作成される（実行すると失敗する）",
                        tips: "RED: まず失敗するテスト"
                    },
                    {
                        step: 3,
                        title: "最小実装（GREEN）",
                        description: "テストをパスする最小限の実装を作成します",
                        prompt: "src/user_validator.py を作成して、テストがパスする最小限の実装を書いて。テストを実行して確認して",
                        expected: "すべてのテストがパスする",
                        tips: "GREEN: テストをパスさせる"
                    },
                    {
                        step: 4,
                        title: "リファクタリング（REFACTOR）",
                        description: "コードを整理します",
                        prompt: "テストがパスしたまま、コードをリファクタリングして。重複を排除し、可読性を向上させて",
                        expected: "コードが整理され、テストは引き続きパスする",
                        tips: "REFACTOR: 品質向上"
                    },
                    {
                        step: 5,
                        title: "追加テスト",
                        description: "エッジケースのテストを追加します",
                        prompt: "漏れているエッジケースがあれば追加テストを書いて、実装も修正して",
                        expected: "カバレッジが向上する",
                        tips: "カバレッジを意識"
                    }
                ],
                outputs: [
                    { file: "src/user_validator.py", description: "TDDで作成したコード" },
                    { file: "tests/test_user_validator.py", description: "テストコード" }
                ],
                checkpoints: [
                    "仕様からテストケースを導出できた",
                    "テストが先に作成された（RED）",
                    "最小限の実装でテストがパスした（GREEN）",
                    "リファクタリングでコードが改善された",
                    "すべてのテストがパスしている"
                ],
                learningPoints: [
                    "TDDのRed-Green-Refactorサイクル",
                    "テストケースの網羅的な設計",
                    "最小限の実装の考え方",
                    "テストを壊さないリファクタリング"
                ]
            }
        },
        {
            id: 11,
            number: 11,
            title: "コードレビュー実践",
            description: "セキュリティ、パフォーマンス、可読性の3観点で実践的なレビュー。",
            folder: "11_code_review",
            badge: "レビュー",
            badge_en: "Review",
            skills: ["セキュリティ", "パフォーマンス", "可読性"],
            relatedTutorials: [
                { id: "02_01", title: "Skills", reason: "レビュースキルの定義" },
                { id: "02_03", title: "Subagents", reason: "レビューの委譲" },
                { id: "03_05", title: "Writer/Reviewerパターン", reason: "レビューの分離" }
            ],
            details: {
                goal: "問題のあるコードをレビューし、改善提案と修正を行う",
                estimatedTime: "20-25分",
                difficulty: "中級",
                preparation: {
                    description: "レビュー対象のコードを用意してください。",
                    folderStructure: `handson-11-review/
├── src/
│   └── user_api.py (レビュー対象)
└── REVIEW_REPORT.md (生成される)`,
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
                        description: "セキュリティ脆弱性を検出します",
                        prompt: "@src/user_api.py をセキュリティの観点でレビューして。SQLインジェクション、認証情報のハードコード、その他の脆弱性を特定して",
                        expected: "SQLインジェクション3箇所、ハードコードされた認証情報が検出される",
                        tips: "OWASP Top 10を意識"
                    },
                    {
                        step: 2,
                        title: "パフォーマンスレビュー",
                        description: "パフォーマンス問題を検出します",
                        prompt: "パフォーマンスの観点でレビューして。N+1クエリ、不要な処理、最適化の余地を特定して",
                        expected: "N+1クエリ問題が検出される",
                        tips: "DBアクセスパターンを確認"
                    },
                    {
                        step: 3,
                        title: "可読性レビュー",
                        description: "可読性の問題を検出します",
                        prompt: "可読性の観点でレビューして。ネストの深さ、関数の責務、命名の問題を特定して",
                        expected: "深いネスト、責務の混在が検出される",
                        tips: "クリーンコードの原則"
                    },
                    {
                        step: 4,
                        title: "レビューレポート作成",
                        description: "レビュー結果をレポートにまとめます",
                        prompt: "レビュー結果を REVIEW_REPORT.md にまとめて。各問題に 🔴Critical / 🟡Suggestion / 💭Question のラベルを付けて",
                        expected: "構造化されたレビューレポートが生成される",
                        tips: "重要度でラベル付け"
                    },
                    {
                        step: 5,
                        title: "修正実装",
                        description: "Criticalな問題を修正します",
                        prompt: "🔴Criticalとラベル付けした問題を修正して。パラメータ化クエリ、認証情報の外部化、ネストの解消を実装",
                        expected: "セキュリティ問題が修正される",
                        tips: "Criticalを優先"
                    }
                ],
                outputs: [
                    { file: "REVIEW_REPORT.md", description: "レビューレポート" },
                    { file: "src/user_api.py", description: "修正済みコード" }
                ],
                checkpoints: [
                    "SQLインジェクション脆弱性を検出できた",
                    "N+1クエリ問題を検出できた",
                    "可読性の問題を検出できた",
                    "レビューレポートが構造化されている",
                    "Criticalな問題が修正された"
                ],
                learningPoints: [
                    "セキュリティ観点のレビュー",
                    "パフォーマンス観点のレビュー",
                    "可読性観点のレビュー",
                    "レビューレポートの書き方"
                ]
            }
        },
        {
            id: 12,
            number: 12,
            title: "セキュリティ監査",
            title_en: "Security Audit",
            description: "脆弱性の検出、認証・認可の確認、機密情報の取り扱いチェック。",
            folder: "12_security_audit",
            badge: "セキュリティ",
            badge_en: "Security",
            skills: ["脆弱性検出", "認証・認可", "機密情報管理"],
            relatedTutorials: [
                { id: "02_02", title: "Hooks", reason: "セキュリティチェックの自動化" },
                { id: "02_03", title: "Subagents", reason: "セキュリティレビューの委譲" },
                { id: "03_07", title: "Subagents活用パターン", reason: "専門エージェントの活用" }
            ],
            details: {
                goal: "Webアプリケーションのセキュリティ監査を実施する",
                estimatedTime: "30-40分",
                difficulty: "上級",
                preparation: {
                    description: "セキュリティ監査対象のコードを用意してください。",
                    folderStructure: `handson-12-security/
├── src/
│   ├── auth.py
│   ├── api.py
│   └── config.py
├── .env.example
└── SECURITY_REPORT.md (生成される)`,
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
                        description: "ハードコードされた機密情報を検出します",
                        prompt: "プロジェクト全体をスキャンして、ハードコードされた機密情報（パスワード、APIキー、トークン）を検出して",
                        expected: "config.py内の機密情報が検出される",
                        tips: "grep で secrets, password, key を検索"
                    },
                    {
                        step: 2,
                        title: "認証・認可監査",
                        description: "認証・認可の実装を監査します",
                        prompt: "@src/auth.py を監査して。パスワードハッシュ、トークン生成、検証の脆弱性を特定して",
                        expected: "MD5使用、ソルトなし、予測可能なトークンが検出される",
                        tips: "OWASP認証ガイドラインを参照"
                    },
                    {
                        step: 3,
                        title: "設定セキュリティ",
                        description: "設定ファイルのセキュリティを確認します",
                        prompt: "@src/config.py の設定を監査して。本番環境で問題となる設定を特定して",
                        expected: "DEBUG=True、ALLOWED_HOSTS=*が検出される",
                        tips: "本番/開発の設定分離を確認"
                    },
                    {
                        step: 4,
                        title: "セキュリティレポート作成",
                        description: "監査結果をレポートにまとめます",
                        prompt: "監査結果を SECURITY_REPORT.md にまとめて。各脆弱性のリスクレベル（Critical/High/Medium/Low）と修正方法を記載して",
                        expected: "構造化されたセキュリティレポートが生成される",
                        tips: "CVSSスコアを参考に"
                    },
                    {
                        step: 5,
                        title: "修正実装",
                        description: "Critical/High脆弱性を修正します",
                        prompt: "Critical/High脆弱性を修正して。bcryptへの移行、環境変数の使用、安全なトークン生成を実装して",
                        expected: "主要な脆弱性が修正される",
                        tips: "段階的に修正"
                    }
                ],
                outputs: [
                    { file: "SECURITY_REPORT.md", description: "セキュリティ監査レポート" },
                    { file: "src/auth.py", description: "修正済み認証モジュール" },
                    { file: ".env.example", description: "環境変数テンプレート" }
                ],
                checkpoints: [
                    "ハードコードされた機密情報を検出できた",
                    "認証の脆弱性を検出できた",
                    "設定の問題を検出できた",
                    "リスクレベル付きレポートが作成された",
                    "Critical脆弱性が修正された"
                ],
                learningPoints: [
                    "機密情報のスキャン手法",
                    "認証・認可の監査ポイント",
                    "設定セキュリティの確認",
                    "セキュリティレポートの書き方"
                ]
            }
        },
        {
            id: 13,
            number: 13,
            title: "フルスタック開発ワークフロー",
            description: "API設計→実装→テスト→ドキュメント→デプロイ準備の一連の流れを体験。",
            folder: "13_fullstack_workflow",
            badge: "統合",
            skills: ["API設計", "実装", "テスト", "ドキュメント", "デプロイ"],
            relatedTutorials: [
                { id: "01_05", title: "探索→計画→実装→コミット", reason: "ワークフローの基本" },
                { id: "02_01", title: "Skills", reason: "ワークフローの自動化" },
                { id: "03_06", title: "Fan-outパターン",
            title_en: "Fan-out Pattern", reason: "バッチ処理" },
                { id: "03_08", title: "Headless CI/CD", reason: "自動化" }
            ],
            details: {
                goal: "タスク管理APIをゼロから設計・実装・テスト・ドキュメント化・デプロイ準備まで行う",
                estimatedTime: "60-90分",
                difficulty: "上級",
                preparation: {
                    description: "新しいプロジェクトフォルダを作成してください。",
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
                        description: "REST APIを設計します",
                        prompt: "/plan タスク管理REST APIを設計して。CRUD操作、フィルタリング、ページネーションを含めて。OpenAPI形式で設計案を作成して",
                        expected: "OpenAPI形式のAPI設計案が作成される",
                        tips: "RESTful設計原則に従う"
                    },
                    {
                        step: 2,
                        title: "モデル実装",
                        description: "データモデルを実装します",
                        prompt: "設計に基づいて api/models.py を作成して。Task モデルと In-memory ストレージを実装して",
                        expected: "Taskモデルとストレージが実装される",
                        tips: "シンプルなモデルから開始"
                    },
                    {
                        step: 3,
                        title: "API実装",
                        description: "REST APIを実装します",
                        prompt: "api/main.py にFlaskでREST APIを実装して。CRUD操作、エラーハンドリング、入力バリデーションを含めて",
                        expected: "完全なREST APIが実装される",
                        tips: "ステータスコードを適切に"
                    },
                    {
                        step: 4,
                        title: "テスト作成・実行",
                        description: "APIテストを作成・実行します",
                        prompt: "tests/test_api.py を作成して、全エンドポイントのテストを実装して。正常系、異常系、エッジケースを含めて。テストを実行して結果を確認して",
                        expected: "テストが作成され、すべてパスする",
                        tips: "カバレッジ80%以上を目指す"
                    },
                    {
                        step: 5,
                        title: "ドキュメント生成",
                        description: "APIドキュメントを生成します",
                        prompt: "docs/API.md を作成して、全エンドポイントのドキュメントを生成して。リクエスト/レスポンス例、エラーコードを含めて",
                        expected: "完全なAPIドキュメントが生成される",
                        tips: "実行可能な例を含める"
                    },
                    {
                        step: 6,
                        title: "Docker化",
                        description: "Docker設定を作成します",
                        prompt: "Dockerfile と docker-compose.yml を作成して。本番環境向けの設定で",
                        expected: "Docker設定が作成される",
                        tips: "マルチステージビルドを検討"
                    },
                    {
                        step: 7,
                        title: "CI/CD設定",
                        description: "GitHub Actions設定を作成します",
                        prompt: ".github/workflows/ci.yml を作成して。テスト実行、カバレッジレポート、Dockerイメージビルドを含めて",
                        expected: "CI/CDパイプラインが設定される",
                        tips: "キャッシュを活用"
                    }
                ],
                outputs: [
                    { file: "api/main.py", description: "REST API実装" },
                    { file: "api/models.py", description: "データモデル" },
                    { file: "tests/test_api.py", description: "テストスイート" },
                    { file: "docs/API.md", description: "APIドキュメント" },
                    { file: "Dockerfile", description: "Docker設定" },
                    { file: ".github/workflows/ci.yml", description: "CI/CD設定" }
                ],
                checkpoints: [
                    "API設計がRESTful原則に従っている",
                    "CRUD操作がすべて実装されている",
                    "テストカバレッジが80%以上",
                    "ドキュメントが完備されている",
                    "Dockerでビルドできる",
                    "CI/CDパイプラインが設定されている"
                ],
                learningPoints: [
                    "フルスタック開発の流れ",
                    "REST API設計のベストプラクティス",
                    "TDDによる品質担保",
                    "ドキュメント自動生成",
                    "Docker化とCI/CD"
                ]
            }
        }
    ]
};

const BEST_PRACTICES = [
    {
        number: 1,
        title: "検証方法を提供",
        description: "テスト、スクリーンショット、期待出力を示し、Claudeが自己検証できるようにする。これが最もレバレッジの高い一手。",
        example: {
            bad: "メール検証関数を実装して",
            good: "validateEmail関数を書いて。test@example.comは真、invalidは偽を返す。実装後テストを実行して"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#1-provide-ways-to-verify"
    },
    {
        number: 2,
        title: "探索→計画→実装の分離",
        description: "Planモードで計画を立ててから実装。いきなりコードを書かせない。",
        example: {
            bad: "この機能を実装して",
            good: "/plan でまず計画を確認してから実装"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#2-be-specific-explore-then-plan-then-code"
    },
    {
        number: 3,
        title: "具体的コンテキスト提供",
        description: "@参照、画像、URLを使って曖昧さを排除。具体的なゴールを明示する。",
        example: {
            bad: "あのファイルを修正して",
            good: "@src/utils.ts の validateEmail関数を修正して"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#3-give-claude-the-context-it-needs"
    },
    {
        number: 4,
        title: "環境設定（CLAUDE.md）",
        description: "プロジェクト固有のルール、禁止事項、コーディング規約をCLAUDE.mdに記載。",
        example: {
            bad: "（ルールなしで毎回説明）",
            good: "CLAUDE.mdに規約を記載し、/init で生成"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#4-set-up-your-environment"
    },
    {
        number: 5,
        title: "会話スキル",
        description: "先輩エンジニアに聞くような自然な質問をする。曖昧な指示は避ける。",
        example: {
            bad: "動かないから直して",
            good: "ログイン時に500エラーが出る。auth.tsの42行目が原因だと思う。確認して"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#5-use-your-conversation-skills"
    },
    {
        number: 6,
        title: "セッション管理",
        description: "Esc、/rewind、/clearで軌道修正。Context Rotを防ぐ。",
        example: {
            bad: "（エラーを繰り返し修正させる）",
            good: "2回失敗したら /clear して新しいアプローチで再開"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#6-manage-your-sessions"
    },
    {
        number: 7,
        title: "自動化・生産性向上",
        description: "ヘッドレスモード、並列セッション、Skills、Hooksで自動化を推進。",
        example: {
            bad: "（毎回手動で同じ作業）",
            good: "繰り返しの作業はSkill化、Hookで自動化"
        },
        officialLink: "https://docs.anthropic.com/ja/docs/claude-code/best-practices#7-automate-and-accelerate"
    }
];

// Boris Cherny氏のClaude Code TIPS（22個）
// 出典: Claude Code チーム由来、Boris本人がXで公開
const BORIS_TIPS = [
    { number: 1, category: "セッション運用",
        category_en: "Session Management", title: "ターミナルで5セッション並列実行", description: "タブに1〜5の番号を振り、システム通知で入力待ちを把握する。1つが処理中の間に別タブで次の指示。シングルスレッドで待つのはもったいない。" },
    { number: 2, category: "セッション運用",
        category_en: "Session Management", title: "Web/モバイルでさらに5〜10セッション追加", description: "claude.ai/code 上でもセッションを並列で走らせている。朝はスマホからセッションを数個立ち上げることも。ただし10〜20%は想定外で放棄される。" },
    { number: 3, category: "セッション運用",
        category_en: "Session Management", title: "セッションごとに独立したgit checkoutを使う", description: "ブランチやworktreeではなく、セッションごとに独自のcheckoutを用意する。これで複数セッションが同時に同じファイルを触っても衝突しない。" },
    { number: 4, category: "セッション運用",
        category_en: "Session Management", title: "&コマンドでローカル→Webへセッション引き継ぎ", description: "ローカルのセッションを&でWeb版に引き渡し、--teleportで戻すことも可能。デスクとモバイルの行き来に便利。" },
    { number: 5, category: "モデル・設定",
        category_en: "Model & Settings", title: "Opus 4.5 + thinkingを全てのコーディングに使う", description: "Sonnetより大きくて遅いが、ステアリングが少なく済みツール使用も上手い。結果的にSonnetより速く終わることが多い。「スマートなモデルへの先行投資が後の修正コストを削減する」。" },
    { number: 6, category: "モデル・設定",
        category_en: "Model & Settings", title: "CLAUDE.mdをチームでgit管理する", description: "各チームがリポジトリにCLAUDE.mdをチェックイン。Claudeがやらかしたミスをその都度追記して改善サイクルを回す。現在のサイズは約2.5kトークン。" },
    { number: 7, category: "モデル・設定",
        category_en: "Model & Settings", title: "PRレビュー時に@.claudeでCLAUDE.mdを更新", description: "コードレビュー中に同僚のPRに@.claudeタグを付けて、学びをCLAUDE.mdに反映させる。GitHub Actionと連携。" },
    { number: 8, category: "ワークフロー",
        category_en: "Workflow",
        category_en: "Workflow", title: "Plan Modeを最初に使う（Shift+Tab 2回）", description: "いきなりコードを書かせない。まずPlan Modeで計画を反復し、納得したらauto-accept editsモードに切り替えて一発実装。良い計画が一番大事。" },
    { number: 9, category: "ワークフロー",
        category_en: "Workflow",
        category_en: "Workflow", title: "スラッシュコマンドで繰り返し作業を自動化", description: ".claude/commands/にgitでチェックインして共有。/commit-push-prは1日に何十回も使う。インラインbashでgit status等のコンテキストを事前計算。" },
    { number: 10, category: "ワークフロー",
        category_en: "Workflow",
        category_en: "Workflow", title: "サブエージェントで定型ワークフローを自動化", description: "code-simplifier（コード簡素化）、verify-app（E2Eテスト）、build-validator（ビルド検証）など。「よくあるPRの大半のワークフローを自動化するもの」として活用。" },
    { number: 11, category: "ワークフロー",
        category_en: "Workflow",
        category_en: "Workflow", title: "PostToolUseフックでコードフォーマットを自動修正", description: "ClaudeのコードはLだいたい」整形されているが、最後の10%にムラがある。PostToolUseフックで`bun run format || true`を実行し、CI失敗を未然に防止。" },
    { number: 12, category: "ワークフロー",
        category_en: "Workflow",
        category_en: "Workflow", title: "/permissionsで権限を安全に管理する", description: "--dangerously-skip-permissionsはほぼ使わない。/permissionsで`bun run build:*`や`bun run test:*`など安全なコマンドだけ事前許可する。設定はチーム資産として共有。" },
    { number: 13, category: "外部連携",
        category_en: "External Integration", title: "MCPでSlack・BigQuery・Sentryなど外部ツール連携", description: ".mcp.jsonで設定を共有。Claude Codeが単なるコードエディタからワークフローハブに変わる。" },
    { number: 14, category: "外部連携",
        category_en: "External Integration", title: "Chrome拡張でブラウザテストを自動化", description: "claude.ai/codeへの変更は全て、Chrome拡張経由でブラウザを開いてUIをテストし、動作とUXが良くなるまで反復させる。" },
    { number: 15, category: "品質・検証",
        category_en: "Quality & Verification", title: "検証ループが最重要（品質2〜3倍）", description: "「Claudeに検証手段を与えること」が全TIPSの中で一番大事。bashコマンド実行、テストスイート、ブラウザテスト、シミュレータなど。フィードバックループがあると成果物の品質が2〜3倍になる。" },
    { number: 16, category: "品質・検証",
        category_en: "Quality & Verification", title: "長時間タスクは検証付きで放置する", description: "バックグラウンドエージェント、Stopフック、プラグインを組み合わせて、完了時に自動検証させる。長時間タスクに限り、サンドボックス内で--dangerously-skip-permissionsを使うこともある。" },
    { number: 17, category: "チーム運用",
        category_en: "Team Operations", title: "259 PR/30日、46/47日連続アクティブ", description: "Boris本人の実績。497コミット、4万行追加・3.8万行削除。Claude Codeを開発プロセスの中核に据えた結果の数字。" },
    { number: 18, category: "チーム運用",
        category_en: "Team Operations", title: "チーム全員がCLAUDE.mdに週次で貢献する", description: "個人のメモではなくチームの集合知にする。スタイル規約、デザインガイドライン、PRテンプレートもここに集約。" },
    { number: 19, category: "チーム運用",
        category_en: "Team Operations", title: "PRレビューで発見した学びを即座にドキュメント化", description: "「このパターンでClaude失敗した」という知見をPRの一部としてCLAUDE.mdに追記。知識が流れない仕組み。" },
    { number: 20, category: "応用", title: "Ralph Wiggumプラグインで自律長時間セッション", description: "入力待ちでブロックせずに自律的にタスクを続行するプラグイン。夜間バッチ的な使い方に向く。" },
    { number: 21, category: "応用", title: "10〜20%の放棄を前提に多めにセッションを立てる", description: "全セッションが成功するわけではない。想定外で放棄されるセッションを織り込んで、多めに走らせるのが現実的な運用。" },
    { number: 22, category: "応用", title: "「正しい唯一の方法はない」を前提にする", description: "Boris本人が繰り返し強調するポイント。Claude Codeは意図的に「好きなように使え、カスタマイズしろ、ハックしろ」という設計思想で作られている。自分のスタイルに合うものを実験して見つけるのが一番。" }
];

// Safie記事「Claudeプロンプト10のベストプラクティス」
// 出典: https://engineers.safie.link/entry/claude-prompt-ten-best-practice
const PROMPT_TIPS = [
    {
        number: 1,
        title: "契約書のようにプロンプトを書く",
        description: "フォーマット、スタイル、長さ、ターゲット読者を明確に指定する。曖昧さを残さない。",
        example: {
            bad: "React Hooksについての記事を書いて",
            good: "React Hooksについて、初心者向けに500〜800字で解説記事を書いて。見出しは3つ以内、コード例を含めて"
        },
        category: "明確性"
    },
    {
        number: 2,
        title: "「なぜ」やるのか背景を伝える",
        description: "タスクの用途を一言添えることで、出力の深さを適切に調整させる。",
        example: {
            bad: "この四半期レポートの要点をまとめて",
            good: "この四半期レポートを経営層向けの報告資料として要約して。重要な数値と提言を強調してください"
        },
        category: "コンテキスト",
        category_en: "Context",
        category_en: "Context"
    },
    {
        number: 3,
        title: "「例」こそが正義（Few-Shot）",
        description: "サンプルを提供すれば、Claudeはその構造を忠実に再現する。期待する出力形式を例で示す。",
        example: {
            bad: "商品説明を書いて",
            good: "以下のフォーマットで商品説明を書いて：\\n【商品名】\\n【特徴】箇条書き3点\\n【価格】\\n---\\n例：\\n【商品名】ワイヤレスイヤホン X1\\n【特徴】・ノイズキャンセリング・8時間再生・防水IPX4\\n【価格】9,800円"
        },
        category: "構造化"
    },
    {
        number: 4,
        title: "大きなプロジェクトは「小分け」に",
        description: "一気に完了させず、ステップごとに進めるよう強制する。複雑なタスクは分割。",
        example: {
            bad: "ECサイトの商品管理、カート、決済機能を実装して",
            good: "まず商品管理機能の設計案を提示して。承認後に実装を開始します"
        },
        category: "分割統治"
    },
    {
        number: 5,
        title: "Agentワークフローの宣言",
        description: "長い対話での文脈喪失を防ぐため、進捗まとめ、ToDoリスト、設計決定の記録を指示する。",
        example: {
            bad: "（文脈管理を明記しない）",
            good: "各ステップ完了時に進捗をまとめ、未解決の課題をリストアップしてください"
        },
        category: "状態管理"
    },
    {
        number: 6,
        title: "提案ではなく「行動」させる",
        description: "アドバイスだけでなく、具体的な実行を明確に要求する。「Do It」と伝える。",
        example: {
            bad: "このコード、どこか改善できる？",
            good: "このコードを直接リファクタリングして、改善後のコードを出力して"
        },
        category: "実行指示"
    },
    {
        number: 7,
        title: "肯定形で書く（否定形を避ける）",
        description: "「〜しないで」より「〜して」のほうがAIは遵守しやすい。",
        example: {
            bad: "Markdownを使わないで、長くしないで",
            good: "短い段落で、プレーンテキスト形式で回答してください"
        },
        category: "表現"
    },
    {
        number: 8,
        title: "XMLタグで挙動を制御",
        description: "軽量なXMLタグで、AIのデフォルト振る舞いを設定できる。",
        example: {
            bad: "積極的に提案してほしい（曖昧）",
            good: "<behavior><mode>proactive</mode><verbosity>concise</verbosity></behavior>"
        },
        category: "構造化"
    },
    {
        number: 9,
        title: "ツール利用を強要しすぎない",
        description: "「絶対に」「必ず」と強く強制すると過剰反応する。穏やかに誘導する。",
        example: {
            bad: "必ず検索ツールを使え！！",
            good: "リアルタイム情報が必要な場合は検索ツールの使用を推奨します"
        },
        category: "誘導"
    },
    {
        number: 10,
        title: "「Think」という言葉を避ける",
        description: "特定モデルで「Think」に敏感な傾向がある。代替表現を使用する。",
        example: {
            bad: "Think about the best approach",
            good: "Consider the best approach / Evaluate each option"
        },
        category: "表現"
    }
];

// トラブルシューティングガイド
const TROUBLESHOOTING = [
    {
        id: 1,
        symptom: "Claudeが同じ間違いを繰り返す",
        symptom_en: "Claude keeps making the same mistakes",
        cause: "Context Rot（コンテキスト腐敗）",
        description: "長いセッションで古い情報や誤った推論が蓄積し、判断力が低下している状態",
        solutions: [
            { action: "/clear でコンテキストをリセット", priority: "高" },
            { action: "/compact で圧縮してから再開", priority: "中" },
            { action: "新しいセッションを開始", priority: "高" }
        ],
        prevention: "2回失敗したら/clearを検討する習慣をつける",
        relatedTutorial: "01_03"
    },
    {
        id: 2,
        symptom: "ファイルが見つからないエラー",
        symptom_en: "File not found error",
        cause: "パス指定の問題またはプロジェクト認識不足",
        description: "Claude Codeがファイルパスを正しく解決できていない",
        solutions: [
            { action: "@参照で正確なパスを指定", priority: "高" },
            { action: "/init でプロジェクトを認識させる", priority: "高" },
            { action: "相対パスではなく絶対パスを使用", priority: "中" }
        ],
        prevention: "作業開始時に/initを実行する",
        relatedTutorial: "00_05"
    },
    {
        id: 3,
        symptom: "期待と異なるコードが生成される",
        cause: "指示が曖昧または検証手段が不足",
        description: "ゴールや制約が明確に伝わっていない",
        solutions: [
            { action: "具体的な入力→期待出力を示す", priority: "高" },
            { action: "テストケースを提供して自己検証させる", priority: "高" },
            { action: "既存のパターンを@参照で示す", priority: "中" }
        ],
        prevention: "検証方法を必ず提供する習慣をつける",
        relatedTutorial: "01_02"
    },
    {
        id: 4,
        symptom: "処理が遅くなった・応答が劣化した",
        cause: "コンテキストウィンドウの圧迫",
        description: "大量のファイル読み込みや長い会話でコンテキストが埋まっている",
        solutions: [
            { action: "/context で使用量を確認", priority: "高" },
            { action: "/compact で圧縮", priority: "高" },
            { action: "サブエージェントに調査を委譲", priority: "中" }
        ],
        prevention: "定期的に/contextを確認し、60%超で対策を検討",
        relatedTutorial: "00_03"
    },
    {
        id: 5,
        symptom: "計画なしにいきなり実装を始める",
        cause: "Planモードを使っていない",
        description: "間違った問題を解くリスクがある",
        solutions: [
            { action: "/plan でPlanモードを開始", priority: "高" },
            { action: "Shift+Tab 2回でPlanモードに切り替え", priority: "高" },
            { action: "計画を承認してから実装に進む", priority: "高" }
        ],
        prevention: "複雑なタスクでは必ずPlanモードから始める",
        relatedTutorial: "01_05"
    },
    {
        id: 6,
        symptom: "CLAUDE.mdのルールが無視される",
        cause: "CLAUDE.mdが長すぎてノイズに埋没",
        description: "重要なルールが他の情報に埋もれている",
        solutions: [
            { action: "CLAUDE.mdを簡潔に整理", priority: "高" },
            { action: "重要なルールにIMPORTANT:を付与", priority: "中" },
            { action: "詳細はSkillに分離", priority: "中" }
        ],
        prevention: "CLAUDE.mdは2.5Kトークン以下を目安に維持",
        relatedTutorial: "01_01"
    },
    {
        id: 7,
        symptom: "大量のファイルを読み込んでしまう",
        cause: "無限探索パターン",
        description: "スコープを限定せずに探索を指示している",
        solutions: [
            { action: "探索範囲を明確に限定", priority: "高" },
            { action: "サブエージェントに探索を委譲", priority: "高" },
            { action: "Grepで対象を絞ってから読み込み", priority: "中" }
        ],
        prevention: "「〜を探索して」より「src/auth/内で〜を探して」と具体的に",
        relatedTutorial: "02_03"
    },
    {
        id: 8,
        symptom: "テストが失敗する・エッジケースが漏れる",
        cause: "検証ループの不足",
        description: "Claudeに自己検証の手段を与えていない",
        solutions: [
            { action: "テストを実行させて結果を確認させる", priority: "高" },
            { action: "期待出力を明示する", priority: "高" },
            { action: "境界値・異常系のテストケースを提供", priority: "中" }
        ],
        prevention: "「実装後テストを実行して」を依頼に含める",
        relatedTutorial: "01_02"
    },
    {
        id: 9,
        symptom: "複数タスクが混在してカオスになる",
        cause: "キッチンシンク問題",
        description: "無関係なタスクが同一セッションに混在",
        solutions: [
            { action: "/clear でリセットしてから新タスク", priority: "高" },
            { action: "タスクごとにセッションを分ける", priority: "高" },
            { action: "複数タブで並列セッション", priority: "中" }
        ],
        prevention: "タスクの切れ目で/clearを習慣化",
        relatedTutorial: "01_06"
    },
    {
        id: 10,
        symptom: "Hooksが動作しない",
        cause: "設定ファイルの構文エラーまたはパスの問題",
        description: ".claude.jsonの設定が正しくない",
        solutions: [
            { action: "JSONの構文をバリデート", priority: "高" },
            { action: "パターンマッチングを確認（*.pyなど）", priority: "中" },
            { action: "コマンドが実行可能か単体テスト", priority: "中" }
        ],
        prevention: "設定変更後は簡単なテストで動作確認",
        relatedTutorial: "02_02"
    },
    {
        id: 11,
        symptom: "Skillsが自動で読み込まれない",
        cause: "descriptionがタスクと一致しない",
        description: "Claudeがdescriptionを見てSkillを読み込むか判断している",
        solutions: [
            { action: "descriptionをより具体的に記載", priority: "高" },
            { action: "globsパターンを設定してファイルタイプで自動読み込み", priority: "中" },
            { action: "/skill-name で明示的に呼び出し", priority: "中" }
        ],
        prevention: "descriptionに「いつ使うか」を明記",
        relatedTutorial: "02_01"
    },
    {
        id: 12,
        symptom: "MCPツールが見つからない・動作しない",
        cause: "MCP設定の問題",
        description: ".mcp.jsonの設定やサーバー起動に問題がある",
        solutions: [
            { action: "MCPサーバーが起動しているか確認", priority: "高" },
            { action: ".mcp.jsonのパスと設定を確認", priority: "高" },
            { action: "不要なMCPを無効化してコンテキスト節約", priority: "中" }
        ],
        prevention: "同時有効化するMCPは10個以下に制限",
        relatedTutorial: "02_05"
    },
    {
        id: 13,
        symptom: "セキュリティ関連のエラーが発生",
        cause: "権限の問題または危険な操作のブロック",
        description: "Claude Codeのセキュリティ機能が動作している",
        solutions: [
            { action: "/permissions で安全なコマンドを許可", priority: "高" },
            { action: "/sandbox で安全な実行環境を確保", priority: "中" },
            { action: "必要に応じてHooksで危険な操作をブロック", priority: "中" }
        ],
        prevention: "--dangerously-skip-permissionsは極力使わない",
        relatedTutorial: "02_02"
    },
    {
        id: 14,
        symptom: "並列セッションで競合が発生",
        cause: "同じファイルを複数セッションが編集",
        description: "ファイルの同時編集による衝突",
        solutions: [
            { action: "セッションごとに独立したcheckoutを使用", priority: "高" },
            { action: "Git worktreesで分離", priority: "中" },
            { action: "編集対象ファイルを事前に分担", priority: "中" }
        ],
        prevention: "並列セッションでは作業範囲を明確に分離",
        relatedTutorial: "02_08"
    },
    {
        id: 15,
        symptom: "ヘッドレスモードで期待通りに動作しない",
        cause: "インタラクティブな確認が必要な状態",
        description: "claude -p では対話的な確認ができない",
        solutions: [
            { action: "--allowedTools で必要な権限を事前許可", priority: "高" },
            { action: "プロンプトをより具体的に", priority: "中" },
            { action: "--output-format json で結果を構造化", priority: "中" }
        ],
        prevention: "ヘッドレス実行前にインタラクティブでテスト",
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
        answer: "Claude Codeはローカルで動作する「エージェント型」のツールです。ファイルを直接読み書きし、コマンドを実行し、問題を自律的に解決します。一方、ChatGPTは主にチャット形式でのQ&Aに特化しています。Claude Codeは「ローカルで動く自律的なプログラマー」と考えてください。",
        relatedTutorial: "00_01"
    },
    {
        id: 2,
        category: "基本",
        question: "プログラミング経験がなくても使えますか？",
        answer: "はい、使えます。ファイル整理、データ分析、レポート作成、議事録処理など、コードを書かなくても多くのタスクに活用できます。自然な日本語で「〜して」と依頼するだけです。",
        relatedTutorial: "03_03"
    },
    {
        id: 3,
        category: "設定",
        question: "CLAUDE.mdには何を書けばいいですか？",
        answer: "プロジェクト固有のルール、コーディング規約、禁止事項、テスト方法など、Claudeがコードから推測できない情報を書きます。ただし、長すぎると無視されるので、2.5Kトークン以下を目安に簡潔に保ちましょう。言語標準や自明なルールは書く必要がありません。",
        relatedTutorial: "01_01"
    },
    {
        id: 4,
        category: "設定",
        question: "CLAUDE.mdとSkillsの違いは何ですか？",
        answer: "CLAUDE.mdは毎回自動で読み込まれる「常に適用されるルール」、Skillsは必要なときだけ読み込まれる「状況に応じた知識」です。CLAUDE.mdには共通ルールを、Skillsには特定のワークフロー（コードレビュー、TDDなど）を記載します。",
        relatedTutorial: "02_01"
    },
    {
        id: 5,
        category: "操作",
        question: "コンテキストウィンドウとは何ですか？なぜ重要ですか？",
        answer: "コンテキストウィンドウは「AIの短期記憶」です。会話、読んだファイル、実行結果がすべてここに蓄積されます。埋まりすぎると性能が劣化（Context Rot）するため、/compactや/clearで管理することが重要です。",
        relatedTutorial: "00_03"
    },
    {
        id: 6,
        category: "操作",
        question: "/planと通常モードの違いは何ですか？",
        answer: "Planモードでは、Claudeはファイルを変更せずに探索と計画のみを行います。計画を確認・承認してから実装に進めるため、「間違った問題を解く」リスクを減らせます。複雑なタスクでは必ずPlanモードから始めることをお勧めします。",
        relatedTutorial: "01_05"
    },
    {
        id: 7,
        category: "操作",
        question: "/clearと/compactの違いは何ですか？",
        answer: "/clearはコンテキストを完全にリセットします。/compactは要約して圧縮するため、重要な情報は維持されます。タスクの切り替え時は/clear、同じタスクを継続する場合は/compactが適切です。",
        relatedTutorial: "01_03"
    },
    {
        id: 8,
        category: "ベストプラクティス",
        question: "最も重要なベストプラクティスは何ですか？",
        answer: "「検証方法を提供すること」です。テスト、期待出力、スクリーンショットなど、Claudeが自分で結果を確認できる手段を与えると、品質が2〜3倍向上します。「〜を実装して」ではなく「〜を実装して、テストを実行して確認して」と依頼しましょう。",
        relatedTutorial: "01_02"
    },
    {
        id: 9,
        category: "ベストプラクティス",
        question: "効果的なプロンプトの書き方は？",
        answer: "1) 具体的なゴールを明示 2) 検証方法を提供 3) @参照でファイルを指定 4) 既存のパターンを示す。曖昧な「うまく動くようにして」ではなく、「validateEmail関数を実装して、test@example.comは真、invalidは偽を返す。テスト実行後に確認して」のように具体的に。",
        relatedTutorial: "01_02"
    },
    {
        id: 10,
        category: "ベストプラクティス",
        question: "失敗したときはどうすればいいですか？",
        answer: "1回目の失敗は修正を依頼、2回目の失敗後は/clearしてアプローチを変えた新しいプロンプトで再開することをお勧めします。失敗したコンテキストで続けると、さらに悪化することがあります。",
        relatedTutorial: "01_06"
    },
    {
        id: 11,
        category: "高度な機能",
        question: "Hooksとは何ですか？どう使いますか？",
        answer: "Hooksはイベント駆動の自動化機能です。ファイル保存時の自動フォーマット、機密ファイルへの書き込みブロック、テスト自動実行などに使います。.claude.jsonで設定し、PreToolUse（実行前）やPostToolUse（実行後）のタイミングでスクリプトを実行できます。",
        relatedTutorial: "02_02"
    },
    {
        id: 12,
        category: "高度な機能",
        question: "Subagentsとは何ですか？いつ使いますか？",
        answer: "Subagentsは特定タスクを専門のエージェントに委譲する仕組みです。メインセッションのコンテキストを汚さずに、大規模な探索やセキュリティレビューなどを実行できます。調査タスクや専門的なレビューに最適です。",
        relatedTutorial: "02_03"
    },
    {
        id: 13,
        category: "高度な機能",
        question: "MCPとは何ですか？",
        answer: "MCP（Model Context Protocol）は外部ツールやデータソースとの統合プロトコルです。GitHub、Slack、データベース、Figmaなどと連携できます。CLIツール（gh、awsなど）よりもコンテキスト効率が良い場合があります。",
        relatedTutorial: "02_05"
    },
    {
        id: 14,
        category: "高度な機能",
        question: "並列セッションはどう活用しますか？",
        answer: "複数のターミナルタブでClaude Codeを実行し、異なるタスクを並列処理できます。Writer/Reviewerパターン（実装とレビューの分離）や、調査と実装の並列化に有効です。ただし、同じファイルを同時編集しないよう注意が必要です。",
        relatedTutorial: "03_05"
    },
    {
        id: 15,
        category: "高度な機能",
        question: "ヘッドレスモードとは何ですか？",
        answer: "claude -p \"プロンプト\" でインタラクティブなセッションなしに実行するモードです。CI/CDパイプライン、バッチ処理、自動化スクリプトに組み込めます。--output-format jsonで結果を構造化できます。",
        relatedTutorial: "03_06"
    },
    {
        id: 16,
        category: "トラブル",
        category_en: "Troubleshooting",
        question: "Claudeが期待通りに動かないときは？",
        answer: "1) プロンプトを具体的にする 2) 検証方法を提供する 3) /clearしてやり直す 4) CLAUDE.mdにルールを追加する、の順で試してください。2回失敗したら、アプローチを変えた新しいセッションで再開することをお勧めします。",
        relatedTutorial: "01_06"
    },
    {
        id: 17,
        category: "トラブル",
        question: "コンテキストがすぐ埋まってしまいます",
        answer: "1) 結果をファイルに書き出す（Write戦略） 2) サブエージェントに探索を委譲 3) /compactで定期的に圧縮 4) 不要になったら/clear。大きなファイルを読む場合は、必要な部分だけ@参照で指定しましょう。",
        relatedTutorial: "01_04"
    },
    {
        id: 18,
        category: "料金・制限",
        category_en: "Pricing & Limits",
        question: "API使用量を節約するには？",
        answer: "1) Haikuを軽量タスクに使用 2) サブエージェントで探索を分離 3) /compactでコンテキストを圧縮 4) CLAUDE.mdを簡潔に保つ 5) MCPでCLIコマンドを代替。特に大規模な探索はサブエージェントに委譲すると効率的です。",
        relatedTutorial: "03_01"
    },
    {
        id: 19,
        category: "チーム",
        category_en: "Team",
        question: "チームでCLAUDE.mdを共有するには？",
        answer: "CLAUDE.mdをGitリポジトリにコミットして共有します。チームメンバーが週次で貢献し、失敗パターンや学びを追記していくと、チームの集合知として価値が高まります。PRレビュー時に@.claudeタグで更新を促すこともできます。",
        relatedTutorial: "01_01"
    },
    {
        id: 20,
        category: "チーム",
        question: "Skillsやコマンドをチームで共有するには？",
        answer: ".claude/フォルダをGitリポジトリにコミットして共有します。skills/、commands/、agents/をバージョン管理することで、チーム全体で同じワークフローを使えます。",
        relatedTutorial: "02_01"
    }
];

// ベストプラクティスチェックリスト
const CHECKLIST = {
    beforeSession: {
        title: "セッション開始前",
        title_en: "Before Session",
        description: "作業を始める前に確認すべき項目",
        items: [
            { id: "bs1", text: "CLAUDE.mdは最新か？必要なルールが記載されているか？", priority: "高", relatedTutorial: "01_01" },
            { id: "bs2", text: "ゴールは具体的に定義されているか？", priority: "高", relatedTutorial: "01_02" },
            { id: "bs3", text: "検証方法（テスト、期待出力）は準備できているか？", priority: "高", relatedTutorial: "01_02" },
            { id: "bs4", text: "参照すべきファイルやパターンは明確か？", priority: "中", relatedTutorial: "00_05" },
            { id: "bs5", text: "複雑なタスクの場合、/planで始めるか？", priority: "中", relatedTutorial: "01_05" }
        ]
    },
    duringSession: {
        title: "セッション中",
        title_en: "During Session",
        description: "作業中に意識すべき項目",
        items: [
            { id: "ds1", text: "検証手段をClaudeに提供しているか？", priority: "高", relatedTutorial: "01_02" },
            { id: "ds2", text: "計画を確認してから実装に進んでいるか？", priority: "高", relatedTutorial: "01_05" },
            { id: "ds3", text: "コンテキスト使用量を確認しているか？（/context）", priority: "中", relatedTutorial: "00_03" },
            { id: "ds4", text: "2回失敗したら/clearを検討しているか？", priority: "高", relatedTutorial: "01_06" },
            { id: "ds5", text: "結果をファイルに書き出してコンテキストを節約しているか？", priority: "中", relatedTutorial: "01_04" },
            { id: "ds6", text: "大規模探索はサブエージェントに委譲しているか？", priority: "中", relatedTutorial: "02_03" }
        ]
    },
    afterSession: {
        title: "セッション終了後",
        title_en: "After Session",
        description: "作業完了後に行うべき項目",
        items: [
            { id: "as1", text: "成果物は検証済みか？テストはパスしているか？", priority: "高", relatedTutorial: "01_02" },
            { id: "as2", text: "学んだパターンをSkill化したか？（/learn）", priority: "中", relatedTutorial: "03_02" },
            { id: "as3", text: "失敗パターンをCLAUDE.mdに追記したか？", priority: "中", relatedTutorial: "01_01" },
            { id: "as4", text: "繰り返しの作業はHooks/Skillsで自動化を検討したか？", priority: "低", relatedTutorial: "02_02" },
            { id: "as5", text: "チームで共有すべき知見はあるか？", priority: "低", relatedTutorial: "01_01" }
        ]
    },
    qualityGates: {
        title: "品質ゲート",
        title_en: "Quality Gates",
        description: "リリース前に確認すべき品質基準",
        items: [
            { id: "qg1", text: "すべてのテストがパスしているか？", priority: "高", relatedTutorial: "01_02" },
            { id: "qg2", text: "セキュリティレビューは完了しているか？", priority: "高", relatedTutorial: "11" },
            { id: "qg3", text: "ドキュメントは更新されているか？", priority: "中", relatedTutorial: "02_01" },
            { id: "qg4", text: "コードレビューは完了しているか？", priority: "高", relatedTutorial: "11" },
            { id: "qg5", text: "パフォーマンスに問題はないか？", priority: "中", relatedTutorial: "11" }
        ]
    }
};

// Export for use in app.js
window.TUTORIALS = TUTORIALS;
window.HANDSON = HANDSON;
window.BEST_PRACTICES = BEST_PRACTICES;
window.BORIS_TIPS = BORIS_TIPS;
window.PROMPT_TIPS = PROMPT_TIPS;
window.OFFICIAL_RESOURCES = OFFICIAL_RESOURCES;
window.TROUBLESHOOTING = TROUBLESHOOTING;
window.FAQ = FAQ;
window.CHECKLIST = CHECKLIST;
