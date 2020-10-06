import React, { useState, useEffect } from "react";
import Navbar from "../../components/navBar.js";
import ListProdutos from "../list-produtos/";
import api from "../../help/api";

function Main() {
  //set product
  const [intems, setItems] = useState();
  const [errors, setErrors] = useState(false);

  //get product

  useEffect(() => {
    async function fetchData() {
        const res = await api("products");
        setItems(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <ListProdutos intems={intems}/>
    </>
  );
}

export default Main;
