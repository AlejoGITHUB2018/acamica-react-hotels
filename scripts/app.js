// Creamos el componente DateFilter para utilizarlo dentro del componente NavBar con el objetivo de permitir al usuario seleccione una fecha.
// Por ahora sólo pensamos el método render() de este componente, más adelante definiremos su comportamiento.
class DateFilter extends React.Component {
  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input is-medium" type="date" defaultValue={this.props.value} />
          <span className="icon is-small is-left">
            <i className={'fas fa-' + this.props.icon}></i>
          </span>
        </div>
      </div>
    )
  }
}

// Creamos el componente NavBar que además de mostrar el logotipo de nuestra aplicación, utiliza el componente DateFilter dos veces para permitir al usuario seleccionar un rango de fechas.
// Utilizamos una fecha dinámica para que la aplicación siempre muestre un rango de días entre la fecha actual y un mes hacia el futuro. Combertimos esas fechas a un formato de texto compatible con el input:date de HTML.
class NavBar extends React.Component {
  render() {
    let today = new Date()
    let dateFrom = `${today.getFullYear()}-${String(today.getMonth()).padStart(2,0)}-${String(today.getDate()).padStart(2,0)}`
    let dateTo = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,0)}-${String(today.getDate()).padStart(2,0)}`

    return (
      <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="./images/logo.svg" alt="BestHotels" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <DateFilter value={dateFrom} icon="sign-in-alt" />
          </div>
          <div className="navbar-item">
            <DateFilter value={dateTo} icon="sign-out-alt" />
          </div>
        </div>
      </nav>
    )
  }
}

// Instanciamos el componente NavBar dentro de una constante
const app = (
  <NavBar />
)

// Renderizamos la aplicación utilizando el método render de ReactDOM
ReactDOM.render(app, document.getElementById('app'))
