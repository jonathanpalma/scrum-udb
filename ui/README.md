# ui

User Interface (UI) es una aplicación diseñada usando una arquitectura basada en componentes con la cual una persona puede interactuar con el sistema.

## Language

* Typescript

## Frameworks / Libs

* React
* Redux

## Scripts

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.

### `npm test`

Inicia el corredor de prueba en el modo interactivo.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.

## Project structure

Estructura del proyecto

Dentro de la carpeta `src` hay algunas carpetas para códigos que no son de características que se pueden compartir en diferentes partes de la aplicación (components, constants, helpers, services). 

### components

La carpeta `components` contiene componentes de React que se pueden usar en cualquier lugar de la aplicación.

### constants

La carpeta `constants` contiene todas las constantes usadas en la aplicacion.

### helpers

La carpeta `helpers` contiene todos las piezas de codigo que no pertenecen en otras carpetas pero que al mismo tiempo no justifican tener una carpeta propia.

### services

La carpeta `services` contiene una capa que maneja todas las comunicaciones http con API de back-end para la aplicación, cada servicio encapsula las llamadas a la API para un tipo de contenido (por ejemplo, usuarios) y expone métodos para realizar diversas operaciones (por ejemplo, operaciones CRUD).
