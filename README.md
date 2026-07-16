# Matemáticas Discretas - Ciclo 1

Sitio web estático para organizar los PDF del Ciclo 1 de Matemáticas Discretas en tres unidades.

## Estructura

```text
matematicas-discretas-ciclo-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── pdfs/
│   ├── unidad-1/   (8 PDF)
│   ├── unidad-2/   (5 PDF)
│   └── unidad-3/   (5 PDF)
├── favicon.svg
└── .nojekyll
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido de esta carpeta**, sin cambiar los nombres ni la estructura.
3. En el repositorio, entra a **Settings > Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama **main** y la carpeta **/(root)**, y pulsa **Save**.
6. Espera uno o dos minutos. GitHub mostrará la dirección pública del sitio.

## Uso local

Puedes abrir `index.html` directamente. Para una prueba más fiel a GitHub Pages, ejecuta en esta carpeta:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Características

- Organización por Unidad 1, Unidad 2 y Unidad 3.
- Conserva los nombres originales de los PDF.
- Buscador por nombre de archivo.
- Filtros AA, ACD y APE.
- Botones para abrir y descargar.
- Diseño adaptable a celular y computadora.
- Tema claro y oscuro.

Página configurada con GitHub Pages.
