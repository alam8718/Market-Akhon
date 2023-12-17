import React from "react";
import {useParams} from "react-router-dom";
import {useGlobalCart} from "../contexts/CartContext";
import {useProductContext} from "../contexts/ProductContext";
function ProductDetails() {
  const {products} = useProductContext();
  const {addToCart} = useGlobalCart();
  const {id} = useParams();

  // get matched item from url id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  const {image, title, description, price} = product;
  return (
    <>
      <div className=" mt-16 sm:mt-0 container mx-auto">
        <div className="h-screen flex flex-col lg:flex-row lg:justify-around  items-center justify-center gap-20">
          {/* image  */}
          <div className="lg:w-[100%]  flex justify-center">
            <img
              src={image}
              alt="single product img"
              className="w-[300px] lg:w-[450px]"
            />
          </div>
          {/* title and other  */}
          <div className="flex flex-col gap-8 items-center lg:items-start  lg:w-[80%] ">
            <h1 className="text-xl lg:text-2xl font-semibold text-center">{title}</h1>
            <h1 className="text-red-500 font-bold text-lg">$ {price}</h1>
            <h1 className="text-lg text-justify">{description}</h1>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white px-9 py-4 font-semibold">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
