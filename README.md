# jrio.dev

Página personal de José. Se sirve en Railway desde la rama `main`.

## Cómo está hecha

HTML y CSS. **Sin compilar, sin dependencias y sin gestor de paquetes**: se
abre `index.html` en el navegador y ya se ve. Para trabajar en ella basta con
editar el fichero y recargar.

```
index.html        La página entera, en español
en/index.html     La misma página, en inglés
404.html          Página de error
assets/style.css  Todo el diseño, tema claro y oscuro incluidos
```

**No hay JavaScript.** Ni una línea. Lo único que se descarga de fuera es una
tipografía de Google Fonts.

Aparte está `.claude/`, que no es la página: es la skill de
[Impeccable](https://github.com/pbakaus/impeccable) instalada en el proyecto,
para tener `/impeccable` también en las sesiones remotas, que no ven los
plugins instalados en el portátil. El `Dockerfile` no la copia, así que no
llega a Railway ni pesa en lo que se sirve.

## Cambiar cosas

**Los colores** están al principio de `assets/style.css`, en el bloque
`:root`, y repetidos dentro de `@media (prefers-color-scheme: light)` con los
mismos nombres.

```css
--papel: #15110d;   /* pardo de noche, no gris y no azul */
--tinta: #efe7d9;   /* crema */
--linea: #2e2720;   /* lo único que separa */

--ocre:  #d99a3e;   /* el único acento */
```

Hay **un solo color**. El ocre sale de la piedra de Villamayor y de los vítores
pintados en los muros de la universidad, y aparece sólo en los enlaces y en la
cursiva del titular. Todo lo demás se distingue por tamaño, por espacio o por
una línea de un píxel.

**Una sola tipografía**, Source Serif 4, para titulares, texto y rótulos. No
hay monoespaciada: la había marcando datos y sonaba a disfraz técnico.

**Una entrada nueva** en la lista de proyectos se copia de la que ya hay. El
estado va en versalitas dentro de la línea de la fecha.

Lo que este diseño rechaza está escrito con nombre y apellidos en `DESIGN.md`,
en la sección "Lo que este sistema rechaza": azul de interfaz, tarjetas
redondeadas, sombras, resplandores, tarjeta de terminal y monoespaciada de
atrezo. Es la combinación que hace que una página se vea hecha con un
asistente, y evitarla es el encargo.

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

El cambio de idioma es el botoncito `EN` o `ES` del final del menú. No hay
detección automática: si alguien elige un idioma, se respeta.

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
