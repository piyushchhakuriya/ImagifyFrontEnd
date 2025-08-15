// public folder main jo vite app ka sign tha use hatakar dusra icon daal diya
// asset folder main saari images or icons ko add kar liya or unhe export bhi kar diya for better interaction



/* FOR including TAILWIND
✅ 1. Install Tailwind CSS and Vite Plugin
bash
Copy code
npm install -D tailwindcss @tailwindcss/vite

 2. Create Tailwind Config File
 Create a file named tailwind.config.js in the project root (/client) and add:

js
Copy code
/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

//  3. Create Tailwind CSS File
// Inside the src folder, create a file named index.css and add:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//  4. Import Tailwind CSS in main.jsx
// In src/main.jsx, import the CSS at the top:
// import './index.css';
// Example full main.jsx:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


//  5. Configure Vite to Use Tailwind Plugin
// Create or edit vite.config.js in the root and add:
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

//  6. Run the Development Server
// npm run dev

// last check css
// function App() {
//   return (
//     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
//       <h1 className="text-5xl font-bold text-white">Tailwind is Working 🚀</h1>
//     </div>
//   );
// }

// export default App;



//  npm install react-router-dom








import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

  import { ToastContainer } from 'react-toastify';
// Routes	Ye ek container hai jo multiple Route ko handle karta hai.
// Route	Ye decide karta hai ki kaunsa component kaunsa URL pe dikhana hai.


import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'


const App = () => {
  const{showLogin} = useContext(AppContext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>  {/**for responsiveness like mobile tablet laptop sabke liye alag alag */}

     <ToastContainer position = 'bottom-right'/>

    <Navbar/> {/**ye Navbar sabke saath lagega har ek page ke saath */}
    { showLogin  && <Login/>} {/**agar showlogin true hoga tab hi login page dikhega */}
      <Routes>  {/* saari route ko handle karta hai*/}
      {/* saare pages ko jod liya */}
        <Route path= '/' element = {<Home/> }/>  {/**path main path de dita route ke liye or element main page de diya jaha khulega */}
        <Route path= '/result' element = {<Result/> }/>  {/**path main path de dita route ke liye or element main page de diya jaha khulega */}
        <Route path= '/buy' element = {<BuyCredit/> }/>  {/**path main path de dita route ke liye or element main page de diya jaha khulega */} 
      </Routes>
      <Footer/> {/**saare pages main footer jud jaayega */}
      
     
    </div>
  )
}

export default App
