import React from "react";
import "./princ.css";

export const Princ = () => {
    return (
        <section id="principiantes">
              <h1 id="princ">Recetas para Principiantes <br></br>
                <div className="bouncing_icons">
                  <i className="fa-solid fa-child-reaching"></i> <i className="fa-solid fa-child-reaching"></i>
                  <i className="fa-solid fa-child-reaching"></i>
                </div>
              </h1>
              <br></br>
              
              <div className="container" id="recipes">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="card">
                        {/* <img src="./assets/img/fideos_con_crema.jpg" className="card-img-top img-fluid" alt="Fideos con Crema"> */}
                        <div className="card-body">
                          <h5 className="card-title">Fideos con Crema</h5>
                          <p className="card-text">Un plato básico de pastas que encanta por su sencillez de sabores. Asi 
                            como se caracteriza por su simpleza en su gusto, lo es en su preparación.</p>
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-success">Ir a Receta</button>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="card">
                      {/* <img src="./assets/img/asado_horno.jpg" className="card-img-top img-fluid" alt="Asado al horno"  width="200px" height="135px" > */}
                      <div className="card-body">
                        <h5 className="card-title">Asado al Horno</h5>
                        <p className="card-text">Un clásico de la abuela: carne, verduritas y salsa de tomate. ¿Qué puede 
                          salir mal? Fácil de cocinar y perfecto para aparentar ser un experto.</p>
                      </div>
                      <div className="card-body">
                          <button type="button" className="btn btn-outline-success">Ir a Receta</button>
                      </div>
                    </div> 
                  </div>

                  <div className="col-lg-3">
                    <div className="card">
                      {/* <img src="./assets/img/salteado.jpg" className="card-img-top img-fluid" alt="Salteado de verduras"  width="200px" height="135px"> */}
                      <div className="card-body">
                        <h5 className="card-title">Salteado de Verduras</h5>
                        <p className="card-text">Una opción saludable y rápida. Después de peparar esta receta te aseguro que será
                          tu nuevo respaldo para salir del apuro y matar el hambre.</p>
                      </div>
                      <div className="card-body">
                          <button type="button" className="btn btn-outline-success">Ir a Receta</button>
                      </div>
                    </div> 
                  </div>

                  <div className="col-lg-3">
                    <div className="card">
                      {/* <img src="./assets/img/milanesa_ensalada.jpg" className="card-img-top img-fluid" alt="Milanesa con ensalada" width="200px" height="135px"> */}
                      <div className="card-body">
                        <h5 className="card-title">Milanesa con Ensalada</h5>
                        <p className="card-text">La receta que todos necesitamos saber para satisfacer ese antojo recurrente. 
                          Un plato muy elegido por niños, y tan fácil de hacer que hasta ellos pueden 
                          prepararlo.</p>
                      </div>
                      <div className="card-body">
                          <button type="button" className="btn btn-outline-success">Ir a Receta</button>
                      </div>
                    </div> 
                  </div>
              </div>
              </div>

          </section>
    )
}