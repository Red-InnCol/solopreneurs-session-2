(function () {
  const sections = ["orientation", "theory", "setup"];
  const slides = sections.flatMap(key => {
    const section = window.DECKS[key];
    return section.slides
      .filter(slide => !(key === "setup" && slide.n === 27) && ![10, 13].includes(slide.n))
      .map(slide => ({
      ...slide,
      theme: slide.theme || section.theme,
      deckTitle: section.title
      }));
  });

  const prompting = window.DECKS.prompting;
  prompting.slides
    .filter(slide => [28, 35].includes(slide.n))
    .forEach(slide => slides.push({
      ...slide,
      theme: slide.theme || prompting.theme,
      deckTitle: prompting.title
    }));

  const finalLab = window.DECKS.finalLab;
  finalLab.slides.forEach(slide => slides.push({
    ...slide,
    theme: slide.theme || finalLab.theme,
    deckTitle: finalLab.title
  }));

  const harnessIndex = slides.findIndex(slide => slide.n === 2);
  const [harnessSlide] = slides.splice(harnessIndex, 1);
  const buildIndex = slides.findIndex(slide => slide.n === 5);
  slides.splice(buildIndex + 1, 0, harnessSlide);

  slides.forEach((slide, index) => {
    slide.displayN = index + 1;
  });

  window.DECKS.complete = {
    title: "Applied AI Course",
    duration: slides.reduce((total, slide) => total + (slide.min || 0), 0),
    theme: "combined",
    subtitle: "Orientation AI 101 Claude Code and prompting habits",
    totalSlides: slides.length,
    slides
  };
})();
