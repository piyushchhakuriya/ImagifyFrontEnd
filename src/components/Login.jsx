import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import {motion} from "motion/react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [state, setState] = useState('Login');
  const{setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try{
      if(state==='Login'){
        const {data} = await axios.post(backendUrl+ '/api/user/login', {email,password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false);

        }else{
          toast.error(data.message);
          
        }

      }else{
        const {data} = await axios.post(backendUrl+ '/api/user/register', {name,email,password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false);

        }else{
          toast.error(data.message);
          
        }

      }

    }
    catch(error){
      toast.error(error.message);


    }
  }

  useEffect(()=>{  // it will stop the scolling 
    document.body.style.overflow = 'hidden';

    return ()=>{
      document.body.style.overflow = 'unset';
    }
  },[])
  return (
    <div
   
    
    className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

        <motion.form   onSubmit={onSubmitHandler}
        
    initial={{opacity: 0.2, y:50}}
    transition={{duration: 0.3}}
    whileInView={{opacity:1, y: 0}}
    viewport={{once:true}}
        className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome back! Please {state} to continue</p>

             {/* jab login karna hoga tab ye wala option nhi dikhega */}
            {state !=='Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-sm mt-4'>
                <img src={assets.profile_icon} alt="" width={20} />

                <input onChange = {e=> setname(e.target.value)} value = {name} className='outline-none text-sm text-sm'
                 type="text" placeholder='Full name' required />

            </div>} 




            <div  className='border px-6 py-2 flex items-center gap-2 rounded-sm mt-4'>

                <img src={assets.email_icon} alt="" width={20} />

                <input onChange = {e=> setEmail(e.target.value)} value = {email} className='outline-none text-sm text-sm'
                 type="email" placeholder='Enter Email' required />
            </div>


            <div className='border px-6 py-2 flex items-center gap-2 rounded-sm mt-4'>
                <img src={assets.lock_icon} alt="" width={20} />
                <input onChange = {e=> setPassword(e.target.value)} value = {password} className='outline-none text-sm text-sm'
                 type="password" placeholder='Password' required />
            </div>


            <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot password?</p>
            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'login': 'create account'}</button>
          
          
            { state ==='Login' && <p className='mt-5 text-center'>Don't have an account? <span onClick={()=>{setState('SignUp')}} className='text-blue-600 cursor-pointer'>Signup</span></p>}


            {state !== 'Login' && <p className='mt-5 text-center'>Already have an account? <span onClick={()=>{setState('Login')}} className='text-blue-600 cursor-pointer'>Login</span></p>}

            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />


        </motion.form>

      
    </div>
  )
}

export default Login





// npm install motion = Framer Motion helps you add smooth, beautiful animations to your React components easily — like fading in, sliding, scaling, rotating, etc.You don’t need to write complex CSS or JavaScript. Just use simple props in your React components.
// u can install it from motion framer website