import {createContext, useContext, useEffect, useState} from "react";

export const ProductContext = createContext();

//context provider
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  // fetching data from api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
        if (response.ok) {
          console.log("data all fetched");
        } else {
          throw new Error(`Failed to fetch Products: ${error}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hook
export const useProductContext = () => useContext(ProductContext);
