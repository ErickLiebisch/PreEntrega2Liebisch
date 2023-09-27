import Navbar from "../../components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { producto } from "../../Items/Products"
import { useParams, Link } from "react-router-dom"


const ItemDetail = () => {
   const {idProduct} = useParams()
   const [product, setProduct] = useState ([])
   const [isLoading, steIsloading] = useState(true)
   const searchProduct = producto.find((prod) => prod.id === parseInt(idProduct))
   useEffect(( )=> {
setTimeout (() =>{

setProduct(searchProduct)
steIsloading(false)
},2000)

   },[])
   
   
    return (
    <div>
        
    
        <header><Navbar></Navbar></header>
        <div>
            {
                isLoading
                ?<p>Cargando</p>
                :<div>
                    <h1>{product.nombre}</h1>
                    <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
                    <button><Link to={'/checkout'}>Ir al chack out</Link></button>
                
                </div>
            }
        </div>
        
        
        </div>
    )
    
    }
    
    export default ItemDetail