import React, {createContext, useContext, useState, useEffect} from 'react'

const AppContext = createContext()

const AppProvdier = ({children}) => {
    const [darkmode, setDarkmode] = useState(false)
    const [sidebar, setSiderbar] = useState(false)
    const local = localStorage.getItem('theme')


    useEffect(() =>{
        if(local === 'dark' || (!local && window.matchMedia("(prefers-color-scheme: dark)").matches)){
            document.documentElement.classList.add('dark')
            setDarkmode(true)
        }else{
            document.documentElement.classList.remove('dark')
            setDarkmode(false)
        }
    },[])
    useEffect(() => {
        if(darkmode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }if(!darkmode){
            document.documentElement.classList.remove('dark')
           localStorage.setItem('theme','light')
        }
    },[darkmode])
    
  return (
    <AppContext.Provider
    value={{darkmode, setDarkmode, sidebar, setSiderbar }}
    >
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvdier}