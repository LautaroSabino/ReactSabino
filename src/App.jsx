import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import Header from './components/Header/Header'


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
