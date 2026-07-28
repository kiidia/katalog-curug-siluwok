
(() => {
  const input = document.querySelector('[data-species-search]');
  if (!input) return;
  const cards = [...document.querySelectorAll('.species-card')];
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-empty-state]');
  const normalize = value => value.toLocaleLowerCase('id-ID').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const update = () => {
    const query = normalize(input.value.trim());
    let visible = 0;
    cards.forEach(card => {
      const match = normalize(card.dataset.search || '').includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    });
    if (count) count.textContent = `${visible} jenis ditemukan`;
    if (empty) empty.style.display = visible ? 'none' : 'block';
  };
  input.addEventListener('input', update);
  update();
})();
