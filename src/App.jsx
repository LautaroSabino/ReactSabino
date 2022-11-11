import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'


function App() {

  return (<BrowserRouter>

    <Header />
    <Navbar />

    <Routes>
      <Route  path='/' element={<ItemListContainer greeting={'¡Bienvenidos a Toldos Lovetto!'} />}/>
      <Route path='/detail' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element= {<Navigate to = '/'/>}/>
    </Routes>

  </BrowserRouter>
  )
}


export default App
