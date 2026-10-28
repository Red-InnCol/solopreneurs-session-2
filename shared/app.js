(function () {
  const key = document.body.dataset.deck;
  const deck = window.DECKS[key];
  if (!deck) throw new Error(`Unknown deck: ${key}`);

  const root = document.querySelector("#deck");
  const progress = document.querySelector("#progress");
  const notes = document.querySelector("#notes");
  const notesTitle = document.querySelector("#notesTitle");
  const notesBody = document.querySelector("#notesBody");
  const overview = document.querySelector("#overview");
  const overviewGrid = document.querySelector("#overviewGrid");
  const printMode = new URLSearchParams(location.search).has("print");
  const requestedSlide = location.hash.replace("#slide-", "");
  const slideNumber = slide => slide.displayN ?? slide.n;
  const totalSlides = deck.totalSlides ?? 44;
  const requestedIndex = deck.slides.findIndex(slide => String(slideNumber(slide)) === requestedSlide);
  let current = requestedIndex >= 0 ? requestedIndex : 0;

  document.title = `${deck.title} | Applied AI Course`;
  document.body.classList.add(`theme-${deck.theme}`);
  document.querySelector("#deckTitle").textContent = deck.title;
  document.querySelector("#deckDuration")?.closest("div")?.remove();

  function esc(value) {
    return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  }

  function itemMarkup(items = []) {
    return items.map((item, index) => `<li style="--i:${index}">${esc(item)}</li>`).join("");
  }

  function specialMarkup(slide) {
    if (slide.layout === "agent-navigation") {
      const stages = ["model", "context", "tools", "human", "permissions"];
      const labels = {
        model: "Model",
        context: "Context",
        tools: "Tools",
        human: "Human judgement",
        permissions: "Permissions"
      };
      const current = slide.navStage === "all" ? -1 : stages.indexOf(slide.navStage);
      const explicitCurrent = Array.isArray(slide.navCurrent) ? slide.navCurrent : null;
      const explicitComplete = Array.isArray(slide.navComplete) ? slide.navComplete : null;
      return `<div class="agent-navigation-map stage-${esc(slide.navStage || "all")}">${stages.map((stage, index) => {
        const state = explicitCurrent
          ? explicitCurrent.includes(stage) ? "current" : explicitComplete.includes(stage) ? "complete" : "upcoming"
          : slide.navStage === "all" ? "active" : index < current ? "complete" : index === current ? "current" : "upcoming";
        return `<i class="agent-component-shade component-${stage} state-${state}" aria-hidden="true"></i><span class="agent-nav-label component-${stage} state-${state}">${esc(labels[stage])}</span>`;
      }).join("")}</div>`;
    }
    const parameterValues = [
      "0.42", "−0.17", "0.63", "0.08", "−0.31", "0.74",
      "0.22", "−0.46", "0.57", "0.11", "−0.28", "0.69",
      "0.16", "−0.52", "0.37", "0.81", "−0.09", "0.48",
      "−0.34", "0.58", "0.14", "−0.67", "0.72", "0.25"
    ];
    const illuminatedParameters = new Set([2, 3, 4, 11, 12, 14, 15, 16, 20, 21, 22]);
    const parameterMatrix = parameterValues.map((value, index) => `<span class="${illuminatedParameters.has(index) ? "lit" : ""}">${value}</span>`).join("");
    const verticalTokenVector = (rows, label, className = "") => `<section class="review-token-vector ${className}"><h3>${esc(label)}</h3><div class="review-token-pairs">${rows.map(([word, number]) => `<div><span class="review-token-word">${esc(word)}</span><span class="review-token-id">${esc(number)}</span></div>`).join("")}</div></section>`;
    const promptTokens = [["Are", "3182"], ["you", "499"], ["build", "1421"], ["ing", "287"], ["with", "226"], ["AI", "4091"], ["today", "3432"], ["?", "30"]];
    const replyTokens = [["Yes", "9642"], ["I", "358"], ["am", "1097"], ["building", "1421"], ["with", "226"], ["AI", "4091"], ["today", "3432"], [".", "13"]];
    const diagrams = {
      1: `<div class="control-quarters"><div class="control-quarter model"><strong>Model<br>behaviour</strong></div><div class="control-quarter context"><strong>Available<br>context</strong></div><div class="control-quarter actions"><strong>Permitted<br>actions</strong></div><div class="control-quarter judgement"><strong>Human<br>judgement</strong></div></div>`,
      2: `<div class="harness-model-map"><div class="definition-pair"><article class="model-definition"><small>Model</small><strong>Predicts and generates responses from the context it receives</strong></article><b class="definition-plus" aria-hidden="true">+</b><article class="harness-definition"><small>Harness</small><strong>Adds context tools access and control around the model</strong></article></div><div class="harness-examples"><span>Claude Chat</span><span>Claude Cowork</span><span>Claude Code</span></div></div>`,
      4: `<div class="agent-programme"><img src="shared/assets/redesign/four-agent-roles.png" alt="Four professional scenes representing a web builder an operations assistant an SEO marketer and a lead builder"><div class="agent-programme-labels"><span>Lab 1<br><b>Web Builder</b></span><span>Lab 2<br><b>Ops Assistant</b></span><span>Lab 3<br><b>SEO Marketer</b></span><span>Lab 4<br><b>Lead Builder</b></span></div></div>`,
      5: `<div class="deployment-map"><section class="deployment-build"><small>Build</small><img src="shared/assets/orientation/claude.svg" alt="Claude"><b>Claude Code</b></section><i class="deployment-arrow" aria-hidden="true">→</i><section class="deployment-run"><small>Deploy</small><div class="deployment-destinations"><article><b>Platform</b><span>Managed services</span></article><article><b>Schedules</b><span>Recurring work</span></article><article><b>Artifacts</b><span>Interactive tools</span></article></div></section></div>`,
      6: `<div class="practice-gallery"><figure><img src="shared/assets/orientation/bicycle-riding.png" alt="A beginner riding a bicycle"><figcaption>Try</figcaption></figure><figure><img src="shared/assets/orientation/bicycle-falling-v2.png" alt="The rider actively falling from the bicycle"><figcaption>Adjust</figcaption></figure><figure><img src="shared/assets/orientation/bicycle-recovering-v2.png" alt="The rider standing up after the fall"><figcaption>Continue</figcaption></figure></div>`,
      10: `<div class="review-parameter-operation"><section class="review-matrix"><h3>Parameter Matrix</h3><div class="matrix-values">${parameterMatrix}</div></section><b class="review-operation">×</b>${verticalTokenVector(promptTokens, "Prompt Token Vector", "prompt")}<b class="review-operation">=</b>${verticalTokenVector(replyTokens, "Reply Token Vector", "reply")}</div>`,
      11: `<div class="inference-journey"><div class="inference-prompt"><small>Prompt</small><b>What is the capital of Australia?</b><div class="prompt-token-numbers"><code>3923</code><code>374</code><code>279</code><code>6864</code><code>315</code><code>7534</code><code>30</code></div></div><i class="journey-arrow">→</i><div class="fixed-parameters-card"><small>Fixed parameters</small><div class="matrix-values compact">${parameterMatrix}</div></div><i class="journey-arrow">→</i><div class="next-token-card"><small>Next token</small><div><span>Canberra</span><i style="--w:99.8%"></i><b>99.8%</b></div><div><span>Sydney</span><i style="--w:.1%"></i><b>0.1%</b></div><div><span>Melbourne</span><i style="--w:.1%"></i><b>0.1%</b></div></div></div>`,
      12: `<div class="variation-stage"><div class="variation-prompt"><small>Prompt</small><span>What is Australia’s best city?</span></div><div class="variation-distribution"><small>Possible next words</small>${slide.items.map(item=>{const parts=item.match(/^(.*) (\d+%)$/);return `<div><span>${esc(parts?.[1]||item)}</span><i style="--w:${parts?.[2]||"20%"}"></i><b>${parts?.[2]||""}</b></div>`}).join("")}</div></div>`,
      13: `<div class="false-claim" data-claim-demo><div class="claim-question"><small>Prompt</small><span>Which city hosted the 2000 Olympics?</span></div><blockquote><small>Answer</small><span>Melbourne hosted the 2000 Summer Olympics and welcomed athletes from around the world</span></blockquote><div class="claim-verdict"><span>Sounds certain</span><button class="check-claim">Check claim</button></div><div class="claim-reveal" hidden><b>Incorrect</b><span>Sydney hosted the 2000 Olympics</span></div></div>`,
      15: `<div class="concept-switcher mode-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="code">Code</button><button type="button" role="tab" aria-selected="false" data-execution-tab="chat-cowork">Chat and Cowork</button></div><div class="execution-view mode-view" data-execution-panel="explanation"><div class="mode-cards"><article><b>Chat</b><span>Working with Claude<br>turn by turn</span></article><article><b>Cowork</b><span>Handing work off</span></article><article><b>Code</b><span>Cowork plus<br>creating code</span></article></div></div><div class="execution-view mode-view" data-execution-panel="code" hidden><figure class="interface-shot code-interface-shot"><img src="shared/assets/claude-code/chat-code-overview.png" alt="Claude application showing the Code control"><i class="shot-focus chat-code-focus" aria-hidden="true"></i><div class="shot-inset chat-code-inset" aria-hidden="true"></div><figcaption>Open Code here</figcaption></figure></div><div class="execution-view mode-view" data-execution-panel="chat-cowork" hidden><figure class="interface-shot chat-cowork-shot"><div class="chat-cowork-image-frame"><img src="shared/assets/claude-code/chat-cowork-overview.png" alt="Claude application showing the shared Chat and Cowork environment"><i class="shot-focus chat-cowork-focus" aria-hidden="true"></i><i class="shot-focus chat-cowork-mode-focus" aria-hidden="true"></i></div><figcaption>Switch between Chat and Cowork here</figcaption></figure></div></div>`,
      16: `<div class="concept-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="interface">Interface</button></div><div class="execution-view" data-execution-panel="explanation"><p class="execution-question">Which computer runs the commands</p><div class="execution-options"><article class="execution-local"><svg viewBox="0 0 120 90" aria-hidden="true"><rect x="18" y="10" width="84" height="58" rx="7"></rect><path d="M8 76h104"></path></svg><div><b>Your computer</b><span>Uses its folders and installed software</span></div></article><article class="execution-cloud"><svg viewBox="0 0 120 90" aria-hidden="true"><path d="M28 70h63c16 0 22-20 10-30-3-20-30-27-43-12-17-7-33 5-31 22-15 4-13 20 1 20z"></path></svg><div><b>Remote computer</b><span>Uses separate files and installations</span></div></article></div></div><div class="execution-view execution-interface" data-execution-panel="interface" hidden><figure class="interface-shot"><img src="shared/assets/claude-code/execution-selector.png" alt="Claude Code execution selector showing Local Cloud Remote Control and SSH"><figcaption>Choose the execution environment before starting</figcaption></figure></div></div>`,
      17: `<div class="concept-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="code">Code</button><button type="button" role="tab" aria-selected="false" data-execution-tab="cowork">Cowork</button></div><div class="execution-view" data-execution-panel="explanation"><div class="permission-modes"><article class="recommended"><small>Recommended for Lab 1</small><b>Manual</b><span>Review every request</span></article><article><b>Auto</b><span>Approves routine actions</span></article><article><b>Bypass</b><span>Skips permission checks</span></article></div></div><div class="execution-view execution-interface" data-execution-panel="code" hidden><figure class="interface-shot permission-mode-shot"><img src="shared/assets/claude-code/permissions-mode.png" alt="Claude Code permission mode selector"><i class="shot-focus manual-mode-focus"></i><figcaption>Select Manual before project work</figcaption></figure></div><div class="execution-view execution-interface" data-execution-panel="cowork" hidden><figure class="interface-shot cowork-permission-shot"><img src="shared/assets/claude-code/cowork-permissions-mode.png" alt="Claude Cowork showing the Manually approve permission option"><figcaption>Select Manually approve for Lab 1</figcaption></figure></div></div>`,
      18: `<div class="concept-switcher project-home-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="code">Code</button><button type="button" role="tab" aria-selected="false" data-execution-tab="cowork">Cowork</button></div><div class="execution-view project-home-view" data-execution-panel="explanation"><div class="project-boundary"><b>Project home</b><div><span>Purpose</span><span>Instructions</span><span>Files</span><span>History</span></div><small>Keep each project separate and outside synchronised folders</small></div></div><div class="execution-view project-home-view" data-execution-panel="code" hidden><figure class="project-home-shot code-project-shot"><div class="project-shot-frame code-project-frame"><img src="shared/assets/claude-code/code-web-builder.png" alt="Claude Code with the Web Builder project folder selected"><i class="project-selector-focus code-project-focus" aria-hidden="true"></i></div><figcaption>Confirm Web Builder in Code</figcaption></figure></div><div class="execution-view project-home-view" data-execution-panel="cowork" hidden><figure class="project-home-shot cowork-project-shot"><div class="project-shot-frame cowork-project-frame"><img src="shared/assets/claude-code/cowork-web-builder.png" alt="Claude Cowork with the Web Builder project selected"><i class="project-selector-focus cowork-project-focus" aria-hidden="true"></i></div><figcaption>Confirm Web Builder in Cowork</figcaption></figure></div></div>`,
      19: `<div class="concept-switcher model-choice-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="code">Code</button><button type="button" role="tab" aria-selected="false" data-execution-tab="cowork">Cowork</button></div><div class="execution-view model-choice-view" data-execution-panel="explanation"><figure class="model-fit-image"><img src="shared/assets/claude-code/generated/model-fit.png" alt="A bicycle courier delivery van and freight truck matched to different workloads"><figcaption><span>Small task</span><span>Routine project</span><span>Heavy workload</span></figcaption></figure></div><div class="execution-view model-choice-view" data-execution-panel="code" hidden><div class="code-model-screens"><figure><img src="shared/assets/claude-code/code-model-sonnet-2026-10-11.png" alt="Claude Code model selector with Sonnet 5.5 selected"><figcaption>Choose Sonnet</figcaption></figure><figure><img src="shared/assets/claude-code/code-effort-medium-2026-10-11.png" alt="Claude Code effort control set to Medium"><figcaption>Start with Medium</figcaption></figure></div></div><div class="execution-view model-choice-view" data-execution-panel="cowork" hidden><figure class="cowork-model-shot"><img src="shared/assets/claude-code/cowork-model-effort-2026-10-11.png" alt="Claude Cowork model and effort selectors with Sonnet 5.5 and Medium selected"><figcaption>Choose Sonnet and Medium</figcaption></figure></div></div>`,
      20: `<div class="concept-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="practice">Practice</button></div><div class="execution-view" data-execution-panel="explanation"><div class="memory-flow"><article><b>Repeated correction</b></article><i>→</i><article class="memory-core"><b>Persistent guidance</b></article><i>→</i><article><b>Future sessions</b></article></div></div><div class="execution-view" data-execution-panel="practice" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Please save this as a user-level Claude Code memory for all future sessions: Keep default answers to 150 words or fewer unless I explicitly request more detail.</pre><button type="button" data-copy-button>Copy prompt</button></div></div></div>`,
      21: `<div class="concept-switcher guidance-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="structure">Structure</button><button type="button" role="tab" aria-selected="false" data-execution-tab="practice">Practice</button></div><div class="execution-view guidance-view" data-execution-panel="structure"><div class="instruction-blueprint"><div class="doc-tab">CLAUDE.md</div><div class="blueprint-grid"><div><b>01</b><span>Project purpose</span></div><div><b>02</b><span>Background</span></div><div><b>03</b><span>References</span></div><div><b>04</b><span>Desired outputs</span></div></div></div></div><div class="execution-view guidance-view" data-execution-panel="practice" hidden><div class="company-prompt-card" data-copy-card><div class="company-file-tab">My_Company_description.md</div><div class="company-prompt-copy" aria-label="Copyable company description prompt"><section><p>I would like to create a company description Markdown file to reuse in future prompts.</p><b>Starting information:</b><ul><li>My business is related to: [describe it]</li><li>My target customers are: [describe them]</li><li>Describe them: [their needs, goals, location, or other useful details]</li><li>These are my branding guidelines (optional): [add them or leave blank]</li></ul><p>Before creating the file, interview me to make the company description robust (maximum 5 questions). Ask one focused question at a time.</p></section><section><b>Explore:</b><ul><li>Company name, location, products, or services</li><li>Customer problems and desired outcomes</li><li>Value proposition and differentiators</li><li>Brand personality, evidence, and credentials</li><li>Website goals, calls to action, and constraints</li></ul><p>Do not invent facts. When you have enough information, show me a structured summary and ask me to confirm or correct it.</p><p>After I approve the summary, create <strong>My_Company_description.md</strong> in the current project folder. Make it clear, reusable, and suitable as context for future website-building prompts.</p></section></div><pre class="copy-text company-copy-source" hidden>I would like to create a company description Markdown file to reuse in future prompts.&#10;&#10;Starting information:&#10;- My business is related to: [describe it]&#10;- My target customers are: [describe them]&#10;- Describe them: [their needs, goals, location, or other useful details]&#10;- These are my branding guidelines (optional): [add them or leave blank]&#10;&#10;Before creating the file, interview me to make the company description robust (maximum 5 questions). Ask one focused question at a time. Explore the company name, location, products or services, customer problems and desired outcomes, value proposition, differentiators, brand personality, evidence or credentials, website goals, calls to action, and constraints.&#10;&#10;Do not invent facts. When you have enough information, show me a structured summary and ask me to confirm or correct it.&#10;&#10;After I approve the summary, create My_Company_description.md in the current project folder. Make it clear, reusable, and suitable as context for future website-building prompts.</pre><button type="button" data-copy-button>Copy prompt</button></div></div></div>`,
      22: `<div class="concept-switcher skill-preview-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="interface">Interface</button><button type="button" role="tab" aria-selected="false" data-execution-tab="practice">Practice</button></div><div class="execution-view skill-preview-view" data-execution-panel="explanation"><div class="skill-essentials"><article><small>What it does</small><b>Specialist job</b></article><article><small>When to use</small><b>Relevant request</b></article><article><small>What it returns</small><b>Reviewable result</b></article></div></div><div class="execution-view skill-preview-view" data-execution-panel="interface" hidden><div class="skills-interface-layout"><div class="skills-open-command" data-copy-card><span>Open skills</span><code class="copy-text">/skills</code><button type="button" data-copy-button>Copy</button></div><figure class="interface-shot skills-library-shot"><img src="shared/assets/claude-code/skills-library.png" alt="Claude Code skills library"><figcaption>Type the command then inspect available skills</figcaption></figure></div></div><div class="execution-view skill-preview-view" data-execution-panel="practice" hidden><div class="frontend-skill-steps"><article><div class="step-label"><b>1</b><span>Install first</span></div><div class="copy-card" data-copy-card><pre class="copy-text">/plugin install frontend-design@claude-plugins-official</pre><button type="button" data-copy-button>Copy install</button></div></article><article><div class="step-label"><b>2</b><span>Then use</span></div><div class="copy-card" data-copy-card><pre class="copy-text">/frontend-design:frontend-design</pre><button type="button" data-copy-button>Copy skill</button></div></article></div></div></div>`,
      23: `<div class="context-suitcases"><figure><img src="shared/assets/ai-theory/context-too-little.png" alt="An almost empty travel suitcase"><figcaption>Too little</figcaption></figure><figure><img src="shared/assets/ai-theory/context-focused.png" alt="A carefully organised travel suitcase"><figcaption>Focused</figcaption></figure><figure><img src="shared/assets/ai-theory/context-too-much.png" alt="An overloaded travel suitcase"><figcaption>Too much</figcaption></figure></div>`,
      24: `<div class="concept-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="image">Image</button><button type="button" role="tab" aria-selected="false" data-execution-tab="interface">Interface</button></div><div class="execution-view" data-execution-panel="image"><figure class="context-image labelled-context four-source-context"><img src="shared/assets/claude-code/generated/context-workspace-four-sources.png" alt="Instructions memory files and skills entering one working context"><div class="context-image-labels"><span>Instructions</span><span>Memory</span><span>Files</span><span>Skills</span></div><figcaption>Relevant material enters one working context</figcaption></figure></div><div class="execution-view" data-execution-panel="interface" hidden><div class="context-screens"><figure class="review-context-overview"><div class="review-context-frame"><img src="shared/assets/claude-code/context-overview.png" alt="Claude Code usage menu with context window indicator"><i class="review-context-focus" aria-hidden="true"></i></div><figcaption>Open context usage</figcaption></figure><figure class="review-context-detail"><div class="review-context-frame"><img src="shared/assets/claude-code/context-detail.png" alt="Context window usage and compaction threshold"></div><figcaption>Check capacity</figcaption></figure></div></div></div>`,
      25: `<div class="concept-switcher mcp-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="interface">Interface</button></div><div class="execution-view" data-execution-panel="explanation"><figure class="mcp-image"><img src="shared/assets/claude-code/generated/mcp-connections-v2.png" alt="A controlled MCP hub linking Gmail Google Drive and Microsoft Office"><div class="mcp-service-labels" aria-hidden="true"><span>Gmail</span><span>Google Drive</span><span>Microsoft Office</span></div></figure></div><div class="execution-view" data-execution-panel="interface" hidden><figure class="interface-shot connectors-library-shot"><img src="shared/assets/claude-code/connectors-library.png" alt="Claude Code connectors library"><figcaption>Choose only the connections the project needs</figcaption></figure></div><div class="mcp-command copy-card compact" data-copy-card><pre class="copy-text">/mcp</pre><button type="button" data-copy-button>Copy</button></div></div>`,
      26: `<div class="concept-switcher mcp-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Slide view"><button class="active" type="button" role="tab" aria-selected="true" data-execution-tab="explanation">Explanation</button><button type="button" role="tab" aria-selected="false" data-execution-tab="practice">Practice</button></div><div class="execution-view mcp-view" data-execution-panel="explanation"><div class="mcp-explanation"><article><strong>Claude</strong><span>Requests a capability</span></article><article class="mcp-core"><strong>MCP</strong><span>Standard connection between Claude and a service</span></article><article><strong>Services</strong><span>Return tools or data</span></article><p>You still control <b>identity</b> <b>scope</b> and <b>permissions</b></p></div></div><div class="execution-view mcp-view" data-execution-panel="practice" hidden><div class="mcp-practice"><article class="mcp-command" data-copy-card><small>Open MCP connections</small><code class="copy-text">/mcp</code><span>Inspect available connectors before authorising access.</span><button type="button" data-copy-button>Copy</button></article><figure class="mcp-connectors-shot"><img src="shared/assets/claude-code/connectors-2026-10-11.png" alt="Claude Connectors settings showing available connected services"><figcaption>Settings to Connectors</figcaption></figure></div></div></div>`,
      27: `<div class="preflight-row"><div><b>01</b><span>Location</span></div><div><b>02</b><span>Folder</span></div><div><b>03</b><span>Model</span></div><div><b>04</b><span>Context</span></div><div><b>05</b><span>Authority</span></div><div><b>06</b><span>Recovery</span></div></div>`,
      28: `<div class="practice-principle"><span>Try</span><i>→</i><span>Inspect</span><i>→</i><span>Improve</span></div>`,
      29: `<div class="learning-loop" aria-label="Seven step prompting practice loop">${["Predict","Explain","Run","Inspect","Change","Rewrite","Create"].map((label,index)=>`<div><b>${index+1}</b><span>${label}</span></div>`).join("")}</div>`,
      30: `<div class="concept-switcher prompt-depth" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Prompt depth"><button class="active" type="button" data-execution-tab="simple">Simple</button><button type="button" data-execution-tab="clear">Clear</button><button type="button" data-execution-tab="detailed">Detailed</button></div><div class="execution-view" data-execution-panel="simple"><div class="copy-card" data-copy-card><pre class="copy-text">Research my competitors.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="clear" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Compare the main Australian competitors for [MY BUSINESS]. Show their customers, offerings, and business models.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="detailed" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Research 3–5 Australian competitors for [MY BUSINESS] serving [TARGET CUSTOMER]. Compare their business model, key offerings, positioning, and evidence-backed strengths. Cite current sources, label assumptions, and finish with three practical opportunities in a table.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="depth-meter"><span>Activity only</span><i></i><span>Decision support</span></div></div>`,
      31: `<div class="concept-switcher inspect-prompt" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Inspect an unfamiliar prompt"><button class="active" type="button" data-execution-tab="analyse">Your analysis</button><button type="button" data-execution-tab="explain">Ask Claude</button></div><div class="execution-view" data-execution-panel="analyse"><div class="prompt-predict"><div class="copy-card compact-prompt" data-copy-card><pre class="copy-text">Act as a sales research agent. Find 15 Australian organisations likely to buy [OFFER]. Rank each prospect, identify a decision maker and contact details, explain the fit using current public sources, draft personalised outreach, and save the results to prospects.csv. Do not ask follow-up questions.</pre><button type="button" data-copy-button>Copy prompt</button></div><div class="prediction-fields"><article><b>Expected output</b><span>What will it produce</span></article><article><b>Likely weakness</b><span>What is underspecified</span></article><article><b>Possible risk</b><span>What needs checking</span></article></div></div></div><div class="execution-view" data-execution-panel="explain" hidden><div class="explain-before-run"><div class="prompt-fragment"><small>Do not execute</small><b>Explain it first</b><span>Check purpose inputs outputs assumptions risks and file actions</span></div><div class="copy-card" data-copy-card><pre class="copy-text">Before executing the prompt below, explain it in plain English. Identify its purpose, required inputs, expected outputs, assumptions, likely weaknesses, privacy or evidence risks, and any action that would create files or contact people. Flag anything ambiguous. Do not execute the original prompt.&#10;&#10;Act as a sales research agent. Find 15 Australian organisations likely to buy [OFFER]. Rank each prospect, identify a decision maker and contact details, explain the fit using current public sources, draft personalised outreach, and save the results to prospects.csv. Do not ask follow-up questions.</pre><button type="button" data-copy-button>Copy prompt</button></div></div></div></div>`,
      32: `<div class="concept-switcher variable-switcher" data-execution-switcher><div class="session-rule">Run each complete prompt in a new session</div><div class="execution-tabs" role="tablist" aria-label="Change one prompt variable"><button class="active" type="button" data-execution-tab="base">Base</button><button type="button" data-execution-tab="audience">Audience</button><button type="button" data-execution-tab="scope">Scope</button><button type="button" data-execution-tab="format">Format</button></div><div class="execution-view" data-execution-panel="base"><div class="variable-label"><span>Starting point</span><b>No variable changed</b></div><div class="copy-card compact" data-copy-card><pre class="copy-text">Research 3–5 Australian competitors for [MY BUSINESS]. Compare their customers, key offerings, positioning, and business models. Cite current sources, label assumptions, and write a 300-word analysis for a general business audience.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="audience" hidden><div class="variable-label"><span>Changed variable</span><b>Audience</b></div><div class="copy-card compact" data-copy-card><pre class="copy-text">Research 3–5 Australian competitors for [MY BUSINESS]. Compare their customers, key offerings, positioning, and business models. Cite current sources, label assumptions, and write a 300-word analysis for our sales team that emphasises customer objections and competitor positioning.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="scope" hidden><div class="variable-label"><span>Changed variable</span><b>Scope</b></div><div class="copy-card compact" data-copy-card><pre class="copy-text">Research 3–5 competitors in New South Wales for [MY BUSINESS]. Compare their customers, key offerings, positioning, and business models. Cite current sources, label assumptions, and write a 300-word analysis for a general business audience.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="format" hidden><div class="variable-label"><span>Changed variable</span><b>Output format</b></div><div class="copy-card compact" data-copy-card><pre class="copy-text">Research 3–5 Australian competitors for [MY BUSINESS]. Compare their customers, key offerings, positioning, and business models. Cite current sources, label assumptions, and return the findings as a comparison table for a general business audience.</pre><button type="button" data-copy-button>Copy</button></div></div></div>`,
      33: `<div class="outcome-builder"><div class="builder-decisions"><article><small>01</small><b>Outcome</b></article><article><small>02</small><b>Context</b></article><article><small>03</small><b>Boundaries</b></article><article><small>04</small><b>Evidence</b></article></div><div class="copy-card compact" data-copy-card><pre class="copy-text">My intended outcome is [OUTCOME].&#10;Relevant context is [CONTEXT].&#10;Stay within [BOUNDARIES].&#10;Produce [OUTPUT].&#10;Support material claims with [EVIDENCE].</pre><button type="button" data-copy-button>Copy scaffold</button></div></div>`,
      34: `<div class="verification-practice"><div class="future-habit">Future working habit</div><div class="copy-card" data-copy-card><pre class="copy-text">Review the material claims in this result. For each claim, quote it, identify the supporting source, separate evidence from inference, flag unsupported or outdated statements, and state the next independent check required. Do not invent missing evidence.</pre><button type="button" data-copy-button>Copy prompt</button></div><div class="verification-table"><span>Claim</span><span>Evidence</span><span>Assumption</span><span>Next check</span></div></div>`,
      35: `<div class="concept-switcher prompt-library" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Reusable corrective prompts"><button class="active" type="button" data-execution-tab="concise">Stay concise</button><button type="button" data-execution-tab="stepback">Step back</button><button type="button" data-execution-tab="verify">Verify</button><button type="button" data-execution-tab="summary">Summarise first</button><button type="button" data-execution-tab="scope">Change only</button><button type="button" data-execution-tab="repeat">Cut repetition</button><button type="button" data-execution-tab="why">Explain why</button></div><div class="execution-view" data-execution-panel="concise"><div class="copy-card" data-copy-card><pre class="copy-text">Provide the answer in 150 words or fewer using plain English unless I request more detail.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="stepback" hidden><div class="copy-card" data-copy-card><pre class="copy-text">I think you are going down a rabbit hole. Step back and check the overall goal. Do we really need this work or are we missing the main point?</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="verify" hidden><div class="copy-card" data-copy-card><pre class="copy-text">I am not confident this is correct or current. Search the web and verify every material claim against authoritative sources. Tell me what changed.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view summary-prompt" data-execution-panel="summary" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Before starting, summarise what you understand I am asking you to do and your proposed approach in 150 words or fewer. Wait for my approval.</pre><button type="button" data-copy-button>Copy</button></div><a class="wispr-flow-link" href="https://wisprflow.ai/r?JUAN245" target="_blank" rel="noopener">Try Wispr Flow</a></div><div class="execution-view" data-execution-panel="scope" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Change only [SPECIFIC ELEMENT]. Keep everything else exactly as it is.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="repeat" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Review this for repetition, contradictions, and superseded material. Remove anything that adds no distinct value.</pre><button type="button" data-copy-button>Copy</button></div></div><div class="execution-view" data-execution-panel="why" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Tell me exactly what you changed and why. Distinguish required corrections from optional recommendations.</pre><button type="button" data-copy-button>Copy</button></div></div></div>`,
      36: `<div class="concept-switcher agent-brief-switcher" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Build the agent brief"><button class="active" type="button" data-execution-tab="describe">Describe business</button><button type="button" data-execution-tab="build">Build brief</button><button type="button" data-execution-tab="check">Check brief</button></div><div class="execution-view" data-execution-panel="describe"><div class="copy-card" data-copy-card><pre class="copy-text">Help me describe my business for a market research agent. Ask one question at a time about my customers, offers, geography, known competitors, goals, prohibited claims, and information that remains unknown. Do not invent facts. When finished, produce a concise company description in Markdown.</pre><button type="button" data-copy-button>Copy prompt</button></div></div><div class="execution-view" data-execution-panel="build" hidden><div class="copy-card" data-copy-card><pre class="copy-text">Using my company description and the market research guidance in this project, create one portable Markdown instruction file for a recurring market research agent. Include Task, Background, Research Questions, Source and Safety Rules, Required Output, and Done Criteria. Separate evidence from interpretation, require links for material claims, preserve unknowns, and exclude credentials or deployment instructions.</pre><button type="button" data-copy-button>Copy prompt</button></div></div><div class="execution-view" data-execution-panel="check" hidden><div class="brief-check"><span>Task</span><span>Background</span><span>Questions</span><span>Sources</span><span>Output</span><span>Done criteria</span></div></div></div>`,
      37: `<div class="lindy-launch"><a class="lindy-launch-link" href="https://www.lindy.ai/" target="_blank" rel="noopener"><img src="shared/assets/lindy/start.png" alt="Lindy landing page with Try for free button"><span>Open Lindy</span></a><div class="lindy-outcomes"><span>Paste brief</span><span>Schedule routine</span><span>Review delivery</span></div></div>`,
      38: `<div class="concept-switcher lindy-walkthrough" data-execution-switcher><div class="execution-tabs" role="tablist" aria-label="Lindy routine setup"><button class="active" type="button" data-execution-tab="signin">Sign in</button><button type="button" data-execution-tab="routines">Routines</button><button type="button" data-execution-tab="configure">Configure</button><button type="button" data-execution-tab="schedule">Schedule</button><button type="button" data-execution-tab="test">Test</button></div><div class="execution-view" data-execution-panel="signin"><figure class="lindy-shot portrait"><img src="shared/assets/lindy/sign-in.png" alt="Lindy sign in choices"><figcaption>Create an account or use an approved sign in</figcaption></figure></div><div class="execution-view" data-execution-panel="routines" hidden><figure class="lindy-shot wide routines-shot"><img src="shared/assets/lindy/routines.png" alt="Lindy Routines page with Routines and New controls highlighted"><i class="lindy-focus routines-nav-focus" aria-hidden="true"></i><i class="lindy-focus routines-new-focus" aria-hidden="true"></i><figcaption>Choose Routines then New</figcaption></figure></div><div class="execution-view" data-execution-panel="configure" hidden><figure class="lindy-shot portrait"><img src="shared/assets/lindy/configure.png" alt="Lindy new routine form"><figcaption>Name the routine and describe the recurring job</figcaption></figure></div><div class="execution-view" data-execution-panel="schedule" hidden><figure class="lindy-shot portrait"><img src="shared/assets/lindy/schedule.png" alt="Lindy daily schedule set to nine in Australia Sydney"><figcaption>Set daily at nine and confirm the timezone</figcaption></figure></div><div class="execution-view" data-execution-panel="test" hidden><figure class="lindy-shot portrait"><img src="shared/assets/lindy/test.png" alt="Lindy routine details with instructions and dry run controls"><figcaption>Paste the brief save enable and run a dry test</figcaption></figure><div class="lindy-test-guide"><b>Dry run</b><span>Inspect output first</span><b>Gmail</b><span>Connect then test delivery to yourself</span></div></div></div>`,
      39: `<div class="security-hero-key"><span>Boundary</span><span>Permission</span><span>Verify</span><span>Recover</span></div>`,
      40: `<div class="asset-gallery"><figure><div class="asset-visual public"><i></i></div><figcaption>Public</figcaption></figure><figure><div class="asset-visual internal"><i></i></div><figcaption>Internal</figcaption></figure><figure><div class="asset-visual confidential"><i></i></div><figcaption>Confidential</figcaption></figure><figure><div class="asset-visual secret"><i></i></div><figcaption>Secret</figcaption></figure><div class="consequence-strip"><span>Low impact</span><i></i><span>High impact</span></div></div>`,
      41: `<div class="authority-key"><span>One folder</span><span>One task</span><span>Remove access</span></div>`,
      42: `<div class="permission-flow"><div class="request-node">Request</div><i>→</i><div class="permission-lens-new"><span>Resource</span><span>Action</span><span>Scope</span><span>Reversible</span><span class="evidence-check">Evidence</span></div><i>→</i><div class="decision-node"><span>Approve</span><span>Narrow</span><span>Investigate</span><span>Refuse</span></div><i>→</i><div class="verify-node">Verify</div></div>`,
      43: `<div class="secrets-key"><span>Prompts</span><span>Projects</span><span>Git</span><span>Sync</span></div>`,
      44: `<div class="hook-gallery"><figure class="hook-allowed"><div class="hook-path"><i class="folder-shape"></i><span>Project path</span></div><div class="hook-result">Allow</div></figure><figure class="hook-blocked"><div class="hook-path"><i class="lock-shape"></i><span>.secrets path</span></div><div class="hook-result">Block</div></figure><div class="hook-caption">One enforced boundary</div></div>`
    };
    if (diagrams[slide.n]) return diagrams[slide.n];
    if (slide.layout === "training") {
      return `<div class="training-console" data-training>
        <div class="training-question"><p>What is the capital of Australia?</p></div>
        <div class="training-answers"><div><small>Target answer</small><b>Canberra</b></div><div><small>Model prediction</small><b class="candidate">♧7≈?</b></div></div>
        <div class="training-progress"><div><div class="loss-row"><span>Objective: reduce prediction loss</span><b class="loss-value">9.80</b></div><div class="loss-track"><i class="loss-fill"></i></div></div><div class="parameter-visual"><small>Parameters</small><div class="parameter-pulse" aria-hidden="true">${Array.from({length:24},(_,i)=>`<i style="--i:${i}"></i>`).join("")}</div></div></div>
        <p class="challenge" hidden></p>
        <div class="training-actions"><button class="reset-training">Reset</button><button class="advance-training primary">Next iteration</button><button class="audience-test" hidden>Audience question</button></div>
      </div>`;
    }
    if (slide.layout === "tokens") {
      const pieces = ["Are", "you", "build", "ing", "with", "AI", "today", "?"];
      const ids = ["3182", "499", "1421", "287", "226", "4091", "3432", "30"];
      return `<div class="token-demo" data-token-generator><p class="source-sentence">Are you building with AI today?</p><div class="token-stage"><div class="token-pieces">${pieces.map(piece=>`<span>${esc(piece)}</span>`).join("")}</div></div><div class="token-stage"><div class="token-ids">${ids.map(id=>`<span>${id}</span>`).join("")}</div></div><div class="token-generation"><div class="generated-tokens" aria-live="polite"><em>Answer starts empty</em></div><div class="token-actions"><button class="reset-tokens">Reset</button><button class="generate-token primary">Generate next</button></div></div></div>`;
    }
    if (slide.layout === "probability") {
      return `<div class="probability-demo"><p>Australia’s most exciting city might be…</p>${slide.items.map((item, index) => { const parts = item.match(/^(.*) (\d+%)$/); return `<div><span>${esc(parts ? parts[1] : item)}</span><i style="--w:${parts ? parts[2] : "20%"};--i:${index}"></i><b>${parts ? parts[2] : ""}</b></div>`; }).join("")}</div>`;
    }
    return `<ol class="visual-list">${itemMarkup(slide.items)}</ol>`;
  }

  function renderSlide(slide, index) {
    const image = slide.image ? `<img class="slide-image" src="${esc(slide.image)}" alt="${esc(slide.visual)}">` : "";
    const redesigned = (slide.n <= 6 || slide.layout === "agent-navigation" || (slide.n >= 10 && slide.n <= 13) || (slide.n >= 15 && slide.n <= 45)) ? " redesigned" : "";
    const slideTheme = slide.theme || deck.theme;
    return `<div class="slide-theme theme-${esc(slideTheme)}"><section class="slide layout-${esc(slide.layout)}${redesigned}${index === current ? " active" : ""}" data-index="${index}" data-slide="${slide.n}">
      ${image}<div class="image-wash"></div><div class="grid-bg"></div><div class="paper-texture"></div>
      <header class="slide-header"><span>${esc(slide.eyebrow || slide.deckTitle || deck.title)}</span><b>${String(slideNumber(slide)).padStart(2, "0")}</b></header>
      <div class="slide-copy">
        ${slide.eyebrow ? `<span class="eyebrow">${esc(slide.eyebrow)}</span>` : ""}
        <h1>${esc(slide.title)}</h1>
        <p class="subtitle">${esc(slide.subtitle)}</p>
      </div>
      <div class="visual-stage">${specialMarkup(slide)}</div>
      <footer><b>${slideNumber(slide)} / ${totalSlides}</b></footer>
    </section></div>`;
  }

  root.innerHTML = deck.slides.map(renderSlide).join("");
  const slides = [...document.querySelectorAll(".slide")];
  deck.slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.title = `${slideNumber(slide)}. ${slide.title}`;
    dot.addEventListener("click", () => show(index));
    progress.append(dot);
  });

  function show(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    [...progress.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
    document.querySelector("#previous").disabled = current === 0;
    document.querySelector("#next").disabled = current === slides.length - 1;
    history.replaceState(null, "", `#slide-${slideNumber(deck.slides[current])}`);
  }

  function openNotes() {
    const slide = deck.slides[current];
    notesTitle.textContent = slide.title;
    const conceptNotes = slide.conceptNotes?.length ? `<h3>Concepts</h3><ul class="concept-notes">${slide.items.map((item, index) => `<li><b>${esc(item)}</b><span>${esc(slide.conceptNotes[index] || "")}</span></li>`).join("")}</ul>` : "";
    notesBody.innerHTML = `<p>${esc(slide.note)}</p>${conceptNotes}<hr><h3>Slide objective</h3><p>${esc(slide.objective)}</p><h3>Visual direction</h3><p>${esc(slide.visual)}</p><h3>Facilitator action</h3><p>${esc(slide.action)}</p>${slide.exercise ? `<h3>Exercise material</h3><p>${esc(slide.exercise)}</p>` : ""}${slide.debrief ? `<h3>Debrief</h3><p>${esc(slide.debrief)}</p>` : ""}`;
    notes.classList.add("open");
    notes.setAttribute("aria-hidden", "false");
  }

  function closeNotes() {
    notes.classList.remove("open");
    notes.setAttribute("aria-hidden", "true");
  }

  function openOverview() {
    if (!overviewGrid.children.length) {
      deck.slides.forEach((slide, index) => {
        const card = document.createElement("button");
        card.innerHTML = `<b>${String(slideNumber(slide)).padStart(2, "0")}</b><span>${esc(slide.title)}</span><small>${slide.min} min · ${esc(slide.priority)}</small>`;
        card.addEventListener("click", () => { overview.classList.remove("open"); show(index); });
        overviewGrid.append(card);
      });
    }
    overview.classList.add("open");
  }

  document.querySelector("#previous").addEventListener("click", () => show(current - 1));
  document.querySelector("#next").addEventListener("click", () => show(current + 1));
  document.querySelector("#notesButton").addEventListener("click", openNotes);
  document.querySelector("#closeNotes").addEventListener("click", closeNotes);
  document.querySelector("#overviewButton").addEventListener("click", openOverview);
  document.querySelector("#closeOverview").addEventListener("click", () => overview.classList.remove("open"));

  const trainingStates = [
    { answer: "♧7≈?", loss: "9.80", width: 96 },
    { answer: "mango", loss: "6.40", width: 70 },
    { answer: "Paris", loss: "3.90", width: 48 },
    { answer: "Sydney", loss: "1.70", width: 26 },
    { answer: "Canberra", loss: "0.18", width: 8 }
  ];
  document.querySelectorAll("[data-training]").forEach(consoleRoot => {
    function setState(stateIndex, audience = false) {
      const state = trainingStates[stateIndex];
      consoleRoot.dataset.state = stateIndex;
      consoleRoot.querySelector(".candidate").textContent = state.answer;
      consoleRoot.querySelector(".loss-value").textContent = state.loss;
      consoleRoot.querySelector(".loss-fill").style.width = `${state.width}%`;
      consoleRoot.querySelectorAll(".parameter-pulse i").forEach((cell, index) => {
        const variation = Math.abs(Math.sin((index + 1) * 12.9898 + (stateIndex + 1) * 78.233) * 43758.5453) % 1;
        cell.style.opacity = String(.2 + variation * .78);
        cell.style.transform = `scale(${.86 + variation * .16})`;
      });
      const test = consoleRoot.querySelector(".audience-test");
      test.hidden = stateIndex !== trainingStates.length - 1;
      const challenge = consoleRoot.querySelector(".challenge");
      challenge.hidden = !audience;
      if (audience) challenge.textContent = "How about: What is Australia’s best city?";
    }
    setState(printMode ? 4 : 0);
    consoleRoot.querySelector(".advance-training").addEventListener("click", () => setState(Math.min(4, Number(consoleRoot.dataset.state || 0) + 1)));
    consoleRoot.querySelector(".reset-training").addEventListener("click", () => setState(0));
    consoleRoot.querySelector(".audience-test").addEventListener("click", () => setState(4, true));
  });

  const generatedAnswer = [
    { id: "9642", word: "Yes" }, { id: "358", word: "I" }, { id: "1097", word: "am" },
    { id: "1421", word: "building" }, { id: "226", word: "with" }, { id: "4091", word: "AI" },
    { id: "3432", word: "today" }, { id: "13", word: "." }
  ];
  document.querySelectorAll("[data-token-generator]").forEach(tokenRoot => {
    const output = tokenRoot.querySelector(".generated-tokens");
    const generate = tokenRoot.querySelector(".generate-token");
    let tokenIndex = 0;
    function resetTokens() {
      tokenIndex = 0;
      output.innerHTML = "<em>Answer starts empty</em>";
      generate.disabled = false;
      generate.textContent = "Generate next";
    }
    function revealToken() {
      if (tokenIndex >= generatedAnswer.length) return;
      output.querySelector("em")?.remove();
      const token = generatedAnswer[tokenIndex];
      const chip = document.createElement("span");
      chip.className = "generated-token revealing";
      chip.textContent = token.id;
      output.append(chip);
      generate.disabled = true;
      const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 420;
      setTimeout(() => {
        chip.textContent = token.word;
        chip.classList.remove("revealing");
        tokenIndex += 1;
        generate.disabled = tokenIndex >= generatedAnswer.length;
        generate.textContent = tokenIndex >= generatedAnswer.length ? "Complete" : "Generate next";
      }, delay);
    }
    tokenRoot.querySelector(".reset-tokens").addEventListener("click", resetTokens);
    generate.addEventListener("click", revealToken);
    if (printMode) {
      output.innerHTML = generatedAnswer.map(token => `<span class="generated-token">${esc(token.word)}</span>`).join("");
      generate.disabled = true;
      generate.textContent = "Complete";
    }
  });

  document.querySelectorAll("[data-claim-demo]").forEach(claimRoot => {
    const reveal = claimRoot.querySelector(".claim-reveal");
    const button = claimRoot.querySelector(".check-claim");
    const showClaim = () => {
      reveal.hidden = false;
      button.textContent = "Claim checked";
      button.disabled = true;
    };
    button.addEventListener("click", showClaim);
    if (printMode) showClaim();
  });

  document.querySelectorAll("[data-execution-switcher]").forEach(switcher => {
    const tabs = [...switcher.querySelectorAll("[data-execution-tab]")];
    const panels = [...switcher.querySelectorAll("[data-execution-panel]")];
    tabs.forEach(tab => tab.addEventListener("click", () => {
      const selected = tab.dataset.executionTab;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach(panel => { panel.hidden = panel.dataset.executionPanel !== selected; });
    }));
  });

  document.querySelectorAll("[data-copy-button]").forEach(button => {
    const originalLabel = button.textContent;
    button.addEventListener("click", async () => {
      const text = button.closest("[data-copy-card]")?.querySelector(".copy-text")?.textContent.trim();
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const field = document.createElement("textarea");
        field.value = text;
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = originalLabel; }, 1400);
    });
  });

  document.querySelectorAll("[data-guidance-button]").forEach(button => {
    button.addEventListener("click", () => {
      const prompt = button.closest(".prompt-practice")?.querySelector("[data-guidance-prompt]");
      if (!prompt) return;
      prompt.hidden = !prompt.hidden;
      button.classList.toggle("active", !prompt.hidden);
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeNotes(); overview.classList.remove("open"); return; }
    if (notes.classList.contains("open") || overview.classList.contains("open")) return;
    if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); show(current + 1); }
    if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); show(current - 1); }
    if (event.key.toLowerCase() === "n") openNotes();
    if (event.key.toLowerCase() === "o") openOverview();
    if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
  });

  show(current);
})();
