---
name: jrio.dev
description: La página personal de José Martín Río. Salamanca de noche, piedra y ocre.
colors:
  papel: "#15110d"
  tinta: "#efe7d9"
  tinta-media: "#b9ac99"
  tinta-suave: "#968875"
  linea: "#2e2720"
  linea-fuerte: "#473d32"
  ocre: "#d99a3e"
  ocre-vivo: "#ecb45f"
  papel-claro: "#f3ede2"
  tinta-claro: "#1a1512"
  tinta-media-claro: "#4d4238"
  tinta-suave-claro: "#6b5f51"
  linea-claro: "#ddd3c4"
  linea-fuerte-claro: "#c6bbaa"
  ocre-claro: "#8f5410"
typography:
  display:
    fontFamily: "Source Serif 4, Bitstream Charter, Charter, Georgia, serif"
    fontSize: "clamp(34px, 5.2vw, 56px)"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
  label:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  ninguno: "0"
spacing:
  fila: "22px"
  seccion: "62px"
components:
  enlace:
    textColor: "{colors.ocre}"
  entrada:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.ninguno}"
    padding: "22px 0"
---

# Design System: jrio.dev

## Overview

**Creative North Star: "Salamanca a las tres"**

La ciudad de noche. Piedra de Villamayor, que de día es dorada y de noche
parda, y una ventana encendida. De ahí salen las dos únicas decisiones de
color del sistema: el fondo es un pardo muy oscuro y cálido, no un gris
azulado, y el acento es el ocre de la piedra y de los vítores pintados en los
muros de la universidad.

El tono es de página impresa, no de panel de producto. Una sola familia con
gracias para todo, jerarquía por tamaño y espacio, y una línea de un píxel
donde hace falta separar. El resultado tiene que parecer compuesto por alguien
y no generado.

### Lo que este sistema rechaza, y por qué

Esta es la parte que más manda. El diseño anterior era competente y aun así
José lo describió así: "se ve y sabes que está hecho con Claude Code". Tenía
razón, y el motivo no era un detalle suelto sino la combinación entera, que es
el aspecto por defecto de las páginas hechas con un asistente:

- fondo casi negro azulado con **un azul de interfaz** como único acento;
- **titular de palo grueso** con el espaciado muy apretado;
- **tarjetas de esquinas redondeadas** con borde de un píxel y sombra ancha;
- una **tarjeta imitando un terminal** para parecer técnico;
- **monoespaciada de atrezo** en rótulos que no son código;
- **resplandores de color** y degradados recortados sobre el texto.

Ninguna de esas cosas existe aquí, y ninguna vuelve. Si una decisión futura
lleva a cualquiera de ellas, la decisión está mal.

Se acepta a cambio una marca que un detector señala: el papel crema del tema
claro. Es deliberado, sale del norte del sistema y se queda.

**Key Characteristics:**

- Pardo oscuro por defecto, papel crema por `prefers-color-scheme`.
- Una sola tipografía, con gracias, para titulares, texto y rótulos.
- Un solo acento, el ocre, y casi siempre en cursiva o en un enlace.
- Radio cero. Sombra cero. Sin tarjetas: filas separadas por una línea.
- Cero JavaScript.

## Colors

### Primary

- **Ocre de Villamayor** (`#d99a3e`): el único color. Aparece en la cursiva del
  titular, en los enlaces y en el subrayado. En claro baja a `#8f5410` para
  aguantar el contraste sobre papel.

### Neutral

- **Noche parda** (`#15110d`): el fondo. Pardo, no gris y desde luego no azul.
- **Crema** (`#efe7d9`): el texto. 15,3:1 sobre el fondo.
- **Crema media** (`#b9ac99`): prosa y descripciones. 8,4:1.
- **Crema suave** (`#968875`): fechas, rótulos y estados. 5,4:1.
- **Línea** (`#2e2720`) y **línea fuerte** (`#473d32`): lo único que separa.

En claro los papeles se invierten: `#f3ede2` de fondo y `#1a1512` de tinta.
Los cuatro niveles de texto pasan AA en los dos temas; están elegidos por el
contraste y no por el gusto.

### Named Rules

**La regla del color único.** Hay un acento y es el ocre. No se añade un
segundo color para distinguir estados, secciones ni nada. Lo que necesite
distinguirse, se distingue con tamaño, espacio o una línea.

**La regla del pardo.** El fondo lleva rojo y amarillo dentro. Un negro neutro
o un azulado devuelve la página al sitio del que la hemos sacado.

## Typography

**Una sola familia:** Source Serif 4 (con Charter, Georgia y la serif del
sistema detrás).

**Character:** una serif de texto, de las de leer, no una display de exhibición.
El titular va en regular y no en negrita: el tamaño ya hace el trabajo, y una
serif a 56px en regular tiene aire de página impresa mientras que en negrita
tendría aire de cartel. La cursiva es la que carga el énfasis.

No hay monoespaciada. La había, marcando datos, y sonaba a disfraz técnico:
fechas y dominios se leen igual de bien en la serif y la página deja de pedir
que la tomen por una terminal.

### Hierarchy

- **Display** (400, `clamp(34px, 5.2vw, 56px)`, 1.1): sólo el titular. Uno por
  página. El remate va en cursiva y en ocre.
- **Título** (700, 22px): nombre de proyecto.
- **Texto** (400, 17px, 1.6): prosa. Medida de 46 a 62ch según el bloque.
- **Rótulo** (400, 14px, versalitas con `font-variant-caps: all-small-caps` y
  0.14em de espaciado): títulos de sección, claves y estados.

### Named Rules

**La regla de las versalitas.** Lo que en otro sistema iría en mayúsculas
pequeñas y monoespaciadas, aquí va en versalitas de la propia serif. Es la
diferencia entre un rótulo compuesto y una etiqueta de interfaz.

**La regla del titular ligero.** El display nunca va en negrita.

## Layout

Una sola columna de 820px como máximo, centrada, con 28px de aire a los lados
que bajan a 20px por debajo de 720px. No hay retícula de tarjetas ni segunda
columna de apoyo: la página se lee de arriba abajo.

Dentro de las secciones sí hay dos columnas, pero son de tabla: 210px para la
clave (nombre del proyecto, rótulo) y el resto para el contenido. Por debajo de
720px esa tabla cae a una columna.

El ritmo vertical lo marca la sección, a 62px. Cada sección abre con un rótulo
en versalitas y una línea, y cada fila se separa de la siguiente con otra
línea de un píxel.

La cabecera **no es fija**. Una página de este largo no necesita arrastrar un
menú detrás, y una barra flotante con desenfoque es otro de los tics que
sobran.

## Elevation & Depth

**No hay.** Ni sombras, ni capas, ni superficies elevadas, ni filos de luz.

La profundidad de una página impresa es la que da el espacio en blanco. Lo
único que separa dos bloques es una línea de un píxel, y lo único que separa un
bloque del fondo es el aire a su alrededor.

## Shapes

Radio cero en todo. No hay una sola esquina redondeada en la hoja.

No hay contenedores: no hay tarjetas, ni paneles, ni pastillas, ni recuadros.
Lo que en otro sistema sería una tarjeta, aquí es una fila con una línea
debajo. La única geometría libre de la página es el trazo del horizonte.

## Components

### Enlaces

- **Estilo:** ocre, subrayado a un píxel con 3 o 4px de separación.
- **Hover:** el ocre sube a `#ecb45f`.
- Los enlaces de navegación van sin subrayar hasta que se pasa por encima.

### Fila de proyecto

Dos columnas. A la izquierda el nombre en 22px negrita, debajo la fecha y el
estado en versalitas, y debajo el dominio en ocre subrayado. A la derecha la
descripción y, en cursiva, las tecnologías.

- **Hover:** el fondo se tiñe de ocre al 7% y el nombre pasa a ocre. Sin
  desplazamiento, sin sombra, sin borde de color.

### Fila de datos

El mismo reparto de 210px que los proyectos, para "Ahora mismo" y para las
herramientas. Clave en versalitas a la izquierda, valor a la derecha.

### El horizonte

El perfil real de Salamanca en SVG, trazo sin relleno. En este sistema ya no es
un remate suelto: es el motivo del que sale la paleta entera, y cierra la
página justo encima del pie.

## Do's and Don'ts

### Do:

- **Do** usar una sola tipografía con gracias para todo.
- **Do** separar con espacio y con una línea de un píxel.
- **Do** poner el énfasis en la cursiva antes que en el color.
- **Do** dejar el ocre para los enlaces y para un solo trozo del titular.
- **Do** mantener el contraste en o por encima de `--tinta-suave`.

### Don't:

- **Don't** meter azul. En ningún sitio, para nada.
- **Don't** redondear una esquina.
- **Don't** poner una sombra, un resplandor o un degradado sobre texto.
- **Don't** volver a las tarjetas ni a la tarjeta de terminal.
- **Don't** usar monoespaciada para algo que no sea código de verdad.
- **Don't** poner el titular en negrita.
- **Don't** escribir guiones largos ni medios en ninguna copia.
- **Don't** introducir JavaScript.
