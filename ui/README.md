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

### `npm run dev`

Compila y ejecuta la aplicacion en entorno de desarrollo.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.

## Project structure

-Estructura del proyecto

Dentro de la carpeta `src` hay algunas carpetas para códigos que no son de características que se pueden compartir en diferentes partes de la aplicación (components, config, constants, helpers, services). 

### components

La carpeta `components` contiene componentes de React que se pueden usar en cualquier lugar de la aplicación.

## config

La carpeta `config` contiene toda la configuración que necesita el logger.

### constants

La carpeta `constants` contiene todas las constantes usadas en la aplicacion.

### helpers

La carpeta `helpers` contiene todos las piezas de codigo que no pertenecen en otras carpetas pero que al mismo tiempo no justifican tener una carpeta propia.

### hooks

La carpeta `hooks` contiene [react hooks](https://es.reactjs.org/docs/hooks-intro.html), los cuales nos permiten usar estado y otras características de React sin escribir una clase, nos permiten “enganchar” el estado de React y el ciclo de vida desde componentes funcionales.

### interfaces

La carpeta `interfaces` contiene en si todas las interfaces que cumplen la función de nombrar estos tipos y son una forma poderosa de definir contratos dentro de su código.