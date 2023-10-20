import Navbar from "../../components/Navbar/Navbar"

import { Link } from "react-router-dom"
import { useContext } from "react"

import { CartCtx } from "../../context/CartContext"
import { ItemCount } from "../../components/ItemCount/ItemCount"
import ItemD from "../../components/Item/itemD"
import ItemDList from "../../components/Itemlist/ItemDList"


const ItemDetail = ({item}) => {
    const { addToCart } = useContext(CartCtx);
    const onAdd=(count)=>addToCart(item,count);

    return (
        <div>


            <header><Navbar></Navbar></header>
            
                
                    
            <ItemDList children={ItemD}>
          {

            <div>
            <p>Nombre: {item.nombre}</p>
            <p>Categoria: {item.categoria}</p>
            <p>Descripcion:{item.descripcion}</p>
            <p>Precio:{item.precio}</p>
            <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount>
            <button><Link to={'/checkout'}>Ir al check out</Link></button>
            </div>
            
            // :listProducts.filter((producto) => (<ItemD id = {producto.id} nombre = {producto.nombre} descripcion = {producto.descripcion} precio = {producto.precio}></ItemD>))
          }
        </ItemDList>
                            

                        
                
            
        </div>
    )

}

export default ItemDetail