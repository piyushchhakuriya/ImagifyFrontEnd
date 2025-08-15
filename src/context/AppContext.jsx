import {useState, createContext } from "react"; 
 //Ye React ka ek built-in function hai jiska kaam hota hai Context banana.
// Yani ek aisa global store jisme tum apna data rakh sakte ho jo pure app me kahin bhi access ho sakta hai.


export const AppContext = createContext()

const AppContextProvider = (props) =>{
    const[user, setUser] = useState(null); // user is available or not
    const[showLogin, setShowLogin] = useState(null); // user is logged in or not
    const [token, setToken] = useState(localStorage.getItem('token'))

    const [credit, setCredit]  = useState(false);



    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        user, setUser,
        showLogin, setShowLogin,
        backendUrl,token, setToken, credit, setCredit
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider