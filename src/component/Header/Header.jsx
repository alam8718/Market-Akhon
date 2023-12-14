import React from "react";
import {useGlobalSidebar} from "../../contexts/SidebarContext";
import {BsBag} from "react-icons/bs";
function Header() {
  const {isOpen, setIsOpen} = useGlobalSidebar();
  return (
    <>
      <header className="bg-pink-200 flex justify-between px-6">
        <div>Header</div>
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
        </div>
      </header>
    </>
  );
}

export default Header;
