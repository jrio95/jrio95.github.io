/* Dos cosas y ninguna imprescindible: sembrar las formas del fondo y filtrar
 * la lista. Sin JavaScript la página se lee entera igual, sólo que con el
 * fondo quieto. */
(function () {
  'use strict';

  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Formas del fondo ----
   * Semilla fija en vez de Math.random: así el fondo es el mismo en cada
   * visita y no cambia de sitio al repintar. */
  function sembrar(caja, cuantas) {
    var semilla = 20260908;
    function azar() {
      semilla = (semilla * 1664525 + 1013904223) % 4294967296;
      return semilla / 4294967296;
    }

    var colores = ['var(--melocoton)', 'var(--menta)', 'var(--lila)'];
    var formas = ['forma--circulo', 'forma--pastilla', 'forma--cuadrado'];

    var trozos = document.createDocumentFragment();
    for (var i = 0; i < cuantas; i++) {
      var x = azar() * 100;
      var y = azar() * 100;
      var lado = 40 + azar() * 130;
      var esPastilla = azar() < 0.3;
      var forma = formas[Math.floor(azar() * formas.length)];
      var color = colores[Math.floor(azar() * colores.length)];
      var duracion = 26 + azar() * 34;
      var retardo = -azar() * 40;

      var el = document.createElement('span');
      el.className = 'forma ' + forma;
      el.style.left = x.toFixed(2) + '%';
      el.style.top = y.toFixed(2) + '%';
      el.style.width = Math.round(esPastilla ? lado * 1.8 : lado) + 'px';
      el.style.height = Math.round(lado) + 'px';
      el.style.background = color;
      el.style.animationDuration = duracion.toFixed(1) + 's';
      // Retardo negativo: cada forma arranca en un punto distinto del ciclo,
      // así no se mueven todas a la vez al cargar.
      el.style.animationDelay = retardo.toFixed(1) + 's';
      trozos.appendChild(el);
    }
    caja.appendChild(trozos);
  }

  var caja = document.getElementById('formas');
  if (caja && !quieto) {
    sembrar(caja, 26);
  } else if (caja) {
    sembrar(caja, 14);
  }

  /* ---- Filtros ---- */
  var filtros = document.querySelectorAll('.filtro');
  var entradas = document.querySelectorAll('.entrada');
  var recuento = document.getElementById('recuento');
  var vacio = document.getElementById('vacio');

  function aplicar(tipo) {
    var visibles = 0;
    for (var i = 0; i < entradas.length; i++) {
      var entrada = entradas[i];
      var encaja = tipo === 'todo' || entrada.getAttribute('data-tipo') === tipo;
      entrada.hidden = !encaja;
      if (encaja) {
        visibles++;
      }
    }
    if (recuento) {
      recuento.textContent = visibles === 1 ? '1 entrada' : visibles + ' entradas';
    }
    if (vacio) {
      vacio.hidden = visibles > 0;
    }
  }

  for (var j = 0; j < filtros.length; j++) {
    filtros[j].addEventListener('click', function (evento) {
      var elegido = evento.currentTarget;
      for (var k = 0; k < filtros.length; k++) {
        filtros[k].setAttribute('aria-pressed', String(filtros[k] === elegido));
      }
      aplicar(elegido.getAttribute('data-filtro'));
    });
  }
})();
