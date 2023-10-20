import {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/Itemlist/ItemList'
import Item from '../../components/Item/Item'
import Navbar from "../../components/Navbar/Navbar"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
const Inicio = () => {

    const [isLoading, setIsloading] = useState(true);
    const [listProducts,setListProducts] = useState([]);
    const {id}=useParams();
  
    useEffect(()=> {

      const db = getFirestore();
      if(!id){
        const refCollection=collection(db,"productos");
        getDocs(refCollection).then(snapshot=>{
          if(snapshot.size===0) console.log("sin resultados")
          else
          setListProducts(snapshot.docs.map(doc=>{
            return { id:doc.id, ...doc.data() }
          })
          )
           
        }).finally(()=>setIsloading(false))
      }else{
        const q= query(
          collection(db,"productos"),
          where("categoria","==",id)
        );
        getDocs(q).then(snapshot=>{
          if(snapshot.size===0) console.log("sin resultados")
          else
          setListProducts(snapshot.docs.map(doc=>{
            return { id:doc.id,...doc.data() }
          })
          )
         
        }).finally(()=>setIsloading(false))
      }
},[id])
    
    return (

    <div>
       <header> <Navbar></Navbar></header>
       <ItemList children={Item}>
          {
            isLoading 
            ?<div>Cargando</div>
            :listProducts.map((producto) => (<Item items={producto} ></Item>))
          }
        </ItemList>



    </div>
)

}

export default Inicio