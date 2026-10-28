/* Approved Lab 1 additions; preserve the original shared renderer. */
(() => {
  if(document.body.dataset.deck!=='complete')return;
  const deck=window.DECKS.complete;
  const assets=new URL('./assets/lab1-feedback/',document.currentScript.src).href;
  const section = n => document.querySelector(`.slide[data-slide="${n}"]`);
  const stage = n => section(n).querySelector('.visual-stage');
  [2,5,8,9].forEach(n=>section(n).dataset.approvedFeedback='');
  const logo = `<img class="platform-logo" src="${assets}platform-icon.png" alt="Claude Platform logo">`;
  function tabs(n, panels) {
    const root = stage(n);
    root.innerHTML = `<div class="review-tabs execution-tabs" role="tablist">${panels.map(([key,label],i)=>`<button type="button" role="tab" class="${i?'':'active'}" aria-selected="${!i}" aria-controls="review-${n}-${key}" id="tab-${n}-${key}" data-review-tab="${key}">${label}</button>`).join('')}</div>${panels.map(([key,,html],i)=>`<div id="review-${n}-${key}" class="review-panel" role="tabpanel" aria-labelledby="tab-${n}-${key}"${i?' hidden':''}>${html}</div>`).join('')}`;
    root.querySelectorAll('[data-review-tab]').forEach(button => button.addEventListener('click',()=>{
      root.querySelectorAll('[data-review-tab]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-selected',String(b===button));});
      root.querySelectorAll('.review-panel').forEach(p=>p.hidden=p.id!==button.getAttribute('aria-controls'));
      section(n).classList.toggle('show-locations',n===2&&button.dataset.reviewTab!=='explanation');
    }));
  }
  function locations(local, code=false) {
    const scenes=local?[['local-work',0],['local-work',1],['local-work',2]]:[['cloud-work',0],['cloud-work',2],['local-work',2]];
    return `<div class="locations"><div class="location-questions"><p>Where are my files?</p><p>Where do the tools run?</p><p>Where does the model<br>process information?</p></div><div class="location-scenes">${scenes.map(([file,index],i)=>`<div class="location-scene"><img src="${assets}${file}.png" style="left:${index*-120}%" alt="${['Files '+(local?'on your computer':'in the cloud'),local?'Tools on your computer':'Tools in the cloud','Model on Anthropic servers'][i]}"></div>`).join('')}</div><div class="location-answers"><b>${local?'Your computer':'Cloud workspace'}</b><b>${local?'Your computer':'Cloud tools'}</b><b>Anthropic servers</b></div><div class="harness-role"><p class="harness-explanation"><b>Harness: the app’s organiser</b><br>It sends your request and files to the model and runs the tools the model asks for</p>${code?`<label>Code <select aria-label="Code environment" data-environment><option value="local" ${local?'selected':''}>Local</option><option value="cloud" ${local?'':'selected'}>Cloud</option></select></label>`:'<p>Local access through Desktop</p>'}</div></div>`;
  }
  stage(2).querySelector('.harness-examples').remove();
  const explanation=stage(2).innerHTML;
  tabs(2,[['explanation','Explanation',explanation],['code','Code',`<div data-code-locations>${locations(true,true)}</div>`],['cowork','Cowork',locations(false)]]);
  stage(2).addEventListener('change',e=>{if(e.target.matches('[data-environment]'))e.target.closest('[data-code-locations]').innerHTML=locations(e.target.value==='local',true);});

  stage(5).querySelector('.deployment-build b').textContent='Claude Cowork & Code';
  const destination=stage(5).querySelector('.deployment-destinations article');
  destination.querySelector('b').innerHTML='platform.<wbr>claude.com';
  destination.insertAdjacentHTML('afterbegin',logo);
  const overview=stage(5).innerHTML;
  tabs(5,[
    ['overview','Overview',overview],
    ['code','Code & Cowork',`<div class="use-case"><div><img class="platform-logo" src="shared/assets/orientation/claude.svg" alt="Claude logo"><h2>Build a website</h2><p>Discuss the business and design<br>then create and improve files</p></div><img class="case-screenshot" src="shared/assets/claude-code/code-web-builder.png" alt="Claude Code Web Builder project"></div>`],
    ['platform','platform.claude.com',`<div class="use-case platform-case"><div>${logo}<h2>Customer support</h2><p>A hosted assistant answers customers<br>while your laptop is off</p></div><img class="case-screenshot" src="${assets}platform-console.png" alt="Claude Console dashboard"></div>`],
    ['schedules','Schedules',`<div class="use-case"><div><h2>Morning briefing</h2><p>Cloud schedules run<br>with your laptop off</p><p>Context and connectors<br>must be accessible</p></div><div class="case-example"><h3>Example: weekday email summary</h3><strong class="briefing-time">7:00 am</strong><p><b>Client booking</b><br>Confirm Friday session availability</p><p><b>Supplier question</b><br>Review the updated delivery date</p><p>Suggested replies await your review</p></div></div>`],
    ['artifacts','Artifacts',`<div class="presentation-artifact"><p>This presentation</p></div>`]
  ]);
  stage(5).querySelectorAll('.use-case h2').forEach(heading=>heading.insertAdjacentHTML('beforebegin','<p class="case-label">Use-case example</p>'));


  function closing(n,message) {
    const s=section(n), root=stage(n), actions=root.querySelector(n===8?'.token-actions':'.training-actions');
    const button=document.createElement('button');button.className='primary';button.type='button';button.textContent='Why this matters';button.hidden=true;button.dataset.whyButton='';actions.append(button);
    const panel=document.createElement('div');panel.className='closing-message';panel.hidden=true;panel.innerHTML=`<p>${message}</p><div class="${n===8?'token-actions':'training-actions'}"><button type="button">Back to example</button></div>`;s.append(panel);
    const title=getComputedStyle(s.querySelector('h1'));panel.style.setProperty('--closing-colour',title.color);
    button.addEventListener('click',()=>{panel.hidden=false;s.classList.add('closing-open');panel.querySelector('button').focus();});
    panel.querySelector('button').addEventListener('click',()=>{panel.hidden=true;s.classList.remove('closing-open');button.focus();});
    if(n===8){const generate=root.querySelector('.generate-token');new MutationObserver(()=>button.hidden=generate.textContent!=='Complete').observe(generate,{childList:true,subtree:true});}
    else {root.querySelector('.audience-test').addEventListener('click',()=>button.hidden=false);root.querySelector('.reset-training').addEventListener('click',()=>button.hidden=true);}
  }
  closing(8,'Tokens cost money or consume your allowance');
  closing(9,'AI answers can include random variation');
  document.addEventListener('keydown',e=>{if(e.target.matches('input,select')&&['ArrowLeft','ArrowRight',' '].includes(e.key))e.stopImmediatePropagation();},true);
  addEventListener('hashchange',()=>{const n=location.hash.replace('#slide-','');const index=deck.slides.findIndex(s=>String(s.displayN)===n);if(index>=0)document.querySelector('#progress').children[index].click();});
})();
