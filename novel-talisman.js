/* Scoped interactions for the novel illustration; the Codex keeps its own state. */
(() => {
  const themes = {
    root:{en:'Protection and a bond with life.',es:'Protección y vínculo con la vida.'},
    tide:{en:'Adaptation, movement and memory.',es:'Adaptación, movimiento y memoria.'},
    horizon:{en:'Freedom and will.',es:'Libertad y voluntad.'},
    prismatic:{en:'Truth, multiplicity and perception.',es:'Verdad, multiplicidad y percepción.'},
    inner:{en:'Memory, fear and will.',es:'Memoria, miedo y voluntad.'},
    convergence:{en:'Powers that coexist.',es:'Poderes que coexisten.'},
    rupture:{en:'A dangerous frequency.',es:'Una frecuencia peligrosa.'},
    echo:{en:'What remains when a world can no longer answer.',es:'Lo que permanece cuando un mundo ya no puede responder.'},
    herald:{en:'The responsibility of carrying multiple worlds.',es:'La responsabilidad de cargar múltiples mundos.'}
  };

  function mount() {
    const root = document.getElementById('novelTalisman');
    if (!root || typeof runeData === 'undefined') return false;
    if (root.dataset.talismanReady) return true;
    root.dataset.talismanReady = 'true';
    const buttons = [...root.querySelectorAll('[data-talisman-rune]')];
    const title = root.querySelector('.novel-resonance-title');
    const detail = root.querySelector('.novel-resonance-detail');
    const artwork = root.querySelector('.novel-talisman-art');
    let hovered = null, focused = null, pinned = null;

    function render() {
      const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
      const active = hovered || focused || pinned;
      root.setAttribute('aria-label',lang === 'es' ? 'Talismán interactivo de las nueve runas' : 'Interactive nine-rune talisman');
      artwork.alt = lang === 'es' ? 'Un talismán primordial dorado suspendido entre mundos fracturados' : 'A primordial gold talisman suspended between fractured worlds';
      buttons.forEach(button => {
        const key = button.dataset.talismanRune;
        button.classList.toggle('is-lit',key === active);
        button.setAttribute('aria-pressed',String(key === pinned));
        button.setAttribute('aria-label',runeData[key].title[lang]);
      });
      title.textContent = active ? runeData[active].title[lang] : title.dataset[lang];
      detail.textContent = active ? (active === 'echo' ? themes.echo[lang] : runeData[active].world[lang]+' · '+themes[active][lang]) : detail.dataset[lang];
    }

    buttons.forEach(button => {
      const key = button.dataset.talismanRune;
      button.addEventListener('pointerenter',event => {
        if (event.pointerType !== 'touch') {hovered=key;render();}
      });
      button.addEventListener('pointerleave',() => {
        if (hovered === key) {hovered=null;render();}
      });
      button.addEventListener('focus',() => {hovered=null;focused=key;render();});
      button.addEventListener('blur',() => {
        if (focused === key) {focused=null;render();}
      });
      button.addEventListener('click',() => {
        pinned=pinned === key ? null : key;
        focused=null;
        render();
      });
    });
    root.querySelector('.novel-talisman-scene').addEventListener('click',event => {
      if (!event.target.closest('.novel-rune')) {hovered=null;focused=null;pinned=null;render();}
    });
    root.addEventListener('keydown',event => {
      if (event.key === 'Escape') {hovered=null;focused=null;pinned=null;render();}
    });
    new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    render();
    return true;
  }

  function init() {
    if (mount()) return;
    const host = document.getElementById('dynamicContent');
    if (!host) return;
    const observer = new MutationObserver(() => {if (mount()) observer.disconnect();});
    observer.observe(host,{childList:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
