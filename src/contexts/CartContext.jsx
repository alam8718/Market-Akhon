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
    //!here into updateCart if() condition meets than the new amount value will be pushed otherwise the old one will stay that is declared in the first position...
    //!the above code is checking that if checkingItemExists is true it mean that the item is already into the cart so than according to the condition the value will br !true means false so the if() will not executed but if the  checkingItemExists s false that means !false is than true so the if() will execute on that time the amount will be 1  otherwise the amount will be incremented by one everytime the similar item is clicked

    const checkingItemExists = updateCart.some((item) => item.id === id);
    if (!checkingItemExists) {
      updateCart.push({...product, amount: 1});
    }

    setCart(updateCart);
  };
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clearing the cart
  const clearCart = () => {
    setCart([]);
  };

  //increment item
  const incrementItem = (id) => {
    const CartItem = cart.filter((item) => item.id === id);
    addToCart(CartItem, id);
  };

  //decrement item
  const decrementItem = (id) => {
    const CartItem = cart.filter((item) => item.id === id);
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: CartItem.amount - 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (CartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        incrementItem,
        decrementItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCart = () => {
  return useContext(CartContext);
};
