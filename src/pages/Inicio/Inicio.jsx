import { useEffect, useState } from 'react'
import ItemList from '../../components/Itemlist/ItemList'
import Item from '../../components/Item/Item'
import { producto } from '../../Items/Products'
import Navbar from "../../components/Navbar/Navbar"

const Inicio = () => {

    const [isLoading, setIsloading] = useState(true);
    const [products, setProducts] = useState ([]);
   
    const getData = async () => {
    return await new Promise ((resolve) => {
     setTimeout(() =>{
       resolve(producto)
     }, 2000)
    })
    }
   
    useEffect (() => {
     getData().then((res) => {
       setProducts(res);
       setIsloading(false);
     })
    })
   
    return (

    <div>
       <header> <Navbar></Navbar></header>
       <ItemList>
          {
            isLoading 
            ?<div>Cargando</div>
            :products.map((producto) => (<Item id = {producto.id} nombre = {producto.nombre} descripcion = {producto.descripcion} precio = {producto.precio}></Item>))
          }
        </ItemList>



    </div>
)

}

export default Inicio