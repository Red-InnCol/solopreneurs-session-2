(function () {
  window.DECKS.finalLab = {
    title: "Lab 1 Practice",
    duration: 30,
    totalSlides: 4,
    theme: "cinematic",
    subtitle: "Evaluate the setup build the web page and improve it",
    slides: [
      {
        n: 29,
        min: 4,
        priority: "P1",
        layout: "human-iteration",
        title: "Evaluate Then Iterate",
        subtitle: "You may not get what you want first time",
        objective: "Participants evaluate an AI result and give specific improvement instructions before trying again.",
        visual: "Four versions of one wellbeing image improve beside two concise human-judgement principles.",
        action: "Identify what changed between attempts and write one specific next instruction.",
        items: ["Evaluation", "Iteration"],
        conceptNotes: [
          "Judge the result against the intended outcome.",
          "Give specific correction then run another attempt."
        ],
        note: "Human involvement does not end when the AI returns an output. Evaluation checks the result against the intended goal and standards. Iteration turns that judgement into specific instructions for the next attempt. The sequence may repeat several times before the result is ready."
      },
      {
        n: 30,
        min: 4,
        priority: "P1",
        layout: "session-checklist",
        title: "Check Before Every Session",
        subtitle: "Confirm your setup before starting",
        objective: "Participants use one repeatable checklist before beginning agent work.",
        visual: "One durable checklist consolidates the setup decisions taught during the session.",
        action: "Complete every check and resolve uncertainty before prompting.",
        items: ["Work mode", "Execution", "Project", "Model", "Effort", "Context", "Permissions"],
        conceptNotes: [
          "Choose the interface that suits the work.",
          "Confirm which computer will run commands.",
          "Open the intended project folder.",
          "Match capability to task complexity.",
          "Choose enough effort for the consequence.",
          "Load relevant current non-conflicting information.",
          "Select the intended approval mode."
        ],
        note: "Use this checklist at the start of every session. Work mode means choosing Cowork or Code. Execution means confirming Local or Cloud. Stop and correct the setup when any answer is uncertain."
      },
      {
        n: 31,
        min: 10,
        priority: "P1",
        layout: "webpage-prompt",
        title: "Build Your Web Page",
        subtitle: "Combine everything from Lab 1",
        objective: "Participants use their company description, project context, assets, branding, and selected inspiration to direct Claude to build a web page.",
        visual: "A copy-ready prompt beside the six project inputs participants should confirm.",
        action: "Replace the placeholders, copy the prompt, and paste it into Claude.",
        items: ["Memory", "Company description", "Skills", "MCP", "Layout colours", "Images"],
        conceptNotes: [
          "Use the company description as the source of truth.",
          "Use prepared memory skills and authorised MCP connections when relevant.",
          "Reference inspiration websites without copying them.",
          "Use brand colours from the company description when defined.",
          "Use project images a folder path or image URLs.",
          "Require a responsive and accessible result."
        ],
        note: "This is the Lab 1 build activity. Participants confirm the six project inputs and replace every bracketed placeholder before copying the prompt. Inspiration sites may guide different aspects of the design, but Claude must not copy their protected text, branding, or images."
      },
      {
        n: 32,
        min: 8,
        priority: "P1",
        layout: "review-prompt",
        title: "Evaluate Then Improve",
        subtitle: "Review deliberately then give specific corrections",
        objective: "Participants evaluate the completed web page systematically and turn observations into specific approved revisions.",
        visual: "A review cycle and a copy-ready evaluation prompt.",
        action: "Run the review prompt, choose the changes, and repeat until approved.",
        items: ["Evaluate", "Prioritise", "Improve", "Recheck"],
        conceptNotes: [
          "Review the page before changing it.",
          "Prioritise issues by their effect on the visitor.",
          "Give concrete directions and reference inspiration.",
          "Recheck desktop and mobile after every revision."
        ],
        note: "Evaluation is not a vague request to make the page better. Participants check specific criteria, select which recommendations to apply, and ask Claude to verify the revised page at desktop and mobile sizes."
      }
    ]
  };
})();
