import React,{useContext,useEffect,useState} from 'react'
import { SideBarContext } from '../contexts/SidebarContext'
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext'
import { GiRolledCloth } from "react-icons/gi";
import {Link} from 'react-router-dom'
const Header = () => {
  const{isOpen,SetIsOpen}=useContext(SideBarContext)
  const{itemAmount}=useContext(CartContext);
  const[isActive,setIsActive]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      window.scrollY>60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' :'bg-none py-6'} fixed w-full z-10 transition-all duration-300`}>
   
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={'/'}>
      <div className='flex items-center justify-center space-x-2'> 
      <GiRolledCloth className='text-4xl ' />
      <div className='text-2xl font-bold'>Monteverdis</div>
      </div>
      </Link>
      <div className='cursor-pointer flex relative max-w-[50px]' onClick={()=>SetIsOpen(!isOpen)}>
        <FaShoppingBag className='text-2xl' />
        <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center bg-red-500'>{itemAmount}</div>
      
      
      </div>






      </div>






   





   
    </header>
  )
}

export default Header