/**
 * Claude Code Tutorial - Tutorial Data (Enhanced)
 * by EZOAI
 *
 * 詳細なハンズオン手順と公式ベストプラクティスリンク付き
 */

// 公式リソースリンク
const OFFICIAL_RESOURCES = {
    docs: {
        url: "https://docs.anthropic.com/ja/docs/claude-code/overview",
        title: "Claude Code 公式ドキュメント",
        description: "Anthropicが提供する公式ドキュメント。最新の機能とベストプラクティス。"
    },
    bestPractices: {
        url: "https://docs.anthropic.com/ja/docs/claude-code/best-practices",
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
            description: "Claude Codeの本質は「エージェント型コーディング環境」。自律的にファイルを読み、コマンドを実行し、問題を解決する。",
            icon: "rocket",
            tags: ["概要", "エージェント", "ツールコール"],
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
            description: "エージェントとは自律的に判断し行動するAI。目標を与えれば、計画→実行→検証のループを自分で回す。",
            icon: "cpu",
            tags: ["エージェント", "自律性", "フィードバックループ"],
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
            description: "コンテキストウィンドウは有限のリソース。効率的に使わなければ、AIの性能は急激に劣化する。",
            icon: "database",
            tags: ["コンテキスト", "トークン", "最適化"],
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
            description: "Node.js、Claude Code CLI、VSCode拡張のセットアップ。APIキーの設定まで。",
            icon: "download",
            tags: ["インストール", "セットアップ", "API"],
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
            description: "/init、/plan、/compact、Esc、Shift+Tab。これだけ覚えれば始められる。",
            icon: "command",
            tags: ["コマンド", "ショートカット", "基本操作"],
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
            description: "コードを書かなくても使える。ファイル整理、要約、レポート作成から始めよう。",
            icon: "users",
            tags: ["非エンジニア", "入門", "ユースケース"],
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
            description: "CLAUDE.mdはプロジェクト固有のルールや知識を記載する場所。セッションを超えて参照される。",
            icon: "file-text",
            tags: ["CLAUDE.md", "設定", "ルール"],
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
            description: "公式ベストプラクティスで最も強調されているのがこれ。テスト、期待出力を示して自己検証させる。",
            icon: "check-circle",
            tags: ["検証", "テスト", "ベストプラクティス"],
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
            description: "コンテキストが汚染されると、AIの性能が劣化する。これを「Context Rot」と呼ぶ。",
            icon: "alert-triangle",
            tags: ["Context Rot", "劣化", "対策"],
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
            description: "W: Write（書く）、S: Structure（構造化）、C: Compress（圧縮）、E: Extend（拡張）。",
            icon: "layers",
            tags: ["WSCE", "フレームワーク", "戦略"],
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
            description: "繰り返しの作業をSkillとして定義。Claudeが必要に応じて自動で読み込む。",
            icon: "zap",
            tags: ["Skills", "ワークフロー", "自動化"],
            content: {
                summary: "Skillsは特定のワークフローを定義するマークダウンファイル。Progressive Disclosureで効率的に読み込まれます。",
                keyPoints: [
                    "~/.claude/skills/ または .claude/skills/ に配置",
                    "nameとdescriptionのメタデータを記載",
                    "Claudeが必要と判断したら自動で読み込む",
                    "disable-model-invocation: true でスラッシュコマンド専用に"
                ],
                code: "---\nname: report-draft\ndescription: 売上レポート作成時、先に要約を出力\n---\n\n# レポート作成手順\n\n売上データのレポートを書くときは、必ず以下の順序で出力すること：\n\n1. **3行要約**\n   - 対象期間\n   - 合計金額\n   - 特記事項\n\n2. **詳細本文**\n   - 月別推移\n   - 地域別分析\n   - 考察",
                handson: {
                    title: "レポート用Skillを作成する",
                    goal: "「売上レポートを書くときは、必ず要約を先に出力する」というワークフローをSkillとして定義",
                    prerequisites: ["ハンズオンフォルダにCLAUDE.mdがある"],
                    steps: [
                        {
                            step: 1,
                            action: "Skillフォルダを作成",
                            prompt: "このプロジェクトに .claude/skills フォルダを作成して",
                            expected: ".claude/skillsフォルダが作成される"
                        },
                        {
                            step: 2,
                            action: "Skillファイルを作成",
                            prompt: ".claude/skills/report-draft.md を作成して。内容:\n\n---\nname: report-draft\ndescription: 売上レポート作成時、先に3行の要約を出力してから本文を書く\n---\n\n# レポート作成手順\n\n売上データのレポートを書くときは、必ず以下の順序で出力すること：\n\n1. 3行要約（対象期間、合計金額、特記事項）\n2. 詳細本文",
                            expected: "Skillファイルが作成される"
                        },
                        {
                            step: 3,
                            action: "Skillが効いているか試す",
                            prompt: "data/sales_2025.csv の内容に基づいて、2025年Q1の売上レポートをMarkdownで書いて。report-draft の手順に従って。",
                            expected: "要約が先に出力され、その後に詳細が続く"
                        }
                    ],
                    checkpoints: [
                        "Skillのdescriptionがロードされている",
                        "指定した手順に従ってレポートが作成される"
                    ],
                    files: {
                        created: [".claude/skills/report-draft.md"]
                    }
                }
            }
        },
        {
            id: "02_02",
            number: "02_02",
            title: "Hooks - 自動化トリガー",
            description: "特定のイベントに応じて自動でスクリプトを実行。保存時フォーマット、テスト実行など。",
            icon: "anchor",
            tags: ["Hooks", "自動化", "トリガー"],
            content: {
                summary: "Hooksはイベント駆動の自動化機構。ファイル保存時、コミット前などにスクリプトを自動実行します。",
                keyPoints: [
                    "PreToolUse: ツール実行前にチェック",
                    "PostToolUse: ツール実行後に処理",
                    ".claude.json に設定を記載",
                    "例: Python保存時に自動フォーマット"
                ],
                events: [
                    { event: "SessionStart", desc: "セッション開始時" },
                    { event: "SessionStop", desc: "セッション終了時" },
                    { event: "PreToolUse", desc: "ツール実行前" },
                    { event: "PostToolUse", desc: "ツール実行後" }
                ],
                code: '{\n  "hooks": {\n    "PostToolUse": [\n      {\n        "event": "Write",\n        "pattern": "*.py",\n        "command": "black $FILE"\n      }\n    ]\n  }\n}',
                handson: {
                    title: "Python自動フォーマットHookを追加",
                    goal: "Pythonファイル編集後に自動でblackフォーマッターを実行",
                    prerequisites: ["blackがインストールされている（pip install black）"],
                    steps: [
                        {
                            step: 1,
                            action: ".claude.jsonを作成",
                            prompt: "プロジェクトルートに .claude.json を作成して、以下の内容を設定して：\n\n{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"event\": \"Write\",\n        \"pattern\": \"*.py\",\n        \"command\": \"black $FILE\"\n      }\n    ]\n  }\n}",
                            expected: ".claude.jsonが作成される"
                        },
                        {
                            step: 2,
                            action: "Hookをテスト",
                            prompt: "scripts/test_hook.py というファイルを作成して、フォーマットされていないPythonコードを書いて",
                            expected: "ファイル作成後、blackが自動実行されてフォーマットされる"
                        }
                    ],
                    checkpoints: [
                        "Pythonファイル作成後にblackが自動実行される",
                        "コードが自動でフォーマットされる"
                    ],
                    files: {
                        created: [".claude.json"]
                    }
                }
            }
        },
        {
            id: "02_03",
            number: "02_03",
            title: "Subagents - タスク委譲の仕組み",
            description: "複雑なタスクを専門のサブエージェントに委譲。並列処理も可能。",
            icon: "users",
            tags: ["Subagents", "委譲", "並列処理"],
            content: {
                summary: "Taskツールを使って、専門性の高いサブエージェントにタスクを委譲します。大規模な探索や並列処理に有効です。",
                keyPoints: [
                    "Task(prompt, type) でサブエージェントを起動",
                    "Explore、Plan、Bash など専門エージェント",
                    "run_in_background: true で並列実行",
                    "結果は親エージェントに返される"
                ],
                agentTypes: [
                    { type: "Explore", desc: "コードベースの探索に特化" },
                    { type: "Plan", desc: "実装計画の設計" },
                    { type: "Bash", desc: "コマンド実行に特化" }
                ],
                handson: {
                    title: "レビュー用サブエージェントでスクリプトをレビュー",
                    goal: "サブエージェントを使ってコードレビューを行う",
                    prerequisites: ["scripts/summary_by_month.pyが存在する"],
                    steps: [
                        {
                            step: 1,
                            action: "コードレビューを依頼",
                            prompt: "scripts/summary_by_month.py をコードレビューして。以下の観点で確認：\n- エラーハンドリング\n- 可読性\n- パフォーマンス\n\nサブエージェントを使って詳細に探索してレビューして。",
                            expected: "サブエージェントが起動し、詳細なレビューが行われる"
                        },
                        {
                            step: 2,
                            action: "指摘事項を修正",
                            prompt: "レビューで指摘された問題を修正して",
                            expected: "指摘事項が修正される"
                        }
                    ],
                    checkpoints: [
                        "サブエージェントが起動している",
                        "詳細なレビュー結果が返される"
                    ]
                }
            }
        },
        {
            id: "02_04",
            number: "02_04",
            title: "Tasks - セッションを超えるタスク管理",
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
            description: "Model Context Protocolで外部サービス（Slack、GitHub、DB等）と連携。",
            icon: "plug",
            tags: ["MCP", "外部連携", "API"],
            content: {
                summary: "MCPはClaudeを外部サービスと接続するプロトコルです。GitHub、Slack、データベース等と連携できます。",
                keyPoints: [
                    "MCP Serverを設定してサービス連携",
                    "GitHub、Slack、PostgreSQL等と接続可能",
                    "セキュアな認証・認可",
                    "双方向のデータアクセス"
                ],
                handson: {
                    title: "CLIで代替する",
                    goal: "MCPなしでもCLIで外部サービスと連携できることを確認",
                    prerequisites: ["ghコマンドがインストールされている"],
                    steps: [
                        {
                            step: 1,
                            action: "GitHub CLIを使う",
                            prompt: "gh repo view の結果を表示して",
                            expected: "GitHubリポジトリの情報が表示される"
                        }
                    ],
                    checkpoints: [
                        "CLIツールでも外部サービス連携が可能"
                    ]
                }
            }
        },
        {
            id: "02_06",
            number: "02_06",
            title: "Plugins - 拡張パッケージ",
            description: "コミュニティが作成した拡張機能をインストール。機能を簡単に追加。",
            icon: "package",
            tags: ["Plugins", "拡張", "コミュニティ"],
            content: {
                summary: "Pluginsはスキル、フック、MCPサーバーをパッケージ化したもの。コミュニティで共有できます。",
                keyPoints: [
                    "claude plugin install <name> でインストール",
                    "スキル、フック、MCPをまとめて提供",
                    "manifest.json で構成を定義",
                    "コミュニティで共有可能"
                ],
                handson: {
                    title: "プラグインの確認",
                    goal: "利用可能なプラグインを確認",
                    prerequisites: [],
                    steps: [
                        {
                            step: 1,
                            action: "プラグイン一覧を確認",
                            prompt: "現在インストールされているプラグインを確認して",
                            expected: "プラグイン一覧が表示される"
                        }
                    ],
                    checkpoints: [
                        "プラグインの仕組みを理解"
                    ]
                }
            }
        },
        {
            id: "02_07",
            number: "02_07",
            title: "戦略的コンパクト化",
            description: "/compact の効果的な使い方。いつ、どのように圧縮するか。",
            icon: "minimize-2",
            tags: ["/compact", "圧縮", "最適化"],
            content: {
                summary: "/compactはコンテキストを要約して圧縮します。タイミングが重要です。",
                keyPoints: [
                    "70%を超えたら圧縮を検討",
                    "フェーズの切れ目で実行",
                    "重要な情報はファイルに書き出してから圧縮",
                    "圧縮後は重要な文脈を再確認"
                ],
                handson: {
                    title: "区切りで/compactを実行する",
                    goal: "適切なタイミングで圧縮を行う",
                    prerequisites: ["ある程度のやり取りを行った後"],
                    steps: [
                        {
                            step: 1,
                            action: "使用量を確認",
                            prompt: "/context",
                            expected: "使用量が表示される"
                        },
                        {
                            step: 2,
                            action: "圧縮を実行",
                            prompt: "/compact",
                            expected: "コンテキストが圧縮される"
                        },
                        {
                            step: 3,
                            action: "圧縮後の確認",
                            prompt: "/context",
                            expected: "使用量が減少している"
                        }
                    ],
                    checkpoints: [
                        "圧縮前後で使用量が変化",
                        "重要な文脈は維持されている"
                    ]
                }
            }
        },
        {
            id: "02_08",
            number: "02_08",
            title: "並列化戦略",
            description: "複数のタスクを並列で実行。効率を最大化する設計。",
            icon: "git-fork",
            tags: ["並列処理", "効率化", "設計"],
            content: {
                summary: "独立したタスクは並列で実行し、処理時間を短縮します。",
                keyPoints: [
                    "依存関係のないタスクを特定",
                    "run_in_background: true で並列起動",
                    "結果を統合して次のステップへ",
                    "ヘッドレスモードで複数セッション"
                ],
                handson: {
                    title: "別タスクを並行する",
                    goal: "複数のタスクを並列で実行",
                    prerequisites: [],
                    steps: [
                        {
                            step: 1,
                            action: "並列タスクを依頼",
                            prompt: "以下の2つのタスクを並列で実行して：\n1. data/sales_2025.csv の月別集計\n2. data/sales_2025.csv の地域別集計",
                            expected: "両方のタスクが並列で実行される"
                        }
                    ],
                    checkpoints: [
                        "複数のタスクが同時に進行"
                    ]
                }
            }
        }
    ],
    advanced: [
        {
            id: "03_01",
            number: "03_01",
            title: "トークン最適化",
            description: "トークン消費を最小化するテクニック。コスト削減と性能向上を両立。",
            icon: "trending-down",
            tags: ["トークン", "最適化", "コスト"],
            content: {
                summary: "必要最小限のトークンで最大の効果を得る方法を学びます。",
                keyPoints: [
                    "不要なファイル読み込みを避ける",
                    "結果はファイルに書き出す",
                    "Grepで必要な部分だけ抽出",
                    "プロンプトを簡潔に"
                ],
                handson: {
                    title: "モデル選択を意識する",
                    goal: "タスクに応じた適切なモデルを選択",
                    prerequisites: [],
                    steps: [
                        {
                            step: 1,
                            action: "現在のモデルを確認",
                            prompt: "/model",
                            expected: "現在のモデルが表示される"
                        },
                        {
                            step: 2,
                            action: "簡単なタスクには軽量モデルを使用",
                            prompt: "（軽量なタスクの場合はHaikuを検討）",
                            expected: "コスト効率の良いモデルを選択"
                        }
                    ],
                    checkpoints: [
                        "タスクの複雑さに応じたモデル選択"
                    ]
                }
            }
        },
        {
            id: "03_02",
            number: "03_02",
            title: "継続学習パターン",
            description: "セッション間で学習を蓄積。CLAUDE.mdとSkillsを育てる。",
            icon: "refresh-cw",
            tags: ["継続学習", "蓄積", "改善"],
            content: {
                summary: "効果的なパターンをCLAUDE.mdやSkillsに蓄積し、チームで共有します。",
                keyPoints: [
                    "うまくいったプロンプトをSkill化",
                    "失敗パターンをCLAUDE.mdに記載",
                    "定期的にルールを見直し",
                    "チームで知見を共有"
                ],
                handson: {
                    title: "このプロジェクトの知見をSkill化",
                    goal: "学んだパターンをSkillとして保存",
                    prerequisites: ["いくつかのハンズオンを完了"],
                    steps: [
                        {
                            step: 1,
                            action: "効果的だったパターンを振り返る",
                            prompt: "これまでのセッションで効果的だったプロンプトパターンをリストアップして",
                            expected: "効果的なパターンがリストアップされる"
                        },
                        {
                            step: 2,
                            action: "Skillとして保存",
                            prompt: "リストアップしたパターンを .claude/skills/learned-patterns.md として保存して",
                            expected: "Skillファイルが作成される"
                        }
                    ],
                    checkpoints: [
                        "学習がファイルとして永続化される"
                    ],
                    files: {
                        created: [".claude/skills/learned-patterns.md"]
                    }
                }
            }
        },
        {
            id: "03_03",
            number: "03_03",
            title: "非技術者向け - コードを書かない使い方",
            description: "プログラミング知識なしでClaude Codeを活用。文書作成、分析、整理に。",
            icon: "file-edit",
            tags: ["非技術者", "文書", "分析"],
            content: {
                summary: "Claude Codeはコーディングツールではなく「ローカルアシスタント」です。プログラミング知識なしでも活用できます。",
                keyPoints: [
                    "ファイル整理・リネーム",
                    "レポート・資料作成",
                    "データ分析・可視化",
                    "議事録の要約・タスク抽出"
                ],
                handson: {
                    title: "3行で要約して",
                    goal: "自然な日本語で要約を依頼",
                    prerequisites: ["data/sales_2025.csvがある"],
                    steps: [
                        {
                            step: 1,
                            action: "シンプルな要約を依頼",
                            prompt: "data/sales_2025.csv の内容を3行で要約して",
                            expected: "簡潔な3行の要約が表示される"
                        }
                    ],
                    checkpoints: [
                        "専門用語なしで依頼できる"
                    ]
                }
            }
        },
        {
            id: "03_04",
            number: "03_04",
            title: "50の非コーディング活用例",
            description: "実際に使える50のユースケース。日常業務から創作活動まで。",
            icon: "list",
            tags: ["ユースケース", "活用例", "実践"],
            content: {
                summary: "Claude Codeの可能性は無限大。日常のあらゆる場面で活用可能です。",
                keyPoints: [
                    "資料作成: プレゼン、レポート、提案書",
                    "情報整理: ブックマーク、メモ、ファイル",
                    "分析: 売上、アンケート、ログ",
                    "創作: 記事、小説、脚本",
                    "学習: 要約、翻訳、解説"
                ],
                examples: [
                    "このフォルダのファイルを更新日順に整理して",
                    "この議事録から次のアクションを抽出して",
                    "このCSVをグラフ化して",
                    "このレポートをメール用に要約して",
                    "この英語ドキュメントを日本語に翻訳して"
                ],
                handson: {
                    title: "レポートをメール用に要約させる",
                    goal: "既存のレポートをメール用の短い文章に変換",
                    prerequisites: ["reports/q1_report.mdがある"],
                    steps: [
                        {
                            step: 1,
                            action: "メール用に要約",
                            prompt: "@reports/q1_report.md をメール用に要約して。件名と本文（3-5行）の形式で。",
                            expected: "メール形式の簡潔な要約が生成される"
                        }
                    ],
                    checkpoints: [
                        "用途に応じた形式で出力される"
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
            description: "売上データ（CSV）を分析し、月別・地域別の集計レポートを自動生成。データ分析の基本を学ぶ。",
            folder: "1_sales_data_analytics",
            badge: "データ分析",
            skills: ["CSV読み込み", "集計", "レポート出力"],
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
            description: "散らばったファイルを自動で整理・リネーム。命名規則に従った一括処理を体験。",
            folder: "2_document_organization",
            badge: "ファイル操作",
            skills: ["Glob検索", "リネーム", "フォルダ整理"],
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
            description: "API仕様（YAML）や設定ファイル（JSON）からドキュメントを自動生成。",
            folder: "3_spec_to_docs",
            badge: "ドキュメント",
            skills: ["YAML解析", "Markdown生成", "テンプレート"],
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
        category: "コンテキスト"
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

// Export for use in app.js
window.TUTORIALS = TUTORIALS;
window.HANDSON = HANDSON;
window.BEST_PRACTICES = BEST_PRACTICES;
window.PROMPT_TIPS = PROMPT_TIPS;
window.OFFICIAL_RESOURCES = OFFICIAL_RESOURCES;
