import React from "react";
import {useGlobalSidebar} from "../../contexts/SidebarContext";

import {IoMdArrowForward} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import {useGlobalCart} from "../../contexts/CartContext";
import {Link} from "react-router-dom";
import CartItem from "../../pages/Home/CartItem";

function SideBar() {
  const {isOpen, handleClose} = useGlobalSidebar();
  const {cart, clearCart} = useGlobalCart();
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full h-full bg-white fixed top-0  md:w-[45%] xl:max-w-[30%] shadow-2xl z-20 px-4 lg:px-[35px] transition-all duration-300`}>
        <div className="flex items-center justify-between py-6 border-b border-b-black">
          <div className="text-sm font-semibold uppercase">
            Shopping Bag (0)
          </div>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
            onClick={() => handleClose()}>
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className="mt-8 ">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        {/* sidebar bottom  */}
        {cart.length < 1 ? (
          ""
        ) : (
          <>
            <div className="border my-4 ">
              <div className=" p-2 flex justify-between items-center ">
                <h1 className="uppercase font-semibold ">
                  <span>Total: </span> $ 10000
                </h1>
                <div
                  onClick={() => clearCart()}
                  className="cursor-pointer text-xl bg-red-500 py-4 w-12 h-12 rounded-full flex justify-center items-center text-white hover:bg-red-600 duration-300">
                  <FiTrash2 />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SideBar;
