# SEO e indexación

La configuración común está en `src/config/seo.js`. Cada página declara una URL canónica propia y las cinco traducciones más `x-default` (español). El sitemap se genera desde la misma lista: 9 páginas × 5 idiomas = 45 URLs. No se inventan fechas `lastmod`.

La raíz redirige permanentemente a `/es`. Las rutas conocidas sin idioma conservan su destino y parámetros al redirigir. Las URLs desconocidas devuelven 404. El HTML declara el idioma de cada traducción y la navegación ofrece enlaces HTML rastreables.

## Verificación local

1. `npm run build`
2. `npm run start -- --hostname 127.0.0.1 --port 3100`
3. `SEO_TEST_URL=http://127.0.0.1:3100 npm run test:seo`
4. `npm run lint`

El test comprueba las 45 páginas por HTTP: canónicas, idiomas, alternantes, sitemap, metadatos sociales, enlaces de servicios, encabezado principal de inicio, redirecciones y errores 404.

## Después de desplegar en Vercel

- Enviar de nuevo `https://mantenimientos-aj.vercel.app/sitemap.xml` en Search Console.
- Inspeccionar `/es`, `/es/maintenance-fire-systems` y `/es/low-voltage`, comprobar la canónica declarada y solicitar indexación.
- Abrir los dos motivos de exclusión de las capturas y consultar sus URLs concretas. Las capturas no muestran qué URLs están afectadas ni la canónica elegida por Google, por lo que no permiten atribuir una causa definitiva.
- Si la URL excluida es `/`, la redirección a `/es` es intencionada: no se busca indexar ambas. Para otra URL, comparar el HTML publicado, la canónica elegida y el contenido antes de validar la corrección.

Google decide la indexación y la canónica final. Un sitemap correcto no garantiza que todas sus URLs se indexen.

Referencias: [canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=es).
