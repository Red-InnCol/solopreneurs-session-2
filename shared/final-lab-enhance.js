(function () {
  const iterationStage = document.querySelector('.slide[data-slide="29"] .visual-stage');
  if (iterationStage) {
    iterationStage.innerHTML = `
      <div class="human-iteration-layout">
        <figure class="iteration-contact-sheet">
          <img src="shared/assets/redesign/wellbeing-iteration-progression.png?v=20261012-1" alt="Four versions of the same wellbeing coach image improving through repeated iterations">
          <figcaption class="iteration-label first"><b>1</b><span>First try</span></figcaption>
          <figcaption class="iteration-label second"><b>2</b><span>Better</span></figcaption>
          <figcaption class="iteration-label third"><b>3</b><span>Improved</span></figcaption>
          <figcaption class="iteration-label fourth"><b>4</b><span>Ready</span></figcaption>
        </figure>
        <div class="human-principles">
          <article class="evaluation-principle"><b>Evaluation</b><p>Check the result against your goal and standards.</p></article>
          <article class="iteration-principle"><b>Iteration</b><p>Explain what must improve then try again.</p></article>
          <div class="iteration-loop" aria-label="Evaluate instruct and try again"><span>Evaluate</span><i>→</i><span>Instruct</span><i>→</i><span>Try again</span></div>
        </div>
      </div>`;
  }

  const checklistStage = document.querySelector('.slide[data-slide="30"] .visual-stage');
  if (checklistStage) {
    const checks = [
      ["Work mode", "Cowork or Code"],
      ["Execution", "Local or Cloud"],
      ["Project", "Correct folder"],
      ["Model", "Suitable capability"],
      ["Effort", "Suitable level"],
      ["Context", "Relevant and current"],
      ["Permissions", "Manual or Auto"]
    ];
    checklistStage.innerHTML = `<div class="session-checklist-sheet"><ul>${checks.map(([label, detail]) => `<li><i aria-hidden="true"></i><div><b>${label}</b><span>${detail}</span></div></li>`).join("")}</ul></div>`;
  }

  const buildPrompt = `I want you to design me a web page for my business.

Use My_Company_description.md in the current project folder as the source of truth for the business, audience, offer, voice, and goals. Do not invent facts, testimonials, credentials, prices, or claims.

Use the memory, installed skills, and authorised MCP connections already prepared for this project when they are relevant. Do not connect a new service or broaden access for this task.

Use these references for inspiration:
- Layout and visual hierarchy: [WEBSITE URL 1]
- Sections, navigation, tabs, or page structure: [WEBSITE URL 2]
- Other useful design details: [WEBSITE URL 3 OR LEAVE BLANK]
- Optional additional reference: [WEBSITE URL 4 OR LEAVE BLANK]

Brand direction:
- First use any branding colours and guidance defined in My_Company_description.md.
- If that file does not define brand colours, take colour inspiration from [COLOUR REFERENCE URL].
- Use images already moved into the current project folder, images from [PATH TO IMAGE FOLDER], or images supplied through [IMAGE URLS].
- If image files are outside the project, move copies into the project folder so they can be referenced directly.
- If no suitable images are available, use [IMAGE REFERENCE URL] only as visual direction and add clearly labelled placeholders. Do not copy protected images.

Create an original design. Use the references as direction, but do not copy their branding, text, distinctive composition, or assets.

Choose sections that suit the business. Consider a clear header and navigation, hero message, services or benefits, trust evidence, calls to action, contact details, and footer. Add tabs or additional sections only when they make the page easier to understand.

Make the web page responsive for desktop, tablet, and mobile. Use readable typography, strong contrast, accessible labels and alt text, consistent spacing, working navigation, and clear calls to action. Keep the page focused on the target customer and the main action we want them to take.

If essential information is missing, ask no more than three focused questions. Otherwise proceed. First summarise the proposed direction briefly, then build the web page in the current project folder and show me how to preview it.`;

  const reviewPrompt = `Review the web page we created. Do not change anything yet.

Use My_Company_description.md in the current project folder, relevant project memory, installed skills, and authorised MCP connections already available. Do not connect a new service or broaden access.

Evaluate the page against the company description and intended customer. Check:
- factual accuracy and unsupported claims
- clarity of the offer and value proposition
- suitability for the target customer
- brand colours defined in the company description, tone, and consistency
- visual hierarchy, layout, spacing, and balance
- typography, readability, and colour contrast
- navigation, sections, tabs, links, and page flow
- usefulness and placement of calls to action
- image quality, relevance, cropping, and alt text
- copy clarity, length, grammar, and repetition
- desktop, tablet, and mobile behaviour
- accessibility, keyboard use, and visible focus states
- loading speed, broken elements, overflow, and obvious errors

Return a concise review table with: Area, What works, What needs improvement, Priority, and Recommended change. Rank priorities as critical, important, or optional. Do not invent business information.

Then ask which recommendations I approve. Apply only the approved changes.

When I request a change, make it specific. For example:
- Layout: revise [SECTION] using [INSPIRATION URL] for direction.
- Colours: replace [CURRENT COLOUR] with [BRAND COLOUR OR REFERENCE].
- Navigation: add, remove, or rename [ITEM].
- Images: use files in the project folder, [PATH TO IMAGE FOLDER], or [IMAGE URLS], then adjust [CROP, SIZE, OR POSITION].
- Text: rewrite [SECTION] to emphasise [MESSAGE] in our brand voice.
- Calls to action: change [CTA] so visitors know [DESIRED ACTION].

After revising, summarise what changed and recheck the page at desktop and mobile sizes. List anything still unresolved. Repeat this evaluate, approve, improve, and recheck cycle until I confirm the page is ready.`;

  const copyPrompt = async (button, prompt) => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(prompt);
      button.textContent = "Copied";
    } catch {
      const code = button.closest(".copy-prompt-card").querySelector("code");
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = "Selected";
    }
    window.setTimeout(() => { button.textContent = original; }, 1600);
  };

  const buildStage = document.querySelector('.slide[data-slide="31"] .visual-stage');
  if (buildStage) {
    buildStage.innerHTML = `
      <div class="final-prompt-layout build-prompt-layout">
        <aside class="prompt-guide" aria-label="Inputs to confirm">
          <span class="lab-chip">Lab 1</span>
          <strong>Build it</strong>
          <ul>
            <li><b>Memory</b><span>Saved guidance</span></li>
            <li><b>Company description</b><span>Project file</span></li>
            <li><b>Skills</b><span>Reusable methods</span></li>
            <li><b>MCP</b><span>Approved services</span></li>
            <li><b>Layout colours</b><span>Inspiration URLs</span></li>
            <li><b>Images</b><span>Image sources</span></li>
          </ul>
          <em>Original work</em>
        </aside>
        <section class="copy-prompt-card" aria-label="Web page design prompt">
          <header><div><b>Claude prompt</b><span>Replace [brackets]</span></div><button type="button">Copy prompt</button></header>
          <pre tabindex="0"><code></code></pre>
        </section>
      </div>`;
    buildStage.querySelector("code").textContent = buildPrompt;
    buildStage.querySelector("button").addEventListener("click", event => copyPrompt(event.currentTarget, buildPrompt));
  }

  const reviewStage = document.querySelector('.slide[data-slide="32"] .visual-stage');
  if (reviewStage) {
    reviewStage.innerHTML = `
      <div class="final-prompt-layout review-prompt-layout">
        <aside class="prompt-guide review-cycle" aria-label="Evaluation and iteration cycle">
          <span class="lab-chip">Final check</span>
          <strong>Review cycle</strong>
          <ol>
            <li><b>Evaluate</b><span>Inspect everything</span></li>
            <li><b>Prioritise</b><span>Choose changes</span></li>
            <li><b>Improve</b><span>Give specifics</span></li>
            <li><b>Recheck</b><span>All devices</span></li>
          </ol>
          <em>Repeat</em>
        </aside>
        <section class="copy-prompt-card" aria-label="Web page review prompt">
          <header><div><b>Review prompt</b><span>Approve changes</span></div><button type="button">Copy prompt</button></header>
          <pre tabindex="0"><code></code></pre>
        </section>
      </div>`;
    reviewStage.querySelector("code").textContent = reviewPrompt;
    reviewStage.querySelector("button").addEventListener("click", event => copyPrompt(event.currentTarget, reviewPrompt));
  }
})();
