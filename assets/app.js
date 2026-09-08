/* Una sola cosa, y no es imprescindible: filtrar la lista de proyectos. El
 * fondo es CSS puro, así que se mueve aunque esto no llegue a cargar, y sin
 * JavaScript la página se lee entera igual. */
(function () {
  'use strict';

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
