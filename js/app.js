const SITE_DATA = {"units":[{"id":"unidad-1","number":"01","title":"Unidad 1","subtitle":"Lógica matemática","description":"Proposiciones, conectores lógicos, tablas de verdad, equivalencias e inferencia.","files":["AA 1.pdf","ACD 1.pdf","APE 1 FASE 1.pdf","APE 1 FASE 2.pdf","APE 1 FASE 3.pdf","APE 1 FASE 4.pdf","APE 1 FASE 5.pdf","APE 1 FASE 6.pdf"],"documents":[{"name":"AA 1.pdf","category":"AA","path":"pdfs/unidad-1/AA 1.pdf","size":"1.5 MB","bytes":1591687,"pages":16,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"ACD 1.pdf","category":"ACD","path":"pdfs/unidad-1/ACD 1.pdf","size":"2.3 MB","bytes":2373093,"pages":17,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 1.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 1.pdf","size":"913.2 KB","bytes":935162,"pages":8,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 2.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 2.pdf","size":"2.2 MB","bytes":2283378,"pages":60,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 3.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 3.pdf","size":"2.4 MB","bytes":2479461,"pages":54,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 4.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 4.pdf","size":"1.8 MB","bytes":1875185,"pages":38,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 5.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 5.pdf","size":"3.0 MB","bytes":3167852,"pages":44,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 6.pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 6.pdf","size":"171.3 KB","bytes":175380,"pages":4,"unitId":"unidad-1","unitTitle":"Unidad 1"}],"count":8},{"id":"unidad-2","number":"02","title":"Unidad 2","subtitle":"Álgebra de Boole","description":"Operaciones booleanas, simplificación, mapas de Karnaugh y aplicaciones.","files":["AA 1.pdf","ACD 1.pdf","APE 1 FASE 2.pdf","APE 2 FASE 3 Y 4.pdf","APE 2 FASE 5 Y 6.pdf"],"documents":[{"name":"AA 1.pdf","category":"AA","path":"pdfs/unidad-2/AA 1.pdf","size":"265.2 KB","bytes":271566,"pages":6,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"ACD 1.pdf","category":"ACD","path":"pdfs/unidad-2/ACD 1.pdf","size":"3.3 MB","bytes":3501968,"pages":25,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 1 FASE 2.pdf","category":"APE","path":"pdfs/unidad-2/APE 1 FASE 2.pdf","size":"3.7 MB","bytes":3830672,"pages":70,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 2 FASE 3 Y 4.pdf","category":"APE","path":"pdfs/unidad-2/APE 2 FASE 3 Y 4.pdf","size":"5.0 MB","bytes":5218633,"pages":70,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 2 FASE 5 Y 6.pdf","category":"APE","path":"pdfs/unidad-2/APE 2 FASE 5 Y 6.pdf","size":"4.0 MB","bytes":4143960,"pages":88,"unitId":"unidad-2","unitTitle":"Unidad 2"}],"count":5},{"id":"unidad-3","number":"03","title":"Unidad 3","subtitle":"Grafos y árboles","description":"Teoría de grafos, algoritmos de búsqueda, árboles y aplicaciones computacionales.","files":["AA TEORÍA DE GRAFOS.pdf","ACD TEORÍA DE GRAFOS.pdf","ACD ÁRBOLES.pdf","APE FASE 1-5 VERSIÓN 1.pdf","APE FASE 1-5 VERSIÓN FINAL.pdf"],"documents":[{"name":"AA TEORÍA DE GRAFOS.pdf","category":"AA","path":"pdfs/unidad-3/AA TEORÍA DE GRAFOS.pdf","size":"786.4 KB","bytes":805290,"pages":22,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"ACD TEORÍA DE GRAFOS.pdf","category":"ACD","path":"pdfs/unidad-3/ACD TEORÍA DE GRAFOS.pdf","size":"913.1 KB","bytes":935040,"pages":19,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"ACD ÁRBOLES.pdf","category":"ACD","path":"pdfs/unidad-3/ACD ÁRBOLES.pdf","size":"1.7 MB","bytes":1757152,"pages":18,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"APE FASE 1-5 VERSIÓN 1.pdf","category":"APE","path":"pdfs/unidad-3/APE FASE 1-5 VERSIÓN 1.pdf","size":"1.9 MB","bytes":2027814,"pages":54,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"APE FASE 1-5 VERSIÓN FINAL.pdf","category":"APE","path":"pdfs/unidad-3/APE FASE 1-5 VERSIÓN FINAL.pdf","size":"2.1 MB","bytes":2183510,"pages":69,"unitId":"unidad-3","unitTitle":"Unidad 3"}],"count":5}],"totalDocuments":18};

const container = document.querySelector('#unitsContainer');
const searchInput = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const clearFiltersButton = document.querySelector('#clearFilters');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const themeToggle = document.querySelector('#themeToggle');

let activeFilter = 'all';
let query = '';

const icons = {
  open: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5"/><path d="m10 14 9-9"/><path d="M19 13v6H5V5h6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`
};

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function safeUrl(path) {
  return path.split('/').map(part => encodeURIComponent(part)).join('/');
}

function createCard(doc) {
  const url = safeUrl(doc.path);
  const pages = doc.pages ? `${doc.pages} ${doc.pages === 1 ? 'página' : 'páginas'}` : 'PDF';
  return `
    <article class="document-card" data-category="${doc.category}" data-name="${normalize(doc.name)}">
      <div class="pdf-icon" aria-hidden="true">PDF</div>
      <div class="document-info">
        <h4 class="document-name">${doc.name}</h4>
        <div class="document-meta">
          <span class="category-badge">${doc.category}</span>
          <span>${pages}</span>
          <span>${doc.size}</span>
        </div>
      </div>
      <div class="card-actions">
        <a class="icon-button" data-label="Abrir" href="${url}" target="_blank" rel="noopener" aria-label="Abrir ${doc.name}" title="Abrir PDF">
          ${icons.open}
        </a>
        <a class="icon-button" data-label="Descargar" href="${url}" download aria-label="Descargar ${doc.name}" title="Descargar PDF">
          ${icons.download}
        </a>
      </div>
    </article>`;
}

function render() {
  let visibleTotal = 0;
  const html = SITE_DATA.units.map(unit => {
    const visibleDocs = unit.documents.filter(doc => {
      const matchesCategory = activeFilter === 'all' || doc.category === activeFilter;
      const matchesSearch = normalize(doc.name).includes(normalize(query));
      return matchesCategory && matchesSearch;
    });

    if (!visibleDocs.length) return '';
    visibleTotal += visibleDocs.length;

    return `
      <section class="unit-section" id="${unit.id}" aria-labelledby="${unit.id}-title">
        <div class="unit-header">
          <div class="unit-number" aria-hidden="true">${unit.number}</div>
          <div class="unit-heading">
            <h3 id="${unit.id}-title">${unit.title} <span>· ${unit.subtitle}</span></h3>
            <p>${unit.description}</p>
          </div>
          <span class="unit-count">${visibleDocs.length} ${visibleDocs.length === 1 ? 'archivo' : 'archivos'}</span>
        </div>
        <div class="documents-grid">
          ${visibleDocs.map(createCard).join('')}
        </div>
      </section>`;
  }).join('');

  container.innerHTML = html;
  resultCount.textContent = `${visibleTotal} ${visibleTotal === 1 ? 'resultado' : 'resultados'}`;
  emptyState.hidden = visibleTotal !== 0;
}

searchInput.addEventListener('input', event => {
  query = event.target.value.trim();
  render();
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('is-active', item === button));
    render();
  });
});

clearFiltersButton.addEventListener('click', () => {
  activeFilter = 'all';
  query = '';
  searchInput.value = '';
  filterButtons.forEach(item => item.classList.toggle('is-active', item.dataset.filter === 'all'));
  render();
  searchInput.focus();
});

document.addEventListener('keydown', event => {
  const target = event.target;
  const typing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
  if (event.key === '/' && !typing) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    query = '';
    render();
    searchInput.blur();
  }
});

const storedTheme = localStorage.getItem('md-theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
  document.documentElement.dataset.theme = storedTheme;
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('md-theme', next);
});

document.querySelector('#totalDocs').textContent = SITE_DATA.totalDocuments;
render();
