import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navBar.js";
import ListProdutos from "../list-produtos/";

function Main() {

  return (
    <>
      <Navbar />
      <ListProdutos />
    </>
  );
}

export default Main;
