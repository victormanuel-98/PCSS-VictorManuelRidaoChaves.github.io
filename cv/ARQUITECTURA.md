# Arquitectura Tecnica del Portfolio HTML/CSS/JS

## Vision General

El proyecto es una SPA estatica con HTML/CSS/JS. No hay backend ni base de datos. Vite se usa solo para desarrollo y build.

## Frontend

### Estructura
- `client/index.html`: estructura de secciones y modal
- `client/src/index.css`: estilos y temas
- `client/src/main.js`: logica de UI, i18n y datos locales

### Sistema de Navegacion
- Botones con `data-target` navegan entre secciones
- Navegacion lateral en desktop y barra inferior en mobile

### Tema (Dark/Light)
- Se controla con `data-theme` en `body`
- Variables CSS (`--bg`, `--accent`, `--text`) cambian por tema

### I18n
- Diccionario ES/EN en `client/src/main.js`
- Atributos `data-i18n` y `data-i18n-placeholder` para textos

### Fondo Animado
- Canvas full-screen con particulas
- Colores y opacidad se ajustan al tema

### Modal de Proyectos
- Se rellena con datos locales en `client/src/main.js`
- Maneja apertura/cierre con `Escape` y overlay

## Flujo de Datos

1. `main.js` carga proyectos desde un array local
2. Renderiza cards en `#projects-grid`
3. Abre modal y muestra tags/titulos
4. El formulario de contacto es solo UI

## Build y Despliegue

- Vite compila a `dist`
- Se puede desplegar como sitio estatico
