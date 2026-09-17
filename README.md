# jrio.dev

Página personal de José. Se sirve con GitHub Pages desde este repositorio.

## Cómo está hecha

HTML, CSS y un archivo de JavaScript. **Sin compilar, sin dependencias y sin
gestor de paquetes**: se abre `index.html` en el navegador y ya se ve. Para
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

## Los dos idiomas

La página existe en español en `/` y en inglés en `/en/`. **Son dos ficheros
HTML completos, no una plantilla con traducciones.** Es el precio de no tener
compilación: un cambio de texto hay que hacerlo en los dos sitios.

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
