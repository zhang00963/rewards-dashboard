const STORAGE_KEY = "rewards-dashboard-language";
const SUPPORTED_LOCALES = new Set(["en", "zh-CN"]);

const ZH_CN = {
  "Microsoft Rewards Dashboard": "Microsoft Rewards 控制台",
  "Skip to main content": "跳到主要内容",
  "Rewards Dashboard": "Rewards 控制台",
  "🏅 Rewards Dashboard": "🏅 Rewards 控制台",
  "Connecting…": "正在连接…",
  Connecting: "正在连接",
  Theme: "主题",
  Language: "语言",
  "Switch to dark mode": "切换到深色模式",
  "Switch to light mode": "切换到浅色模式",
  "Dashboard sections": "控制台栏目",
  Idle: "空闲",
  "Start run": "开始运行",
  Stop: "停止",
  Restart: "重新启动",
  "More actions": "更多操作",
  "Force stop (SIGKILL)": "强制停止 (SIGKILL)",
  "Shut down control API": "关闭控制 API",
  "Login approval needed": "需要登录批准",

  Overview: "概览",
  Accounts: "账户",
  Logs: "日志",
  Runs: "运行记录",
  Schedule: "计划任务",
  Config: "配置",
  Diagnostics: "诊断",

  "Dashboard server unreachable": "无法连接控制台服务器",
  "Bot backend offline": "机器人后端离线",
  "Control API token rejected": "控制 API 令牌被拒绝",
  "Running now": "正在运行",
  Connected: "已连接",
  Disconnected: "已断开",
  Running: "运行中",
  Starting: "正在启动",
  Stopping: "正在停止",
  Pending: "等待中",
  Done: "已完成",
  Error: "错误",
  Crashed: "已崩溃",
  Interrupted: "已中断",
  Stopped: "已停止",
  Success: "成功",
  Ready: "就绪",
  "Control API unavailable": "控制 API 不可用",
  "Control API restarted — reconnected.": "控制 API 已重启并重新连接。",
  "Run started.": "运行已开始。",
  "Stop signal sent.": "已发送停止信号。",
  "Restarting…": "正在重新启动…",
  "Force stop sent.": "已发送强制停止信号。",
  "Shutdown sent.": "已发送关闭信号。",
  "Restart the bot? A run in progress will be stopped first.": "要重新启动机器人吗？正在进行的任务会先停止。",
  "Force-kill the run (SIGKILL)? It gets no chance to clean up.": "要强制终止任务 (SIGKILL) 吗？任务将无法执行清理。",
  "Shut the control API down? The dashboard will go offline until you start it again on the bot host.": "要关闭控制 API 吗？在机器人主机上重新启动前，控制台将保持离线。",

  Summary: "摘要",
  profiles: "个账户",
  points: "积分",
  errors: "个错误",
  timestamp: "时间",
  "Accounts tracked": "已跟踪账户",
  "Combined balance": "总积分余额",
  "Points earned last run": "上次运行获得积分",
  "Last run": "上次运行",
  "Accounts in error": "异常账户",
  "Schedule (2 active)": "计划任务（2 个已启用）",
  "Run in progress": "正在运行",
  "Accounts Overview": "账户概览",
  Timeline: "时间线",
  Heatmap: "热力图",
  "No accounts configured or observed yet.": "尚未配置或发现任何账户。",
  "No history yet": "暂无历史记录",
  "No run today": "今天尚未运行",
  "Last Run:": "上次运行：",
  Points: "积分",
  unconfigured: "未配置",
  "Run only": "仅运行此账户",
  Trend: "趋势",
  "Point total —": "积分总额 —",
  "Every recorded balance, oldest to newest": "所有已记录余额，按时间从早到晚",
  "No point history recorded for this account yet.": "此账户尚无积分历史记录。",
  "Change in points since last check-in from all sources": "自上次检查以来所有来源的积分变化",
  "Last run duration": "上次运行时长",

  "Batch run": "批量运行",
  "Select the configured accounts to include, then start them together.": "选择要包含的已配置账户，然后一起运行。",
  "Select all": "全选",
  "Run selected": "运行所选账户",
  Selected: "选择",
  Select: "选择",
  Earnable: "可获得",
  Search: "搜索",
  "Bonus search": "奖励搜索",
  Read: "阅读",
  "Check-in": "签到",
  "Claim reward": "领取奖励",
  "Claim bonus": "领取奖励积分",
  "URL reward": "URL 奖励",
  "Visual search": "视觉搜索",
  "App reward": "应用奖励",
  Punchcard: "打卡卡片",
  "Search activity": "搜索活动",
  Configuration: "配置",
  "Configured in .env": "已在 .env 中配置",
  "Geo locale": "地区设置",
  "TOTP secret": "TOTP 密钥",
  "Recovery email": "恢复邮箱",
  Proxy: "代理",
  Yes: "是",
  No: "否",
  Set: "已设置",
  "Not set": "未设置",
  None: "无",
  "Streak & protection": "连续记录与保护",
  "Success streak": "连续成功运行",
  "Current streak": "当前连续天数",
  "Streak protection": "连续记录保护",
  "Protection days remaining": "剩余保护天数",
  "Protection status checked": "保护状态检查时间",
  Enabled: "已启用",
  Disabled: "已禁用",
  Unavailable: "不可用",
  "Run history": "运行历史",
  "Runs recorded by the API": "API 记录的运行次数",
  "Points collected (API history)": "已获得积分（API 历史）",
  "Last duration": "上次运行时长",
  "History points loaded": "已加载的历史积分记录",
  Protection: "保护",
  On: "开启",
  Off: "关闭",
  Today: "今天",
  Cancel: "取消",
  "Are you sure?": "确定删除？",
  Delete: "删除",
  "Removing…": "正在删除…",
  "Collapse details": "收起详情",
  "Expand details": "展开详情",
  "The account must be idle to delete it": "账户必须处于空闲状态才能删除",
  "Remove this account and its history from the dashboard": "从控制台移除此账户及其历史记录",
  "Permanently remove this account and its history from the dashboard": "永久移除此账户及其历史记录",

  "Live log": "实时日志",
  "Newest lines appear at the bottom": "最新日志显示在底部",
  "All levels": "所有级别",
  "Filter lines…": "筛选日志…",
  Autoscroll: "自动滚动",
  Pause: "暂停",
  Resume: "继续",
  "Load 2000": "加载 2000 条",
  Download: "下载",
  Clear: "清空",
  "Waiting for log lines…": "正在等待日志…",
  "No matching log lines.": "没有匹配的日志。",

  "Points per day": "每日积分",
  "Date range": "日期范围",
  "Run history": "运行历史",
  "Parsed from the bot’s own log output": "从机器人的日志输出中解析",
  Status: "状态",
  Started: "开始时间",
  Duration: "时长",
  Gained: "获得积分",
  "New total": "新总额",
  Version: "版本",
  "Process exits": "进程退出记录",
  "How each run the control API launched actually ended": "控制 API 启动的每次运行最终如何结束",
  "No runs recorded yet.": "尚无运行记录。",
  "No point history recorded yet.": "尚无积分历史记录。",
  "The control API hasn’t recorded any runs yet. Runs it launches itself (manually or on a schedule) show up here.": "控制 API 尚未记录任何运行。它手动或按计划启动的运行会显示在这里。",
  "Point total over time": "积分随时间变化",
  "Points collected per day": "每日获得积分",

  "Automatic runs": "自动运行",
  "Two schedulers are available — pick the one that fits your setup": "提供两种计划任务，请选择适合当前环境的一种",
  "Scheduler location": "计划任务位置",
  "This dashboard": "当前控制台",
  "Bot container (Docker cron)": "机器人容器（Docker cron）",
  "Both schedulers are currently enabled — runs may double-fire. Disable one of them below.": "两个计划任务当前都已启用，可能会重复运行。请在下方禁用其中一个。",
  "Enabled — fire runs on the schedule below": "启用 — 按下方计划运行",
  "If a run was missed while the dashboard was offline": "控制台离线期间错过运行时",
  "Skip it": "跳过",
  "Run once after startup": "启动后运行一次",
  "Run only within a grace period": "仅在宽限期内运行",
  "Grace period in minutes": "宽限期（分钟）",
  "Excluded accounts": "排除的账户",
  "Loading configured accounts…": "正在加载已配置账户…",
  "Cron expression": "Cron 表达式",
  "Daily at 09:00": "每天 09:00",
  "Twice daily (09:00, 21:00)": "每天两次（09:00、21:00）",
  "Every 6 hours": "每 6 小时",
  "Every 12 hours": "每 12 小时",
  "Weekdays at 08:00": "工作日 08:00",
  "Skip if already running — don’t start a second run on top of one in progress": "已有任务运行时跳过 — 不要同时启动第二个任务",
  "Save schedule": "保存计划",
  "Discard changes": "放弃更改",
  "Current state": "当前状态",
  "Next run": "下次运行",
  "Last triggered": "上次触发",
  "Last result": "上次结果",
  Timezone: "时区",
  "Not scheduled": "未计划",
  "Not tracked here — see the Runs tab.": "此处不跟踪，请查看“运行记录”标签。",
  "No configured accounts are available.": "没有可用的已配置账户。",
  "Enter a 5-field cron expression.": "请输入 5 段 Cron 表达式。",
  "A scheduled run must include at least one account.": "计划运行必须至少包含一个账户。",
  "Discard unsaved changes and switch scheduler?": "放弃未保存的更改并切换计划任务吗？",

  Settings: "设置",
  "Saves each change automatically. Applies on the next run.": "每项更改会自动保存，并在下次运行时生效。",
  Core: "核心",
  Workers: "任务",
  Activities: "活动",
  "Search settings": "搜索设置",
  Experimental: "实验功能",
  Logging: "日志",
  Webhooks: "Webhook",
  "Other settings": "其他设置",
  "Headless browser": "无头浏览器",
  "Error diagnostics": "错误诊断",
  "Ensure streak protection": "确保启用连续记录保护",
  "Auto-claim punchcard rewards": "自动领取打卡卡片奖励",
  "Skip non-point tasks": "跳过无积分任务",
  "Local queries for ExploreOnBing": "为 ExploreOnBing 使用本地查询",
  "Daily set": "每日任务",
  "Claim bonus points": "领取奖励积分",
  "More activities": "更多活动",
  "Punch cards": "打卡卡片",
  "App promotions": "应用活动",
  "Desktop search": "桌面搜索",
  "Mobile search": "移动端搜索",
  "Bonus searches": "奖励搜索",
  "Daily check-in": "每日签到",
  "Read to earn": "阅读赚取积分",
  "Activate search perk": "激活搜索加成",
  "Visual search": "视觉搜索",
  "Scroll random results": "随机滚动搜索结果",
  "Click random results": "随机点击搜索结果",
  "Run on zero points": "积分为零时仍运行",
  "Parallel searching": "并行搜索",
  "Cluster search": "聚类搜索",
  "API search": "API 搜索",
  "API ExploreOnBing": "API ExploreOnBing",
  "Block media": "阻止媒体资源",
  "Edge browsing": "Edge 浏览活动",
  "Debug logs": "调试日志",
  "Console log filter": "控制台日志筛选",
  "Proxy query engine requests": "代理查询引擎请求",
  "Ignore certificate errors": "忽略证书错误",
  "Discord webhook": "Discord Webhook",
  "Telegram webhook": "Telegram Webhook",
  "ntfy webhook": "ntfy Webhook",
  "Webhook log filter": "Webhook 日志筛选",
  "Session path": "会话路径",
  Clusters: "并发组数",
  "Global timeout": "全局超时",
  "Delay before next account": "下一个账户前的延迟",
  "Max bonus searches": "最大奖励搜索次数",
  "Search result visit time": "搜索结果停留时间",
  "Delay between searches": "搜索间隔",
  "Delay for reading": "阅读延迟",
  "Query sources": "查询来源",
  "Console filter mode": "控制台筛选模式",
  Whitelist: "白名单",
  Blacklist: "黑名单",
  "Console filter levels": "控制台筛选级别",
  "Console filter keywords": "控制台筛选关键词",
  "Console filter regex patterns": "控制台筛选正则表达式",
  "Discord webhook URL": "Discord Webhook URL",
  "Telegram bot token": "Telegram 机器人令牌",
  "Telegram chat ID": "Telegram 聊天 ID",
  "ntfy server URL": "ntfy 服务器 URL",
  "ntfy topic": "ntfy 主题",
  "ntfy auth token": "ntfy 认证令牌",
  "ntfy notification title": "ntfy 通知标题",
  "ntfy tags": "ntfy 标签",
  "ntfy priority": "ntfy 优先级",
  "Webhook filter mode": "Webhook 筛选模式",
  "Webhook filter levels": "Webhook 筛选级别",
  "Webhook filter keywords": "Webhook 筛选关键词",
  "Webhook filter regex patterns": "Webhook 筛选正则表达式",
  min: "最小值",
  max: "最大值",
  "Raw config": "原始配置",
  "Only the fields you actually change are sent": "只发送实际修改的字段",
  "Reveal secrets": "显示敏感信息",
  "Save changes": "保存更改",
  "Reload from API": "从 API 重新加载",
  "Hidden until secrets are revealed": "显示敏感信息后方可编辑",
  "None set": "未设置",
  "Add value…": "添加值…",
  Add: "添加",
  "Enter a valid number.": "请输入有效数字。",
  "Already in the list.": "该值已在列表中。",
  "Applying…": "正在应用…",
  "Apply recommended filter": "应用推荐筛选器",
  "Config update available": "有可用的配置更新",
  "Sync now": "立即同步",
  "Syncing…": "正在同步…",
  "Already up to date.": "已是最新状态。",
  "Nothing changed.": "没有任何更改。",

  "Session management": "会话管理",
  "Clearing sessions can fix most common login issues": "清除会话可解决大多数常见登录问题",
  "Error captures": "错误捕获",
  Refresh: "刷新",
  "No configured accounts found.": "未找到已配置的账户。",
  "No stored sessions": "没有已存储的会话",
  "Clear sessions": "清除会话",
  "Clearing…": "正在清除…",
  "The bot must be idle to clear a session": "机器人必须处于空闲状态才能清除会话",
  "Nothing stored for this account yet": "此账户尚未存储会话",
  screenshot: "截图",
  "No error text captured.": "未捕获错误文本。",
  "No error.txt in this capture.": "此捕获记录中没有 error.txt。",
  "Download dump.html": "下载 dump.html",
  "No error captures — nothing has gone wrong badly enough to be worth a screenshot. Captures need errorDiagnostics enabled in the bot’s config.": "没有错误捕获记录。仅在机器人配置中启用 errorDiagnostics 后，严重错误才会保存截图。",
  Loading: "正在加载",
  "Loading…": "正在加载…",
};

const ZH_PATTERNS = [
  [/^just now$/, () => "刚刚"],
  [/^(\d+)m ago$/, (m) => `${m[1]} 分钟前`],
  [/^(\d+)h ago$/, (m) => `${m[1]} 小时前`],
  [/^(\d+)d ago$/, (m) => `${m[1]} 天前`],
  [/^(\d+)s$/, (m) => `${m[1]} 秒`],
  [/^(\d+)m(?: (\d+)s)?$/, (m) => `${m[1]} 分钟${m[2] ? ` ${m[2]} 秒` : ""}`],
  [/^(\d+)h (\d+)m$/, (m) => `${m[1]} 小时 ${m[2]} 分钟`],
  [/^(\d+)\/(\d+) selected$/, (m) => `已选择 ${m[1]}/${m[2]}`],
  [/^Expires in (\d+)s$/, (m) => `${m[1]} 秒后过期`],
  [/^Login approval needed for (.+): select number (.+)\. Expires in 60 seconds\.$/, (m) => `${m[1]} 需要登录批准：请选择数字 ${m[2]}。60 秒后过期。`],
  [/^Started ACCOUNT_(\d+) only \((.+)\)\.$/, (m) => `已仅启动 ACCOUNT_${m[1]}（${m[2]}）。`],
  [/^Started (\d+)\/(\d+) selected accounts\.$/, (m) => `已启动所选账户中的 ${m[1]}/${m[2]} 个。`],
  [/^Removed (.+) from the dashboard\.$/, (m) => `已从控制台移除 ${m[1]}。`],
  [/^Sessions cleared for (.+)\.$/, (m) => `已清除 ${m[1]} 的会话。`],
  [/^Run only ACCOUNT_(\d+)$/, (m) => `仅运行 ACCOUNT_${m[1]}`],
  [/^Include ACCOUNT_(\d+) in a batch run$/, (m) => `在批量运行中包含 ACCOUNT_${m[1]}`],
  [/^Exclude ACCOUNT_(\d+) — (.+)$/, (m) => `排除 ACCOUNT_${m[1]} — ${m[2]}`],
  [/^\+(.*) pts today$/, (m) => `今天 +${m[1]} 积分`],
  [/^(.*) pts$/, (m) => `${m[1]} 积分`],
  [/^(\d+) accounts$/, (m) => `${m[1]} 个账户`],
  [/^(\d+) accounts seen$/, (m) => `已发现 ${m[1]} 个账户`],
  [/^(\d+)\/(\d+) done$/, (m) => `已完成 ${m[1]}/${m[2]}`],
  [/^(\d+) running$/, (m) => `${m[1]} 个运行中`],
  [/^(\d+) pending$/, (m) => `${m[1]} 个等待中`],
  [/^(\d+) clusters?$/, (m) => `${m[1]} 个并发组`],
  [/^next account in ~(\d+)s(.*)$/, (m) => `约 ${m[1]} 秒后运行下一个账户${m[2]}`],
  [/^next run (.+)$/, (m) => `下次运行 ${m[1]}`],
  [/^started (.+)$/, (m) => `开始于 ${m[1]}`],
  [/^last exit: code (.+)$/, (m) => `上次退出：代码 ${m[1]}`],
  [/^(.+) points over (\d+) days · (\d+) days? with a run$/, (m) => `${m[2]} 天共 ${m[1]} 积分 · 其中 ${m[3]} 天有运行`],
  [/^(\d+) captures? in (.+)$/, (m) => `${m[2]} 中有 ${m[1]} 个捕获记录`],
  [/^updated (.+)$/, (m) => `更新于 ${m[1]}`],
  [/^Buffer filled to (.+) lines\.$/, (m) => `缓冲区已填充至 ${m[1]} 行。`],
  [/^(\d+) lines?(?: · (\d+) new while paused)?$/, (m) => `${m[1]} 行${m[2] ? ` · 暂停期间新增 ${m[2]} 行` : ""}`],
  [/^Schedule armed \((.+)\)\.$/, (m) => `计划任务已启用（${translateZh(m[1])}）。`],
  [/^Schedule disabled \((.+)\)\.$/, (m) => `计划任务已禁用（${translateZh(m[1])}）。`],
  [/^Saved: (.+)\. Applies on the next run\.$/, (m) => `已保存：${m[1]}。将在下次运行时生效。`],
  [/^Synced (\d+) fields?\. Applies on the next run\.$/, (m) => `已同步 ${m[1]} 个字段。将在下次运行时生效。`],
  [/^Remove (.+)$/, (m) => `移除 ${m[1]}`],
  [/^Exit (.+)$/, (m) => `退出码 ${m[1]}`],
  [/^(\d+) ok$/, (m) => `${m[1]} 个成功`],
  [/^(\d+) failed$/, (m) => `${m[1]} 个失败`],
  [/^(\d+) lines? buffered$/, (m) => `已缓冲 ${m[1]} 行`],
  [/^Resume \((\d+) new\)$/, (m) => `继续（新增 ${m[1]} 条）`],
  [/^Microsoft Rewards Dashboard:(.+)$/, (m) => `Microsoft Rewards 控制台：${m[1]}`],
  [/^Microsoft Rewards Script:(.+)$/, (m) => `Microsoft Rewards 脚本：${m[1]}`],
  [/^(\d+) days? left$/, (m) => `剩余 ${m[1]} 天`],
  [/^(\d+) days? current streak$/, (m) => `当前连续 ${m[1]} 天`],
  [/^(\d+) days?$/, (m) => `${m[1]} 天`],
  [/^(\d+) runs?$/, (m) => `${m[1]} 次运行`],
  [/^(\d+) items?$/, (m) => `${m[1]} 个项目`],
  [/^Protection (On|Off) · (.+)$/, (m) => `保护${m[1] === "On" ? "开启" : "关闭"} · ${translateZh(m[2])}`],
  [/^(.+) — seen in logs only$/, (m) => `${m[1]} — 仅在日志中发现`],
];

Object.assign(ZH_CN, {
  "Select all": "全选",
  "Run selected": "运行所选账户",
  "Batch run": "批量运行",
  "No log lines match the current filter.": "没有日志匹配当前筛选条件。",
  "Loading accounts configuration details…": "正在加载账户配置详情…",
  "Automatic runs": "自动运行",
  "Two schedulers are available — pick the one that fits your setup": "提供两种计划任务，请选择适合当前环境的一种",
  "Save schedule": "保存计划",
  "Discard changes": "放弃更改",
  "Current state": "当前状态",
  "No configured accounts are available.": "没有可用的已配置账户。",
  "No history yet": "暂无历史记录",
  "No accounts configured or observed yet.": "尚未配置或发现任何账户。",
  "Loading accounts configuration details…": "正在加载账户配置详情…",
  "Session management": "会话管理",
  "Error captures": "错误捕获",
  "Clearing sessions can fix most common login issues": "清除会话可解决大多数常见登录问题",
  "Run in progress": "正在运行",
  "Accounts Overview": "账户概览",
  "Every recorded balance, oldest to newest": "所有已记录余额，按时间从早到晚",
  "Parsed from the bot’s own log output": "从机器人的日志输出中解析",
  "How each run the control API launched actually ended": "控制 API 启动的每次运行最终如何结束",
  "No log lines match the current filter.": "没有日志匹配当前筛选条件。",
  "No error.txt in this capture.": "此捕获记录中没有 error.txt。",
  "Loading configured accounts…": "正在加载已配置账户…",
  "No configured accounts found.": "未找到已配置的账户。",
  "The bot must be idle to clear a session": "机器人必须处于空闲状态才能清除会话",
  "Nothing stored for this account yet": "此账户尚未存储会话",
  "No stored sessions": "没有已存储的会话",
  "Clear sessions": "清除会话",
  "Clearing…": "正在清除…",
  "Accounts tracked": "已跟踪账户",
  "Combined balance": "总积分余额",
  "Points earned last run": "上次运行获得积分",
  "Accounts in error": "异常账户",
  "Schedule (2 active)": "计划任务（2 个已启用）",
  "Schedule": "计划任务",
  "Last run": "上次运行",
  "Running now": "正在运行",
  "Trend": "趋势",
  "Loading…": "正在加载…",
  "Select": "选择",
  "Today": "今天",
  "Protection": "保护",
  "days unavailable": "天数不可用",
  "streak unavailable": "连续记录不可用",
  "days left": "天剩余",
  "Run only": "仅运行此账户",
  "Starting…": "正在启动…",
  "Saving…": "正在保存…",
  "Save changes": "保存更改",
  "Reload from API": "从 API 重新加载",
  "Reveal secrets": "显示敏感信息",
  "Raw config": "原始配置",
  "Settings": "设置",
  "Only the fields you actually change are sent": "只发送实际修改的字段",
  "Saves each change automatically. Applies on the next run.": "每项更改会自动保存，并在下次运行时生效。",
  "No runs recorded yet.": "尚无运行记录。",
  "No point history recorded yet.": "尚无积分历史记录。",
  "Process exits": "进程退出记录",
  "Points per day": "每日积分",
  "Date range": "日期范围",
  "Run history": "运行历史",
  "Status": "状态",
  "Started": "开始时间",
  "Duration": "时长",
  "Gained": "获得积分",
  "New total": "新总额",
  "Version": "版本",
  "Not scheduled": "未计划",
  "Disabled": "已禁用",
  "Not tracked here — see the Runs tab.": "此处不跟踪，请查看“运行记录”标签。",
  "Enter a 5-field cron expression.": "请输入 5 段 Cron 表达式。",
  "Cron runs inside the bot container itself — it fires even if this dashboard is offline, and simply doesn't fire while the container is stopped (so there's no missed-run policy to configure).": "Cron 在机器人容器内部运行，即使控制台离线也会触发；容器停止时不会触发，因此无需配置错过运行策略。",
  "This scheduler runs inside the dashboard's own process — it needs the dashboard container to be up to fire, but can recover a missed run according to the policy below.": "此计划任务在控制台自身进程中运行，需要控制台容器保持运行，并可根据下方策略恢复错过的运行。",
  "Times are evaluated in the scheduler's own timezone (dashboard: its TZ; bot container: its own TZ). If a scheduler's host was offline, the local scheduler applies its missed-run policy at startup — the container scheduler simply didn't fire.": "时间按照计划任务自身的时区计算（控制台：自身 TZ；机器人容器：自身 TZ）。如果计划任务主机离线，本地计划任务会在启动时应用错过运行策略；容器计划任务则不会触发。",
  "Accounts are configured in the bot's": "账户在机器人的",
  "The control API exposes full local email addresses but never sends passwords, recovery addresses, TOTP secrets, or proxy credentials.": "控制 API 会显示完整的本地邮箱地址，但绝不会发送密码、恢复地址、TOTP 密钥或代理凭据。",
  "Live logs": "实时日志",
  "0 lines buffered": "已缓冲 0 行",
  Level: "级别",
  All: "全部",
  "Info and up": "信息及以上",
  "Warnings and up": "警告及以上",
  "Errors only": "仅错误",
  Search: "搜索",
  Autoscroll: "自动滚动",
  Pause: "暂停",
  Resume: "继续",
  "Loading accounts configuration details…": "正在加载账户配置详情…",
  "Accounts are configured in the bot’s .env (ACCOUNT_N_*).": "账户在机器人的 .env（ACCOUNT_N_*）中配置。",
  "The control API exposes full local email addresses but never sends passwords, recovery addresses, TOTP secrets, or proxy credentials.": "控制 API 会显示完整的本地邮箱地址，但绝不会发送密码、恢复地址、TOTP 密钥或代理凭据。",
  "No data yet.": "暂无数据。",
  "No matching log lines.": "没有匹配的日志。",
  "The control API refused to reveal secrets.": "控制 API 拒绝显示敏感信息。",
  "Webhook URLs and tokens are shown as": "Webhook URL 和令牌显示为",
  "Saving never overwrites them": "保存不会覆盖它们",
  "only the fields you edit are sent": "只发送你编辑的字段",
  "To see and edit them": "要查看和编辑它们",
  "on the control API and tick": "在控制 API 中设置并勾选",
  "The bot rejected this config:": "机器人拒绝了此配置：",
  "Config writes are disabled on the control API.": "控制 API 已禁用配置写入。",
  "A run in progress will be stopped first.": "正在进行的任务会先停止。",
  "Run only ACCOUNT_": "仅运行 ACCOUNT_",
  "Loading configured accounts": "正在加载已配置账户",
  "The scheduler runs inside the dashboard’s own process": "此计划任务在控制台自身进程中运行",
  "Cron runs inside the bot container itself": "Cron 在机器人容器内部运行",
  "Times are evaluated in the scheduler’s own timezone": "时间按照计划任务自身的时区计算",
  "No accounts configured or observed yet": "尚未配置或发现任何账户",
  "Only clear a session if you're actually seeing login problems for that account.": "仅当该账户确实存在登录问题时才清除会话。",
  "Clear stored sessions for": "清除以下账户的已存储会话：",
  "This logs the account out immediately": "这会立即退出该账户",
  "it will need to sign back in": "下次运行时需要重新登录",
  "and re-approve 2FA if used": "如果使用 2FA，还需要重新批准",
  "Capture needs": "捕获记录需要",
  "Refresh": "刷新",
  "Download dump.html": "下载 dump.html",
  "Apply recommended filter": "应用推荐筛选器",
  "Adds the missing fields with their defaults. Your existing values are never changed.": "使用默认值添加缺失字段，不会更改现有值。",
  "Save each change automatically": "每项更改会自动保存",
  "This dashboard": "当前控制台",
  "Bot container (Docker cron)": "机器人容器（Docker cron）",
  "Run a second run": "启动第二个任务",
  "1 – Min": "1 — 最低",
  "2 – Low": "2 — 低",
  "3 – Default": "3 — 默认",
  "4 – High": "4 — 高",
  "5 – Max": "5 — 最高",
});

const textRecords = new WeakMap();
const attributeRecords = new WeakMap();
const TRANSLATED_ATTRIBUTES = ["aria-label", "title", "placeholder", "alt"];
const OBSERVER_OPTIONS = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: TRANSLATED_ATTRIBUTES,
};

let currentLocale = "en";
let observer = null;

function preferredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LOCALES.has(stored)) return stored;
  } catch {
  }
  const browserLocale = typeof navigator === "undefined" ? "en" : navigator.language;
  return browserLocale?.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

function translateZh(value) {
  const direct = ZH_CN[value];
  if (direct) return direct;
  for (const [pattern, replacer] of ZH_PATTERNS) {
    const match = value.match(pattern);
    if (match) return replacer(match);
  }
  return value;
}

export function translate(value) {
  if (value == null || currentLocale === "en") return value;
  const string = String(value);
  const leading = string.match(/^\s*/)?.[0] || "";
  const trailing = string.match(/\s*$/)?.[0] || "";
  const core = string.trim().replace(/\s+/g, " ");
  if (!core) return string;
  return leading + translateZh(core) + trailing;
}

export function getLocale() {
  return currentLocale;
}

export function getIntlLocale() {
  return currentLocale === "zh-CN" ? "zh-CN" : "en-US";
}

function translateTextNode(node) {
  if (
    node.parentElement?.closest(
      "script, style, textarea, pre, code, .log-line, [data-i18n-ignore]",
    )
  ) {
    return;
  }
  const value = node.nodeValue || "";
  let record = textRecords.get(node);
  if (!record || value !== record.rendered) {
    record = { original: value, rendered: value };
    textRecords.set(node, record);
  }
  const rendered = currentLocale === "en" ? record.original : translate(record.original);
  if (node.nodeValue !== rendered) node.nodeValue = rendered;
  record.rendered = rendered;
}

function translateAttribute(element, name) {
  if (!element.hasAttribute(name)) return;
  let records = attributeRecords.get(element);
  if (!records) {
    records = new Map();
    attributeRecords.set(element, records);
  }
  const value = element.getAttribute(name) || "";
  let record = records.get(name);
  if (!record || value !== record.rendered) {
    record = { original: value, rendered: value };
    records.set(name, record);
  }
  const rendered = currentLocale === "en" ? record.original : translate(record.original);
  if (value !== rendered) element.setAttribute(name, rendered);
  record.rendered = rendered;
}

function translateTree(root) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

  if (root.nodeType === Node.ELEMENT_NODE) {
    for (const name of TRANSLATED_ATTRIBUTES) translateAttribute(root, name);
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
    else for (const name of TRANSLATED_ATTRIBUTES) translateAttribute(node, name);
    node = walker.nextNode();
  }
}

function observe() {
  observer?.observe(document.documentElement, OBSERVER_OPTIONS);
}

function translateWithoutObserving(root) {
  observer?.disconnect();
  translateTree(root);
  observe();
}

export function setLocale(locale, { persist = true } = {}) {
  currentLocale = SUPPORTED_LOCALES.has(locale) ? locale : "en";
  document.documentElement.lang = currentLocale;
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, currentLocale);
    } catch {
    }
  }
  translateWithoutObserving(document.documentElement);
  document.dispatchEvent(new CustomEvent("localechange", { detail: { locale: currentLocale } }));
}

export function initI18n(select) {
  currentLocale = preferredLocale();
  if (select) {
    select.value = currentLocale;
    select.addEventListener("change", () => setLocale(select.value));
  }

  observer = new MutationObserver((mutations) => {
    observer.disconnect();
    for (const mutation of mutations) {
      if (mutation.type === "characterData") translateTextNode(mutation.target);
      if (mutation.type === "attributes") translateAttribute(mutation.target, mutation.attributeName);
      for (const node of mutation.addedNodes || []) translateTree(node);
    }
    observe();
  });

  document.documentElement.lang = currentLocale;
  translateTree(document.documentElement);
  observe();
}
