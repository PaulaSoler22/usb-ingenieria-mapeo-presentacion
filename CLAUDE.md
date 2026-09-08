# CLAUDE.md — Simuladores para Ingeniería · Universidad de San Buenaventura

> Documento de trabajo de **esta** presentación. Aquí está la respuesta honesta a cualquier
> pregunta sobre metodología, cobertura o vacíos, aunque el deck no la muestre.
> Distribuidor: **Simuladores de Negocios Colombia** (Grupo Edutec).

## ⚠️ Historial de correcciones (dos rondas — leer antes de tocar nada)

**Ronda 1 (7-sep-2026):** la primera versión usaba columnas narrativas del Excel ("Simulador
recomendado") que en al menos un caso contradecían a las columnas objetivas (Grado de ajuste,
SimAgile/SimProject). Se reconstruyó usando solo columnas objetivas: `Grado de ajuste` +
`Simulador CompanyGame que encaja` + `Nivel CG`, y `SimAgile`/`SimProject` = Alta/Media. Resultado:
16 asignaturas.

**Ronda 2 (8-sep-2026, esta versión):** el usuario pidió ir más allá de las columnas del Excel y
**verificar cada asignatura contra su contenido curricular real**, buscando en la web (planes de
estudio oficiales de la USB, y cuando no había microcurrículo público, el contenido estándar de
esa asignatura en programas de ingeniería colombianos). Se usaron **7 agentes de investigación
en paralelo** (uno o varios por programa), cada uno con instrucciones explícitas de ser
escéptico y preferir "eliminar" o "parcial" antes que "perfecto" ante evidencia débil.

**Hallazgo institucional importante:** dos agentes distintos, de forma independiente, encontraron
el **plan de estudios oficial de la Facultad de Ingeniería en usbcali.edu.co** con los nombres,
semestres y créditos exactos de varias asignaturas del Excel (Ingeniería de Sistemas SNIES 1349,
Ingeniería Agroindustrial, Ingeniería Biológica, Ingeniería Electrónica, Ingeniería Multimedia,
Ingeniería Biomédica, Ingeniería Industrial). **Esta Facultad es de la USB sede Cali** — no
Bogotá, Medellín ni Cartagena. Fuentes: `https://usbcali.edu.co/wp-content/uploads/.../FI-PlanEs-*.pdf`
(un PDF de malla curricular por programa). Ningún agente encontró microcurrículos públicos
detallados (unidad por unidad) — solo las mallas con nombre/semestre/créditos. Donde no había
microcurrículo, se usó el contenido estándar de esa asignatura en la disciplina en Colombia,
declarado explícitamente como tal en cada veredicto.

### Resultado de la verificación — qué cambió

| Programa | Asignatura | Antes (ronda 1) | Después (ronda 2) | Motivo |
|---|---|---|---|---|
| Industrial | Gestión Estratégica Organizacional | Perfecto (Business21) | **Parcial** | El núcleo típico del curso es el marco analítico (FODA, Porter, BSC); Business21 simula la *ejecución* de decisiones, un complemento válido pero no el eje del curso |
| Industrial | Ingeniería de Costos | Parcial (Corbatul) | Parcial (sin cambio) | Corbatul es gerencia financiera integral; el curso es costeo técnico — solo el componente de estructura de costos conecta genuinamente |
| Industrial | Gestión de Operaciones | Parcial (MilkFactory) | **Perfecto** | El núcleo del curso (planeación de producción, capacidad, inventarios, calidad) coincide directamente con MilkFactory |
| Industrial | Investigación de Mercados | Perfecto (Focus) | Perfecto (sin cambio) | — |
| Industrial | Diseño de Productos y Servicios | Perfecto (SimAgile) | **ELIMINADA** | Es un curso de metodología de diseño de producto físico/servicio (QFD, prototipado, ciclo de vida), no de desarrollo de software — SimAgile no aplica |
| Industrial | Gerencia de Proyectos de Ingeniería | Perfecto (SimProject) | Perfecto (sin cambio) | — |
| Sistemas | Arquitectura de Software | Perfecto (SimAgile) | **ELIMINADA** | El curso es de patrones/estilos arquitectónicos y atributos de calidad; SimAgile simula el *proceso* Scrum, no decisiones de arquitectura técnica |
| Sistemas | Cátedra de Emprendimiento | Perfecto (FitnessGym) | **Parcial** (por instrucción explícita del usuario) | La evidencia de contenido (Design Thinking, modelo de negocio, pitch) sostiene "perfecto", pero el usuario pidió dejarla en parcial de todas formas |
| Sistemas | Gestión de Proyectos de Software | Perfecto (SimProject) | Perfecto (sin cambio) | — |
| Agroindustrial | Mercadeo e Investigación de Mercados | Perfecto (Coffee Time) | **Parcial** | El curso combina mix de marketing (que sí cubre Coffee Time) con un componente de investigación de mercados/metodología que Coffee Time no cubre |
| Agroindustrial | Gerencia de Proyectos de Ingeniería | Perfecto (SimProject) | Perfecto (sin cambio) | — |
| Biológica | Ingeniería de Costos | Parcial (Corbatul) | **ELIMINADA** | Curso técnico de solo 2 créditos; Corbatul (gerencia financiera integral) excede ampliamente su alcance — a diferencia de Industrial, donde el curso tiene 3 créditos y mayor profundidad |
| Biológica | Gerencia de Proyectos de Ingeniería | Perfecto (SimProject) | Perfecto (sin cambio) | — |
| Multimedia | Gestión en Proyectos | Perfecto (SimProject) | Perfecto (sin cambio) | Confirmado que está clasificada institucionalmente junto a materias administrativas/jurídicas, no junto a las de diseño/audiovisual — es dirección de proyectos genérica |
| Biomédica | Valoración de Proyectos | Perfecto (SimProject) | **Cambiada a Corbatul, Parcial** | "Valoración de Proyectos" es la nomenclatura estándar colombiana de evaluación financiera de inversiones (VPN, TIR, flujo de caja) — un simulador financiero (Corbatul) encaja mejor que uno de dirección de proyectos (SimProject) |
| Electrónica | Prototipado de Soluciones Tecnológicas | Parcial (SimAgile) | **ELIMINADA** | El curso, por su ubicación curricular (junto a Circuitos, Instrumentación, Diseño de Ingeniería Electrónica), es de prototipado de hardware/mecatrónica — sin ninguna evidencia de contenido de Scrum/software |

**Efecto neto: Ingeniería Electrónica se queda sin ninguna asignatura confirmada** — las otras
dos filas de ese programa (Práctica Profesional, Diseño de Ingeniería Electrónica II) ya habían
quedado excluidas en la ronda 1 por falta de producto asignado en el Excel. **Se eliminó la
ficha completa de Electrónica del deck** — no se fuerza ninguna asignatura solo por completar
las siete fichas.

**SimAgile queda completamente fuera del deck**: de las tres asignaturas donde el Excel u
otro análisis lo había sugerido, en las tres la verificación de contenido real lo descartó. Este
es un cambio importante frente al pedido original del usuario ("ofrecer CompanyGame, SimAgile y
SimProject") — hoy, con la evidencia disponible, **no hay ninguna asignatura de esta Facultad
donde SimAgile encaje de verdad**. SimAgile sigue siendo parte del portafolio de Simuladores de
Negocios Colombia y puede ofrecerse igual en la conversación comercial, pero no tiene respaldo
curricular verificado en este mapeo — si en el futuro se consigue el microcurrículo real de
alguna asignatura de software y sí hay encaje, se puede reincorporar.

## Qué es esta presentación

Pieza **comercial** para directores de programa y decano de la **Facultad de Ingeniería** de la
Universidad de San Buenaventura, **sede Cali** — siete pregrados: Ingeniería Industrial, de
Sistemas, Multimedia, Agroindustrial, Biomédica, Electrónica y Biológica.

⚠️ **No confundir con `usb-mapeo-presentacion/`**, presentación previa (ago-2026) para la
**Facultad de Ciencias Económicas y Administrativas** de la USB seccional Medellín. Son dos
facultades, dos seccionales, dos Excel y dos decks independientes.

## Metodología (vigente desde la ronda 1, ver arriba para la ronda 2)

Cada fila candidata del Excel salió de `Grado de ajuste` = Encaje perfecto/parcial (con el
producto de `Simulador CompanyGame que encaja` + `Nivel CG`), o de `SimAgile`/`SimProject` =
Alta/Media — nunca de las columnas narrativas Q-V del Excel. Sobre ese conjunto candidato
(16 filas), la ronda 2 aplicó una segunda capa de verificación: investigación web del contenido
real de cada asignatura, con veredicto final PERFECTO / PARCIAL / ELIMINAR. **Ninguna asignatura
de este deck se sostiene solo en el nombre o en una columna del Excel: las 12 que quedan tienen,
además, evidencia (oficial o disciplinar general) de que su contenido real coincide con lo que
simula el producto asignado.**

SimVenture sigue sin usarse en ningún punto del deck, por instrucción explícita del usuario.

## Cifras del deck (públicas)

| | |
|---|---|
| Asignaturas con simulador | **12** |
| Encaje perfecto (aplicación directa) | **7** |
| Encaje parcial (apoyo al curso) | **5** |
| Simuladores distintos | **7** (6 del catálogo CompanyGame + SimProject) |
| Rango de semestres | **4 – 7** |
| Programas con al menos una asignatura confirmada | **6 de 7** (todos menos Electrónica) |

### Alcance por programa

| Programa | Con simulador | Perfecto | Parcial | Simuladores | Semestres |
|---|---:|---:|---:|---:|---|
| Ingeniería Industrial | 5 | 3 | 2 | 5 | 4 – 6 |
| Ingeniería de Sistemas | 2 | 1 | 1 | 2 | 7 |
| Ingeniería Agroindustrial | 2 | 1 | 1 | 2 | 4 – 6 |
| Ingeniería Biológica | 1 | 1 | 0 | 1 | 5 |
| Ingeniería Multimedia | 1 | 1 | 0 | 1 | 6 |
| Ingeniería Biomédica | 1 | 0 | 1 | 1 | 7 |
| Ingeniería Electrónica | **0** | 0 | 0 | 0 | — |
| **Total Facultad** | **12** | **7** | **5** | **7** | **4 – 7** |

### Las 12 filas finales, con su fuente de verificación

| Programa | Sem. | Asignatura | Simulador | Verificación de contenido |
|---|---|---|---|---|
| Industrial | 5 | Gestión de Operaciones | MilkFactory (N5) | Contenido estándar de la disciplina — coincide con planeación de producción/capacidad/inventarios |
| Industrial | 5 | Investigación de Mercados | Focus (N5) | Contenido estándar de la disciplina |
| Industrial | 6 | Gerencia de Proyectos de Ingeniería | SimProject | Contenido estándar PMI/PMBOK, patrón consistente en Industrial/Agroindustrial/Biológica |
| Industrial | 4 | Gestión Estratégica Organizacional | Business21 (N3-4) | Parcial: cubre la ejecución, no el marco analítico (FODA/Porter/BSC) que es el eje del curso |
| Industrial | 4 | Ingeniería de Costos | Corbatul (N3-4) | Parcial: curso de costeo técnico; Corbatul aporta el componente de estructura de costos |
| Sistemas | 7 | Gestión de Proyectos de Software | SimProject | Plan de estudios oficial USB Cali (SNIES 1349) + contenido estándar PMBOK |
| Sistemas | 7 | Cátedra de Emprendimiento | FitnessGym (N3-4) | Plan de estudios oficial + contenido típico (Design Thinking, modelo de negocio) — bajada a parcial por instrucción del usuario pese a evidencia de "perfecto" |
| Agroindustrial | 6 | Gerencia de Proyectos de Ingeniería | SimProject | Plan de estudios oficial USB Cali + coexistencia con "Ingeniería Económica" como curso separado (indicio de que no es evaluación financiera) |
| Agroindustrial | 4 | Mercadeo e Investigación de Mercados | Coffee Time (N1-2) | Plan de estudios oficial + comparación con universidades colombianas — parcial porque el nombre también promete investigación de mercados, que Coffee Time no cubre |
| Biológica | 5 | Gerencia de Proyectos de Ingeniería | SimProject | Plan de estudios oficial USB Cali (Res. 020628/2025) — materia transversal compartida con Industrial y Agroindustrial |
| Multimedia | 6 | Gestión en Proyectos | SimProject | Plan de estudios oficial + PEP del programa: clasificada en el subcomponente administrativo, no en el audiovisual |
| Biomédica | 7 | Valoración de Proyectos | Corbatul (N3-4) | Plan de estudios oficial (Res. MEN 8360/2020) + nomenclatura estándar colombiana ("Valoración de Proyectos" = evaluación financiera, no dirección de proyectos) |

## Filas descartadas en la ronda 2 (con evidencia)

| Programa | Asignatura | Simulador descartado | Por qué |
|---|---|---|---|
| Industrial | Diseño de Productos y Servicios | SimAgile | Curso de diseño de producto físico/servicio (QFD, prototipado), no de desarrollo de software |
| Sistemas | Arquitectura de Software | SimAgile | Curso de patrones/atributos de calidad arquitectónica, no del proceso ágil que simula SimAgile |
| Biológica | Ingeniería de Costos | Corbatul | Curso técnico de 2 créditos; Corbatul (gerencia financiera integral) excede su alcance |
| Electrónica | Prototipado de Soluciones Tecnológicas | SimAgile | Curso de prototipado de hardware/mecatrónica (por su ubicación curricular), sin evidencia de contenido de software ágil |

## Filas ya descartadas en la ronda 1 (sin cambio)

Dos filas de Electrónica (`Grado de ajuste = Encaje parcial` pero columna `Simulador CompanyGame
que encaja` vacía en el Excel): Práctica Profesional y Diseño de Ingeniería Electrónica II. Con
la eliminación adicional de Prototipado de Soluciones Tecnológicas en la ronda 2, **Electrónica
queda en cero asignaturas** y su ficha se eliminó del deck.

## Límite de esta verificación — para no sobrevender la certeza

Ningún agente de investigación encontró microcurrículos públicos detallados (unidad por unidad,
con contenidos semanales) de la USB Cali — solo mallas curriculares oficiales (nombre, semestre,
créditos) y, para el contenido temático, el patrón estándar de cada asignatura en la disciplina
en Colombia. Las verificaciones "PERFECTO"/"PARCIAL" de este documento tienen distintos niveles
de certeza:

- **Alta certeza** (plan oficial + contenido verificable de fuentes académicas serias): Gestión
  de Proyectos de Software, Arquitectura de Software (descartada), Cátedra de Emprendimiento.
- **Media-alta certeza** (plan oficial + inferencia razonada por nomenclatura y contexto
  curricular, sin microcurrículo): Gerencia de Proyectos de Ingeniería (los tres programas),
  Gestión en Proyectos, Valoración de Proyectos, Mercadeo e Investigación de Mercados,
  Prototipado de Soluciones Tecnológicas (descartada), Ingeniería de Costos (Biológica,
  descartada).
- **Conocimiento general de la disciplina** (sin plan oficial verificado para esa asignatura
  puntual): Gestión Estratégica Organizacional, Ingeniería de Costos (Industrial), Gestión de
  Operaciones, Investigación de Mercados, Diseño de Productos y Servicios (descartada).

**Si la Facultad puede compartir los microcurrículos reales** (mencionados por varios agentes
como documentos internos en Moodle/ASIS, no públicos), vale la pena revalidar estas 12 filas
antes de una reunión formal — especialmente las de "conocimiento general de la disciplina".

## Slides añadidos o eliminados respecto a la plantilla

- **Añadido** — "SimProject: el especialista en dirección de proyectos de ingeniería"
  (`slideOtrosSimuladores`), después de la cartelera. Originalmente incluía también SimAgile;
  se quitó en la ronda 2 al no encontrar ningún encaje real.
- **Eliminado** — el slide de "Asignaturas transversales" (ninguna asignatura se repite en los
  siete programas con encaje perfecto). El hallazgo de esta versión —SimProject en cuatro
  programas— se cuenta en el acordeón del slide 3.
- **Eliminado** — la ficha de Ingeniería Electrónica (0 asignaturas confirmadas tras la ronda 2).
- **Añadido** — "Lo que viene: más allá del catálogo actual" (`slideDesarrollosPropios`), con
  las tarjetas DP-01 (Planeación y Control de Operaciones, en evaluación) y DP-04/GlobalChain
  (ya disponible). Esta hoja del Excel no se vio afectada por ninguna de las dos rondas de
  corrección.
- Slides fijos sin tocar: Portada, Cartelera, Los tres modelos de uso docente, Cierre.
- Slide "Evidencia de aprendizaje": 6 simuladores CompanyGame (Business21, Focus, Corbatul,
  MilkFactory, FitnessGym, Coffee Time) + SimProject + GlobalChain (8 filas). SimAgile se quitó
  de esta tabla también.

## Tono con el docente

Se mantuvo el criterio de la plantilla: el simulador se integra al curso que el docente ya
dicta, nunca al revés. Etiquetas "de aplicación directa" / "como apoyo al curso".

## Repositorio público

⚠️ Si esta carpeta se sube a un repositorio público, revisar que este archivo no filtre nada que
no deba salir de la casa: el denominador completo, las asignaturas descartadas con su
justificación, y el hecho de que Electrónica quedó sin ninguna asignatura confirmada.

## Datos fijos del distribuidor

- Plataforma: https://plataforma.companygame.net/
- **Comercial** (ventas): ventas@simuladoresdenegocios.co · WhatsApp 318 975 6987
- **Fidelización** (acompañamiento): fidelizacion@simuladoresdenegocios.co · WhatsApp 301 790 3086
- El cierre muestra los dos bloques, comercial primero.
- Distribuidor: Simuladores de Negocios Colombia (Grupo Edutec)
