import './ItemListContainer.css'

const ItemListContainer = ({greeting, saludar}) => {

  return (<div>

    <div className='saludo'>
    <h2>{greeting}</h2>
    </div>

    <div className='btn boton'>
      <button onClick={saludar}>Click me</button>
    </div>
  </div>
  )
}

export default ItemListContainer