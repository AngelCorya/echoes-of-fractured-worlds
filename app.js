async function loadEchoes(){
  const host=document.getElementById('dynamicContent');
  try{
    const [a,b1,b2]=await Promise.all([fetch('content-a.html').then(r=>r.text()),fetch('content-b1.html').then(r=>r.text()),fetch('content-b2.html').then(r=>r.text())]);
    host.innerHTML=a+b1+b2;
    initEchoes();
  }catch(e){host.innerHTML='<p class="loading">Unable to load the experience. Please refresh.</p>';console.error(e);}
}
function initEchoes(){
const langButton=document.getElementById('langButton');
let lang=localStorage.getItem('echoes-lang')||'en';
let selectedRune='root';
function applyLang(){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-es]').forEach(el=>el.textContent=el.dataset[lang]);langButton.textContent=lang==='en'?'ES':'EN';renderRune(selectedRune)}
langButton.onclick=()=>{lang=lang==='en'?'es':'en';localStorage.setItem('echoes-lang',lang);applyLang()};
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
function renderRune(key){const d=runeData[key]||runeData.root;selectedRune=key in runeData?key:'root';document.querySelectorAll('.rune-node').forEach(b=>{b.classList.toggle('active',b.dataset.rune===selectedRune);b.setAttribute('aria-pressed',b.dataset.rune===selectedRune)});const l=lang==='es'?'es':'en';const img=document.getElementById('runePanelImage');img.src=d.image;img.alt=d.title[l];document.getElementById('runePanelType').textContent=d.type[l];document.getElementById('runePanelTitle').textContent=d.title[l];document.getElementById('runePanelWorld').textContent=d.world[l];document.getElementById('runePanelDescription').textContent=d.description[l];document.getElementById('runePanelIdentity').textContent=d.identity[l];const ul=document.getElementById('runePanelAbilities');ul.replaceChildren(...d.abilities[l].map(x=>{const li=document.createElement('li');li.textContent=x;return li}));const fav=document.getElementById('favoriteRune').value;document.getElementById('choiceFeedback').textContent=fav===d.title.en?(l==='es'?'✓ Esta es tu elección actual.':'✓ This is your current choice.') : ''}
document.querySelectorAll('.rune-node').forEach(b=>b.onclick=()=>renderRune(b.dataset.rune));document.getElementById('chooseRune').onclick=()=>{const d=runeData[selectedRune];document.getElementById('favoriteRune').value=d.title.en;document.getElementById('choiceFeedback').textContent=lang==='es'?'✓ Guardada como la runa que desbloquearías primero.':'✓ Saved as the rune you would unlock first.'};
const form=document.getElementById('echoesSurvey'),result=document.getElementById('surveyResult'),output=document.getElementById('surveyOutput');form.onsubmit=e=>{e.preventDefault();const fd=new FormData(form),ints=fd.getAll('interest');output.textContent=['ECHOES OF FRACTURED WORLDS — EARLY AUDIENCE FEEDBACK','Interests: '+(ints.length?ints.join(', '):'Not specified'),'Preferred language: '+(fd.get('language')||''),'Preferred platform: '+(fd.get('platform')||''),'Comfortable game price: '+(fd.get('gamePrice')||''),'Strongest hook: '+(fd.get('hook')||''),'Rune I would unlock first: '+(fd.get('favoriteRune')||'Not selected'),'Wants updates: '+(fd.get('updates')?'Yes':'No'),'Comment: '+(fd.get('comment')||'—')].join('\n');result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'center'})};
document.getElementById('copySurvey').onclick=async()=>{try{await navigator.clipboard.writeText(output.textContent)}catch{};const b=document.getElementById('copySurvey'),old=b.textContent;b.textContent=lang==='es'?'Copiado ✓':'Copied ✓';setTimeout(()=>b.textContent=old,1600)};
applyLang();renderRune('root');
}
loadEchoes();