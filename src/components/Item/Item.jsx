import { Link } from "react-router-dom"


const Item = ({product}) => {
    return (
        <div>
            <Link to={`/detail/${product.ID}`}>
                <div className='fotoLista'>
                    <img src={product.foto} alt={product.nombre} />
                </div>
                <div className='lista'>
                    {product.nombre}
                </div>
                <div className='lista'>
                    {product.categoria}
                </div>
                <div className='lista'>
                    {product.stock}
                </div>
                <div className='lista'>
                    {product.precio}
                </div>
            </Link>


        </div>
    )
}

export default Item