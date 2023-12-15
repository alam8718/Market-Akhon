import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (product, id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return {...item, amount: item.amount + 1};
      } else {
        return item;
      }
    });

    const checkingItemExists = updateCart.some((item) => item.id === id);

    if (!checkingItemExists) {
      updateCart.push({...product, amount: 1});
    }

    //!here into updateCart if() condition meets than the new amount value will be pushed otherwise the old one will stay that is declared in the first position...
    //!the above code is checking that if checkingItemExists is true it mean that the item is already into the cart so than according to the condition the value will br !true means false so the if() will not executed but if the  checkingItemExists s false that means !false is than true so the if() will execute on that time the amount will be 1  otherwise the amount will be incremented by one everytime the similar item is clicked
    setCart(updateCart);
  };
  console.log(cart);

  return (
    <CartContext.Provider value={{addToCart, cart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCart = () => {
  return useContext(CartContext);
};

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
