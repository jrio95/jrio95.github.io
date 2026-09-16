---
name: jrio.dev
description: La página personal de José Martín Río. Oscura, de herramienta, con Salamanca de fondo.
colors:
  papel: "#090a0e"
  lienzo: "#101219"
  lienzo-alto: "#161923"
  hueco: "#1a1e29"
  borde: "#242936"
  borde-fuerte: "#333a4b"
  tinta: "#eef1f7"
  tinta-media: "#a4adbf"
  tinta-suave: "#7d8698"
  azul: "#5b8cff"
  azul-hover: "#7ba3ff"
  azul-borde: "#2f4a8f"
  violeta: "#a78bfa"
  sobre-azul: "#07080c"
  papel-claro: "#f6f7fa"
  lienzo-claro: "#ffffff"
  hueco-claro: "#eef1f6"
  borde-claro: "#e1e5ed"
  borde-fuerte-claro: "#cdd3df"
  tinta-claro: "#12141a"
  tinta-media-claro: "#525a6b"
  tinta-suave-claro: "#666e7e"
  azul-claro: "#2c5fef"
  azul-hover-claro: "#1e4bcf"
  azul-borde-claro: "#b9ccff"
  violeta-claro: "#7c53f0"
  sobre-azul-claro: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 62px)"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.024em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.06em"
rounded:
  pastilla: "999px"
  chico: "9px"
  md: "16px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "26px"
  xl: "84px"
components:
  boton-primario:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.sobre-azul}"
    rounded: "{rounded.chico}"
    padding: "12px 22px"
    height: "46px"
  boton-primario-hover:
    backgroundColor: "{colors.azul-hover}"
    textColor: "{colors.sobre-azul}"
  boton-secundario:
    backgroundColor: "{colors.lienzo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.chico}"
    padding: "12px 22px"
  tarjeta:
    backgroundColor: "{colors.lienzo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "26px"
  tarjeta-hover:
    backgroundColor: "{colors.lienzo}"
    textColor: "{colors.tinta}"
  pastilla-stack:
    backgroundColor: "{colors.hueco}"
    textColor: "{colors.tinta-media}"
    rounded: "{rounded.pastilla}"
    padding: "3px 11px"
    typography: "{typography.label}"
---

# Design System: jrio.dev

## Overview

**Creative North Star: "Salamanca a las tres"**

La ciudad de noche con una ventana encendida. Todo lo demás está a oscuras y
en silencio, y en ese silencio se ve trabajar a alguien. Ese es el sistema: un
fondo casi negro que no compite, superficies que se encienden sólo cuando
alguien las toca, y el perfil de la ciudad como motivo y no como adorno.

La metáfora manda sobre dos cosas concretas. La primera: la oscuridad es el
estado por defecto y no un tema alternativo, así que el tema claro tiene que
ser la misma escena con la luz puesta, no una hoja distinta. La segunda: el
horizonte de Salamanca es el motivo del sistema, no una firma al pie. Hoy está
al 40% de opacidad y a 2000px del único texto que nombra la ciudad, que es
exactamente el error que este norte corrige.

El tono es de herramienta, no de póster. Se lee como el panel de algo que está
funcionando: datos en monoespaciada, prosa en sans, un solo azul que señala.
Rechazo confirmado: la plantilla de portafolio de programador, con su banda de
estadísticas, su muro de pastillas de tecnología y su losa de contacto al
final.

**Key Characteristics:**

- Oscuro por defecto, claro por `prefers-color-scheme`, mismos tokens.
- Monoespaciada para todo lo que es dato; sans para todo lo que es prosa.
- Un solo color de acento. El violeta existe sólo dentro de degradados.
- Plano en reposo. La profundidad es una respuesta, no un fondo.
- Cero JavaScript. Toda la vida de la página está resuelta en CSS.

## Colors

Una escala de grises azulados que va de casi negro a casi blanco, y un azul de
interfaz que es el único color con voz.

### Primary

- **Azul de ventana encendida** (`#5b8cff`): el único acento. Botón principal,
  enlaces, punto de estado de los proyectos en producción, número de sección,
  borde de la tarjeta al pasar por encima. En claro baja a `#2c5fef` para
  aguantar el contraste sobre blanco.

### Secondary

- **Violeta de madrugada** (`#a78bfa`): no pinta ningún elemento entero. Existe
  para el degradado del logotipo y para el remate del titular. Si aparece
  sólido en algún sitio, es un error.

### Neutral

- **Noche** (`#090a0e`): el fondo de la página. Casi negro, con azul dentro.
- **Lienzo** (`#101219`): las tarjetas. Un escalón por encima de la noche.
- **Hueco** (`#1a1e29`): lo que se hunde. Barra de la ficha, pastillas, fondo
  de los botones de flecha en reposo.
- **Borde** (`#242936`) y **Borde fuerte** (`#333a4b`): la separación real
  entre superficies, y el recurso principal ahora que la sombra es de estado.
- **Tinta** (`#eef1f7`): titulares y valores.
- **Tinta media** (`#a4adbf`): prosa, descripciones, todo lo que se lee seguido.
- **Tinta suave** (`#7d8698`): rótulos, fechas, dominios. Es el nivel más bajo
  y su valor está elegido por el contraste, no por el gusto: 5,11:1 sobre
  lienzo en oscuro y 5,13:1 en claro. Pasa AA sobre las tres superficies.

### Named Rules

**La regla de la voz única.** El azul aparece en menos del 10% de cualquier
pantalla. Su rareza es el punto. Si dos elementos azules compiten en el mismo
viewport, sobra uno.

**La regla del violeta prestado.** El violeta nunca se usa solo. Sólo existe
como segundo punto de un degradado, y sólo en piezas de identidad.

**La regla del suelo de contraste.** Ningún texto por debajo de `--tinta-suave`,
en ninguno de los dos temas. El token está calculado contra las tres
superficies del sistema y no se toca sin volver a calcularlo.

## Typography

**Display / Body Font:** Archivo (con `system-ui`, `-apple-system`, `Segoe UI`)
**Label / Mono Font:** JetBrains Mono (con `ui-monospace`, `SFMono-Regular`)

**Character:** Archivo es una grotesca de señalética, algo estrecha y con más
aristas que las neutras de interfaz. A 62px y con el espaciado apretado del
titular se lee como un bloque macizo, que es el efecto que busca la portada, y
en cuerpo pequeño sigue siendo una tipografía de trabajo. JetBrains Mono no
decora: marca lo que es dato. Esa separación es la gramática del sitio y el
lector la aprende en la primera pantalla.

Se carga en un solo eje variable de 400 a 700, así que toda la escala de pesos
cabe en una petición.

Sustituyó a Inter, que era la tipografía más usada de la categoría y no aporta
carácter: el sistema no puede sonar a sí mismo con la voz por defecto de todos
los demás.

### Hierarchy

- **Display** (700, `clamp(40px, 5.4vw, 62px)`, 1.05, `-0.03em`): sólo el
  titular de la portada y el del 404. Uno por página. El remate de la frase va
  en azul plano, nunca en degradado.
- **Headline** (700, 26px, 1.15, `-0.028em`): cabeceras de sección.
- **Title** (700, 21px, `-0.024em`): nombre de proyecto. En la tarjeta
  destacada sube a 30px.
- **Body** (400, 16px, 1.65): prosa. La entradilla sube a 18px y se corta a
  52ch; las descripciones de proyecto bajan a 15,5px y se cortan a 62ch.
- **Label** (500, 12px, `0.06em`, mayúsculas, mono): rótulos de campo, fechas,
  estados, pie. El antetítulo sube a 12,5px y `0.1em`.

### Named Rules

**La regla mono.** Monoespaciada es igual a dato. Fechas, dominios, claves de
campo, lenguajes, estados, números de sección. Si un texto es una frase, va en
sans. Si es un valor, va en mono. No hay tercera opción.

**La regla de las mayúsculas.** Las mayúsculas sólo existen en el rol de
etiqueta, a 11,5-12,5px y con espaciado positivo. Nunca en prosa ni en un
titular.

## Layout

Una columna centrada de 1120px como máximo, con 32px de aire a los lados que
bajan a 22px por debajo de 900px y a 18px por debajo de 620px. Todo el sitio
usa el mismo contenedor: no hay secciones a sangre completa.

El ritmo vertical lo marca la sección: 84px de separación entre una y otra en
escritorio, 60px por debajo de 900px. Cada sección abre con una cabecera de
título más rótulo separada por una línea de un píxel.

Las retículas son dos. Los proyectos van en dos columnas donde el primero
ocupa la fila entera, para que la jerarquía se vea antes de leer. Las tarjetas
de "En qué ando" usan `auto-fit` con mínimo de 250px, así que se reparten
solas. Por debajo de 900px todo cae a una columna.

La barra es fija arriba, de 66px, con desenfoque de fondo. `scroll-padding-top`
de 88px evita que tape el título al saltar a un ancla.

## Elevation & Depth

**Plano en reposo. La profundidad es una respuesta, no un fondo.**

Las superficies se separan por tono y por borde de un píxel, que es lo que
hace el trabajo estructural: noche, lienzo, hueco, tres escalones claros. La
sombra no participa en ese reparto.

La sombra aparece sólo como acuse de interacción: al pasar por encima de una
tarjeta o de un botón, al enfocar. Su papel es ambiental y temporal, nunca
estructural. La hoja lo cumple: ninguna regla declara `box-shadow` fuera de un
`:hover`.

El filo de luz de un píxel en el borde superior de cada tarjeta se queda: eso
no es sombra, es el canto de la superficie, y es lo que hace que una tarjeta
parezca material en vez de un rectángulo pintado.

### Shadow Vocabulary

- **Respuesta** (`0 1px 2px rgba(0,0,0,.5), 0 8px 24px rgba(0,0,0,.32)`): al
  pasar por encima de un botón o de una tarjeta menor.
- **Respuesta alta** (`0 2px 6px rgba(0,0,0,.5), 0 20px 48px rgba(0,0,0,.5)`):
  al pasar por encima de una tarjeta de proyecto, que es el elemento con el
  que de verdad se interactúa.

### Named Rules

**La regla del reposo plano.** Ninguna superficie lleva sombra hasta que el
puntero o el foco la tocan. Si una tarjeta necesita sombra para distinguirse
en reposo, el problema es el tono del fondo, no la falta de sombra.

## Shapes

Tres radios y ninguno más: 16px para las tarjetas y superficies grandes, 9px
para botones, campos y piezas pequeñas, y 999px para las pastillas de
tecnología. El salto entre 16 y 9 es deliberado: el radio dice el tamaño de la
pieza antes de que la leas.

El borde de un píxel es la unidad estructural del sistema y está en todo:
tarjetas, botones, pastillas, separadores de sección, cabecera. No hay
superficies sin contorno.

Nada se recorta con formas. No hay diagonales, ni curvas decorativas, ni
máscaras. La única geometría libre del sitio es el trazo del horizonte, y por
eso funciona.

## Components

### Buttons

- **Forma:** radio de 9px, altura mínima de 46px, relleno de 12px por 22px.
- **Primario:** azul sólido con texto en el color del fondo, no en blanco. El
  texto oscuro sobre el azul es lo que sostiene el contraste.
- **Secundario:** fondo de lienzo con borde fuerte y texto en tinta.
- **Hover:** sube 2px, aparece la sombra de respuesta, el azul aclara a
  `--azul-hover`. La flecha interior, si la hay, se desplaza en su dirección.
- **Móvil:** a ancho completo por debajo de 620px, apilados.

### Chips

- **Estilo:** fondo de hueco, borde de un píxel, texto en tinta media, mono a
  12px. Radio de pastilla en las tarjetas de proyecto.
- **Estado:** no tienen. Son etiquetas, no controles. **Nunca llevan hover**:
  un cambio de color al pasar por encima promete un clic que no existe.

### Cards / Containers

- **Esquina:** 16px.
- **Fondo:** lienzo, con un degradado de blanco al 3,5% que muere al 42% de
  altura. Es lo que da la sensación de luz cenital.
- **Filo:** una línea de un píxel arriba, a `--filo`, degradada a transparente
  por los extremos para que no parezca un borde pegado.
- **Borde:** un píxel a `--borde`.
- **Sombra:** ninguna en reposo. Ver Elevation.
- **Relleno:** 26px, 34px en la tarjeta destacada, 20-22px en las menores.
- **Hover:** sube 4px, borde a `--azul-borde`, sombra de respuesta alta, y un
  resplandor radial azul que se enciende desde la esquina del enlace.

### Navigation

- **Estilo:** barra fija de 66px con `backdrop-filter` de 14px y borde inferior
  de un píxel. Enlaces en tinta media a 14,5px, que pasan a tinta con fondo de
  hueco al pasar por encima.
- **Móvil:** por debajo de 620px la barra se queda con lo imprescindible. Con
  cuatro enlaces el menú salta a dos líneas y descuadra la cabecera.

### La ficha

El componente firma del sitio. Una tabla de clave y valor con barra de título,
que presenta los datos de una persona como los presentaría un programa.

Lleva sólo **nombre y enlaces**: email, GitHub, LinkedIn. Nada de rol, años de
experiencia ni especialidad. Es deliberado y es de José: con la IA borrando
los límites entre especializaciones, una etiqueta como "backend y datos"
envejece mal y además no es comprobable. Un enlace sí lo es.

- Barra superior en hueco, con la ruta del fichero en mono a 12px.
- Filas de `116px` de clave más valor libre, separadas por un píxel.
- Claves en mono a 12,5px y tinta suave; valores en sans a 14,5px y tinta.
- Por debajo de 620px las filas caen a una columna.

Es la pieza que hace que la portada informe en vez de proclamar, y por eso no
se toca sin motivo. El cromo de ventana de macOS ya se quitó: los tres puntos
eran de otra metáfora.

### El horizonte

El perfil real de Salamanca en SVG, trazo sin relleno, `non-scaling-stroke`.
Según el norte de este sistema es el motivo, no la firma. Hoy está al 40% de
opacidad, contenido a 520px y sin relación con ningún texto, lo que lo
convierte en ornamento. Es deuda declarada.

## Do's and Don'ts

### Do:

- **Do** usar monoespaciada para todo lo que sea un dato y sans para todo lo
  que sea una frase. Es la gramática del sitio.
- **Do** separar superficies con tono y borde de un píxel, y dejar la sombra
  para el hover y el foco.
- **Do** dar a cada enlace de proyecto su estado y su dominio antes del
  párrafo. El visitante decide con eso.
- **Do** respetar `prefers-reduced-motion` en todo lo que se mueva, incluido
  el desplazamiento suave.
- **Do** mantener el contraste en o por encima de `--tinta-suave`.

### Don't:

- **Don't** añadir un color nuevo. Hay un acento y es el azul.
- **Don't** usar el violeta sólido en ningún elemento.
- **Don't** poner sombra a una superficie en reposo.
- **Don't** dar hover a algo que no sea un enlace o un control.
- **Don't** meter una banda de estadísticas, un muro de pastillas de
  tecnología o una losa de contacto al final. Son las tres marcas de la
  plantilla de portafolio que este sistema rechaza por escrito.
- **Don't** usar degradados recortados sobre el texto. El énfasis viene del
  peso, del tamaño y del color plano.
- **Don't** escribir guiones largos ni medios en ninguna copia.
- **Don't** introducir JavaScript. Si algo no se puede hacer en CSS, se
  replantea la pieza.
