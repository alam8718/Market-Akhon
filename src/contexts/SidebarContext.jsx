import {createContext, useContext, useState} from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useGlobalSidebar = () => {
  return useContext(SidebarContext);
};
