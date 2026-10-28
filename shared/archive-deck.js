(function () {
  const prompting = window.DECKS.prompting;
  const security = window.DECKS.security;
  const archivedPrompting = prompting.slides.filter(slide => ![28, 35].includes(slide.n));
  const slides = [
    ...window.DECKS.theory.slides.filter(slide => [10, 13].includes(slide.n)).map(slide => ({
      ...slide,
      theme: slide.theme || window.DECKS.theory.theme,
      deckTitle: window.DECKS.theory.title
    })),
    ...archivedPrompting.map(slide => ({
      ...slide,
      theme: slide.theme || prompting.theme,
      deckTitle: prompting.title
    })),
    ...security.slides.map(slide => ({
      ...slide,
      theme: slide.theme || security.theme,
      deckTitle: security.title
    }))
  ];

  window.DECKS.archive = {
    title: "Archived Practice Slides",
    duration: slides.reduce((total, slide) => total + (slide.min || 0), 0),
    theme: "combined",
    subtitle: "Archived theory prompting and security material",
    slides
  };
})();
