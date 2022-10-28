import './App.css'
import Navbar from './components/Navbar'

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
      <div >
        <Titulo titulo='Toldos Lovetto' />
        <Titulo subtitulo='tu mejor eleccion' />
      </div>
    </div >
  )
}

function App() {

  return (<div>
    <Header />
    <Navbar />
  </div>
  )
}


export default App
