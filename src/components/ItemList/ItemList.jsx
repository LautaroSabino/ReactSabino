
import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (

        products.map(product => <Item key={product.ID} product={product} />) 
    )
}

export default ItemList