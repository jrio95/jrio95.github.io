# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML y CSS. **Sin compilar, sin dependencias y sin gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
trabajar en ella basta con editar el fichero y recargar.

```
index.html        La página entera, en español
en/index.html     La misma página, en inglés
404.html          Página de error
assets/style.css  Todo el diseño, tema claro y oscuro incluidos
```

**No hay JavaScript.** Ni una línea. Lo único que se descarga de fuera son las
dos tipografías de Google Fonts.

Aparte está `.claude/`, que no es la página: es la skill de
[Impeccable](https://github.com/pbakaus/impeccable) instalada en el proyecto,
para tener `/impeccable` también en las sesiones remotas, que no ven los
plugins instalados en el portátil. El `Dockerfile` no la copia, así que no
llega a Railway ni pesa en lo que se sirve.

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

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay, y
con ella su ficha. El `href` de `.entrada__abrir` tiene que coincidir con el
`id` de la `<section class="detalle">`: ahí se rompe todo si se rompe algo. El
estado se marca con `marca-estado` (punto azul, en producción) o
`marca-estado marca-estado--obra` (punto hueco, en desarrollo). La primera
tarjeta lleva además `entrada--destacada` y ocupa la fila entera; si algún día
hay una cuarta, la retícula la coloca sola.

No hay filtros. Los hubo, con cuatro botones para tres entradas del mismo
tipo, y no filtraban nada: eran un control decorativo que además obligaba a
desplazar la fila en el móvil. Si algún día hay notas y pruebas de verdad,
están en el historial de git.

Cada tarjeta tiene **dos destinos y hay que distinguirlos a la primera**:

- La tarjeta entera abre la **ficha** del proyecto (`#detalle-divr`,
  `#detalle-bme`, `#detalle-chess`), y lo dice con el enlace azul de abajo.
- El botón de la esquina se va a la **aplicación en vivo**, que es a donde
  apuntaba antes la tarjeta entera. La dirección sigue escrita en
  monoespaciada debajo del título, así que se ve a dónde lleva antes de
  pincharlo.

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
cambiaron algo. Una ficha por proyecto, al final de `index.html` y de
`en/index.html`.

**De dónde sale lo que cuentan.** No está inventado ni estirado de la tarjeta:
sale del repositorio de cada proyecto, de su README y de sus documentos de
reglas de negocio. Las decisiones que aparecen son las que allí están escritas
como decisiones, con su motivo. Cuando uno de los tres cambie de forma, esto es
lo que hay que volver a leer.

**Se abren y se cierran sin JavaScript.** Cada ficha es un `<section>` fijo y
oculto con `visibility: hidden`, y la regla `.detalle:target` lo enciende
cuando la dirección lleva su ancla. Cerrar es volver a `#proyectos`, y hay tres
formas: el aspa, el telón de fondo y el botón del final. El `visibility` no es
un capricho frente a `opacity`: es lo que además saca el panel cerrado del
orden de tabulación y de los lectores de pantalla.

**Van fuera de `<main>`, y eso no es cosmético.** `main` lleva `z-index`, así
que abre un contexto de apilamiento: dentro de él, una ficha con `z-index: 80`
sigue quedando por debajo de la barra pegajosa, que está fuera y tiene 50. Al
sacarlas, el panel tapa la barra como debe.

**Nunca se pierde la aplicación en vivo.** Es la mitad del asunto. El botón
está en la barra de arriba de la ficha, que se queda pegada mientras se
desplaza el panel, y otra vez en el bloque de cierre. Se puede leer la ficha
entera sin que el enlace a la web se vaya de la pantalla.

## Los diagramas

Van **con cajas y no con una imagen**. Es la única decisión discutible del
apartado, así que aquí queda el porqué.

Lo natural sería Mermaid, que es la herramienta estándar para esto y la que se
usa en el propio GitHub. Se descartó por dos razones: son unos cuantos cientos
de kilobytes de JavaScript en una página que no tiene ni una línea, y su
resultado son cajas de biblioteca que no se parecen al resto del sitio. Y sobre
todo, un diagrama de ancho fijo obliga a elegir entre leerlo en el escritorio o
leerlo en el móvil: al encogerlo, la letra se va a seis píxeles.

Con cajas de CSS cada fila se recoloca sola, el texto se lee siempre a su
tamaño real y los colores son los tokens de la página, así que el diagrama
cambia de tema con ella. La estructura es esta:

```html
<div class="diagrama">
  <div class="d-fila">
    <div class="d-nodo">
      <span class="dato">Origen</span>          <!-- el papel que hace -->
      <strong>La CNMV</strong>                   <!-- qué es -->
      <span class="d-nodo__nota">...</span>      <!-- qué pasa aquí -->
      <span class="d-nodo__tec">Go</span>        <!-- con qué, opcional -->
    </div>
  </div>
  <div class="d-paso" aria-hidden="true"><i></i></div>   <!-- el hilo -->
</div>
```

Una `d-fila` con dos o tres nodos son pasos que ocurren a la vez; con tres se
le pone además `d-fila--tres`, que baja el ancho mínimo para que quepan en una
línea en vez de partirse y parecer dos momentos distintos. El `d-paso` es el
hilo entre filas: lo único que se mueve en todo el diagrama, para que se vea
hacia dónde va el dato. Hay tres variantes de nodo: `--fuerte` para el paso
donde de verdad pasa algo, `--final` para la salida y `--futuro`, en trazo
discontinuo, para lo que todavía no está hecho. El RAG sobre literatura de
ajedrez de Chess Coach está dibujado así a propósito: aparece porque su propio
repositorio lo da como el siguiente paso, no porque ya funcione. Una caja en
trazo continuo es código que existe hoy.

Al abrir la ficha el diagrama se monta por pasos, en el mismo orden en el que
se lee. Con `prefers-reduced-motion` no se monta ni fluye nada.

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

## Los dos idiomas

La página existe en español en `/` y en inglés en `/en/`. **Son dos ficheros
HTML completos, no una plantilla con traducciones.** Es el precio de no tener
compilación: un cambio de texto hay que hacerlo en los dos sitios, y las fichas
de proyecto son lo que más pesa de esa cuenta: están enteras en los dos.

Se eligió así a propósito. La alternativa era detectar el idioma y cambiar los
textos en el navegador, y eso son dependencias, JavaScript y una página que
parpadea al cargar. Dos ficheros de trece kilobytes no necesitan nada de eso.

Las dos comparten `assets/style.css`. El inglés lo enlaza como `/assets/`, con
barra inicial, porque cuelga de un subdirectorio.

Cada página declara sus alternativas con `hreflang`, para que un buscador
sepa que son la misma página en dos lenguas y no contenido duplicado. El
`x-default` apunta al español.

El cambio de idioma es el interruptor `ES`/`EN` del final del menú, con el
idioma de la página marcado.

**La raíz elige idioma sola**, en Caddy y sin JavaScript. Quien llega a `/` con
un navegador que no pide español se va a `/en/` con un 302. Dos detalles que
no son obvios:

- Se exige que la cabecera `Accept-Language` **exista**. Los rastreadores de
  los buscadores no la mandan, y a esos les interesa ver la página y no un
  desvío.
- `/es/` sirve el español **siempre**, saltándose el desvío, y es lo que enlaza
  el botón ES. Sin esa puerta de atrás, un inglés que pulsara ES volvería a `/`
  y el desvío lo devolvería a `/en/`: elegir idioma a mano sería imposible.

La raíz manda `Vary: Accept-Language`, o cualquier caché intermedia le serviría
a un inglés la respuesta que guardó para un español.

El emparejamiento es por texto, no por los pesos `q` de la cabecera: Caddy no
los sabe leer. En la práctica significa que alguien con el inglés de primero y
el español de tercero recibe español. Para eso está el interruptor.

## Reglas de escritura

**Nunca se usa el guion largo** (em dash) **ni el medio** (en dash). Donde
harían de inciso, la frase se parte en dos o se resuelve con comas.

El tono es de primera persona y a ras de suelo. Nada de lemas ni de manifiesto.

## Dónde está servida

En Railway, proyecto `jrio-dev`, servicio `web`. Se redespliega sola con cada
push a `main`, que es la rama que sirve.

El `Dockerfile` existe para eso: Railway necesita un proceso escuchando en un
puerto y ahí va Caddy en modo `file-server`. Para desarrollar no hace falta,
se sigue abriendo `index.html` en el navegador.

## Dominio

`jrio.dev`, registrado en Porkbun. Los dos nombres están dados de alta en el
servicio `web` de Railway y cada uno tiene su destino, que no es el mismo:

| Tipo | Host | Valor |
|---|---|---|
| ALIAS | (vacío, la raíz) | `m9ge4ka4.up.railway.app` |
| CNAME | `www` | `2cgc4wzw.up.railway.app` |

En la raíz va **ALIAS y no CNAME**: el DNS no permite un CNAME en el vértice
de la zona. Porkbun resuelve el ALIAS por su cuenta y devuelve la dirección,
así que funciona sin tener que servir la página desde `www`.

Railway emite el certificado solo, en cuanto ve los registros. El `.dev` está
en la lista de precarga HSTS: sólo responde por HTTPS, nunca en `http://`, así
que hasta que el certificado no está emitido el dominio no carga. Es normal y
son minutos.

GitHub Pages sigue activo y sirve la misma rama en `jrio95.github.io`. No
estorba: no hay fichero `CNAME` en el repositorio, que es lo que haría que
Pages reclamase el dominio para sí.
