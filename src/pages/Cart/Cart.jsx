import { useContext, useState } from "react"
import { CartCtx } from "../../context/CartContext"
import Navbar from "../../components/Navbar/Navbar"
import { getFirestore,collection,addDoc } from "firebase/firestore"
const Cart = ()=> {
const {listProducts,removeItem,clear,total}=useContext(CartCtx)
const sendOrder=()=>{
    const order={
        products: listProducts,
        total:total
    }
   const db=getFirestore();
   const orderCollection=collection(db,"ordenes");
   addDoc(orderCollection,order).then((response)=>{
    if(response.id){
        alert("Su orden con id: "+response.id+" ha sido creada")
    }
   })
   clear();
}
return(
    
    <div>
        <Navbar/>
        <h1>Checkout</h1>
        {listProducts.map(item=> (
            <p>Nombre: {item.nombre}
            Precio: {item.precio}
            Descripcion:{item.descripcion}
            </p>
            
        ))}
        <h2>{total}</h2>
        <button action onClick={sendOrder}>Enviar orden</button>

    </div>
)
}
export default Cart