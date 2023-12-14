import React from "react";
import {BsPlus, BsEyeFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useGlobalCart} from "../../contexts/CartContext";
function ProductCard({item}) {
  const {id, title, image, price, category} = item;
  const {addToCart} = useGlobalCart();
  return (
    <>
      <div>
        {/* image & button */}
        <div className="h-[300px] border border-[#e4e4e4] mb-4 group overflow-hidden transition relative ">
          {/* image */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                src={image}
                alt="product image"
                className="max-h-[160px] group-hover:scale-110 duration-300"
              />
            </div>
          </div>
          {/* button  */}
          <div className="  absolute top-6 -right-16 p-1.5 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all gap-y-2 duration-300  ">
            <button
              onClick={() => addToCart(item, id)}
              className="flex justify-center items-center w-10 h-10 text-white bg-red-500">
              <BsPlus className="text-3xl" />
            </button>
            <Link
              to={`/product/${id}`}
              className="bg-white/80 border shadow-lg flex justify-center items-center w-10 h-10">
              <BsEyeFill className="" />
            </Link>
          </div>
        </div>

        {/* title price category */}
        <div>
          <div className="text-sm text-gray-500 capitalize">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <div className="font-semibold ">$ {price}</div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
