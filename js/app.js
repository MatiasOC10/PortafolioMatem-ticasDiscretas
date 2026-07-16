const SITE_DATA = {"units":[{"id":"unidad-1","number":"01","title":"Unidad 1","subtitle":"Lógica matemática","description":"Proposiciones, conectores lógicos, tablas de verdad, equivalencias e inferencia.","files":["AA(1).pdf","ACD 1(2).pdf","APE 1 FASE 1(1).pdf","APE 1 FASE 2(2).pdf","APE 1 FASE 3(1).pdf","APE 1 FASE 4(1).pdf","APE 1 FASE 5(1).pdf","APE 1 FASE 6(1).pdf"],"documents":[{"name":"AA(1).pdf","category":"AA","path":"pdfs/unidad-1/AA(1).pdf","size":"1.5 MB","bytes":1591687,"pages":16,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"ACD 1(2).pdf","category":"ACD","path":"pdfs/unidad-1/ACD 1(2).pdf","size":"2.3 MB","bytes":2373093,"pages":17,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 1(1).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 1(1).pdf","size":"913.2 KB","bytes":935162,"pages":8,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 2(2).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 2(2).pdf","size":"2.2 MB","bytes":2283378,"pages":60,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 3(1).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 3(1).pdf","size":"2.4 MB","bytes":2479461,"pages":54,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 4(1).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 4(1).pdf","size":"1.8 MB","bytes":1875185,"pages":38,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 5(1).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 5(1).pdf","size":"3.0 MB","bytes":3167852,"pages":44,"unitId":"unidad-1","unitTitle":"Unidad 1"},{"name":"APE 1 FASE 6(1).pdf","category":"APE","path":"pdfs/unidad-1/APE 1 FASE 6(1).pdf","size":"171.3 KB","bytes":175380,"pages":4,"unitId":"unidad-1","unitTitle":"Unidad 1"}],"count":8},{"id":"unidad-2","number":"02","title":"Unidad 2","subtitle":"Álgebra de Boole","description":"Operaciones booleanas, simplificación, mapas de Karnaugh y aplicaciones.","files":["AA 1(1).pdf","ACD 1(3).pdf","APE 1 FASE 2(3).pdf","APE 2 FASE 3 Y 4(1).pdf","APE 2 FASE 5 Y 6(1).pdf"],"documents":[{"name":"AA 1(1).pdf","category":"AA","path":"pdfs/unidad-2/AA 1(1).pdf","size":"265.2 KB","bytes":271566,"pages":6,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"ACD 1(3).pdf","category":"ACD","path":"pdfs/unidad-2/ACD 1(3).pdf","size":"3.3 MB","bytes":3501968,"pages":25,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 1 FASE 2(3).pdf","category":"APE","path":"pdfs/unidad-2/APE 1 FASE 2(3).pdf","size":"3.7 MB","bytes":3830672,"pages":70,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 2 FASE 3 Y 4(1).pdf","category":"APE","path":"pdfs/unidad-2/APE 2 FASE 3 Y 4(1).pdf","size":"5.0 MB","bytes":5218633,"pages":70,"unitId":"unidad-2","unitTitle":"Unidad 2"},{"name":"APE 2 FASE 5 Y 6(1).pdf","category":"APE","path":"pdfs/unidad-2/APE 2 FASE 5 Y 6(1).pdf","size":"4.0 MB","bytes":4143960,"pages":88,"unitId":"unidad-2","unitTitle":"Unidad 2"}],"count":5},{"id":"unidad-3","number":"03","title":"Unidad 3","subtitle":"Grafos y árboles","description":"Teoría de grafos, algoritmos de búsqueda, árboles y aplicaciones computacionales.","files":["AA TEORÍA DE GRAFOS(1).pdf","AA2 ÁRBOLES.pdf","ACD TEORÍA DE GRAFOS(1).pdf","ACD ÁRBOLES(1).pdf","APE FASE 1-5 VERSIÓN 1(1).pdf","APE FASE 1-5 VERSIÓN FINAL(1).pdf"],"documents":[{"name":"AA TEORÍA DE GRAFOS(1).pdf","category":"AA","path":"pdfs/unidad-3/AA TEORÍA DE GRAFOS(1).pdf","size":"786.4 KB","bytes":805290,"pages":22,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"AA2 ÁRBOLES.pdf","category":"AA","path":"pdfs/unidad-3/AA2 ÁRBOLES.pdf","size":"861.1 KB","bytes":881781,"pages":28,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"ACD TEORÍA DE GRAFOS(1).pdf","category":"ACD","path":"pdfs/unidad-3/ACD TEORÍA DE GRAFOS(1).pdf","size":"913.1 KB","bytes":935040,"pages":19,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"ACD ÁRBOLES(1).pdf","category":"ACD","path":"pdfs/unidad-3/ACD ÁRBOLES(1).pdf","size":"1.7 MB","bytes":1757152,"pages":18,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"APE FASE 1-5 VERSIÓN 1(1).pdf","category":"APE","path":"pdfs/unidad-3/APE FASE 1-5 VERSIÓN 1(1).pdf","size":"1.9 MB","bytes":2027814,"pages":54,"unitId":"unidad-3","unitTitle":"Unidad 3"},{"name":"APE FASE 1-5 VERSIÓN FINAL(1).pdf","category":"APE","path":"pdfs/unidad-3/APE FASE 1-5 VERSIÓN FINAL(1).pdf","size":"2.1 MB","bytes":2183510,"pages":69,"unitId":"unidad-3","unitTitle":"Unidad 3"}],"count":6}],"totalDocuments":19};

const UNIT_CONTENT = {
  'unidad-1': {
    intro: 'La lógica matemática estudia cómo representar y evaluar razonamientos mediante proposiciones. En esta unidad se trabaja desde los conectores básicos hasta la validez de argumentos, construyendo una base formal para resolver problemas de computación e ingeniería.',
    objective: 'Interpretar expresiones lógicas, construir tablas de verdad y aplicar equivalencias y reglas de inferencia para justificar conclusiones correctamente.',
    concepts: ['Proposiciones simples y compuestas', 'Conectores lógicos', 'Tablas de verdad', 'Equivalencias y formas normales', 'Inferencia y deducción'],
    path: ['Proposición', 'Conectores', 'Tabla de verdad', 'Equivalencia', 'Inferencia'],
    visual: 'logic'
  },
  'unidad-2': {
    intro: 'El álgebra de Boole transforma decisiones lógicas en expresiones binarias que pueden simplificarse y convertirse en circuitos. La unidad conecta las leyes booleanas con mapas de Karnaugh y con aplicaciones reales en programación, bases de datos y diseño digital.',
    objective: 'Simplificar funciones booleanas mediante propiedades algebraicas y mapas de Karnaugh, y relacionar el resultado con implementaciones computacionales más eficientes.',
    concepts: ['Operaciones AND, OR y NOT', 'Leyes del álgebra de Boole', 'Formas SOP y POS', 'Mapas de Karnaugh', 'Compuertas y optimización'],
    path: ['Operación', 'Expresión', 'Simplificación', 'Karnaugh', 'Circuito'],
    visual: 'boolean'
  },
  'unidad-3': {
    intro: 'Los grafos y los árboles permiten modelar relaciones entre objetos: rutas, redes sociales, conexiones de computadoras y estructuras de datos. Esta unidad integra representación, recorridos y algoritmos para analizar redes y encontrar soluciones eficientes.',
    objective: 'Representar grafos, aplicar BFS, DFS y Dijkstra, y comprender árboles y recorridos como herramientas esenciales de las ciencias de la computación.',
    concepts: ['Vértices, aristas y grados', 'Matrices y listas de adyacencia', 'BFS, DFS y Dijkstra', 'Árboles binarios y BST', 'Recorridos y aplicaciones'],
    path: ['Modelo', 'Representación', 'Recorrido', 'Camino mínimo', 'Árbol'],
    visual: 'graphs'
  }
};

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

function cleanDisplayName(name) {
  return name.replace(/\(\d+\)(?=\.pdf$)/i, '');
}

function getCategoryCounts(documents) {
  return ['AA', 'ACD', 'APE'].map(category => ({
    category,
    count: documents.filter(doc => doc.category === category).length
  }));
}

function renderPortfolioChart(unit) {
  const counts = getCategoryCounts(unit.documents);
  const max = Math.max(...counts.map(item => item.count), 1);
  return `
    <div class="portfolio-chart" aria-label="Composición del portafolio de ${unit.title}">
      <p class="mini-title">Composición del portafolio</p>
      ${counts.map(item => `
        <div class="chart-row">
          <span>${item.category}</span>
          <div class="chart-track" aria-hidden="true">
            <i style="width:${Math.max((item.count / max) * 100, item.count ? 12 : 0)}%"></i>
          </div>
          <strong>${item.count}</strong>
        </div>`).join('')}
    </div>`;
}

function renderVisual(type) {
  if (type === 'logic') {
    return `
      <svg class="concept-graphic" viewBox="0 0 420 250" role="img" aria-label="Diagrama de lógica proposicional y tabla de verdad">
        <g class="graphic-lines" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M72 68H174M246 68H350M210 95V150"/>
          <path d="M102 188H318" stroke-dasharray="5 7"/>
        </g>
        <g class="graphic-node">
          <circle cx="72" cy="68" r="31"/><circle cx="210" cy="68" r="31"/><circle cx="350" cy="68" r="31"/>
        </g>
        <g class="graphic-text" text-anchor="middle">
          <text x="72" y="74">p</text><text x="210" y="74">p → q</text><text x="350" y="74">q</text>
        </g>
        <g class="truth-table">
          <rect x="112" y="150" width="196" height="78" rx="12"/>
          <path d="M112 176H308M160 150V228M210 150V228M260 150V228"/>
          <text x="136" y="169">p</text><text x="185" y="169">q</text><text x="235" y="169">¬p</text><text x="284" y="169">p→q</text>
          <text x="136" y="198">V</text><text x="185" y="198">F</text><text x="235" y="198">F</text><text x="284" y="198">F</text>
          <text x="136" y="219">F</text><text x="185" y="219">V</text><text x="235" y="219">V</text><text x="284" y="219">V</text>
        </g>
      </svg>`;
  }

  if (type === 'boolean') {
    return `
      <svg class="concept-graphic" viewBox="0 0 420 250" role="img" aria-label="Mapa de Karnaugh y circuito lógico simplificado">
        <g class="kmap" transform="translate(35 34)">
          <rect width="180" height="180" rx="14"/>
          <path d="M45 0V180M90 0V180M135 0V180M0 45H180M0 90H180M0 135H180"/>
          <rect class="kmap-group" x="47" y="47" width="86" height="86" rx="16"/>
          <g class="kmap-ones" text-anchor="middle">
            <text x="68" y="77">1</text><text x="112" y="77">1</text><text x="68" y="122">1</text><text x="112" y="122">1</text>
          </g>
        </g>
        <g class="gate-lines" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M245 80H292M245 154H292M357 117H395"/>
        </g>
        <g class="gate-shape">
          <path d="M292 65H326C357 65 372 87 372 117C372 147 357 169 326 169H292Z"/>
        </g>
        <g class="graphic-text" text-anchor="middle">
          <text x="239" y="84">A</text><text x="239" y="158">B</text><text x="390" y="109">F</text>
          <text x="332" y="123">AND</text>
        </g>
      </svg>`;
  }

  return `
    <svg class="concept-graphic" viewBox="0 0 420 250" role="img" aria-label="Grafo conectado y árbol binario">
      <g class="graphic-lines" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M56 76L132 42L176 105L103 155L56 76M132 42L214 75L176 105M103 155L176 105L210 182"/>
        <path d="M298 55L262 110M298 55L344 110M262 110L238 168M262 110L282 168M344 110L326 168M344 110L372 168"/>
      </g>
      <g class="graphic-node">
        <circle cx="56" cy="76" r="16"/><circle cx="132" cy="42" r="16"/><circle cx="176" cy="105" r="16"/>
        <circle cx="103" cy="155" r="16"/><circle cx="214" cy="75" r="16"/><circle cx="210" cy="182" r="16"/>
        <circle cx="298" cy="55" r="17"/><circle cx="262" cy="110" r="15"/><circle cx="344" cy="110" r="15"/>
        <circle cx="238" cy="168" r="13"/><circle cx="282" cy="168" r="13"/><circle cx="326" cy="168" r="13"/><circle cx="372" cy="168" r="13"/>
      </g>
      <g class="graphic-text" text-anchor="middle">
        <text x="135" y="225">Grafo</text><text x="308" y="225">Árbol</text>
      </g>
    </svg>`;
}

function renderUnitOverview(unit) {
  const content = UNIT_CONTENT[unit.id];
  const totalPages = unit.documents.reduce((sum, doc) => sum + (doc.pages || 0), 0);

  return `
    <div class="unit-overview">
      <div class="overview-copy">
        <p class="overview-kicker">Introducción a la unidad</p>
        <h4>¿Qué se aprendió?</h4>
        <p class="overview-intro">${content.intro}</p>

        <div class="objective-box">
          <span>Objetivo</span>
          <p>${content.objective}</p>
        </div>

        <div class="concept-list" aria-label="Conceptos principales">
          ${content.concepts.map(concept => `<span>${concept}</span>`).join('')}
        </div>

        <div class="learning-path" aria-label="Ruta de aprendizaje">
          ${content.path.map((step, index) => `
            <div class="path-step">
              <i>${index + 1}</i>
              <span>${step}</span>
            </div>`).join('')}
        </div>
      </div>

      <aside class="unit-visual-card">
        <div class="visual-heading">
          <div>
            <p class="overview-kicker">Mapa visual</p>
            <h4>${unit.subtitle}</h4>
          </div>
          <span class="pages-badge">${totalPages} páginas</span>
        </div>
        ${renderVisual(content.visual)}
        ${renderPortfolioChart(unit)}
      </aside>
    </div>`;
}

function createCard(doc) {
  const url = safeUrl(doc.path);
  const pages = doc.pages ? `${doc.pages} ${doc.pages === 1 ? 'página' : 'páginas'}` : 'PDF';
  const displayName = cleanDisplayName(doc.name);
  return `
    <article class="document-card" data-category="${doc.category}" data-name="${normalize(doc.name)}">
      <div class="pdf-icon" aria-hidden="true">PDF</div>
      <div class="document-info">
        <h4 class="document-name">${displayName}</h4>
        <div class="document-meta">
          <span class="category-badge">${doc.category}</span>
          <span>${pages}</span>
          <span>${doc.size}</span>
        </div>
      </div>
      <div class="card-actions">
        <a class="icon-button" data-label="Abrir" href="${url}" target="_blank" rel="noopener" aria-label="Abrir ${displayName}" title="Abrir PDF">
          ${icons.open}
        </a>
        <a class="icon-button" data-label="Descargar" href="${url}" download aria-label="Descargar ${displayName}" title="Descargar PDF">
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

        ${renderUnitOverview(unit)}

        <div class="files-heading">
          <div>
            <p class="overview-kicker">Material de estudio</p>
            <h4>Documentos de ${unit.title}</h4>
          </div>
          <span>${visibleDocs.length} PDF</span>
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
