window.DECKS = {
  orientation: {
    title: "Orientation",
    duration: 20,
    theme: "studio",
    subtitle: "From unexplained AI use to informed control",
    slides: [
      {
        n: 1, min: 2, priority: "P1", layout: "lab-hero", theme: "cinematic", eyebrow: "Lab 1", image: "shared/assets/redesign/lab1-informed-control.png",
        title: "Use Your First Agent",
        objective: "Participants understand that Lab 1 replaces unexplained AI use with deliberate inspection and informed decisions.",
        subtitle: "From Magic to Informed Control",
        visual: "A human turns an unexplained field of possibilities into visible signals and deliberate controls.",
        action: "Ask for one word describing how AI currently feels.",
        items: [],
        note: "Lab 1 moves from useful but unexplained AI output towards informed control. Participants develop enough practical understanding to inspect what shaped a result, what information and authority the system received, what evidence supports the output, and what still requires human judgement. The aim is independent use rather than technical expertise for its own sake."
      },
      {
        n: 2, min: 4, priority: "P1", layout: "harness-choice", theme: "cinematic", image: "shared/assets/redesign/harness-work-modes.png",
        title: "Models and Harnesses",
        objective: "Participants distinguish the predictive model from the harness that makes the model practical to use.",
        subtitle: "Harnesses shape how people use a model",
        visual: "A model and a harness combine before three Claude working environments appear as examples.",
        action: "Define both terms before comparing the three Claude environments.",
        items: ["Claude Chat", "Claude Cowork", "Claude Code"],
        conceptNotes: ["Claude harness for conversational work.", "Claude harness for multi-step desktop work.", "Claude harness for technical project work."],
        note: "A model is the predictive engine: it processes the supplied context and generates likely continuations. A harness is the surrounding software that makes that model practical by assembling context, exposing tools, controlling access, managing permissions, and presenting results. Claude Chat, Claude Cowork, and Claude Code are different harnesses around model capability. Their capabilities overlap, so participants should choose according to the task, required access, and desired control rather than treat any product as suitable for only one activity."
      },
      {
        n: 3, min: 3, priority: "P1", layout: "agent-navigation", theme: "cinematic", navStage: "all", navCurrent: [], navComplete: ["model", "context", "tools", "human", "permissions"], image: "shared/assets/redesign/agent-system.png",
        title: "Building AI Agents",
        objective: "Participants recognise the five components the course will progressively make visible and controllable.",
        subtitle: "Five components guide our work with AI",
        visual: "The complete agent appears with all five course components equally visible.",
        action: "Preview the five components without teaching them in detail yet.",
        items: ["Model", "Context", "Tools", "Human judgement", "Permissions"],
        note: "This is the course map. The model supplies predictive capability. Context makes work relevant. Tools extend what the system can inspect or do. Human judgement sets direction and evaluates consequences. Permissions limit authority. Every component begins muted. The opening slide of each later section reuses this exact image and brings the relevant component into focus while completed components remain visible."
      },
      {
        n: 4, min: 3, priority: "P1", layout: "agent-quartet", theme: "cinematic",
        title: "Meet Your Four Agents",
        objective: "Participants recognise the four practical agents they will adapt to their own company role or project.",
        subtitle: "Apply each agent to your own work",
        visual: "Four professional scenes preview the practical agents participants will build.",
        action: "Ask participants which agent could create useful evidence or output first.",
        items: ["Lab 1: Web Builder", "Lab 2: Ops Assistant", "Lab 3: SEO Marketer", "Lab 4: Lead Builder"],
        conceptNotes: ["Build and improve a web presence.", "Organise priorities tasks and follow-up.", "Research search opportunities and improve visibility.", "Identify and organise potential customers."],
        note: "The practical programme centres on four reusable roles. The Web Builder creates and improves a simple web presence. The Ops Assistant organises work, priorities, and follow-up. The SEO Marketer researches search opportunities and improves discoverability. The Lead Builder identifies and organises potential customers without replacing human qualification. Participants apply every agent to their own company, role, or project rather than a fictional shared business."
      },
      {
        n: 5, min: 5, priority: "P1", layout: "deployment-environment", theme: "cinematic",
        title: "Build Then Deploy",
        objective: "Participants distinguish building in Claude Code from deploying an application or scheduling recurring work.",
        subtitle: "Building and running are different stages",
        visual: "Claude Code builds the work before three routes make it available or repeatable.",
        action: "Contrast building deploying and scheduling before participants choose a destination.",
        items: ["Claude Code", "Platform", "Schedules", "Artifacts"],
        conceptNotes: ["Build the project and its instructions.", "Run managed applications and agent services.", "Run recurring work at defined times.", "Publish interactive tools people can use."],
        note: "Claude Code is the development harness used in this course. Building the instructions, skills, files, and application is separate from making the finished work available. Platform at platform.claude.com supports managed applications and agent services. Scheduled work can run recurring tasks at defined times. Artifacts can publish interactive tools for other people to use. Third-party deployment remains possible but sits outside this introductory overview. Choose the route according to what must run, who needs it, and whether the work must repeat automatically."
      },
      {
        n: 6, min: 3, priority: "P1", layout: "practice-gallery", theme: "cinematic",
        title: "Learn by Doing",
        objective: "Participants understand that confidence with AI comes from repeated practice reflection and recovery rather than observation alone.",
        subtitle: "Practice builds confidence theory cannot replace",
        visual: "Three consistent images show riding a fall and standing ready to continue.",
        action: "Set the expectation that participants will attempt test correct and continue throughout the course.",
        items: ["Try", "Adjust", "Continue"],
        note: "AI capability develops through practice. Explanations, demonstrations, and instructor support reduce confusion, but they cannot replace participants making decisions and trying the work themselves. Like learning to ride a bicycle, progress includes attempts, mistakes, adjustment, and renewed effort. The analogy concerns practice and confidence only. AI work still requires evidence, security boundaries, and deliberate human judgement."
      }
    ]
  },

  theory: {
    title: "AI 101",
    duration: 30,
    theme: "cinematic",
    subtitle: "The minimum mental model needed for practical control",
    slides: [
      {
        n: 7, min: 2, priority: "P1", layout: "agent-navigation", navStage: "model", navCurrent: ["model"], navComplete: [], image: "shared/assets/redesign/agent-system.png",
        title: "Five Components Guiding Our Work",
        objective: "Participants reconnect AI 101 to the five-component course map before focusing on the model.",
        subtitle: "",
        visual: "The course map highlights the model without allowing the title to overlap any component.",
        action: "Reconnect the five components then identify the model as the focus of AI 101.",
        items: ["AI", "Machine learning", "Generative AI", "Language model", "Agent"],
        conceptNotes: ["The broad field of intelligent computer systems.", "Systems learn patterns from examples.", "Learned patterns generate new content.", "Predicts likely language continuations.", "Combines a model with context tools and controls."],
        note: "AI is the broad field. Machine learning develops behaviour from data. Generative AI produces new content from learned statistical patterns. A language model predicts likely continuations rather than retrieving a guaranteed answer. An agent combines a model with instructions, context, tools, permissions, and human judgement. The purpose of this opening is to replace unexplained magic with a practical prediction model; the internal units used to process language are defined on the next slide."
      },
      {
        n: 8, min: 3, priority: "P1", layout: "tokens", image: "shared/assets/ai-tokenisation-v2.png",
        title: "Models process tokens",
        objective: "Participants understand tokens as the units consumed and generated by a text model.",
        subtitle: "Text becomes pieces then numbers",
        visual: "A cinematic tokenisation machine complements an interactive text-to-pieces-to-numbers demonstration.",
        action: "Reveal the split, compare the identifiers, then generate one answer token per click.",
        items: ["Text", "Token pieces", "Token IDs", "Generated answer"],
        conceptNotes: ["The original sentence supplied to the model.", "Words or fragments created by a model-specific tokenizer.", "Numerical identifiers the model can process.", "Each new piece is generated from the preceding sequence."],
        note: "A token is a unit created by a model-specific tokenizer. It may be a word, part of a word, punctuation, or code fragment. Tokenisation divides text into these pieces and maps each piece to a numerical identifier. The displayed identifiers are illustrative because exact splits and identifiers differ between models. The generation control then shows that an answer starts empty and grows one token at a time from the preceding sequence."
      },
      {
        n: 9, min: 5, priority: "P1", layout: "training", image: "shared/assets/ai-training.png",
        title: "Training improves through correction",
        objective: "Participants can narrate one simplified training cycle and place tokens, loss, and parameter updates correctly.",
        subtitle: "Loss guides repeated parameter updates",
        visual: "Interactive training console over a cinematic training machine.",
        action: "Advance from gibberish to Canberra, then reveal the subjective city question.",
        items: ["Question", "Target answer", "Model prediction", "Prediction loss", "Parameter changes"],
        conceptNotes: ["One simplified example from a much larger training dataset.", "The expected continuation used to calculate error.", "The model output at the current illustrative stage.", "The objective measures mismatch with the expected output.", "Small numerical updates reduce error across many examples."],
        note: "This animation is a teaching metaphor, not measured training telemetry. The model receives tokenised examples, predicts a target token, and compares its probability distribution with the target. A loss function represents the error. Backpropagation calculates how parameters contributed to that error, and an optimiser applies small updates across many examples and batches. The sequence does not mean the model stores Canberra after four repetitions. ‘Best city’ has no single objective target and appears only as the audience challenge.",
        exercise: "Advance the four illustrative stages. After each stage, ask what changed: the output, the loss signal, or the parameters. Reveal that the display compresses countless training updates into four moments.",
        debrief: "Correct answer: parameters change during training; the loss supplies the optimisation signal. The prompt is not stored as a labelled fact, and one repeated question would not create a capable model."
      },
      {
        n: 10, min: 6, priority: "P1", layout: "parameters",
        title: "Parameters store learned patterns",
        objective: "Participants distinguish parameters from stored facts, files, rules, context, and memory.",
        subtitle: "Training organises numbers across many matrices",
        visual: "The final illuminated training matrix transforms the familiar prompt tokens into reply-token representations.",
        action: "Connect the final training calibration to the matrix used during inference.",
        items: ["Parameter matrix", "Prompt tokens", "Reply tokens"],
        conceptNotes: ["Learned numerical values shape every prediction.", "Words map to model-specific token identifiers.", "Generated words also correspond to token identifiers."],
        note: "Parameters are learned numerical values organised across many matrices. This simplified visual carries the final illuminated matrix from training into inference, then reconnects it to the prompt and answer introduced on the token slide. The word-and-number columns show illustrative token identifiers, not the embedding vector values multiplied directly by the matrix. In a real model, token identifiers are mapped to high-dimensional vectors, transformed through many matrices and layers, and converted into probabilities for possible next tokens."
      },
      {
        n: 11, min: 6, priority: "P1", layout: "flow",
        title: "Inference uses fixed parameters",
        objective: "Participants explain how a prompt becomes a sequence of predicted output tokens without normally retraining the model.",
        subtitle: "Fixed parameters turn context into possible continuations",
        visual: "The capital-city prompt becomes token numbers, passes through the same fixed matrix, and produces next-token probabilities.",
        action: "Trace the loop and clarify that percentages rank next tokens, not factual truth.",
        items: ["Prompt", "Token vectors", "Fixed parameters", "Next token", "Select and repeat"],
        conceptNotes: ["The supplied prompt begins this simplified inference example.", "Tokens become numerical representations that layers can transform.", "Learned matrices remain unchanged during ordinary inference.", "Percentages compare possible next tokens, not factual confidence.", "The selected token rejoins context before prediction repeats."],
        note: "Inference is the model’s use phase. The exact earlier prompt—‘What is the capital of Australia?’—is tokenised, converted into numerical representations, and processed through fixed learned parameters. The displayed token identifiers and probability values are illustrative. Canberra is overwhelmingly likely in this simplified example, but next-token probability is not a general measure of factual truth. The selected token joins the context and the process repeats without normally changing the model’s parameters."
      },
      {
        n: 12, min: 5, priority: "P1", layout: "probability",
        title: "Why answers can vary",
        objective: "Participants connect output variation to probability distributions and token selection.",
        subtitle: "Sampling allows variation among plausible next words",
        visual: "The subjective best-city question produces several plausible city continuations in one probability distribution.",
        action: "Contrast this subjective question with the earlier capital-city question.",
        items: ["Sydney 34%", "Melbourne 31%", "Adelaide 19%", "Brisbane 16%"],
        conceptNotes: ["Several cities remain plausible continuations.", "Sampling may select another strong candidate.", "Probability does not settle subjective judgement.", "Variation remains expected across repeated runs."],
        note: "‘What is Australia’s best city?’ has no single objective target. The displayed probabilities are illustrative and show several plausible continuations rather than measured model output. Generation settings can allow selection among plausible candidates, so repeated runs may differ. This flexibility supports creative work, but probability cannot resolve a subjective judgement or establish factual truth.",
        exercise: "Compare the capital-city and best-city questions. Identify which has an externally verifiable answer and which requires criteria or personal judgement.",
        debrief: "The capital question can be checked against evidence. The best-city question requires explicit criteria and may still support several reasonable answers."
      },
      {
        n: 13, min: 3, priority: "P1", layout: "compare",
        title: "Plausible is not proven",
        objective: "Participants understand why fluent output cannot establish accuracy, currency, completeness, or suitability.",
        subtitle: "Confident language can still carry false claims",
        visual: "A polished but false Olympic claim is checked and visibly corrected.",
        action: "Let participants judge the answer before revealing the verified correction.",
        items: ["Confident answer", "Verified correction"],
        conceptNotes: ["Fluent wording can conceal an unsupported claim.", "Evidence can overturn a confident answer."],
        note: "A model can produce a statistically plausible continuation that is wrong, outdated, incomplete, biased, or inappropriate. Confidence in the writing style is not confidence in the claim. Verification may require primary sources, calculations, deterministic rules, tests, domain expertise, or a human decision, depending on the consequence of error."
      }
    ],
    archivedSlides: [
      {
        originalN: 15, min: 2, priority: "P1", layout: "context-images",
        title: "Context needs the right dose",
        objective: "Participants choose the smallest sufficient set of relevant, current, non-conflicting information.",
        subtitle: "Enough relevant information without noise or contradiction",
        visual: "Three suitcases show an empty package, essential contents, and overwhelming clutter.",
        action: "Choose the best of three context packages and explain why.",
        items: ["Too little", "Focused", "Too much"],
        conceptNotes: ["Missing facts force guesses and increase ambiguity.", "Relevant information concentrates attention on the actual task.", "Duplicated or conflicting material can obscure important signals."],
        note: "Relevant context can improve an answer, but performance does not rise with every added token. An almost empty suitcase lacks what the task requires. A deliberately packed suitcase contains the relevant essentials. An overstuffed suitcase makes useful items harder to locate and includes unrelated clutter. The comparison concerns relevance and sufficiency, not merely raw token quantity. Use the smallest sufficient high-signal context and compact deliberately when the session becomes noisy."
      }
    ]
  },

  setup: {
    title: "Claude Code Setup",
    duration: 50,
    theme: "cinematic",
    subtitle: "A repeatable pre-work routine for quality, safety, and recovery",
    slides: [
      {
        n: 14, min: 2, priority: "P1", layout: "agent-navigation", navStage: "context", image: "shared/assets/redesign/agent-system.png",
        title: "Meet the Claude App",
        objective: "Participants recognise the Claude app as the course development environment.",
        subtitle: "Our environment for building and testing agents",
        visual: "The shared agent map now highlights the model and the context supplied through Claude Code.",
        action: "Return to the orientation system map and add the Claude Code layer.",
        items: ["Files", "Tools", "Commands", "Permissions", "Observed results"],
        conceptNotes: ["Project material supplies relevant working context.", "Available capabilities extend what Claude can inspect.", "Approved commands produce observable changes.", "Authority limits possible actions.", "Observed outcomes guide the next decision."],
        note: "Claude Code combines a model with an operating environment. It can inspect project files, use available tools, run approved commands, observe results, and continue. This makes it useful for multi-step project work, but it also makes execution location, project boundaries, context, authority, and recovery part of every task."
      },
      {
        n: 15, min: 3, priority: "P1", layout: "dual-view",
        title: "Claude Chat, Cowork or Code",
        objective: "Participants distinguish the typical roles of Chat Cowork and Code without treating them as rigid boundaries.",
        subtitle: "Differences are sometimes blurry",
        visual: "Three concise role cards switch to separate interface views for Code and the shared Chat and Cowork application.",
        action: "Compare one task across the three working modes and select the most suitable starting point.",
        items: ["Chat", "Cowork", "Code"],
        conceptNotes: ["Work with Claude turn by turn.", "Hand a larger piece of work to Claude.", "Combine delegated work with code creation and project tools."],
        note: "These modes overlap. Chat supports turn-by-turn collaboration. Cowork lets people hand off broader work. Code adds a development environment for creating code and working directly with projects. Select the interface that best matches the work rather than treating the categories as absolute."
      },
      {
        n: 16, min: 4, priority: "P1", layout: "folder",
        title: "Create One Project Home",
        objective: "Participants create a dedicated, non-sensitive project folder and understand why it matters beyond the classroom.",
        subtitle: "One visible folder prevents unrelated files entering work.",
        visual: "A clean folder tree for Mac and Windows with unrelated locations outside the boundary.",
        action: "Create and name a training folder that contains no confidential information.",
        items: ["Mac project", "Windows project", "Sync awareness"],
        conceptNotes: ["A known local path makes project scope visible.", "A dedicated Windows path prevents accidental cross-project access.", "Known synchronisation behaviour prevents confusing or duplicated changes."],
        note: "The durable rule is not a universal ban on Desktop or Documents. It is to choose a location whose permissions, backup, synchronisation, and access behaviour are understood. Separate projects prevent unrelated files and instructions from entering the task. Do not place real credentials or sensitive company data in the training folder."
      },
      {
        n: 17, min: 4, priority: "P1", layout: "activity",
        title: "Check Before You Prompt",
        objective: "Participants inspect the displayed path and visible files before authorising changes.",
        subtitle: "Verify the path, files, and intended project.",
        visual: "Two nearly identical folders with one highlighted path mismatch.",
        action: "Open the folder, inspect the path and files, then correct a deliberate mismatch.",
        items: ["Current path", "Visible files", "Project match", "Stop on mismatch"],
        conceptNotes: ["The path reveals which folder receives the work.", "Expected files confirm you opened the intended project.", "Matching purpose and contents prevents plausible wrong-folder work.", "Stopping early prevents unwanted edits and confused context."],
        note: "Participants in the first cohort sometimes created work without knowing which folder was active. The pre-work habit is simple: confirm the execution environment, read the current path, inspect the visible files, and compare them with the intended project. Repeat this at the start of every task, not only during setup.",
        exercise: "Prepared mismatch: the intended project is ‘customer-research’, but the session path ends in ‘website-draft’ and the visible files include index.html instead of research-brief.md.",
        debrief: "Stop before prompting. Open the intended folder, then confirm both the displayed path and expected files. A plausible folder name alone is insufficient."
      },
      {
        n: 18, min: 3, priority: "P1+P2", layout: "choice",
        title: "Match Model To Task",
        objective: "Participants understand the practical trade-off among capability, speed, cost, and availability.",
        subtitle: "Balance capability, speed, cost, and consequence.",
        visual: "A task ladder aligned to lightweight, balanced, and higher-capability model categories.",
        action: "Choose a model category for a rewrite and for a difficult multi-file diagnosis.",
        items: ["Fast model", "Balanced model", "Capable model"],
        conceptNotes: ["Prioritises speed and cost for simple, reversible work.", "Balances quality and responsiveness for routine project tasks.", "Adds reasoning capacity for complex or consequential work."],
        note: "Model names, selectors, limits, and prices change. Teach the decision rather than memorising a product list. A simple rewrite may favour speed. A difficult, consequential, or multi-file task may justify a more capable model. Distinguish product subscriptions or included usage from developer-platform API billing and separately purchased credits. Current availability, limits, and billing must be verified immediately before delivery."
      },
      {
        n: 19, min: 4, priority: "P1", layout: "context",
        title: "Inspect Active Context",
        objective: "Participants identify active instructions, conversation, files, and tool results without assuming the agent sees everything.",
        subtitle: "The model sees supplied information, not your whole computer.",
        visual: "A context window fills from labelled sources while unrelated material stays outside.",
        action: "Inspect the active project and available context indicators.",
        items: ["System instructions", "Conversation messages", "Selected files", "Tool results", "Compacted history"],
        conceptNotes: ["Higher-level rules shape every response and available behaviour.", "Conversation turns establish the current request and decisions.", "Included files supply project-specific evidence and constraints.", "Observed results let the agent react to real outcomes.", "Compression preserves essentials while discarding some conversational detail."],
        note: "The application assembles context for the model. It may include built-in instructions, project guidance, conversation messages, selected files, and tool results. The model does not automatically know every file or earlier conversation. Participants should inspect context when output appears to ignore a rule, rely on stale information, or become confused."
      },
      {
        n: 20, min: 4, priority: "P1", layout: "document",
        title: "Write Stable Project Guidance",
        objective: "Participants create or inspect a concise CLAUDE.md containing only always-relevant project guidance.",
        subtitle: "Keep enduring instructions concise, current, and reusable.",
        visual: "A short instruction document with purpose, boundaries, and completion criteria.",
        action: "Add three lines: project purpose, safety boundary, and definition of done.",
        items: ["Project purpose", "Safety boundary", "Quality rule", "Done criteria"],
        conceptNotes: ["A shared purpose keeps tasks aligned with project intent.", "Explicit limits prevent access or actions beyond scope.", "Stable standards make outputs consistently reviewable and useful.", "Clear completion conditions prevent premature stopping or endless work."],
        note: "CLAUDE.md gives Claude Code durable project guidance. It should remain concise, current, and relevant across tasks. A one-off request still belongs in the prompt. Review instruction files for contradictions, duplicated rules, and superseded decisions because stale guidance can shape every later interaction. Other tools use different instruction mechanisms."
      },
      {
        n: 21, min: 4, priority: "P2", layout: "layers",
        title: "Context Has Layers",
        objective: "Participants understand that built-in instructions, project guidance, skills, messages, files, and tool results enter differently.",
        subtitle: "Different sources enter at different times and scopes.",
        visual: "Layered sources enter the current session at different moments.",
        action: "Label which sources are persistent, invoked, supplied, or produced during work.",
        items: ["System baseline", "Project guidance", "Invoked skills", "Current materials", "Tool results"],
        conceptNotes: ["Service rules establish the highest-level operating constraints.", "Directory-scoped instructions keep local work consistent.", "Specialist methods load only when the task needs them.", "Messages and selected files supply immediate working information.", "Observed outcomes become new evidence for the next step."],
        note: "Teach the shared model rather than claiming a fixed universal reading order. Built-in instructions establish a baseline. Project instructions apply by product and directory scope. Skill bodies load when invoked. Messages, selected files, and tool results accumulate during the session. A plugin is packaging, not a separate context layer. Verify current Claude Code behaviour before teaching exact precedence."
      },
      {
        n: 22, min: 3, priority: "P2", layout: "method",
        title: "Skills Package Methods",
        objective: "Participants distinguish an invoked specialist method from persistent project instructions.",
        subtitle: "Load specialist procedures only when their method is needed.",
        visual: "A project calls one specialist method from a shelf of reusable procedures.",
        action: "Inspect one simple skill and identify its trigger, method, and output.",
        items: ["Activation trigger", "Reusable method", "Supporting resources", "Expected output"],
        conceptNotes: ["A clear trigger loads the skill only when relevant.", "Repeatable steps improve consistency across similar tasks.", "Templates and references prevent reinvention and unsupported assumptions.", "A defined output makes completion easy to assess."],
        note: "A skill packages instructions and supporting resources for a recurring task. It should be loaded when relevant rather than bloating every project interaction. Project instructions describe durable local rules. A skill describes a reusable method. Product implementations vary, so the course should use one concrete example rather than an exhaustive catalogue.",
        exercise: "Inspect a prepared ‘source-check’ skill. Trigger: a research claim needs validation. Method: locate the cited source, separate evidence from inference, and report unsupported claims. Output: a short claim-evidence table.",
        debrief: "The project instructions say when evidence is required. The skill supplies the repeatable checking method only when invoked."
      },
      {
        n: 23, min: 2, priority: "P1", layout: "choice",
        title: "Choose The Right Help",
        objective: "Participants decide whether a task needs chat, an agent, deterministic code, an orchestrator, or human judgement.",
        subtitle: "Match control and responsibility to the task.",
        visual: "Five task types connect to the simplest suitable execution method.",
        action: "Classify five sample tasks and explain the required control.",
        items: ["Chat", "Agent", "Deterministic code", "Orchestrated workflow", "Human judgement"],
        conceptNotes: ["Conversation suits exploration, explanation, and low-risk drafting.", "Agents interpret goals and coordinate bounded multi-step work.", "Fixed rules provide predictable, repeatable transformations at scale.", "Orchestration coordinates approved steps, timing, and system handoffs.", "People retain accountability for consequential or irreversible decisions."],
        note: "Choose the simplest method that meets the consequence, repeatability, integration, and error-tolerance requirements. Use deterministic code when the same input must follow fixed rules. Use an orchestrator to coordinate defined steps. Use an agent when interpretation and tool use justify probabilistic behaviour. Reserve accountable, ethical, financial, legal, or irreversible decisions for people. Plugins remain packaging: a plugin may bundle skills, hooks, commands, or integrations, but it is not a separate intelligence or context layer.",
        exercise: "Classify: brainstorm campaign angles; rename 5,000 files by a fixed rule; research competitors and preserve sources; run a nightly sequence of approved steps; decide whether to dismiss an employee.",
        debrief: "Suggested choices: chat; deterministic code; bounded agent; orchestrator with deterministic controls; human judgement. Mixed solutions are valid when participants explain the boundary."
      },
      {
        n: 24, min: 3, priority: "P2", layout: "agent-navigation", navStage: "tools", image: "shared/assets/redesign/agent-system.png",
        title: "Tools Expand Agent Reach",
        objective: "Participants recognise that external data or actions require explicit scope, authentication, and revocation.",
        subtitle: "Connections require identity scope limits and revocation",
        visual: "The shared agent map adds tools while keeping model and context visible.",
        action: "Inspect a contained example and identify what it can read, write, and revoke.",
        items: ["Connected service", "Authorised identity", "Access scope", "Revocation path"],
        conceptNotes: ["Know which external system receives requests or data.", "The authorising account determines whose access is exercised.", "Narrow permissions limit readable data and possible actions.", "Revocation restores control when access is unnecessary or unsafe."],
        note: "MCP servers and connectors can expose external tools or data. The important questions are what service is connected, which identity authorises it, what the agent may read or change, and how access is revoked. Avoid setup sprawl in a beginner course. Use one contained, preferably read-only example.",
        exercise: "Prepared example: a read-only connector can search a training folder in a document service but cannot upload, edit, delete, or read other folders. Ask participants to locate the identity, scope, and revoke control.",
        debrief: "The connection is suitable for a contained learning task because access is narrow and reversible. Broader access needs a separate decision."
      },
      {
        n: 25, min: 3, priority: "P2", layout: "gate",
        title: "Hooks Enforce Boundaries",
        objective: "Participants understand how a hook can allow, block, or react without replacing broader safeguards.",
        subtitle: "Deterministic checks allow, block, or react consistently.",
        visual: "An action passes through a visible rule gate before execution.",
        action: "Preview a harmless allowed action and a blocked protected-path action.",
        items: ["Tool event", "Rule check", "Allow or block"],
        conceptNotes: ["A defined event determines when the hook runs.", "The rule evaluates known conditions without model interpretation.", "A deterministic decision consistently enforces one narrow boundary."],
        note: "Hooks run defined checks around tool events. They can enforce a narrow rule more consistently than a reminder in prose. They do not understand every risk, protect every path, or replace permissions, sandboxing, Git, testing, and human review. The security block demonstrates the protected .secrets boundary in detail."
      },
      {
        n: 26, min: 4, priority: "P1+P2", layout: "decision",
        title: "Permissions Grant Authority",
        objective: "Participants interpret the requested resource and action before approving, narrowing, refusing, or investigating.",
        subtitle: "Inspect resource, action, scope, and reversibility before approval.",
        visual: "Three realistic requests reveal resource, action, scope, and consequence.",
        action: "Classify one request as approve, narrow, or refuse and explain the evidence.",
        items: ["Target resource", "Requested action", "Allowed scope", "Reversibility check"],
        conceptNotes: ["Identify exactly what information or system is affected.", "Understand what the agent intends to do before approval.", "Restrict authority to the smallest area the task requires.", "Recoverable changes reduce the consequence of mistakes."],
        note: "Repeated prompts can feel frustrating, but automatic approval removes information at the moment it matters. Participants should identify the requested file, command, network connection, or service action; compare it with the task; narrow unnecessary scope; and investigate anything unexpected. Untrusted external content should never become authority merely because it triggered a request.",
        exercise: "Requests: read the selected project brief; run a local preview server; upload the project to an unknown service; recursively edit the parent Projects folder.",
        debrief: "Approve the first when expected. Approve or narrow the preview command after inspection. Investigate or refuse the unknown upload. Refuse the parent-folder edit and restrict it to the intended project."
      },
      {
        n: 27, min: 4, priority: "P1+P2", layout: "compare",
        title: "Git Preserves Intentional History",
        objective: "Participants distinguish local version history from GitHub hosting and from cloud file synchronisation.",
        subtitle: "Inspect, compare, and recover deliberate project changes.",
        visual: "Three lanes compare Git, GitHub, and OneDrive or Google Drive.",
        action: "Inspect status and one small diff, then identify the recovery point.",
        items: ["Local Git", "Remote hosting", "Cloud sync"],
        conceptNotes: ["Git records deliberate checkpoints and exposes exact changes.", "GitHub or alternatives share repositories and preserve remote copies.", "Synchronisation replicates files but lacks intentional change history."],
        note: "Git tracks deliberate changes, comparisons, and recovery points. GitHub, GitLab, or Bitbucket host repositories remotely. OneDrive and Google Drive synchronise files but do not provide the same working model. Keep the active project outside OneDrive and Google Drive. Before git add, create or check .gitignore and exclude secrets, credentials, generated files, and anything that should not be uploaded. After git add, inspect git status before committing. The first commit requires Git user.name and user.email; configure them if Git refuses the commit. On macOS, brew install gh requires Homebrew. On Windows, reopen the terminal after installation if the new commands are not recognised. Repository creation also fails when the named GitHub repository or the origin remote already exists.",
        exercise: "Prepared repository: git status shows one modified file and one untracked file. The diff changes a heading and unexpectedly removes a disclaimer.",
        debrief: "Do not commit automatically. Restore or intentionally rewrite the disclaimer, decide whether the untracked file belongs, rerun the check, and commit only the verified state."
      },
      {
        n: 28, min: 3, priority: "P1+P2", layout: "checklist",
        title: "Check Before Every Task",
        objective: "Participants can repeat one setup routine before every new task.",
        subtitle: "Confirm environment, folder, model, context, authority, and recovery.",
        visual: "Six checks align beside the active project workspace.",
        action: "Run the checklist on the current session and explain each answer.",
        items: ["Execution location", "Project folder", "Model choice", "Active context", "Granted authority", "Recovery path"],
        conceptNotes: ["Location determines which computer and tools perform actions.", "The selected folder defines the immediate project boundary.", "Capability should match task complexity, consequence, and cost.", "Relevant context improves focus and reduces unsupported assumptions.", "Known permissions prevent accidental overreach before work begins.", "A recovery path makes experimentation safer and reviewable."],
        note: "Before requesting work, confirm local or cloud execution, the intended folder, a suitable model, active context, granted authority, and a way to inspect or undo changes. If the project sits in a synchronised folder, understand how that service may report or propagate file changes. The first-cohort OneDrive incident remains undiagnosed and must not be presented as a confirmed technical cause."
      }
    ]
  },

  prompting: {
    title: "Prompting Habits",
    duration: 50,
    theme: "storybook",
    subtitle: "Independent prompting through visible practice and controlled revision",
    slides: [
      {
        n: 28, min: 2, priority: "P1", layout: "agent-navigation", theme: "cinematic", navStage: "human", navCurrent: ["human"], navComplete: ["model", "context", "tools", "permissions"], image: "shared/assets/redesign/agent-system.png",
        title: "Prompting Builds Independence",
        objective: "Participants understand that prompting confidence comes from deliberate practice rather than copied templates.",
        subtitle: "Practice turns examples into skills you control",
        visual: "The shared agent map adds human judgement as the active prompting component.",
        action: "Recall the bicycle analogy and commit to testing rather than merely copying every supplied prompt.",
        items: ["Try", "Inspect", "Improve"],
        conceptNotes: ["Run the instruction yourself.", "Compare intention with output.", "Revise using observed evidence."],
        note: "The first cohort often copied facilitator prompts without understanding them and therefore remained dependent on facilitator wording. Prompting develops like riding a bicycle: explanation helps, but confidence comes from trying, noticing what happens, correcting the instruction, and trying again. This block uses one visible practice cycle so participants learn to question, adapt, and create prompts independently."
      },
      {
        n: 29, min: 2, priority: "P1", layout: "story-flow",
        title: "Use One Learning Loop",
        objective: "Participants follow the complete seven-step practice cycle used throughout the prompting block.",
        subtitle: "Predict explain run inspect change rewrite create",
        visual: "Seven large numbered stations form one repeatable learning loop.",
        action: "Read the loop aloud and identify which steps normally disappear when a prompt is copied blindly.",
        items: ["Predict", "Explain", "Run", "Inspect", "Change", "Rewrite", "Create"],
        conceptNotes: ["Anticipate the likely behaviour.", "Clarify unfamiliar instructions first.", "Test the prompt directly.", "Compare result with expectation.", "Alter one meaningful element.", "Restate the method personally.", "Build without the template."],
        note: "Use the same cycle for every worked example: predict what the prompt will do, ask for an explanation when anything is unclear, run it, inspect the result, change one element, rewrite the instruction in your own words, and finally create a new prompt from the intended outcome. The cycle makes learning visible and gradually removes reliance on facilitator prompts."
      },
      {
        n: 30, min: 5, priority: "P1", layout: "story-gallery",
        title: "Compare Prompt Depth",
        objective: "Participants compare three prompts for the same task and predict how added detail changes usefulness.",
        subtitle: "One task reveals three levels of direction",
        visual: "Three selectable prompt cards progress from vague to clear to detailed.",
        action: "Copy each prompt into a separate session and predict the differences before running any version.",
        items: ["Simple", "Clear", "Detailed"],
        conceptNotes: ["Names only the activity.", "Adds outcome and audience.", "Adds scope evidence and format."],
        note: "All three prompts ask for competitor research for the participant’s own business. The first names only an activity. The second adds the intended outcome and audience. The third adds scope, evidence requirements, comparison fields, and a usable output. More detail is useful only when it reduces material ambiguity; length alone is not quality. Participants should replace the bracketed fields with their own company or project."
      },
      {
        n: 31, min: 7, priority: "P1", layout: "story-gallery",
        title: "Inspect Before Running",
        objective: "Participants analyse a new complex prompt themselves then ask Claude to explain it without executing it.",
        subtitle: "Study one unseen prompt before execution",
        visual: "Two selectable views combine participant prediction with a plain language explanation request.",
        action: "Record the expected output weakness and risk then request an explanation without execution.",
        items: ["Expected output", "Likely weakness", "Possible risk", "Plain explanation"],
        conceptNotes: ["Describe the deliverable before model influence.", "Identify ambiguity missing context or weak instructions.", "Flag privacy evidence or external action concerns.", "Ask Claude to map the prompt without executing it."],
        note: "Use a new sales prospecting prompt so participants cannot rely on outputs they have already seen. First they predict the deliverable, likely weakness, and possible risk. Then they ask Claude to explain the same prompt in plain English without executing it. The explanation supports judgement but does not replace it. Participants decide whether the requested data, evidence, file changes, and outreach remain appropriate before running anything."
      },
      {
        n: 32, min: 7, priority: "P1", layout: "story-gallery",
        title: "Change One Variable",
        objective: "Participants run complete standalone prompt variants in separate sessions while changing only one variable.",
        subtitle: "Separate sessions make prompt differences easier to inspect",
        visual: "Three selectable complete prompts alter audience scope or format from one visible base.",
        action: "Run the base and one variant in separate sessions then compare only the intended change.",
        items: ["Audience", "Scope", "Output format", "Fresh session"],
        conceptNotes: ["Change who will use the result.", "Change which geography the research covers.", "Change how the same findings appear.", "Prevent earlier answers from shaping the comparison."],
        note: "Each prompt on this slide is complete and can stand alone. Run the base prompt and each selected variant in a new session with the same model and settings. Do not continue in one conversation because previous prompts and answers become context and weaken the comparison. A new session provides a cleaner test, although stochastic variation means one run never proves a universal rule."
      },
      {
        n: 33, min: 5, priority: "P1", layout: "story-gallery",
        title: "Create From The Outcome",
        objective: "Participants create a new prompt independently from an intended business outcome.",
        subtitle: "Create independently without facilitator wording",
        visual: "An outcome card becomes a participant-authored prompt through four concise decisions.",
        action: "Choose a real outcome and draft a new prompt using the four visible decisions.",
        items: ["Outcome", "Context", "Boundaries", "Evidence"],
        conceptNotes: ["State the practical change needed.", "Supply only relevant information.", "Define scope and protected limits.", "Specify how claims will be checked."],
        note: "This is the transfer test. Participants begin with a real outcome from their company, role, or project and create a prompt without the earlier template. They choose the minimum useful context, define material boundaries, name the intended output, and specify appropriate evidence. The facilitator asks diagnostic questions but does not replace the participant’s wording."
      },
      {
        n: 34, min: 4, priority: "P1", layout: "story-gallery",
        title: "Challenge Your Model",
        objective: "Participants use a copyable verification prompt to separate evidence assumptions and unresolved claims.",
        subtitle: "Question uncertain claims before using them",
        visual: "A copyable verification prompt feeds a claim evidence assumption and check table.",
        action: "Copy the verification prompt and apply it to the most consequential research claim.",
        items: ["Claim", "Evidence", "Assumption", "Next check"],
        conceptNotes: ["Quote the material statement.", "Link supporting current sources.", "Label unsupported inference clearly.", "Define independent verification needed."],
        note: "This is a durable habit for future work rather than another step in the customer research agent exercise. Asking the same model whether it is sure does not create independent evidence. Use the prompt to extract material claims, locate cited support, distinguish evidence from inference, and name the next external check. Important business decisions remain human responsibilities."
      },
      {
        n: 35, min: 3, priority: "P1", layout: "story-gallery",
        title: "Prompts I Reuse",
        objective: "Participants reuse short corrective prompts that restore focus scope clarity and verification during difficult sessions.",
        subtitle: "Small instructions keep difficult sessions useful",
        visual: "Seven selectable prompt habits reveal one concise copyable instruction at a time.",
        action: "Choose the recurring problem then copy and adapt the corresponding corrective prompt.",
        items: ["Stay concise", "Step back", "Verify", "Summarise first", "Change only", "Cut repetition", "Explain why"],
        conceptNotes: ["Set a default response limit.", "Recover the overall goal.", "Check doubtful claims externally.", "Confirm understanding before work.", "Protect everything outside scope.", "Remove content without added value.", "Make design decisions inspectable."],
        note: "These prompt habits recur across the facilitator’s recent Codex and Claude work. They address common failure modes: excessive detail, loss of the overall goal, unsupported claims, misunderstood instructions, scope drift, repetition, and unexplained changes. They are corrective instructions rather than complete task prompts. Participants should adapt the bracketed fields and use only the habit that addresses the current problem."
      },
      {
        n: 36, min: 7, priority: "P1", layout: "story-gallery",
        title: "Build Your Agent Brief",
        objective: "Participants combine their company context and research guidance into one portable Markdown instruction file.",
        subtitle: "Combine business context with reusable research instructions",
        visual: "Three tabs move from a guided company interview to a portable agent brief and a final completeness check.",
        action: "Use the copyable prompts to describe the business then create and review one Markdown agent brief.",
        items: ["Business context", "Research task", "Evidence rules", "Required output"],
        conceptNotes: ["Describe customers offers geography competitors goals and unknowns.", "Define competitors trends and decisions the agent must research.", "Require current sources labelled assumptions and explicit uncertainties.", "Specify concise sections that support practical decisions."],
        note: "Keep CLAUDE.md as durable guidance for the Claude Code project. Create a separate portable Markdown brief for the market research agent. First, ask Claude to interview the participant about the business without inventing missing facts. Then combine that company description with the project’s research guidance. The final brief should define the task, background, research questions, source and safety rules, required output, and done criteria. Review it before deployment because Lindy will follow the pasted text rather than treating CLAUDE.md as a special file."
      },
      {
        n: 37, min: 3, priority: "P1", layout: "story-gallery",
        title: "Create Your Lindy Agent",
        objective: "Participants open Lindy and understand how their completed brief becomes a recurring research routine.",
        subtitle: "Turn your research brief into a recurring routine",
        visual: "A large linked Lindy screenshot introduces the deployment destination and three simple outcomes.",
        action: "Open Lindy from the slide and explain what the routine will run and deliver.",
        items: ["Research brief", "Recurring routine", "Email summary"],
        conceptNotes: ["Bring the completed portable Markdown instructions.", "Schedule the same bounded research task repeatedly.", "Connect delivery only after reviewing a dry run."],
        note: "Open Lindy from the linked screenshot. This slide introduces the deployment destination without teaching every interface step. The participant will paste the portable Markdown brief created on the previous slide, turn it into a recurring routine, inspect a dry run, and connect email delivery only after the output is acceptable."
      },
      {
        n: 38, min: 5, priority: "P1", layout: "story-interface-only",
        title: "Configure The Lindy Routine",
        objective: "Participants configure schedule and test a Lindy routine using their completed market research brief.",
        subtitle: "",
        visual: "Five large screenshot tabs preserve each interface image at its natural aspect ratio.",
        action: "Sign in create one Personal Routine paste the brief schedule nine o’clock and complete a dry run.",
        items: ["Sign in", "Open routines", "Configure agent", "Set schedule", "Dry run"],
        conceptNotes: ["Choose an approved account sign in method.", "Select Routines then use the New control.", "Add name description and completed agent brief.", "Select daily at nine and confirm timezone.", "Inspect output before enabling external email delivery."],
        note: "Create or sign in to a Lindy account, then choose Routines, Personal, and New. Name the routine Market Research and describe it as recurring competitor and market research for the participant’s business. Paste the completed Markdown brief into the instructions. Set a daily 9:00 AM schedule and confirm Australia/Sydney or the participant’s actual timezone. Save and enable the routine, then use Dry run to inspect the output. A dry run does not send email. For delivery, connect Gmail through Integrations, add an explicit instruction to email the completed report with source links, and run one real test to the participant’s own address. If the result is weaker than Claude, compare the selected model, available research tools, and instruction quality before drawing conclusions about the platform."
      }
    ]
  },

  security: {
    title: "Security",
    duration: 30,
    theme: "studio",
    subtitle: "Layered control for access, secrets, untrusted content, and recovery",
    slides: [
      {
        n: 39, min: 5, priority: "P1", layout: "agent-navigation", theme: "cinematic", navStage: "permissions", image: "shared/assets/redesign/agent-system.png",
        title: "Security Needs Layers",
        objective: "Participants explain why security requires several complementary controls rather than one switch.",
        subtitle: "Different controls address different failure modes",
        visual: "The completed agent map makes permissions the current security focus.",
        action: "Name the purpose and limitation of each control surrounding a realistic project.",
        items: ["Project boundary", "Permissions", "Technical controls", "Verification", "Recovery"],
        conceptNotes: ["Limit which files and systems belong to work.", "Require decisions before consequential access or action.", "Use sandboxing hooks and network restrictions where appropriate.", "Inspect evidence outputs and changes before trust.", "Preserve a tested path to undo harmful changes."],
        note: "Security is not a single switch. Project boundaries, permissions, sandboxing, network controls, hooks, source checking, tests, recovery, and human review address different failure modes. Every layer has a specific purpose and limitation. A hook can miss an alternate path. Permission prompts rely on informed decisions. Recovery cannot prevent disclosure. Participants should combine proportionate controls instead of assuming one feature makes agentic work safe."
      },
      {
        n: 40, min: 5, priority: "P1", layout: "security-gallery",
        title: "Protect What Matters",
        objective: "Participants classify assets and consequences before choosing proportionate protection.",
        subtitle: "Classify assets and consequences before choosing controls",
        visual: "Four cross-industry examples progress from public material to credentials with consequences clearly distinguished.",
        action: "Classify each example and name the plausible consequence of exposure or unauthorised change.",
        items: ["Public", "Internal", "Confidential", "Secret"],
        conceptNotes: ["Exposure causes little or no material harm.", "Access remains limited by organisational need.", "Exposure could harm people obligations or operations.", "Possession can authorise access or consequential action."],
        note: "Begin with the asset and consequence rather than a generic fear of AI. Ask which data, files, credentials, services, reputation, or operations could be affected and what realistic harm might follow. Controls should be proportionate to the participant’s task and organisation. A public brochure, internal roster, customer record, and API key require different treatment. Organisational policy may impose stricter classifications than the examples shown.",
        exercise: "Classify a public brochure an internal roster a customer health record and a synthetic training API key.",
        debrief: "Suggested levels are public internal confidential or regulated and secret. Confirm local policy before real work."
      },
      {
        n: 41, min: 4, priority: "P1", layout: "security-hero", image: "shared/assets/security/least-authority.svg",
        title: "Grant Minimum Authority",
        objective: "Participants restrict folders tools networks and services to the current task.",
        subtitle: "Narrow access to what the current task requires",
        visual: "A narrow illuminated work area sits inside a larger locked environment.",
        action: "Choose the narrowest configuration that can still complete one realistic task.",
        items: ["Folder", "Tool", "Network", "Service"],
        conceptNotes: ["Limit file access to the intended project.", "Enable only capabilities needed for the task.", "Restrict external access unless evidence requires it.", "Connect only approved accounts with suitable scope."],
        note: "Least authority means granting only the resources and actions required for the current task. Restrict the project folder, available tools, network access, and external services. Expand access deliberately only when the task demonstrates a real need, and remove it when finished. Convenience alone does not justify broader authority. A narrower boundary reduces the possible consequence of error, manipulation, or misunderstood instructions."
      },
      {
        n: 42, min: 6, priority: "P1", layout: "security-flow",
        title: "Inspect Permission Requests",
        objective: "Participants evaluate permission requests by resource action scope reversibility and verification.",
        subtitle: "Decide using scope consequence reversibility and evidence",
        visual: "A permission request passes through five checks before approve narrow investigate or refuse.",
        action: "Evaluate realistic requests and explain the evidence supporting each decision.",
        items: ["Resource", "Action", "Scope", "Reversibility", "Evidence"],
        conceptNotes: ["Identify the exact file account or service.", "Read what the agent proposes to do.", "Check how far the permission extends.", "Know whether harmful effects can be undone.", "Define how the result and source will be checked."],
        note: "A permission prompt is neither proof of danger nor permission to proceed automatically. Identify the exact resource and proposed action. Check how broad the request is, what consequence could follow, whether the effect can be reversed, and how the result will be verified. Unexpected, ambiguous, or excessive requests should be narrowed, investigated, or refused. Approval should match the task rather than trust in the agent’s confident wording.",
        exercise: "Evaluate requests to read a selected public brief delete an unknown folder send external email and install an unsigned executable.",
        debrief: "Approve only the bounded matching request. Investigate deletion narrow external communication and verify software before installation."
      },
      {
        n: 43, min: 5, priority: "P1", layout: "security-hero", image: "shared/assets/security/secrets-outside.svg",
        title: "Keep Secrets Outside",
        objective: "Participants keep credentials outside prompts projects repositories and synchronised folders.",
        subtitle: "Credentials never belong in prompts projects or repositories",
        visual: "A credential remains locked outside chat project folders repositories and synchronised storage.",
        action: "Identify unsafe locations using synthetic examples and state the response to accidental exposure.",
        items: ["Prompt", "Project", "Repository", "Sync folder", "Revoke"],
        conceptNotes: ["Never paste credentials into conversational context.", "Keep secrets outside files the agent can inspect.", "Version control preserves history beyond current files.", "Synchronisation can copy sensitive material elsewhere.", "Replace exposed credentials instead of merely deleting text."],
        note: "Use an approved credential store or deliberately protected location. Never paste real credentials into course materials, chat, project instructions, repositories, or synchronised folders. A gitignore rule can prevent some untracked files from being added, but it does not erase an already committed secret or prevent other access. If a credential appears in an unsafe location, revoke and replace it. Deleting the visible text alone does not remove the authority already exposed."
      },
      {
        n: 44, min: 5, priority: "P2", layout: "security-gallery",
        title: "Hooks Enforce One Boundary",
        objective: "Participants demonstrate how a hook blocks one protected path without guaranteeing complete security.",
        subtitle: "Blocking one path does not secure everything",
        visual: "Two safe simulations contrast an allowed project path with a blocked protected path.",
        action: "Run only the supplied harmless simulations without opening any credential file.",
        items: ["Project path", "Protected path", "Other controls"],
        conceptNotes: ["A normal project request passes the defined gate.", "The hook blocks access before protected content opens.", "Permissions boundaries and review remain necessary."],
        note: "The demonstration uses synthetic paths and must never read a real credential file. A PreToolUse hook can inspect a requested action and block access to a protected .secrets location. Effectiveness depends on correct configuration and coverage. A hook may miss alternate paths, tools, integrations, or copies of the secret. It supplements permissions, sandboxing, project boundaries, source control, testing, and human review rather than replacing them.",
        exercise: "Use only the supplied disposable paths. Attempt the allowed sample-data path and then the protected simulated .secrets path.",
        debrief: "The allowed request should proceed and the protected request should stop before content is read."
      }
    ]
  }
};
