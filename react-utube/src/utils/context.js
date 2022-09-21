import React, { createContext, useContext, useState } from "react";
 
const AppContext = createContext()

const AppProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    return (
        <AppContext.Provider
        value={{
            selectedCategory, setSelectedCategory
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
