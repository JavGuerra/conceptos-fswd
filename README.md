![icono](img/logo.svg)

# Conceptos FSWD

__Práctica final del Ramp-up del Bootcamp de FSWD__  
Repositorio en GitHub: [ JavGuerra / ramp-up-fswd](https://github.com/JavGuerra/ramp-up-fswd)  
Por: __Javier Guerra__  

## Enunciado

- El ejercicio constará de una página web de tipo [SPA](https://es.wikipedia.org/wiki/Single-page_application) con varias secciones o de varias páginas enlazadas por el menú de navegación a criterio del desarrollador.
- Las secciones o páginas serán:
    - Home o página de bienvenida, con su bloque de navegación.
    - Biografía. Deberemos definir una tabla con datos biográficos (por ej.: sexo, nombre, apellidos, etc.).
    - Galería. Texto acompañado de algunos elementos multimedia (imágenes, videos, audios).
    - Contacto. Contendrá un formulario con al menos seis tipos de input.
- Se deberán emplear etiquetas semánticas de HTML (header, main, footer...).
- La tabla deberá tener estructura interna (thead, tbody, tfoot).
- Debemos maquetar todo el ejercicio con Flexbox, y podemos usar otras propiedades como float, position...
- Hacer un uso adecuado de los selectores CSS element, id, class, selectores compuestos, etc. No usar selectores de elementos HTML.
- Emplear el modelo de cajas de CSS: margin, padding, border...
- Utilizar pseudoclases (hover, focus, etc.) para dar un poco de dinamismo a la página.
- Se deberá respetar la estructura de directorios (css, img...).
- Se deberá crear un repositorio con el ejercicio.

## 14 características destacables de esta página web

- CSS transpilado con [Sass](https://es.wikipedia.org/wiki/Sass).
- Usa JavaScript puro ([Vanilla JS](https://www.ardepizando.com/que-es-vanilla-js/)).
- La web implementa los criterios del estándar XHTML (revisado con [Nu Html Checker](https://html5.validator.nu/)).
- El diseño es adaptable ([_responsive_](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable)) según el dispositivo.
- Usa la librería y los iconos de [Bootstrap Icons](https://icons.getbootstrap.com/) y las fuentes de letra de [Google Fonts](https://fonts.google.com/).
- Aplica un [efecto Paralax](https://blog.hubspot.es/marketing/efecto-parallax) a la portada (_hero_).
- Implementa el protocolo [Open Graph](https://ogp.me/) (_head_) para la correcta inserción de la web en redes sociales.
- Es compatible con _Progessive Web Aplication_ ([PWA](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)) a través de fichero [manifest.json](https://developer.mozilla.org/es/docs/Web/Manifest), por lo que la página puede ser instalada en dispositivos móviles como una web app.
- Implementa técnicas de seguridad en el formulario:
    - Hace uso de un [_Honeypod_](https://es.wikipedia.org/wiki/Honeypot), mediante el campo "hp", para evitar el SPAM.
    - Hace uso de un campo oculto "dato" para evitar ataques por [XSS](https://es.wikipedia.org/wiki/Cross-site_scripting) y [CRSF](https://es.wikipedia.org/wiki/Cross-site_request_forgery).
- Es accesible (revisado con el complemento [WAVE](https://wave.webaim.org/)):
    - Emplea párrafos y etiquetas contextuales sólo visibles para lectores de pantalla.
    - Hace uso de etiquetas [WAI-ARIA](https://en.wikipedia.org/wiki/WAI-ARIA) para describir eventos interactivos.
- El fichero README.md tiene sintáxis de marcado ligero [Markdown](https://es.wikipedia.org/wiki/Markdown).
- Dispone de un código QR para acceso rápido a la web a través de dispositivos móviles.
- Ha sido probado en los navegadores web __Firefox__ y __Chrome__.
- Web alojada en [Github](https://github.com/JavGuerra/ramp-up-fswd) pages.

## Posibles opciones de mejora

- Implementar la operatividad del botón de menú sin JavaScript, sólo con HTML y CSS. Al ser esta una función crítica de la página, si el navegador no tiene activado o no soporta Javascript, el menú no se desplegaría.
- Crear las páginas de política de privacidad, términos de uso, _cookies_ y poner el aviso de _cookies_ en la web.
- En el _back-end_ se procesarían el campo "hp", el campo "dato" y el resto de datos de los campos del formulario.
- Implementar el fichero robots.txt para indicar a los rastreadores web qué carpetas evitar, si es necesario.
- Si el contenido lo requiere, implementar una fuente web RSS o ATOM.
- Crear una página de error 404 personalizada (a través de un fichero .htaccess).

## Acceder a la página web

[Acceder a la página web](https://javguerra.github.io/ramp-up-fswd/index.html) de la práctica.

![icono](img/qrcode.svg)

## Licencias

Sobre el código fuente: [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE)  
Sobre el contenido de la web: [(CC) BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/es/)
