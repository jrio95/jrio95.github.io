# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML, CSS y un archivo de JavaScript. **Sin compilar, sin dependencias y sin
gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
trabajar en ella basta con editar el fichero y recargar.

```
index.html        La página entera
404.html          Página de error
assets/style.css  Todo el diseño
assets/app.js     Estrellas del fondo y filtros de la lista
```

Lo único que se descarga de fuera son las dos tipografías de Google Fonts.

## Cambiar cosas

**Los colores** están todos juntos al principio de `assets/style.css`, en el
bloque `:root`. Cambiar `--marca` repinta el sitio entero: titulares, botones,
etiquetas, las ondas del fondo y una de cada seis estrellas.

```css
--fondo: #08070c;
--texto: #ece9f2;
--marca: #ff3b30;
```

**Los textos** están en `index.html`, tal cual. Todo lo que aparece entre
corchetes (`[TU CIUDAD]`, `[FECHA]`, `[TUS AFICIONES]`) es un hueco por
rellenar, no contenido.

**Una entrada nueva** en la lista de proyectos se copia de una que ya haya y se
cambia el `data-tipo`, que es lo que leen los filtros: `proyecto`, `nota` o
`prueba`. La numeración la recalcula sola el JavaScript al filtrar.

## El fondo

Es lo único que se mueve; el contenido se queda quieto.

Las **estrellas** se generan con un generador congruencial de semilla fija en
lugar de `Math.random`, así que el cielo es idéntico en cada visita y no salta
al repintar.

Las **ondas** son cuatro líneas del mismo trazo a 38, 61 y 88 segundos. Al no
ser múltiplos entre sí no vuelven a coincidir nunca. El bucle cierra sin
costura porque cada `svg` mide el doble que su contenedor y la animación lo
desplaza un `-50%`, es decir dos periodos completos de la onda.

Con `prefers-reduced-motion` no se mueve nada.

## Reglas de escritura

**Nunca se usa el guion largo** (em dash) **ni el medio** (en dash). Donde
harían de inciso, la frase se parte en dos o se resuelve con comas.

El tono es de primera persona y a ras de suelo. Nada de lemas ni de manifiesto.

## Dónde está servida

Ahora mismo en Railway, en el proyecto `jrio-dev`, servicio `web`:
`https://web-production-2a891.up.railway.app`. Se redespliega sola con cada
push a la rama conectada.

El `Dockerfile` existe sólo para eso: Railway necesita un proceso escuchando
en un puerto y ahí va Caddy en modo `file-server`. GitHub Pages no lo mira, y
para desarrollar tampoco hace falta.

## Dominio

Ahora mismo se sirve en `jrio95.github.io`. Cuando `jrio.dev` esté comprado:

1. Crear un fichero `CNAME` en la raíz con una sola línea: `jrio.dev`.
2. En el DNS del dominio, cuatro registros `A` a las IP de GitHub Pages y un
   `CNAME` para `www` que apunte a `jrio95.github.io`.
3. En Settings → Pages, marcar *Enforce HTTPS* cuando el certificado esté
   emitido.

El fichero `CNAME` no se añade antes de tener el dominio: haría que el sitio
dejase de responder en la dirección actual sin responder todavía en la nueva.
