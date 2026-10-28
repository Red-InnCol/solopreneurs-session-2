/* Speaker notes for the four approved feedback updates only. */
(() => {
  const slides=window.DECKS.complete.slides;
  const slide=n=>slides.find(s=>s.n===n);
  slide(2).note+=' Current Cowork sessions run in a hosted workspace; local file, browser and computer access requires Desktop open and connected. Local Code uses local files and commands while the model processes supplied context remotely. Cloud Code uses remote files and commands. Sources: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork and https://code.claude.com/docs/en/desktop';
  slide(5).items=['Claude Code','platform.claude.com','Schedules','Artifacts'];
  slide(5).note+=' The four use cases are examples, not exclusive product roles. Platform includes managed services as well as API access. Cloud schedules can run while the laptop is off when required context and connectors are accessible. Calculator pricing is illustrative. Sources: https://platform.claude.com/docs/en/managed-agents/overview and https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork';
  slide(8).note+=' Closing message: Tokens cost money or consume your allowance. API rates vary by model and input/output type. Subscription usage also depends on model, caching, effort and tools; there is no universal token-to-allowance conversion. Source: https://support.claude.com/en/articles/9797557-usage-limit-best-practices';
  slide(9).note+=' Closing message: AI answers can include random variation. Training learns parameters; generation can sample among likely continuations. Randomness is not the only cause of factual errors.';
})();
