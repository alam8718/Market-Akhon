import React from "react";
import {useProductContext} from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

function Home() {
  const {products} = useProductContext();
  // console.log(products);

  // filtering the men's women's category
  const filterCategory = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );
  // console.log(filterCategory);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0 ">
          {filterCategory.map((item) => (
            <div className="" key={item.id}>
              <ProductCard item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
