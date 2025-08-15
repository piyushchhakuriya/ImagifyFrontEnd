import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
// import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    
    className='flex flex-col items-center justify-center py-12'>
         <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
       Cutomers Testimonials
      </h1>
      <p className='text-gray-500 mb-12'>
       What Our Users Are Saying
      </p>




      <div className='flex flex-wrap gap-6'>
          {/**assets main jis data ko le rahe hain us data ko import karna hota hai */}
        {testimonialsData.map((testimonial, index)=>(   

               <div key={index} className='bg-white/20 pd-12 rounded-lg shadow-md border-0 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>

                <div className='flex flex-col items-center'>
                  <img src={testimonial.image} alt="" className='rounded-full w-14'/>
                  <h2 className='tex-xl font-semibold mt-3'>{testimonial.name}</h2>
                  <p className='text-gray-500 mb-4'>{testimonial.role}</p>


                <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((item,index)=>(
                  <img key={index} src={assets.rating_star} alt="" />
                  
                ))}
                </div>

                <p className='text-center text-sm text-gray-600 mb-4'>
                  {testimonial.text}
                </p>
                </div>

                {/* 
Array(testimonial.stars)      	Ek empty array banata hai jiska length stars ke equal hai. Example → 5 stars → [ , , , , ]
.fill()	                        Array ke sare elements ko empty string ya undefined se fill karta hai.
.map((item, index) => ...)	    Array ke har item pe loop chalata hai. index unique key ke liye use hota hai.
 */}


               </div>
        ))}


      </div>
      
    </motion.div>
  )
}

export default Testimonials
