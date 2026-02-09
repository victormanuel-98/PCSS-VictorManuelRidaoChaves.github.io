# Guia de Inicio Rapido - Portfolio Visual

## Requisitos Previos

- Node.js 20+
- npm o yarn

## Instalacion

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd cv
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`.

## Modo Produccion

1. Compila el proyecto:
```bash
npm run build
```

2. Previsualiza el build:
```bash
npm run preview
```

## Estructura de Carpetas

```
cv/
├── client/                    # Frontend HTML/CSS/JS
│   ├── index.html            # HTML principal
│   └── src/
│       ├── index.css         # Estilos
│       └── main.js           # Logica UI, i18n, datos locales
└── public/                   # Assets
```

## Caracteristicas Tecnicas

### Frontend
- **HTML/CSS/JS**: Layout y comportamiento sin frameworks
- **Canvas**: Fondo animado de particulas
- **I18n**: Cambio de idioma ES/EN en cliente
- **Theme**: Modo oscuro/claro

## Solucion de Problemas

### El servidor no inicia
- Verifica que el puerto 5173 este libre

### Render UI lento
- Reduce el numero de particulas en el canvas en `client/src/main.js`
- Desactiva el fondo animado si tu equipo es muy limitado

## Comandos Utiles

```bash
npm run dev
npm run build
npm run preview
```

## Licencia

MIT
