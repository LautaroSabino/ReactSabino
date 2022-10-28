import React from 'react'
import '../components/ItemListContainer.css'

function ItemListContainer(props) {
  return ( <div>

    <h2 className='saludo'>{props.Saludo}</h2>
    <h4 className='saludoSecu'>{props.SaludoSecundario}</h4>
 
    </div>
  )
}

export default ItemListContainer