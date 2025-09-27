"use client";
import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

    const [isDarkMode,setIsDarkMode] = useLocalStorage('isDarkMode',true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };


  useEffect(()=>{
    localStorage.setItem('isDarkMode',JSON.stringify(isDarkMode))
  },[isDarkMode])

  useEffect(()=>{
    if(isDarkMode){
        document.documentElement.classList.add("dark-mode")
        document.documentElement.classList.remove("light-mode")
    }else{
        document.documentElement.classList.add("light-mode")
        document.documentElement.classList.remove("dark-mode")
    }
  },[isDarkMode])

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkMode Context is used in bad place");

  return context;
};
