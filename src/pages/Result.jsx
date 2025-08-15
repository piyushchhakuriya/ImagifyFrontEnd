import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)  //This is for imge
  const [isImageLoaded, setIsImageLoaded] = useState(false) // agar imge loaded nhi hai to input feild dikhayenge
  const [loading, setLoading] = useState(true)   // blue line ke liye
  const [input, setInput] = useState('')  // jo bhi input hum daalenge wo is input varaible main store ho jaayega
  
  const onSubmitHandler = async (e) =>{

  }
  return (
    <motion.form
    
    initial={{opacity: 0.2, y:100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, y: 0}}
    viewport={{once:true}}
    
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>



    <div>
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded' />
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>  
      </div>

{/* {loading && */}
       <p className={!loading?'hidden':''}>
        Loading...
       </p> 
        {/* } */}


    </div>

{/* jab imageload nhi hai tab ye dikhega */}
{!isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full '>
      <input onChange={e=> setInput(e.target.value)} value ={input}   // jab bhi user kuch likhta hai, setInput(e.target.value) se uska value update hota hai.
      
      
      type="text" placeholder='Describe what u want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />

      <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white'>Generate</button>
    </div>
 } 


{/* jab image load hai tab another imge generate karne ka option dikhega  */}
{isImageLoaded &&
     <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{     {/**click karne par false ho jaayega or descibe wali feild show ho jaayege */}
        setIsImageLoaded(false)
      }}
      className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>
        Generate Another
      </p>
       <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
     </div>

}
    </motion.form>
  )
}

export default Result
