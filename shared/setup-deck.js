(function () {
  window.DECKS.setup.subtitle = "A practical setup routine for controlled agent work";
  window.DECKS.setup.slides = [
    {
      n: 14, min: 2, priority: "P1", layout: "agent-navigation", navStage: "context", navCurrent: ["context", "permissions"], navComplete: ["model"], image: "shared/assets/redesign/agent-system.png",
      title: "Meet the Claude App",
      subtitle: "Our environment for building and testing agents",
      objective: "Participants recognise the Claude app as the course development environment.",
      visual: "The shared agent map highlights the model and the context supplied through Claude Code.",
      action: "Introduce Claude Code without demonstrating interface controls yet.",
      items: ["Files", "Tools", "Commands", "Permissions", "Observed results"],
      conceptNotes: ["Project material supplies relevant working context.", "Available capabilities extend what Claude can inspect.", "Approved commands produce observable changes.", "Authority limits possible actions.", "Observed outcomes guide the next decision."],
      note: "Claude Code is the development environment used throughout this course. It combines a language model with access to a selected project, available tools, explicit permissions, and observable results. Participants will use it to build, configure, and test agents. This opening slide introduces the environment only; interface controls appear on later slides."
    },
    {
      n: 15, min: 3, priority: "P1", layout: "dual-view",
      title: "Claude Chat, Cowork or Code",
      subtitle: "Differences are sometimes blurry",
      objective: "Participants distinguish the typical roles of Chat Cowork and Code without treating them as rigid boundaries.",
      visual: "Three concise role cards switch to separate interface views for Code and the shared Chat and Cowork application.",
      action: "Compare one task across the three working modes and select the most suitable starting point.",
      items: ["Chat", "Cowork", "Code"],
      conceptNotes: ["Work with Claude turn by turn.", "Hand a larger piece of work to Claude.", "Combine delegated work with code creation and project tools."],
      note: "These modes overlap. Chat supports turn-by-turn collaboration. Cowork lets people hand off broader work. Code adds a development environment for creating code and working directly with projects. Select the interface that best matches the work rather than treating the categories as absolute."
    },
    {
      n: 16, min: 3, priority: "P1", layout: "dual-view",
      title: "Choose where Code runs",
      subtitle: "Local and cloud sessions use different computers",
      objective: "Participants identify which computer owns the files and runs commands.",
      visual: "A conceptual comparison switches to the execution selector screenshot.",
      action: "Identify the execution computer before installing software or locating files.",
      items: ["Your computer", "Remote computer"],
      conceptNotes: ["Local uses folders installations and permissions on the participant device.", "Cloud uses a remote filesystem tools installations and permissions."],
      note: "Local and cloud sessions can look similar while operating on different computers. A local session uses the participant device its folders and its installed software. A cloud session runs remotely with separate files and installations. This explains the first-cohort confusion where participants installed software locally while working in cloud sessions. Confirm the execution selector before setup or troubleshooting."
    },
    {
      n: 17, min: 3, priority: "P1", layout: "dual-view",
      title: "Set Safe Permissions",
      subtitle: "Keep approval visible with manual mode",
      objective: "Participants select Manual so consequential permission decisions remain visible and reviewable.",
      visual: "A clear recommendation switches to the permission controls in Code and Cowork.",
      action: "Select Manual in Code or Manually approve in Cowork before practical work begins.",
      items: ["Manual", "Auto", "Bypass"],
      conceptNotes: ["Manual asks before changes and keeps authority visible.", "Auto delegates permission decisions to Claude.", "Bypass accepts every permission and is unsuitable for this workshop."],
      note: "Use Manual during the workshop so participants can inspect and understand permission requests. Auto delegates permission decisions to Claude, while Accept edits automatically accepts file edits and Bypass permissions accepts all permissions. Those modes reduce or remove the decision points this course is designed to teach. The exact labels may change, so demonstrate the live menu rather than relying only on the screenshot."
    },
    {
      n: 18, min: 5, priority: "P1", layout: "dual-view",
      title: "Create One Project Home",
    subtitle: "Keep each project separate and visible",
      objective: "Participants create a dedicated local folder and select it explicitly as the active Claude Code project.",
      visual: "The project boundary switches to the Web Builder project selectors in Code and Cowork.",
      action: "Create the folder then confirm Web Builder is selected before beginning project work.",
      items: ["Purpose", "Instructions", "Files", "History"],
      conceptNotes: ["One stated purpose keeps work coherent.", "Project guidance stays with the relevant work.", "Only relevant working material belongs inside.", "Version history makes changes inspectable and recoverable."],
      note: "Create a separate non-sensitive local folder for each project. Confirm that Web Builder is selected in Code or Cowork before beginning practical work. Do not create the workshop project inside OneDrive, Google Drive, or another synchronised folder because synchronisation can complicate change tracking. Do not assume that installing the desktop application alone creates every local configuration file. The web version does not create a local ~/.claude folder on the participant computer. On macOS ~/.claude is inside the user home folder. On Windows it is normally %USERPROFILE%\\.claude unless CLAUDE_CONFIG_DIR changes the location. In Finder choose Finder > Settings > Sidebar and enable the user home folder under Favourites. If the sidebar is hidden choose View > Show Sidebar. Dot-prefixed folders are hidden by default; press Command Shift period to reveal or hide them."
    },
    {
      n: 19, min: 4, priority: "P1", layout: "dual-view",
      title: "Match Model To Task",
      subtitle: "Use enough capability without paying for unused power",
      objective: "Participants choose a sensible starting model and adjust capability or effort when needed.",
      visual: "A delivery analogy switches to current model and effort controls in Code and Cowork.",
      action: "Choose a starting model for a simple rewrite and a difficult multi-file task.",
      items: ["Start balanced", "Move up", "Add effort"],
      conceptNotes: ["Begin with the balanced model when limits or cost matter.", "Use the strongest model when quality matters more than usage.", "Increase capability when evaluation shows the result remains inadequate."],
      note: "Choose capability in proportion to the task. A bicycle can deliver one envelope, a van can carry several boxes, and a freight truck suits a heavy load. The largest option can complete smaller jobs, but it consumes more resources than necessary. For beginners a balanced model such as Sonnet is a sensible default when subscription limits or credits matter. Move to a more capable model such as Opus when complexity, consequence, or repeated weak results justify it. Model names, availability, limits, and billing change, so verify the live selector before delivery."
    },
    {
      n: 20, min: 3, priority: "P1", layout: "dual-view",
      title: "Turn Corrections Into Memory",
      subtitle: "Save recurring preferences for future sessions",
      objective: "Participants distinguish a one-off correction from guidance that should persist across future sessions.",
      visual: "Repeated correction becomes persistent guidance; a Practice tab supplies a safe copyable instruction.",
      action: "Copy the practice prompt and save the preference as user-level guidance.",
      items: ["Repeated correction", "Persistent guidance", "Future sessions"],
      conceptNotes: ["Repeated feedback indicates a durable preference.", "Store persistent guidance at the appropriate project or user scope.", "Future sessions receive the saved guidance when that scope loads."],
      note: "Claude Code sessions begin with fresh context. Repository auto memory can carry selected learnings across sessions for the same repository. A preference intended for every project belongs in user-level guidance such as ~/.claude/CLAUDE.md, not project-only auto memory. Memory and instruction files enter context; neither is a security control."
    },
    {
      n: 21, min: 4, priority: "P1", layout: "dual-view",
      title: "Write Project Guidance",
      subtitle: "Turn a Rough Brief into Robust Instructions",
      objective: "Participants use a guided interview to create a reusable company description for future website-building prompts.",
      visual: "The existing guidance structure switches to one copyable interview-and-create prompt.",
      action: "Add the starting details, copy the prompt, answer up to five questions, and approve the summary.",
      items: ["Project purpose", "Background", "References", "Desired outputs"],
      conceptNotes: ["Provide a small amount of known business information to begin.", "Claude asks no more than five focused questions, one at a time.", "Claude must not invent missing facts.", "The participant confirms the summary before Claude creates the reusable file."],
      note: "The Practice prompt starts with known business information, then asks Claude to interview the participant with no more than five focused questions asked one at a time. Claude must not invent missing facts. Once the participant confirms the structured summary, Claude creates My_Company_description.md in the current project folder for reuse in later website-building prompts."
    },
    {
      n: 22, min: 3, priority: "P2", layout: "dual-view",
      title: "Reuse Methods With Skills",
      subtitle: "Load a repeatable procedure only when needed",
      objective: "Participants understand skills as reusable procedures and can install and invoke Anthropic's frontend-design skill.",
      visual: "The explanation switches to the skills library and a two-step install-and-use practice.",
      action: "Open the skills library, install frontend-design, then invoke it for the web builder exercise.",
      items: ["What it does", "When useful", "What it returns"],
      conceptNotes: ["A skill packages specialist instructions for a recurring task.", "The skills library shows which procedures are available.", "Install the official frontend-design plugin before invoking its skill."],
      note: "Use /skills to open the skills library. Install Anthropic's official frontend-design plugin with /plugin install frontend-design@claude-plugins-official. Then invoke /frontend-design:frontend-design for the web builder exercise."
    },
    {
      n: 23, min: 4, priority: "P1", layout: "context-images",
      title: "Context Needs The Right Dose",
      subtitle: "Enough relevant information without noise or contradiction",
      objective: "Participants choose the smallest sufficient set of relevant, current, and non-conflicting information.",
      visual: "Three suitcases compare too little context, focused context, and too much context.",
      action: "Choose the context package that best supports the task.",
      items: ["Too little", "Focused", "Too much"],
      conceptNotes: ["Too little context forces the model to guess.", "Focused context supplies only what the task needs.", "Too much context can introduce noise and contradictions."],
      note: "Treat context like packing for a trip. An empty bag leaves you unprepared. A carefully organised bag contains what you need. An overloaded bag makes the useful items harder to find. The goal is not the most context; it is the smallest sufficient set of relevant, current, and non-conflicting information."
    },
    {
      n: 24, min: 4, priority: "P1", layout: "dual-view",
      title: "Understand Session Context",
      subtitle: "Inspect what is loaded before the model responds",
      objective: "Participants identify four project-controlled context sources and inspect available capacity.",
      visual: "Instructions, memory, files, and skills enter one working context; the interface view shows context usage.",
      action: "Inspect the loaded context before starting a consequential task.",
      items: ["Instructions", "Memory", "Files", "Skills"],
      conceptNotes: ["Instructions shape how the work should be done.", "Memory carries relevant persistent guidance.", "Files provide project-specific source material.", "Skills add reusable procedures when invoked."],
      note: "For this workshop, focus on four project-controlled context sources: instructions, memory, selected files, and invoked skills. Use the context view to inspect what loaded and how much capacity remains. These sources do not form one simple universal priority list. Avoid contradictions. The context indicator shows capacity, not relevance or quality."
    },
    {
      n: 25, min: 3, priority: "P2", layout: "agent-navigation", navStage: "tools", navCurrent: ["tools"], navComplete: ["model", "context", "permissions"], image: "shared/assets/redesign/agent-system.png",
      title: "Tools Expand Agent Reach",
      subtitle: "Connections require identity scope limits and revocation",
      objective: "Participants understand how MCPs and connectors expose external tools or data.",
      visual: "The shared agent map adds tools while keeping the model and context visible.",
      action: "Run /mcp, inspect available connectors, and identify identity scope and revocation before connecting.",
      items: ["Gmail", "Google Drive", "Microsoft 365"],
      conceptNotes: ["Email access can expose messages contacts and actions.", "Drive access can expose files beyond the project folder.", "Office access can expose documents mail calendars or organizational data."],
      note: "MCP servers and connectors expose tools or data from external services. Type /mcp to inspect configured MCP servers in Claude Code. In the Desktop app, Customize > Connectors shows available account connectors. Before connecting, identify the service, authorising identity, readable and writable scope, and revocation path. Start with one contained read-only example rather than broad account access."
    },
    {
      n: 26, min: 3, priority: "P2", layout: "dual-view",
      title: "MCP Connects External Services",
      subtitle: "A standard bridge exposes approved tools and data",
      objective: "Participants understand MCP as a standard connection between Claude and approved external services.",
      visual: "A three-part explanation switches to a copyable command and the Claude Connectors interface.",
      action: "Run /mcp, inspect available connectors, and review identity scope and permissions before connecting.",
      items: ["Claude", "MCP", "Services"],
      conceptNotes: ["Claude requests an external capability.", "MCP provides a standard connection to the service.", "The connected service returns authorised tools or data."],
      note: "Model Context Protocol provides a standard way for Claude to discover and use tools or data exposed by connected services. A connection still depends on the authorised identity, available scope, and permissions. Type /mcp to inspect connections, then confirm what the service can read or change before authorising it."
    },
    {
      n: 27, min: 3, priority: "P1", layout: "boxes-below",
      title: "Check Before Every Task",
      subtitle: "Confirm location folder model context authority and recovery",
      objective: "Participants repeat one practical preflight check before every new task.",
      visual: "Six compact checks form one horizontal preflight sequence.",
      action: "Run the six checks on the current session before beginning practical work.",
      items: ["Location", "Folder", "Model", "Context", "Authority", "Recovery"],
      conceptNotes: ["Know which computer runs the work.", "Confirm the intended project boundary.", "Match capability and effort to the task.", "Inspect relevant available information.", "Understand the permissions currently granted.", "Keep an inspectable way to undo changes."],
      note: "Before every task confirm the execution computer the intended project folder a suitable model and effort level the active context the authority granted and a recovery method. This routine should become habitual rather than remain a classroom checklist. Stop when any answer is uncertain and correct the setup before prompting."
    }
  ];
})();
