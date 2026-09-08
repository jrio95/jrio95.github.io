# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML, CSS y un archivo de JavaScript. **Sin compilar, sin dependencias y sin
gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
trabajar en ella basta con editar el fichero y recargar.

```
index.html        La página entera
404.html          Página de error
assets/style.css  Todo el diseño, fondo incluido
assets/app.js     Los filtros de la lista, y nada más
```

Lo único que se descarga de fuera son las dos tipografías de Google Fonts.

## Cambiar cosas

**Los colores** están todos juntos al principio de `assets/style.css`, en el
bloque `:root`. Son tres acentos planos sobre un fondo ciruela, y cambiar
cualquiera repinta el sitio entero: titulares, botones, etiquetas y las formas
que flotan de fondo.

```css
--fondo:     #1b1726;   /* ciruela oscuro, no negro */
--tarjeta:   #241f33;
--texto:     #f3eee8;   /* crema, no blanco */

--melocoton: #ff9e7d;   /* el acento de marca */
--menta:     #6fe0b0;
--lila:      #b39cf5;
```

El texto sobre los botones de melocotón va en el color del fondo y no en
blanco: así da 8,7:1 de contraste, mientras que en blanco se quedaría en
2,0:1.

**Los textos** están en `index.html`, tal cual. Ya no queda ningún hueco entre
corchetes por rellenar.

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay y se
cambia el `data-tipo`, que es lo que leen los filtros: `proyecto`, `nota` o
`prueba`. Cada tarjeta lleva su color de etiqueta (`etiqueta--melocoton`,
`--menta`, `--lila`), y los filtros que no encuentran nada avisan en vez de
dejar la lista en blanco.

Hay tres entradas, las tres reales, ordenadas de la más reciente a la más
antigua por la fecha en que arrancó cada proyecto. No se dejan entradas de
ejemplo: una lista con un proyecto de verdad y dos maquetas se nota desde
fuera.

Cada entrada apunta a la **aplicación en vivo**, no al repositorio. Los tres
repos son privados y un enlace a un repo privado es un 404 para cualquiera que
no sea su dueño, que es la mitad de quien visita una página personal.

| Proyecto | Enlace |
|---|---|
| Chess Coach | `chess-coach-production-5b27.up.railway.app` |
| bme-fundamentals | `api-production-2a50.up.railway.app` (la landing del servicio) |
| Divr | `divr.es` |

Si algún repositorio se hace público, ahí se puede volver a enlazar al código.

## El fondo

Textura, no dibujos. Cualquier figura reconocible ahí detrás se come al
contenido y baja la edad de la página.

Son tres capas de CSS, sin una línea de JavaScript:

- Una **retícula de puntos** que deriva muy despacio. Se desplaza exactamente
  una celda (34 px), así que el bucle cierra sin costura.
- Dos **manchas de luz** desenfocadas que respiran a 34 y 47 segundos. Al no
  ser múltiplos, no vuelven a coincidir.
- Una capa de **grano** fino, que quita el aspecto plano de un fondo liso.

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
