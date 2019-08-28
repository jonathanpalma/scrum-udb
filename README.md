<div align="center">
  <h1>scrum-udb</h1>

  <p>Aplicacion para la gestion de carga de trabajo creada utilizando Node y React</p>
</div>

<hr />

- [About](#about)
- [Getting Started](#getting-started)

## About

Usted es el Encargado de una red de n operarios que estarán recibiendo una carga de trabajo de 2 horas para terminar una tarea específica. Éstos tienen una capacidad máxima de 8 horas y siempre terminan su tarea en 2 horas.

Cada operario es recompensado $10 por cada trabajo terminado y evaluado de acuerdo a la calidad del producto entregado. La evaluación se realiza en una escala de 1 a 5 con las siguientes reglas:

- Si el evaluado recibe dos “1” se suspende definitivamente del trabajo. Su posición es reemplazada por un nuevo operario. La probabilidad que esto suceda es 2%.
- Si el evaluado recibe 2 ó 3 de calificación se suspenderá por 1 una oportunidad que pueda recibir en el futuro (el próximo trabajo que sea asignado para él se le dará a una siguiente persona). La probabilidad que este suceda es 8%.
- Si el evaluado recibe 4 ó 5 de calificación, es sujeto de recibir un nuevo trabajo sin restricción. La probabilidad que esto suceda se estima en 90%
- Usted puede sugerir las reglas para los casos que se reciban mezclas de las calificaciones anteriores o hacer cualquier clasificación que facilite la asignación de trabajo
- Cuando la capacidad del sistema se agota, se puede crecer con operarios. Asumir que crece con la demanda y al agotarse la capacidad existente
- Naturalmente el número de operarios a los que se les asigna trabajo no sólo crece sino que puede también puede decrecer con la demanda.

Se le solicita:

Diseñar un sistema que haga la simulación de un pool de trabajo variable en el tiempo que sea distribuido sobre n operarios logrando que, tomando en cuenta todos los parámetros indicados, puedan terminar con una remuneración justa.

## Getting Started

Antes de iniciar es necesario instalar:
* [NodeJS](https://nodejs.org/)
* [VS Code](https://code.visualstudio.com/)

Considerando la arquitectura de la aplicacion la documentacion de cada proyecto se encuentra en los siguientes enlaces.

* [`BFF`](./bff/README.md)
* [`DB`](./db/README.md)
* [`UI`](./ui/README.md)