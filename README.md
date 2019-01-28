![Acámica](https://sc.acamica.com/img/1j7w9h/iso.svg)

# Front-end avanzado en React

## Proyecto _Hoteles_ · 1ra Etapa

1. Crear un directorio `hotels` en tu equipo que contenga los siguientes archivos `index.html`, `images/.kepp`, `scripts/app.js` y `styles/app.css`.

2. En el archivo `index.html` agregar la estructura básica del documento y las dependencias de [Bulma](https://bulma.io) _-un moderno framework de CSS-_, de [FontAwesome](https://fontawesome.com) _-un set de íconos muy popular-_, de [Babel](https://babeljs.io) _-para poder usar JSX-_ y finalmente de [React](https://reactjs.org).

> En la práctica profesional, los proyectos de React no suelen crearse de esta forma ni incluir Babel entre las dependencias; En este caso, el objetivo del proyecto es poner en práctica los conceptos básicos de React sin preocuparnos aún en cómo estas herramientas deben llegar a producción.

3. En el archivo `app.js` crear los primeros componentes necesarios para mostrar un NavBar que permita seleccionar un rango de fechas. Utilizar el método `render`de `ReactDOM` para mostrar los componentes en la pantalla.

4. Crear los componentes necesarios para mostrar la ficha de cada hotel y luego crear un componente contenedor encargado de renderizar el listado de hoteles _sin filtrar, por el momento_.

5. Conectamos todos los componentes de nuestra aplicación y trabajamos en que los mismos compartar sus estádos y acciones para lograr reactividad dentro de nuestra aplicación utilizando la metodología _"Lifting State Up"_.
