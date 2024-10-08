import React ,{useState,createContext, useContext} from 'react'
export const SideBarContext =createContext()


const SidebarProvider = ({children}) => {
  const[isOpen,SetIsOpen]=useState(false);

  const handleClose=()=>{
    SetIsOpen(false);
  }
  return (
    <SideBarContext.Provider value={{isOpen ,SetIsOpen,handleClose}}>
     {children}

    </SideBarContext.Provider>
  )
}

export default SidebarProvider;