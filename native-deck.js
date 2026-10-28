(function () {
  window.DECKS = {lab2:{
    title:window.LAB2.title, totalSlides:window.LAB2.slides.length,
    duration:0, theme:'cinematic',
    slides:window.LAB2.slides.map(s=>({
      ...s, n:100+s.n, displayN:s.n, min:0, priority:'P1',
      layout:s.kind==='hero'?'lab-hero':s.kind==='map'?'agent-navigation':'lab2-content',
      image:s.kind==='hero'?'shared/assets/redesign/four-agent-roles.png':s.kind==='map'?'shared/assets/redesign/agent-system.png':undefined,
      navStage:Array.isArray(s.focus)?s.focus.at(-1):s.focus,
      navCurrent:s.focus?(Array.isArray(s.focus)?s.focus:[s.focus]):undefined,
      navComplete:s.complete||[],
      objective:s.subtitle,
      visual:s.kind==='map'?'The shared five-component agent map':s.title,
      action:s.tabs.some(t=>t.prompt)?'Read the instructions and use the copyable prompt.':'Review the slide before continuing.',
      items:[], note:s.note+(s.sources?.length?' Sources: '+s.sources.join(' '):'')
    }))
  }};
})();
