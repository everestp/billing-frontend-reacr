import { createContext, useEffect } from "react";

 export  const AppContext = createContext(null);
 export const AppContextProvider =(props)=>{
    useEffect(()=>{
        async function loadData(params) {
            
        }
    })


     const contextValue ={


     }
     return <AppContext.Provider value={contextValue}>
{props.children}
     </AppContext.Provider>
 } 