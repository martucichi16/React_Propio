import React from "react";
import{ navButtons } from "../../data/productos.js"
import "./NavBar.css"
//Mayuscula al principio: functional component

export const NavBar = () => {
    return (
      <>
        {/* Nav para computadora */}
        <nav className="container-fluid" id="nav_lg"> 
            {/* <img src="./assets/img/Logo_iCook.png" alt="Logo Web"> */}

            <div className="menuButton">
                <ul>
                  {navButtons.map(
                    ({text, link, dropdown}) => (
                      <li key={text}><a href={link} target="_blank">
                        <button type="button" className="btn btn-success">{text}</button></a></li>
                    )
                  )}

                  {/* <li>
                      <div className="btn-group">
                          <button type="button" className="btn btn-success dropdown-toggle" 
                          data-bs-toggle="dropdown" aria-expanded="false">
                            Recetas saladas
                          </button>
                          <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Entradas</a></li>
                            <li><a className="dropdown-item" href="#">Pastas</a></li>
                            <li><a className="dropdown-item" href="#">Carnes</a></li>
                            <li><a className="dropdown-item" href="#">Ensaladas</a></li>
                            <li><a className="dropdown-item" href="#">Sopas</a></li>
                            <li><a className="dropdown-item" href="#">Otros</a></li>
                          </ul>
                        </div>
                  </li>

                  <li>
                      <div className="btn-group">
                          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Recetas dulces
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Tortas y Budines</a></li>
                            <li><a className="dropdown-item" href="#">Galletitas</a></li>
                            <li><a className="dropdown-item" href="#">Tartas dulces</a></li>
                            <li><a className="dropdown-item" href="#">Postres</a></li>
                            <li><a className="dropdown-item" href="#">Helados</a></li>
                            <li><a className="dropdown-item" href="#">Otros</a></li>
                          </ul>
                        </div>
                  </li> */}
                </ul>

                <p>Si ya eres parte de la comunidad de iCook puedes iniciar sesión <a href="">aqui</a></p>
            </div>
        </nav>

        {/* Nav mobile  */}
        <div id="mobile_nav">
          <nav className="navbar navbar-light">
              <div className="container-fluid">
                  
                  <div id="logo">
                    {/* <img src="./assets/img/Logo_iCook.png" alt="Logo Web"> */}
                  </div>

              {/* Boton para abrir */}
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  
                  <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      {navButtons.map(
                      ({text, link, dropdown}) => (
                        <li key={text}><a href={link} target="_blank">
                          <button type="button" className="btn btn-success">{text}</button></a></li>
                      )
                      )}

                      {/* <li>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                              Recetas saladas
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Entradas</a></li>
                              <li><a className="dropdown-item" href="#">Pastas</a></li>
                              <li><a className="dropdown-item" href="#">Carnes</a></li>
                              <li><a className="dropdown-item" href="#">Ensaladas</a></li>
                              <li><a className="dropdown-item" href="#">Sopas</a></li>
                              <li><a className="dropdown-item" href="#">Otros</a></li>
                            </ul>
                          </div>
                      </li>

                      <li>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              Recetas dulces
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Tortas y Budines</a></li>
                              <li><a className="dropdown-item" href="#">Galletitas</a></li>
                              <li><a className="dropdown-item" href="#">Tartas dulces</a></li>
                              <li><a className="dropdown-item" href="#">Postres</a></li>
                              <li><a className="dropdown-item" href="#">Helados</a></li>
                              <li><a className="dropdown-item" href="#">Otros</a></li>
                            </ul>
                          </div>
                    </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
        </div>
        
      </>
    )
}