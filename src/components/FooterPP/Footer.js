import React from "react";
import "./footer.css" 

export const Footer = () => {
    return (
        <>
            <p id="mobile_feedback">
                Si estás interesado en recibir notificaciones o ayudarnos dandonos tu opinión acerca de la página, ingresa 
                <a href="">aqui</a>. <b>Gracias!!</b>
            </p>

            <footer class="container-fluid">
            {/* <!-- Redes y Contacto--> */}
            <div id="social">
                <h3>Redes y Contacto</h3><br></br>

                <div className="contact">
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <p>@iCook_ig</p>
                </div><hr></hr>

                <div className="contact">
                    <a href="https://twitter.com/?lang=es" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <p>@iCook_tw</p>
                </div><hr></hr>

                <div className="contact">
                    <a>
                      <i className="fa-solid fa-envelope" width="30px"></i>
                    </a>
                    <p>icookrecipes@gmail.com</p>
                </div>
            </div>

            {/* <!-- Regresando a iCook --> */}
            <div>
                <h3>Regrese a iCook</h3>

                <ul>
                    <li><a href="#princ">Princpiantes</a></li>
                    <li><a href="#countries">Nacionalidades</a></li>
                    <li><a href="#diet">Restricciones</a></li>
                </ul>
            </div>

            {/* <!-- Feedback --> */}
            <div id="feedback">
                <p>Nos es de mucha ayuda escucharte! Deja tu opinión sobre iCook aqui</p>

                <div className="input-group">
                    <span className="input-group-text">Comentarios</span>
                    <textarea className="form-control" aria-label="With textarea" rows="8"></textarea>
                  </div>
            </div>

            {/* <!-- Notificaciones --> */}
            <div id="notif">
                <p>Si deseas recibir notificaciones de iCook dejanos tu información</p><br></br>
                
                <div className="input-group">
                    <span className="input-group-text">Nombre y Apellido</span>
                    <input type="text" aria-label="First name" className="form-control" placeholder="Nombre"></input>
                    <input type="text" aria-label="Last name" className="form-control" placeholder="Apellido"></input>
                </div>
                
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingrese su email" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Edad</span>
                    <input type="number" className="form-control" aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" placeholder="Ingrese su edad aqui"></input>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                    <input type="tel" className="form-control" aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" placeholder="Ejem. 11-2345-6789" 
                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"></input>
                </div>

                <button type="button" className="btn btn-success">Enviar</button>
            </div>
        </footer>
        </>
    )
}