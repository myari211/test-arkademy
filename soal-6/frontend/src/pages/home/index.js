import React, { useState, useEffect } from "react";
import SearchBar from "../../component/searchBar";
import FoodTable from "./components/foodTable";

import axios from "axios";

function useProducts() {
  const [data, setData] = useState([]);

  async function getProducts() {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:3030/products"
      });
      setData(res.data);
    } catch (err) {
      setData([]);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return [data];
}

export default () => {
  const [data] = useProducts();
  return (
    <>
      <SearchBar></SearchBar>
      <FoodTable data={data}></FoodTable>
    </>
  );
};
