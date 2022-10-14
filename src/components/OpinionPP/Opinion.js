import React from "react";
import "./opinion.css"

export const Opinion = () => {
    return (
        <section id="resenas">
            <h4>No son solo nuestras palabras...</h4>
            <h2>¡Escucha a otros usuarios como vos!</h2>

            <div className="container-fliud">
            <div className="row">
                <div className="user col-12 col-lg-4">
                {/* <img src="./assets/img/usuario_1.png" alt="Img usuario"> */}

                <h5>Juan Perez</h5>
                <h6>@juan_perez_123</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam consequatur tempora aut 
                    ipsa. Eos, laudantium corporis? Inventore, voluptates dolorum ratione beatae hic sapiente 
                    reiciendis aperiam, possimus aspernatur harum explicabo.
                </p>
                </div>

                <div className="user col-12 col-lg-4">
                {/* <img src="./assets/img/usuario_2.png" alt="Img usuario"> */}

                <h5>Mica Gonzales</h5>
                <h6>@mikitagnzl</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam consequatur tempora aut 
                    ipsa. Eos, laudantium corporis? Inventore, voluptates dolorum ratione beatae hic sapiente 
                    reiciendis aperiam, possimus aspernatur harum explicabo.
                </p>
                </div>
                

                <div className="user col-12 col-lg-4">
                {/* <img src="./assets/img/usuario_3.png" alt="Img usuario"> */}

                <h5>Tomas Sanchez</h5>
                <h6>@tomanchez</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam consequatur tempora aut 
                    ipsa. Eos, laudantium corporis? Inventore, voluptates dolorum ratione beatae hic sapiente 
                    reiciendis aperiam, possimus aspernatur harum explicabo.
                </p>
                </div>
                
            </div>
            </div>

        </section>
    )
}