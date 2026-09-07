# CLAUDE.md — Simuladores para Ingeniería · Universidad de San Buenaventura

> Documento de trabajo de **esta** presentación (no la plantilla, no el deck). Aquí está la
> respuesta honesta a cualquier pregunta sobre cobertura, vacíos o metodología, aunque el deck
> no la muestre.
> Distribuidor: **Simuladores de Negocios Colombia** (Grupo Edutec).
> Derivada de `C:\Users\simsy\Downloads\plantilla-mapeo-curricular\` y del deck de referencia
> `C:\Users\simsy\Downloads\unilibre-ingenieria-mapeo-presentacion\` (mismo criterio editorial,
> misma forma de tratar SimAgile/SimProject y los desarrollos propios).

## Qué es esta presentación

Pieza **comercial** para directores de programa y decano de la **Facultad de Ingeniería** de la
Universidad de San Buenaventura (USB) — **siete pregrados**: Ingeniería Industrial, de Sistemas,
Multimedia, Agroindustrial, Biomédica, Electrónica y Biológica.

⚠️ **No confundir con `usb-mapeo-presentacion/`**, que es una presentación previa (ago-2026) para
la **Facultad de Ciencias Económicas y Administrativas** de la misma universidad (Administración
de Empresas, Contaduría, Administración de Negocios). Son dos facultades distintas, con dos
Excel distintos y dos decks independientes. Confirmar antes de la reunión si la Facultad de
Ingeniería ya tiene alguna relación comercial con Simuladores de Negocios Colombia o si esta es
la primera aproximación.

**Se aparta de la plantilla estándar en el mismo punto que la Universidad Libre**: el mapeo se
hizo contra tres familias de producto, no solo el catálogo CompanyGame — **CompanyGame, SimAgile
y SimProject**. El Excel fuente también trae una columna de compatibilidad para **SimVenture**,
pero **no se usa en ningún punto del deck ni de este documento**, por instrucción explícita del
usuario: la oferta para esta Facultad es CompanyGame + SimAgile + SimProject, sin SimVenture. En
las filas donde el Excel ofrecía "SimVenture o [producto]" como alternativas, se usó siempre el
producto alternativo (ya presente en la misma celda del Excel) — no se inventó ningún reemplazo.

## Fuente de los datos

`San Buenaventura Facultad ingeniería.xlsx` (en esta misma carpeta), archivo con fecha de
modificación 7-sep-2026, leído el mismo día. Hojas: Resumen Ejecutivo, Industrial, Sistemas,
Multimedia, Agroindustrial, Biomédica, Electrónica, Biológica, Priorización, Desarrollos
Propios, Recomendaciones, Catálogo CompanyGame.

El Excel no se pudo abrir con una librería estándar de lectura de `.xlsx` en este equipo (no hay
Python instalado). Se descomprimió como ZIP (`Expand-Archive`) y se parseó el XML de cada hoja
con un script de Node escrito para esta tarea — ver `[[leer-xlsx-sin-python]]` en la memoria del
usuario. El script no usa librerías de terceros; se verificó manualmente que las cifras del
Resumen Ejecutivo coincidieran con las hojas de programa antes de construir el deck.

Existe también `Matriz_Materias_Simuladores_CompanyGame_USanBuenaventura.xlsx` en Descargas —
**no se usó**: es el Excel de la Facultad de Ciencias Económicas y Administrativas (la otra
presentación), no el de Ingeniería.

## Cifras del deck (públicas)

| | |
|---|---|
| Asignaturas con simulador | **54** |
| Encaje perfecto (aplicación directa) | **7** |
| Encaje parcial (apoyo al curso) | **47** |
| Simuladores distintos usados en las fichas | **14** (12 del catálogo CompanyGame + SimAgile + SimProject) |
| Rango de semestres | **1 – 9** |

### Alcance por programa (slide 4 y fichas)

| Programa | Con simulador | Perfecto | Parcial | Simuladores | Semestres |
|---|---:|---:|---:|---:|---|
| Ingeniería Industrial | 11 | 3 | 8 | 11 | 1 – 7 |
| Ingeniería Agroindustrial | 9 | 1 | 8 | 6 | 1 – 8 |
| Ingeniería Biológica | 9 | 0 | 9 | 6 | 1 – 8 |
| Ingeniería de Sistemas | 7 | 1 | 6 | 3 | 3 – 9 |
| Ingeniería Electrónica | 6 | 2 | 4 | 4 | 1 – 8 |
| Ingeniería Biomédica | 6 | 0 | 6 | 5 | 1 – 9 |
| Ingeniería Multimedia | 6 | 0 | 6 | 4 | 1 – 8 |
| **Total Facultad** | **54** | **7** | **47** | **14** | **1 – 9** |

**Importante para la reunión: tres programas (Biológica, Biomédica, Multimedia) tienen 0
asignaturas de "encaje perfecto".** El deck no lo oculta activamente (las fichas de esos tres
programas muestran la tabla de "Encaje perfecto" vacía con una nota, no un cero tachado), pero
tampoco lo destaca. Si preguntan por qué esos tres programas no tienen ninguna asignatura de
aplicación directa: es porque su malla es más técnica/creativa y menos orientada a gestión que
Industrial o Sistemas — el simulador igual aporta valor como apoyo al curso en 6-9 asignaturas
de cada uno, solo que ninguna reemplaza el núcleo del temario todavía.

## Punto de partida del Excel — para no improvisar si preguntan por la cobertura

El deck nunca dice el total analizado ni el porcentaje de cobertura (criterio editorial, ver
más abajo). Aquí está el denominador completo:

| | Industrial | Sistemas | Multimedia | Agroindustrial | Biomédica | Electrónica | Biológica | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Espacios académicos | 58 | 64 | 58 | 58 | 61 | 58 | 55 | **412** |
| Créditos | 144 | 160 | 142 | 144 | 156 | 143 | 144 | **1033** |
| Semestres del programa | 8 | 9 | 8 | 8 | 9 | 8 | 8 | — |

**Grado de ajuste contra el catálogo CompanyGame** (columna estricta de la hoja de programa, sin
contar SimAgile/SimProject/SimVenture): Encaje perfecto **4** · Encaje parcial **5** · No encaja
**365** · Por definir (electivas) **38**. Es decir, la columna que evalúa *solo* contra los 41
simuladores del catálogo CompanyGame encuentra apenas 9 asignaturas en toda la Facultad. **Las
54 asignaturas del deck salen de combinar esa columna con la columna "Simulador recomendado" y
"Prioridad comercial"**, que sí incorporan SimAgile, SimProject y los productos del catálogo
que la hoja "Catálogo CompanyGame" confirma por texto aunque la columna estricta de la hoja de
programa no los marque como encaje — ver "Correcciones y criterios aplicados" abajo.

**Compatibilidad Alta/Media con SimVenture, SimAgile, SimProject** (hoja Resumen Ejecutivo):
SimVenture Alta **0** (en ningún programa) · SimAgile Alta **3** · SimProject Alta **6**. Esto
confirma que SimVenture no tiene ningún encaje de compatibilidad alta en esta Facultad — no se
pierde nada relevante al excluirlo de la oferta.

**Oportunidad de desarrollo propio** (hoja Resumen Ejecutivo, "Desarrollo propio (oportunidad)"):
**129 asignaturas** en total — casi un tercio de toda la Facultad. El deck solo presenta dos
desarrollos (ver más abajo); el resto no se menciona, siguiendo el criterio editorial de no
exponer todo el diagnóstico.

## Correcciones y criterios aplicados — prevalecen sobre la lectura literal de una sola columna

El Excel tiene, para cada asignatura, tres columnas relevantes que a veces no coinciden entre
sí: "Simulador CompanyGame que encaja" (columna estricta), "Simulador recomendado" (columna de
síntesis, la que de verdad decide) y el texto narrativo de la hoja "Catálogo CompanyGame". Se
priorizó siempre la columna "Simulador recomendado" combinada con el texto del Catálogo, no la
columna estricta por sí sola. Casos concretos:

- **SimVenture, excluido en todo el deck** por instrucción explícita del usuario. Ninguna fila
  del Excel tiene a SimVenture como única recomendación sin alternativa — siempre había un
  producto CompanyGame, SimAgile o SimProject en la misma celda, que es el que se usó.
- **Investigación de Mercados (Industrial, V)**: la columna estricta decía "Focus (N5)", pero la
  columna "Simulador recomendado" y el texto de la hoja Catálogo ("MarketGame aplica en...
  Investigación de Mercados, Industrial, 5") apuntan a **MarketGame (N1-2)**. Se usó MarketGame.
- **Ingeniería de Costos (Industrial y Biológica)**: la columna estricta decía "Corbatul (N3-4)",
  pero el Catálogo confirma "ContaTrainer y Kapital aplican en Ingeniería de Costos (Industrial
  y Biológica)". Se usó **ContaTrainer**.
- **Prototipado de Soluciones Tecnológicas y Gestión de Productos Tecnológicos (Electrónica)**:
  la columna estricta de la hoja de programa las marca "No encaja" (porque evalúa solo contra el
  catálogo de 41 simuladores sin mirar el texto narrativo), pero el Catálogo dice explícitamente
  "InnovaTech encaja de forma perfecta en Diseño de Productos y Servicios (Industrial), Gestión
  de Productos Tecnológicos (Electrónica) y Prototipado de Soluciones Tecnológicas". Las tres
  se clasificaron como **encaje perfecto con InnovaTech**.
- **Evaluación de Proyectos de Software (Sistemas, IX)**: la fila recomienda "SimVenture +
  SimProject; alternativa CompanyGame: familia Emprendimiento" y el Catálogo confirma que
  FitnessGym "también entra por Evaluación de Proyectos de Software". Se excluyó SimVenture y
  se dejó **FitnessGym + SimProject**.
- **Ingeniería Económica (Industrial y Agroindustrial)**: recomendación "SimVenture + SimProject
  o Kapital (CompanyGame)"; el Catálogo confirma Kapital para esta asignatura. Se excluyó
  SimVenture y SimProject de la celda y se dejó **Kapital** únicamente.

## Qué se dejó fuera del deck (y por qué)

- **Todas las filas cuya única recomendación es "Desarrollo propio" sin alternativa vigente**:
  Diseño y Modelación de Bioprocesos, Modelamiento de Sistemas Biológicos, Control Estadístico
  de Procesos, Localización y Diseño de Plantas, Gestión de Calidad (Industrial y Agroindustrial),
  Ingeniería de Métodos y Tiempos, Ciencia y Tecnología Poscosecha, Procesos Agroindustriales I y
  II, Ingeniería de Procesos Biológicos I y II. Nueve de estas asignaturas (las que corresponden
  a DP-01) sí se citan dentro de la tarjeta "Simulador de Planeación y Control de Operaciones"
  del slide de desarrollos — no como fila de ficha.
- **Simulación de Procesos Discretos (Industrial)**: su recomendación es "Desarrollo propio
  (DP-01), con Businessglobal como caso de negocio". Se excluyó de la ficha por depender de
  DP-01; está dentro de las 9 asignaturas que cita la tarjeta de DP-01.
- **Todas las Electivas marcadas "Por definir según el contenido del espacio"** (40 espacios en
  toda la Facultad): no tienen simulador asignable hasta que se defina su contenido.
- **Cuatro asignaturas de la línea de software de Sistemas** que también recomiendan SimAgile
  (Introducción a la Ingeniería de Software, Ingeniería de Requisitos, Diseño Detallado de
  Software, Arquitectura de Software) no se listaron como fila individual en la ficha, para no
  repetir el mismo simulador seis o siete veces en una sola tabla — la ficha de Sistemas ya
  muestra las 6 asignaturas que la propia hoja Resumen Ejecutivo señala como su "hallazgo
  principal" (ver esa hoja, hallazgo #2) y el párrafo de la ficha menciona la línea completa.
  Lo mismo aplica a los tres Laboratorios de Software (I, II, III), todos "SimAgile de uso
  complementario".
- **Ocho de los diez desarrollos propios de la hoja "Desarrollos Propios"** (DP-02, DP-03, DP-05,
  DP-06, DP-07, DP-09, DP-11, DP-12, DP-13) no aparecen en el deck, por instrucción explícita del
  usuario de dejar solo dos tarjetas: DP-01 (Planeación y Control de Operaciones) y DP-04
  (Cadena de Suministro, ya resuelto con GlobalChain). Si preguntan por gestión de tecnología
  hospitalaria (Biomédica, DP-12), seguridad de la información (Sistemas, DP-05) o auditoría de
  sistemas de gestión (DP-03), son oportunidades reales identificadas en el Excel que
  deliberadamente no se muestran en esta versión del deck.

## Los dos desarrollos del slide "Lo que viene"

- **DP-04 · Cadena de Suministro — GlobalChain**: no es un desarrollo pendiente, es un producto
  real del portafolio que ya resuelve la asignatura Gestión Cadena Abastecimiento (Ingeniería
  Industrial, semestre 6). El Excel también la relaciona con Ingeniería Agroindustrial ("1
  asignatura directa y 3 relacionadas"), pero no nombra las tres relacionadas explícitamente —
  el deck y este documento solo afirman lo que el Excel dice con nombre propio, sin inventar
  las asignaturas relacionadas.
- **DP-01 · Simulador de Planeación y Control de Operaciones**: la mayor oportunidad de
  desarrollo propio de toda la Facultad según la hoja (9 asignaturas en 3 programas, Prioridad
  1). Está en evaluación, no existe todavía.

## Slides añadidos o eliminados respecto a la plantilla

- **Añadido** — "Simuladores especializados para Ingeniería" (`slideOtrosSimuladores`), después
  de la cartelera: SimAgile y SimProject, siguiendo el mismo criterio y la misma ubicación que
  en el deck de la Universidad Libre.
- **Eliminado** — el slide de "Asignaturas transversales". Introducción a la Ingeniería y
  Práctica Profesional se repiten en los siete programas, pero ninguna de las dos está
  clasificada como "Encaje perfecto" (ambas son apoyo al curso / preparación previa), así que no
  cumplen el criterio estructural del slide («se repiten en TODOS los programas CON ENCAJE
  PERFECTO»). El hallazgo de que ambas están en los siete programas sí se cuenta, de forma más
  breve, en el acordeón del slide 3.
- **Añadido, en el mismo lugar donde iría Transversales** — "Lo que viene: más allá del catálogo
  actual" (`slideDesarrollosPropios`), con las dos tarjetas DP-01 y DP-04/GlobalChain.
- Slides fijos sin tocar: Portada (adaptada con tokens), Cartelera, Los tres modelos de uso
  docente, Cierre.
- Slide "Evidencia de aprendizaje": los 12 simuladores CompanyGame de las fichas + SimAgile +
  SimProject + GlobalChain (15 filas) — GlobalChain se incluye aunque no aparezca en ninguna
  ficha, porque el slide de desarrollos lo presenta como producto ya disponible y conviene poder
  mostrar también su evidencia de aprendizaje si preguntan.

## Salvedad pendiente de confirmar antes de la reunión

⚠️ **El Excel no indica a qué seccional de la USB corresponden estos siete programas** (Bogotá,
Medellín, Cali o Cartagena), ni trae código SNIES para Multimedia, Agroindustrial ni Biomédica
(Industrial trae SNIES 4466, Sistemas 1349, y Electrónica/Biológica comparten el mismo SNIES
3828 en la fuente — probablemente un error de la fuente, igual que en el deck de la Universidad
Libre con Ingeniería Electrónica y Biológica). El deck no menciona ninguna sede para no afirmar
algo no confirmado. **Preguntar al contacto de la USB a qué seccional corresponde esta Facultad**
antes de presentar — es distinta de la seccional Medellín usada en `usb-mapeo-presentacion/`
(Facultad de Ciencias Económicas y Administrativas).

## Tono con el docente

Se mantuvo el criterio de la plantilla: el simulador se integra al curso que el docente ya
dicta, nunca al revés. Las etiquetas son "de aplicación directa" / "como apoyo al curso", sin
lenguaje de esfuerzo o carga.

## Repositorio público

⚠️ Si esta carpeta se sube a un repositorio público, revisar que este archivo no filtre nada que
no deba salir de la casa: la tabla completa de cobertura, las 129 asignaturas de oportunidad de
desarrollo propio no mostradas, y los ocho desarrollos propios que se decidió no presentar.

## Datos fijos del distribuidor

- Plataforma: https://plataforma.companygame.net/
- **Comercial** (ventas): ventas@simuladoresdenegocios.co · WhatsApp 318 975 6987
- **Fidelización** (acompañamiento): fidelizacion@simuladoresdenegocios.co · WhatsApp 301 790 3086
- El cierre muestra los dos bloques, comercial primero.
- Distribuidor: Simuladores de Negocios Colombia (Grupo Edutec)
