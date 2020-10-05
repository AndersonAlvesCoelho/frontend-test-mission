import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './view/main';
import Carrinho from './view/carrinho';

const Routes = () => (
  <Router>
    <Route path="/" exact component={Main} />
    <Route path="/carrinho" exact component={Carrinho} />
  </Router>
);

export default Routes;
