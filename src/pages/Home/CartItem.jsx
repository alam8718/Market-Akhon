import React from "react";
import {Link} from "react-router-dom";
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io";
import {useGlobalCart} from "../../contexts/CartContext";
function CartItem({item}) {
  const {image, id, title, amount, price} = item;
  const {removeFromCart, incrementItem, decrementItem} = useGlobalCart();
  return (
    <>
      <div className=" flex gap-x-4 py-2 px-2 lg:px-6 border border-gray-200 w-full font-light text-gray-500 ">
        <div className="w-full min-h-[150px] flex items-center gap-x-4   ">
          <Link to={`/product/${id}`}>
            <img src={image} className="max-w-[80px] " alt="" />
          </Link>

          <div className="w-full flex flex-col">
            {/* title and remove icons  */}
            <div className="flex  justify-between items-center mb-2">
              {/* title */}
              <Link
                to={`/product/${id}`}
                className="text-sm font-medium max-w-[240px] text-primary hover:underline  ">
                {title}
              </Link>
              {/* icons */}
              <div onClick={() => removeFromCart(id)}>
                <IoMdClose className="text-3xl cursor-pointer text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>

            <div className="flex  h-[40px] gap-x-2 text-sm ">
              <div className="flex items-center felx-1 h-full border text-primary font-medium max-w-[100px]">
                {/* minus icons */}
                <div
                  onClick={() => decrementItem(id)}
                  className="flex flex-1 h-full p-2 justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div
                  onClick={() => incrementItem(id)}
                  className="flex flex-1 h-full p-2 justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex flex-1 justify-around items-center">
                $ {price}
              </div>
              <div className="flex flex-1 justify-around items-center text-primary font-medium">{`${parseFloat(
                price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
