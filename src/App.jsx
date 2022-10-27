import './App.css'

const Titulo = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  )

}

const Header = () => {
  return (
    <div>

      
      <div className="header">
        <Titulo titulo='Toldos Lovetto' />
        <Titulo subtitulo='tu mejor eleccion' />
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <a> Inicio </a>
            </li>
            <li>
              <a> Productos</a>
            </li>
            <li>
              <a> ¿Quienes somos?</a>
            </li>
            <li>
              <a> Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div >
  )
}




function App() {

  return (<div>
    <Header />
    <Titulo />
  </div>
  )
}


export default App
