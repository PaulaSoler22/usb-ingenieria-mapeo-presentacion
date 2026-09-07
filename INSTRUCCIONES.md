# Cómo usar esta plantilla

Versión corta. El detalle está en `CLAUDE.md`.

## 1. Copiar

Copia **toda la carpeta** y renómbrala con la universidad:

```
plantilla-mapeo-curricular/  →  unilibre-mapeo-presentacion/
```

Nunca edites la plantilla directamente.

## 2. Pedírselo a Claude

Abre Claude Code en la carpeta nueva y dile algo así:

> Esta presentación es el mapeo curricular de la **Universidad Libre**, Facultad de Ciencias
> Económicas, **4 pregrados**. El Excel del mapeo está en esta carpeta. Rellena la plantilla.

Claude lee el `CLAUDE.md`, reemplaza los tokens `[[...]]`, duplica el bloque de ficha una vez
por programa y rellena las tablas desde el Excel.

## 3. Revisar

- Busca `[[` en `index.html`: no debe quedar ningún token sin reemplazar.
- Busca `VARIABLE ·` en `index.html`: son los comentarios que dicen qué va en cada hueco.
  Bórralos cuando el hueco esté lleno.
- Abre `index.html` en el navegador y pasa las 13 slides.
- Comprueba que las cifras de la tabla del slide 4 suman lo mismo que la fila de total.

## 4. Publicar

Doble clic en `index.html` para verla en local. Para publicarla como Artifact de Claude:

```bash
node build-artifact.js
```

Genera `artifact.html`, un archivo único con las imágenes incrustadas.

## Lo que no se toca

- **Los slides marcados FIJO**: cartelera, los tres modelos de uso docente, cierre.
- **La paleta**: es la identidad de Simuladores de Negocios Colombia, no la de la universidad.
- **El `<script>`**: la numeración de slides y el contador se calculan solos.
- **Los datos de contacto**: comercial y fidelización, los dos, comercial primero.

## La regla que no se rompe

**Ninguna cifra del deck se inventa.** Todas salen del Excel del mapeo. Si un dato no está en
el Excel, no entra en la presentación.
