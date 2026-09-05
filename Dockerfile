# Servir la página en Railway.
#
# GitHub Pages no necesita nada de esto: sirve los ficheros tal cual. Railway
# sí quiere un proceso que escuche en un puerto, así que aquí va el más
# pequeño que hace el trabajo. No cambia en nada cómo se desarrolla la página:
# se sigue abriendo index.html en el navegador.
FROM caddy:2-alpine

WORKDIR /srv
COPY index.html 404.html ./
COPY assets ./assets

ENV PORT=8080
EXPOSE 8080

# Railway asigna el puerto por variable de entorno, de ahí el shell.
CMD ["sh", "-c", "caddy file-server --root /srv --listen :${PORT}"]
