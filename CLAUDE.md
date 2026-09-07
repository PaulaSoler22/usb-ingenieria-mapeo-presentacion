# Plantilla — Presentación de mapeo curricular para una universidad

> **Esta carpeta es una PLANTILLA. No se edita: se copia.**
> Para una universidad nueva: copia la carpeta completa, renómbrala
> `<universidad>-mapeo-presentacion/` (p. ej. `unilibre-mapeo-presentacion/`) y trabaja allí.
> Distribuidor: **Simuladores de Negocios Colombia** (Grupo Edutec).

## Qué presentación es esta

Es una pieza **comercial** para **directores de programa y decanos** de una facultad de
ciencias económicas / administrativas. **No presenta un simulador**: presenta el resultado de
haber leído el plan de estudios de la facultad, asignatura por asignatura, contra el catálogo
CompanyGame, y muestra **qué asignaturas pueden trabajarse hoy con un simulador**, con cuál y
en qué semestre.

No confundir con `C:\Users\simsy\Downloads\plantilla-presentacion\`, que es la plantilla de
**bienvenida de un simulador** (FoodCompany, BusinessGlobal…) dirigida a estudiantes. Son dos
géneros distintos, con público y objetivo distintos.

Origen: se derivó del deck de la Universidad Santiago de Cali
(`C:\Users\simsy\Downloads\usc-implementacion-presentacion\`), que sigue siendo el mejor
ejemplo completo de cómo queda rellena.

**Sincronización con el deck USC.** La plantilla va al día hasta el commit **`3a326bf`**
(31-ago-2026, «Quita el acordeón del slide de las cinco asignaturas transversales»). Si el deck
de la USC recibe más cambios de maqueta que valga la pena heredar, `git log 3a326bf..HEAD` en
esa carpeta dice qué falta por traer. Los cambios de **datos** de la USC no se heredan nunca:
aquí las cifras son tokens.

## Cómo se construye una presentación nueva

1. **Copiar** esta carpeta y renombrarla.
2. Dar a Claude el **Excel del mapeo curricular** de esa universidad. Es la fuente de verdad:
   de ahí salen todas las cifras.
3. Claude **reemplaza los tokens `[[...]]`**, **duplica el bloque de ficha** una vez por
   programa y rellena las tablas. Los slides marcados **FIJO** se conservan tal cual.
4. Revisar los comentarios `<!-- VARIABLE · … -->` del HTML: cada uno dice qué va ahí.
5. Borrar de este `CLAUDE.md` lo que no aplique y anotar el análisis de esa universidad
   (ver **Qué documentar al rellenarla**, abajo).

**Regla dura: no inventar cifras.** Todo número del deck sale del Excel. Si un dato no está en
el Excel, no entra en el deck.

## Estructura de slides

El número de slides **depende del número de programas** de la facultad. Con 5 programas salen
13; con 3, salen 11.

| # | Slide | Tipo | Notas |
|---|-------|------|-------|
| 1 | Portada + contexto | **FIJO** (estructura) | Cifras del mapeo vía tokens; logo SDN |
| 2 | Cartelera de simuladores | **FIJO** | `assets/cartelera.jpg` + `assets/avatares.png` |
| 3 | Lo que ya se puede hacer hoy | variable | 4 tarjetas de cifra + el hallazgo que ordena la propuesta |
| 4 | Alcance por programa | variable | `.data-table`, una fila por programa + fila de total |
| **5…N** | **Ficha por programa** — bloque repetible | variable | **El eje de la reunión** |
| N+1 | Asignaturas transversales | **condicional** | Cadena de semestres + tabla + 3 tarjetas. Solo si existe el hallazgo; si no, borrar |
| N+2 | Los tres modelos de uso docente (A/B/C) | **FIJO** | Genérico, sirve igual en cualquier universidad |
| N+3 | Evidencia de aprendizaje y acreditación | semi-fijo | Tabla del catálogo: dejar solo los simuladores que aparecen |
| N+4 | Cierre / Gracias | **FIJO** | Los dos bloques de contacto, comercial primero |

**Las fichas por programa son el eje.** Dos minutos cada una, unos 10 de los ~26 minutos de la
reunión. Cada director se ve a sí mismo en pantalla: conviene dejar leer en silencio y no
recitar las tablas. Todas tienen exactamente la misma estructura, para que se comparen solas.

### Duplicar la ficha

El bloque `id="slideFicha1"` va marcado en el HTML con
`<!-- ===== BLOQUE REPETIBLE · FICHA POR PROGRAMA ===== -->`. Duplícalo entero una vez por
programa y numera los id: `slideFicha1`, `slideFicha2`, `slideFicha3`… Los demás slides usan
id semánticos (`slideTransversales`, `slideModelos`, `slideEvidencia`, `slideCierre`)
precisamente para que añadir fichas no obligue a renumerar nada.

**La numeración es automática.** Los `.slide-number` van vacíos y el JS los rellena `01`,
`02`, `03… en orden de aparición; el contador del nav (`1 / N`) también se calcula solo. No
hay que tocar nada al añadir o quitar slides. (Si escribes un número a mano, se respeta.)

## Tokens a reemplazar (búscalos con `[[`)

### Institución

| Token | Qué es | Ejemplo (USC) |
|---|---|---|
| `[[UNIVERSIDAD]]` | Nombre completo | Universidad Santiago de Cali |
| `[[UNIVERSIDAD_CORTA]]` | Sigla o nombre corto — va en el título y la portada | USC |
| `[[FACULTAD]]` | Nombre completo de la facultad | Facultad de Ciencias Económicas y Empresariales |
| `[[FACULTAD_CORTA]]` | Cómo se la nombra en el cuerpo del texto | Facultad |
| `[[N_PROGRAMAS_TXT]]` | Nº de pregrados, en letra | cinco |
| `[[N_PROGRAMAS_NUM]]` | Nº de pregrados, en cifra | 5 |

### Cifras del mapeo (de la hoja Resumen del Excel)

| Token | Qué es | Ejemplo (USC) |
|---|---|---|
| `[[N_ENCAJE]]` | Asignaturas con simulador (perfecto + parcial) | 69 |
| `[[N_PERFECTO]]` | Encaje perfecto — entran sin tocar el temario | 39 |
| `[[N_PARCIAL]]` | Encaje parcial — el simulador se usa como apoyo del curso | 30 |
| `[[N_SIMULADORES]]` | Simuladores distintos del catálogo que se usan | 27 |
| `[[RANGO_SEMESTRES]]` | Rango de semestres cubierto | 1 – 9 |
| `[[MIN_PERFECTO]]` / `[[MAX_PERFECTO]]` | Encajes perfectos del programa con menos / con más | 5 / 10 |

### Tabla de alcance por programa (slide 4)

Una fila por programa, con `[[PROGRAMA_1]]`, `[[P1_ENCAJE]]`, `[[P1_PERFECTO]]`,
`[[P1_PARCIAL]]`, `[[P1_SIMULADORES]]`, `[[P1_SEMESTRES]]` — y lo mismo para `P2`, `P3`… La
plantilla trae tres filas de ejemplo: **añade o borra hasta tener una por programa**, y ordena
de más a menos asignaturas. `badge-green` arriba, `badge-teal` abajo.

### Ficha de programa (bloque repetible)

| Token | Qué es |
|---|---|
| `[[PROGRAMA]]` | Nombre del pregrado |
| `[[FICHA_N]]` | Número de ficha (1, 2, 3…) |
| `[[PROG_ENCAJE]]` · `[[PROG_PERFECTO]]` · `[[PROG_PARCIAL]]` · `[[PROG_SIMULADORES]]` | La tira de cuatro cifras |
| `[[SEM]]` · `[[ASIGNATURA]]` · `[[SIMULADOR]]` · `[[NIVEL]]` | Una fila de tabla. Repetir por asignatura, ordenadas por semestre |
| `[[PARRAFO_PROGRAMA]]` | «Lo que gana el programa»: 4–6 líneas leyendo la ficha en voz alta |

### Narrativa

| Token | Qué es |
|---|---|
| `[[TITULO_HALLAZGO]]` · `[[PARRAFO_HALLAZGO]]` | El hallazgo que ordena la propuesta (slide 3) |
| `[[N_TRANSVERSALES_TXT]]` | Nº de asignaturas transversales, en letra |
| `[[HITO_1..3]]` · `[[HITO_1..3_DESC]]` | Los tres eslabones del `.value-chain` de transversales |
| `[[LLAMADA_A_LA_ACCION]]` | La frase de cierre. Una línea, concreta |

## Criterio editorial — importante

Esta es una **pieza comercial**, y el deck de la USC fijó un criterio que conviene mantener:
**se argumenta desde el beneficio de lo que sí encaja, sin exponer los vacíos del catálogo.**

En concreto, el deck **no** muestra:

- El **porcentaje de cobertura** ni el total de asignaturas analizadas. Se dice
  «69 asignaturas con simulador», nunca «69 de 231».
- Cuántas asignaturas **no** tienen encaje, ni cuáles son los vacíos del catálogo.
- Ningún ranking que deje un programa señalado en rojo por tener poca cobertura.

Todas las cifras que aparecen son ciertas y salen del Excel. Lo que se omite es el
**denominador**, no se altera ningún dato.

**Al preparar la reunión hay que tenerlo presente:** los directores tienen sus propias mallas y
pueden hacer la resta. Si preguntan por la cobertura o por una asignatura concreta que no
aparece, la respuesta honesta debe estar escrita en el `CLAUDE.md` de esa presentación y en el
Excel, lista para darla de viva voz.

Si en algún encargo se pide el enfoque contrario (diagnóstico completo, con vacíos y
porcentajes), hay que decirlo explícitamente y rehacer los slides 3 y 4 — la plantilla no lo
trae.

### Tono con el docente: ayuda, no carga

El deck se dirige a decanos y directores, pero lo tiene que poder leer después un docente sin
que suene a que le van a imponer trabajo extra. **El simulador se adapta al curso que el
docente ya dicta — nunca al revés.** En la práctica:

- Nunca decir que el docente "adapta", "cambia" o "rediseña" su curso. El simulador es el que
  se ajusta, se integra o se inserta en lo que el docente ya hace.
- Evitar enmarcar el uso del simulador en términos de **esfuerzo, carga o requisitos** del
  docente (nada de "Requiere del docente…", columnas de "Esfuerzo: Alto/Medio/Bajo"). Se puede
  hablar de duración de sesiones o peso en la nota — son datos, no una carga.
- Las etiquetas de encaje son **"de aplicación directa"** (perfecto) y **"como apoyo al
  curso"** (parcial) — no "entran tal cual" / "con adaptación", que suenan a trámite.
- El slide de "Los tres modelos de uso docente" (`slideModelos`) describe **formas de
  integrar** el simulador al curso existente, no niveles de esfuerzo que el docente debe asumir.

Esto se corrigió una vez ya en un deck entregado (UTP, Facultad de Tecnología, sep-2026) y se
llevó aquí para que no se repita en la siguiente universidad.

## Qué documentar al rellenarla

El `CLAUDE.md` de cada presentación es el **documento de trabajo**, no el deck. Debe llevar:

- La ruta del Excel fuente y su fecha de revisión.
- Las cifras completas, **incluidas las que el deck omite** (cobertura, asignaturas sin encaje).
- Las salvedades: asignaturas sin grado de ajuste, inconsistencias de escritura del Excel,
  simuladores del catálogo que se normalizaron.
- Qué slides se eliminaron o añadieron respecto a esta plantilla, y por qué.
- ⚠️ Si el repositorio va a ser **público**, revisar que ese archivo no exponga nada que no
  deba salir de la casa.

## Paleta — identidad Simuladores de Negocios Colombia

**No se cambia por universidad.** El deck lleva la identidad del distribuidor, no la de la
institución. Los colores se extrajeron por muestreo de píxeles de `assets/logo-sdn-color.png`:
si hay que retocar, volver a muestrear, no aproximar a ojo.

| Rol | Hex | Origen |
|---|---|---|
| Cyan de marca (`--primary`) | `#16AAE2` | texto «SIMULADORES» e isotipo |
| Azul de marca (`--primary-dark`) | `#0E73B8` | faceta superior del isotipo |
| Cyan claro (`--primary-light`) | `#5FC7EE` | derivado |
| Azul medio (`--amber`) | `#0F86C9` | 2.º stop de los degradados |
| Azul profundo (`--cg-blue`) | `#0A5488` | derivado |
| Gris de marca (`--gray`) | `#737170` | texto «de negocios» |
| Gris medio / claro | `#989998` · `#CECBCB` | facetas del isotipo |

Acentos derivados, todos fríos para que la escala siga leyéndose: verde azulado `#2FA37A`
(alto) · teal `#0F8CA8` · gris de marca (medio) · azul-violeta `#6E7FC4` · rojo apagado
`#D9636E` (bajo / alerta).

El slot que en la plantilla de simuladores era **ámbar** (`cb-amber`, `factor-amber`,
`badge-amber`) está reasignado al **gris de marca**: es el único valor medio/neutro y así no
entra ningún color cálido. El **rojo es el único acento cálido** y se reserva para el valor más
bajo — en esta plantilla no se usa, porque el criterio editorial es no señalar programas.

**Convención de las fichas:** verde = encaje perfecto · gris de marca (ámbar) = encaje parcial.
Es la misma de las tarjetas del slide 3, y no debe romperse.

Badges de nivel del simulador: `badge-green` N1-2 · `badge-teal` N3-4 · `badge-amber` N4-5 ·
`badge-orange` N5 · `badge-purple` N6-7.

## Assets

| Archivo | Qué es |
|---|---|
| `assets/logo-sdn.png` | Logo **blanco**. Intro, portada y cierre, siempre sobre el degradado cyan |
| `assets/logo-sdn-color.png` | Logo **a color**. Referencia de marca y usos sobre fondo blanco |
| `assets/cartelera.jpg` | Portafolio CompanyGame (slide 2) |
| `assets/avatares.png` | Avatares de IA (slide 2). Si falta, el slide lo oculta solo |

Los cuatro son **fijos**: no dependen de la universidad. Toda captura nueva va en `.jpg`, con
nombre descriptivo, `loading="lazy"` y `onclick="openLightbox('assets/x.jpg','Título')"`. No
fijar `width`/`height` inline.

## Componentes disponibles (ya en el CSS)

`.card-grid` / `.card-grid.cols4` + `.card` (`bd-green/amber/teal/purple/red`) · `.data-table` ·
`.value-chain` + `.chain-box` (`cb-amber/green/teal`) · `.factor-accordion` + `.factor-item`
(`factor-orange/amber/green/teal`) · `.two-col` · `.seg-row` · `.badge` · `.accordion` (FAQ) ·
`.method` · `.brand-logo` · `.contact-label` / `.contact-sep` · `.reserved` (bloque de aviso).

**De las fichas por programa:** `.fk-row` + `.fk` (`fk-green` / `fk-amber` / `fk-blue`) para la
tira de cuatro cifras, con `.fk-n` y `.fk-l` dentro · `.fk-h` (`fk-h-green` / `fk-h-amber`)
para los títulos de columna · `.ficha-tbl` sobre `.data-table` (semestre centrado en
Montserrat, badges de nivel más pequeñas).

Las cabeceras (`.slide-header h1` / `h2`) llevan `padding-right: 150px` para que el número
gigante de la esquina no pise los subtítulos largos.

Hay CSS de componentes que la plantilla no usa hoy (`.method`, `.tl-*`, `.features`, `.ideal`,
`.accordion`, `.phone-mock`, `.plataforma-cols`, `.ingreso-list`, `.percentage-*`,
`.factor-block`) y las funciones `toggleAccordion()` / `toggleFactor()`. Se conservan a
propósito: son los slides de Métodos de Implementación, FAQ, Ingreso a la Plataforma y barras
de porcentaje, por si alguna presentación los necesita.

## Salvedades que deben mantenerse en el discurso

- Los compromisos de servicio del acompañamiento son un **marco propuesto**, no una oferta
  verificada.
- Lo que reporta la plataforma CompanyGame debe confirmarse contra el panel real del docente.
- La clasificación de cada asignatura proviene del Excel del mapeo, no de un criterio propio.
- ⚠️ La URL **plataforma.companygame.net no aparece en ningún slide** (el deck de la USC quitó
  el slide de ingreso). Si la audiencia la necesita, reponerla en el bloque de contacto del
  cierre.

## Datos fijos del distribuidor

- Plataforma: **https://plataforma.companygame.net/**
- **Comercial** (ventas): **ventas@simuladoresdenegocios.co** · WhatsApp **318 975 6987**
- **Fidelización** (acompañamiento): **fidelizacion@simuladoresdenegocios.co** ·
  WhatsApp **301 790 3086**
- El slide de cierre muestra **los dos bloques**, comercial primero. No mezclarlos.
- Distribuidor: Simuladores de Negocios Colombia (Grupo Edutec)

## Tecnología

HTML5 + CSS3 + JS vanilla, todo embebido en `index.html`. Sin frameworks ni dependencias.
Navegación por flechas, teclado (← → espacio) y swipe ya implementada; lightbox en las
imágenes. No tocar el `<script>`.

`build-artifact.js` genera la versión publicable como **Artifact de Claude**: quita el
esqueleto del documento e incrusta las imágenes de `assets/` como `data:` URI.

```bash
node build-artifact.js            # escribe ./artifact.html
node build-artifact.js salida.html
```

Falla a propósito si queda alguna referencia a `assets/` sin incrustar.
