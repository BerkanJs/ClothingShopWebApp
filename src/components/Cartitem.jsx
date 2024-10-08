import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {IoMdClose} from 'react-icons/io';
import {IoMdRemove} from 'react-icons/io';
import {IoMdAdd} from 'react-icons/io';
import{CartContext} from '../contexts/CartContext';
const Cartitem = ({item}) => {
  const{removeFromCart,increaseAmount,decreaseAmount}=useContext(CartContext);
  const {id,title,image,price,amount} =item;

  return (

    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>

      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>

          <div  className='flex justify-between mb-2'>
            <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>
            {title}
            
            </Link>
            <div >
              <IoMdClose onClick={()=>removeFromCart(id)} className='text-gray-500 hover:text-red-500 transition cursor-pointer duration-200'/>
            </div>
          </div>


          <div className=' flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            <div onClick={()=>decreaseAmount(id)}className='flex-1 h-full flex justify-center items-center cursor-pointer '> 
              <IoMdRemove />
            </div>
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div onClick={()=>increaseAmount(id)}className='flex-1 h-full flex justify-center items-center cursor-pointer '>
            <IoMdAdd />

            </div>
            
          
          
          
          </div>
          <div className='flex-1 flex items-center justify-around'>{price}$</div>
          <div className='flex-1 flex justify-end items-center text-primary font-medium'> {`${parseFloat(price * amount).toFixed(2)}`} $</div>




        </div>
      





        </div>

        
      </div>

    </div>
  )
}

export default Cartitem