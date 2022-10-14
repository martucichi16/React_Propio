import React from "react";
import "./bienv.css"

export const Bienv = () => {
    return (
        <section className="container" id="bienvenida">
            <div className="row">
            <h1 className="col-12 col-lg-12"><b>Todos pueden cocinar</b></h1>
            <br></br><br></br>
                <p className="col-12 col-lg-12">
                    En iCook buscamos facilitar la cocina a todos aquellos interesados, sin importar
                    la edad, experiencia cocinando, faciliad para cocinar, creatividad, dietas, 
                    restricciones y demás diferencias. 
                    <br></br>
                    Aqui encontrarás recetas clasificadas según nacionalidad, según dificultad y
                    según categoria de plato (dulce o salado). Te invitamos a explorar nuestro sitio web.
                    <br></br>
                    Si estas buscando un lugar donde aprender y comer rico, llegaste al lugar indicado.
                    <br></br> 
                    <b>¡Bienvenido!</b>
                </p>
            </div>
        </section>
    )
}