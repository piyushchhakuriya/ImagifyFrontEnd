import React, { useContext } from 'react'
import{assets} from '../assets/assets'  //assets wale folder ,main se logo lene ke liye
import { Link, useNavigate } from 'react-router-dom' //Ye React Router ka ek component hai.Iska kaam hota hai — page reload ke bina ek page se dusre page pe navigate karna.
import { AppContext } from '../context/AppContext'



const Navbar = () => {
  
    const {user} = useContext(AppContext)
    const navigate = useNavigate()  // {/**hum link tag ka use tab karenge jab humare pass button ho like about home wagera wgare likin jab hum koi aisa kaam kare like form sbmit kat diya ya phir koi function chal gya uske baad kis page par apne aap jaanahai tab hum iska use karenge */}
    const{setShowLogin} = useContext(AppContext);


  return (
    <div className='flex items-center justify-between py-4'>
      <Link to = '/'> {/**when we click on logo we will redirect on home page */}
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />  {/*jsx main curly bracecs ke andar path likhte hain assets.naam or css lga di*/}
    
    </Link>
    <div>  {/**isme humne ek turnery operator lagaya hai agar user active hai to user login wala portion chalega nhi to logedout wala */}
        {
        user ? <div className='flex items-center gap-2 sm:gap-3'> {/**jab user logged in hai */}

             <button onClick={()=>navigate('/buy')} className=' cursor-pointer flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <img className = 'w-5' src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : 50</p>
             </button>

             <p className='text-gray-600 max-sm:hidden pl-4'>Hi, GreatStack</p>

             <div className='relative group'>
              <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>     {/**group-hover:block	Jab parent pe hover karoge tab ye block (visible) ho jayega */}
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
                 
              </div>

             </div>
        </div> 
        :
        <div className='flex items-center gap-2 sm:gap-5'>  {/**jab user logged out hai */}
            <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
            
            <button onClick={()=>{setShowLogin(true)}} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
        </div> 
    }
    </div>
   
    
    </div>
  )
}

export default Navbar
