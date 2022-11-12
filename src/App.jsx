import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
import Contacto from './pages/Contacto/Contacto'


function App() {

  return (<BrowserRouter>

    <Header />
    <Navbar />

    <Routes>
      <Route  path='/' element={<ItemListContainer greeting={'¡Bienvenidos a Toldos Lovetto!'} />}/>
      <Route  path='/categoria/:categoriaID' element={<ItemListContainer greeting={'¡Bienvenidos a Toldos Lovetto!'} />}/>
      <Route path='/detail/:productID' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='*' element= {<Navigate to = '/'/>}/>
    </Routes>

  </BrowserRouter>
  )
}


export default App
