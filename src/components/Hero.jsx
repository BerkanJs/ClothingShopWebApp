import React from 'react'
import WomanImg from '../img/Remove-bg.png'
import{Link} from 'react-router-dom'
import { motion } from "framer-motion"
import {FadeLeft,FadeRight} from '../utility/animation'
const Hero = () => {
  return (
    <section className='bg-[#e5d4c2] h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            <motion.div
            variants={FadeLeft(0.4)}
            initial={"hidden"}
            whileInView={"visible"}
            >New Trend</motion.div>
          </div>
          <motion.h1
           variants={FadeLeft(0.6)}
           initial={"hidden"}
           whileInView={"visible"} 
          className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br /><span className='font-semibold'>WOMENS</span></motion.h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
          <motion.div
           variants={FadeLeft(0.4)}
           initial={"hidden"}
           whileInView={"visible"}
          >Discover More !</motion.div>
          </Link>
        </div>
        <div className='hidden lg:block '>
          <motion.img
          variants={FadeRight(0.3)}
          initial={"hidden"}
          whileInView={"visible"} 
          
           className='h-[700px]' src={WomanImg} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Hero