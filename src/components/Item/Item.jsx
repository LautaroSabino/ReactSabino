import { Link } from "react-router-dom"


const Item = ({product}) => {
    return (
        <div>
            <Link to={`/detail/${product.id}`}>
                <div className='fotoLista'>
                    <img src={product.Foto} alt={product.Nombre} />
                </div>
                <div className='lista'>
                    {product.Nombre}
                </div>
                <div className='lista'>
                    {product.Categoria}
                </div>
                <div className='lista'>
                    {product.Stock}
                </div>
                <div className='lista'>
                    {product.Precio}
                </div>
            </Link>


        </div>
    )
}

export default Item