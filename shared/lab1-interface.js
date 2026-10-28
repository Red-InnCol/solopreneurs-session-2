(() => {
  if(document.body.dataset.deck!=="complete")return;
  const section=n=>document.querySelector(`.slide[data-slide="${n}"]`);
  [15,16,17,18,19,24].forEach(n=>section(n).dataset.interfaceRefresh='');
  const shot=(key,detail=false)=>`<figure class="refresh-figure shot-${key} ${detail?'with-detail':''}"><div class="refresh-picture">${annotatedShot(key)}</div>${detail?`<div class="refresh-detail">${annotatedShot(key,{zoom:true})}</div>`:''}<figcaption>${INTERFACE_SHOTS[key].caption}</figcaption></figure>`;
  section(15).querySelector('[data-execution-panel="code"]').innerHTML=shot('code',true);
  section(16).querySelector('[data-execution-panel="interface"]').innerHTML=shot('environment',true);
  section(17).querySelector('[data-execution-panel="code"]').innerHTML=shot('permissions');
  section(18).querySelector('[data-execution-panel="code"]').innerHTML=shot('folder');
  section(19).querySelector('[data-execution-panel="code"]').innerHTML=shot('model');
  section(24).querySelector('[data-execution-panel="interface"]').innerHTML=shot('context',true);

  const modelSwitcher=section(19).querySelector('[data-execution-switcher]');
  const modelTabs=modelSwitcher.querySelector('.execution-tabs');
  const usageButton=document.createElement('button');usageButton.type='button';usageButton.role='tab';usageButton.dataset.executionTab='usage';usageButton.textContent='Usage Credits';usageButton.setAttribute('aria-selected','false');modelTabs.append(usageButton);
  const usagePanel=document.createElement('div');usagePanel.className='execution-view model-choice-view';usagePanel.dataset.executionPanel='usage';usagePanel.hidden=true;usagePanel.innerHTML=shot('usage');modelSwitcher.append(usagePanel);
  modelTabs.addEventListener('click',e=>{
    const selected=e.target.closest('[data-execution-tab]');if(!selected)return;
    modelTabs.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b===selected);b.setAttribute('aria-selected',String(b===selected));});
    modelSwitcher.querySelectorAll('[data-execution-panel]').forEach(p=>p.hidden=p.dataset.executionPanel!==selected.dataset.executionTab);
  });
})();
