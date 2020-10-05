import React from "react";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

function CardProduto() {
  return (
    <>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Carrinho</h4>
          <p className="my-0 font-weight-normal">Total de itens: </p>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            $0 <small className="text-muted"> / real</small>
          </h1>
          <img
            className="card-img-top"
            src="https://www.everestsp.com.br/wp-content/uploads/2017/02/background-rodape-everest-sp.jpg"
            alt="Card image cap"
          />
          <div className="mt-2 d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Edit/>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Delete/>
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduto;
