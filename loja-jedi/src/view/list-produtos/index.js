import React, { useState } from "react";

function ListProdutos() {
  const [cont, setCont] = useState(0);

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
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://www.everestsp.com.br/wp-content/uploads/2017/02/background-rodape-everest-sp.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text">
                  Só é diferente na sua mente. Você precisa desaprender o que aprendeu.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onClick={() => setCont(cont + 1)}
                      >
                        add
                      </button>
                    </div>
                    <small class="text-muted">Quantidade: {cont} </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ListProdutos;
