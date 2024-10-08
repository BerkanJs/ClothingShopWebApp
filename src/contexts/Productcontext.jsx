
import React,{createContext,useState,useEffect} from 'react'

export const Productcontext=createContext();


const ProductProvider = ({children}) => {
  const[products , setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts =async ()=>{
      const response = await fetch ('https://fakestoreapi.com/products');
      const data =await response.json();
      setProducts(data)
      
    };
    fetchProducts()

   
  },[])




  return (
    <Productcontext.Provider value={{products}}>

      {children}
    </Productcontext.Provider>
  )
}

export default ProductProvider