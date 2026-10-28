/* Approved revisions for original slides 12, 16, 18 and 22. */
(() => {
  if (document.body.dataset.deck !== "complete") return;
  [12,16,18,22].forEach(n=>document.querySelector(`.slide[data-slide="${n}"]`).dataset.approvedNext="");
  const section = n => document.querySelector(`.slide[data-slide="${n}"]`);
  const root12 = section(12);
  const prompt = root12.querySelector('.variation-prompt');
  const distribution = root12.querySelector('.variation-distribution');
  const originalPrompt = prompt.querySelector('span').textContent;
  const initialCities = window.DECKS.complete.slides.find(s=>s.n===12).items.map(item=>{
    const [,name,weight] = item.match(/^(.*) (\d+)%$/);
    return [name,Number(weight)];
  });
  const refinedCities = [['Adelaide',70],['Melbourne',15],['Sydney',10],['Brisbane',5]];
  const button = document.createElement('button');
  button.type='button'; button.className='refine-prompt'; button.textContent='Add my preferences';
  prompt.append(button);
  let refined=false;
  function renderCities(cities) {
    distribution.innerHTML = `<div class="city-grid">${cities.map(([city,weight])=>`<figure><img src="shared/assets/lab1-next/city-${city.toLowerCase()}.png" alt="${city}"><figcaption><span>${city}</span><b>${weight}%</b></figcaption></figure>`).join('')}</div>`;
  }
  renderCities(initialCities);
  button.addEventListener('click',()=>{
    refined=!refined;
    prompt.querySelector('span').textContent=refined?'I prefer mid-size cities with warm dry summers and mild winters.\n\nWhat is Australia’s best city?':originalPrompt;
    button.textContent=refined?'Back to original prompt':'Add my preferences';
    button.setAttribute('aria-pressed',String(refined));
    renderCities(refined?refinedCities:initialCities);
  });

  section(16).querySelector('.execution-local span').textContent='Use existing files directly and keep your work locally';
  section(16).querySelector('.execution-cloud span').textContent='Run tasks remotely';

  const project=section(18);
  project.querySelectorAll('.project-boundary span').forEach((el,i)=>el.textContent=['Manage context','Keep outputs locally','Avoid repeated uploads','Reuse files across providers'][i]);
  const switcher=project.querySelector('[data-execution-switcher]');
  const tabs=switcher.querySelector('.execution-tabs');
  for(const [key,label] of [['windows','Windows'],['mac','Mac']]) {
    const tab=document.createElement('button');tab.type='button';tab.role='tab';tab.dataset.executionTab=key;tab.textContent=label;tab.setAttribute('aria-selected','false');tabs.insertBefore(tab,tabs.querySelector('[data-execution-tab="code"]'));
    const panel=document.createElement('div');panel.className='execution-view project-home-view folder-view';panel.dataset.executionPanel=key;panel.hidden=true;
    panel.innerHTML=key==='windows'?`<div class="folder-steps" role="tablist" aria-label="Windows folder steps"><button type="button" class="active" role="tab" aria-selected="true" data-folder-step="users">1 · C: → Users</button><button type="button" role="tab" aria-selected="false" data-folder-step="home">2 · Your name → Projects</button></div><figure class="folder-shot"><img src="shared/assets/lab1-next/windows-users.png" alt="Sanitised Windows C drive with Users selected"><figcaption>Create a <strong>Projects</strong> folder on your C: drive, then a <strong>Web-Builder</strong> subfolder</figcaption></figure>`:`<figure class="folder-shot"><img src="shared/assets/lab1-next/mac-home.png" alt="Sanitised Mac home folder showing Projects"><figcaption>Create a <strong>Projects</strong> folder in your Home folder, then a <strong>Web-Builder</strong> subfolder</figcaption></figure>`;
    switcher.append(panel);
  }
  const windowsFigure=switcher.querySelector('[data-execution-panel="windows"] .folder-shot');
  const windowsOverview=windowsFigure.querySelector('img');
  const windowsImages=document.createElement('div');windowsImages.className='windows-folder-images';
  windowsOverview.before(windowsImages);windowsImages.append(windowsOverview);
  const detail=document.createElement('div');detail.className='folder-detail users-detail';detail.setAttribute('aria-label','Enlarged view of the selected Users folder');
  detail.innerHTML='<img src="shared/assets/lab1-next/windows-users.png" alt="Users folder close-up">';windowsImages.append(detail);
  // Bind all five tabs together; existing original handlers remain harmless.
  tabs.addEventListener('click',e=>{
    const selected=e.target.closest('[data-execution-tab]');if(!selected)return;
    tabs.querySelectorAll('button').forEach(t=>{t.classList.toggle('active',t===selected);t.setAttribute('aria-selected',String(t===selected));});
    switcher.querySelectorAll('[data-execution-panel]').forEach(p=>p.hidden=p.dataset.executionPanel!==selected.dataset.executionTab);
  });
  switcher.querySelectorAll('[data-folder-step]').forEach(button=>button.addEventListener('click',()=>{
    switcher.querySelectorAll('[data-folder-step]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button));});
    const img=switcher.querySelector('[data-execution-panel="windows"] img');
    img.src=button.dataset.folderStep==='users'?'shared/assets/lab1-next/windows-users.png':'shared/assets/lab1-next/windows-home.png';
    img.alt=button.dataset.folderStep==='users'?'Sanitised Windows C drive with Users selected':'Sanitised Windows user folder with Projects selected';
    detail.className='folder-detail '+(button.dataset.folderStep==='users'?'users-detail':'home-detail');
    detail.querySelector('img').src=img.src;
    detail.querySelector('img').alt=button.dataset.folderStep==='users'?'Users folder close-up':'Projects folder close-up';
    windowsFigure.querySelector('figcaption').innerHTML='Create a <strong>Projects</strong> folder on your C: drive, then a <strong>Web-Builder</strong> subfolder';
  }));

  const skill=section(22);
  const skillInterface=skill.querySelector('[data-execution-panel="interface"]');
  skillInterface.innerHTML='<figure class="revised-skills-shot"><img src="shared/assets/lab1-next/frontend-add.png" alt="Claude Settings Skills showing frontend-design and its Add button"><figcaption>Settings → Skills → search frontend → Add</figcaption></figure>';
  const steps=skill.querySelector('.frontend-skill-steps');
  steps.firstElementChild.remove();
  steps.querySelector('.step-label b').textContent='1';
  steps.querySelector('.step-label span').textContent='Use the skill';

})();
