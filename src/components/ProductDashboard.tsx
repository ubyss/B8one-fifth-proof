import React from "react";
import { Product } from "../interfaces/IOrderform";
import { useUser } from "./contexts/UserContext";
import ProductCard from "./ProductCard";
import ProductResume from "./ProductResume";

const ProductDashboard = () => {
  const { products, setProducts } = useUser();

  if (!products) return null;

  return (
    <div className="ProductDashboard">
      <div className="ProductDashboard__left">
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          listPrice={product.listPrice}
          price={product.price}
          shipping={product.shipping}
          name={product.name}
          setProducts={setProducts}
          products={products}
        />
      ))}
      </div>
      <ProductResume products={products}/>
    </div>
  );
};

export default ProductDashboard;
