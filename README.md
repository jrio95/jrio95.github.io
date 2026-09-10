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
bloque `:root`, y repetidos dentro de `@media (prefers-color-scheme: dark)`
con los mismos nombres. Cambiar un token repinta el sitio entero en los dos
temas.

```css
--papel:  #f7f8fa;   /* fondo de la página */
--lienzo: #ffffff;   /* tarjetas */
--borde:  #e3e6ec;
--tinta:  #14161c;   /* texto */

--azul:   #2c62f0;   /* el único acento */
--verde:  #0f9d64;   /* sólo estados: "esto está vivo" */
```

Hay **un solo color de acento**. El verde no decora: aparece únicamente en la
pastilla de disponibilidad y en el punto de estado de cada proyecto, donde
significa algo. Cuando cada tarjeta lleva su propio color, el color deja de
querer decir nada.

**Los textos** están en `index.html`, tal cual. Ya no queda ningún hueco entre
corchetes por rellenar.

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay. El
estado se marca con `marca-estado` (verde, en producción) o
`marca-estado marca-estado--obra` (azul, en desarrollo).

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

El rumbo es **claro, limpio y de herramienta**: fondo de papel, tarjetas
blancas con un borde de un píxel, un solo azul de interfaz y monoespaciada
para todo lo que sea dato (fechas, etiquetas de campo, lenguajes, estados). Se
tiene que leer como la documentación de un producto y no como un póster.

Tres decisiones sostienen el resto:

- **La jerarquía la hace el espacio, no el color.** Cada sección abre con un
  título y una línea, y todo lo demás son tarjetas del mismo alto de borde.
- **La ficha de la portada.** Los datos que daría un `whoami` (nombre, rol,
  lugar, stack, contacto) en una tabla de clave y valor. Es la pieza que hace
  que la portada informe en lugar de proclamar.
- **Nada se mueve salvo al entrar.** Un desvanecido corto en la portada y se
  acabó. El fondo antiguo (retícula, manchas de luz y grano) se ha ido entero:
  daba textura pero también ruido, y competía con el contenido.

El **tema oscuro** es el mismo diseño con los tokens cambiados. Lo decide el
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
