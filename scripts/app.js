// Definimos los datos estáticos que nuestra aplicación utilizará para funcionar.
// En una aplicación convencional estos datos provendrían desde un back-end pero a los fines de este ejercisio utilizaremos variables pre-definidas.
// Utilizamos fechas dinámicas para que la aplicación siempre muestre un rango de días entre la fecha actual y el futuro.
const today = new Date()
const hotelsData = [
  {
    slug: 'la-bamba-de-areco',
    name: 'La Bamba de Areco',
    photo: './images/photos/la-bamba-de-areco.jpg',
    description: 'La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias más antiguas de la Argentina, recientemente restaurada para ofrecer a sus huéspedes todo el confort y esplendor colonial.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: 'Buenos Aires',
    country: 'Argentina',
    price: 4
  },
  {
    slug: 'sainte-jeanne',
    name: 'Sainte Jeanne Boutique & Spa',
    photo: './images/photos/sainte-jeanne.jpg',
    description: 'Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 23,
    city: 'Mar del Plata',
    country: 'Argentina',
    price: 2
  },
  {
    slug: 'entre-cielos',
    name: 'Entre Cielos',
    photo: './images/photos/entre-cielos.jpg',
    description: 'Ubicado en una de las regiones vitivinícolas más grandes de América Latina, Entre Cielos fue pensado y construido en un campo de 8 hectáreas rodeado de viñedos malbec y una imponente vista de la Cordillera de Los Andes.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 16,
    city: 'Mendoza',
    country: 'Argentina',
    price: 4
  },
  {
    slug: 'huacalera',
    name: 'Hotel Huacalera',
    photo: './images/photos/huacalera.jpg',
    description: 'Esta casona neocolonial, construida en la década de 1940, está ubicada en el corazón de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas montañosas, recorrido por el Río Grande y declarado Patrimonio de la Humanidad en 2003.',
    availabilityFrom: today.valueOf() + 1728000000, // 20 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 32,
    city: 'Jujuy',
    country: 'Argentina',
    price: 1
  },
  {
    slug: 'merced-del-alto',
    name: 'La Merced del Alto',
    photo: './images/photos/merced-del-alto.jpg',
    description: 'Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, ríos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaquíes o simplemente a disfrutar de la paz del lugar.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 14,
    city: 'Salta',
    country: 'Argentina',
    price: 2
  },
  {
    slug: 'azur-real',
    name: 'Azur Real Hotel',
    photo: './images/photos/azur-real.jpg',
    description: 'La exclusividad rodeada de historia. Azur Real Hotel Boutique está ubicado en el corazón de la zona comercial y el centro histórico de Córdoba, dentro de uno de los principales circuitos culturales y turísticos de la ciudad.',
    availabilityFrom: today.valueOf() + 1296000000, // 15 days 
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 16,
    city: 'Córdoba',
    country: 'Argentina',
    price: 1
  },
  {
    slug: 'rincon-del-socorro',
    name: 'Rincón del Socorro',
    photo: './images/photos/rincon-del-socorro.jpg',
    description: 'Rincón del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iberá, un santuario de vida silvestre, donde la Fundación Conservation Land Trust decidió desarrollar un ambicioso proyecto de recuperación y conservación.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 11,
    city: 'Corrientes',
    country: 'Argentina',
    price: 2
  },
  {
    slug: 'luma-casa-de-montana',
    name: 'Luma Casa de Montaña',
    photo: './images/photos/luma-casa-de-montana.jpg',
    description: 'Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Montaña se presenta majestuosa pero a la vez simple y hogareña: un lugar diferente, atemporal y mágico.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 8,
    city: 'Villa La Angostura',
    country: 'Argentina',
    price: 2
  },
  {
    slug: 'casa-turquesa',
    name: 'Casa Turquesa',
    photo: './images/photos/casa-turquesa.jpg',
    description: 'Casa Turquesa es una histórica mansión del siglo XVIII que recrea el encanto típico de Paraty, una de las herencias coloniales más bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 432000000, // 5 days
    rooms: 9,
    city: 'Río de Janeiro',
    country: 'Brasil',
    price: 3
  },
  {
    slug: 'vila-da-santa',
    name: 'Vila Da Santa',
    photo: './images/photos/vila-da-santa.jpg',
    description: 'Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su espíritu original. Se abre a un gran patio central con dos piscinas de diseño, una de ellas climatizada.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 19,
    city: 'Buzios',
    country: 'Brasil',
    price: 3
  },
  {
    slug: 'uxua-casa',
    name: 'UXUA Casa Hotel & Spa',
    photo: './images/photos/uxua-casa.jpg',
    description: 'UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extraídos de la selva.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 11,
    city: 'Bahía',
    country: 'Brasil',
    price: 4
  },
  {
    slug: 'ponta-dos-ganchos',
    name: 'Ponta dos Ganchos',
    photo: './images/photos/uxua-casa.jpg',
    description: 'Ubicado a pasos de San Pablo, Río de Janeiro, e incluso Buenos Aires, en una península privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa más exclusivos del sur de Brasil.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 25,
    city: 'Santa Catarina',
    country: 'Brasil',
    price: 4
  },
  {
    slug: 'alto-atacama',
    name: 'Alto Atacama',
    photo: './images/photos/alto-atacama.jpg',
    description: 'Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukará de Quitor en el imponente desierto de Atacama al norte de Chile.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    rooms: 42,
    city: 'San Pedro de Atacama',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'tierra-patagonia',
    name: 'Tierra Patagonia',
    photo: './images/photos/tierra-patagonia.jpg',
    description: 'Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de montañas, cascadas, glaciares, lagos y peñascos, declarado Reserva de la Biosfera por la UNESCO en 1978.',
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    rooms: 40,
    city: 'Torres del Paine',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'vira-vira',
    name: 'Vira Vira',
    photo: './images/photos/vira-vira.jpg',
    description: 'Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicación privilegiada, muy cerca de Pucón, Chile. Su impresionante parque nativo de 23 hectáreas a orillas del río Liucura ofrece un oasis único de paz y tranquilidad.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 21,
    city: 'Pucón',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'vik-chile',
    name: 'Vik Chile',
    photo: './images/photos/vik-chile.jpg',
    description: 'Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el diseño de vanguardia, una ubicación sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atención por el medioambiente.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    rooms: 22,
    city: 'Millahue',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'casa-higueras',
    name: 'Casa Higueras',
    photo: './images/photos/casa-higueras.jpg',
    description: 'Ubicada en el corazón del Cerro Alegre, frente a la imponente bahía de Valparaíso, se encuentra Casa Higueras, el primer hotel boutique y de diseño del puerto.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    rooms: 20,
    city: 'Valparaíso',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'campo-tinto',
    name: 'Campo Tinto',
    photo: './images/photos/campo-tinto.jpg',
    description: 'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: 'Colonia',
    country: 'Uruguay',
    price: 1
  }
]

// Le agregamos al objecto Date de JavaScript un método que convierta el valor de la instancia al formato necesario para ser compatible con el input del tipo date de HTML.
Date.prototype.inputOf = function() {
  return `${this.getFullYear()}-${String(this.getMonth() + 1).padStart(2,0)}-${String(this.getDate() + 1).padStart(2,0)}`
}

// Creamos el componente DateFilter para utilizarlo dentro del componente NavBar con el objetivo de permitir al usuario seleccione una fecha.
class DateFilter extends React.Component {
  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(event) {
    this.props.onDateChange(event)
  }

  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input is-medium" type="date" onChange={this.handleDateChange} value={this.props.date} name={this.props.name} />
          <span className="icon is-small is-left">
            <i className={'fas fa-' + this.props.icon}></i>
          </span>
        </div>
      </div>
    )
  }
}

// Creamos el componente NavBar que además de mostrar el logotipo de nuestra aplicación, utiliza el componente DateFilter dos veces para permitir al usuario seleccionar un rango de fechas.
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="./images/logo.svg" alt="BestHotels" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <DateFilter date={this.props.dateFrom} name="dateFrom" onDateChange={this.props.onDateChange} icon="sign-in-alt" />
          </div>
          <div className="navbar-item">
            <DateFilter date={this.props.dateTo} name="dateTo" onDateChange={this.props.onDateChange} icon="sign-out-alt" />
          </div>
        </div>
      </nav>
    )
  }
}

// Es importante que idintifiquemos dónde estamos repitiendo código para crear los componentes necesesarios y lograr una aplicación más escalable.
// Por esto creamos DataTag y PriceTag que son pequeños componentes que se repiten más de una vez en el componente Hotel.
class DataTag extends React.Component {
  render() {
    return (
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className={'fas fa-' + this.props.icon}></i></span>
          <span className="tag is-medium">{this.props.message}</span>
        </div>
      </div>
    )
  }
}
class PriceTag extends React.Component {
  render() {
    var icons = new Array()
    for (var i = 0; i < 4; i++) {
      var style = {margin: '0 .125em'}
      if (i >= this.props.count) {
        style.opacity = '0.25'
      }
      icons.push(<i className="fas fa-dollar-sign" style={style} key={i}></i>)
    }

    return (
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">{icons}</span>
        </div>
      </div>
    )
  }
}

// Creamos el componente Hotel que tiene como objetivo representar visualmente cada uno de los hoteles del listado.
class Hotel extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.photo} alt={this.props.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{this.props.name}</p>
          <p>{this.props.description}</p>
          <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
            <DataTag icon="map-marker" message={this.props.city + ', ' + this.props.country} />
            <DataTag icon="bed" message={this.props.rooms + ' Habitaciones'} />
            <PriceTag count={this.props.price} />
          </div>
        </div>
        <div className="card-footer">
          <a href="#" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
        </div>
      </div>
    )
  }
}

// El componente Hotels (en plural) tiene como obejtivo filtrar los hoteles del arreglo en base a las fechas seleccionadas y mostrar los mismos renderizando repetidamente el componente Hotel.
class Hotels extends React.Component {
  render() {
    const hotels = hotelsData.filter(hotel => this.props.dateFrom <= hotel.availabilityFrom && this.props.dateTo <= hotel.availabilityTo).map((hotel) =>
      (
        <div className="column is-one-third" key={hotel.slug}>
          <Hotel
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            city={hotel.city}
            country={hotel.country}
            rooms={hotel.rooms}
            price={hotel.price} />
        </div>
      )
    )

    return (
      <section className="section" style={{marginTop: '3em'}}>
        <div className="container">
          <div className="columns is-multiline">
            {hotels}
          </div>
        </div>
      </section>
    )
  }
}

// El componente App tiene como objetivo conectar los parámetros definidos por el NavBar (fechas) y aquellos utilizados por el componentes Hotels para que los mismos funcionen conectados de forma reactiva.
// Esta metodología es llamada "Lifting State Up".
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dateFrom: today,
      dateTo: new Date(today.valueOf() + 86400000)
    }

    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(event) {
    let _state = this.state
    _state[event.target.name] = new Date(event.target.value)
    if (_state['dateFrom'].valueOf() >= _state['dateTo'].valueOf()) {
      _state['dateTo'] = new Date(_state['dateFrom'].valueOf() + 86400000)
    } else if (_state['dateTo'].valueOf() > _state['dateFrom'].valueOf() + 2592000000) {
      _state['dateTo'] = new Date(_state['dateFrom'].valueOf() + 2592000000)
    }
    this.setState(_state)
  }

  render() {
    return (
      <div>
        <NavBar onDateChange={this.handleDateChange} dateFrom={this.state.dateFrom.inputOf()} dateTo={this.state.dateTo.inputOf()} />
        <Hotels dateFrom={this.state.dateFrom.valueOf()} dateTo={this.state.dateTo.valueOf()} />
      </div>
    )
  }
}

// Renderizamos la aplicación utilizando el método render de ReactDOM
ReactDOM.render(<App />, document.getElementById('app'))
