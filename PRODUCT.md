# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El visitante principal es **alguien que busca el nombre de José**: le han hablado
de él, se lo han pasado, o quiere saber quién es antes de un correo o una
conversación. Llega por búsqueda directa, por LinkedIn o por GitHub, no
navegando. Es la tarjeta de visita de José en internet.

Un segundo público, confirmado pero no prioritario, son otros programadores que
llegan desde uno de los proyectos y quieren ver cómo está hecho.

No es una página de captación. No hay embudo, no hay conversión que perseguir.

## Product Purpose

Que quien busque a José encuentre algo suyo y no un perfil de terceros.

El éxito son dos cosas a la vez, confirmadas por él:

1. Que el visitante **entre en uno de los proyectos y lo pruebe**. La página
   funciona como índice de cosas que están vivas y se pueden usar.
2. Que se lleve **una idea de cómo trabaja y qué le interesa**, sin tener que
   hacer nada más.

El éxito principal **no** es recibir un correo, pero José pidió después una
sección de contacto explícita, así que estar localizable cuenta como objetivo
secundario. Se resuelve como una tarjeta más al final, no como una llamada a
la acción que compita con los proyectos.

## Positioning

Los proyectos no son ejercicios ni demos: son herramientas que José necesitaba
y no encontraba hechas, o que estaban hechas de una forma de la que no se
fiaba. `bme-fundamentals` existe porque la fuente de datos que usaba para su
cartera devolvía ceros donde no había dato, y se estaba comiendo errores sin
enterarse.

Eso es lo que un portafolio vecino no puede copiar honestamente: cada proyecto
tiene un origen concreto y verificable, y está publicado y funcionando.

## Operating Context

Visitas cortas y casi siempre únicas. El visitante no vuelve: lee una vez,
decide si le interesa y se va o pincha un proyecto.

Se lee tanto en escritorio como en móvil. Llega con el nombre ya en la cabeza,
así que no hay que presentarse desde cero, hay que dar sustancia.

Los tres proyectos enlazan a la **aplicación en vivo**, no al repositorio: los
repos son privados y un enlace a un repo privado es un 404 para cualquiera que
no sea su dueño.

## Capabilities and Constraints

- Sitio estático: `index.html`, `en/index.html`, `404.html` y una hoja
  `assets/style.css`.
- **Bilingüe, español e inglés**, con una página completa por idioma en vez de
  traducciones en el navegador. Un cambio de texto se hace dos veces. Es el
  precio de no tener compilación y está asumido.
- **Cero JavaScript.** Es una restricción asumida del proyecto, no una pendiente.
  Todo lo que se mueve o cambia de tema está resuelto en CSS.
- Sin compilar, sin dependencias y sin gestor de paquetes. Se abre el fichero en
  el navegador y ya se ve.
- Lo único externo es una tipografía de Google Fonts.
- Tema oscuro por defecto, claro por `prefers-color-scheme`. Sin interruptor,
  porque un interruptor obligaría a recordar la elección y eso pide JavaScript.
- Servido en Railway (proyecto `jrio-dev`, servicio `web`) desde la rama `main`,
  con Caddy en modo `file-server`.
- Dominio `jrio.dev`, en la lista de precarga HSTS: sólo responde por HTTPS.
- Resuelto: la fila `estado` de la portada decía "Abierto a proyectos" sin
  corresponder a una disponibilidad real. José la describió como una fórmula y
  se ha quitado. La ficha se queda en cinco filas, todas comprobables. Si algún
  día hay una disponibilidad de verdad, vuelve; mientras tanto, no.

## Brand Commitments

- Nombre y marca: `jrio.dev`. El logotipo es la inicial, no hay archivo de marca.
- La página está **en español**. Sin excepciones.
- Voz en primera persona y a ras de suelo. Nada de lemas, manifiestos ni
  promesas. Si una frase suena a eslogan, está mal.
- **Humildad, dicho por él: "no me gusta pecar de flipao".** La página tiene
  que decir tres cosas y ninguna más: que es programador, que le gustan la
  bolsa y la inteligencia artificial, que tiene algunos proyectos pequeños y
  que es de Salamanca. Se llama a sí mismo **software engineer**, en inglés y
  sin traducir. Y la página **no ofrece** los proyectos: los enseña. Nada de
  "los dejo por aquí por si a alguien le sirven", que suena a ofrecimiento. Nada de "construyo herramientas para entender los
  datos" ni de propuestas de valor. Los proyectos son "proyectillos" y no
  "un ecosistema". El texto se mide con esa vara antes de publicarse.
- **La portada no es una presentación, es una marca.** Nada de "Soy José" ni
  "Me llamo". El titular declara qué es y qué le interesa, en lista y sin
  conjunciones: "Software engineer. Bolsa, IA, proyectos propios."
- **Poco texto.** Si una frase se puede decir en la mitad de palabras, se dice
  en la mitad. Las secciones no llevan rótulo a la derecha: eran adorno con
  forma de dato.
- **Sin etiquetas de especialidad.** Nada de "backend y datos" ni años de
  experiencia como credencial. Argumento de José: con la IA, las
  especializaciones dejan de tener sentido. La ficha de la portada lleva
  nombre y enlaces, que son comprobables, y ninguna afirmación sobre lo que
  es o lo que sabe.
- **Nunca se usa el guion largo ni el medio.** Donde harían de inciso, la frase
  se parte en dos o se resuelve con comas.
- El horizonte de Salamanca es el perfil real de la ciudad, dibujado en SVG.
  Es identidad, no ornamento, y no se sustituye por una ilustración genérica.
- **La página no puede parecer generada.** Es un requisito de José, dicho
  mirando la versión anterior: "se ve y sabes que está hecho con Claude Code".
  La lista concreta de lo que queda prohibido está en DESIGN.md, en "Lo que
  este sistema rechaza". Cualquier cambio futuro se comprueba contra esa lista
  antes de publicarse.

## Evidence on Hand

Real y comprobable:

- **Divr** (`divr.es`): cartera de inversión con acciones, movimientos,
  dividendos, opciones PUT y cálculo del IRPF. Web y aplicación móvil.
- **bme-fundamentals** (`api-production-2a50.up.railway.app`): estados
  financieros de las empresas del BME sacados de lo que depositan en la CNMV.
  En desarrollo, le falta la primera carga real.
- **Chess Coach** (`chess-coach-production-5b27.up.railway.app`): análisis de
  partidas de ajedrez con Stockfish en el servidor.
- Nueve años escribiendo código.

Lo que **no** hay y no se puede inventar: testimonios, clientes, cifras de uso,
premios, empresas donde ha trabajado, capturas de los proyectos. Los tres
repositorios son privados, así que tampoco hay código público que enseñar.

## Product Principles

1. **Enseñar cosas vivas, no describirlas.** Cada proyecto enlaza a algo que
   funciona y se puede abrir ahora mismo.
2. **El origen es el argumento.** Un proyecto se explica contando el problema
   concreto que lo hizo nacer, no listando funcionalidades.
3. **No pedir nada.** No hay llamada a la acción que perseguir. El visitante se
   va cuando quiere y eso es un final correcto.
4. **Lo que no es cierto, no se escribe.** Antes que rellenar un hueco con una
   fórmula, el hueco se quita.
5. **La restricción es parte del oficio.** Cero JavaScript, una hoja de estilos
   y ningún paso de compilación. Si algo no se puede hacer así, se replantea.

## Accessibility & Inclusion

Sin estándar formal acordado. Lo que el proyecto ya sostiene y no se puede
perder: enlace de saltar al contenido, `prefers-reduced-motion` respetado en
todo lo que se mueve, contraste comprobado en los dos temas, y foco visible.
