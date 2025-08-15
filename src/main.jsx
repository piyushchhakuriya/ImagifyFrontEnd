
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext'
// Yeh line ka matlab hai ki hum BrowserRouter naam ka component React Router se import kar rahe hain.

// react-router-dom ek library hai jo React apps ke andar page navigation (routing) ka kaam karti hai.

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* is tag ke bina tum react main different pages par switch nhi kar sakte */}

  <AppContextProvider>
  
    <App />

 </AppContextProvider>   {/*it means you are wrapping your entire app (<App />) inside the context provider, so that any component inside <App /> can access the shared data (context). */}

  </BrowserRouter>
  
)
