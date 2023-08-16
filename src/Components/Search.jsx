import React, { useState, useEffect } from "react";
import "./Search.css";
import products from "../data/data.json";

const Search = ({ setProducts }) => {
  const [search, setSearch] = useState("");

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //   //metodo de filtrado
  const onSearchButton = () => {
    const results = !search
      ? products
      : products.filter(
          (dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            dato.code.toLowerCase().includes(search.toLocaleLowerCase())
        );

    setProducts(results);
  };

  //renderizo la vista
  return (
    <div className="containerSearch">
      <input
        value={search}
        onChange={searcher}
        type="text"
        className="form-control inputSearch"
      ></input>
      <button className="buttonSearch" onClick={onSearchButton}>
        Buscar
      </button>
    </div>
  );
};

export default Search;
