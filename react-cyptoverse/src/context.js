import React, {useState, useEffect, useContext, createContext} from 'react'
 
const AppContext = createContext();

const AppProvider = ({children}) => {
    const [sidebarOpen, setSiderbarOpen] = useState(false)
    const [navIndex, setNavIndex] = useState(0)
    useEffect(() => {
        setNavIndex(0)
    }, [])
    
    return (
        <AppContext.Provider
        value={{sidebarOpen, setSiderbarOpen, navIndex,setNavIndex }}>
            {children}
        </AppContext.Provider>
    )
}
 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}