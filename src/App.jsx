import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Button from './components/Button'


const Titulo = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h3>{props.subtitulo}</h3>
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
    
    <ItemListContainer Saludo='¡Bienvenidos a Toldos Lovetto!' />
    <ItemListContainer SaludoSecundario='La mejor calidad en nuestros productos y servicio de colocación' />

    <Button />

  </div>
  )
}


export default App
