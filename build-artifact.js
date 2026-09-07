#!/usr/bin/env node
/**
 * Genera la versión publicable como Artifact de Claude a partir de index.html.
 *
 * Dos diferencias con index.html:
 *   1. El Artifact añade él mismo <!doctype>, <html>, <head> y <body>, así que hay que
 *      entregar solo el contenido: <title> + <style> + el cuerpo.
 *   2. El Artifact es un archivo único: las imágenes de assets/ no se resuelven por ruta
 *      relativa, hay que incrustarlas como data: URI.
 *
 * Uso:  node build-artifact.js [ruta/de/salida.html]
 * Por defecto escribe ./artifact.html
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'index.html');
const OUT = process.argv[2] || path.join(ROOT, 'artifact.html');

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };

let h = fs.readFileSync(SRC, 'utf8');

/* 1. quitar el esqueleto del documento */
const iTitle = h.indexOf('<title>');
const iHeadEnd = h.indexOf('</head>');
const iBody = h.indexOf('<body>');
const iBodyEnd = h.lastIndexOf('</body>');
if (iTitle < 0 || iHeadEnd < 0 || iBody < 0 || iBodyEnd < 0) throw new Error('index.html no tiene la estructura esperada');
const cabeza = h.slice(iTitle, iHeadEnd).trim();          // title + style (sin los meta, que los pone el Artifact)
const cuerpo = h.slice(iBody + '<body>'.length, iBodyEnd);
h = cabeza + '\n' + cuerpo;

/* 2. incrustar assets/ como data: URI */
const cache = new Map();
function dataUri(rel) {
  if (cache.has(rel)) return cache.get(rel);
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) throw new Error('falta el asset: ' + rel);
  const mime = MIME[path.extname(abs).toLowerCase()];
  if (!mime) throw new Error('tipo de imagen no soportado: ' + rel);
  const uri = `data:${mime};base64,${fs.readFileSync(abs).toString('base64')}`;
  cache.set(rel, uri);
  return uri;
}
// src="assets/x.png"  y  openLightbox('assets/x.png', ...)
h = h.replace(/(src=")(assets\/[^"]+)(")/g, (m, a, rel, c) => a + dataUri(rel) + c);
h = h.replace(/(openLightbox\(')(assets\/[^']+)(')/g, (m, a, rel, c) => a + dataUri(rel) + c);

// Solo cuentan las referencias reales: "assets/…" dentro de un comentario o de <code> es texto.
const quedan = h.match(/src="assets\/|openLightbox\('assets\//g);
if (quedan) throw new Error('quedaron ' + quedan.length + ' referencias a assets/ sin incrustar');

fs.writeFileSync(OUT, h, 'utf8');
console.log(`  ✓ ${OUT}  (${(h.length / 1048576).toFixed(2)} MB, ${cache.size} imágenes incrustadas)`);
