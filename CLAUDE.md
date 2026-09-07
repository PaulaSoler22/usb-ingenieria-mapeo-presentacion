# CLAUDE.md — Simuladores para Ingeniería · Universidad de San Buenaventura

> Documento de trabajo de **esta** presentación (no la plantilla, no el deck). Aquí está la
> respuesta honesta a cualquier pregunta sobre metodología, cobertura o vacíos, aunque el deck
> no la muestre.
> Distribuidor: **Simuladores de Negocios Colombia** (Grupo Edutec).

## ⚠️ Historial de corrección de metodología (leer antes de tocar nada)

La primera versión de este deck (7-sep-2026) usaba las columnas **Q-V** de cada hoja de programa
("Tipo de simulador que se requeriría", **"Simulador recomendado"**, "Justificación de la
recomendación", "Tipo de uso sugerido", "Prioridad comercial", "Origen") como fuente de las
fichas. Esas columnas son **narrativas/especulativas**, generadas por un análisis de IA anterior
sobre el Excel, y en al menos un caso contradecían a las columnas objetivas: la fila
"Introducción a la Ingeniería" (Industrial) tenía **Grado de ajuste = "No encaja"** y
SimVenture/SimAgile/SimProject en **"Baja"**, pero la columna "Simulador recomendado" sugería
igualmente "T-Shirt / Sunny Day" — una recomendación sin respaldo en las columnas objetivas. El
usuario detectó el error y pidió reconstruir el deck **ignorando por completo las columnas
narrativas**.

**Metodología vigente (única fuente de verdad):**

| Columna | Uso |
|---|---|
| `Grado de ajuste` = "Encaje perfecto" | Asignatura de **aplicación directa**. Producto = columna `Simulador CompanyGame que encaja` + `Nivel CG`. |
| `Grado de ajuste` = "Encaje parcial" | Asignatura de **apoyo al curso**. Mismo producto/nivel. |
| `SimAgile` = "Alta" | Aplicación directa con **SimAgile** (sin nivel, no es parte del catálogo N1-N7). |
| `SimAgile` = "Media" | Apoyo al curso con **SimAgile**. |
| `SimProject` = "Alta" | Aplicación directa con **SimProject**. |
| `SimProject` = "Media" | Apoyo al curso con SimProject (no se dio ningún caso en este Excel). |
| `SimVenture` = cualquier valor | **Nunca se usa**, por instrucción explícita del usuario — la oferta es CompanyGame + SimAgile + SimProject. (De cualquier forma, SimVenture nunca tiene "Alta" en ningún programa de esta Facultad.) |

Este criterio se apoya en la propia hoja "Resumen Ejecutivo" del Excel (sección "7. Criterios de
calificación"): la definición de **ALTA** para SimVenture/SimAgile/SimProject ("el objeto central
de aprendizaje coincide con el dominio del simulador") es equivalente a **"Encaje perfecto"** del
catálogo CompanyGame, y **MEDIA** ("cubre una parte de la asignatura") equivale a **"Encaje
parcial"**. Ninguna cifra de esta versión del deck sale de una columna narrativa: **toda cifra es
Grado de ajuste, Nivel CG, o SimAgile/SimProject Alta/Media, leídos directamente de la celda.**

**Las columnas Q-V del Excel siguen ahí** (no se borraron, el usuario no lo pidió) pero **no se
usan para nada en esta versión**. Si se editan o se llenan mejor en el futuro, esta sección debe
revisarse antes de volver a usarlas.

## Qué es esta presentación

Pieza **comercial** para directores de programa y decano de la **Facultad de Ingeniería** de la
Universidad de San Buenaventura (USB) — siete pregrados: Ingeniería Industrial, de Sistemas,
Multimedia, Agroindustrial, Biomédica, Electrónica y Biológica.

⚠️ **No confundir con `usb-mapeo-presentacion/`**, presentación previa (ago-2026) para la
**Facultad de Ciencias Económicas y Administrativas** de la misma universidad. Son dos
facultades, dos Excel y dos decks independientes.

La oferta es **CompanyGame + SimAgile + SimProject**, sin SimVenture (instrucción explícita del
usuario, ver arriba).

## Fuente de los datos

`San Buenaventura Facultad ingeniería.xlsx` (en esta misma carpeta). El usuario reabrió y
resguardó el archivo el 7-sep-2026 ~16:42 sin cambios de contenido (se verificó byte a byte
contra la versión anterior: ninguna celda cambió, solo metadatos internos de Excel). Hojas:
Resumen Ejecutivo, Industrial, Sistemas, Multimedia, Agroindustrial, Biomédica, Electrónica,
Biológica, Priorización, Desarrollos Propios, Recomendaciones, Catálogo CompanyGame.

Leído descomprimiendo el `.xlsx` como ZIP y parseando el XML de cada hoja con un script de Node
(no hay Python en el equipo — ver memoria `leer-xlsx-sin-python`). El primer intento de este
script tenía un bug de alineación de columnas por atributos `t=`/`s=` en distinto orden, ya
corregido; los datos de esta versión se verificaron celda por celda contra capturas de pantalla
del propio usuario antes de reconstruir el deck.

## Cifras del deck (públicas) — metodología objetiva

| | |
|---|---|
| Asignaturas con simulador | **16** |
| Encaje perfecto (aplicación directa) | **12** |
| Encaje parcial (apoyo al curso) | **4** |
| Simuladores distintos | **8** (6 del catálogo CompanyGame + SimAgile + SimProject) |
| Rango de semestres | **4 – 7** |

### Alcance por programa

| Programa | Con simulador | Perfecto | Parcial | Simuladores | Semestres |
|---|---:|---:|---:|---:|---|
| Ingeniería Industrial | 6 | 4 | 2 | 6 | 4 – 6 |
| Ingeniería de Sistemas | 3 | 3 | 0 | 3 | 7 |
| Ingeniería Agroindustrial | 2 | 2 | 0 | 2 | 4 – 6 |
| Ingeniería Biológica | 2 | 1 | 1 | 2 | 4 – 5 |
| Ingeniería Multimedia | 1 | 1 | 0 | 1 | 6 |
| Ingeniería Biomédica | 1 | 1 | 0 | 1 | 7 |
| Ingeniería Electrónica | 1 | 0 | 1 | 1 | 6 |
| **Total Facultad** | **16** | **12** | **4** | **8** | **4 – 7** |

### Las 16 filas, exactas, con su origen en el Excel

| Programa | Sem. | Asignatura | Simulador | Origen de la fila |
|---|---|---|---|---|
| Industrial | 4 | Gestión Estratégica Organizacional | Business21 (N3-4) | Grado de ajuste = Encaje perfecto |
| Industrial | 4 | Ingeniería de Costos | Corbatul (N3-4) | Grado de ajuste = Encaje parcial |
| Industrial | 5 | Gestión de Operaciones | MilkFactory (N5) | Grado de ajuste = Encaje parcial |
| Industrial | 5 | Investigación de Mercados | Focus (N5) | Grado de ajuste = Encaje perfecto |
| Industrial | 6 | Diseño de Productos y Servicios | SimAgile | SimAgile = Alta |
| Industrial | 6 | Gerencia de Proyectos de Ingeniería | SimProject | SimProject = Alta |
| Sistemas | 7 | Arquitectura de Software | SimAgile | SimAgile = Alta |
| Sistemas | 7 | Cátedra de Emprendimiento | FitnessGym (N3-4) | Grado de ajuste = Encaje perfecto |
| Sistemas | 7 | Gestión de Proyectos de Software | SimProject | SimProject = Alta |
| Multimedia | 6 | Gestión en Proyectos | SimProject | SimProject = Alta |
| Agroindustrial | 4 | Mercadeo e Investigación de Mercados | Coffee Time (N1-2) | Grado de ajuste = Encaje perfecto |
| Agroindustrial | 6 | Gerencia de Proyectos de Ingeniería | SimProject | SimProject = Alta |
| Biomédica | 7 | Valoración de Proyectos | SimProject | SimProject = Alta |
| Electrónica | 6 | Prototipado de Soluciones Tecnológicas | SimAgile | SimAgile = Media |
| Biológica | 4 | Ingeniería de Costos | Corbatul (N3-4) | Grado de ajuste = Encaje parcial |
| Biológica | 5 | Gerencia de Proyectos de Ingeniería | SimProject | SimProject = Alta |

**9 de las 16 filas (56 %) usan SimAgile o SimProject**, no el catálogo CompanyGame — es la
mayoría del encaje de esta Facultad.

## Filas excluidas por falta de dato — pendiente de completar en el Excel

Dos filas de **Ingeniería Electrónica** tienen `Grado de ajuste = "Encaje parcial"` pero la
columna `Simulador CompanyGame que encaja` está vacía ("—"), y SimAgile/SimProject/SimVenture
están en "Baja" — es decir, el Excel marca la asignatura como parcialmente encajada sin decir
con qué producto. **No se inventó ningún producto para estas filas; se excluyeron del deck**:

- Semestre 8 · Práctica Profesional
- Semestre 8 · Diseño de Ingeniería Electrónica II

Si se completa la columna `Simulador CompanyGame que encaja` (M) para estas dos filas en el
Excel, avisar para incorporarlas — subirían el total de Electrónica de 1 a 3 asignaturas y el
total de la Facultad de 16 a 18.

## Punto de partida del Excel — para no improvisar si preguntan por la cobertura

| | Industrial | Sistemas | Multimedia | Agroindustrial | Biomédica | Electrónica | Biológica | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Espacios académicos | 58 | 64 | 58 | 58 | 61 | 58 | 55 | **412** |
| Créditos | 144 | 160 | 142 | 144 | 156 | 143 | 144 | **1033** |

**Grado de ajuste** (hoja Resumen Ejecutivo, sin SimAgile/SimProject): Encaje perfecto **4** ·
Encaje parcial **5** · No encaja **365** · Por definir (electivas) **38**.

**Compatibilidad Alta con SimVenture/SimAgile/SimProject** (hoja Resumen Ejecutivo): SimVenture
**0** · SimAgile **3** · SimProject **6**. (SimAgile también tiene 1 caso en "Media": Prototipado
de Soluciones Tecnológicas, Electrónica.)

El deck nunca dice el total analizado (412) ni el porcentaje de cobertura (16 de 412 ≈ 4 %),
siguiendo el criterio editorial de la plantilla: se argumenta desde lo que sí encaja, no desde
el denominador. **Si preguntan por la cobertura, la respuesta honesta es este documento.**

## Los dos desarrollos del slide "Lo que viene" (sin cambios frente a la versión anterior)

Esta parte del Excel (hoja "Desarrollos Propios") **no se vio afectada** por la corrección de
metodología — sus columnas nunca fueron narrativas de la misma forma que Q-V de las hojas de
programa, y su contenido no cambió entre versiones del archivo.

- **DP-04 · Cadena de Suministro — GlobalChain**: ya existe como producto real, resuelve Gestión
  Cadena Abastecimiento (Ingeniería Industrial, semestre 6). Esa asignatura tiene, en su propia
  hoja de programa, `Grado de ajuste = "No encaja"` (porque GlobalChain no es un simulador del
  catálogo CompanyGame de 41 productos) — por eso no aparece como fila de ficha, solo en este
  slide de desarrollos.
- **DP-01 · Simulador de Planeación y Control de Operaciones**: en evaluación, 9 asignaturas en
  3 programas (Industrial, Agroindustrial, Biológica), Prioridad 1 según la hoja.

Por instrucción explícita del usuario, el deck deja solo estas dos tarjetas de las diez que trae
la hoja "Desarrollos Propios" (quedan fuera DP-02, DP-03, DP-05, DP-06, DP-07, DP-09, DP-11,
DP-12, DP-13 — no se mencionan en ningún punto del deck).

## Slides añadidos o eliminados respecto a la plantilla

- **Añadido** — "Simuladores especializados para Ingeniería" (`slideOtrosSimuladores`), después
  de la cartelera: SimAgile y SimProject.
- **Eliminado** — el slide de "Asignaturas transversales": no hay ninguna asignatura que se
  repita en los siete programas con encaje perfecto. El hallazgo más fuerte de esta versión
  —Gerencia de Proyectos de Ingeniería con SimProject en tres programas (Industrial,
  Agroindustrial, Biológica)— se cuenta en el acordeón del slide 3, sin forzar el slide dedicado
  porque no cubre los siete programas.
- **Añadido, en el lugar de Transversales** — "Lo que viene: más allá del catálogo actual"
  (`slideDesarrollosPropios`), con las dos tarjetas DP-01 y DP-04/GlobalChain.
- Slides fijos sin tocar: Portada, Cartelera, Los tres modelos de uso docente, Cierre.
- Slide "Evidencia de aprendizaje": 6 simuladores CompanyGame de las fichas (Business21, Focus,
  Corbatul, MilkFactory, FitnessGym, Coffee Time) + SimAgile + SimProject + GlobalChain (9 filas).

## Fichas por programa — orden

Ordenadas de más a menos asignaturas: Industrial (6), Sistemas (3), Agroindustrial (2),
Biológica (2), Multimedia (1), Biomédica (1), Electrónica (1).

Las fichas de Sistemas, Agroindustrial, Multimedia y Biomédica no tienen ninguna fila de "apoyo
al curso" (0 asignaturas parciales) — la tabla de esa columna muestra una nota en cursiva en
vez de quedar vacía sin explicación. La ficha de Electrónica es la única sin ninguna fila de
"aplicación directa".

## Tono con el docente

Se mantuvo el criterio de la plantilla: el simulador se integra al curso que el docente ya
dicta, nunca al revés. Etiquetas "de aplicación directa" / "como apoyo al curso", sin lenguaje
de esfuerzo o carga.

## Salvedad pendiente de confirmar antes de la reunión

⚠️ El Excel no indica a qué seccional de la USB corresponden estos siete programas (Bogotá,
Medellín, Cali o Cartagena), ni trae SNIES para Multimedia, Agroindustrial ni Biomédica.
Preguntar al contacto de la USB antes de presentar.

## Repositorio público

⚠️ Si esta carpeta se sube a un repositorio público, revisar que este archivo no filtre nada que
no deba salir de la casa: el denominador completo (412 asignaturas, 4 % de cobertura real), las
filas excluidas por dato faltante, y los ocho desarrollos propios que se decidió no presentar.

## Datos fijos del distribuidor

- Plataforma: https://plataforma.companygame.net/
- **Comercial** (ventas): ventas@simuladoresdenegocios.co · WhatsApp 318 975 6987
- **Fidelización** (acompañamiento): fidelizacion@simuladoresdenegocios.co · WhatsApp 301 790 3086
- El cierre muestra los dos bloques, comercial primero.
- Distribuidor: Simuladores de Negocios Colombia (Grupo Edutec)
