import React,{useContext} from 'react'
import {Productcontext} from '../contexts/Productcontext'
import Product from '../components/Product'
import Hero from '../components/Hero'
import { motion } from "framer-motion"
import {FadeLeft} from '../utility/animation'
const Home = () => {
  const {products} =useContext(Productcontext);
  const filteredProducts=products.filter(item=>{
    return item.category==="men's clothing" ||item.category==="women's clothing"
  });
 
    return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto'>
          <motion.div
          variants={FadeLeft(0.4)}
          initial={"hidden"}
          whileInView={"visible"}

           className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {
              filteredProducts.map((product=>{
                return <Product product={product} key={product.id}/>

                
              }))
            }




          </motion.div>




        </div>




      </section>








    </div>
  )
}

export default Home