import React, {useEffect, useState} from "react";
import {useGlobalSidebar} from "../../contexts/SidebarContext";
import {BsBag} from "react-icons/bs";
import {useGlobalCart} from "../../contexts/CartContext";
import {Link} from "react-router-dom";
import logo from "../../img/logo.svg";
function Header() {
  const {isOpen, setIsOpen} = useGlobalSidebar();
  const [isActive, setIsActive] = useState(false);
  const {itemAmount} = useGlobalCart();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <>
      <header
        className={`${
          isActive ? "bg-white shadow py-4" : "bg-none py-3"
        } fixed w-full z-10 transition-all `}>
        <div className=" flex justify-between items-center container mx-auto px-6 ">
          <Link to={"/"}>
            <div>
              <img src={logo} className="w-[40px]" alt="site logo " />
            </div>
          </Link>
          {/* cart part */}
          <div
            className="cursor-pointer  relative "
            onClick={() => setIsOpen(!isOpen)}>
            <BsBag className="text-2xl" />
            <div className="bg-red-600 absolute text-[12px]  w-[18px] h-[18px] flex justify-center items-center rounded-full top-0 -right-[12px] text-white">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
