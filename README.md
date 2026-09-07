# Plantilla · Presentación de mapeo curricular

Plantilla HTML para la presentación que **Simuladores de Negocios Colombia** lleva a los
directores de programa y decanos de una facultad de ciencias económicas o administrativas.

No presenta un simulador: muestra, pregrado por pregrado, **qué asignaturas del plan de
estudios pueden trabajarse hoy con un simulador CompanyGame**, con cuál y en qué semestre.

Para una presentación de bienvenida de un simulador concreto (FoodCompany, BusinessGlobal…),
la plantilla es otra: `plantilla-presentacion/`.

---

## Empezar

1. Copia la carpeta y renómbrala `<universidad>-mapeo-presentacion/`.
2. Sigue `INSTRUCCIONES.md`.

El detalle completo —tokens, estructura de slides, paleta y criterio editorial— está en
`CLAUDE.md`.

## Estructura

```
plantilla-mapeo-curricular/
├── index.html            la presentación entera (HTML + CSS + JS, sin dependencias)
├── CLAUDE.md             documento de trabajo: tokens, slides, paleta, criterio editorial
├── INSTRUCCIONES.md      la versión corta
├── build-artifact.js     genera la versión publicable como Artifact de Claude
└── assets/
    ├── logo-sdn.png          logo blanco (portada y cierre)
    ├── logo-sdn-color.png    logo a color (referencia de marca)
    ├── cartelera.jpg         portafolio CompanyGame
    └── avatares.png          avatares de IA
```

## Contenido — 13 slides con 5 programas (≈ 25–28 minutos)

1. Portada y contexto
2. Cartelera de simuladores CompanyGame · **fijo**
3. Lo que ya se puede hacer hoy
4. Alcance por programa
5. **Ficha por programa** — bloque repetible, una por pregrado
6. Asignaturas transversales · condicional
7. Los tres modelos de uso docente (A / B / C) · **fijo**
8. Evidencia de aprendizaje y acreditación
9. Cierre y contacto · **fijo**

El número total de slides depende de cuántos pregrados tenga la facultad. **La numeración y el
contador se calculan solos**: se pueden añadir o quitar fichas sin tocar nada más.

Las **fichas por programa** son el eje de la reunión: cada una lista, con semestre y simulador,
las asignaturas del pregrado que entran tal cual y las que entran con adaptación. Ocupan unos
10 de los ~26 minutos y sirven además como material para enviar después.

## Cómo verla

Abre `index.html` en cualquier navegador. Navegación con flechas en pantalla, teclado
(← →, espacio) y swipe en móvil. Las capturas se amplían al hacer clic.

## Identidad visual

Paleta tomada por muestreo del logo de Simuladores de Negocios Colombia: cyan `#16AAE2`,
azul `#0E73B8` y los grises `#737170` / `#989998` / `#CECBCB`. **Es la identidad del
distribuidor y no cambia según la universidad.** El detalle está en `CLAUDE.md`.

## Tecnología

HTML5 + CSS3 + JavaScript vanilla, todo embebido en `index.html`. Sin frameworks.

---

Derivada del deck de la Universidad Santiago de Cali (agosto 2026), que sigue siendo el
ejemplo completo de referencia.

Simuladores de Negocios Colombia S.A.S. · Distribuidor autorizado CompanyGame
