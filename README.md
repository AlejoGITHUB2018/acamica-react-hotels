![Acámica](https://sc.acamica.com/img/1j7w9h/iso.svg)

# Front-end avanzado en React: Proyecto _Hoteles_

El proyecto _Hoteles_ tiene como objetivo poner en práctica los fundamentos de React incorporados hasta aquí y su respectiva implementación en el código.

El desafío del proyecto está puesto en desarrollar el front-end de una aplicación web de búsqueda hotelera, con filtros por fecha y características que modifican los resultados a mostrar.



## Guía: Creando el entorno

Lo primero que debemos hacer a la hora de crear una aplicación en React es preparar el entorno de desarrollo, esta guía te servirá para lograrlo.

1. **Crear un directorio** en tu equipo con un nombre que no contenga espacios ni caracteres especiales.
2. **Crea el archivo `index.html`** dentro del directorio del proyecto y agrégale la estructura básica de un documento de HTML 5.
3. **Crea los directorios de recursos `images ` y `scripts `** dentro de directorio principal y a continuación **crea el archivo `scripts/app.js`**.
5. **Agrega los recursos estáticos** del proyecto, descargándolos [desde aquí](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/assets.zip) e insertándolos a los directorios de recursos que creaste en el punto anterior.
6. **Agrega las dependencias de estilo** en el `head` del documento `index.html`. Utilizaremos [Bulma](https://bulma.io) para los estilos y [ FontAwesome ](https://fontawesome.com) para los iconos. _Puedes utilizar las opciones de CDN de ambos recursos para evitar descargar archivos adicionales en el proyecto._
7. **Agrega las dependencias de [React](https://reactjs.org)** antes de cerrar el `</body>` en el documento `index.html`. No olvides que necesitas dos dependencias para eso, _React_ y _ReactDOM_. También debemos agregar [Babel](https://babeljs.io) para poder usar de _JSX_ en nuestro código. _En este caso también es recomendado utilizar los recursos a través de CDN para evitar descargar archivos adicionales en el proyecto._
8. **Conecta los archivos `scripts/data.js` y `scripts/app.js`** antes de cerrar el `</body>` en el documento `index.html`. No olvides relacionar el archivo `scripts/app.js` con el atributo `type="text/babel"` para que éste sea interpretado por _Babel_ y no por el explorador en forma directa.
9. **Crea un contenedor vacío** dentro del documento `index.html` y agrégale un identificado único (`id`) para poder referenciarlo desde el código. _La convención es utilizar `app` como identificador para el contenedor._

> En la práctica profesional, los proyectos de React no suelen crearse de esta forma ni incluir Babel entre las dependencias; En este caso, el objetivo del proyecto es poner en práctica los conceptos básicos de React sin preocuparnos aún de cómo éstas herramientas deben llegar a producción.

### Checkpoint 
Puedes poner a prueba el entorno que acabas de crear agregando el siguiente código al archivo `scripts/app.js`.

```js
function App() {
  return (
    <h1 className="title is-1"><i className="fas fa-home"></i> ¡Hola!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
```

Si se muestra el título con el texto, la apariencia y el ícono correspondiente, el entorno está listo para utilizar.

> Es posible que necesites un _Live Server_ para poder abrir la aplicación web desde el explorador. En los editores de texto más populares existen plug-ins que brindan esta funcionalidad.



## Primeros componentes
Ahora que hemos preparado el entorno de desarrollo, el siguiente paso es comenzar a crear los distintos componentes de nuestra aplicación.

Para ello necesitaremos identificar todos los componentes de la interfaz y comenzar a pensar cómo los mismos interactúan entre sí. Tal como lo hicimos en las actividades anteriores.

1. **Descarga la interfaz** del proyecto [desde aquí](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/components.pdf) y abre la misma con tu visor de PDF preferido. _Es recomendable utilizar algún visor como [Adobe Acrobat Reader](https://acrobat.adobe.com/us/en/acrobat/pdf-reader.html) que te permita realizar anotaciones sobre el documento._
2. **Identifica los componentes** de la interfaz, comenzando por los principales y siguiendo por cada uno de los hijos.
3. **Identifica los estados** y cómo éstos deberán ser consultados y/o modificados por los distintos componentes de la interfaz.

Una vez que tenemos identificados todos los componentes, podemos comenzar a crearlos en el código empezando por el componente principal (`App`), el encargado de contener a todos los demás componentes.

```js
function App() {
  return (
    <div></div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
```

> Todos los fragmentos de código del proyecto que utilizaremos a partir de este momento deberán utilizarse en el archivo `scripts/app.js`.

### Componente `Hero`

El primer componente dentro de `App` es el `Hero` que contiene el nombre la aplicación y un breve resumen de los parámetros que definen a los resultados que se muestran en pantalla.

![](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/screenshot-hero.png)

Puedes utilizar el siguiente maquetado para crear el componente.

```html
<section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">Hoteles</h1>
      <h2 className="subtitle">
        desde el <strong>dddd, DD de mmmm de AAAA</strong> hasta el <strong>dddd, DD de mmmm de AAAA</strong>
      </h2>
    </div>
  </div>
</section>
```

Como se trata de un componente que no recibe interacción del usuario ni debería almacenar el estado, alcanza con crear una función que únicamente reciba como `props`los filtros desde su componente padre `App`.

La lógica de este componente está en el elemento `<h2 className="subtitle"> `, el mismo debería reflejar, en lenguaje natural, las fechas seleccionadas por el usuario y agregar las leyendas _en PAÍS_ si hay un filtro por país aplicado, _por PRECIO_ si hay un filtro por precio aplicado y _de hasta CANTIDAD habitaciones_ si hay un filtro por tamaño aplicado en la búsqueda.

> Por ejemplo: _**Hoteles** desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019 en Argentina por $$ de hasta 10 habitaciones_.

Cuando definimos el objeto `filters` que este componente recibe a través de sus `props` tendríamos que apuntar a una estructura de datos similar a la siguiente.

```js
{
  dateFrom: new Date(),
  dateTo: new Date(),
  country: undefined,
  price: undefined,
  rooms: undefined
}
```

Y teniendo en cuenta esta estructura, podríamos utilizar el método [`toLocaleDateString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) en los primeros dos parámetros para exponer al usuario las fechas en lenguaje natural.

Al mismo tiempo podríamos utilizar condicionales del tipo `CONDITION ? TRUE : FALSE` para definir si se deberían o no mostrar los últimos tres parámetros en el texto del elemento `<h2 className="subtitle"> `.

### Checkpoint 
Puedes poner a prueba el componente que acabas de crear instanciando éste desde el componente padre `App` y brindándole datos estáticos a sus propiedades.

```js
function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: '',
    price: 0,
    rooms: 0
  }

  return (
    <div>
      <Hero filters={ filters } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
```

Si el componente cuenta con su apariencia esperada y el texto dinámico refleja correctamente los cambios en los datos estáticos, estamos listos para seguir avanzando.



## Guía: Filtros (Parte 1)
El siguiente elemento en nuestra interfaz es la barra de filtros que permite al usuario buscar por parámetros determinados entre los resultados que muestra la aplicación web.

![](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/screenshot-filters.png)

Al realizar la identificación de componentes de la [interfaz completa](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/components.pdf) en la guía anterior, debemos habernos encontrado con tres componentes específicos.
- El componente contenedor de todos los filtros
- El componente que permite indicar una fecha
- El componente que permite seleccionar una opción

Comenzaremos a trabajar con el componente que permite indicar una fecha que se instancia dos veces dentro de la barra de filtros.

### Componente `DateFilter`

Puedes utilizar el siguiente maquetado para crear el componente.

```html
<div className="field">
  <div className="control has-icons-left">
    <input className="input" type="date" />
    <span className="icon is-small is-left">
      <i className="fas"></i>
    </span>
  </div>
</div>
```

En principio este componente debería recibir dos `props`, una es la fecha que debe mostrar (`date`) y otra es el ícono que cambia en ambas instancias (`icon`).

Para mostrar el icono la solución es simple, con que reciba como parámetro la cadena de texto `fa-sign-in-alt` para el caso de la fecha de ingreso y `fa-sign-out-alt` para la fecha de egreso ya podríamos concatenar al elemento `<i className="fas"></i>` dicho valor en el atributo `className`.

En el caso de la fecha, el comportamiento es un poco más complejo ya que si recordamos correctamente la estructura de datos de los filtros.

```js
{
  dateFrom: new Date(),
  dateTo: new Date(),
  country: undefined,
  price: undefined,
  rooms: undefined
}
```

Los atributos de fecha `dateFrom` y `dateTo` son instancias del tipo `Date` y en el caso del `<input type="date" />` el atributo `value` del elemento espera una cadena de texto con el formato _YYYY-MM-DD_.

Por esta razón, para poder mostrar la fecha del filtro en el campo primero debemos hacer la conversión. Este tipo de comportamiento se debe definir dentro del mismo componente para ya que sólo afecta al componente `DateFilter`. _No hay un método predefinido en el lenguaje para resolver este comportamiento así que tendrás que hacer la conversión tu mismo._

### Componente `OptionsFilter`

Puedes utilizar el siguiente maquetado para crear el componente.

```html
<div className="field">
  <div className="control has-icons-left">
    <div className="select" style={ {width: '100%'} }>
      <select style={ {width: '100%'} }>
        ...
      </select>
    </div>
    <div className="icon is-small is-left">
      <i className="fas"></i>
    </div>
  </div>
</div>
```

A diferencia del componente anterior, en este caso deberiamos recibir tres `props`, una debería determinar las opciones posibles que tiene el campo (`options`), otra la opción que se encuentra seleccionada (`selected `) y por último, en otra `prop`, el ícono que cambia en cada instancia (`icon`).

El valor recibido a través de la propiedad `options` debería ser un arreglo con la siguiente estructura.

```js
[
  { value: undefined, name: 'Cualquier tamaño' },
  { value: 10, name: 'Hotel pequeño' },
  { value: 20, name: 'Hotel mediano' },
  { value: 30, name: 'Hotel grande' }
]
```

Para mostrar las opciones dentro del componente debemos acudir a una práctica llamada _List Rendering_, podemos apoyarnos en la [documentación oficial de React](https://reactjs.org/docs/lists-and-keys.html) para resolver este punto.

Recordando la estructura de datos de los filtros y teniendo en cuenta los valores definidos para cada hotel en el archivo `data.js`, los valores de las `props` para cada instancia debería ser los siguientes.

Por último no hay que olvidar agregar el atributo `value` al elemento `<select>` con el valor recibido a través de la propiedad `selected` para que el componente muestre con éxito la opción seleccionada.

### Componente `Filters`

Para finalizar debemos crear un componente `Filters`, que luego agregaremos al componente `App` para mostrar todos los filtros posibles.

Teniendo en cuenta los componentes desarrollados en esta guía, debería contener una estructura similar a la siguiente.

```html
<nav className="navbar is-info" style={ {justifyContent: 'center'} }>
  <div className="navbar-item">
    <DateFilter
      date={ props.filters.dateFrom}
      icon="sign-in-alt" />
  </div>
  <div className="navbar-item">
    <DateFilter
      date={ props.filters.dateTo }
      icon="sign-out-alt" />
  </div>
  <div className="navbar-item">
    <OptionsFilter
      options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
      selected={ props.filters.country }
      icon="globe" />
  </div>
  <div className="navbar-item">
    <OptionsFilter
      options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
      selected={ props.filters.price }
      icon="dollar-sign" />
  </div>
  <div className="navbar-item">
    <OptionsFilter
      options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
      selected={ props.filters.rooms }
      icon="bed" />
  </div>
</nav>
```

### Checkpoint 
Puedes poner a prueba el componente que acabas de crear instanciando éste desde  `App` y brindándole los mismos datos estáticos que al componente `Hero`.

```js
function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
  }

  return (
    <div>
      <Hero filters={ filters } />
      <Filters filters={ filters } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
```

Si el componente cuenta con su apariencia esperada y los campos reflejan correctamente los cambios en los datos estáticos, estamos listos para seguir avanzando en permitir al usuario modificar estos datos.



## Guía: Filtros (Parte 2)
Ahora que tenemos nuestros de filtros en la interfaz debemos comenzar a definir su comportamiento y de esta forma permitir que los mismos puedan modificar los datos de la aplicación.

![](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/screenshot-filters.png)

Para lograr esto lo primero que debemos hacer es lograr que los datos del objeto que contiene los filtros sean modificables por React durante la ejecución. Esto se logra creando un estado (`state`) en un componente de la aplicación.

Hasta el momento hemos creado tres componentes principales, `Hero`, `Filters` y `App` que contiene a ambos. El estado de los filtros debe ser accesible tanto por el componente `Hero` como por el componente `Filters`, por esta razón el estado debe estar en un componente padre que pueda brindarle información y comportamiento a ambos, en este caso, el componente `App`.

### Componente `App`

En este punto deberíamos tener el componente `App` creado con una sintaxis similar a la siguiente.

```js
function App() {
  const filters = {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
  }

  return (
    <div>
      <Hero filters={ filters } />
      <Filters filters={ filters } />
    </div>
  )
}
```

Esta metodología nos permitió probar los componentes `Hero` y `Filters` en la interfaz pero no nos permite hacer cambios en los datos del objeto `filters`.

Para poder crear un estado dentro de este componente, lo primero que debemos hacer es convertir la declaración del componente `App` para que deje de ser una `function` y pase a ser una `class` que extiende de la clase [`React.Component`](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class).

Una vez que tenemos nuestra clase `App` creada debemos agregarle un [`constructor`](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) en donde declararemos el estado del componente, que deberá contener el atributo `filters` con la misma estructura que antes.

```js
this.state = {
  filters: {
    dateFrom: today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
  }
}
```

Por último es importante que actualicemos la estructura del componente para que éste utilice su `state`, que acabamos de crear, al pasarle los filtros a los componentes hijos.

```js
render() {
  return (
    <div>
      <Hero filters={ this.state.filters } />
      <Filters filters={ this.state.filters } />
    </div>
  )
}
```

Ya logramos que el estado de los filtros sea modificable por React durante la ejecución. Ahora debemos definir un comportamiento que permita realizar dichas modificaciones cuando el usuario interactúan con la interfaz.

### Componentes `DateFilter` y `OptionsFilter`

Para lograr esto debemos recurrir al evento `onChange` de los elementos `input` y `select` en los componentes `DateFilter` y `OptionsFilter` respectivamente.

Esto se logra convirtiendo nuevamente la declaración de estos componentes de `function` a `class` que extiende de [`React.Component`](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class).

El comportamiento que debemos agregar no debe intentar modificar el `state` de forma directa ya que no es parte de este componente hijo, sino que debería simplemente informar a su componente padre (`Filters`) que hubo un cambio, para que luego este pueda informar a su componente padre (`App`) del cambio y este último se encargue de modificar su propio `state`.

Aquí hay un ejemplo de cómo debería quedarnos el componente `DateFilter`. Intenta interpolar esta sintaxis al componente `OptionsFilter` también.

```js
class DateFilter extends React.Component {
  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(event) {
    this.props.onDateChange(event)
  }

  render() {
    ...
    <input className="input" type="date" onChange={ this.handleDateChange } value={ date } name={ this.props.name } />
    ...
  }
}
```

Analiza a fondo el código anterior, podrás notar que hay una nueva propiedad `name` que nos servirá luego para identificar cuál instancia del componente está generando el evento.

### Componente `Filters`

Ahora que ambos componentes hijos tienen previsto contener una propiedad de nombre (`name`) y una propiedad de evento (`onDateChange` / `onOptionChange`), debemos preparar el componente `Filters` para que el mismo pueda interpretar dichos eventos y a su vez informar a su componente padre (`App`) acerca de los mismos. Empecemos convirtiéndolo de `function` a `class` que extiende de [`React.Component`](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class).

Aquí tienes un ejemplo de cómo debería ser la lógica del método `onOptionchange`.

```js
handleOptionChange(event) {
  let payload = this.props.filters
  payload[event.target.name] = event.target.value

  this.props.onFilterChange(payload)
}
```

Si lo analizas con atención podrás notar que el método tiene una funcionalidad muy simple, tomar el valor del objeto `filters` y reemplazar el valor del atributo que corresponde al nombre del `input` o el `select` que está disparando el evento. Una vez reemplazado ese dato simplemente llama a la función `onFilterChange` que recibe como `prop` y de la cual definiremos el comportamiento en el componente `App`.

Intenta llevar este mismo funcionamiento a un nuevo método con nombre `onDateChange`. El objetivo de esta función será el mismo pero deberás agregar la lógica para evitar que la fecha del atributo `dateTo` quede previas a  la del atributo `dateFrom`.

### Estado del componente `App`

Ahora que hemos definido todo el funcionamiento de los distintos eventos generados por el componente `Filters` y sus hijos, debemos agregar al componente `App` el método que efectivamente modifica su `state` frente a estos cambios.

Para ello lo único que debemos hacer es agregar una función dentro del componente que llame al método `setState` de React pasando la nueva información de filtros generada por el componente `Filters`.

```js
handleFilterChange(payload) {
  this.setState({
    filters: payload
  })
}
```

Y luego no debemos olvidar pasar este nuevo método a través de las `props` del componente en cuestión.

```html
<Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange } />
```

### Checkpoint 
Si todo salió bien, ya puedes poner a prueba el comportamiento de los eventos del componente `Filters` y sus hijos al ver cómo éstos modifican el `state` del componente `App` a medida que reciben cambios por parte del usuario.

También deberías ver estos cambios de datos reflejados en el componente `Hero` que creaste anteriormente.

Por último, si quieres asegurarte de que todo está funcionando correctamente, puedes monitorear el `state` de tu aplicación durante su ejecución usando [ React Developer Tools ](https://github.com/facebook/react-devtools).



## Guía: Ficha del Hotel

Ya tenemos todo el funcionamiento de nuestra interfaz de búsqueda hotelera desarrollado. Lo único que resta para finalizar la aplicación web es mostrar efectivamente los hoteles.

El objetivo de esta guía es crear el componente `Hotel` que será el encargado de representar en la interfaz la ficha de cada hotel.

![](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/screenshot-hotel.png)

El maquetado del componente `Hotel` tiene la siguiente estructura.

```html
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="./images/sainte-jeanne.jpg" alt="Sainte Jeanne Boutique & Spa" />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4">Sainte Jeanne Boutique & Spa</p>
    <p>Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.</p>
    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
          <span className="tag is-medium">Mar del Plata, Argentina</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
          <span className="tag is-medium">23 Habitaciones</span>
        </div>
      </div>
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="card-footer">
    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
  </div>
</div>
```

La primer tarea es lograr que los datos _dinámicos_ de este maquetado cambien en cada instancia a través de `props` que puede recibir el componente. Revisa el archivo `data.js` para ver con qué información cuentas para representar cada hotel.

Por su parte también es bueno que identifiques que componentes dentro de esta parte de la interfáz se podrían extraer del componente padre (`Hotel`) para instanciar los mismos cuando son necesitados. Un buen ejemplo es el componente que la ciudad o la cantidad de habitaciones, la estructura se repite de forma similar dentro del padre y la creación de un componente `DataTag` podría ser una buena forma de optimizar nuestro código.

### Checkpoint 
Puedes probar el / los nuevos componentes que creaste agregando los mismos a la estructura del componente `App` e indicando como `prop` uno de los elementos del listado de hoteles que se encuentra en el archivo `data.js`.

```html
<div>
  <Hero filters={ this.state.filters } />
  <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange } />
  <Hotel hotel={ hotelsData[0] } />
</div>
```

Si el hotel se visualiza correctamente _(aunque no esté bien posicionado en la pantalla)_ quiere decir que tu componente `Hotel` está listo para usar.



## Guía: Listando Hoteles

Teniendo todas las partes de nuestra interfaz listas, sólo hace falta que la misma funcione listando los hoteles de acuerdo a los filtros establecidos por el usuario.

![](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/screenrecording-hotels.gif)

Para ello lo primero que debemos hacer es incorporar el listado de hoteles al `state` del componente `App` de la siguiente forma.

```js
this.state = {
  filters: {
    dateFrom: today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
  },
  hotels: hotelsData
}
```

Luego debemos crear un componente encargado de listar los hoteles en la interfaz, podemos llamarlo `Hotels` y la estructura debería ser similar a la siguiente.

```html
<section className="section" style={ {marginTop: '3em'} }>
  <div className="container">
    <div className="columns is-multiline">
      ...
    </div>
  </div>
</section>
```

Dentro de este componente, utilizando [List Rendering](https://reactjs.org/docs/lists-and-keys.html), debemos lograr que cada hotel del arreglo recibido a través de `props` se muestre con la siguiente estructura.

```html
<div className="column is-one-third">
  <Hotel data={ hotel } />
</div>
```

También es bueno que pensemos qué pasa cuando ningún hotel del arreglo coincide con los filtros. Aquí hay ejemplo de lo que podríamos mostrar en lugar del listado de elementos.

```html
<article className="message is-warning">
  <div className="message-body">
    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
  </div>
</article>
```

Por último nos queda agregar en el componente `App` la lógica para que el mismo no brinde el arreglo completo de hoteles al componente `Hotels` sino únicamente aquellos que deben ser mostrados.

Para lograr esto es posible que precisemos usar el método [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) y resolver la lógica del filtrado antes de pasar la `prop` del arreglo al componente hijo de la siguiente forma.

```html
<Hotels data={ hotels } />
```

### Checkpoint 
Si al activar, desactivar y cambiar los filtros en la barra de filtros nuestra interfaz y el listado de hoteles reaccionan correctamente a los cambios, ¡Hemos creado nuestra primera aplicación web de React!



## Checklist

Antes de realizar la entrega del proyecto revisa que éste cumpla con los siguientes ítems de evaluación.

- Representa visualmente los componentes en el explorador siendo fiel al [diseño de interfaces de la aplicación](https://s3.amazonaws.com/resources.acamica.com/contenidos/react/hotels/components.pdf).
- No utiliza elementos HTML adicionales al contenedor que necesita React para renderizar los componentes (`<div id="app"></div>`).
- Permite al usuario/a realizar modificaciones en los valores que se muestran en los campos de la barra de filtros.
- Las modificaciones en los valores de la barra de filtros impactan sobre la información que muestra el encabezado de la aplicación.
- El encabezado de la aplicación sólo muestra en lenguaje natural los filtros que se encuentran activos, es decir, que tienen un valor asignado.
- Los hoteles del archivo `data.js` se ven representados a través de su respectiva ficha en la interfaz.
- Sólo se muestran aquellos hoteles que coinciden con los filtros configurados por el/la usuario/a durante la ejecución de la aplicación.
- Los filtros pueden ser modificados, activados o desactivados por los/as usuarios/as múltiples veces durante la ejecución y la aplicación no genera errores durante este comportamiento.
