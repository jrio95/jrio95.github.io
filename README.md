# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML, CSS y un archivo de JavaScript. **Sin compilar, sin dependencias y sin
gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
trabajar en ella basta con editar el fichero y recargar.

```
index.html        La página entera
404.html          Página de error
assets/style.css  Todo el diseño, tema claro y oscuro incluidos
```

**No hay JavaScript.** Ni una línea. Lo único que se descarga de fuera son las
dos tipografías de Google Fonts.

## Cambiar cosas

**Los colores** están todos juntos al principio de `assets/style.css`, en el
bloque `:root`, y repetidos dentro de `@media (prefers-color-scheme: light)`
con los mismos nombres. Cambiar un token repinta el sitio entero en los dos
temas.

```css
--papel:   #090a0e;   /* fondo de la página */
--lienzo:  #101219;   /* tarjetas */
--borde:   #242936;
--filo:    rgba(255,255,255,.07);  /* el brillo del borde de arriba */
--tinta:   #eef1f7;   /* texto */

--azul:    #5b8cff;   /* el único acento */
--violeta: #a78bfa;   /* sólo para degradados, nunca sólido */
```

Hay **un solo color de acento**. El violeta no pinta ningún elemento entero:
existe para el degradado del titular y el del logotipo, y ahí se acaba. No hay
verde en ninguna parte: una pastilla verde de "disponible" es el adorno que
lleva puesto media web generada, y no dice nada que no diga la fila `estado`
de la ficha.

**Los textos** están en `index.html`, tal cual. Ya no queda ningún hueco entre
corchetes por rellenar.

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay. El
estado se marca con `marca-estado` (punto azul, en producción) o
`marca-estado marca-estado--obra` (punto hueco, en desarrollo). La primera
tarjeta lleva además `entrada--destacada` y ocupa la fila entera; si algún día
hay una cuarta, la retícula la coloca sola.

No hay filtros. Los hubo, con cuatro botones para tres entradas del mismo
tipo, y no filtraban nada: eran un control decorativo que además obligaba a
desplazar la fila en el móvil. Si algún día hay notas y pruebas de verdad,
están en el historial de git.

Cada entrada apunta a la **aplicación en vivo**, no al repositorio. Los tres
repos son privados y un enlace a un repo privado es un 404 para cualquiera que
no sea su dueño, que es la mitad de quien visita una página personal.

| Proyecto | Enlace |
|---|---|
| Chess Coach | `chess-coach-production-5b27.up.railway.app` |
| bme-fundamentals | `api-production-2a50.up.railway.app` (la landing del servicio) |
| Divr | `divr.es` |

Si algún repositorio se hace público, ahí se puede volver a enlazar al código.

## El diseño

El rumbo es **oscuro y de herramienta, con relieve**: fondo casi negro,
superficies que suben por capas, un azul de interfaz y monoespaciada para todo
lo que sea dato (fechas, dominios, lenguajes, estados). Se tiene que leer como
el panel de un producto y no como un póster.

Lo que sostiene el resto:

- **La ficha de la portada.** Los datos que daría un `whoami` (nombre, rol,
  stack, intereses, contacto, estado) en una tabla de clave y valor. Es la
  pieza que hace que la portada informe en lugar de proclamar. La última fila
  lleva un cursor parpadeando: la ficha parece un terminal esperando y no una
  captura muerta.
- **La banda de cifras.** Cuatro números grandes entre la portada y los
  proyectos. Rompe la sucesión de tarjetas iguales, que es lo que hace que una
  página se vea plana por mucho contenido que tenga.
- **Los proyectos no miden lo mismo.** El primero ocupa la fila entera y los
  otros dos van a media anchura: la jerarquía se ve antes de leer una palabra.

### Contra el aspecto plano

Cuatro reglas, todas en CSS:

- La clase `.relieve` da a cada superficie un relleno en degradado y un **filo
  de luz** de un píxel arriba. Es lo que separa una tarjeta del fondo sin
  subirle el brillo al relleno.
- Un **halo** azul detrás de la portada, y sólo ahí. Late muy despacio.
- **Al pasar por encima**, las tarjetas suben, el borde se tiñe de azul y se
  enciende un resplandor desde la esquina del enlace.
- Las secciones **entran al desplazar**, con `animation-timeline: view()` y
  sin una línea de JavaScript. Los navegadores que no lo soportan no entran en
  el bloque `@supports` y lo ven todo visible, que es el resultado correcto.

El **tema claro** es el mismo diseño con los tokens cambiados. Lo decide el
sistema operativo con `prefers-color-scheme`: no hay interruptor, porque un
interruptor obligaría a meter JavaScript para recordar la elección.

Con `prefers-reduced-motion` no se mueve nada.

## El horizonte

El perfil de Salamanca dibujado en SVG (las torres, la cúpula y las cubiertas,
en trazo y sin relleno) sigue ahí, pero de remate del pie y no de portada. Va
contenido a 520 px y a media tinta: da el sitio sin robarle espacio al
contenido. A todo lo ancho medía más de 400 px de alto y se convertía en el
protagonista de la página, que no es lo que hace.

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
