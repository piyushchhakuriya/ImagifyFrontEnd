import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const{user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate()
  const onClickhandler=()=>{
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true);
    }

  }
  return (
    
    <motion.div className='flex flex-col justify-center items-center text-center mt-20'
    
    initial = {{opacity:0.2, y:100}}  // shuruaat 100 px niche se hogi
    transition = {{duration:1}}        // 1 second tak chalega
    whileInView = {{opacity:1, y:0}}//iska use hum tab karenge jab hume scroll karne par animation dikhayi de   // jab ye component apni position par aa jaayege tab clear dikhega
    viewport = {{once:true}}           // ek baar chalega
     
    >

      <motion.div

    initial = {{opacity:0, y:-20}}      
    animate = {{opacity:1, y:0}}   // iska use tab karenge jab koi bhbi component render hota hai
    transition={{delay:0.2, duration:0.8}}
      
      
      className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>
            Best text to image generator
        </p>
        <img src={assets.star_icon} alt="" />
      </motion.div>



      <motion.h1
      initial = {{opacity:0 }}
      animate = {{opacity:1}}
      transition = {{delay: 0.4, duration:2}}
      
      
      className='text-4xl max-w[300px] sm:text-7xl sm:max-w-[590px] mx-auto my-10 text-center '>
        Turn text to <span className='text-blue-600'>image</span>, in seconds
      </motion.h1>


      <motion.p 
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.6, duration:0.8}}
      
      
      
      className='text-center max-w-xl mx-auto mt-5'>
        Unleash your creativty with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </motion.p>




      <motion.button 
      
      whileHover = {{scale: 1.05}} //ab mouse kisi component (jaise div, button) ke upar le jaata hai (hover karta hai), tab component halka sa bada ho jaata hai.
      whileTap = {{scale: 0.95}} //Jab user uss component ko click (tap) karta hai, tab vo halka sa chhota ho jaata hai.
      initial = {{opacity:0}} // Jab component screen pe aata hai initially, tab completely invisible hota hai (opacity 0).
      animate={{opacity:1}} //Phir gradually component fully visible ho jaata hai (opacity 1).
      transition={{default:{duration:0.5},opacity:{delay:0.8, duration:1}}}
      onClick={onClickhandler}

      className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
        Generate Images
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>


     <motion.div
     initial={{opacity:0}}
     animate = {{opacity:1}}
     transition={{delay:1, duration:1}}

     className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item,index)=>(   //.fill('') → Ye sab slots ko empty string se fill kar deta hai (bas map chalane ke liye).             .map((item, index) => (...)) → Har ek item pe loop chalega.


            <motion.img
            
            whileHover = {{scale:1.05, duration:0.5}}
            
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 

            // for ulternte image
            src={index % 2=== 0 ? assets.sample_img_2:assets.sample_img_1} 
            alt="" key={index} width= {70}/>
        ))}
     </motion.div>




     <motion.p
     
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:1,duration:0.5}}
     
     className='mt-2 text-neutral-600'>Generted images from imagify</motion.p>






    </motion.div>
  )
}

export default Header
