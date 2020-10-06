import React, { useState } from "react";
import {
  CircularProgress,
  Link,
  Modal,
  Fade,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Transition,
  DialogActions,
  Slide,
} from "@material-ui/core";

function ListProdutos(props) {
  const { intems } = props;

  return (
    <>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Loja Jedi </h1>
            <p className="lead text-muted">
              A morte é parte natural da Vida. Regozije-se por aqueles que se
              uniram com a Força. Não lamente por eles. Não sinta falta deles. O
              apego leva à inveja. À sombra da cobiça, isso sim.
            </p>
          </div>
        </section>
        <div class="container">
          <div class="row">
            {intems ? (
              <>
                {intems.map((product) => (
                  <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                      <img
                        className="card-img-top"
                        src={product.picture}
                        alt={product.brand}
                      />
                      <div class="card-body">
                        <h5 className="card-title pricing-card-title">
                          {" "}
                          {product.title}{" "}
                        </h5>
                        <p class="card-text">
                          {product.description.slice(0, 100) + "... "}
                          {/* {moreInfo(product)} */}
                        </p>
                        <p className="card-title pricing-card-title">
                          {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}{" "}
                          <small className="text-muted"> / real</small>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              add
                            </button>
                          </div>
                          <small class="text-muted">
                            Quantidade: {product.quantity}{" "}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="mt-3 justify-content-between">
                  <CircularProgress />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default ListProdutos;
