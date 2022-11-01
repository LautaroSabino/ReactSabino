import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import Header from './components/Header/Header'


function App() {

  return (<div>
    <Header />

    <Navbar />
    
    <ItemListContainer greeting={'¡Bienvenidos a Toldos Lovetto!'} />
    
    <Button />

  </div>
  )
}


export default App
