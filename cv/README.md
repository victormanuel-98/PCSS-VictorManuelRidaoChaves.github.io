# Portfolio Interactivo

Portfolio visual en HTML5, CSS3 y JavaScript vanilla. Proyecto 100% frontend, sin backend ni base de datos.

## Stack Tecnico

- **HTML5 / CSS3 / JavaScript** - Frontend vanilla
- **Vite** - Dev server y build

## Caracteristicas

- Sistema de temas Dark/Light
- Animaciones y fondo en canvas
- Secciones y modal de proyectos
- i18n ES/EN
- Responsive

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Vite iniciara el servidor en `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

```
client/
├── index.html          # HTML principal
└── src/
   ├── index.css        # Estilos
   └── main.js          # Logica UI, i18n, datos locales
public/
└── images/             # Assets
```

## Notas

- Los proyectos se cargan desde datos locales en `client/src/main.js`.
- El formulario de contacto es solo visual (no envia datos).

## Licencia

MIT
