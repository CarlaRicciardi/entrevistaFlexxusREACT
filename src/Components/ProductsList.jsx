import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const ProductsList = ({ products, setProducts }) => {
  // funcion para traer los datos del json
  const getData = () => {
    setProducts(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  return (
    <div className="productsListContainer">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            name={product.name}
            code={product.code}
            price={product.price}
            img={product.img}
          />
        ))
      ) : (
        <div>
          <div>
            <p>Cargando productos...</p>
          </div>
        </div>
      )}
      <p>{products.length} resultados</p>
    </div>
  );
};

export default ProductsList;
