import React from "react";
import "./nac.css"

export const Nac = () => {
    return (
        <section id="nations">
            <div>
                <h1 id="countries">Recetas según Nacionalidad</h1>
            </div>

              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-block w-100">  
                      {/* <img src="./assets/img/flags/argentina.webp" alt="Bandera de Argentina" width="40px" className="img-fluid"> */}
                      <p>Comida argentina</p>
      
                      {/* <img src="./assets/img/flags/EEUU.webp" alt="Bandera de EEUU" width="40px"> */}
                      <p>Comida americana</p>
      
                      {/* <img src="./assets/img/flags/mexico.webp" alt="Bandera de México" width="40px"> */}
                      <p>Comida mexicana</p>
                  </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-block w-100">
                      {/* <img src="./assets/img/flags/francia.png" alt="Bandera de Francia" width="40px" className="img-fluid"> */}
                      <p>Comida francesa</p>
      
                      {/* <img src="./assets/img/flags/italia.png" alt="Bandera de Italia" width="40px" className="img-fluid"> */}
                      <p>Comida italiana</p>
      
                      {/* <img src="./assets/img/flags/inglaterra.jpg" alt="Bandera de Inglaterra" width="40px" className="img-fluid"> */}
                      <p>Comida inglesa</p>
                  </div>
                  </div>


                  <div className="carousel-item">
                    <div className="d-block w-100">
                      {/* <img src="./assets/img/flags/grecia.jpg" alt="Bandera de Grecia" width="40px" className="img-fluid"> */}
                      <p>Comida griega</p>
      
                      {/* <img src="./assets/img/flags/china.jfif" alt="Bandera de China" width="40px" className="img-fluid"> */}
                      <p>Comida china</p>
      
                      <i className="fa-solid fa-globe" height="200px"></i>
                      <p>Otros</p>
                  </div>
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" 
                data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" 
                data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
          </section>
    )
}