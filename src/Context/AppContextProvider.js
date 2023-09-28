import React,{createContext, useState} from 'react'
export const AppContext=createContext()

const AppContextProvider = ({children}) => {
    const [location,setLocation]=useState('')
    const [data,setData]=useState([])
  return (
    <>
     <AppContext.Provider value={{data,setData,location,setLocation}}>
          {children}
     </AppContext.Provider>      
  
    </>
  )
}

export default AppContextProvider
