/* Dos cosas y ninguna imprescindible: sembrar el cielo y filtrar la lista.
 * Sin JavaScript la página se lee entera igual, sólo que sin estrellas. */
(function () {
  'use strict';

  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Estrellas ----
   * Semilla fija en vez de Math.random: así el cielo es el mismo en cada
   * visita y no salta al repintar. */
  function sembrar(cielo, cuantas) {
    var semilla = 20260904;
    function azar() {
      semilla = (semilla * 1664525 + 1013904223) % 4294967296;
      return semilla / 4294967296;
    }

    var trozos = document.createDocumentFragment();
    for (var i = 0; i < cuantas; i++) {
      var x = azar() * 100;
      var y = azar() * 100;
      var t = azar();
      var tam = t < 0.74 ? 1 : (t < 0.94 ? 1.6 : 2.4);
      var opacidad = 0.16 + azar() * 0.46;
      var retardo = azar() * 6;
      var roja = azar() < 0.16;

      var estrella = document.createElement('span');
      estrella.className = 'estrella';
      estrella.style.left = x.toFixed(2) + '%';
      estrella.style.top = y.toFixed(2) + '%';
      estrella.style.width = tam + 'px';
      estrella.style.height = tam + 'px';
      estrella.style.opacity = opacidad.toFixed(2);
      estrella.style.setProperty('--o', opacidad.toFixed(2));
      estrella.style.animationDelay = retardo.toFixed(2) + 's';
      estrella.style.background = roja
        ? 'var(--marca)'
        : 'var(--texto)';
      trozos.appendChild(estrella);
    }
    cielo.appendChild(trozos);
  }

  var cielo = document.getElementById('cielo');
  if (cielo) {
    sembrar(cielo, quieto ? 60 : 130);
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
        var num = entrada.querySelector('.entrada__num');
        if (num) {
          num.textContent = visibles < 10 ? '0' + visibles : String(visibles);
        }
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
