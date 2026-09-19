# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML, CSS y un archivo de JavaScript. **Sin compilar, sin dependencias y sin
gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
trabajar en ella basta con editar el fichero y recargar.

```
index.html        La página entera
404.html          Página de error
assets/style.css  Todo el diseño, fondo y horizonte incluidos
```

**No hay JavaScript.** Ni una línea, ni siquiera para abrir y cerrar las
fichas de proyecto. Lo único que se descarga de fuera son las dos tipografías
de Google Fonts.

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

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay, y
con ella su ficha. El `href` de `.entrada__abrir` tiene que coincidir con el
`id` de la `<section class="ficha">`: ahí se rompe todo si se rompe algo. El
color del proyecto se declara en tres sitios, siempre el mismo: la etiqueta
(`etiqueta--menta`), la tarjeta (`entrada--menta`) y la ficha
(`ficha__caja--menta`). De la tarjeta y la ficha cuelga la variable `--acento`,
que es la que pinta el diagrama, los botones y los rótulos de dentro.

No hay filtros. Los hubo, con cuatro botones para tres entradas del mismo
tipo, y no filtraban nada: eran un control decorativo que además obligaba a
desplazar la fila en el móvil. Si algún día hay notas y pruebas de verdad,
están en el historial de git.

Cada tarjeta tiene **dos destinos y hay que distinguirlos a la primera**:

- La tarjeta entera abre la **ficha** del proyecto (`#ficha-chess`,
  `#ficha-bme`, `#ficha-divr`).
- El botón de abajo a la derecha se va a la **aplicación en vivo**. Va por
  encima del enlace grande con `z-index`, que si no la tarjeta se comería el
  clic y ya no habría forma directa de llegar a la aplicación.

Ninguna apunta al repositorio. Los tres repos son privados y un enlace a un
repo privado es un 404 para cualquiera que no sea su dueño, que es la mitad de
quien visita una página personal.

| Proyecto | Enlace |
|---|---|
| Chess Coach | `chess-coach-production-5b27.up.railway.app` |
| bme-fundamentals | `api-production-2a50.up.railway.app` (la landing del servicio) |
| Divr | `divr.es` |

Si algún repositorio se hace público, ahí se puede volver a enlazar al código.

## Las fichas de proyecto

Como el código no se puede enseñar, lo cuenta la página: para qué es el
proyecto, con qué está hecho, por dónde pasa un dato y qué decisiones
cambiaron algo. Una ficha por proyecto, al final de `index.html`.

**Se abren y se cierran sin JavaScript.** Cada ficha es un `<section>` fijo y
oculto con `visibility: hidden`, y la regla `.ficha:target` lo enciende cuando
la dirección lleva su ancla. Cerrar es volver a `#proyectos`, y hay tres
formas: el aspa, el telón de fondo y el botón del final. El `visibility` no es
un capricho frente a `opacity`: es lo que además saca el panel cerrado del
orden de tabulación y de los lectores de pantalla.

**Nunca se pierde la aplicación en vivo.** Es la mitad del asunto. El botón
está en la barra de arriba, que se queda pegada mientras se desplaza el panel,
y otra vez en el bloque de cierre. Se puede leer la ficha entera sin que el
enlace a la web se vaya de la pantalla.

Los textos de arquitectura son lo primero que se queda viejo. Están en prosa,
en `index.html`, sin plantilla ni estructura que aprender.

## Los diagramas

Van **con cajas y no con una imagen**. Es la única decisión discutible del
apartado, así que aquí queda el porqué.

Lo natural sería Mermaid, que es la herramienta estándar para esto y la que se
usa en el propio GitHub. Se descartó por dos razones: son unos cuantos cientos
de kilobytes de JavaScript en una página que hoy no tiene ni una línea, y su
resultado son cajas grises de biblioteca que no se parecen al resto del sitio.
Y sobre todo, un diagrama de ancho fijo obliga a elegir entre leerlo en el
escritorio o leerlo en el móvil: al encogerlo, la letra se va a seis píxeles.

Con cajas de CSS cada fila se recoloca sola, el texto se lee siempre a su
tamaño real y los colores son los del proyecto. La estructura es esta:

```html
<div class="diagrama diagrama--menta">
  <div class="d-fila">
    <div class="d-nodo">
      <span class="rotulo">Origen</span>       <!-- el papel que hace -->
      <strong>CNMV</strong>                     <!-- qué es -->
      <span class="d-nodo__nota">...</span>     <!-- qué pasa aquí -->
      <span class="d-nodo__tec">Go</span>       <!-- con qué, opcional -->
    </div>
  </div>
  <div class="d-paso" aria-hidden="true"><i></i></div>   <!-- el hilo -->
</div>
```

Una `d-fila` con dos o tres nodos son pasos que ocurren a la vez. El `d-paso`
es el hilo entre filas: lo único que se mueve en todo el diagrama, para que se
vea hacia dónde va el dato. Hay tres variantes de nodo: `--fuerte` para el
paso donde de verdad pasa algo, `--final` para la salida y `--futuro`, en
trazo discontinuo, para lo que todavía no está hecho. La capa RAG de
bme-fundamentals está dibujada así a propósito: aparece porque es lo
siguiente, no porque ya funcione.

Al abrir la ficha el diagrama se monta por pasos, en el mismo orden en el que
se lee. Con `prefers-reduced-motion` no se monta ni fluye nada.

## El horizonte

Bajo la portada hay un perfil de Salamanca dibujado a mano en SVG: las torres,
la cúpula y las cubiertas, en trazo y sin relleno. No es una imagen ni un
icono suelto pegado en una esquina, es la línea de tierra sobre la que se
apoya el resto de la página.

Se dibuja solo al cargar, una vez, con el truco de `stroke-dasharray`: el
guion se declara más largo que el trazo entero, así que el recorrido completo
cabe en uno solo y animar el desfase lo va destapando de izquierda a derecha.

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
