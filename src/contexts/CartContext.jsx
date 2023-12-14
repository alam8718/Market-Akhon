import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newItem = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newItem);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);

  // useEffect(() => {
  //   const fetchOneProduct = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products/1");
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchOneProduct();
  // }, []);

  return (
    <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
  );
};

export const useGlobalCart = () => {
  return useContext(CartContext);
};
